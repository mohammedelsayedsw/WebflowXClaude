/* SERVER ONLY. Omnisend wiring for the AEO funnels (hotels "aeoh", clinics "aeoc").
   Same contact API and helpers as retention-90 (sections/retention-90/omnisend-server.ts). */
import { AEOC_SCOPE, AEOH_SCOPE, type OmniScope } from "@/sections/retention-90/omnisend-server";

export type AeoFunnel = "hotels" | "clinics";

export const AEO: Record<AeoFunnel, { scope: OmniScope; source: string; bookPage: string }> = {
  hotels: { scope: AEOH_SCOPE, source: "scandiweb-aeo-hotels", bookPage: "https://scandiweb.com/solutions/aeo/hotels/book" },
  clinics: { scope: AEOC_SCOPE, source: "scandiweb-aeo-clinics", bookPage: "https://scandiweb.com/solutions/aeo/clinics/book" },
};

export const funnelOf = (v: unknown): AeoFunnel | null => (v === "hotels" || v === "clinics" ? v : null);

/* Personal link to our booking page; every email button uses it and appends "&utm_...". */
export function bookUrl(f: AeoFunnel, email: string, name: string): string {
  const q = new URLSearchParams({ e: email });
  if (name) q.set("n", name);
  return AEO[f].bookPage + "?" + q.toString();
}

export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export const PHONE_RE = /^\+[1-9]\d{6,14}$/;
/* Test submissions (an @example.com address) never reach Omnisend: they would use up the plan's contacts. */
export const isTestEmail = (e: string) => /@example\.com$/i.test(e);

export function clientIp(h: Headers): string {
  return h.get("cf-connecting-ip") || h.get("x-forwarded-for")?.split(",")[0].trim() || "";
}
