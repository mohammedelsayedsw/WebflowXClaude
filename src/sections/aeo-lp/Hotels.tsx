"use client";

import { HOTEL_GROWTH, HOTEL_POINTS, HOTELS } from "./content-hotels";
import { Band, Credibility, CtaBtn, Faq, FinalCta, Guides, Hero, Leader, Newsletter, Proof } from "./Sections";
import { AeoShell } from "./Shell";
import { Counter, Icon, img } from "./ui";

const barColor = (s: number) => (s <= 4 ? "var(--red)" : s <= 6 ? "#ffaa50" : "var(--mint)");

function HotelsBody() {
  const total = HOTEL_POINTS.reduce((a, p) => a + p[1], 0);
  return (
    <>
      <Hero
        h1={<>More guests.<br />More revenue.<br /><span className="mint">For free.</span></>}
        lead={<>Guests now choose hotels through <b>AI, search and metasearch</b>, then most hotel sites lose the booking to an OTA. We score your hotel on 10 growth points, then fix what’s costing you direct bookings.</>}
        fine={<>Your free <b>10-point growth audit</b> scores your hotel out of 100: where you’re winning and where you’re leaking bookings to the OTAs. One group won back $13M direct. 3 days · no pitch.</>}
        photo="/aeo-lp/h_hero.webp" alt="Doorman at a grand hotel entrance in golden autumn light"
      />
      <Band />
      <Credibility line="we took a travel brand from invisible to the top recommendation in AI answers" stats={[["20+ yrs", "growing brands online"], ["$4B+", "client revenue delivered"], ["+17.1%", "orders, luxury fashion brand"], ["+260%", "paid revenue YoY, fashion brand"]]} />

      <section className="sec light" id="why" data-fold="why-now"><div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">Why now</span><h2>Your next guest is asking AI where to stay. <span className="acc">It’s naming your competitors, not you.</span></h2></div>
        <div className="hgrid g3 rv">
          <div><div className="bignum"><Counter to={56} suf="%" /></div><p>of travellers now plan trips with AI</p></div>
          <div><div className="bignum"><Counter to={25} pre="+" suf="%" /></div><p>more revenue per guest from pre-arrival upsells</p></div>
          <div><div className="bignum">4-5×</div><p>AI-referred guests convert vs organic traffic</p></div>
        </div>
        <p className="src">Sources: Phocuswright; Nor1; Noble Studios / Semrush, 2025.</p>
      </div></section>

      <section className="sec" data-fold="middleman"><div className="wrap split">
        <div className="rv">
          <span className="eyebrow">Cut the middleman</span>
          <h2>AI works 24/7, <span className="mint">and takes no commission.</span></h2>
          <p className="body">OTAs and travel agents take 18 to 30% of every booking and keep your guest’s data. AI recommends you around the clock at no commission, if it can find you. We make sure it does, and send the booking, and the guest relationship, straight to you.</p>
          <div className="chips"><span className="chip">OTAs take 18-30%</span><span className="chip">Booking: 48% of EU vs 21% direct</span><span className="chip">Direct: $519 vs $312</span><span className="chip m">AI: 24/7, no commission</span><span className="chip m">You own the guest</span></div>
          <CtaBtn where="middleman" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ph rv" src={img("/aeo-lp/h_fold1.webp")} alt="Boutique hotel front desk in the morning" loading="lazy" />
      </div></section>

      <section className="sec deep" data-fold="audit"><div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">What you get</span><h2>The 10-Point <span className="mint">Growth Audit</span></h2></div>
        <div className="score rv" data-on>
          <div className="score-top">
            <div className="tot">{total}<small>/100</small></div>
            <div><span className="tag">Room to grow</span><p>Strong on reputation &amp; SEO, losing bookings in AI, direct and guest data</p></div>
          </div>
          <div className="bars">
            {HOTEL_POINTS.map(([n, s]) => (
              <div key={n} className="bar"><div className="lbl"><span>{n}</span><b>{s}/10</b></div><div className="tr"><i style={{ ["--w" as string]: s * 10 + "%", background: barColor(s) }} /></div></div>
            ))}
          </div>
          <p className="note">We score 10 growth points from your live site and return a prioritized fix list, highest-impact first, each one a scoped next step. <span>Sample score shown.</span></p>
        </div>
      </div></section>

      <section className="sec" data-fold="upside"><div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">The upside</span>
          <h2>More guests, <span className="mint">more direct revenue</span></h2>
          <p className="sub">As your score climbs across the ten points, more of the booking comes direct, and the numbers move where it counts.</p>
        </div>
        <div className="figs rv">
          <div><b><Counter to={38} pre="+" suf="%" /></b><span>direct bookings</span></div>
          <div><b><Counter to={12} pre="+" suf="%" /></b><span>RevPAR</span></div>
          <div><b><Counter to={2100} pre="+" /></b><span>guests reached in AI / mo</span></div>
          <div><b><Counter to={64} pre="$" suf="k" /></b><span>OTA commission saved / yr</span></div>
        </div>
        <div className="chartbox rv">
          <span className="eyebrow">Direct bookings, month on month</span>
          <div className="vbars" data-on>{HOTEL_GROWTH.map((h, i) => <div key={i} style={{ ["--h" as string]: h + "%" }} />)}</div>
          <div className="vlabels">{["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => <span key={m}>{m}</span>)}</div>
        </div>
        <p className="src center">Illustrative direct-booking growth. Real figures depend on your starting point. Your audit sets the baseline.</p>
      </div></section>

      <section className="sec light" id="services" data-fold="what-we-build"><div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">What we build</span>
          <h2>Your 10-point score is the roadmap. <span className="acc">We run every fix.</span></h2>
          <p className="sub">AI visibility is one point of ten. scandiweb is your growth partner across all of them: search and paid, a direct-booking site, guest data and CRM, revenue and reputation, and the custom software your PMS can’t do alone.</p>
        </div>
        <div className="hgrid g4 rv">
          {[
            ["sparkles", "AI visibility (AEO)", "Named by ChatGPT, Gemini & Perplexity"],
            ["search", "SEO, content & social", "Organic reach that turns into direct bookings"],
            ["target", "Paid media & metasearch", "Google, Meta & Google Hotel Ads, managed"],
            ["monitor", "Direct-booking site", "A revamp that converts, not bounces to an OTA"],
            ["mail", "Email, CRM & guest data", "One guest view you own, not the OTA"],
            ["trend", "Revenue & reputation", "Reviews and rate strategy, working together"],
            ["code", "Custom software & PMS", "Tailored builds on Oracle OPERA, Mews & Cloudbeds"],
            ["user", "Pre-arrival dossier", "Consent-first VIP intelligence, compliant by design"],
          ].map(([ic, t, d]) => <div key={t}><Icon name={ic} /><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div></section>

      <section className="sec" data-fold="partner"><div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">Why scandiweb</span><h2>A partner, <span className="mint">not another tool.</span></h2></div>
        <div className="rows">
          {[
            { im: "/aeo-lp/h_f1.webp", t: "We run it for you", d: "AI visibility, campaigns and the guest-data layer, operated end to end. No load on your team, no new hire.", pts: ["Done-for-you, not just a dashboard", "One team across the whole stack"] },
            { im: "/aeo-lp/h_f2.webp", t: "Consent-first guest data", d: "We unify your guest data the compliant way (non-biometric, consent-first), so it becomes a trust signal, not a liability.", pts: ["GDPR & PDPL by design", "You own the guest, not the OTA"] },
            { im: "/aeo-lp/h_f3.webp", t: "Works with what you run", d: "We plug into your existing PMS, booking engine and channel manager. No rip-and-replace, live in weeks.", pts: ["Mews, Cloudbeds, OPERA, SiteMinder", "Weeks to live, not quarters"] },
          ].map((r, i) => (
            <div key={r.t} className={"split rv" + (i % 2 ? " rev" : "")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ph" src={img(r.im)} alt="" loading="lazy" />
              <div><h3>{r.t}</h3><p className="body">{r.d}</p><ul className="checks">{r.pts.map((p) => <li key={p}>{p}</li>)}</ul></div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="sec deep tight" data-fold="industries"><div className="wrap center">
        <div className="sec-head rv" style={{ marginBottom: 36 }}>
          <span className="eyebrow">Portfolio</span>
          <h2>40+ industries <span className="mint">in our portfolio</span></h2>
          <p className="sub">Hospitality sits alongside luxury, retail and B2B in our portfolio: the same growth playbook, tuned to your property.</p>
        </div>
        <div className="inds rv">{["Luxury & hospitality", "Fashion", "Automotive", "Electronics", "Food & beverages", "Manufacturing", "Furniture", "B2B", "40+ more"].map((x, i) => <span key={x} className={i === 0 ? "m" : ""}>{x}</span>)}</div>
      </div></section>

      <section className="sec light" data-fold="plays"><div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">Revenue plays</span>
          <h2>Five plays we deploy to turn your data <span className="acc">into revenue</span></h2>
          <p className="sub">When your audit flags direct bookings, guest data, reputation or rates, these are the plays we run: proven across the industry, on your stack, no load on your team.</p>
        </div>
        <div className="hgrid g5 rv">
          {[
            ["Guest data → direct bookings", "One guest profile from your PMS, booking engine and email. Campaigns move share off the OTAs.", "$13M direct", "one hotel group (Revinate)", "OTAs hold ~48% of EU bookings vs 21% direct"],
            ["Reputation → pricing power", "Feed review scores into your rate strategy. Higher scores buy ADR headroom.", "+1.42% RevPAR", "per +1 review point (Cornell, peer-reviewed)", "5pts below your comp set ≈ ~7% RevPAR forfeited"],
            ["Automated upsell engine", "Pre-arrival and front-desk offers (upgrades, spa, early check-in) targeted by guest segment.", "+20-30%", "ancillary revenue per guest (industry)", "$20-40/room/month left on the table"],
            ["Cancellation prediction", "Score each booking’s cancel risk and reach out before it drops. Smarter overbooking.", "Fewer cancels", "contacted guests cancel less (peer-reviewed A/B)", "~40% of bookings cancel (50% on Booking.com)"],
            ["Total revenue management", "Dynamic pricing beyond rooms (F&B, spa, function space) steered by TRevPAR.", "+6% RevPAR", "year one (Duetto)", "30-40% of revenue priced statically"],
          ].map(([t, d, n, s, c]) => <div key={t} className="seg"><h3>{t}</h3><p>{d}</p><div className="n">{n}</div><div className="s">{s}</div><div className="c">⚠ {c}</div></div>)}
        </div>
        <div className="center rv"><span className="okbar">✓ Runs on data you already have: your PMS, booking engine, reviews, reservations &amp; POS.</span></div>
        <p className="center rv" style={{ maxWidth: 760, margin: "28px auto 0", color: "var(--l-ink)", fontSize: 17 }}>OTAs take up to 25% of half your bookings, and your guest data is the highest-yield asset you’re not managing. One group made $13M in direct revenue fixing exactly that.</p>
        <p className="src center">Sources: Revinate; Cornell CHR (peer-reviewed); Oaky; Duetto; peer-reviewed cancellation research.</p>
      </div></section>

      <section className="sec deep" data-fold="revamp"><div className="wrap split rev">
        <div className="rv">
          <span className="eyebrow">Campaign pages &amp; revamps</span>
          <h2>Ship the page <span className="mint">before the season starts.</span></h2>
          <p className="body">Christmas, Ramadan, weddings, a flash offer: we spin up on-brand campaign pages fast, wired to your booking engine. And when the site itself is the problem, the revamp accelerator rebuilds the booking path so guests finish direct instead of bouncing to an OTA.</p>
          <div className="chips"><span className="chip m">Seasonal pages in hours</span><span className="chip">Multilingual (Arabic + Nordic)</span><span className="chip">Mobile-first checkout</span><span className="chip">Built to convert</span></div>
          <CtaBtn where="revamp" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ph rv" src={img("/aeo-lp/h_fold2.webp")} alt="Palatial hotel suite at dusk" loading="lazy" />
      </div></section>

      <Proof vertical="hotel" results={HOTELS.results} footer={<div className="measure rv"><span className="eyebrow">Works with</span><div className="pms"><span>Mews</span><span>Cloudbeds</span><span>Oracle OPERA</span><span>SiteMinder</span><span>Apaleo</span></div></div>} />
      <Leader lead="Your 10-point audit sets the baseline. For hotels that want to lead their market in AI search, we offer a tailored, hands-on program that goes further." />
      <Faq title="The things hoteliers ask us" items={[
        ["What exactly is the 10-point audit?", "We score 10 growth points from your live site (AI visibility, SEO, speed, mobile, booking flow, direct vs OTA, paid, guest data, reputation and analytics) and return a score out of 100 with the highest-impact fixes first."],
        ["Is it really free? What’s the catch?", "It’s free, with no obligation and no pitch. We only earn if you want us to be your partner on the fixes."],
        ["How long does it take?", "3 business days, done by our specialists, not an automated report."],
        ["Do you only do AI, or everything?", "All ten points. AI visibility is one of them; scandiweb also covers search, paid, your site, guest data, revenue and custom software."],
        ["We already have a website and a CRM.", "Great. We make them win across all 10 points and plug into what you already run. No rip-and-replace."],
        ["Will it work with our PMS?", "Yes. We integrate with Mews, Cloudbeds, OPERA, SiteMinder and more, and we run it for you, with no load on your team."],
        ["Is the guest data GDPR-safe?", "Consent-first and non-biometric by design. Compliance is built in, not bolted on, so it becomes a trust signal for your guests."],
        ["What happens after the audit?", "You get a prioritized fix list, each a scoped next step. We discuss the options with you, tailored to your needs, and you choose what to action."],
      ]} />
      <Guides eyebrow="Guides & success stories" title={<>See how it’s done, <span className="mint">and what it’s worth</span></>} />
      <FinalCta title={<>See your hotel’s <span className="mint">growth score.</span></>} body="We score your site across 10 growth points (AI visibility, SEO, speed, booking flow, direct vs OTA, guest data and more) and send a prioritized action plan. 3 business days. No pitch." bg="/aeo-lp/h_cta.webp" />
      <Newsletter />
    </>
  );
}

export function HotelsPage() {
  return <AeoShell cfg={HOTELS}><HotelsBody /></AeoShell>;
}
