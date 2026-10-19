"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { usePlan } from "./plan";
import { HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID, PLANS, type Plan } from "./status";
import { BODY_DARK, Eyebrow, H2_DARK, SECTION_Y } from "./ui";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "me.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "mail.com",
]);
const WORK_EMAIL_MSG = "Use your work email";

const INTRO: Record<Plan, string> = {
  core: "Request a call about AI Visibility Core. We’ll review your current coverage and explain how the subscription fits your business.",
  leader:
    "Request a call with our AI Search Strategist about a tailored program for your industry, competitors, and commercial goals.",
};
const PRICE_LINE: Record<Plan, string> = {
  core: `${PLANS.core.price} / month`,
  leader: `from ${PLANS.leader.price} / month`,
};

const LABEL = "block text-[13px] text-white/60";
const INPUT =
  "mt-1.5 block w-full h-12 rounded-[2px] border border-white/20 bg-white/[0.04] px-4 text-[16px] text-white placeholder:text-white/30 outline-none focus:border-[var(--sw-mint)] focus:bg-white/[0.06] transition";
const ERROR = "mt-1.5 block text-[13px] text-[#ff8a8a]";

type Fields = { email: string; website: string; notes: string };

/** One centred column on the dark ground: plan choice as two options with their prices, two fields, an optional note, one button. */
export function Interest() {
  const { plan, setPlan } = usePlan();
  const [f, setF] = useState<Fields>({ email: "", website: "", notes: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [noteOpen, setNoteOpen] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setF((s) => ({ ...s, [k]: e.target.value }));
    setErrors((s) => ({ ...s, [k]: "" }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    const em = f.email.trim().toLowerCase();
    if (!EMAIL_OK.test(em)) e.email = "Enter a valid email address";
    else if (FREE_MAIL.has(em.split("@")[1])) e.email = WORK_EMAIL_MSG;
    if (!f.website.trim()) e.website = "Enter your website";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setErrorMsg("");

    const message = [`Interested in: ${PLANS[plan].name}`, f.notes.trim() && `Notes: ${f.notes.trim()}`]
      .filter(Boolean)
      .join("\n");

    const cookie = document.cookie.match(/(^|;\s*)hubspotutk=([^;]+)/);
    const hutk = cookie ? decodeURIComponent(cookie[2]) : undefined;

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { objectTypeId: "0-1", name: "email", value: f.email.trim() },
              { objectTypeId: "0-1", name: "website", value: f.website.trim() },
              { objectTypeId: "0-1", name: "message", value: message },
            ],
            context: { hutk, pageUri: window.location.href, pageName: document.title },
          }),
        },
      );
      if (res.ok) {
        const w = window as unknown as { dataLayer?: unknown[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "aeo_call_request_submit", form_id: HUBSPOT_FORM_ID, plan });
        setStatus("done");
        return;
      }
      const body = (await res.json().catch(() => null)) as
        | { message?: string; errors?: { errorType?: string; message?: string }[] }
        | null;
      const type = body?.errors?.[0]?.errorType;
      if (type === "BLOCKED_EMAIL" || type === "INVALID_EMAIL") {
        setErrors({ email: type === "BLOCKED_EMAIL" ? WORK_EMAIL_MSG : "Enter a valid email address" });
        setStatus("idle");
        return;
      }
      setErrorMsg(body?.errors?.[0]?.message || body?.message || "The request did not go through. Try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  };

  return (
    <section id="interest" className={`relative z-10 overflow-hidden bg-[var(--sw-black)] ${SECTION_Y}`}>
      {/* one soft glow so the dark reads as space, not a flat block */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[1000px] max-w-[160%] -translate-x-1/2 -translate-y-1/3"
        style={{ background: "radial-gradient(closest-side, rgba(63,74,175,0.45), rgba(63,74,175,0))" }}
      />
      <div className="wrap w-full relative">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <div className="flex justify-center">
            <Eyebrow tone="mint">For existing scandiweb clients</Eyebrow>
          </div>
          <h2 className={`${H2_DARK} mt-4`}>
            Speak with an{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              AI search strategist
            </span>
          </h2>
          <p className={`${BODY_DARK} mt-4 max-md:[@media(max-height:700px)]:hidden`}>{INTRO[plan]}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-md:[@media(max-height:700px)]:mt-5 md:mt-[clamp(20px,4vh,40px)] max-w-[640px]">
          {status === "done" ? (
            <div role="status" className="border-t border-white/15 pt-8 text-center">
              <h3 className="font-head font-bold text-white text-[26px] leading-[1.15]">Request sent</h3>
              <p className="mt-3 text-white/70 text-[16px]">
                scandiweb will email {f.email.trim()} to arrange the call about {PLANS[plan].name}.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate aria-label="AI visibility call request">
              <fieldset>
                <legend className="sr-only">Interested in</legend>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(PLANS) as Plan[]).map((p) => {
                    const on = plan === p;
                    return (
                      <label
                        key={p}
                        className={`relative cursor-pointer rounded-[2px] border px-4 py-3.5 max-md:[@media(max-height:700px)]:py-2.5 md:px-5 md:py-4 text-left transition ${
                          on ? "border-[var(--sw-mint)] bg-[rgba(110,247,110,0.06)]" : "border-white/20 hover:border-white/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="aeo-plan"
                          value={p}
                          checked={on}
                          onChange={() => setPlan(p)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden
                          className={`absolute right-3 top-3 md:right-4 md:top-4 h-3.5 w-3.5 rounded-full border transition ${
                            on ? "border-[var(--sw-mint)] bg-[var(--sw-mint)]" : "border-white/35"
                          }`}
                        />
                        <span className="block pr-5 font-head font-semibold text-white text-[15px] md:text-[16px] leading-[1.25]">
                          {PLANS[p].name}
                        </span>
                        <span className="mt-1 block text-[13px] text-white/55">{PRICE_LINE[p]}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-5 grid gap-4 max-md:[@media(max-height:700px)]:gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className={LABEL}>Work email</span>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={f.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    className={`${INPUT} ${errors.email ? "border-[#ff8a8a]" : ""}`}
                  />
                  {errors.email && <span className={ERROR}>{errors.email}</span>}
                </label>
                <label className="block">
                  <span className={LABEL}>Website</span>
                  <input
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="company.com"
                    value={f.website}
                    onChange={set("website")}
                    aria-invalid={!!errors.website}
                    className={`${INPUT} ${errors.website ? "border-[#ff8a8a]" : ""}`}
                  />
                  {errors.website && <span className={ERROR}>{errors.website}</span>}
                </label>
              </div>

              {noteOpen ? (
                <label className="mt-4 block">
                  <span className={LABEL}>Note</span>
                  <textarea
                    autoFocus
                    value={f.notes}
                    onChange={set("notes")}
                    placeholder="Your current SEO setup or questions"
                    className={`${INPUT} h-24 py-3 resize-none`}
                  />
                </label>
              ) : (
                <button
                  type="button"
                  onClick={() => setNoteOpen(true)}
                  className="mt-4 inline-flex items-center gap-1.5 py-1 font-head font-semibold text-[14px] text-white/70 hover:text-white transition"
                >
                  <Plus aria-hidden className="h-4 w-4" />
                  Add a note
                </button>
              )}

              {status === "error" && (
                <p role="alert" className="mt-4 text-[14px] text-[#ff8a8a]">
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`${btnPrimary} mt-6 max-md:[@media(max-height:700px)]:mt-4 md:mt-[clamp(14px,3vh,24px)] w-full cursor-pointer disabled:opacity-60`}
              >
                {status === "submitting" ? "Sending" : "Request a call"}
              </button>
              <p className="mt-4 max-md:[@media(max-height:700px)]:mt-3 text-center text-[13px] text-white/45">
                A conversation, with no commitment to subscribe. Already in touch with your account manager? Ask them about AI Visibility Core.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
