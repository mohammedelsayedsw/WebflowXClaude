"use client";

import { useState } from "react";
import { COPY, FLOW_META, img } from "./copy";
import { cleanDomain, validDomain } from "./scoring";
import { HOST_NAME } from "./status";

type StartFn = (store?: string) => void;

export function Hero({ onStart }: { onStart: StartFn }) {
  const [url, setUrl] = useState("");
  const [err, setErr] = useState("");
  const go = () => {
    const v = cleanDomain(url);
    if (!validDomain(v)) { setErr(COPY.quizUI.urlErr); return; }
    setErr("");
    onStart(v);
  };
  return (
    <div className="hero"><div className="wrap">
      <h1>We’ll increase your email revenue by 15%<br /><span className="h1-accent">Or you don’t pay until we do.</span></h1>
      <p className="lead">We rebuild and optimize your email flows, then put them head-to-head against what you’re running today. If we don’t improve results by at least 15% within 90 days, you pay nothing. We’ll keep working for free until we do.</p>
      <div className="urlbox">
        <input type="text" id="hero-url" placeholder="yourstore.com" autoComplete="url" value={url}
          onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") go(); }} />
        <button className="btn" onClick={go}>Scan my store →</button>
      </div>
      <div className="urlerr" id="hero-err">{err}</div>
      <div className="sub-note">60-second scan · instant Retention Score · no call required</div>
    </div></div>
  );
}

const WALL = [
  ["northerner.webp", "Northerner", "+$18M"],
  ["cervera.webp", "Cervera", "+$7M"],
  ["wsj-wine.webp", "WSJ Wine", "+$4M"],
  ["cook-medical.webp", "Cook Medical", "+$1M"],
  ["buff.webp", "Buff", "+40%"],
  ["circuitmess.webp", "CircuitMess", "+24%"],
];

export function Proof() {
  return (
    <div className="stats"><div className="wrap">
      <div className="grid">
        <div className="stat"><b>20+ yrs</b><span>building eCommerce, longer than Klaviyo has existed</span></div>
        <div className="stat"><b>$150M+</b><span>extra client revenue from lifecycle work</span></div>
        <div className="stat"><b>200+</b><span>marketing-automation setups, 12 verticals</span></div>
        <div className="stat"><b>20+</b><span>lifecycle specialists: strategy, copy, design, build in-house</span></div>
      </div>
      <div className="wall-lbl">Lifecycle results for selected clients</div>
      <div className="wall">
        {WALL.map(([f, alt, v]) => (
          <span className="wl" key={alt}><img src={img(f)} alt={alt} /><b>{v}</b></span>
        ))}
      </div>
    </div></div>
  );
}

export function Facts() {
  return (
    <section className="blk"><div className="wrap">
      <h2 className="sec">You’re losing orders right now.<br /> Lost revenue. Lost profit. Every day</h2>
      <p className="secsub">Data across 183,000 brands: automated flows are 5% of sends and 41% of email revenue. Brands under $5M typically run flows at 25 to 35% of email revenue. The strong ones run 40 to 50%. That gap is money your list already wanted to spend with you.</p>
      <div className="cards">
        <div className="card"><div className="kn">$3.65</div><div className="kd">what the average abandoned-cart email earns per recipient</div><p>The top 10% earn <b>$28.89</b>. Same flow. Same platform. Different builder.</p></div>
        <div className="card"><div className="kn">41%</div><div className="kd">of email revenue comes from flows, just 5% of sends</div><p>If your revenue is mostly campaign blasts, the highest-margin machine in your stack is switched off.</p></div>
        <div className="card"><div className="kn">&lt;1%</div><div className="kd">the new normal campaign click rate since bot filtering</div><p>Blasting harder stopped working in 2024. Flows triggered by what a customer actually did are what still compounds.</p></div>
      </div>
    </div></section>
  );
}

export function Cases() {
  return (
    <section className="blk alt"><div className="wrap">
      <h2 className="sec">We make the bet because we’ve done it before.</h2>
      <p className="secsub">Real brands. Real emails. Real results.</p>
      <div className="cases">
        <div className="case"><div className="shot"><img src={img("christmas-tree-world-campaign-email.webp")} alt="Christmas Tree World campaign email" /></div><div className="body">
          <div className="clogo"><img className="tall" src={img("christmas-tree-world.webp")} alt="Christmas Tree World" /></div>
          <span className="tag">Seasonal D2C · UK</span>
          <div className="kn">£1.2M</div><div className="kd">email revenue in the first 3 months</div>
          <p>Flows, campaigns, templates and segmentation rebuilt. Browse, cart and checkout flows added. £190 back per £1 spent.</p></div></div>
        <div className="case"><div className="shot"><img src={img("felco-email.webp")} alt="FELCO email" /></div><div className="body">
          <div className="clogo"><img src={img("felco.webp")} alt="FELCO" /></div>
          <span className="tag">Tools · 5 markets</span>
          <div className="kn">€150K/mo</div><div className="kd">lifecycle revenue, from zero</div>
          <p>Every core flow (welcome, browse, cart, checkout, post-purchase) built, localised and live in 5 markets and 3 languages in 30 days. SMS added for high-intent moments.</p></div></div>
        <div className="case"><div className="shot"><img src={img("circuitmess-email.webp")} alt="CircuitMess email" /></div><div className="body">
          <div className="clogo"><img src={img("circuitmess.webp")} alt="CircuitMess" className="inv" /></div>
          <span className="tag">D2C · STEM kits</span>
          <div className="kn">+24%</div><div className="kd">email revenue from rebuilt flows</div>
          <p>51 templates rebuilt as a design system, core sequences rebuilt with stronger triggers, continuous A/B testing on design, copy and CTAs.</p></div></div>
        <div className="case"><div className="shot"><img src={img("mynextmattress-email.webp")} alt="MyNextMattress email" /></div><div className="body">
          <div className="clogo"><img src={img("mynextmattress.webp")} alt="MyNextMattress" style={{ height: 18 }} /></div>
          <span className="tag">D2C · from zero</span>
          <div className="kn">£12.75</div><div className="kd">back per £1 on the first ever email send</div>
          <p>No prior email activity. Three BFCM campaigns built end to end, strategy, copy, design and setup, to prove the channel before a single flow was built.</p></div></div>
      </div>
      <div className="quote">
        <img className="face" src={img("oskar-r-s.webp")} alt="Oskar Röös" />
        <div>
          <blockquote>“We decided to give scandiweb full ownership towards our eCommerce ecosystem. It was the right choice.”</blockquote>
          <div className="who"><span><b>Oskar Röös</b>CIO, Byggmax · $1B/yr, 160+ stores · abandoned cart, welcome and winback flows, SMS, 1:1 personalisation · +15% AOV from the test programme</span><img className="bl" src={img("byggmax.webp")} alt="Byggmax" /></div>
        </div>
      </div>
      <div className="crostrip">
        <span className="lbl">And the store itself, when the flows need somewhere to land</span>
        <span><b>+47.7%</b> orders, Gear-Up</span><span><b>+38.5%</b> revenue, Northerner</span><span><b>+47.8%</b> conversions, Läderach</span><span><b>+32%</b> revenue, Beauty Works</span>
      </div>
    </div></section>
  );
}

export function Steps({ onStart }: { onStart: StartFn }) {
  return (
    <section className="blk"><div className="wrap">
      <h2 className="sec">How the bet works</h2>
      <p className="secsub">A 90-day test built around one thing: measurable improvement.</p>
      <div className="steps">
        <div className="step"><h3>We set the baseline</h3><p>We review your current setup, measure what your flows generate today, and agree on the numbers we need to beat.</p></div>
        <div className="step"><h3>We build the new system</h3><p>We rebuild the core flows your business needs, using your existing customer, product, and order data.</p></div>
        <div className="step"><h3>We test it head-to-head</h3><p>Your current setup and ours are measured against the same baseline for 90 days. If we do not improve performance by the agreed target, the guarantee kicks in.</p></div>
      </div>
      <div className="sec-cta"><button className="btn big" onClick={() => onStart()}>Scan my store first →</button></div>
    </div></section>
  );
}

export function Flows() {
  const [i, setI] = useState(0);
  const f = COPY.flows[i];
  const m = FLOW_META[i];
  return (
    <section className="blk alt"><div className="wrap">
      <h2 className="sec">Here’s what that work actually looks like.</h2>
      <p className="secsub">Live client flows. Real accounts. Built in each brand’s own voice.</p>
      <div className="tabs">
        {COPY.flows.map((fl, j) => (
          <button key={fl.n} className={"tab" + (j === i ? " on" : "")} onClick={() => setI(j)}>{fl.n}</button>
        ))}
      </div>
      <div className="gal">
        {m.shots.map((s, k) => (
          <div className="shot" key={s}><span>{f.lbl[k]}</span><img src={s} alt={`${f.brand} ${f.n} email ${k + 1}`} /></div>
        ))}
      </div>
      <div className="galnote">
        {m.logo ? <span className="glogo"><img src={m.logo} alt={f.brand} className={m.inv ? "inv" : ""} /></span> : <b>{f.brand}</b>}
        <span>{f.note}</span>
      </div>
    </div></section>
  );
}

const FACES = ["asset.webp", "asset-2.webp", "asset-3.webp", "asset-4.webp", "asset-5.webp", "asset-6.webp", "asset-7.webp", "asset-8.webp", "asset-9.webp"];
const CERTS = [["cxl.webp", "CXL"], ["nielsen-norman-group.webp", "Nielsen Norman Group"], ["baymard-institute.webp", "Baymard Institute"]];
const PLATFORMS = [["klaviyo.webp", "Klaviyo"], ["bloomreach.webp", "Bloomreach"], ["braze.webp", "Braze"], ["dotdigital.webp", "Dotdigital"], ["omnisend.webp", "Omnisend"], ["mailchimp.webp", "Mailchimp"]];

export function Team() {
  return (
    <section className="blk"><div className="wrap">
      <h2 className="sec">The team behind the results</h2>
      <p className="secsub">Strategy, copy, design and build, all under one roof. One team accountable for performance.</p>
      <div className="team">
        <div className="lead-card">
          <img src={img("andres-reitsnik.webp")} alt={HOST_NAME} />
          <div className="lb">
            <div className="role">Growth Strategy Owner · Lifecycle lead</div>
            <h3>{HOST_NAME}</h3>
            <p style={{ marginTop: 10 }}>8+ years in lifecycle and retention.<br />Owns the strategy, baseline and performance scorecard from day one.</p>
          </div>
        </div>
        <div className="tgrid">
          <h3>20+ lifecycle specialists</h3>
          <p>Email strategists, copywriters, designers and mar-tech developers, the people who will be inside your account.</p>
          <div className="faces">{FACES.map((f) => <img key={f} src={img(f)} alt="" />)}</div>
          <div className="certs">
            <span className="lbl">Trained &amp; certified by</span>
            {CERTS.map(([f, a]) => <img key={f} src={img(f)} alt={a} />)}
            <span className="lbl" style={{ marginTop: 8 }}>Platform expertise</span>
            {PLATFORMS.map(([f, a]) => <img key={f} src={img(f)} alt={a} />)}
          </div>
        </div>
      </div>
    </div></section>
  );
}

const TERMS = [
  ["Baseline", "We measure your current flow performance before we build anything."],
  ["The metric", "Placed orders per recipient, measured consistently on both sides."],
  ["The split", "Your current performance vs. the flows we build."],
  ["Duration", "90 days from the launch of the final flow."],
  ["If we hit the target", "You keep everything we built. We decide together what happens next."],
  ["If we don’t", "You stop paying. We keep working for free until we deliver the agreed improvement."],
  ["Who qualifies", "We confirm before starting that your store has enough volume for a meaningful 90-day test."],
  ["Your data", "We only request the access needed to measure, build and launch."],
];
const FAQ = [
  ["Why are you willing to guarantee this?", "Because we know what strong lifecycle programs look like, and we measure ourselves against your actual performance, not industry averages."],
  ["What if my flows are already performing well?", "Even better. We set the baseline first. If we do not believe we can meaningfully improve it, we’ll tell you before the test starts."],
  ["What access do you need?", "Read access to establish the baseline, then the permissions needed to build and launch. Nothing changes without your approval."],
  ["Will the emails sound like my brand?", "They have to. Every flow is built around your brand, customers and products, and you approve it before launch."],
  ["What happens after 90 days?", "We compare the agreed metric against the baseline. If we hit the target, you keep the work and choose whether to continue with us."],
  ["What if I use a different email platform?", "That’s fine. We work across leading lifecycle platforms. We’ll confirm compatibility before we start."],
];

export function Terms() {
  return (
    <section className="blk alt"><div className="wrap">
      <h2 className="sec">What’s the catch? There isn’t one. Here are the terms.</h2>
      <p className="secsub">One baseline. One target. 90 days. Everything agreed before we start.</p>
      <div className="terms">
        <div className="termbox">
          <h3>Terms of the split test</h3>
          <dl>
            {TERMS.map(([t, d]) => (<span key={t} style={{ display: "contents" }}><dt>{t}</dt><dd>{d}</dd></span>))}
          </dl>
        </div>
        <div className="faq">
          {FAQ.map(([q, a], i) => (
            <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
    </div></section>
  );
}

const OBJ = [
  ["“I’ve paid agencies to babysit flows before.”", "We’re not here to maintain what already exists. We establish the baseline, rebuild the system, and measure the improvement."],
  ["“How do I know the results are real?”", "One agreed metric. Your actual account data. Your current performance as the benchmark."],
  ["“How do I know you can actually deliver?”", "200+ lifecycle builds since 2015, backed by a 20+ person specialist team."],
  ["“What if my store isn’t big enough?”", "We check that before we start. If there isn’t enough volume to prove the result in 90 days, we’ll tell you."],
  ["“Will this actually sound like my brand?”", "It has to. Every flow is built around your brand, products and customers, and approved by you before launch."],
  ["“What happens to my customer data?”", "Your data stays in your systems. We only request the access needed to measure, build and launch."],
];

export function Objections() {
  return (
    <section className="blk"><div className="wrap">
      <h2 className="sec">You’ve heard agency promises before.<br /> This one comes with a number we have to beat.</h2>
      <div className="obj">
        {OBJ.map(([q, a]) => (
          <div className="card" key={q}><p><b className="obj-q">{q}</b>{a}</p></div>
        ))}
      </div>
    </div></section>
  );
}

export function Call({ onStart }: { onStart: StartFn }) {
  return (
    <div className="ctaband"><div className="wrap">
      <h2>Find out how much revenue your flows are leaving behind.</h2>
      <p>Scan your store and get your Retention Score, revenue gap and biggest opportunities. No sales call required.</p>
      <button className="btn big" onClick={() => onStart()}>Scan my store →</button>
    </div></div>
  );
}
