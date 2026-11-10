"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./ga.css";
import type { ScanResult } from "@/app/api/growth/scan/route";
import { AREAS, MARKET_IN, MARKETS, QUESTIONS, pickAngle, type AngleKey } from "./copy";
import { CALL_GATE_EUR, DL_EVENT, LEAD_SUBJECT, LI_CONVERSION_ID, NOTIFY_CC, PIXEL_CONTENT, SCAN_ENDPOINT, SUBMIT_ENDPOINT, UPDATE_ENDPOINT } from "./config";
import { Faq, FinalCta, Guarantee, Hero, Modules, Proof, Steps, Team } from "./Landing";
import { Quiz } from "./Quiz";
import { FullResult, ScoreAndGate } from "./Result";
import { VideoPlayer } from "./Video";
import { adSpend, areaScores, eur, fixes, growthScore, revenue, target15, tierOf, type Answers, type Fix } from "./scoring";
import { setTestMode, track, trackLanding, trackLead, watchCalendly, watchExit, watchOutbound } from "@/sections/retention-90/track";
import { relayLead } from "@/lib/leadRelay";
import { postWithRetry } from "@/lib/postRetry";
import { assetUrl } from "@/lib/assets";

type Screen = "lp" | "quiz" | "score" | "result";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    lintrk?: (action: string, data: { conversion_id: number }) => void;
    _hsq?: unknown[];
  }
}

/* Deepest landing section reached, by section id. */
function watchSections(root: HTMLElement | null): () => void {
  if (!root || typeof IntersectionObserver === "undefined") return () => {};
  const kids = Array.from(root.children) as HTMLElement[];
  let max = -1;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const i = kids.indexOf(e.target as HTMLElement);
      if (i > max) { max = i; track("scroll", { fold: (e.target as HTMLElement).id || String(i), i }); }
    }
  }, { threshold: 0.35 });
  kids.forEach((k) => io.observe(k));
  return () => io.disconnect();
}

export function GrowthAccelerator() {
  const [screen, setScreen] = useState<Screen>("lp");
  const [angle, setAngle] = useState<AngleKey>("guarantee");
  const [market, setMarket] = useState("");
  const [store, setStore] = useState("");
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [scan, setScan] = useState<ScanResult | null>(null);
  const [video, setVideo] = useState<{ open: boolean; at: number }>({ open: false, at: 0 });
  const [bookingUrl, setBookingUrl] = useState("");
  const [email, setEmail] = useState("");
  const scanRef = useRef<ScanResult | null>(null);
  const scanId = useRef(0);
  const waitId = useRef(0);
  /* scan = the scan result the score was built from (null when it wasn't ready in time) */
  const [result, setResult] = useState<{ score: number; sc: ReturnType<typeof areaScores>; fx: Fix[]; scan: ScanResult | null } | null>(null);
  const [calcing, setCalcing] = useState(false);
  const stepRef = useRef("lp");
  const qAt = useRef(0);
  const leadRef = useRef<{ email: string; tags: string[] }>({ email: "", tags: [] });

  /* ---- page context: angle, market, deep links ---- */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const a = pickAngle(q);
    setAngle(a);
    const m = (q.get("m") || "").toLowerCase();
    if (MARKETS.some(([v]) => v === m)) { setMarket(m); setAnswers((x) => ({ ...x, market: m })); }
    trackLanding();
    track("angle", { a, m });
    const hash = () => {
      const h = window.location.hash.match(/^#watch(?:-(\d+))?$/);
      if (h) setVideo({ open: true, at: Number(h[1] || 0) });
    };
    hash();
    window.addEventListener("hashchange", hash);
    const onBooked = () => {
      track("booked");
      const { email: e, tags } = leadRef.current;
      if (e) fetch(UPDATE_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true, body: JSON.stringify({ kind: "booked", fn: "ga", email: e, tags }) }).catch(() => {});
    };
    const offs = [watchOutbound(), watchCalendly(onBooked), watchExit(() => stepRef.current)];
    return () => { window.removeEventListener("hashchange", hash); offs.forEach((f) => f()); };
  }, []);

  const step = screen === "quiz" ? "q" + (qi + 1) : screen;
  stepRef.current = step;
  useEffect(() => { window.scrollTo(0, 0); }, [screen, qi]);
  useEffect(() => {
    if (screen !== "lp") return;
    /* fold tracking on the landing sections, by id */
    return watchSections(document.getElementById("screen-lp"));
  }, [screen]);
  useEffect(() => {
    if (screen === "quiz") { qAt.current = Date.now(); track("q_view", { k: QUESTIONS[qi].k, n: qi + 1 }); }
    if (screen === "score") track("score_view");
    if (screen === "result") track("result_view");
  }, [screen, qi]);

  /* ---- start: the URL kicks off the homepage scan while the questions are answered ---- */
  const start = useCallback((d: string, where: string) => {
    setStore(d);
    setScan(null);
    scanRef.current = null;
    const id = ++scanId.current;
    track("start", { where });
    try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "growth_scan_start" }); } catch {}
    fetch(`${SCAN_ENDPOINT}?d=${encodeURIComponent(d)}`)
      .then((r) => r.json() as Promise<ScanResult>)
      .then((s) => { if (id !== scanId.current) return; scanRef.current = s; setScan(s); track("scan", { ok: s.ok ? 1 : 0, pf: s.platform || "", ms: s.ms || 0 }); })
      .catch(() => { if (id !== scanId.current) return; scanRef.current = { ok: false }; setScan({ ok: false }); track("scan", { ok: 0 }); });
    /* a market from the ad link answers question 2 already: skip it */
    setQi(0);
    setScreen("quiz");
  }, []);

  const onPick = useCallback((k: string, v: string | string[], label: string) => {
    track("q_ans", { k, n: qi + 1, a: label.slice(0, 80), sec: Math.round((Date.now() - qAt.current) / 100) / 10 });
    const next = { ...answers, [k]: v } as Answers;
    setAnswers(next);
    setLabels((l) => ({ ...l, [k]: label }));
    let n = qi + 1;
    if (QUESTIONS[n]?.k === "market" && market) n += 1;
    if (n < QUESTIONS.length) { setQi(n); return; }
    /* last answer: score now (scan may still be running; it is waited for up to 4 s) */
    const wait = ++waitId.current;
    const finish = (s: ScanResult | null) => {
      if (wait !== waitId.current) return; /* visitor went back meanwhile */
      setCalcing(false);
      const sc = areaScores(next, s);
      setResult({ score: growthScore(sc), sc, fx: fixes(next, s, sc), scan: s });
      setScreen("score");
    };
    /* waits for the homepage scan (server budget 8 s) up to 9 s, then scores from answers alone */
    const waitFrom = Date.now();
    if (!scanRef.current) setCalcing(true);
    const tick = () => {
      if (scanRef.current) finish(scanRef.current);
      else if (Date.now() - waitFrom > 9000) finish(null);
      else setTimeout(tick, 200);
    };
    tick();
  }, [answers, qi, market]);

  const back = useCallback(() => {
    track("back", { from: stepRef.current });
    waitId.current++;
    setCalcing(false);
    if (screen === "score") { setScreen("quiz"); setQi(QUESTIONS.length - 1); return; }
    let n = qi - 1;
    if (QUESTIONS[n]?.k === "market" && market) n -= 1;
    if (n >= 0) setQi(n); else setScreen("lp");
  }, [screen, qi, market]);

  /* ---- email step: Omnisend (server), lead email + hub (browser), ad conversions ---- */
  const submit = useCallback((name: string, mail: string, phone: string, hp: string) => {
    if (!result) return;
    if (/@example\.com$/i.test(mail)) setTestMode(true);
    const tier = tierOf(answers, CALL_GATE_EUR);
    const rev = revenue(answers), target = target15(answers);
    const sc = result.sc;
    const props: Record<string, string> = {
      ga_store: store, ga_score: String(result.score),
      ga_goal: answers.goal || "", ga_market: answers.market || "", ga_channels: (answers.channels || []).join(","),
      ga_revenue: labels.rev || "", ga_rev_eur: String(rev), ga_spend: labels.spend || "", ga_spend_eur: String(adSpend(answers)),
      ga_when: answers.when || "", ga_target_eur: eur(target), ga_angle: angle,
      ga_platform: result.scan?.platform || "", ga_scanned: result.scan?.ok ? "yes" : "no", ga_esp: result.scan?.esp || "",
      ga_scan_date: new Date().toISOString().slice(0, 10),
    };
    AREAS.forEach((a) => { props["ga_s_" + a.k] = String(sc[a.k]); });
    result.fx.slice(0, 3).forEach((f, i) => {
      props[`ga_fix${i + 1}_title`] = f.title;
      props[`ga_fix${i + 1}_why`] = f.why.slice(0, 480);
      props[`ga_fix${i + 1}_value`] = f.value > 0 ? eur(f.value) : "";
    });
    const tags = [
      "ga-goal-" + (answers.goal || "none"), "ga-market-" + (answers.market || "none"),
      "ga-rev-" + (answers.rev || "none"), "ga-when-" + (answers.when || "none"),
      ...(result.scan?.platform ? ["ga-pf-" + result.scan.platform.toLowerCase().replace(/[^a-z0-9]+/g, "-")] : []),
      "ga-weak-" + AREAS.slice().sort((x, y) => sc[x.k] - sc[y.k])[0].k,
    ];
    leadRef.current = { email: mail, tags };
    setEmail(mail);
    track("submit", { score: result.score, tier, rev, hp: hp ? 1 : 0, phone: phone ? 1 : 0 });

    const lead: Record<string, string> = {
      name, email: mail, store, phone, tier, growthScore: result.score + "/100",
      revenue: labels.rev || "", adSpend: labels.spend || "", goal: labels.goal || "", market: labels.market || "",
      channels: labels.channels || "", start: labels.when || "", target15: eur(target) + "/mo", angle,
      platform: result.scan?.platform || (result.scan?.ok ? "not detected" : "scan not available"),
      topFixes: result.fx.slice(0, 3).map((f) => f.title).join(" | "),
      page: window.location.href.split("?")[0],
      _subject: LEAD_SUBJECT + store + (tier === "cold" ? " (under €50K)" : tier === "hot" ? " (qualified, start now)" : " (qualified, exploring)"),
      _template: "table", _cc: NOTIFY_CC,
    };
    const P = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => { const v = P.get(k); if (v) lead[k] = v; });

    postWithRetry(SUBMIT_ENDPOINT, { name, email: mail, store, phone, rev: answers.rev || "", when: answers.when || "", company_website: hp, omni: { props, tags } })
      .then(async ({ res, tries }) => {
        let j: { bookingUrl?: string; country?: string } | null = null;
        try { j = res ? await res.json() : null; } catch { j = null; }
        if (j?.bookingUrl) setBookingUrl(j.bookingUrl);
        track("gate_result", { pass: j ? 1 : "unreachable", tries, omni: res?.headers.get("x-omnisend") || "" });
        if (!hp) {
          trackLead({ name, email: mail, store, score: String(result.score), tier, country: j?.country || "" });
          relayLead("retention", { ...lead, country: j?.country || "" }).then((r) => track("lead_mail", { pass: r.fsOk ? 200 : 0, kind: r.fsKind, hub: r.hub }));
        }
      })
      .catch(() => track("gate_result", { pass: "unreachable" }));

    /* ad platforms: Lead for everyone, a separate qualified event so Meta can optimise on bigger stores */
    try {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: PIXEL_CONTENT, value: target, currency: "EUR" });
        if (tier !== "cold") window.fbq("trackCustom", "QualifiedLead", { content_name: PIXEL_CONTENT, tier, value: target, currency: "EUR" });
      }
    } catch {}
    try { if (typeof window.lintrk === "function") window.lintrk("track", { conversion_id: LI_CONVERSION_ID }); } catch {}
    try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: DL_EVENT, growth_score: result.score, tier, store }); } catch {}
    try {
      const hsq = (window._hsq = window._hsq || []);
      hsq.push(["identify", { email: mail, firstname: name, website: store }]);
      hsq.push(["setPath", window.location.pathname]);
      hsq.push(["trackPageView"]);
    } catch {}
    setScreen("result");
  }, [answers, labels, store, angle, result]);

  const toScan = useCallback(() => {
    track("cta_scroll");
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => (document.getElementById("ga-url-hero") as HTMLInputElement | null)?.focus({ preventScroll: true }), 500);
  }, []);
  const openVideo = useCallback(() => setVideo({ open: true, at: 0 }), []);
  const closeVideo = useCallback(() => {
    setVideo({ open: false, at: 0 });
    if (/^#watch/.test(window.location.hash)) history.replaceState(null, "", window.location.pathname + window.location.search);
  }, []);

  const tier = tierOf(answers, CALL_GATE_EUR);
  return (
    <div className="ga">
      <header className="ga-top">
        <div className="ga-wrap ga-top-in">
          <img src={assetUrl("/shared/logos/scandiweb.svg")} alt="scandiweb" className="ga-logo" />
          {screen === "lp" ? <button className="ga-btn sm" onClick={toScan}>Free Growth Scan</button> : null}
        </div>
      </header>
      {screen === "lp" && (
        <div id="screen-lp">
          {/* each child has an id: the scroll event reports the deepest one reached */}
          <Hero angle={angle} market={MARKET_IN[market] || ""} onStart={start} onPlay={openVideo} />
          <Steps />
          <Modules onCta={toScan} />
          <Proof />
          <Guarantee onCta={toScan} />
          <Team />
          <Faq />
          <FinalCta onStart={start} />
        </div>
      )}
      {screen === "quiz" && calcing && (
        <section className="ga-quiz"><div className="ga-wrap ga-qbody"><div className="ga-qcard ga-calc">
          <span className="ga-dot busy" /> Finishing the scan of {store} and building your score…
          <button className="ga-back" onClick={back}>&larr; Back</button>
        </div></div></section>
      )}
      {screen === "quiz" && !calcing && <Quiz store={store} qi={qi} answers={answers} scan={scan} onPick={onPick} onBack={back} />}
      {screen === "score" && result && (
        <ScoreAndGate store={store} score={result.score} sc={result.sc} fixList={result.fx} scanned={!!result.scan?.ok} onSubmit={submit} onBack={back} />
      )}
      {screen === "result" && result && (
        <FullResult tier={tier} store={store} score={result.score} sc={result.sc} fixList={result.fx} target={target15(answers)}
          bookingUrl={bookingUrl} email={email} onBookView={() => track("book_view")} />
      )}
      <footer className="ga-foot"><div className="ga-wrap"><img src={assetUrl("/shared/logos/scandiweb.svg")} alt="scandiweb" /><span>&copy; 2026 scandiweb SIA. All rights reserved.</span></div></footer>
      <VideoPlayer open={video.open} start={video.at} onClose={closeVideo} />
    </div>
  );
}

