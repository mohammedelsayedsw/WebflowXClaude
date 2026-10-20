import { NextRequest, NextResponse } from "next/server";
import { cleanProps, cleanTags, omnisendUpsert } from "@/sections/retention-90/omnisend-server";
import { AEO, EMAIL_RE, clientIp, funnelOf, isTestEmail } from "@/sections/aeo-lp/omni-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Follow-up for an AEO contact: kind "booked" adds aeoh-booked / aeoc-booked (selling emails stop,
   the thank-you starts). Tags are merged with the contact's current tags, never replaced.
   Callers: the booking popup on the landing pages and /aeo/{hotels,clinics}/book. Always {ok:true}. */
export async function POST(req: NextRequest) {
  const ok = (r: string) => { const res = NextResponse.json({ ok: true }); res.headers.set("x-omnisend", r); return res; };
  let b: Record<string, unknown>;
  try { b = (await req.json()) as Record<string, unknown>; } catch { return ok("skip:body"); }
  const f = funnelOf(b.funnel);
  const email = String(b.email || "").trim();
  if (!f || !EMAIL_RE.test(email) || b.kind !== "booked") return ok("skip:invalid");
  if (isTestEmail(email)) return ok("skip:test");
  const { scope, source } = AEO[f];
  const p = scope.prefix;
  const result = await omnisendUpsert({
    email, mergeTags: true,
    tags: cleanTags([p + "-booked"], scope),
    props: cleanProps({ [p + "_booked"]: "yes", [p + "_booked_date"]: new Date().toISOString().slice(0, 10) }, scope),
    consent: { ip: clientIp(req.headers), userAgent: req.headers.get("user-agent") || "", source },
  });
  return ok(result);
}
