import { NextRequest, NextResponse } from "next/server";
import { BLOCKLIST, CALENDLY_EVENT_TYPE, CALENDLY_PUBLIC_URL } from "@/sections/retention-90/server-config";
import { cleanProps, cleanTags, GA_SCOPE, omnisendUpsert } from "@/sections/retention-90/omnisend-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Growth Accelerator: server side of the Growth Scan email step.
   - Same checks as the Retention gate (honeypot, blocklists). Every outcome answers 200 {ok:true}.
   - A passing submission is saved to Omnisend (store "Scandiweb.com (demand)") with the
     growth-accelerator tag, ga-* tags and ga_* properties, which start the Growth Accelerator flows.
   - Only stores at €50K+ a month (revenue band sent by the browser, checked here) get a Calendly booking link back.
   The lead email itself is sent by the browser through lib/leadRelay, as for every funnel. */

const PAGE_URL = "https://scandiweb.com/solutions/growth-accelerator";
const TIMEOUT = () => AbortSignal.timeout(8000);

type Body = Record<string, string> & { omni?: { props?: unknown; tags?: unknown } };

function blocked(email: string, store: string): boolean {
  const e = email.toLowerCase();
  const s = store.toLowerCase().replace(/^www\./, "");
  let extra: { emails?: unknown; localParts?: unknown; stores?: unknown } = {};
  try { extra = JSON.parse(process.env.RETENTION_BLOCKLIST || "{}"); } catch { /* ignore bad env */ }
  const list = (base: string[], add: unknown) => [...base, ...(Array.isArray(add) ? add.map(String) : [])];
  if (list(BLOCKLIST.emails, extra.emails).some((x) => x.toLowerCase() === e)) return true;
  const local = e.split("@")[0] || "";
  if (list(BLOCKLIST.localParts, extra.localParts).some((re) => { try { return new RegExp(re, "i").test(local); } catch { return false; } })) return true;
  return list(BLOCKLIST.stores, extra.stores).some((x) => x.toLowerCase() === s);
}

async function calendlyLink(name: string, email: string, store: string): Promise<string> {
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
    } catch (e) { console.log(JSON.stringify({ event: "ga_calendly_link_failed", error: String(e) })); }
  }
  const q = new URLSearchParams({ name, email, a1: store, utm_source: "growth-scan", utm_medium: "result" });
  return base + (base.includes("?") ? "&" : "?") + q.toString();
}

export async function POST(req: NextRequest) {
  let body: Body;
  try { body = (await req.json()) as Body; } catch { return NextResponse.json({ ok: true }); }
  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const ua = req.headers.get("user-agent") || "";
  const country = req.headers.get("cf-ipcountry") || "";
  const email = String(body.email || "").trim();
  const store = String(body.store || "").trim().toLowerCase();
  const name = String(body.name || "").trim().slice(0, 80);
  /* The call gate is decided here, not in the browser: revenue bands r3+ are €50K+ a month. */
  const qualifiedRev = ["r3", "r4", "r5", "r6"].includes(String(body.rev));
  const tier = !qualifiedRev ? "cold" : String(body.when) === "explore" ? "warm" : "hot";

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !store) return NextResponse.json({ ok: true });
  if (String(body.company_website || "").trim() || blocked(email, store)) {
    console.log(JSON.stringify({ event: "ga_blocked", email, store, ip, country }));
    return NextResponse.json({ ok: true });
  }

  const qualified = tier !== "cold";
  const cal = qualified ? await calendlyLink(name, email, store) : "";
  const bookPage = qualified ? `${PAGE_URL}/book?${new URLSearchParams({ e: email, cal }).toString()}` : "";
  const phone = String(body.phone || "").trim().slice(0, 40);

  const omni = await omnisendUpsert({
    /* mergeTags: an existing contact (e.g. a Retention lead, or someone scanning twice) keeps its tags */
    email, firstName: name, subscribeEmail: true, mergeTags: true,
    tags: cleanTags([GA_SCOPE.base, `ga-${tier}`, ...(Array.isArray(body.omni?.tags) ? body.omni.tags : [])], GA_SCOPE),
    props: {
      ...cleanProps(body.omni?.props, GA_SCOPE),
      ga_tier: tier,
      ga_country: country,
      ...(bookPage ? { ga_book_url: bookPage } : {}),
      ga_page_url: PAGE_URL,
      ...(phone ? { ga_phone: phone } : {}),
    },
    consent: { ip, userAgent: ua, source: "scandiweb-growth-accelerator" },
  });
  const res = NextResponse.json({ ok: true, bookingUrl: cal, tier, ip, country });
  res.headers.set("x-omnisend", omni);
  return res;
}
