import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { CALENDLY_EVENT_TYPE, CALENDLY_WEBHOOK_TOKEN_FALLBACK } from "@/sections/retention-90/server-config";
import { omnisendFind, omnisendRetag } from "@/sections/retention-90/omnisend-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Calendly webhook for the Retention booking (Nika's "Growth Intro Meeting").
   Tags the lead in Omnisend so the no-show automation can run:
   - invitee_no_show.created (Nika clicks "Mark as no-show"): + r90-noshow, - r90-rebooked
   - invitee_no_show.deleted (the mark is removed):          - r90-noshow
   - invitee.created on the Growth Intro Meeting:            no-show earlier? + r90-rebooked, - r90-noshow
                                                             not booked yet? + r90-booked (stops the nurture)
   Only acts on contacts already in Omnisend with the retention-90 or growth-accelerator tag
   (Growth Accelerator contacts get the same tags with the ga- prefix); never creates one and
   never changes their email status.

   Setup: the token lives only in env CALENDLY_WEBHOOK_TOKEN (Webflow Cloud). GET ?setup=1 makes
   sure the Calendly subscription to this URL exists (creates it if missing). The signing key is
   derived from the token, so there is no second secret. Neither is ever returned or logged. */

const ORG = "https://api.calendly.com/organizations/24f61912-87ef-4344-ac6b-dd99588a27e3";
const HOOK_URL = "https://scandiweb.com/solutions/api/retention/calendly";
const EVENTS = ["invitee.created", "invitee_no_show.created", "invitee_no_show.deleted"];
const API = "https://api.calendly.com";
const MAX_AGE_SEC = 600;

const token = () => process.env.CALENDLY_WEBHOOK_TOKEN || CALENDLY_WEBHOOK_TOKEN_FALLBACK;
const signingKey = (t: string) => createHash("sha256").update(t + ":r90-calendly-webhook").digest("hex");
const json = (body: unknown, status = 200) => NextResponse.json(body, { status });

/* ---------- one-time setup: ensure the subscription exists ---------- */
export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get("setup") !== "1") return json({ ok: true, configured: !!token() });
  const t = token();
  if (!t) return json({ ok: false, state: "no_token" });
  const h = { Authorization: `Bearer ${t}`, "Content-Type": "application/json" };
  try {
    const list = await fetch(`${API}/webhook_subscriptions?organization=${encodeURIComponent(ORG)}&scope=organization&count=100`, { headers: h, signal: AbortSignal.timeout(8000) });
    if (!list.ok) return json({ ok: false, state: "list_failed", status: list.status });
    const lj = (await list.json()) as { collection?: { uri: string; callback_url: string; events: string[]; state: string }[] };
    const mine = (lj.collection || []).filter((s) => s.callback_url === HOOK_URL);
    const good = mine.find((s) => s.state === "active" && EVENTS.every((e) => s.events.includes(e)));
    if (good) return json({ ok: true, state: "exists" });
    for (const s of mine) await fetch(s.uri, { method: "DELETE", headers: h, signal: AbortSignal.timeout(8000) });
    const cr = await fetch(`${API}/webhook_subscriptions`, {
      method: "POST", headers: h, signal: AbortSignal.timeout(8000),
      body: JSON.stringify({ url: HOOK_URL, events: EVENTS, organization: ORG, scope: "organization", signing_key: signingKey(t) }),
    });
    if (!cr.ok) { console.log(JSON.stringify({ event: "calendly_hook_create_failed", status: cr.status, body: (await cr.text()).slice(0, 300) })); return json({ ok: false, state: "create_failed", status: cr.status }); }
    return json({ ok: true, state: "created" });
  } catch (e) {
    console.log(JSON.stringify({ event: "calendly_hook_setup_error", error: String(e) }));
    return json({ ok: false, state: "error" });
  }
}

/* ---------- webhook ---------- */
function validSignature(raw: string, header: string, t: string): boolean {
  const parts = Object.fromEntries(header.split(",").map((p) => p.trim().split("=", 2) as [string, string]));
  const ts = Number(parts.t), v1 = parts.v1 || "";
  if (!ts || !v1 || Math.abs(Date.now() / 1000 - ts) > MAX_AGE_SEC) return false;
  const want = createHmac("sha256", signingKey(t)).update(`${parts.t}.${raw}`).digest("hex");
  const a = Buffer.from(want), b = Buffer.from(v1);
  return a.length === b.length && timingSafeEqual(a, b);
}

type Hook = { event?: string; payload?: { email?: string; scheduled_event?: { event_type?: string } } };

export async function POST(req: NextRequest) {
  const t = token();
  const raw = await req.text();
  if (!t || !validSignature(raw, req.headers.get("calendly-webhook-signature") || "", t)) return json({ ok: false }, 401);
  let h: Hook;
  try { h = JSON.parse(raw) as Hook; } catch { return json({ ok: true }); }
  const ev = h.event || "";
  const email = String(h.payload?.email || "").trim().toLowerCase();
  const et = String(h.payload?.scheduled_event?.event_type || "");
  if (!EVENTS.includes(ev) || !email) return json({ ok: true, skip: "event" });
  /* only the Retention booking; no-show payloads without an event type fall through to the contact check */
  if (et && !et.endsWith("/" + CALENDLY_EVENT_TYPE)) return json({ ok: true, skip: "event_type" });

  const c = await omnisendFind(email);
  if (c === "error") return json({ ok: false, state: "omnisend_unreachable" }, 503); /* Calendly retries */
  /* Growth Accelerator contacts (growth-accelerator tag) get ga-* tags; Retention Score contacts r90-* */
  const p = c && c.tags.includes("growth-accelerator") ? "ga" : c && c.tags.includes("retention-90") ? "r90" : "";
  if (!c || !p) return json({ ok: true, skip: "not_a_funnel_contact" });

  const today = new Date().toISOString().slice(0, 10);
  const has = (x: string) => c.tags.includes(x);
  const T = (x: string) => `${p}-${x}`;
  let tags = c.tags, props: Record<string, string> = {};
  if (ev === "invitee_no_show.created") {
    tags = [...c.tags.filter((x) => x !== T("rebooked")), T("noshow")];
    props = { [`${p}_noshow`]: "yes", [`${p}_noshow_date`]: today };
  } else if (ev === "invitee_no_show.deleted") {
    tags = c.tags.filter((x) => x !== T("noshow"));
    props = { [`${p}_noshow`]: "no" };
  } else if (has(T("noshow"))) {
    tags = [...c.tags.filter((x) => x !== T("noshow")), T("rebooked")];
    props = { [`${p}_rebooked`]: "yes", [`${p}_rebooked_date`]: today };
  } else if (!has(T("booked"))) {
    tags = [...c.tags, T("booked")];
    props = { [`${p}_booked`]: "yes", [`${p}_booked_date`]: today };
  } else {
    return json({ ok: true, skip: "already_booked" });
  }
  const result = await omnisendRetag(c, tags, props);
  console.log(JSON.stringify({ event: "calendly_hook", type: ev, ns: p, result }));
  return json({ ok: result === "ok", result }, result === "ok" ? 200 : 503);
}
