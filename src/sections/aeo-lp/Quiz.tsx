"use client";

import { useEffect, useRef, useState } from "react";
import { FORM_ENDPOINT, SMS_CONSENT, SUBMIT_ENDPOINT } from "./config";
import { disp, list, str, type Field, type FunnelCfg, type QuizData, type Utm } from "./types";
import { adConversions, pushLeadEvent, setTestMode, track, trackLead } from "./track";
import { Arrow } from "./ui";

const URL_RE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}.*$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+[1-9]\d{6,14}$/;
const cleanPhone = (v: string) => v.replace(/[\s().-]/g, "");
const KEYS = "ABCDEFGHIJKL";

function readUtm(): Utm {
  try {
    const q = new URLSearchParams(window.location.search);
    return { utm_source: q.get("utm_source") || "", utm_medium: q.get("utm_medium") || "", utm_campaign: q.get("utm_campaign") || "", utm_content: q.get("utm_content") || "", angle: q.get("angle") || q.get("utm_content") || "" };
  } catch { return { utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", angle: "" }; }
}

function blank(cfg: FunnelCfg): QuizData {
  const d: QuizData = {};
  cfg.quiz.steps.forEach((s) => { if (s.type === "multi") d[s.key] = []; });
  return d;
}

type Props = {
  cfg: FunnelCfg;
  open: boolean;
  onClose: () => void;
  onStep: (name: string) => void;
  /* Called after a successful submit with the answers, so booking can prefill. */
  onSent: (d: QuizData) => void;
  onBook: () => void;
};

/* Retention-style quiz: one question per screen, lettered answers, auto-advance, no back button. */
export function Quiz({ cfg, open, onClose, onStep, onSent, onBook }: Props) {
  const Q = cfg.quiz;
  const total = Q.steps.length;
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>(() => blank(cfg));
  const [bad, setBad] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState("");
  const [sms, setSms] = useState(false);
  const sentRef = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const s = Q.steps[step];
  const stepName = s.type === "contact" ? "gate" : s.type === "fields" ? "details" : "q" + (step + 1);

  useEffect(() => {
    if (!open || sent) return;
    onStep(stepName);
    track(s.type === "contact" ? "gate_view" : "q_view", { step: stepName, pos: step + 1, key: "key" in s ? s.key : stepName });
    boxRef.current?.parentElement?.scrollTo?.(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, step, sent]);

  const set = (k: string, v: string | string[]) => setData((d) => ({ ...d, [k]: v }));
  const go = (n: number) => { setBad(""); setPicked(""); setStep(n); };

  const pick = (key: string, v: string) => {
    if (picked) return;
    set(key, v);
    setPicked(v);
    track("q_ans", { step: stepName, pos: step + 1, key, a: v });
    setTimeout(() => go(step + 1), 220);
  };
  const toggle = (key: string, v: string, cap?: number) => setData((d) => {
    const arr = list(d, key);
    if (arr.includes(v)) return { ...d, [key]: arr.filter((x) => x !== v) };
    if (cap && arr.length >= cap) return d;
    return { ...d, [key]: [...arr, v] };
  });

  const next = () => {
    if (s.type === "fields") {
      for (const f of s.fields) {
        const v = str(data, f.key).trim();
        if ((f.req && !v) || (f.url && !URL_RE.test(v))) { setBad(f.key); track("q_err", { step: stepName, field: f.key }); return; }
      }
    }
    if (s.type === "multi") track("q_ans", { step: stepName, pos: step + 1, key: s.key, a: list(data, s.key).join("|"), n: list(data, s.key).length });
    go(step + 1);
  };

  const submit = async () => {
    const name = str(data, "name").trim(), email = str(data, "email").trim();
    if (!name) { setBad("name"); track("gate_err", { field: "name" }); return; }
    if (!EMAIL_RE.test(email)) { setBad("email"); track("gate_err", { field: "email" }); return; }
    const phone = cleanPhone(str(data, "whatsapp"));
    if (sms && !PHONE_RE.test(phone)) { setBad("whatsapp"); track("gate_err", { field: "phone" }); return; }
    if (sentRef.current) return;
    setBad(""); setBusy(true);
    if (/@example\.com$/i.test(email)) setTestMode(true);
    track("submit");

    /* Honeypot: bots fill the hidden field. Look successful, send nothing. */
    if (str(data, "company_website")) {
      track("gate_result", { r: "hp" });
      sentRef.current = true; setBusy(false); setSent(true); onStep("done"); return;
    }

    const payload = Q.lead(data, readUtm());
    trackLead({ name, email, [Q.companyKey]: str(data, Q.companyKey), website: str(data, "website"), whatsapp: str(data, "whatsapp"), ...Q.summary(data) });
    let ok = false;
    try {
      const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
      ok = r.ok;
    } catch { ok = false; }
    track("lead_mail", { ok: ok ? 1 : 0 });
    if (!ok) { setBusy(false); setBad("submit"); track("gate_result", { r: "fail" }); return; }

    sentRef.current = true;
    track("gate_result", { r: "ok" });
    pushLeadEvent(Q.summary(data));
    /* Omnisend: subscribe + tags/props + personal booking link (server route; never blocks the lead) */
    try {
      fetch(SUBMIT_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
        body: JSON.stringify({ funnel: cfg.fn.replace("aeo-", ""), email, name, phone: sms ? phone : "", sms_consent: sms ? "yes" : "", omni: Q.omni(data) }),
      }).then((r) => track("omni", { res: r.headers.get("x-omnisend") || String(r.status), sms: sms ? 1 : 0 })).catch(() => track("omni", { res: "network" }));
    } catch {}
    try { if (typeof window.fbq === "function") window.fbq("track", "Lead", { content_name: cfg.pixel.lead }); } catch {}
    adConversions(email);
    setBusy(false); setSent(true); onStep("done");
    onSent(data);
  };

  const field = (f: Field, onEnter?: () => void) => (
    <div key={f.key} className={"fld" + (bad === f.key ? " bad" : "")}>
      <label htmlFor={"aeo-" + f.key}>{f.label}</label>
      {f.area
        ? <textarea id={"aeo-" + f.key} className="inp" placeholder={f.ph || ""} value={str(data, f.key)} onChange={(e) => set(f.key, e.target.value)} />
        : <input id={"aeo-" + f.key} className="inp" type={f.type || "text"} placeholder={f.ph || ""} value={str(data, f.key)} onChange={(e) => set(f.key, e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && onEnter) onEnter(); }}
            autoComplete={f.key === "email" ? "email" : f.key === "name" ? "given-name" : f.type === "tel" ? "tel" : "off"} />}
    </div>
  );

  const pct = sent ? 100 : Math.round((step / total) * 100);
  let body: React.ReactNode;
  if (sent) {
    body = (
      <div className="done">
        {/* Confirmation step: the confirmation email (Omnisend automation 1) links to /aeo/{funnel}/confirmed */}
        <div className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#0b0e22" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></div>
        <h3>Check your inbox to confirm.</h3>
        <p>We sent a confirmation email to <b>{str(data, "email").trim()}</b>. Click the button in it to confirm, and we’ll start on your AI Growth Report.</p>
        <p className="qnote">Can’t see it in a minute? Check your spam or promotions folder.</p>
        <button type="button" className="booknow" onClick={onBook}>Or book your call now <Arrow /></button>
      </div>
    );
  } else {
    body = (
      <div className="qstep" key={step}>
        <div className="qn">Question {step + 1} of {total}</div>
        <h3>{s.q}</h3>
        {s.type === "multi" && s.hint ? <p className="qhint">{s.hint}</p> : null}
        {(s.type === "single" || s.type === "multi") && (
          <div className="opts">
            {s.options.map((o, i) => {
              const on = s.type === "single" ? picked === o : list(data, s.key).includes(o);
              const full = s.type === "multi" && !!s.cap && list(data, s.key).length >= s.cap;
              return (
                <button type="button" key={o} className={"opt" + (on ? " on" : "") + (full && !on ? " dis" : "")}
                  onClick={() => (s.type === "single" ? pick(s.key, o) : toggle(s.key, o, s.cap))}>
                  <span className="key">{KEYS[i]}</span>{disp(o)}
                </button>
              );
            })}
          </div>
        )}
        {s.type === "multi" && list(data, s.key).length > 0 && <div className="qnav qin"><button type="button" className="btn grow" onClick={next}>Continue <Arrow /></button></div>}
        {s.type === "fields" && (
          <>
            <div style={{ marginTop: 18 }}>{s.fields.map((f) => field(f, next))}</div>
            {s.note ? <p className="qnote" style={{ marginTop: -4 }}>{s.note}</p> : null}
            <div className="qnav"><button type="button" className="btn grow" onClick={next}>Continue <Arrow /></button></div>
          </>
        )}
        {s.type === "contact" && (
          <>
            <div style={{ marginTop: 18 }}>{s.fields.map((f) => (
              <div key={f.key}>
                {field(f, submit)}
                {f.key === "whatsapp" && str(data, "whatsapp").trim() ? (
                  <label className={"smsok" + (bad === "whatsapp" ? " bad" : "")}>
                    <input type="checkbox" checked={sms} onChange={(e) => { setSms(e.target.checked); setBad(""); }} />
                    <span>{SMS_CONSENT}</span>
                  </label>
                ) : null}
                {f.key === "whatsapp" && bad === "whatsapp" ? <p className="qerr" style={{ marginTop: -6, marginBottom: 12 }}>Enter your mobile with the country code, like +44 7700 900123, or untick the box.</p> : null}
              </div>
            ))}</div>
            {/* honeypot, invisible to people */}
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={str(data, "company_website")} onChange={(e) => set("company_website", e.target.value)} style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }} />
            <div className="qnav"><button type="button" className="btn grow" onClick={submit} disabled={busy}>{busy ? "Sending…" : Q.submitLabel} {busy ? null : <Arrow />}</button></div>
            {bad === "submit" && <p className="qerr">Something went wrong. Please try again.</p>}
            <p className="qnote">{Q.finalNote}</p>
          </>
        )}
      </div>
    );
  }

  /* No backdrop click-to-close: only the close button (or Esc) closes the quiz. */
  return (
    <div className={"ov" + (open ? " on" : "")} aria-hidden={!open}>
      <div className="mdl quiz" role="dialog" aria-modal="true" aria-label="Request form">
        <button type="button" className="x" aria-label="Close" onClick={onClose}>&#x2715;</button>
        <div className="qtop"><div className="qbar"><i style={{ width: pct + "%" }} /></div><span className="qpct">{pct}%</span></div>
        <div className="mdl-in" ref={boxRef}>{body}</div>
      </div>
    </div>
  );
}
