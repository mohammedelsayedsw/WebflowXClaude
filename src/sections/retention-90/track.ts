/* Funnel analytics for the Retention Score page.
   Every step goes (1) to Marko's hub collector as a beacon, which survives tab close, and
   (2) to dataLayer as r90_<event> so GA4 / Hotjar see the same steps.
   No PII ever leaves: no email, no name. The store domain travels only on submit so the
   funnel can be reconciled with lead emails. */

export const TRACK_ENDPOINT = "https://hub.adiligence.com/track.php";

type Props = Record<string, string | number | boolean | undefined>;

let sid = "";
let t0 = 0;
let seq = 0;
let testMode = false;

function id() {
  try {
    const a = new Uint8Array(8); crypto.getRandomValues(a);
    return Array.from(a).map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch { return Math.random().toString(16).slice(2) + Date.now().toString(16); }
}

function session(): string {
  if (sid) return sid;
  try {
    const s = sessionStorage.getItem("r90sid");
    const t = Number(sessionStorage.getItem("r90t0") || 0);
    if (s && t) { sid = s; t0 = t; return sid; }
  } catch {}
  sid = id(); t0 = Date.now();
  try { sessionStorage.setItem("r90sid", sid); sessionStorage.setItem("r90t0", String(t0)); } catch {}
  return sid;
}

export function device(): string {
  const w = typeof window !== "undefined" ? window.innerWidth : 0;
  return w && w < 768 ? "mobile" : w && w < 1100 ? "tablet" : "desktop";
}

export function setTestMode(on: boolean) { testMode = on; }

/* Fire and forget. sendBeacon with text/plain avoids a CORS preflight and is delivered
   even while the page unloads; fetch keepalive is the fallback. */
export function track(ev: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  const s = session();
  const rec: Props = { sid: s, ev, n: ++seq, t: Date.now() - t0, ts: Date.now(), ...props };
  if (testMode) rec.test = 1;
  const body = JSON.stringify(rec);
  try {
    if (!(navigator.sendBeacon && navigator.sendBeacon(TRACK_ENDPOINT, new Blob([body], { type: "text/plain" })))) {
      fetch(TRACK_ENDPOINT, { method: "POST", body, keepalive: true, mode: "no-cors", headers: { "Content-Type": "text/plain" } }).catch(() => {});
    }
  } catch {}
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "r90_" + ev, r90_sid: s, ...props }); } catch {}
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

/* Landing folds: which section the visitor reached. Children of #screen-lp, in order. */
export const FOLDS = ["hero", "proof", "facts", "cases", "steps", "flows", "team", "terms", "objections", "call"];

export function watchFolds(root: HTMLElement | null): () => void {
  if (!root || typeof IntersectionObserver === "undefined") return () => {};
  const kids = Array.from(root.children) as HTMLElement[];
  let max = -1;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const i = kids.indexOf(e.target as HTMLElement);
      if (i > max) { max = i; track("scroll", { fold: FOLDS[i] || String(i), i }); }
    }
  }, { threshold: 0.35 });
  kids.forEach((k) => io.observe(k));
  return () => io.disconnect();
}

/* Outbound clicks (header / footer links leaving the funnel). */
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
    if (step !== last) { stepAt = Date.now(); }
    track("exit", { step, sec: Math.round((Date.now() - stepAt) / 1000) });
    last = step;
  };
  const onVis = () => { if (document.visibilityState === "hidden") fire(); };
  window.addEventListener("pagehide", fire);
  document.addEventListener("visibilitychange", onVis);
  return () => { window.removeEventListener("pagehide", fire); document.removeEventListener("visibilitychange", onVis); };
}

/* Calendly posts lifecycle messages to the parent page while its iframe is open. */
export function watchCalendly(): () => void {
  const h = (e: MessageEvent) => {
    if (typeof e.origin !== "string" || !/calendly\.com$/.test(new URL(e.origin).hostname)) return;
    const ev = e.data && typeof e.data === "object" ? (e.data as { event?: string }).event : "";
    if (!ev || !ev.startsWith("calendly.")) return;
    const map: Record<string, string> = {
      "calendly.event_type_viewed": "cal_view",
      "calendly.date_and_time_selected": "cal_date",
      "calendly.event_scheduled": "cal_booked",
    };
    if (map[ev]) track(map[ev]);
  };
  window.addEventListener("message", h);
  return () => window.removeEventListener("message", h);
}
