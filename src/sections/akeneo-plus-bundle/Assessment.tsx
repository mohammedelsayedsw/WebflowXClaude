"use client";

import { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { Check } from "lucide-react";
import { btnLight } from "@/components/primitives/buttonStyles";
import { calculate, periodLabel, useSavings } from "./Savings";
import { HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID } from "./status";
import { BODY_DARK, Eyebrow, H2_DARK } from "./ui";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "me.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "mail.com",
]);
const WORK_EMAIL_MSG = "Use your work email";

const INPUT =
  "mt-2 w-full h-12 rounded-[2px] border border-[#c9cdeb] bg-white px-4 text-[var(--sw-black)] text-[16px] placeholder:text-[var(--sw-black)]/35 outline-none focus:border-[var(--sw-blue)] transition";
const LABEL = "font-head font-semibold text-[var(--sw-black)] text-[14px]";

type Fields = { firstname: string; company: string; email: string; licence: string; renewal: string };

const INCLUDED = [
  "Your saving per year and over three years, after service costs",
  "Migration cost and payback period",
  "Which of your features are covered, and any gaps",
  "A timeline that fits your renewal date",
];

export function Assessment() {
  const { licence, years, currency, money } = useSavings();
  const [f, setF] = useState<Fields>({ firstname: "", company: "", email: "", licence: "", renewal: "" });
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
    if (!f.company.trim()) e.company = "Enter your company";
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
              { objectTypeId: "0-1", name: "company", value: f.company.trim() },
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
        {optional && <span className="block mt-0.5 font-body font-normal text-[12px] text-[var(--sw-black)]/55">Optional</span>}
      </span>
      <input
        name={k}
        value={f[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        className={`${INPUT} ${errors[k] ? "border-[var(--sw-red)]" : ""}`}
        {...props}
      />
      {errors[k] && <span className="mt-1.5 block text-[13px] text-[#c62f2f]">{errors[k]}</span>}
    </label>
  );

  return (
    <section id="cta" className="relative z-10 bg-[var(--sw-black)] py-24 md:py-28">
      <div className="wrap grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
        <Reveal>
          <Eyebrow tone="mint">Free savings assessment</Eyebrow>
          <h2 className={`${H2_DARK} max-w-[18ch]`}>
            Find out what you save{" "}
            <span style={{ color: "var(--sw-mint)" }}>before your next renewal</span>
          </h2>
          <p className={`${BODY_DARK} mt-6 max-w-[48ch]`}>Send us your setup. The written assessment covers</p>
          <ul className="mt-5 grid gap-3">
            {INCLUDED.map((t) => (
              <li key={t} className="flex gap-3 text-white text-[16px]">
                <Check aria-hidden className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "var(--sw-mint)" }} strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9 inline-flex items-center gap-3 border px-5 py-4 rounded-[2px]" style={{ borderColor: "rgba(110,247,110,0.5)", background: "rgba(110,247,110,0.06)" }}>
            <span className="grid place-items-center h-7 w-7 rounded-full" style={{ background: "var(--sw-mint)" }}>
              <Check aria-hidden className="h-4 w-4 text-[var(--sw-black)]" strokeWidth={3} />
            </span>
            <span className="font-head font-bold text-white text-[18px]">No commitment to migrate</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-white rounded-[2px] p-6 md:p-8">
            {status === "done" ? (
              <div role="status" className="py-10">
                <div className="font-head font-bold uppercase text-[12px] tracking-[0.16em] text-[var(--sw-blue)]">Request sent</div>
                <h3 className="mt-4 font-head font-bold text-[var(--sw-black)] text-[26px] md:text-[30px] leading-[1.15]">
                  Thanks, {f.firstname.trim()}
                </h3>
                <p className="mt-4 text-[var(--sw-black)]/70 text-[16px] leading-relaxed max-w-[44ch]">
                  scandiweb will email {f.email.trim()} to ask for anything missing and set up the assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5">
                <h3 className="font-head font-bold text-[var(--sw-black)] text-[22px]">Your Akeneo setup</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {field("firstname", "Name", { autoComplete: "name" })}
                  {field("company", "Company", { autoComplete: "organization" })}
                </div>
                {field("email", "Work email", { type: "email", autoComplete: "email" })}
                <div className="grid sm:grid-cols-2 gap-5">
                  {field("licence", `Annual license cost (${currency === "USD" ? "$" : "€"})`, { inputMode: "numeric", placeholder: licence.toLocaleString("en-US") }, true)}
                  {field("renewal", "License renewal date", { type: "date" }, true)}
                </div>
                {status === "error" && (
                  <p role="alert" className="text-[14px] text-[#c62f2f]">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`${btnLight} w-full h-auto min-h-12 py-3 disabled:opacity-60`}
                >
                  {status === "submitting" ? "Sending" : "Get my free savings assessment"}
                </button>
                <p className="text-[var(--sw-black)]/60 text-[13px] leading-relaxed">
                  Don&apos;t know your license cost or renewal date? Leave them blank and we will ask.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
