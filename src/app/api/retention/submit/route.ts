import { NextRequest, NextResponse } from "next/server";
import {
  BLOCKED_SUBJECT, BLOCKLIST, CALENDLY_EVENT_TYPE, CALENDLY_PUBLIC_URL, FORM_ENDPOINT,
  LEAD_SUBJECT, NOTIFY_CC, RATE,
} from "@/sections/retention-90/server-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Server-side gate between the Retention Score form and the two third parties
   (formsubmit, Calendly). Every check answers 200 {ok:true} so a caller cannot tell
   which one fired; only a passing submission also gets bookingUrl. */

type Body = Record<string, string>;
type Reason = "honeypot" | "email_blocked" | "store_blocked" | "rate_ip" | "rate_email" | "rate_store" | "invalid";

const OK = { ok: true } as const;
const TIMEOUT = () => AbortSignal.timeout(8000);

/* ---------- blocklist (config + env) ---------- */
function blocklist() {
  const b = { emails: [...BLOCKLIST.emails], localParts: [...BLOCKLIST.localParts], stores: [...BLOCKLIST.stores] };
  try {
    const extra = JSON.parse(process.env.RETENTION_BLOCKLIST || "{}");
    for (const k of ["emails", "localParts", "stores"] as const) if (Array.isArray(extra[k])) b[k].push(...extra[k].map(String));
  } catch { /* bad JSON in env: ignore, config list still applies */ }
  return b;
}
function emailBlocked(email: string): boolean {
  const b = blocklist();
  const e = email.toLowerCase();
  if (b.emails.some((x) => x.toLowerCase() === e)) return true;
  const local = e.split("@")[0] || "";
  return b.localParts.some((re) => { try { return new RegExp(re, "i").test(local); } catch { return false; } });
}
function storeBlocked(store: string): boolean {
  const s = store.toLowerCase().replace(/^www\./, "");
  return blocklist().stores.some((x) => x.toLowerCase() === s);
}

/* ---------- rate limits: in-memory per isolate (upgrade to KV when bound) ---------- */
const hits = new Map<string, number[]>();
function limited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (arr.length >= max) { hits.set(key, arr); return true; }
  arr.push(now); hits.set(key, arr);
  if (hits.size > 5000) hits.clear();
  return false;
}
async function sha(s: string): Promise<string> {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s.toLowerCase()));
  return Array.from(new Uint8Array(d)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

/* ---------- relay to formsubmit ----------
   formsubmit's AJAX endpoint validates the calling site through Origin / Referer / a
   browser User-Agent; a bare server fetch is rejected. Forward the visitor's headers. */
async function relay(req: NextRequest, payload: Record<string, string>): Promise<string> {
  const origin = req.headers.get("origin") || "https://scandiweb.com";
  const referer = req.headers.get("referer") || "https://scandiweb.com/solutions/retention-90";
  const ua = req.headers.get("user-agent") || "Mozilla/5.0 (compatible; scandiweb-retention-gate)";
  try {
    const r = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Origin: origin, Referer: referer, "User-Agent": ua },
      body: JSON.stringify(payload),
      signal: TIMEOUT(),
    });
    const text = await r.text();
    const ok = r.ok && /"success"\s*:\s*"?true/.test(text);
    if (!ok) console.log(JSON.stringify({ event: "formsubmit_rejected", status: r.status, body: text.slice(0, 300) }));
    return ok ? "ok" : `fail:${r.status}`;
  } catch (e) {
    console.log(JSON.stringify({ event: "formsubmit_failed", error: String(e) }));
    return "fail:network";
  }
}

/* ---------- log: console (Webflow Cloud logs) + email row, never a lead row ---------- */
async function logBlocked(req: NextRequest, reason: Reason, meta: Record<string, string>): Promise<string> {
  console.log(JSON.stringify({ event: "retention_blocked", reason, ...meta, at: new Date().toISOString() }));
  return relay(req, { _subject: BLOCKED_SUBJECT + reason, _template: "table", _cc: NOTIFY_CC, reason, ...meta });
}

/* Same body for every outcome; the relay result rides in a header so a failing relay is
   visible from a browser (curl/devtools) without server-log access. */
function done(relayResult: string, bookingUrl?: string) {
  const res = NextResponse.json(bookingUrl ? { ok: true, bookingUrl } : OK);
  res.headers.set("x-relay", relayResult);
  return res;
}

/* ---------- Calendly: single-use link when a token is present ---------- */
async function bookingUrl(name: string, email: string, store: string): Promise<string> {
  const token = process.env.CALENDLY_TOKEN;
  let base = process.env.CALENDLY_URL || CALENDLY_PUBLIC_URL;
  if (token) {
    try {
      const r = await fetch("https://api.calendly.com/scheduling_links", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ max_event_count: 1, owner: `https://api.calendly.com/event_types/${process.env.CALENDLY_EVENT_TYPE || CALENDLY_EVENT_TYPE}`, owner_type: "EventType" }),
        signal: TIMEOUT(),
      });
      const j = (await r.json()) as { resource?: { booking_url?: string } };
      if (j.resource?.booking_url) base = j.resource.booking_url;
      else console.log(JSON.stringify({ event: "calendly_link_failed", status: r.status }));
    } catch (e) { console.log(JSON.stringify({ event: "calendly_link_failed", error: String(e) })); }
  }
  const q = new URLSearchParams({ name, email, a1: store, utm_source: "retention-scan", utm_medium: "summary-modal" });
  return base + (base.includes("?") ? "&" : "?") + q.toString();
}

export async function POST(req: NextRequest) {
  let body: Body;
  try { body = (await req.json()) as Body; } catch { return done("skip"); }

  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const ua = req.headers.get("user-agent") || "";
  const country = req.headers.get("cf-ipcountry") || "";
  const email = String(body.email || "").trim();
  const store = String(body.store || "").trim().toLowerCase();
  const name = String(body.name || "").trim();
  const meta = { email, store, name, ip, user_agent: ua, country };

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !store) return done(await logBlocked(req, "invalid", meta));

  /* 1. honeypot */
  if (String(body.company_website || "").trim()) return done(await logBlocked(req, "honeypot", meta));
  /* 3-4. blocklists */
  if (emailBlocked(email)) return done(await logBlocked(req, "email_blocked", meta));
  if (storeBlocked(store)) return done(await logBlocked(req, "store_blocked", meta));
  /* 6-8. rate limits */
  if (ip !== "unknown" && limited("ip:" + ip, RATE.ip.max, RATE.ip.windowMs)) return done(await logBlocked(req, "rate_ip", meta));
  if (limited("email:" + (await sha(email)), RATE.email.max, RATE.email.windowMs)) return done(await logBlocked(req, "rate_email", meta));
  if (limited("store:" + store, RATE.store.max, RATE.store.windowMs)) return done(await logBlocked(req, "rate_store", meta));

  /* 9. passed: forward the lead with the two fields formsubmit never gave us */
  const lead: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) if (k !== "company_website") lead[k] = String(v);
  lead._subject = LEAD_SUBJECT + store; lead._template = "table"; lead._cc = NOTIFY_CC;
  lead.ip = ip; lead.user_agent = ua; lead.country = country;
  const relayResult = await relay(req, lead);
  return done(relayResult, await bookingUrl(name, email, store));
}
