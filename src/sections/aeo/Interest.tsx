"use client";

import { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { usePlan } from "./plan";
import { BETTERANSWER_URL, HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID, PLANS, type Plan } from "./status";
import { Arrow, BTN_LIGHT, BTN_SIZE, Eyebrow, H2_LIGHT, LINE_LIGHT, LINK, SECTION, WRAP } from "./ui";

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

const LABEL = "mb-2 block text-[14px] font-semibold";
const INPUT =
  "block w-full min-h-12 rounded-[2px] border border-[#7e83a0] bg-white p-3 text-[16px] text-[var(--sw-black)] placeholder:text-[var(--sw-black)]/45 outline-none focus:border-[var(--sw-blue)] transition";

type Fields = { email: string; website: string; notes: string };

export function Interest() {
  const { plan, setPlan } = usePlan();
  const [f, setF] = useState<Fields>({ email: "", website: "", notes: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const error = (k: keyof Fields) =>
    errors[k] && <span className="mt-1.5 block text-[13px] text-[#c62f2f]">{errors[k]}</span>;

  return (
    <section id="interest" className={`relative z-10 border-t ${LINE_LIGHT} bg-white ${SECTION}`}>
      <div className={`${WRAP} grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-2 lg:gap-20 items-start`}>
        <Reveal>
          <Eyebrow>For existing scandiweb clients</Eyebrow>
          <h2 className={H2_LIGHT}>
            Speak with an
            <br />
            <span className="text-[var(--sw-blue)]">AI search strategist</span>
          </h2>
          <p className="mt-8 max-w-[600px] text-[20px] leading-[1.6]">{INTRO[plan]}</p>
          <p className="mt-8 max-w-[540px] leading-[1.6]">
            <strong className="mb-2 inline-block font-semibold">Already in touch with your account manager?</strong>
            <br />
            Ask them about AI Visibility Core. They can bring our AI search team into the conversation.
          </p>
          <p className="mt-6 max-w-[540px] text-[14px]">
            Delivered by{" "}
            <a href={BETTERANSWER_URL} target="_blank" rel="noopener noreferrer" className={`${LINK} font-semibold`}>
              BetterAnswer.ai
            </a>
            , part of scandiweb.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={`border ${LINE_LIGHT} bg-white p-6 md:p-8`}>
            {status === "done" ? (
              <div role="status" className="py-6">
                <h3 className="font-head font-bold text-[var(--sw-black)] text-[26px] leading-[1.15] tracking-[-0.025em]">
                  Request sent
                </h3>
                <p className="mt-4 max-w-[44ch] leading-[1.6]">
                  scandiweb will email {f.email.trim()} to arrange the call about {PLANS[plan].name}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate aria-label="AI visibility call request">
                <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 md:gap-5">
                  <div className="mb-5">
                    <label htmlFor="aeo-email" className={LABEL}>Work email</label>
                    <input
                      id="aeo-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={f.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      className={`${INPUT} ${errors.email ? "border-[var(--sw-red)]" : ""}`}
                    />
                    {error("email")}
                  </div>
                  <div className="mb-5">
                    <label htmlFor="aeo-website" className={LABEL}>Your website</label>
                    <input
                      id="aeo-website"
                      type="text"
                      inputMode="url"
                      autoComplete="url"
                      placeholder="company.com"
                      value={f.website}
                      onChange={set("website")}
                      aria-invalid={!!errors.website}
                      className={`${INPUT} ${errors.website ? "border-[var(--sw-red)]" : ""}`}
                    />
                    {error("website")}
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="aeo-plan" className={LABEL}>I’m interested in</label>
                  <select
                    id="aeo-plan"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value as Plan)}
                    className={`${INPUT} cursor-pointer`}
                  >
                    {(Object.keys(PLANS) as Plan[]).map((p) => (
                      <option key={p} value={p}>
                        {PLANS[p].name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="aeo-notes" className={LABEL}>
                    Anything you’d like us to know? <span className="font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="aeo-notes"
                    value={f.notes}
                    onChange={set("notes")}
                    placeholder="Your account manager, current SEO setup, or questions for our team"
                    className={`${INPUT} min-h-[88px] resize-y`}
                  />
                </div>
                {status === "error" && (
                  <p role="alert" className="mb-4 text-[14px] text-[#c62f2f]">
                    {errorMsg}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`${BTN_LIGHT} ${BTN_SIZE} w-full md:w-auto cursor-pointer disabled:opacity-60`}
                  >
                    {status === "submitting" ? "Sending" : "Request a call"} <Arrow />
                  </button>
                  <p className="min-w-[180px] flex-1 text-[14px] leading-[1.5]">A conversation, with no commitment to subscribe.</p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
