"use client";

import { useEffect, useRef, useState } from "react";
import { COPY, QUESTIONS, SMS_CONSENT, T, img } from "./copy";
import { cleanDomain, validDomain } from "./scoring";

const KEYS = "ABCDEF";

type QuizProps = {
  store: string;
  qi: number; // QUESTIONS.length = URL step (last, before the email gate)
  onStore: (s: string) => void;
  onPick: (key: string, value: number, label: string) => void;
  onBack: () => void;
};

export function Quiz({ store, qi, onStore, onPick, onBack }: QuizProps) {
  const [url, setUrl] = useState(store);
  const [err, setErr] = useState("");
  const urlRef = useRef<HTMLInputElement>(null);
  const total = QUESTIONS.length + 1;
  const pct = Math.round((qi / total) * 100);
  const Q = qi < QUESTIONS.length ? QUESTIONS[qi] : null;

  useEffect(() => { if (qi === QUESTIONS.length) urlRef.current?.focus(); }, [qi]);

  useEffect(() => {
    if (!Q) return;
    const onKey = (e: KeyboardEvent) => {
      const i = KEYS.indexOf(e.key.toUpperCase());
      if (i > -1 && i < Q.o.length) onPick(Q.k, Q.o[i][1], Q.o[i][0]);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [Q, onPick]);

  const urlGo = () => {
    const v = cleanDomain(url);
    if (!validDomain(v)) { setErr(COPY.quizUI.urlErr); return; }
    setErr("");
    onStore(v);
  };

  return (
    <div id="screen-quiz" className="screen">
      <div className="qhead">
        <div className="wrap"><button className="qback" onClick={onBack}>← Back</button></div>
        <div className="progrow"><div className="progress"><i style={{ width: pct + "%" }} /></div><span className="ppct">{pct}%</span></div>
      </div>
      <div className="qbody">
        <div className="qcard" key={qi}>
          {Q === null ? (
            <>
              <div className="qn">{COPY.quizUI.urlLabel}</div>
              <div className="qq">{COPY.quizUI.urlQ}</div>
              {COPY.quizUI.urlH ? <div className="qh">{COPY.quizUI.urlH}</div> : null}
              <div className="qurl">
                <input ref={urlRef} type="text" placeholder="yourstore.com" value={url}
                  onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") urlGo(); }} />
                <div className="urlerr">{err}</div>
                <button className="btn big" style={{ width: "100%" }} onClick={urlGo}>{COPY.quizUI.urlBtn}</button>
              </div>
            </>
          ) : (
            <>
              <div className="qn">{T(COPY.quizUI.qLabel, { n: qi + 1, total: QUESTIONS.length })}</div>
              <div className="qq">{Q.q}</div>
              {Q.h ? <div className="qh">{Q.h}</div> : <div style={{ height: 14 }} />}
              <div className="opts">
                {Q.o.map((opt, i) => (
                  <button key={opt[0]} className="opt" onClick={() => onPick(Q.k, opt[1], opt[0])}>
                    <span className="key">{KEYS[i]}</span>{opt[0]}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

type GateField = "email" | "consent" | "phone" | "sms_consent";

type GateProps = {
  store: string;
  onBack: () => void;
  /* phone is "" unless a valid number was entered AND the SMS box was ticked */
  onSubmit: (name: string, email: string, honeypot: string, phone: string) => void;
  onError?: (kind: string) => void;
};

export function normPhone(v: string) {
  let p = v.trim().replace(/[\s().-]/g, "");
  if (p.startsWith("00")) p = "+" + p.slice(2);
  return p;
}

export function Gate({ store, onBack, onSubmit, onError }: GateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [phone, setPhone] = useState("");
  const [sms, setSms] = useState(false);
  /* One visible error at a time, shown under the field that blocked the submit (role="alert"). */
  const [err, setErr] = useState<{ field: GateField; msg: string } | null>(null);
  const refs = {
    email: useRef<HTMLInputElement>(null),
    consent: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    sms_consent: useRef<HTMLInputElement>(null),
  };
  const clear = (f: GateField) => setErr((e) => (e && e.field === f ? null : e));

  const fail = (field: GateField, msg: string) => {
    setErr({ field, msg });
    onError?.(field);
    /* bring the field into view (mobile: the checkbox can sit under the keyboard or off-screen) */
    requestAnimationFrame(() => {
      const el = refs[field].current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight) el.scrollIntoView({ behavior: "smooth", block: "center" });
      if (field === "email" || field === "phone") el.focus({ preventScroll: true });
    });
  };

  const submit = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return fail("email", "Enter a valid email so we can send your score.");
    if (!consent) return fail("consent", "Tick the box so we can email your score.");
    /* mobile is optional; if one is typed it must be valid and have its own SMS consent */
    const p = normPhone(phone);
    if (p) {
      if (!/^\+[1-9]\d{6,14}$/.test(p)) return fail("phone", "Enter your mobile with the country code, like +44 7700 900123, or leave it empty.");
      if (!sms) return fail("sms_consent", "Tick the SMS box so we can text you, or leave the mobile empty.");
    }
    setErr(null);
    onSubmit(name.trim(), email.trim(), hp, p && sms ? p : "");
  };
  const errFor = (f: GateField) => (err && err.field === f ? <div className="gerr" id={"gerr-" + f} role="alert">{err.msg}</div> : null);
  const inv = (f: GateField) => (err && err.field === f ? { "aria-invalid": true as const, "aria-describedby": "gerr-" + f } : {});

  return (
    <div id="screen-gate" className="screen">
      <div className="qhead">
        <div className="wrap"><button className="qback" onClick={onBack}>← Back</button></div>
        <div className="progrow"><div className="progress"><i style={{ width: "100%" }} /></div><span className="ppct">100%</span></div>
      </div>
      <div className="qbody"><div className="gate">
        <div className="ring-teaser" />
        <div><span className="domchip">{store}</span></div>
        <h2>Your Retention Score is ready.</h2>
        <p>Enter your email to see your score now, including your estimated revenue gap, 90-day upside, and the flows with the biggest opportunity.</p>
        <input type="text" placeholder="First name" autoComplete="given-name" value={name} onChange={(e) => setName(e.target.value)} />
        {/* honeypot: hidden from people, filled by bots; checked server-side */}
        <div className="hp" aria-hidden="true"><input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></div>
        <input ref={refs.email} type="email" placeholder="Work email" autoComplete="email" required className={err?.field === "email" ? "err" : ""} value={email}
          {...inv("email")}
          onChange={(e) => { setEmail(e.target.value); clear("email"); }} onKeyDown={(e) => { if (e.key === "Enter") submit(); }} />
        {errFor("email")}
        <label className={"consent" + (err?.field === "consent" ? " invalid" : "")}>
          <input ref={refs.consent} type="checkbox" checked={consent} {...inv("consent")}
            onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) clear("consent"); }} />
          <span>Email me my results and tips. Unsubscribe anytime.</span>
        </label>
        {errFor("consent")}
        <span className="optl">Mobile (optional)</span>
        <input ref={refs.phone} type="tel" inputMode="tel" placeholder="+44 7700 900123" autoComplete="tel" value={phone}
          className={err?.field === "phone" ? "err" : ""} {...inv("phone")}
          onChange={(e) => { setPhone(e.target.value); clear("phone"); if (!e.target.value.trim()) clear("sms_consent"); }} onKeyDown={(e) => { if (e.key === "Enter") submit(); }} />
        {errFor("phone")}
        {phone.trim() ? (
          <label className={"consent sms" + (err?.field === "sms_consent" ? " invalid" : "")}>
            <input ref={refs.sms_consent} type="checkbox" checked={sms} {...inv("sms_consent")}
              onChange={(e) => { setSms(e.target.checked); if (e.target.checked) clear("sms_consent"); }} />
            <span>{SMS_CONSENT}</span>
          </label>
        ) : null}
        {errFor("sms_consent")}
        <button className="btn big" style={{ width: "100%" }} onClick={submit}>Show my score →</button>
        <p className="priv">No spam. No list selling. Your data stays private.</p>
        <div className="gproof">
          <div className="q">“We decided to give scandiweb full ownership towards our eCommerce ecosystem. It was the right choice.”</div>
          <div className="w">Oskar Röös, CIO · Byggmax</div>
          <div className="l">
            <img className="tall" src={img("christmas-tree-world.webp")} alt="Christmas Tree World" />
            <img src={img("felco.webp")} alt="FELCO" />
            <img src={img("byggmax.webp")} alt="Byggmax" />
            <img src={img("asset-10.webp")} alt="Klaviyo Master Platinum partner" />
          </div>
        </div>
      </div></div>
    </div>
  );
}
