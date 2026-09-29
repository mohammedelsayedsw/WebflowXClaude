"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./retention-90.css";
import { QUESTIONS } from "./copy";
import { computeLeak, computeScore, fmt, fmtK } from "./scoring";
import { DL_EVENT, FORM_ENDPOINT, LEAD_SUBJECT, LI_CONVERSION_ID, NOTIFY_CC, PIXEL_CONTENT, SUBMIT_ENDPOINT, VERTICAL } from "./status";
import { Call, Cases, EntryHero, Facts, FixHero, Flows, LIFT_CTA, Objections, Proof, Steps, Team, Terms } from "./Landing";
import { Gate, Quiz } from "./Quiz";
import { Summary } from "./Summary";
import { BookingModal } from "./BookingModal";
import { R90Footer, R90Header } from "./SiteChrome";
import { setTestMode, track, trackLanding, watchCalendly, watchExit, watchFolds, watchOutbound } from "./track";

type Screen = "lp" | "quiz" | "gate" | "summary" | "fix";

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
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [book, setBook] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [bookingUrl, setBookingUrl] = useState("");
  const stepRef = useRef("lp");
  const qShownAt = useRef(0);
  const bookAt = useRef(0);

  useEffect(() => { window.scrollTo(0, 0); }, [screen, qi]);

  /* ---- funnel analytics (hub collector + dataLayer) ---- */
  const step = book ? "book" : screen === "lp" ? "lp" : screen === "quiz" ? (qi >= QUESTIONS.length ? "store" : "q" + (qi + 1)) : screen;
  stepRef.current = step;
  useEffect(() => {
    trackLanding();
    const offs = [watchOutbound(), watchCalendly(), watchExit(() => stepRef.current)];
    return () => offs.forEach((f) => f());
  }, []);
  useEffect(() => {
    if (screen !== "fix") return;
    return watchFolds(document.getElementById("screen-fix"));
  }, [screen]);
  useEffect(() => {
    if (screen === "quiz" && qi < QUESTIONS.length) { qShownAt.current = Date.now(); track("q_view", { k: QUESTIONS[qi].k, n: qi + 1 }); }
    if (screen === "gate") track("gate_view");
    if (screen === "summary") track("summary_view");
    if (screen === "quiz" && qi === QUESTIONS.length) track("store_view");
  }, [screen, qi]);

  const startQuiz = useCallback((where = "hero") => {
    track("start", { where });
    if (!quizStarted) {
      setQuizStarted(true);
      try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "quiz_start", vertical: VERTICAL }); } catch {}
    }
    setQi(0);
    setScreen("quiz");
  }, [quizStarted]);

  /* URL step comes after Q8; the email gate follows it. */
  const onStore = useCallback((s: string) => { track("store"); setStore(s); setScreen("gate"); }, []);

  const onPick = useCallback((key: string, value: number, label: string) => {
    track("q_ans", { k: key, n: qi + 1, a: label, v: value, sec: Math.round((Date.now() - qShownAt.current) / 100) / 10 });
    setAnswers((a) => ({ ...a, [key]: value }));
    setLabels((l) => ({ ...l, [key]: label }));
    setQi(qi + 1);
  }, [qi]);

  const quizBack = useCallback(() => {
    track("back", { from: stepRef.current });
    if (screen === "gate") { setScreen("quiz"); setQi(QUESTIONS.length); return; }
    if (qi > 0) setQi(qi - 1); else setScreen("lp");
  }, [screen, qi]);

  const submitGate = useCallback((name: string, email: string, honeypot: string) => {
    const score = computeScore(answers), leak = computeLeak(answers);
    if (/@example\.com$/i.test(email)) setTestMode(true);
    track("submit", { score, leak, store, hp: honeypot ? 1 : 0 });
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
          track("gate_result", { pass: j && j.bookingUrl ? 1 : 0, country: (j && j.country) || "" });
          if (j && j.bookingUrl) { setBookingUrl(j.bookingUrl); sendLead({ ip: j.ip || "", country: j.country || "", user_agent: navigator.userAgent }); }
        })
        .catch(() => { track("gate_result", { pass: "unreachable" }); sendLead({ gate: "unreachable", user_agent: navigator.userAgent }); });
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

  const openBook = useCallback((where: string) => { bookAt.current = Date.now(); track("book_open", { where }); setBook(true); }, []);
  const goFix = useCallback(() => { track("fix_view"); setScreen("fix"); }, []);
  const backToScore = useCallback(() => { track("back", { from: "fix" }); setScreen("summary"); }, []);
  const closeBook = useCallback(() => { track("book_close", { sec: Math.round((Date.now() - bookAt.current) / 1000) }); setBook(false); }, []);
  const onGateError = useCallback((kind: string) => track("gate_err", { kind }), []);

  return (
    <div className="r90">
      <R90Header
        showCta={screen === "summary" || screen === "fix"}
        label={screen === "fix" ? LIFT_CTA : "Fix my revenue leak"}
        onCta={() => (screen === "fix" ? openBook("header") : goFix())}
      />
      {screen === "lp" && (
        <div id="screen-lp">
          <EntryHero onStart={startQuiz} />
        </div>
      )}
      {screen === "quiz" && <Quiz store={store} qi={qi} onStore={onStore} onPick={onPick} onBack={quizBack} />}
      {screen === "gate" && <Gate store={store} onBack={quizBack} onSubmit={submitGate} onError={onGateError} />}
      {screen === "summary" && <Summary store={store} answers={answers} labels={labels} onFix={goFix} />}
      {screen === "fix" && (
        /* children map 1:1 to FOLDS in track.ts */
        <div id="screen-fix">
          <FixHero store={store} score={computeScore(answers)} upside={fmtK(computeLeak(answers))} onBack={backToScore} onBook={openBook} />
          <Proof />
          <Facts onBook={openBook} />
          <Cases />
          <Steps onBook={openBook} />
          <Flows />
          <Team onBook={openBook} />
          <Terms />
          <Objections />
          <Call onBook={openBook} />
        </div>
      )}
      <R90Footer />
      <BookingModal open={book} onClose={closeBook} store={store} bookingUrl={bookingUrl} answers={answers} />
    </div>
  );
}
