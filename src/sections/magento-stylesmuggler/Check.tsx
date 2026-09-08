"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { CALL_URL } from "./status";

/**
 * "Get a free security check": three short steps that tell our Magento
 * engineers what they are looking at before the call. No report is promised;
 * the answers prepare the conversation.
 *
 * Submits to the Magento lead form in HubSpot (portal 25724996, EU1) through
 * the public Forms API. Each answer goes to its own field on that form; the
 * `key` of every question is the HubSpot field name, and the option values
 * mirror the form's option values exactly (HubSpot rejects anything else).
 */
const PORTAL_ID = "25724996";
const FORM_ID = "8ad693d8-7cbf-440e-88b3-b40a3d1ce983";

type Option = { label: string; value: string };
type Question = { key: string; label: string; options: Option[] };

const yesNo: Option[] = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
  { label: "Not sure", value: "Not sure" },
];

const SETUP: Question[] = [
  {
    key: "magento_or_adobe_commerce_version",
    label: "Magento or Adobe Commerce version",
    options: [
      { label: "2.4.9", value: "2.4.9" },
      { label: "2.4.8", value: "2.4.8" },
      { label: "2.4.7", value: "2.4.7" },
      { label: "2.4.6 or older", value: "2.4.6 or older" },
      // In HubSpot this option was relabelled from "Not sure"; its stored value is still "Not sure".
      { label: "2.4.5 or older", value: "Not sure" },
    ],
  },
  {
    key: "where_the_store_is_hosted",
    label: "Where the store is hosted",
    options: [
      { label: "Adobe Commerce Cloud", value: "Adobe Commerce Cloud" },
      { label: "Our own servers or another host", value: "Our own servers or another host" },
      { label: "ReadyMage", value: "ReadyMage" },
      { label: "Not sure", value: "Not sure" },
    ],
  },
  {
    key: "has_anything_been_done_to_block_this_attack",
    label: "Has anything been done to block this attack",
    options: yesNo,
  },
];

const EMAILS: Question = {
  key: "unexpected_payment_transaction_failed_reminder_emails_from_your_store",
  label: "Unexpected “Payment Transaction Failed Reminder” emails from your store",
  options: yesNo,
};

const STEP_NAMES = ["Your store", "Your setup", "Warning signs"];

type Contact = { website: string; email: string; firstname: string };
type Answers = Record<string, string>;
type Status = "idle" | "submitting" | "error";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
            key={o.label}
            className="flex items-center gap-3 py-3 border-b border-white/10 cursor-pointer"
          >
            <input
              type="radio"
              name={q.key}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            <span
              aria-hidden
              className="h-4 w-4 shrink-0 rounded-full border border-white/35 transition peer-checked:border-[var(--sw-mint)] peer-checked:bg-[var(--sw-mint)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--sw-mint)]/40"
            />
            <span className="text-[15px] text-white/70 transition peer-checked:text-white">{o.label}</span>
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

    const fields = [
      { objectTypeId: "0-1", name: "firstname", value: contact.firstname.trim() },
      { objectTypeId: "0-1", name: "email", value: contact.email.trim() },
      { objectTypeId: "0-1", name: "website", value: contact.website.trim() },
      ...SETUP.map((q) => ({ objectTypeId: "0-1", name: q.key, value: answers[q.key] })),
      { objectTypeId: "0-1", name: EMAILS.key, value: answers[EMAILS.key] },
      ...(notes.trim() ? [{ objectTypeId: "0-1", name: "message", value: notes.trim() }] : []),
    ];

    const cookie = document.cookie.match(/(^|;\s*)hubspotutk=([^;]+)/);
    const hutk = cookie ? decodeURIComponent(cookie[2]) : undefined;

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields,
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

  return (
    <section id="check" className="relative z-10 py-24 md:py-32 border-t border-white/10">
      <div className="wrap">
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              Get a free{" "}
              <span style={{ color: "var(--sw-mint)" }}>security check</span>
            </h2>
            <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[44ch]">
              Share your store address and answer a few questions. It helps our
              Magento engineers understand your setup and prepare for the call.
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
                          {status === "submitting" ? "Sending" : "Get a free security check"}
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
                        Thanks, {contact.firstname.trim()}. We have what we need for the call
                      </h3>
                      <p className="mt-4 text-white/75 text-[15px] leading-relaxed">
                        Our Magento engineers go through your answers and what is
                        visible externally on {contact.website.trim()} before we speak,
                        and reach you at {contact.email.trim()} to set up the call. If
                        you would rather pick a time now, book it below.
                      </p>

                      <div className="mt-8">
                        <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                          Book the call
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            {step < 3 && (
              <>
                <p className="label-code text-white/45 mt-3 px-1">
                  Reviewed by scandiweb’s Magento engineers, including on weekends.
                </p>
                <p className="mt-4 px-1 text-white/65 text-[14px] md:text-[15px] leading-relaxed">
                  Rather talk first?{" "}
                  <a
                    href={CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 underline underline-offset-4 decoration-white/40 hover:decoration-white hover:text-white transition"
                  >
                    Book a call with our Magento team
                  </a>
                </p>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
