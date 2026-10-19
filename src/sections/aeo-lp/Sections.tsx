"use client";

/* Building blocks shared by the hotels and clinics pages. */

import { useEffect, useState, type ReactNode } from "react";
import { FORM_ENDPOINT, HOST, NOTIFY_CC } from "./config";
import { useAeo } from "./Shell";
import { track } from "./track";
import type { ReportTab, Result } from "./types";
import { Arrow, Rating, img, isReduced } from "./ui";

/* Primary CTA (opens the quiz) + secondary "Book a 30-min call with Janis". */
export function Ctas({ where }: { where: string }) {
  const { cfg, openQuiz, openBook } = useAeo();
  return (
    <div className="ctas">
      <button type="button" className="btn" onClick={() => openQuiz(where)}>{cfg.cta} <Arrow /></button>
      <button type="button" className="btn ghost" onClick={() => openBook(where)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="face" src={img(HOST.photo)} alt="" />Book a 30-min call with Janis
      </button>
    </div>
  );
}

export function CtaBtn({ where }: { where: string }) {
  const { cfg, openQuiz } = useAeo();
  return <button type="button" className="btn" onClick={() => openQuiz(where)}>{cfg.cta} <Arrow /></button>;
}

/* Rotating word in the clinics headline. */
export function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);
  useEffect(() => {
    if (isReduced()) return;
    let t2: ReturnType<typeof setTimeout>;
    const t = setInterval(() => { setOut(true); t2 = setTimeout(() => { setI((x) => (x + 1) % words.length); setOut(false); }, 180); }, 2600);
    return () => { clearInterval(t); clearTimeout(t2); };
  }, [words.length]);
  return <span className="rot"><span className={out ? "out" : ""}>{words[i]}</span></span>;
}

function AnswerCard() {
  const { cfg } = useAeo();
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);
  useEffect(() => {
    let t2: ReturnType<typeof setTimeout>;
    const t = setInterval(() => { setOut(true); t2 = setTimeout(() => { setI((x) => (x + 1) % cfg.cards.length); setOut(false); }, 300); }, 2900);
    return () => { clearInterval(t); clearTimeout(t2); };
  }, [cfg.cards.length]);
  const c = cfg.cards[i];
  return (
    <div className="ans">
      <div className={"ans-in" + (out ? " out" : "")}>
        <p className="q">“{c.q}”</p>
        <p className="lbl">ChatGPT answered</p>
        <ol>{c.h.map((h, k) => <li key={h}><i>{k + 1}</i>{h}</li>)}</ol>
        <div className="warn">{cfg.warn}</div>
        {cfg.cardFoot ? <p className="foot">{cfg.cardFoot}</p> : null}
      </div>
    </div>
  );
}

export function Hero({ h1, lead, fine, photo, alt }: { h1: ReactNode; lead: ReactNode; fine: ReactNode; photo: string; alt: string }) {
  return (
    <section className="hero" data-fold="hero">
      <div className="wrap hero-grid">
        <div>
          <Rating />
          <h1>{h1}</h1>
          <p className="lead">{lead}</p>
          <Ctas where="hero" />
          <p className="fine">{fine}</p>
        </div>
        <div className="hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="hero-photo-wrap"><img className="hero-photo" src={img(photo)} alt={alt} /></div>
          <AnswerCard />
        </div>
      </div>
    </section>
  );
}

const WF = "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/";
const CLIENTS: [string, string, string][] = [
  ["69e0eee8b834833e361f2248_puma-white.svg", "PUMA", ""],
  ["69e0eee9d7983fd9c9360e3f_3ff5e0f71067898b4fc567987d275c1d_the-newyork-times-white.svg", "The New York Times", ""],
  ["69e0eee8cb825282408df2ce_671de2307510eb97963a001755096b36_adobe-white.svg", "Adobe", ""],
  ["69e0eee89302c7a1be86b802_b1d7e583efaf10afb442ed2a43bed152_samsung-white.svg", "Samsung", ""],
  ["69e9f6923f4b882653aa2d67_5a3360ba72eafb8bf393c4c14f039b9b_acer.svg", "Acer", ""],
  ["69e0eee8b73bab8bf8301515_michigan-white.svg", "University of Michigan", "tall"],
  ["69e9f84abdb5b8935897671b_dc37667b0bfcc95143495895d17e6673_boy-scouts-of-america.svg", "Boy Scouts of America", "tall"],
];
const PARTNERS: [string, string, string][] = [
  ["claude_certified_partner.svg", "Claude Certified Partner", ""],
  ["anthropic_official_partner.svg", "Anthropic official partner", ""],
  ["openai.png", "OpenAI", "inv"],
  ["google_partner_white.svg", "Google Partner", ""],
  ["perplexity.svg", "Perplexity", "inv sm"],
  ["gemini.svg", "Google Gemini", "inv sm"],
];

export function Band() {
  const logos = (dup: boolean) => CLIENTS.map(([f, a, c]) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img key={(dup ? "d" : "") + f} className={c} src={WF + f} alt={dup ? "" : a} aria-hidden={dup || undefined} />
  ));
  return (
    <section className="band" data-fold="logos">
      <span className="eyebrow">Trusted by 700+ brands worldwide</span>
      <div className="marquee"><div className="marquee-track">{logos(false)}{logos(true)}</div></div>
      <div className="wrap">
        <div className="partners">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {PARTNERS.map(([f, a, c]) => <img key={f} className={c} src={img("/aeo-lp/" + f)} alt={a} loading="lazy" />)}
        </div>
      </div>
    </section>
  );
}

export function Credibility({ line, stats, deep }: { line: string; stats: [string, string][]; deep?: boolean }) {
  return (
    <section className={"sec tight" + (deep ? " deep" : "")} data-fold="credibility">
      <div className="wrap">
        <p className="proofline rv"><b>#23 &rarr; #1</b><span>{line}</span></p>
        <div className="stats rv">{stats.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}</div>
      </div>
    </section>
  );
}

function Slider({ results }: { results: Result[] }) {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);
  const [tick, setTick] = useState(0);
  const show = (k: number) => { setOut(true); setTimeout(() => { setI(k); setOut(false); }, 250); };
  useEffect(() => {
    if (isReduced()) return;
    const t = setInterval(() => { setOut(true); setTimeout(() => { setI((x) => (x + 1) % results.length); setOut(false); }, 250); }, 5000);
    return () => clearInterval(t);
  }, [results.length, tick]);
  const r = results[i];
  return (
    <div className="slider rv">
      <div className={"slide" + (out ? " out" : "")}><div className="n">{r.n}</div><p>{r.l}</p><div className="who">{r.who}</div></div>
      <div className="dots">{results.map((_, k) => <button key={k} type="button" className={k === i ? "on" : ""} aria-label={"Show result " + (k + 1)} onClick={() => { show(k); setTick((x) => x + 1); }} />)}</div>
    </div>
  );
}

/* "Real clients. Measurable progress.": AI search case studies, high on the page. */
export function Cases({ vertical }: { vertical: string }) {
  return (
    <section className="sec" id="results" data-fold="real-clients">
      <div className="wrap">
        <div className="headrow rv">
          <div><span className="eyebrow">Our work in AI search</span><h2>Real clients.<br /><span className="mint">Measurable progress.</span></h2></div>
          <p className="sub" style={{ maxWidth: 400, margin: 0 }}>Our team helps businesses build their presence in AI search, from specialist retailers to global brands.</p>
        </div>
        <div className="cases rv" data-on>
          <div className="case">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="wmi" src={img("/aeo/logos/felco.svg")} style={{ height: 40 }} alt="FELCO" /><div className="desc">Swiss precision tool manufacturer</div>
            <div className="big">+1,415%</div><div className="bl">AI traffic growth<br />year over year</div>
            <div className="idx"><div><span>Prior year</span><i style={{ ["--w" as string]: "6.6%" }} /><b>100</b></div><div className="cur"><span>Reported period</span><i style={{ ["--w" as string]: "100%" }} /><b>1,515</b></div></div>
            <p className="ixn">AI traffic index. Prior year = 100.</p>
            <p className="bd">Product and category content improvements, structured data, and relevant third-party citations.</p>
            <div className="sub2"><b>+1,541%</b><span>Product views from AI traffic, year over year</span></div>
          </div>
          <div className="case">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="wmi" src={img("/aeo/logos/habito.svg")} style={{ height: 26 }} alt="Habito" /><div className="desc">UK digital mortgage broker</div>
            <div className="big">15×</div><div className="bl">Return on AEO investment<br />over three months</div>
            <div className="idx"><div><span>Prior 3 months</span><i style={{ ["--w" as string]: "39%" }} /><b>100</b></div><div className="cur"><span>Measured 3 months</span><i style={{ ["--w" as string]: "100%" }} /><b>255</b></div></div>
            <p className="ixn">AI conversion index. Prior 3 months = 100.</p>
            <p className="bd">Content structured around the questions and sources AI tools use when recommending mortgage providers.</p>
            <div className="sub2"><b>+155%</b><span>Conversions from AI traffic, versus the prior three months</span></div>
          </div>
          <div className="case">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="wmi" src={img("/aeo/logos/byredo.svg")} style={{ height: 19 }} alt="BYREDO" /><div className="desc">Luxury fragrance brand</div>
            <div className="big">Global</div><div className="bl">AI search program</div>
            <p className="bd">A dedicated AEO engagement alongside the brand’s existing partners.</p>
            <ol><li><em>01</em>AI visibility and source tracking</li><li><em>02</em>Category content and FAQ recommendations</li><li><em>03</em>Editorial and retailer opportunities</li></ol>
            <p className="foot">An example of our ongoing client work in AI search.</p>
          </div>
        </div>
        <p className="src">FELCO and Habito results come from broader client programs with their own scope. They are not a guarantee of results for your {vertical}. Habito’s comparison uses GA4 traffic and conversions from known AI referrers.</p>
      </div>
    </section>
  );
}

/* More results (slider) + client quote + the per-page footer row. */
export function Proof({ title, results, footer }: { title: ReactNode; results: Result[]; footer: ReactNode }) {
  return (
    <section className="sec" data-fold="proof">
      <div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">More results</span><h2>{title}</h2></div>
        <Slider results={results} />
        <div className="quote rv">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={WF + "69f278b2e38c6c34f69c122c_Jonathan%20Chan.png"} alt="Jonathan Chan" />
          <div><blockquote>“Our first migration with another partner failed. scandiweb rebuilt the site and has kept it secure and high-performing for 10+ years.”</blockquote><p className="who">Jonathan Chan · Head of Global IT, Lafayette 148 New York</p></div>
        </div>
        {footer}
      </div>
    </section>
  );
}

/* "Your free AI Growth Report": sample prompt rows per tab + what's inside. */
export function Report({ tabs, inside, note }: { tabs: ReportTab[]; inside: string[]; note: string }) {
  const [t, setT] = useState(0);
  return (
    <>
      <div className="tabs">{tabs.map((r, i) => <button key={r.tab} type="button" className={"tab" + (i === t ? " on" : "")} onClick={() => { setT(i); track("report_tab", { tab: r.tab }); }}>{r.tab}</button>)}</div>
      <div className="rep rv">
        <div>
          <span className="eyebrow">20 prompts × 4 engines × 3 runs</span>
          <div>{tabs[t].rows.map(([p, c, l]) => <div key={p} className="prow"><span>{p}</span><span className={"pill " + c}>{l}</span></div>)}</div>
        </div>
        <div>
          <span className="eyebrow">What’s inside</span>
          <ul className="checks">{inside.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="note">{note}</p>
        </div>
      </div>
    </>
  );
}

export function Leader({ lead }: { lead: string }) {
  return (
    <section className="sec deep" id="leader" data-fold="leader">
      <div className="wrap lead-grid">
        <div className="rv">
          <span className="eyebrow">Looking to go further?</span>
          <h2>Become an industry leader <span className="mint">in AI search</span></h2>
          <p className="lead">{lead}</p>
          <p className="body2">Beyond monitoring and recommendations, we build a strategy around your market, competitors and commercial goals. The scope can include expert-reviewed content, technical improvements, outreach, and broader market coverage, with execution planned around what your business needs.</p>
          <p className="callout">Already have the basics covered, through us or your existing team? We build from there, without duplicating work or charging twice for overlapping coverage.</p>
          <div className="scope"><span className="eyebrow">A tailored scope can include</span><div>Expert-reviewed content</div><div>Technical improvements</div><div>Outreach and authority building</div><div>Broader market coverage</div></div>
        </div>
        <div className="rv">
          <span className="eyebrow">Meet the people behind it</span>
          <h3 className="people-h">Search expertise, with people you can talk to.</h3>
          <div className="people">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div><img src={img("/aeo/lina-ivanova.jpg")} alt="Lina Ivanova" /><b>Lina Ivanova</b><span>Co-founder &amp; traffic acquisition expert</span></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div><img src={img(HOST.photoLarge)} alt={HOST.name} /><b>{HOST.name}</b><span>{HOST.role}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <section className="sec" id="faq" data-fold="faq">
      <div className="wrap">
        <div className="sec-head center rv"><span className="eyebrow">FAQ</span><h2>{title}</h2></div>
        <div className="faq rv">
          {items.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary onClick={() => track("faq", { i })}>{q}</summary><p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Guides({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  const { cfg, openGuide } = useAeo();
  return (
    <section className="sec deep" data-fold="guides">
      <div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
        <div className="guides rv">
          {cfg.guides.map((g, i) => (
            <button key={g.t} type="button" className="gcard" onClick={() => openGuide(i)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="im"><img src={img(g.img)} alt="" loading="lazy" /></div>
              <div className="bd"><span className="k">{g.k}</span><h3>{g.t}</h3><p>{g.d}</p><span className="more">Read more &rarr;</span></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ title, body, bg }: { title: ReactNode; body: string; bg: string }) {
  return (
    <section className="cta" data-fold="final-cta">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bgimg" src={img(bg)} alt="" loading="lazy" />
      <div className="wrap">
        <h2>{title}</h2>
        <p className="sub">{body}</p>
        <Ctas where="final-cta" />
      </div>
    </section>
  );
}

/* Monthly briefing signup: FormSubmit to the same inbox, own subject so the lead skills ignore it. */
export function Newsletter() {
  const { cfg } = useAeo();
  const n = cfg.newsletter;
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "ok" | "err">("idle");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setState("err"); return; }
    setState("busy");
    track("newsletter");
    if (hp) { setState("ok"); return; }
    try {
      const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ _cc: NOTIFY_CC, email: email.trim(), page: cfg.fn, _subject: n.subject + email.trim(), _template: "table" }) });
      setState(r.ok ? "ok" : "err");
      if (r.ok) setEmail("");
    } catch { setState("err"); }
  };
  return (
    <section className="sec deep" data-fold="newsletter">
      <div className="wrap">
        <div className="news rv">
          <span className="eyebrow">Monthly briefing</span>
          <h2>{n.title}</h2>
          <p>{n.body}</p>
          <form onSubmit={submit} noValidate>
            <input className="inp" type="email" placeholder={n.ph} value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }} />
            <button className="btn" type="submit" disabled={state === "busy"}>Subscribe</button>
          </form>
          {state === "ok" && <p className="ok" style={{ display: "block" }}>{n.ok}</p>}
          {state === "err" && <p className="qerr">Please check the email and try again.</p>}
        </div>
      </div>
    </section>
  );
}
