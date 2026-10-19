"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CLINIC_CHART, CLINIC_DEMO_TABS, CLINIC_REPORT, CLINIC_REPORT_INSIDE, CLINIC_REPORT_NOTE, CLINIC_WORDS, CLINICS } from "./content-clinics";
import { Band, Cases, Credibility, CtaBtn, Faq, FinalCta, Guides, Hero, Leader, Newsletter, Proof, Report, Rotator } from "./Sections";
import { AeoShell } from "./Shell";
import { Counter, Icon, img, isReduced } from "./ui";

/* "Watch how your next patient chooses": typed prompt, then names, then the red line. */
function ChatDemo() {
  const [tab, setTab] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const d = CLINICS.cards[tab];

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setStarted(true); return; }
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (isReduced()) { setTyped(d.q); setPhase(2); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setTyped(""); setPhase(0);
      d.q.split("").forEach((_, i) => timers.push(setTimeout(() => setTyped(d.q.slice(0, i + 1)), 45 * i)));
      const end = 45 * d.q.length;
      timers.push(setTimeout(() => setPhase(1), end + 600));
      timers.push(setTimeout(() => setPhase(2), end + 2000));
      timers.push(setTimeout(run, end + 6000));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, [started, d.q]);

  return (
    <>
      <div className="tabs c">{CLINIC_DEMO_TABS.map((t, i) => <button key={t} type="button" className={"tab" + (i === tab ? " on" : "")} onClick={() => setTab(i)}>{t}</button>)}</div>
      <div className="chat rv" ref={ref}>
        <div className="chat-top"><i /><i /><i /><span>AI assistant</span></div>
        <div className="chat-body">
          <div className="bubble"><span>{typed}</span><span className="caret" /></div>
          <div className={"reply" + (phase >= 1 ? " on" : "")}>
            <p className="lbl">Answer</p>
            <ol>{d.h.map((h, i) => <li key={h} style={{ transitionDelay: 0.15 * i + "s" }}><b>{i + 1}</b>{h}</li>)}</ol>
            <div className={"warn" + (phase === 2 ? " on" : "")}>Everyone else is invisible.</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Share of AI answers naming your clinic, 8% to 47% over six months (illustrative). */
function AreaChart() {
  const W = 1000, H = 300, PL = 16, PR = 16, PT = 40, PB = 10, max = 55;
  const pts = CLINIC_CHART.map((v, i) => ({ x: PL + (i * (W - PL - PR)) / (CLINIC_CHART.length - 1), y: PT + (1 - v / max) * (H - PT - PB) }));
  const d = useMemo(() => {
    let s = `M${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], cx = (a.x + b.x) / 2; s += ` C${cx} ${a.y},${cx} ${b.y},${b.x} ${b.y}`; }
    return s;
  }, [pts]);
  const last = pts[pts.length - 1];
  const lineRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    const line = lineRef.current;
    if (!line || isReduced() || typeof IntersectionObserver === "undefined") return;
    const L = line.getTotalLength();
    line.style.strokeDasharray = String(L); line.style.strokeDashoffset = String(L);
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { io.disconnect(); line.style.transition = "stroke-dashoffset 1.6s ease"; line.style.strokeDashoffset = "0"; } }, { threshold: 0.4 });
    io.observe(line);
    return () => io.disconnect();
  }, []);
  return (
    <svg viewBox={`0 0 ${W} ${H + 36}`} width="100%" role="img" aria-label="Illustrative share of AI answers naming your clinic, rising from 8% to 47% over six months" style={{ display: "block", fontFamily: "inherit" }}>
      <defs><linearGradient id="aeolp-af" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6ef76e" stopOpacity=".28" /><stop offset="100%" stopColor="#6ef76e" stopOpacity="0" /></linearGradient></defs>
      {[0.25, 0.5, 0.75].map((f) => { const y = PT + f * (H - PT - PB); return <line key={f} x1={PL} x2={W - PR} y1={y} y2={y} stroke="rgba(255,255,255,.08)" strokeDasharray="2 6" />; })}
      <path d={`${d} L${last.x} ${H} L${pts[0].x} ${H} Z`} fill="url(#aeolp-af)" />
      <path ref={lineRef} d={d} fill="none" stroke="#6ef76e" strokeWidth="3" strokeLinecap="round" />
      <line x1={pts[0].x} x2={pts[0].x + 150} y1={pts[0].y} y2={pts[0].y} stroke="rgba(255,255,255,.3)" strokeDasharray="3 4" />
      <circle cx={pts[0].x} cy={pts[0].y} r="6" fill="#10132c" stroke="#6ef76e" strokeWidth="3" />
      <circle cx={last.x} cy={last.y} r="6" fill="#10132c" stroke="#6ef76e" strokeWidth="3" />
      <text x={pts[0].x + 2} y={pts[0].y - 16} fontSize="22" fontWeight="600" fill="#fff">8%</text>
      <text x={pts[0].x + 160} y={pts[0].y + 5} fontSize="14" fill="#8d91a8">your report = the baseline</text>
      <text x={last.x} y={last.y - 18} textAnchor="end" fontSize="22" fontWeight="600" fill="#6ef76e">47%</text>
      {pts.map((p, i) => <text key={i} x={p.x} y={H + 26} textAnchor={i === 0 ? "start" : i === pts.length - 1 ? "end" : "middle"} fontSize="13" fill="#8d91a8">M{i + 1}</text>)}
    </svg>
  );
}

function ClinicsBody() {
  return (
    <>
      <Hero
        h1={<>Is your<Rotator words={CLINIC_WORDS} />the one AI recommends?</>}
        lead={<>36% of patients choosing a doctor now ask <b>AI tools first</b>, more than Google (rater8, Jun 2026). When ChatGPT answers “best implant dentist in your city”, it names 3 to 5 clinics and stops. The named ones get the patient.</>}
        fine={<>Your free <b>AI Growth Report</b> shows what ChatGPT, Gemini, Perplexity and Google AI say about your clinic today: which patient questions you win, who gets named instead, and the fixes in priority order. 3 days · no pitch.</>}
        photo="/aeo-lp/c_hero.webp" alt="Modern clinic reception with curved marble desk"
      />
      <Band />
      <Cases vertical="clinic" />
      <Credibility deep line="we took a brand from invisible to the top recommendation in AI answers" stats={[["20+ yrs", "growing brands online"], ["$4B+", "client revenue delivered"], ["600+", "eCommerce & digital builds"], ["+110%", "AI-referred traffic, retail brand"]]} />

      <section className="sec" data-fold="demo"><div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">How patients choose now</span>
          <h2>Watch how your next patient <span className="mint">chooses.</span></h2>
          <p className="sub">They don’t scroll ten results anymore. They ask once, get 3 to 5 names, and call one of them.</p>
        </div>
        <ChatDemo />
        <p className="src center">Illustrative answers. Clinic names are fictional. Your report shows the real ones for your city.</p>
      </div></section>

      <section className="sec light" data-fold="why-now"><div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">Why now</span><h2>Your next patient is asking an AI who to trust. <span className="acc">Today it names other clinics.</span></h2></div>
        <div className="hgrid g3 rv">
          <div><div className="bignum"><Counter to={36} suf="%" /></div><p>of US patients choosing a doctor now cite AI tools, more than Google search at 34% (rater8, Jun 2026)</p></div>
          <div><div className="bignum"><Counter to={68} suf="%" /></div><p>of local searches now show an AI Overview above the results (Whitespark, Jul 2026)</p></div>
          <div><div className="bignum"><Counter to={77} suf="%" /></div><p>of what AI cites about local businesses comes from other sites (reviews, Reddit, YouTube), not yours (Whitespark)</p></div>
        </div>
        <p className="src">Sources: rater8 Patient Choice Report, Jun 2026; Whitespark via Search Engine Journal, Jul 2026.</p>
      </div></section>

      <section className="sec" data-fold="channel"><div className="wrap split">
        <div className="rv">
          <span className="eyebrow">The channel</span>
          <h2>A patient channel that works nights, weekends and holidays, <span className="mint">at no cost per click.</span></h2>
          <p className="body">Your ads stop the moment the budget runs out. The AI answer doesn’t. It recommends clinics around the clock, in every language your patients ask in. When it names yours, the consult comes straight to you: no bidding war, no cost per click, no agency fee per lead. Patients arrive pre-researched and ready to book. We make sure the answer is you.</p>
          <div className="chips"><span className="chip m">Recommending 24/7</span><span className="chip m">$0 per click</span><span className="chip">3-5 clinics named per answer</span><span className="chip">Patients arrive pre-sold</span><span className="chip">You own the relationship</span></div>
          <CtaBtn where="channel" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ph rv" src={img("/aeo-lp/c_treat.webp")} alt="Empty dental treatment suite" loading="lazy" />
      </div></section>

      <section className="sec deep" data-fold="report"><div className="wrap">
        <div className="headrow rv">
          <div><span className="eyebrow">What you get</span><h2>Your free <span className="mint">AI Growth Report</span></h2><p className="sub">Pick your vertical. These are the questions your patients already ask.</p></div>
          <span className="flag">Named in 2 of 20 prompts · sample</span>
        </div>
        <Report tabs={CLINIC_REPORT} inside={CLINIC_REPORT_INSIDE} note={CLINIC_REPORT_NOTE} />
      </div></section>

      <section className="sec" data-fold="maths"><div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">The economics</span>
          <h2>One AI-referred patient a month <span className="mint">changes your maths.</span></h2>
          <p className="sub">Acquiring a surgical patient through ads runs ~$610, the highest in medicine (Dentplicity / ThinkBasis, 2026). An AI referral costs nothing per click. At an $8K to $25K ticket, one extra named patient a month outperforms anything else in your budget.</p>
        </div>
        <div className="figs rv">
          <div><b>$8-25K</b><span>a surgical patient’s ticket</span></div>
          <div><b>~$610</b><span>what paid ads spend to acquire one</span></div>
          <div><b>3-5</b><span>clinics named per AI answer</span></div>
          <div><b>$0</b><span>what an AI referral costs per click</span></div>
        </div>
        <div className="chartbox rv"><span className="eyebrow">Share of AI answers naming your clinic</span><AreaChart /></div>
        <p className="src center">Illustrative growth. Real figures depend on your starting point. Your AI Growth Report sets the baseline.</p>
      </div></section>

      <section className="sec light" data-fold="what-we-do"><div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">What we do</span>
          <h2>The report is the map. <span className="acc">We run every fix.</span></h2>
          <p className="sub">Being named by AI is mostly verifiable work: pages engines can quote, trust signals they check, mentions on the sites they actually read, and a booking path that converts the patient once they arrive.</p>
        </div>
        <div className="hgrid g3 rv">
          <div><Icon name="sparkles" /><h3>Snapshot</h3><p>20 prompts × 4 engines × 3 runs, repeated monthly. You see the trend, not a screenshot.</p></div>
          <div><Icon name="file" /><h3>Foundations</h3><p>Procedure pages with prices, FAQs, credentials and booking: pages engines can actually quote.</p></div>
          <div><Icon name="star" /><h3>Trust</h3><p>Review velocity and response programme, clinician credential pages, society profiles.</p></div>
          <div><Icon name="search" /><h3>Mentions</h3><p>Listicles, local press, YouTube, Reddit, partner sites. 77% of what AI cites lives off your site.</p></div>
          <div><Icon name="chart" /><h3>Measurement</h3><p>AI-referred consults tagged in your CRM, so the channel shows up in your own numbers.</p></div>
          <div><Icon name="trend" /><h3>Conversion</h3><p>Site speed, mobile booking and consult flow, so the patient the AI sends actually books.</p></div>
        </div>
        <p className="src" style={{ fontSize: 16, color: "var(--l-ink)", marginTop: 30 }}>80% of this is doing the fundamentals properly. 20% is genuinely new. We tell you which is which.</p>
      </div></section>

      <section className="sec" data-fold="partner"><div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">Why scandiweb</span><h2>A growth partner, <span className="mint">not another tool.</span></h2></div>
        <div className="rows">
          {[
            { im: "/aeo-lp/c_dental.webp", alt: "Clean dental treatment suite, no people", t: "We build the layer engines read.", d: "scandiweb has spent 20+ years building and growing digital platforms, with $4B+ in client revenue delivered. AI visibility is engineering: structured pages, clean data and third-party trust, built properly.", pts: ["Procedure and price-transparency pages built to be quoted", "Clinician credential pages: the trust signals engines reward", "Shipped by our own development teams, not subcontractors"] },
            { im: "/aeo-lp/c_lounge.webp", alt: "Clinic waiting lounge, a person walking away from camera", t: "Patients arrive pre-sold.", d: "An AI-referred patient has already compared clinics, read the reviews and rehearsed the questions before they ever contact you. Your team spends less time convincing and more time booking.", pts: ["Fewer tyre-kickers: the AI already did the comparison", "Consults come in asking for specific procedures", "The relationship is yours from the first message, not rented from a platform"] },
            { im: "/aeo-lp/c_consult.webp", alt: "Consultation room seen through a doorway", t: "No load on your team.", d: "You run the clinic; we run the channel. One walkthrough call a month, everything else happens on our side.", pts: ["We write, build and publish. You approve.", "Works with whoever runs your marketing today", "Monthly report in plain language: named or not, trending up or down, what we did"] },
          ].map((r, i) => (
            <div key={r.t} className={"split rv" + (i % 2 ? " rev" : "")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ph" src={img(r.im)} alt={r.alt} loading="lazy" />
              <div><h3>{r.t}</h3><p className="body">{r.d}</p><ul className="checks">{r.pts.map((p) => <li key={p}>{p}</li>)}</ul></div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="sec light" data-fold="segments"><div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">Where it pays</span>
          <h2>What one AI-referred patient is worth <span className="acc">in your vertical</span></h2>
          <p className="sub">High-ticket, high-research procedures are where patients rehearse the decision with an AI before they ever call. These are the answers worth owning.</p>
        </div>
        <div className="hgrid g5 rv">
          {[
            ["Dental implants & All-on-4", "The fastest-growing high-ticket dental segment, and the most-compared purchase in dentistry.", "$11.6-27.5K", "per arch, US average ~$15K", "“All-on-4 cost [city]”"],
            ["Hair transplant", "Patient volume up 20% since 2021; women up 16.5% (ISHRS). The most safety-researched purchase in aesthetics.", "$8-15K", "US/UK ticket", "“best hair transplant clinic [country]”"],
            ["Facial surgery", "Eyelid surgery is the #1 surgical procedure globally (+13.4%), and younger facelift patients are the heaviest AI users.", "$12-19K", "typical facelift ticket", "“best facelift surgeon [city]”"],
            ["Post-GLP-1 body", "837K+ GLP-1 patients pursued aesthetic care (ASPS). A brand-new question class with almost no incumbent answers.", "$8-20K", "per episode", "“loose skin after weight loss: what to do”"],
            ["Injectables & memberships", "The #1 procedure on earth. Local-recommendation prompts decide which medspa wins the membership.", "$2-3.5K/yr", "typical member value", "“best medspa in [city]”"],
          ].map(([t, d, n, s, c]) => <div key={t} className="seg"><h3>{t}</h3><p>{d}</p><div className="n">{n}</div><div className="s">{s}</div><div className="c">&rarr; {c}</div></div>)}
        </div>
        <p className="center rv" style={{ maxWidth: 760, margin: "40px auto 0", color: "var(--l-ink)", fontSize: 17 }}>Cross-border patients are the heaviest AI researchers of all. If you serve international patients, the English, German and French answers about your city are a shelf almost nobody owns yet.</p>
      </div></section>

      <section className="sec deep" data-fold="tourism"><div className="wrap split rev">
        <div className="rv">
          <span className="eyebrow">Medical tourism</span>
          <h2>Your patients arrive with a <span className="mint">ChatGPT list.</span></h2>
          <p className="body">UK and German patients land in Istanbul and Budapest with the AI’s shortlist already made. 1.4M to 2M health tourists fly to Turkey every year; Hungary is Europe’s dental capital. If you are a tourism clinic, the AI answer is your storefront in every language your patients ask in. If you are a domestic clinic, it is your defence against the price pitch from abroad.</p>
          <div className="chips"><span className="chip">1.4-2M health tourists to Turkey / yr</span><span className="chip">Hungary: Europe’s dental capital</span><span className="chip m">English, German &amp; French answers largely uncontested</span></div>
          <CtaBtn where="tourism" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ph rv" src={img("/aeo-lp/c_tourism.webp")} alt="Premium clinic interior at dusk with city skyline through glass" loading="lazy" />
      </div></section>

      <Proof title={<>We’ve done <span className="mint">this before.</span></>} results={CLINICS.results} footer={<div className="measure rv"><span className="eyebrow">We measure across</span><p>ChatGPT · Gemini · Perplexity · Google AI Mode · Copilot</p></div>} />
      <Leader lead="Your AI Growth Report covers the baseline. For clinics that want to lead their market in AI search, we offer a tailored, hands-on program that goes further." />
      <Faq title="The things clinic owners ask us" items={[
        ["What exactly is the AI Growth Report?", "We run ~20 real patient questions for your procedures and city across ChatGPT, Gemini, Perplexity and Google AI, three times each, and report where you’re named, who gets named instead, where the answers come from, and your fixes in priority order. Built by specialists in 3 business days, not an automated scan."],
        ["Is it really free? What’s the catch?", "It’s free, no obligation, no pitch. We only earn if you want us as your partner on the fixes."],
        ["Nobody finds a surgeon on ChatGPT.", "36% of US patients who searched for a doctor in the past year cited AI tools, more than Google (34%) or referrals (32%) (rater8, Jun 2026). Your report shows your own answers, so the data settles it either way."],
        ["We already pay an SEO agency.", "Good. 80% of AI visibility is SEO and reputation done right. We cover the 20% that’s new: pages shaped to be quoted, off-page mentions, review velocity and monthly measurement of what the engines actually say. A layer on top, not a replacement."],
        ["What happens after the report?", "A 30-minute walkthrough: we show you your answers live, what’s winnable first, and what it takes. You choose what to action, with us or without us."],
      ]} />
      <Guides eyebrow="Guides" title={<>See how it’s decided, <span className="mint">and what it’s worth</span></>} />
      <FinalCta title={<>See what the AI says about <span className="mint">your clinic.</span></>} body="Your free AI Growth Report covers what ChatGPT, Gemini, Perplexity and Google AI answer for your procedures in your city: where you’re named, who wins instead, and what to fix first. 3 business days. No pitch." bg="/aeo-lp/c_cta.webp" />
      <Newsletter />
    </>
  );
}

export function ClinicsPage() {
  return <AeoShell cfg={CLINICS}><ClinicsBody /></AeoShell>;
}
