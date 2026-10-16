"use client";

import { useEffect, useRef, useState } from "react";
import { FORM_ENDPOINT } from "./config";
import { disp, list, str, type Field, type FunnelCfg, type QuizData, type Utm } from "./types";
import { pushLeadEvent, setTestMode, track, trackLead } from "./track";
import { Arrow } from "./ui";

const URL_RE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}.*$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export function Quiz({ cfg, open, onClose, onStep, onSent, onBook }: Props) {
  const Q = cfg.quiz;
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>(() => blank(cfg));
  const [bad, setBad] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
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
  const go = (n: number) => { setBad(""); setStep(n); };
  const restart = () => { setData(blank(cfg)); go(0); track("restart"); };

  const pick = (key: string, v: string) => {
    set(key, v);
    track("q_ans", { step: stepName, pos: step + 1, key, a: v });
    setTimeout(() => go(step + 1), 200);
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
    try { if (typeof window.fbq === "function") window.fbq("track", "Lead", { content_name: cfg.pixel.lead }); } catch {}
    setBusy(false); setSent(true); onStep("done");
    onSent(data);
  };

  const field = (f: Field) => (
    <div key={f.key} className={"fld" + (bad === f.key ? " bad" : "")}>
      <label htmlFor={"aeo-" + f.key}>{f.label}</label>
      {f.area
        ? <textarea id={"aeo-" + f.key} className="inp" placeholder={f.ph || ""} value={str(data, f.key)} onChange={(e) => set(f.key, e.target.value)} />
        : <input id={"aeo-" + f.key} className="inp" type={f.type || "text"} placeholder={f.ph || ""} value={str(data, f.key)} onChange={(e) => set(f.key, e.target.value)} autoComplete={f.key === "email" ? "email" : f.key === "name" ? "given-name" : "off"} />}
    </div>
  );

  let body: React.ReactNode;
  if (sent) {
    body = (
      <div className="done">
        <div className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#0b0e22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
        <h3>{Q.doneTitle}</h3>
        <p>{Q.doneBody}</p>
        <p>Want to talk it through sooner? Pick a 30-minute slot with Janis.</p>
        <div className="ctas" style={{ justifyContent: "center", marginTop: 18 }}>
          <button type="button" className="btn" onClick={onBook}>Book my 30-minute call <Arrow /></button>
          <button type="button" className="btn ghost" onClick={onClose}>Done</button>
        </div>
      </div>
    );
  } else {
    const back = step > 0 ? <button type="button" className="btn ghost" onClick={() => go(step - 1)}>Back</button> : null;
    body = (
      <>
        <button type="button" className="restart" onClick={restart}>&larr; Start over</button>
        <div className="prog">{Q.steps.map((_, i) => <i key={i} className={i <= step ? "on" : ""} />)}</div>
        <div className="qstep" key={step}>
          <h3>{s.q}</h3>
          {s.type === "multi" && s.hint ? <p className="qhint">{s.hint}</p> : null}
          {(s.type === "single" || s.type === "multi") && (
            <div className="opts">
              {s.options.map((o) => {
                const on = s.type === "single" ? str(data, s.key) === o : list(data, s.key).includes(o);
                const full = s.type === "multi" && !!s.cap && list(data, s.key).length >= s.cap;
                return (
                  <button type="button" key={o} className={"opt" + (s.type === "multi" ? " multi" : "") + (on ? " on" : "") + (full && !on ? " dis" : "")}
                    onClick={() => (s.type === "single" ? pick(s.key, o) : toggle(s.key, o, s.cap))}>
                    <span className="mk" />{disp(o)}
                  </button>
                );
              })}
            </div>
          )}
          {s.type === "multi" && s.other ? <div style={{ marginTop: 12 }}>{field({ key: s.other.key, label: s.other.label, area: true })}</div> : null}
          {(s.type === "fields" || s.type === "contact") && <div style={{ marginTop: 18 }}>{s.fields.map(field)}</div>}
          {s.type === "contact" && (
            /* honeypot, invisible to people */
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={str(data, "company_website")} onChange={(e) => set("company_website", e.target.value)} style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }} />
          )}
          {s.type === "fields" && s.note ? <p className="qnote" style={{ marginTop: -4 }}>{s.note}</p> : null}
          {(s.type === "multi" || s.type === "fields") && <div className="qnav">{back}<button type="button" className="btn grow" onClick={next}>Continue</button></div>}
          {s.type === "single" && back && <div className="qnav">{back}</div>}
          {s.type === "contact" && (
            <>
              <div className="qnav">{back}<button type="button" className="btn grow" onClick={submit} disabled={busy}>{busy ? "Sending…" : Q.submitLabel}</button></div>
              {bad === "submit" && <p className="qerr">Something went wrong. Please try again.</p>}
              <p className="qnote">{Q.finalNote}</p>
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <div className={"ov" + (open ? " on" : "")} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} aria-hidden={!open}>
      <div className="mdl" role="dialog" aria-modal="true" aria-label="Request form">
        <button type="button" className="x" aria-label="Close" onClick={onClose}>&#x2715;</button>
        <div className="mdl-in" ref={boxRef}>{body}</div>
      </div>
    </div>
  );
}
