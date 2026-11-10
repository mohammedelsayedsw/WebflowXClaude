"use client";

import { useState } from "react";
import { ANGLES, COMMITMENTS, FAQ, GUARANTEE, MODULES, PARTNERS, RESULTS, STATS, STEPS, type AngleKey } from "./copy";
import { HOST_NAME, HOST_PHOTO, HOST_TITLE, LEAD_NAME, LEAD_TITLE, img } from "./config";
import { HeroVideo } from "./Video";
import { cleanDomain, validDomain } from "./scoring";

type StartFn = (store: string, where: string) => void;

/* The store URL is the first step of the scan, in the hero and again at the bottom. */
function UrlForm({ onStart, where, initial = "", big }: { onStart: StartFn; where: string; initial?: string; big?: boolean }) {
  const [v, setV] = useState(initial);
  const [err, setErr] = useState("");
  const go = () => {
    const d = cleanDomain(v);
    if (!validDomain(d)) { setErr("Enter your store’s web address, like yourstore.com"); return; }
    setErr("");
    onStart(d, where);
  };
  return (
    <form className={"ga-url" + (big ? " big" : "")} onSubmit={(e) => { e.preventDefault(); go(); }} noValidate>
      <label className="sr" htmlFor={"ga-url-" + where}>Your store’s web address</label>
      <div className="ga-url-row">
        <input id={"ga-url-" + where} type="text" inputMode="url" autoComplete="url" placeholder="yourstore.com" value={v}
          onChange={(e) => { setV(e.target.value); if (err) setErr(""); }} aria-invalid={!!err} aria-describedby={err ? "ga-url-err-" + where : undefined} />
        <button className="ga-btn" type="submit">Start my free scan &rarr;</button>
      </div>
      {err ? <div className="ga-err" id={"ga-url-err-" + where} role="alert">{err}</div> : null}
    </form>
  );
}

export function Hero({ angle, market, onStart, onPlay }: { angle: AngleKey; market: string; onStart: StartFn; onPlay: () => void }) {
  const a = ANGLES[angle];
  return (
    <section className="ga-hero" id="hero">
      <div className="ga-wrap ga-hero-in">
        <div className="ga-hero-copy">
          <span className="ga-badge"><i />15% revenue growth guarantee</span>
          <h1>{a.h1} <span className="ga-acc">{a.accent}</span></h1>
          <p className="ga-lead">{a.sub}</p>
          <UrlForm onStart={onStart} where="hero" />
          <ul className="ga-ticks">
            <li>Free, one minute, score on screen</li>
            <li>For online stores{market ? " " + market : ""}</li>
            <li>Calls for stores doing €50K+ a month</li>
          </ul>
        </div>
        <HeroVideo onPlay={onPlay} />
      </div>
      <div className="ga-wrap ga-trust">
        {PARTNERS.slice(0, 3).map((p) => <span key={p}>{p}</span>)}
        <span>700+ brands · 4.9 rating</span>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="ga-sec" id="how">
      <div className="ga-wrap">
        <h2>How it works</h2>
        <p className="ga-sub">One minute to see where you stand. Thirty minutes to get a plan. Ninety days to hit the number.</p>
        <ol className="ga-steps">
          {STEPS.map((s, i) => <li key={s.t}><span className="ga-n">{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

export function Modules({ onCta }: { onCta: () => void }) {
  return (
    <section className="ga-sec ga-dark" id="team-work">
      <div className="ga-wrap">
        <h2>One team on everything that moves your revenue</h2>
        <p className="ga-sub">Not a channel agency. Your plan picks the work that pays back first, and the same team does it.</p>
        <div className="ga-mods">
          {MODULES.map((m) => <div className="ga-mod" key={m.k}><h3>{m.k}</h3><p>{m.d}</p></div>)}
        </div>
        <div className="ga-cta-row"><button className="ga-btn" onClick={onCta}>Scan my store &rarr;</button></div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section className="ga-sec" id="proof">
      <div className="ga-wrap">
        <h2>We’ve grown stores before</h2>
        <div className="ga-stats">{STATS.map(([k, d]) => <div key={k}><b>{k}</b><span>{d}</span></div>)}</div>
        <div className="ga-results">
          {RESULTS.map((r) => (
            <div className="ga-res" key={r.who}>
              {r.logo ? <img src={img(r.logo)} alt={r.who} loading="lazy" /> : <span className="ga-res-name">{r.who}</span>}
              <b>{r.k}</b><span>{r.d}</span>
            </div>
          ))}
        </div>
        <figure className="ga-quote">
          <img src={img("oskar-r-s.webp")} alt="Oskar Röös" loading="lazy" />
          <div>
            <blockquote>&ldquo;We decided to give scandiweb full ownership towards our eCommerce ecosystem. It was the right choice.&rdquo;</blockquote>
            <figcaption><b>Oskar Röös</b>, CIO, Byggmax</figcaption>
          </div>
        </figure>
        <div className="ga-partners">{PARTNERS.map((p) => <span key={p}>{p}</span>)}</div>
      </div>
    </section>
  );
}

export function Guarantee({ onCta }: { onCta: () => void }) {
  return (
    <section className="ga-sec ga-alt" id="guarantee">
      <div className="ga-wrap ga-g">
        <div>
          <h2>15% more revenue in 90 days. Or you don’t pay.</h2>
          <p className="ga-sub">Most agencies charge the same whether your numbers move or not. We put our fee on the line, so the terms have to be clear.</p>
          <div className="ga-commit">
            {COMMITMENTS.map(([k, d]) => <div key={k}><h3>{k}</h3><p>{d}</p></div>)}
          </div>
        </div>
        <div className="ga-gbox">
          <h3>{GUARANTEE.title}</h3>
          <dl>{GUARANTEE.lines.map(([k, d]) => <div key={k}><dt>{k}</dt><dd>{d}</dd></div>)}</dl>
          <p className="ga-fine">{GUARANTEE.fine}</p>
          <button className="ga-btn" onClick={onCta}>See if my store qualifies &rarr;</button>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="ga-sec" id="people">
      <div className="ga-wrap">
        <h2>The people you’ll talk to</h2>
        <p className="ga-sub">Senior people take the call and stay on the account. Specialists in ads, search, conversion and retention do the work.</p>
        <div className="ga-people">
          <div className="ga-person"><img src={img(HOST_PHOTO)} alt={HOST_NAME} loading="lazy" /><div><b>{HOST_NAME}</b><span>{HOST_TITLE}. Takes your plan call.</span></div></div>
          <div className="ga-person"><img src={img("andres-reitsnik.webp")} alt={LEAD_NAME} loading="lazy" /><div><b>{LEAD_NAME}</b><span>{LEAD_TITLE}. Owns your 90-day plan.</span></div></div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number>(-1);
  return (
    <section className="ga-sec ga-alt" id="faq">
      <div className="ga-wrap ga-faq">
        <h2>Questions</h2>
        {FAQ.map(([q, a], i) => (
          <div className={"ga-qa" + (open === i ? " on" : "")} key={q}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<span aria-hidden="true">{open === i ? "−" : "+"}</span></button>
            <p hidden={open !== i}>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCta({ onStart }: { onStart: StartFn }) {
  return (
    <section className="ga-sec ga-dark ga-final" id="cta">
      <div className="ga-wrap">
        <h2>Find your next 15%.</h2>
        <p className="ga-sub">Free Growth Scan. One minute. Your score before we ask for your email.</p>
        <UrlForm onStart={onStart} where="final" big />
      </div>
    </section>
  );
}
