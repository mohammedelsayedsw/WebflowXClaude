import { NextRequest, NextResponse } from "next/server";
import { cleanProps, cleanTags, omnisendUpsert } from "@/sections/retention-90/omnisend-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Follow-up updates to a Retention Score contact in Omnisend:
   - kind "sms":    adds the phone with SMS consent and the r90-sms-optin tag
   - kind "booked": adds the r90-booked tag (stops the nurture flow)
   Tags are merged server-side with the contact's current tags (mergeTags), so a follow-up
   never drops a tag. Callers: the funnel (SMS opt-in, booking in the modal) and /retention-90/book.
   Always answers {ok:true}; the Omnisend result rides in a header. */
export async function POST(req: NextRequest) {
  let b: Record<string, unknown>;
  try { b = (await req.json()) as Record<string, unknown>; } catch { return NextResponse.json({ ok: true }); }
  const email = String(b.email || "").trim();
  const kind = String(b.kind || "");
  const phone = String(b.phone || "").replace(/[\s().-]/g, "");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !["sms", "booked"].includes(kind)) return NextResponse.json({ ok: true });
  const tags = cleanTags([...(Array.isArray(b.tags) ? b.tags : []), kind === "sms" ? "r90-sms-optin" : "r90-booked"]);
  const props = cleanProps(kind === "booked" ? { r90_booked: "yes", r90_booked_date: new Date().toISOString().slice(0, 10) } : { r90_sms: "yes" });
  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "";
  const result = await omnisendUpsert({
    email, tags, props, mergeTags: true,
    consent: { ip, userAgent: req.headers.get("user-agent") || "", source: "scandiweb-retention-90" },
    ...(kind === "sms" && /^\+[1-9]\d{6,14}$/.test(phone) ? { phone, sms: true } : {}),
  });
  const res = NextResponse.json({ ok: true });
  res.headers.set("x-omnisend", result);
  return res;
}
