"use client";

import { useEffect, useRef, useState } from "react";
import { COPY, QUESTIONS, T, img } from "./copy";
import { cleanDomain, validDomain } from "./scoring";

const KEYS = "ABCDEF";

type QuizProps = {
  store: string;
  qi: number; // -1 = URL step
  onStore: (s: string) => void;
  onPick: (key: string, value: number, label: string) => void;
  onBack: () => void;
};

export function Quiz({ store, qi, onStore, onPick, onBack }: QuizProps) {
  const [url, setUrl] = useState("");
  const [err, setErr] = useState("");
  const urlRef = useRef<HTMLInputElement>(null);
  const total = QUESTIONS.length + 1;
  const stepn = store ? qi + 1 : qi + 2;
  const pct = Math.round((Math.max(0, stepn - 1) / total) * 100);
  const Q = qi >= 0 ? QUESTIONS[qi] : null;

  useEffect(() => { if (qi === -1) urlRef.current?.focus(); }, [qi]);

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
              <div className="qurl">
                <input ref={urlRef} type="text" placeholder="yourstore.com" value={url}
                  onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") urlGo(); }} />
                <div className="urlerr">{err}</div>
                <button className="btn big" style={{ width: "100%" }} onClick={urlGo}>{COPY.quizUI.urlBtn}</button>
              </div>
            </>
          ) : (
            <>
              <div className="qn">{T(COPY.quizUI.qLabel, { n: qi + 1, total: QUESTIONS.length })}{store ? ` · ${store}` : ""}</div>
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

type GateProps = {
  store: string;
  onBack: () => void;
  onSubmit: (name: string, email: string) => void;
};

export function Gate({ store, onBack, onSubmit }: GateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [consentErr, setConsentErr] = useState(false);

  const submit = () => {
    const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());
    setEmailErr(!ok);
    if (!ok) return;
    if (!consent) { setConsentErr(true); return; }
    onSubmit(name.trim(), email.trim());
  };

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
        <p>Enter your email to see your score now and get the full breakdown, including your estimated revenue gap, 90-day upside, and the flows with the biggest opportunity.</p>
        <input type="text" placeholder="First name" autoComplete="given-name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Work email" autoComplete="email" required className={emailErr ? "err" : ""} value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailErr(false); }} onKeyDown={(e) => { if (e.key === "Enter") submit(); }} />
        <label className="consent" style={consentErr ? { color: "#ff8f83" } : undefined}>
          <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); setConsentErr(false); }} />
          <span>Email me my full breakdown and, if there’s a strong fit, one follow-up from the lifecycle team. Unsubscribe anytime.</span>
        </label>
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
