"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID } from "./status";
import { H2_DARK, SECTION_Y } from "./ui";

const STEPS: [string, string][] = [
  ["Leave your store address", "It takes 30 seconds."],
  ["We build the assistant on your products", "Nothing changes on your live store."],
  ["We show it to you", "Your own store, selling in a conversation. No commitment."],
];

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE_OK = /^[^\s.]+\.[^\s]{2,}$/;

const LABEL = "block text-[13px] text-white/60";
const OPTIONAL = "text-white/35";
const INPUT =
  "mt-1.5 block w-full h-12 max-md:[@media(max-height:700px)]:h-11 rounded-[2px] border border-white/20 bg-white/[0.04] px-4 text-[16px] text-white placeholder:text-white/30 outline-none focus:border-[var(--sw-mint)] focus:bg-white/[0.06] transition";
const ERROR = "mt-1.5 block text-[13px] text-[#ff8a8a]";

type Fields = { website: string; name: string; email: string; company: string; phone: string; notes: string };
const EMPTY: Fields = { website: "", name: "", email: "", company: "", phone: "", notes: "" };

/** Where the visitor came from: ?ref= on the email links (ref=ypo), else utm_source. */
function readRef() {
  const q = new URLSearchParams(window.location.search);
  return (q.get("ref") || q.get("utm_source") || "").trim().slice(0, 100);
}

/** The steps on the left, the form on the right (stacked on phones). Posts to HubSpot; the ref rides in the message. */
export function Demo() {
  const [f, setF] = useState<Fields>(EMPTY);
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
    const site = f.website.trim().replace(/^https?:\/\//i, "");
    if (!site) e.website = "Enter your store address";
    else if (!SITE_OK.test(site)) e.website = "Enter an address like yourstore.com";
    if (!f.name.trim()) e.name = "Enter your name";
    if (!EMAIL_OK.test(f.email.trim())) e.email = "Enter a valid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "submitting" || !validate()) return;
    setStatus("submitting");
    setErrorMsg("");

    const ref = readRef();
    const [first, ...rest] = f.name.trim().split(/\s+/);
    const message = [f.notes.trim(), ref && `Ref: ${ref}`].filter(Boolean).join("\n\n");
    const fields = [
      { name: "email", value: f.email.trim() },
      { name: "website", value: f.website.trim() },
      { name: "firstname", value: first },
      { name: "lastname", value: rest.join(" ") },
      { name: "company", value: f.company.trim() },
      { name: "phone", value: f.phone.trim() },
      { name: "message", value: message },
    ]
      .filter((x) => x.value)
      .map((x) => ({ objectTypeId: "0-1", ...x }));

    const cookie = document.cookie.match(/(^|;\s*)hubspotutk=([^;]+)/);
    const hutk = cookie ? decodeURIComponent(cookie[2]) : undefined;

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fields, context: { hutk, pageUri: window.location.href, pageName: document.title } }),
        },
      );
      if (res.ok) {
        const w = window as unknown as { dataLayer?: unknown[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "chat_to_buy_demo_submit", form_id: HUBSPOT_FORM_ID, ref });
        setStatus("done");
        return;
      }
      const body = (await res.json().catch(() => null)) as
        | { message?: string; errors?: { errorType?: string; message?: string }[] }
        | null;
      const type = body?.errors?.[0]?.errorType;
      if (type === "INVALID_EMAIL" || type === "BLOCKED_EMAIL") {
        setErrors({ email: "Enter a valid email address" });
        setStatus("idle");
        return;
      }
      setErrorMsg("The request did not go through. Try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  };

  const field = (k: keyof Fields, label: string, opts: { optional?: boolean; type?: string; inputMode?: "url" | "email" | "tel"; autoComplete?: string; placeholder?: string } = {}) => (
    <label className="block">
      <span className={LABEL}>
        {label}
        {opts.optional && <span className={OPTIONAL}> (optional)</span>}
      </span>
      <input
        type={opts.type || "text"}
        inputMode={opts.inputMode}
        autoComplete={opts.autoComplete}
        placeholder={opts.placeholder}
        value={f[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        className={`${INPUT} ${errors[k] ? "border-[#ff8a8a]" : ""}`}
      />
      {errors[k] && <span className={ERROR}>{errors[k]}</span>}
    </label>
  );

  return (
    <section id="demo" className={`relative z-10 overflow-hidden bg-[var(--sw-black)] ${SECTION_Y}`}>
      {/* one soft glow so the dark reads as space, not a flat block */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[20%] top-0 h-[560px] w-[1000px] max-w-[160%] -translate-x-1/2 -translate-y-1/3"
        style={{ background: "radial-gradient(closest-side, rgba(63,74,175,0.45), rgba(63,74,175,0))" }}
      />
      <div className="wrap w-full relative grid gap-8 md:gap-10 lg:gap-16 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-start">
        <Reveal>
          <h2 className={H2_DARK}>
            Get your{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              free demo
            </span>
          </h2>
          <ol className="mt-6 md:mt-[clamp(20px,4vh,40px)] border-t border-white/15">
            {STEPS.map(([title, line], i) => (
              <li key={title} className="flex gap-4 border-b border-white/15 py-3.5 md:py-[clamp(12px,2.2vh,20px)]">
                <span className="font-head font-bold text-[18px] leading-[1.3] w-5 shrink-0" style={{ color: "var(--sw-mint)" }}>
                  {i + 1}
                </span>
                <span>
                  <span className="block font-head font-semibold text-white text-[17px] leading-[1.3]">{title}</span>
                  <span className="mt-0.5 block text-[14px] md:text-[15px] text-white/60">{line}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[13px] text-white/45 hidden lg:block">Built by scandiweb, 600+ people who build and grow online stores.</p>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "done" ? (
            <div role="status" className="border-t border-white/15 pt-8">
              <h3 className="font-head font-bold text-white text-[26px] md:text-[32px] leading-[1.15]">We’re building your demo</h3>
              <p className="mt-3 text-white/70 text-[16px] md:text-[17px]">We’ll get back to you at {f.email.trim()}.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate aria-label="Free demo request">
              <div className="grid gap-4 max-md:[@media(max-height:700px)]:gap-3">
                {field("website", "Store website", { inputMode: "url", autoComplete: "url", placeholder: "yourstore.com" })}
                <div className="grid gap-4 max-md:[@media(max-height:700px)]:gap-3 sm:grid-cols-2">
                  {field("name", "Your name", { autoComplete: "name" })}
                  {field("email", "Work email", { type: "email", inputMode: "email", autoComplete: "email", placeholder: "you@company.com" })}
                </div>
                <div className="grid gap-4 max-md:[@media(max-height:700px)]:gap-3 sm:grid-cols-2">
                  {field("company", "Company", { optional: true, autoComplete: "organization" })}
                  {field("phone", "Phone or WhatsApp", { optional: true, type: "tel", inputMode: "tel", autoComplete: "tel" })}
                </div>
              </div>

              {noteOpen ? (
                <label className="mt-4 block">
                  <span className={LABEL}>
                    Anything we should know?<span className={OPTIONAL}> (optional)</span>
                  </span>
                  <textarea
                    autoFocus
                    value={f.notes}
                    onChange={set("notes")}
                    maxLength={2000}
                    placeholder="Top categories, languages, what customers ask most"
                    className={`${INPUT} h-24 py-3 resize-none`}
                  />
                </label>
              ) : (
                <button
                  type="button"
                  onClick={() => setNoteOpen(true)}
                  className="mt-4 inline-flex items-center gap-1.5 py-1 font-head font-semibold text-[14px] text-white/70 hover:text-white transition cursor-pointer"
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
                {status === "submitting" ? "Sending" : "Get my free demo"}
              </button>
              <p className="mt-4 text-center text-[13px] text-white/45">We only use your details to prepare and show you the demo.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
