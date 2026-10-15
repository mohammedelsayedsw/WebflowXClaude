/* SERVER ONLY. Omnisend contacts API (version 2026-03-15). The key lives in env
   OMNISEND_API_KEY; without it every call is a logged no-op, so the funnel never breaks. */

import { OMNISEND_API_KEY_FALLBACK } from "./server-config";

const API = "https://api.omnisend.com/api/contacts";
const VERSION = "2026-03-15";

const PROP_RE = /^r90_[a-z0-9_]{1,40}$/;
const TAG_RE = /^(retention-90|r90-[a-z0-9-]{1,40})$/;

export function cleanProps(p: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!p || typeof p !== "object") return out;
  for (const [k, v] of Object.entries(p as Record<string, unknown>)) {
    if (PROP_RE.test(k) && (typeof v === "string" || typeof v === "number")) out[k] = String(v).slice(0, 500);
  }
  return out;
}
export function cleanTags(t: unknown): string[] {
  return Array.isArray(t) ? [...new Set(t.map(String).filter((x) => TAG_RE.test(x)))].slice(0, 20) : [];
}

type Consent = { ip: string; userAgent: string; source: string };
type Upsert = {
  email: string; firstName?: string; tags: string[]; props: Record<string, string>;
  consent: Consent; phone?: string; sms?: boolean;
  /* true only on the form submit. Follow-up updates never touch the email status, so a
     later booking or SMS opt-in can't resubscribe someone who unsubscribed. */
  subscribeEmail?: boolean;
  /* true on follow-ups: Omnisend replaces the whole tag list on upsert, so read the
     contact's current tags first and add to them (an SMS opt-in then a booking keeps both). */
  mergeTags?: boolean;
};

async function currentTags(email: string, key: string): Promise<string[]> {
  try {
    const r = await fetch(`${process.env.OMNISEND_API_URL || API}?email=${encodeURIComponent(email)}`, {
      headers: { Authorization: `Omnisend-API-Key ${key}`, "Omnisend-Version": VERSION, Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    if (!r.ok) return [];
    const j = (await r.json()) as { contacts?: { tags?: unknown }[] };
    const t = j.contacts?.[0]?.tags;
    return Array.isArray(t) ? t.map(String) : [];
  } catch { return []; }
}

export async function omnisendUpsert(c: Upsert): Promise<string> {
  const key = process.env.OMNISEND_API_KEY || OMNISEND_API_KEY_FALLBACK;
  if (!key) { console.log(JSON.stringify({ event: "omnisend_skipped", reason: "no_key" })); return "skip:no_key"; }
  const createdAt = new Date().toISOString();
  /* Omnisend rejects an email identifier without channels.email (400 "Email channel is
     required"). Follow-ups (SMS opt-in, booking) fire in the same funnel session right
     after the opt-in, so they repeat the subscribed status; only the submit records consent. */
  const identifiers: unknown[] = [{
    type: "email", id: c.email,
    channels: { email: { status: "subscribed" } },
    ...(c.subscribeEmail ? { consent: { source: c.consent.source, ip: c.consent.ip, userAgent: c.consent.userAgent, createdAt } } : {}),
  }];
  if (c.phone) identifiers.push({
    type: "phone", id: c.phone,
    channels: { sms: { status: c.sms ? "subscribed" : "nonSubscribed" } },
    ...(c.sms ? { consent: { source: c.consent.source + "-sms", ip: c.consent.ip, userAgent: c.consent.userAgent, createdAt } } : {}),
  });
  const tags = c.mergeTags ? [...new Set([...(await currentTags(c.email, key)), ...c.tags])] : c.tags;
  const body: Record<string, unknown> = { identifiers, tags, customProperties: c.props };
  if (c.firstName) body.firstName = c.firstName;
  try {
    const r = await fetch(process.env.OMNISEND_API_URL || API, {
      method: "POST",
      headers: { Authorization: `Omnisend-API-Key ${key}`, "Omnisend-Version": VERSION, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) { console.log(JSON.stringify({ event: "omnisend_failed", status: r.status, body: (await r.text()).slice(0, 300) })); return `fail:${r.status}`; }
    return "ok";
  } catch (e) {
    console.log(JSON.stringify({ event: "omnisend_failed", error: String(e) }));
    return "fail:network";
  }
}
