"use client";

import { useId, useState } from "react";
import { COUNTRY, type CC } from "./data";
import { HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID } from "./status";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "me.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "mail.com",
]);
const WORK_EMAIL_MSG = "Use your work email";

type Fields = { email: string; website: string };

/** Closing band on every view: work email and website, no gate. On a company or industry view the message names what was looked up. */
export function Contact({
  company,
  industry,
  cc,
  website = "",
  title,
  text,
  topic,
}: {
  company?: string;
  industry?: string;
  cc?: CC;
  website?: string;
  /** heading, intro and message subject for pages that are not about one company */
  title?: string;
  text?: string;
  topic?: string;
}) {
  const [f, setF] = useState<Fields>({ email: "", website });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const subject = company ?? "your brand";
  const id = useId();

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setF((s) => ({ ...s, [k]: e.target.value }));
    setErrors((s) => ({ ...s, [k]: "" }));
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e: Partial<Record<keyof Fields, string>> = {};
    const em = f.email.trim().toLowerCase();
    if (!EMAIL_OK.test(em)) e.email = "Enter a valid email address";
    else if (FREE_MAIL.has(em.split("@")[1])) e.email = WORK_EMAIL_MSG;
    if (!f.website.trim()) e.website = "Enter your website";
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("submitting");
    setErrorMsg("");

    const where = cc ? ` (${COUNTRY[cc]})` : "";
    const message = company
      ? `Baltic AI Brand Ranking: looked up ${company}${where}`
      : industry
        ? `Baltic AI Brand Ranking: looked up the ${industry} ranking${where}`
        : `Baltic AI Brand Ranking${topic ? `: ${topic}` : ""}`;
    const cookie = document.cookie.match(/(^|;\s*)hubspotutk=([^;]+)/);
    const hutk = cookie ? decodeURIComponent(cookie[2]) : undefined;

    try {
      const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`, {
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
      });
      if (res.ok) {
        const w = window as unknown as { dataLayer?: unknown[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "aeo_rankings_contact_submit", form_id: HUBSPOT_FORM_ID, company: company ?? null, country: cc ?? null });
        setStatus("done");
        return;
      }
      const body = (await res.json().catch(() => null)) as { message?: string; errors?: { errorType?: string; message?: string }[] } | null;
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
    <section className="band mag">
      <div className="wrap cta">
        <div>
          <h2 className="mid">{title ?? `Want to move ${subject} up this list?`}</h2>
          <p>{text ?? `scandiweb helps Baltic brands get named in AI answers. We'll show you which questions ${subject} is missing from.`}</p>
        </div>
        {status === "done" ? (
          <div className="form form-done" role="status">
            <p className="mid sm">Request sent</p>
            <p>scandiweb will email {f.email.trim()} to arrange the call.</p>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate aria-label="AI visibility call request">
            <label className="lbl" htmlFor={`${id}e`}>Work email</label>
            <input id={`${id}e`} type="email" autoComplete="email" placeholder="you@company.com" value={f.email} onChange={set("email")} aria-invalid={!!errors.email} />
            {errors.email && <p className="form-err" role="alert">{errors.email}</p>}
            <label className="lbl" htmlFor={`${id}w`}>Website</label>
            <input id={`${id}w`} type="text" inputMode="url" autoComplete="url" placeholder="company.com" value={f.website} onChange={set("website")} aria-invalid={!!errors.website} />
            {errors.website && <p className="form-err" role="alert">{errors.website}</p>}
            <button type="submit" className="btn" disabled={status === "submitting"}>{status === "submitting" ? "Sending" : "Talk to scandiweb"}</button>
            {status === "error" && <p className="form-err" role="alert" style={{ marginTop: 8 }}>{errorMsg}</p>}
            <p className="form-note">
              <a href="https://scandiweb.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy policy</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
