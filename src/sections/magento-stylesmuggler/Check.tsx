"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";
import { CALL_URL } from "./status";

/**
 * "Check if your store has been affected": three short steps, then a first
 * read from the answers and a request on its way to the team.
 *
 * Submits to the Magento lead form in HubSpot (portal 25724996, EU1) through
 * the public Forms API. That form has four fields: first name, email, website,
 * message. The answers travel in `message`, one line each.
 */
const PORTAL_ID = "25724996";
const FORM_ID = "a2a9bbba-140b-49a2-b20c-8990b1d85a41";

type Question = { key: string; label: string; options: string[] };

const SETUP: Question[] = [
  {
    key: "version",
    label: "Magento or Adobe Commerce version",
    options: ["2.4.9", "2.4.8", "2.4.7", "2.4.6 or older", "Not sure"],
  },
  {
    key: "hosting",
    label: "Where the store is hosted",
    options: ["Adobe Commerce Cloud", "Our own servers or another host", "ReadyMage", "Not sure"],
  },
  {
    key: "protection",
    label: "Has anything been done to block this attack",
    options: ["Yes", "No", "Not sure"],
  },
];

const EMAILS: Question = {
  key: "emails",
  label: "Unexpected “Payment Transaction Failed Reminder” emails from your store",
  options: ["Yes", "No", "Not sure"],
};

const STEP_NAMES = ["Your store", "Your setup", "Warning signs"];

type Contact = { website: string; email: string; firstname: string };
type Answers = Record<string, string>;
type Status = "idle" | "submitting" | "error";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function firstRead(a: Answers): { label: string; text: string }[] {
  const out: { label: string; text: string }[] = [];
  if (a.version === "Not sure") {
    out.push({ label: "Version", text: "We will find out which version you run." });
  } else if (a.version) {
    out.push({
      label: "Version",
      text: "Your version is affected. All current versions are, updated or not.",
    });
  }
  if (a.protection === "Yes") {
    out.push({
      label: "Protection",
      text: "Good. We make sure it blocks both steps of the attack, and look for anything that got in before.",
    });
  } else if (a.protection) {
    out.push({
      label: "Protection",
      text: "Nothing is blocking the attack yet. That comes first.",
    });
  }
  if (a.emails === "Yes") {
    out.push({
      label: "Emails",
      text: "Those emails are a known sign of an attack attempt. We treat this as urgent.",
    });
  } else if (a.emails === "No") {
    out.push({
      label: "Emails",
      text: "A good sign, but not proof. The attack also works when no email goes out.",
    });
  } else if (a.emails) {
    out.push({ label: "Emails", text: "We check the store's mail log." });
  }
  if (a.hosting === "ReadyMage") {
    out.push({
      label: "Hosting",
      text: "ReadyMage has malware protection built in. We confirm your store is covered.",
    });
  }
  return out;
}

const inputClass =
  "block w-full rounded-[2px] border border-white/18 bg-white/[0.04] px-3.5 py-3 text-[14px] text-white placeholder:text-white/38 outline-none transition focus:border-[var(--sw-mint)]/55 focus:bg-white/[0.06]";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-code text-white/55">
        {label}
      </label>
      {children}
      {error && <p className="text-[12px] text-[var(--sw-red)]">{error}</p>}
    </div>
  );
}

function Radios({
  q,
  value,
  onChange,
  error,
}: {
  q: Question;
  value?: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <fieldset>
      <legend className="label-code text-white/55">{q.label}</legend>
      <div className="mt-3 border-t border-white/10">
        {q.options.map((o) => (
          <label
            key={o}
            className="flex items-center gap-3 py-3 border-b border-white/10 cursor-pointer"
          >
            <input
              type="radio"
              name={q.key}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="peer sr-only"
            />
            <span
              aria-hidden
              className="h-4 w-4 shrink-0 rounded-full border border-white/35 transition peer-checked:border-[var(--sw-mint)] peer-checked:bg-[var(--sw-mint)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--sw-mint)]/40"
            />
            <span className="text-[15px] text-white/70 transition peer-checked:text-white">{o}</span>
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-[12px] text-[var(--sw-red)]">{error}</p>}
    </fieldset>
  );
}

export function Check() {
  const [step, setStep] = useState(0); // 0..2 form steps, 3 = done
  const [contact, setContact] = useState<Contact>({ website: "", email: "", firstname: "" });
  const [answers, setAnswers] = useState<Answers>({});
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const setAnswer = (k: string, v: string) => {
    setAnswers((a) => ({ ...a, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!contact.website.trim()) e.website = "Enter the store address";
      if (!EMAIL_OK.test(contact.email.trim())) e.email = "Enter a work email";
      if (!contact.firstname.trim()) e.firstname = "Enter your first name";
    }
    if (s === 1) {
      for (const q of SETUP) if (!answers[q.key]) e[q.key] = "Pick one";
    }
    if (s === 2) {
      if (!answers[EMAILS.key]) e[EMAILS.key] = "Pick one";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate(step)) setStep((s) => s + 1);
  };

  const submit = async () => {
    if (!validate(2)) return;
    setStatus("submitting");
    setErrorMsg("");

    const lines = [
      "StyleSmuggler store check",
      ...SETUP.map((q) => `${q.label}: ${answers[q.key]}`),
      `${EMAILS.label}: ${answers[EMAILS.key]}`,
      notes.trim() ? `Anything else: ${notes.trim()}` : "",
    ].filter(Boolean);

    const cookie = document.cookie.match(/(^|;\s*)hubspotutk=([^;]+)/);
    const hutk = cookie ? decodeURIComponent(cookie[2]) : undefined;

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { objectTypeId: "0-1", name: "firstname", value: contact.firstname.trim() },
              { objectTypeId: "0-1", name: "email", value: contact.email.trim() },
              { objectTypeId: "0-1", name: "website", value: contact.website.trim() },
              { objectTypeId: "0-1", name: "message", value: lines.join("\n") },
            ],
            context: {
              hutk,
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        },
      );
      if (res.ok) {
        setStatus("idle");
        setStep(3);
        return;
      }
      const body = (await res.json().catch(() => null)) as { message?: string } | null;
      setErrorMsg(body?.message || "The request did not go through. Try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  };

  const read = firstRead(answers);

  return (
    <section id="check" className="relative z-10 py-24 md:py-32 border-t border-white/10">
      <div className="wrap">
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/45">Free initial check · No store access required</div>
            <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              Find out what to{" "}
              <span style={{ color: "var(--sw-mint)" }}>check next</span>
            </h2>
            <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[44ch]">
              Share your store address and answer a few questions to get an
              initial assessment. Our Magento engineers will review your
              submission, check what is visible externally, and email you
              recommended next steps.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-8"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {step < 3 && (
                <div className="mb-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="label-code text-white/55">
                      Step {step + 1} of {STEP_NAMES.length} · {STEP_NAMES[step]}
                    </div>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="inline-flex items-center gap-1.5 label-code text-white/55 hover:text-white transition"
                      >
                        <ArrowLeft className="h-3 w-3" />
                        Back
                      </button>
                    )}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5" aria-hidden>
                    {STEP_NAMES.map((n, i) => (
                      <span
                        key={n}
                        className="h-px"
                        style={{ background: i <= step ? "var(--sw-mint)" : "rgba(255,255,255,0.15)" }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step === 0 && (
                    <form
                      className="flex flex-col gap-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      noValidate
                    >
                      <Field id="ss-website" label="Store URL" error={errors.website}>
                        <input
                          id="ss-website"
                          type="text"
                          inputMode="url"
                          autoComplete="url"
                          placeholder="yourstore.com"
                          value={contact.website}
                          onChange={(e) => setContact({ ...contact, website: e.target.value })}
                          className={inputClass}
                        />
                      </Field>
                      <Field id="ss-email" label="Work email" error={errors.email}>
                        <input
                          id="ss-email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@yourstore.com"
                          value={contact.email}
                          onChange={(e) => setContact({ ...contact, email: e.target.value })}
                          className={inputClass}
                        />
                      </Field>
                      <Field id="ss-firstname" label="First name" error={errors.firstname}>
                        <input
                          id="ss-firstname"
                          type="text"
                          autoComplete="given-name"
                          placeholder="Your first name"
                          value={contact.firstname}
                          onChange={(e) => setContact({ ...contact, firstname: e.target.value })}
                          className={inputClass}
                        />
                      </Field>
                      <div className="pt-2">
                        <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}>
                          Continue
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  )}

                  {step === 1 && (
                    <form
                      className="flex flex-col gap-7"
                      onSubmit={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      noValidate
                    >
                      <div className="grid sm:grid-cols-3 gap-6">
                        {SETUP.map((q) => (
                          <Radios
                            key={q.key}
                            q={q}
                            value={answers[q.key]}
                            onChange={(v) => setAnswer(q.key, v)}
                            error={errors[q.key]}
                          />
                        ))}
                      </div>
                      <div>
                        <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}>
                          Continue
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  )}

                  {step === 2 && (
                    <form
                      className="flex flex-col gap-7"
                      onSubmit={(e) => {
                        e.preventDefault();
                        submit();
                      }}
                      noValidate
                    >
                      <Radios
                        q={EMAILS}
                        value={answers[EMAILS.key]}
                        onChange={(v) => setAnswer(EMAILS.key, v)}
                        error={errors[EMAILS.key]}
                      />
                      <Field id="ss-notes" label="Anything else that looked odd (optional)">
                        <textarea
                          id="ss-notes"
                          rows={3}
                          placeholder="Admin users you did not create, a slower store, failed deployments"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className={`${inputClass} resize-y`}
                        />
                      </Field>
                      {status === "error" && (
                        <p className="text-[13px] text-[var(--sw-red)]">{errorMsg}</p>
                      )}
                      <div>
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className={`${btnPrimary} w-full sm:w-auto disabled:opacity-60`}
                        >
                          {status === "submitting" ? "Sending" : "Get my initial assessment"}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  )}

                  {step === 3 && (
                    <div>
                      <div className="label-code" style={{ color: "var(--sw-mint)" }}>
                        Request received
                      </div>
                      <h3 className="mt-4 font-head font-semibold text-white text-[24px] md:text-[30px] leading-[1.15]">
                        Thanks, {contact.firstname.trim()}. We take it from here
                      </h3>
                      <p className="mt-4 text-white/75 text-[15px] leading-relaxed">
                        Our Magento engineers review your submission, check what is
                        visible externally on {contact.website.trim()}, and email{" "}
                        {contact.email.trim()} with recommended next steps.
                      </p>

                      {read.length > 0 && (
                        <div className="mt-7">
                          <div className="label-code text-white/55">Initial assessment, from your answers</div>
                          <dl className="mt-3 border-t border-white/10">
                            {read.map((r) => (
                              <div
                                key={r.label}
                                className="grid grid-cols-[92px_1fr] gap-x-4 py-3.5 border-b border-white/10"
                              >
                                <dt className="label-code text-white/45 pt-0.5">{r.label}</dt>
                                <dd className="text-[14px] text-white/85 leading-relaxed">{r.text}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}

                      <div className="mt-8">
                        <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
                          Talk to our team
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            {step < 3 && (
              <p className="label-code text-white/45 mt-3 px-1">
                Reviewed by scandiweb’s Magento engineers, including on weekends.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
