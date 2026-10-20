import { NextRequest, NextResponse } from "next/server";
import { cleanProps, cleanTags, omnisendUpsert } from "@/sections/retention-90/omnisend-server";
import { AEO, EMAIL_RE, PHONE_RE, bookUrl, clientIp, funnelOf, isTestEmail } from "@/sections/aeo-lp/omni-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* AEO hotels / clinics quiz submit -> Omnisend. The lead email itself goes from the browser to
   FormSubmit (unchanged), so lead delivery never depends on this route. Always answers {ok:true};
   the Omnisend result rides in the x-omnisend header.
   Body: { funnel: "hotels"|"clinics", email, name, company_website (honeypot), phone, sms_consent,
           omni: { tags: string[], props: Record<string,string> } } */
export async function POST(req: NextRequest) {
  const ok = (r: string) => { const res = NextResponse.json({ ok: true }); res.headers.set("x-omnisend", r); return res; };
  let b: Record<string, unknown>;
  try { b = (await req.json()) as Record<string, unknown>; } catch { return ok("skip:body"); }
  const f = funnelOf(b.funnel);
  const email = String(b.email || "").trim();
  const name = String(b.name || "").trim().slice(0, 80);
  if (!f || !EMAIL_RE.test(email)) return ok("skip:invalid");
  if (String(b.company_website || "").trim()) return ok("skip:hp");
  if (isTestEmail(email)) return ok("skip:test");

  const { scope, source } = AEO[f];
  const p = scope.prefix;
  const omni = (b.omni || {}) as { tags?: unknown; props?: unknown };
  const phone = String(b.phone || "").replace(/[\s().-]/g, "");
  const sms = PHONE_RE.test(phone) && !!String(b.sms_consent || "").trim();
  const country = req.headers.get("cf-ipcountry") || "";

  const result = await omnisendUpsert({
    email, firstName: name || undefined, subscribeEmail: true,
    /* Same Omnisend account as retention-90: add to the contact's existing tags instead of
       replacing them, so a retention lead who also takes an AEO quiz keeps their r90 tags. */
    mergeTags: true,
    tags: cleanTags([scope.base, ...(Array.isArray(omni.tags) ? omni.tags : []), ...(sms ? [p + "-sms-optin"] : [])], scope),
    props: {
      ...cleanProps(omni.props, scope),
      [p + "_book_url"]: bookUrl(f, email, name),
      [p + "_country"]: country,
      [p + "_request_date"]: new Date().toISOString().slice(0, 10),
      ...(sms ? { [p + "_sms"]: "yes" } : {}),
    },
    ...(sms ? { phone, sms: true } : {}),
    consent: { ip: clientIp(req.headers), userAgent: req.headers.get("user-agent") || "", source },
  });
  return ok(result);
}
