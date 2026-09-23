import { NextRequest, NextResponse } from "next/server";
import {
  BLOCKED_SUBJECT, BLOCKLIST, CALENDLY_EVENT_TYPE, CALENDLY_PUBLIC_URL, FORM_ENDPOINT,
  LEAD_SUBJECT, MIN_SECONDS_ON_PAGE, NOTIFY_CC, RATE,
} from "@/sections/retention-90/server-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Server-side gate between the Retention Score form and the two third parties
   (formsubmit, Calendly). Every check answers 200 {ok:true} so a caller cannot tell
   which one fired; only a passing submission also gets bookingUrl. */

type Body = Record<string, string>;
type Reason = "honeypot" | "too_fast" | "email_blocked" | "store_blocked" | "rate_ip" | "rate_email" | "rate_store" | "invalid";

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

/* ---------- log: console (Webflow Cloud logs) + email row, never a lead row ---------- */
async function logBlocked(reason: Reason, meta: Record<string, string>) {
  console.log(JSON.stringify({ event: "retention_blocked", reason, ...meta, at: new Date().toISOString() }));
  try {
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: BLOCKED_SUBJECT + reason, _template: "table", _cc: NOTIFY_CC, reason, ...meta }),
      signal: TIMEOUT(),
    });
  } catch { /* logging must never break the response */ }
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
        body: JSON.stringify({ max_event_count: 1, owner: `https://api.calendly.com/event_types/${CALENDLY_EVENT_TYPE}`, owner_type: "EventType" }),
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
  try { body = (await req.json()) as Body; } catch { return NextResponse.json(OK); }

  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const ua = req.headers.get("user-agent") || "";
  const country = req.headers.get("cf-ipcountry") || "";
  const email = String(body.email || "").trim();
  const store = String(body.store || "").trim().toLowerCase();
  const name = String(body.name || "").trim();
  const meta = { email, store, name, ip, user_agent: ua, country };

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !store) { await logBlocked("invalid", meta); return NextResponse.json(OK); }

  /* 1. honeypot */
  if (String(body.company_website || "").trim()) { await logBlocked("honeypot", meta); return NextResponse.json(OK); }
  /* 2. time on page */
  const t0 = Number(body.t0 || 0);
  const secs = t0 > 0 ? (Date.now() - t0) / 1000 : -1;
  if (secs >= 0 && secs < MIN_SECONDS_ON_PAGE) { await logBlocked("too_fast", { ...meta, seconds: secs.toFixed(1) }); return NextResponse.json(OK); }
  /* 3-4. blocklists */
  if (emailBlocked(email)) { await logBlocked("email_blocked", meta); return NextResponse.json(OK); }
  if (storeBlocked(store)) { await logBlocked("store_blocked", meta); return NextResponse.json(OK); }
  /* 6-8. rate limits */
  if (ip !== "unknown" && limited("ip:" + ip, RATE.ip.max, RATE.ip.windowMs)) { await logBlocked("rate_ip", meta); return NextResponse.json(OK); }
  if (limited("email:" + (await sha(email)), RATE.email.max, RATE.email.windowMs)) { await logBlocked("rate_email", meta); return NextResponse.json(OK); }
  if (limited("store:" + store, RATE.store.max, RATE.store.windowMs)) { await logBlocked("rate_store", meta); return NextResponse.json(OK); }

  /* 9. passed: forward the lead with the two fields formsubmit never gave us */
  const lead: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) if (!["company_website", "t0"].includes(k)) lead[k] = String(v);
  lead._subject = LEAD_SUBJECT + store; lead._template = "table"; lead._cc = NOTIFY_CC;
  lead.ip = ip; lead.user_agent = ua; lead.country = country;
  try {
    await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(lead), signal: TIMEOUT() });
  } catch (e) { console.log(JSON.stringify({ event: "formsubmit_failed", error: String(e) })); }

  return NextResponse.json({ ok: true, bookingUrl: await bookingUrl(name, email, store) });
}
