import { NextRequest, NextResponse } from "next/server";
import { cleanProps, cleanTags, omnisendUpsert } from "@/sections/retention-90/omnisend-server";
import { AEO, EMAIL_RE, clientIp, funnelOf, isTestEmail } from "@/sections/aeo-lp/omni-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Follow-up for an AEO contact, tags merged with the contact's current tags, never replaced:
   kind "booked"    adds aeoh-booked / aeoc-booked (selling emails stop, the thank-you starts).
                    Callers: the booking popup on the landing pages and /aeo/{hotels,clinics}/book.
   kind "confirmed" adds aeoh-confirmed / aeoc-confirmed (they clicked the confirmation email).
                    Caller: /aeo/{hotels,clinics}/confirmed.
   Always {ok:true}. */
const KINDS = { booked: "booked", confirmed: "confirmed" } as const;
export async function POST(req: NextRequest) {
  const ok = (r: string) => { const res = NextResponse.json({ ok: true }); res.headers.set("x-omnisend", r); return res; };
  let b: Record<string, unknown>;
  try { b = (await req.json()) as Record<string, unknown>; } catch { return ok("skip:body"); }
  const f = funnelOf(b.funnel);
  const email = String(b.email || "").trim();
  const kind = b.kind === "booked" || b.kind === "confirmed" ? KINDS[b.kind] : null;
  if (!f || !EMAIL_RE.test(email) || !kind) return ok("skip:invalid");
  if (isTestEmail(email)) return ok("skip:test");
  const { scope, source } = AEO[f];
  const p = scope.prefix;
  const result = await omnisendUpsert({
    email, mergeTags: true,
    tags: cleanTags([p + "-" + kind], scope),
    props: cleanProps({ [p + "_" + kind]: "yes", [p + "_" + kind + "_date"]: new Date().toISOString().slice(0, 10) }, scope),
    consent: { ip: clientIp(req.headers), userAgent: req.headers.get("user-agent") || "", source },
  });
  return ok(result);
}
