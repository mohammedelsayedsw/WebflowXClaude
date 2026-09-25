"use client";

import { useCallback, useEffect, useState } from "react";
import "./retention-90.css";
import { QUESTIONS } from "./copy";
import { computeLeak, computeScore, fmt } from "./scoring";
import { DL_EVENT, FORM_ENDPOINT, LEAD_SUBJECT, LI_CONVERSION_ID, NOTIFY_CC, PIXEL_CONTENT, SUBMIT_ENDPOINT, VERTICAL } from "./status";
import { Call, Cases, Facts, Flows, Hero, Objections, Proof, Steps, Team, Terms } from "./Landing";
import { Gate, Quiz } from "./Quiz";
import { Summary } from "./Summary";
import { BookingModal } from "./BookingModal";

type Screen = "lp" | "quiz" | "gate" | "summary";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    lintrk?: (action: string, data: { conversion_id: number }) => void;
    _hsq?: unknown[];
  }
}

export function Retention90() {
  const [screen, setScreen] = useState<Screen>("lp");
  const [store, setStore] = useState("");
  const [qi, setQi] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [book, setBook] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [bookingUrl, setBookingUrl] = useState("");

  useEffect(() => { window.scrollTo(0, 0); }, [screen, qi]);

  const startQuiz = useCallback((s?: string) => {
    if (!quizStarted) {
      setQuizStarted(true);
      try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "quiz_start", vertical: VERTICAL }); } catch {}
    }
    const st = s || store;
    if (s) setStore(s);
    setQi(st ? 0 : -1);
    setScreen("quiz");
  }, [quizStarted, store]);

  const onStore = useCallback((s: string) => { setStore(s); setQi(0); }, []);

  const onPick = useCallback((key: string, value: number, label: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setLabels((l) => ({ ...l, [key]: label }));
    if (qi + 1 < QUESTIONS.length) setQi(qi + 1); else setScreen("gate");
  }, [qi]);

  const quizBack = useCallback(() => {
    if (screen === "gate") { setScreen("quiz"); setQi(QUESTIONS.length - 1); return; }
    if (qi > (store ? 0 : -1)) setQi(qi - 1); else setScreen("lp");
  }, [screen, qi, store]);

  const submitGate = useCallback((name: string, email: string, honeypot: string) => {
    const score = computeScore(answers), leak = computeLeak(answers);
    const payload: Record<string, string> = {
      name, email, store,
      vertical: VERTICAL,
      retentionScore: score + "/100",
      estimatedOpportunity: fmt(leak) + "/mo",
      consent: "yes",
      company_website: honeypot,
    };
    QUESTIONS.forEach((Q) => { payload[Q.q] = labels[Q.k] || ""; });
    const P = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => { const v = P.get(k); if (v) payload[k] = v; });
    payload.page = window.location.href.split("?")[0];

    /* 1. gate decides (blocklists, honeypot, rate limits) and returns the booking link.
          On pass the browser sends the lead to formsubmit itself, adding the ip/country the
          gate saw. If the gate is unreachable, the lead is still sent (fail open), no booking link. */
    const sendLead = (extra: Record<string, string>) => {
      const lead: Record<string, string> = { ...payload, ...extra, _subject: LEAD_SUBJECT + store, _template: "table", _cc: NOTIFY_CC };
      delete lead.company_website;
      return fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(lead) }).catch(() => {});
    };
    try {
      fetch(SUBMIT_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) })
        .then((r) => r.json() as Promise<{ ok?: boolean; bookingUrl?: string; ip?: string; country?: string }>)
        .then((j) => {
          if (j && j.bookingUrl) { setBookingUrl(j.bookingUrl); sendLead({ ip: j.ip || "", country: j.country || "", user_agent: navigator.userAgent }); }
        })
        .catch(() => { sendLead({ gate: "unreachable", user_agent: navigator.userAgent }); });
    } catch {}
    /* 2. Meta, same Lead event the audit funnels fire */
    try { if (typeof window.fbq === "function") window.fbq("track", "Lead", { content_name: PIXEL_CONTENT, value: leak, currency: "USD" }); } catch {}
    /* 2b. LinkedIn: event-specific Lead conversion (Insight Tag already on the page) */
    try { if (typeof window.lintrk === "function") window.lintrk("track", { conversion_id: LI_CONVERSION_ID }); } catch {}
    /* 3. GTM / GA4 */
    try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: DL_EVENT, vertical: VERTICAL, retention_score: score, estimated_opportunity: leak, store }); } catch {}
    /* 4. HubSpot: identify the contact so the scan attaches to the timeline */
    try {
      const hsq = (window._hsq = window._hsq || []);
      hsq.push(["identify", { email, firstname: name, website: store }]);
      hsq.push(["setPath", window.location.pathname]);
      hsq.push(["trackPageView"]);
    } catch {}
    setScreen("summary");
  }, [answers, labels, store]);

  const openBook = useCallback(() => setBook(true), []);
  const closeBook = useCallback(() => setBook(false), []);

  return (
    <div className="r90">
      {screen === "lp" && (
        <div id="screen-lp">
          <Hero onStart={startQuiz} />
          <Proof />
          <Facts />
          <Cases />
          <Steps onStart={startQuiz} />
          <Flows />
          <Team />
          <Terms />
          <Objections />
          <Call onStart={startQuiz} />
        </div>
      )}
      {screen === "quiz" && <Quiz store={store} qi={qi} onStore={onStore} onPick={onPick} onBack={quizBack} />}
      {screen === "gate" && <Gate store={store} onBack={quizBack} onSubmit={submitGate} />}
      {screen === "summary" && <Summary store={store} answers={answers} labels={labels} onBook={openBook} />}
      <BookingModal open={book} onClose={closeBook} store={store} bookingUrl={bookingUrl} answers={answers} />
    </div>
  );
}
