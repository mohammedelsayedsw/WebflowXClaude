"use client";

import { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { calculate, periodLabel, useSavings } from "./Savings";
import { HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID } from "./status";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "me.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "mail.com",
]);
const WORK_EMAIL_MSG = "Use your work email";

const INPUT =
  "mt-2 w-full h-12 rounded-[2px] border border-white/20 bg-white/[0.04] px-4 text-white text-[16px] placeholder:text-white/35 outline-none focus:border-[var(--sw-beige)] transition";
const LABEL = "text-white/80 text-[14px] font-medium";

type Fields = { firstname: string; website: string; email: string; licence: string; renewal: string };

const INCLUDED = [
  "Estimated annual and three-year savings, with ongoing costs",
  "Migration cost and expected payback",
  "Coverage of the features your team uses",
  "A recommended timeline and any gaps to resolve",
];

export function Assessment() {
  const { licence, years, currency, money } = useSavings();
  const [f, setF] = useState<Fields>({ firstname: "", website: "", email: "", licence: "", renewal: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setF((s) => ({ ...s, [k]: e.target.value }));
    setErrors((s) => ({ ...s, [k]: "" }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.firstname.trim()) e.firstname = "Enter your name";
    if (!f.website.trim()) e.website = "Enter your company website";
    const em = f.email.trim().toLowerCase();
    if (!EMAIL_OK.test(em)) e.email = "Enter a valid email address";
    else if (FREE_MAIL.has(em.split("@")[1])) e.email = WORK_EMAIL_MSG;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setErrorMsg("");

    const r = calculate(licence, years);
    const message = [
      "Akeneo Plus Bundle: free savings assessment request",
      `Annual license cost (stated): ${f.licence.trim() || "not given"}`,
      `License renewal date: ${f.renewal || "not given"}`,
      `Calculator: ${money(licence)} license fee, ${periodLabel(years)}, ${currency}, estimated net ${
        r.netSaving >= 0 ? "saving" : "additional cost"
      } ${money(Math.abs(r.netSaving))}`,
    ].join("\n");

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
              { objectTypeId: "0-1", name: "firstname", value: f.firstname.trim() },
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
        w.dataLayer.push({ event: "akeneo_assessment_submit", form_id: HUBSPOT_FORM_ID });
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

  const field = (k: keyof Fields, label: string, props: React.InputHTMLAttributes<HTMLInputElement>, optional = false) => (
    <label className="block">
      <span className={LABEL}>
        {label}
        {optional && <span className="ml-2 text-white/40 font-normal">Optional</span>}
      </span>
      <input
        name={k}
        value={f[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        className={`${INPUT} ${errors[k] ? "border-[var(--sw-red)]" : ""}`}
        {...props}
      />
      {errors[k] && <span className="mt-1.5 block text-[13px] text-[var(--sw-red)]">{errors[k]}</span>}
    </label>
  );

  return (
    <section
      id="cta"
      className="relative z-10 py-24 md:py-32 border-t border-white/10"
      style={{
        background:
          "radial-gradient(60% 70% at 15% 30%, rgba(63,74,175,0.28) 0%, rgba(5,7,15,0) 70%), var(--sw-black)",
      }}
    >
      <div className="wrap grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-start">
        <Reveal>
          <div className="label-code text-white/45">Free savings assessment</div>
          <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
            Find out what you save{" "}
            <span style={{ color: "var(--sw-mint)" }}>before your renewal</span>
          </h2>
          <p className="mt-6 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-[46ch]">
            Get a free Akeneo savings assessment based on your current setup. It includes
          </p>
          <ul className="mt-5 border-t border-white/10 max-w-[520px]">
            {INCLUDED.map((t) => (
              <li key={t} className="flex gap-3 py-3 border-b border-white/10 text-white/85 text-[15px] md:text-[16px]">
                <span aria-hidden style={{ color: "var(--sw-mint)" }}>✓</span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-white/55 text-[14px]">There is no commitment to migrate</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-8">
            {status === "done" ? (
              <div role="status" className="py-10">
                <div className="label-code" style={{ color: "var(--sw-mint)" }}>Request sent</div>
                <h3 className="mt-4 font-head font-semibold text-white text-[26px] md:text-[30px] leading-[1.15]">
                  Thanks, {f.firstname.trim()}
                </h3>
                <p className="mt-4 text-white/75 text-[16px] leading-relaxed max-w-[44ch]">
                  scandiweb will email {f.email.trim()} to ask for anything missing and arrange the
                  assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5">
                <h3 className="font-head font-semibold text-white text-[22px]">Your Akeneo setup</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {field("firstname", "Name", { autoComplete: "given-name" })}
                  {field("email", "Work email", { type: "email", autoComplete: "email" })}
                </div>
                {field("website", "Company website", { autoComplete: "url", placeholder: "company.com" })}
                <div className="grid sm:grid-cols-2 gap-5">
                  {field("licence", `Annual license cost (${currency === "USD" ? "$" : "€"})`, { inputMode: "numeric", placeholder: String(licence) }, true)}
                  {field("renewal", "License renewal date", { type: "date" }, true)}
                </div>
                {status === "error" && (
                  <p role="alert" className="text-[14px] text-[var(--sw-red)]">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`${btnPrimary} w-full h-auto min-h-12 py-3 disabled:opacity-60`}
                >
                  {status === "submitting" ? "Sending" : "Get my free savings assessment"}
                </button>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Not sure of your license cost or renewal date? Send what you know and we follow up
                  for the rest.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
