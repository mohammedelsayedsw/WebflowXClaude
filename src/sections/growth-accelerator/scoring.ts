/* Growth Score: six areas, each 0-100, weighted as published on the result page.
   Inputs are the visitor's answers and what the homepage scan could see from outside.
   If the scan failed (site blocked us or timed out), areas fall back to the answers alone.
   This is a directional score; the plan call checks it against the store's real numbers. */

import type { ScanResult } from "@/app/api/growth/scan/route";
import { AREAS, QUESTIONS, type AreaKey } from "./copy";

export type Answers = { goal?: string; market?: string; channels?: string[]; rev?: string; spend?: string; when?: string };
export type Tier = "hot" | "warm" | "cold";
export type Fix = { area: AreaKey; title: string; why: string; value: number };

const num = (k: "rev" | "spend", v?: string) => QUESTIONS.find((q) => q.k === k)?.o.find((o) => o.v === v)?.n ?? 0;
export const revenue = (a: Answers) => num("rev", a.rev);
export const adSpend = (a: Answers) => num("spend", a.spend);
const clamp = (n: number, lo = 5, hi = 97) => Math.max(lo, Math.min(hi, Math.round(n)));

export function areaScores(a: Answers, s: ScanResult | null): Record<AreaKey, number> {
  const ch = new Set(a.channels || []);
  const scanned = !!s?.ok;
  const rev = revenue(a), spend = adSpend(a);
  const ratio = rev ? spend / rev : 0;

  let paid = ch.has("meta") || ch.has("google") || ch.has("tiktok") ? 45 : 25;
  if (scanned) paid += (s?.metaPixel ? 15 : 0) + (s?.googleAds ? 10 : 0) + (s?.tiktok ? 5 : 0);
  else paid += 10;
  paid += ratio >= 0.05 && ratio <= 0.2 ? 15 : ratio > 0.3 ? -5 : ratio > 0 ? 5 : 0;

  let retention = ch.has("email") ? 40 : 15;
  if (scanned) retention += (s?.esp ? 25 : 0) + (s?.popup ? 15 : 0) + (s?.reviews ? 8 : 0);
  else retention += 15;

  let search = ch.has("seo") ? 45 : 25;
  if (scanned) search += (s?.productSchema ? 8 : 0) + (s?.orgSchema ? 12 : 0) + (s?.metaDescription ? 10 : 0) + (s?.title ? 5 : 0) + (s?.hreflang ? 5 : 0);
  else search += 15;

  /* AI answers is an estimate from the signals AI engines read (structured data, reviews, search
     presence). The real check (buyer questions run through ChatGPT, Gemini and Perplexity) runs
     before the plan call. */
  let ai = 15 + (ch.has("seo") ? 15 : 0);
  if (scanned) ai += (s?.productSchema ? 8 : 0) + (s?.orgSchema ? 20 : 0) + (s?.reviews ? 12 : 0) + (s?.metaDescription ? 6 : 0);
  else ai += 15;

  let conversion = 45;
  if (scanned) {
    const ms = s?.ms ?? 3000, kb = s?.kb ?? 900;
    conversion += (ms < 700 ? 18 : ms < 1500 ? 10 : 0) + (kb < 350 ? 10 : kb < 800 ? 5 : -5) + (s?.reviews ? 12 : 0) + (s?.platform ? 5 : 0);
  } else conversion += 10;

  let tracking = 10;
  if (scanned) tracking += (s?.googleTag ? 28 : 0) + (s?.metaPixel ? 17 : 0) + (s?.consent ? 18 : 0) + (s?.serverSide ? 14 : 0) + (s?.capi ? 10 : 0);
  else tracking += 30;

  return {
    paid: clamp(paid), retention: clamp(retention), search: clamp(search),
    ai: clamp(ai), conversion: clamp(conversion), tracking: clamp(tracking),
  };
}

export function growthScore(sc: Record<AreaKey, number>): number {
  return clamp(AREAS.reduce((t, x) => t + sc[x.k] * x.w, 0), 8, 94);
}

export function band(n: number): "poor" | "fair" | "good" {
  return n < 45 ? "poor" : n < 70 ? "fair" : "good";
}

/* 15% of the midpoint of the revenue band the visitor picked. The real target is set on the call
   from the store's own sales (same 90 days last year). */
export const target15 = (a: Answers) => Math.round((revenue(a) * 0.15) / 100) * 100;

/* Estimated monthly opportunity per fix: the room left in each area, weighted, applied to revenue.
   Capped so a weak score never promises more than a third of current revenue. */
export function fixes(a: Answers, s: ScanResult | null, sc: Record<AreaKey, number>): Fix[] {
  const rev = revenue(a);
  const total = rev * Math.min(0.33, ((100 - growthScore(sc)) / 100) * 0.5);
  const gaps = AREAS.map((x) => ({ k: x.k, g: (100 - sc[x.k]) * x.w }));
  const sum = gaps.reduce((t, x) => t + x.g, 0) || 1;
  const val = (k: AreaKey) => Math.round(((total * (gaps.find((x) => x.k === k)?.g || 0)) / sum) / 100) * 100;
  const ch = new Set(a.channels || []);
  const ok = !!s?.ok;
  const out: Fix[] = [];
  const add = (area: AreaKey, title: string, why: string) => out.push({ area, title, why, value: val(area) });

  if (ok && !s?.serverSide && !s?.capi) add("tracking", "Move tracking server-side", `We found ${s?.googleTag ? "Google tags" : "no Google tag"}${s?.metaPixel ? " and a Meta pixel" : ""} running only in the browser. Browser tracking now misses a large share of conversions, so the ad platforms optimise on partial data.`);
  else if (!ok) add("tracking", "Check what your tracking misses", "Browser-only tracking now misses a large share of conversions. We check your setup against your store’s real orders.");
  if (ok && !s?.consent) add("tracking", "Add consent mode", "No cookie-consent tool showed up on your homepage. In Europe that limits what Google and Meta can measure and target.");

  if (ok && !s?.esp) add("retention", "Start capturing and following up with visitors", "We couldn’t see an email platform on your homepage, so visitors who don’t buy today are likely lost. A welcome and cart flow usually pays back first.");
  else if (ok && !s?.popup) add("retention", "Capture more emails before visitors leave", `${s?.esp} is installed, but we didn’t see a sign-up form. Every flow you run depends on the list it starts from.`);
  else if (!ch.has("email")) add("retention", "Turn email into a revenue channel", "You didn’t list email or SMS as a revenue source. Strong stores earn up to a third of their online revenue from email and SMS, most of it from automated flows.");
  else add("retention", "Test your flows against better ones", "Flows that exist aren’t the same as flows that earn. We split-test rebuilt flows against what runs today.");

  if (ok && !s?.orgSchema) add("ai", "Tell AI engines who you are", "Your homepage has no structured data about the store itself (name, logo, contact, reviews). ChatGPT, Gemini and Perplexity lean on it to name and recommend shops.");
  else add("ai", "Check what ChatGPT says about your category", "We run 15 buyer questions in your market’s language through ChatGPT, Gemini and Perplexity, and show where you’re named, where a competitor is, and what they get wrong.");

  if (ok && !s?.metaDescription) add("search", "Fix the basics Google reads first", "We couldn’t find a meta description on your homepage, so Google likely writes its own snippet. Category pages and product data usually hide bigger wins.");
  else if (!ch.has("seo")) add("search", "Build organic search into a channel", "You didn’t list Google organic as a revenue source. Category pages built around what buyers search for are the cheapest traffic a store can own.");

  if (!(ch.has("meta") || ch.has("google"))) add("paid", "Open a paid channel you can measure", "You don’t run Meta or Google ads yet. Started on clean tracking, paid traffic is the fastest lever to test.");
  else if (ok && !s?.metaPixel && ch.has("meta")) add("paid", "Fix Meta measurement before spending more", "You run Meta ads, but we couldn’t see a Meta pixel in your homepage code. If it isn’t firing, Meta optimises blind. Worth checking first.");
  else add("paid", "Rebuild campaigns around new-customer revenue", "Most accounts optimise to platform ROAS, which counts returning buyers and view-throughs. We set targets on new-customer revenue and blended return.");

  if (ok && (s?.ms ?? 0) > 1500) add("conversion", "Speed up the first page load", `Your homepage took ${((s?.ms ?? 0) / 1000).toFixed(1)} seconds to answer our scanner. On mobile, every second costs orders.`);
  else if (ok && !s?.reviews) add("conversion", "Show reviews where buyers decide", "We saw no review platform on your homepage. Reviews on product and checkout pages are one of the most reliable conversion lifts.");
  else add("conversion", "Remove friction between ad and order", "We map the mobile path from ad to checkout and cut the steps that lose buyers.");

  /* weakest areas first, one fix per area, top five */
  const seen = new Set<AreaKey>();
  return out
    .sort((x, y) => sc[x.area] - sc[y.area])
    .filter((f) => (seen.has(f.area) ? false : (seen.add(f.area), true)))
    .slice(0, 5);
}

export function tierOf(a: Answers, gateEur: number): Tier {
  if (revenue(a) < gateEur) return "cold";
  return a.when === "explore" ? "warm" : "hot";
}

export const eur = (n: number) => "€" + Math.round(n).toLocaleString("en-IE");
export const eurK = (n: number) => (n >= 1000000 ? "€" + (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M" : n >= 1000 ? "€" + Math.round(n / 1000) + "K" : "€" + Math.round(n));

export function cleanDomain(v: string): string {
  return v.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[/?#]/)[0];
}
export const validDomain = (v: string) => /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/.test(v);
