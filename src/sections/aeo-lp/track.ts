/* Funnel analytics for the AEO landing pages, forked from sections/retention-90/track.ts.
   Every step goes (1) to Marko's hub collector as a beacon (only when HUB_TRACKING is on), with
   fn = "aeo-hotels" | "aeo-clinics" so the hub can split funnels, and (2) to dataLayer as
   aeo_hotels_<event> / aeo_clinics_<event>. No PII in any event except the lead backup. */

import { HUB_TRACKING, type Funnel } from "./config";

export const TRACK_ENDPOINT = "https://hub.adiligence.com/track.php";

type Props = Record<string, string | number | boolean | undefined>;

/* Window.dataLayer / Window.fbq are declared globally in sections/retention-90/Retention90.tsx
   (dataLayer?: unknown[]; fbq?: (...args: unknown[]) => void); this file relies on those. */

let fn: Funnel = "aeo-hotels";
let sid = "";
let t0 = 0;
let seq = 0;
let testMode = false;

const dlPrefix = () => (fn === "aeo-hotels" ? "aeo_hotels_" : "aeo_clinics_");
const keys = () => (fn === "aeo-hotels" ? ["aeohsid", "aeoht0"] : ["aeocsid", "aeoct0"]);

function id() {
  try {
    const a = new Uint8Array(8); crypto.getRandomValues(a);
    return Array.from(a).map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch { return Math.random().toString(16).slice(2) + Date.now().toString(16); }
}

function session(): string {
  if (sid) return sid;
  const [k1, k2] = keys();
  try {
    const s = sessionStorage.getItem(k1);
    const t = Number(sessionStorage.getItem(k2) || 0);
    if (s && t) { sid = s; t0 = t; return sid; }
  } catch {}
  sid = id(); t0 = Date.now();
  try { sessionStorage.setItem(k1, sid); sessionStorage.setItem(k2, String(t0)); } catch {}
  return sid;
}

function beacon(rec: Props) {
  if (!HUB_TRACKING) return;
  const body = JSON.stringify(rec);
  try {
    if (!(navigator.sendBeacon && navigator.sendBeacon(TRACK_ENDPOINT, new Blob([body], { type: "text/plain" })))) {
      fetch(TRACK_ENDPOINT, { method: "POST", body, keepalive: true, mode: "no-cors", headers: { "Content-Type": "text/plain" } }).catch(() => {});
    }
  } catch {}
}

export function initTracking(funnel: Funnel) { fn = funnel; }
export function setTestMode(on: boolean) { testMode = on; }

export function device(): string {
  const w = typeof window !== "undefined" ? window.innerWidth : 0;
  return w && w < 768 ? "mobile" : w && w < 1100 ? "tablet" : "desktop";
}

/* Fire and forget. */
export function track(ev: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  const s = session();
  const rec: Props = { sid: s, fn, ev, n: ++seq, t: Date.now() - t0, ts: Date.now(), ...props };
  if (testMode) rec.test = 1;
  beacon(rec);
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: dlPrefix() + ev, aeo_sid: s, aeo_fn: fn, ...props }); } catch {}
}

/* Lead conversion for GTM: one clean event per submitted lead. */
export function pushLeadEvent(props: Props) {
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: dlPrefix() + "request", aeo_fn: fn, ...props }); } catch {}
}

/* Backup copy of a lead to the hub collector (kept in a separate auth-protected file). The only event with contact details. */
export function trackLead(lead: Record<string, string>) {
  if (typeof window === "undefined") return;
  beacon({ sid: session(), fn, ev: "lead", ts: Date.now(), ...(testMode ? { test: 1 } : {}), ...lead });
}

/* Called once on mount: page context (source, device, timezone, referrer). */
export function trackLanding() {
  const P = new URLSearchParams(window.location.search);
  if (P.get("notrack") === "1" || P.get("li_check")) testMode = true;
  let tz = "";
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch {}
  let ref = "";
  try { ref = document.referrer ? new URL(document.referrer).hostname : ""; } catch {}
  track("land", {
    src: P.get("utm_source") || "", med: P.get("utm_medium") || "", camp: P.get("utm_campaign") || "",
    cont: P.get("utm_content") || "", term: P.get("utm_term") || "",
    fbclid: P.has("fbclid") ? 1 : 0, li: P.has("li_fat_id") ? 1 : 0, gclid: P.has("gclid") ? 1 : 0,
    dev: device(), vw: window.innerWidth, tz, ref, lang: navigator.language || "",
  });
}

/* Landing folds: which section the visitor reached (children of the page root carrying data-fold). */
export function watchFolds(root: HTMLElement | null): () => void {
  if (!root || typeof IntersectionObserver === "undefined") return () => {};
  const kids = Array.from(root.querySelectorAll<HTMLElement>("[data-fold]"));
  let max = -1;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const i = kids.indexOf(e.target as HTMLElement);
      if (i > max) { max = i; track("scroll", { fold: (e.target as HTMLElement).dataset.fold || String(i), i }); }
    }
  }, { threshold: 0.35 });
  kids.forEach((k) => io.observe(k));
  return () => io.disconnect();
}

/* Outbound clicks. */
export function watchOutbound(): () => void {
  const h = (e: MouseEvent) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!a) return;
    try {
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin || u.pathname !== location.pathname) track("out", { href: u.hostname + u.pathname.slice(0, 60) });
    } catch {}
  };
  document.addEventListener("click", h, true);
  return () => document.removeEventListener("click", h, true);
}

/* Exit: last step the visitor was on when the tab was hidden or closed. */
export function watchExit(getStep: () => string): () => void {
  let stepAt = Date.now();
  let last = "";
  const fire = () => {
    const step = getStep();
    if (step !== last) stepAt = Date.now();
    track("exit", { step, sec: Math.round((Date.now() - stepAt) / 1000) });
    last = step;
  };
  const onVis = () => { if (document.visibilityState === "hidden") fire(); };
  window.addEventListener("pagehide", fire);
  document.addEventListener("visibilitychange", onVis);
  return () => { window.removeEventListener("pagehide", fire); document.removeEventListener("visibilitychange", onVis); };
}
