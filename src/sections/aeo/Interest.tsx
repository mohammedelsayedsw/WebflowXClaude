"use client";

import { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { usePlan } from "./plan";
import { HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID, PLANS, type Plan } from "./status";
import { BODY_DARK, H2_DARK } from "./ui";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "me.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "mail.com",
]);
const WORK_EMAIL_MSG = "Use your work email";

const INTRO: Record<Plan, string> = {
  core: "We look at your current coverage and show how the package fits.",
  leader: "We look at your industry, competitors and goals, and scope a program.",
};

const LABEL = "font-head font-semibold text-[var(--sw-black)] text-[13px]";
const INPUT =
  "mt-1.5 block w-full h-11 rounded-[2px] border border-[#c9cdeb] bg-white px-4 text-[var(--sw-black)] text-[16px] placeholder:text-[var(--sw-black)]/35 outline-none focus:border-[var(--sw-blue)] transition";

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
    <section id="interest" className="relative z-10 bg-[var(--sw-black)] py-16 md:py-28">
      <div className="wrap grid gap-8 lg:gap-16 lg:grid-cols-2 items-start">
        <Reveal>
          <h2 className={H2_DARK}>
            Talk to an{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              AI search strategist
            </span>
          </h2>
          <p className={`${BODY_DARK} mt-5 md:mt-6 max-w-[42ch]`}>{INTRO[plan]}</p>
          <p className="mt-6 text-white/55 text-[14px] max-w-[42ch]">Already a scandiweb client? Your account manager can set up the call.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-white rounded-[2px] p-5 md:p-7">
            {status === "done" ? (
              <div role="status" className="py-10">
                <h3 className="font-head font-bold text-[var(--sw-black)] text-[26px] md:text-[30px] leading-[1.15]">Request sent</h3>
                <p className="mt-4 text-[var(--sw-black)]/70 text-[16px] leading-relaxed max-w-[44ch]">
                  scandiweb will email {f.email.trim()} to arrange the call about {PLANS[plan].name}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate aria-label="AI visibility call request" className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className={LABEL}>Work email</span>
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={f.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      className={`${INPUT} ${errors.email ? "border-[var(--sw-red)]" : ""}`}
                    />
                    {error("email")}
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
                      className={`${INPUT} ${errors.website ? "border-[var(--sw-red)]" : ""}`}
                    />
                    {error("website")}
                  </label>
                </div>
                <label className="block">
                  <span className={LABEL}>Interested in</span>
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
                </label>
                <label className="block">
                  <span className={LABEL}>
                    Notes <span className="font-normal text-[var(--sw-black)]/50">(optional)</span>
                  </span>
                  <textarea
                    value={f.notes}
                    onChange={set("notes")}
                    placeholder="Your current SEO setup or questions"
                    className={`${INPUT} h-24 py-3 resize-y`}
                  />
                </label>
                {status === "error" && (
                  <p role="alert" className="text-[14px] text-[#c62f2f]">
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`${btnLight} w-full h-auto min-h-12 py-3 px-4 cursor-pointer disabled:opacity-60`}
                >
                  {status === "submitting" ? "Sending" : "Request a call"}
                </button>
                <p className="text-center text-[13px] text-[var(--sw-black)]/50">No commitment to subscribe</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
