"use client";

import { HOTEL_GROWTH, HOTEL_REPORT, HOTEL_REPORT_INSIDE, HOTEL_REPORT_NOTE, HOTELS } from "./content-hotels";
import { Band, Cases, Credibility, CtaBtn, Faq, FinalCta, Guides, Hero, Leader, Newsletter, Proof, Report } from "./Sections";
import { AeoShell } from "./Shell";
import { Counter, Icon, img } from "./ui";

function HotelsBody() {
  return (
    <>
      <Hero
        h1={<>More guests.<br />More revenue.<br /><span className="mint">For free.</span></>}
        lead={<>Travellers now ask <b>ChatGPT, Gemini and Perplexity</b> where to stay. The AI names 3 to 5 hotels and stops. The named ones get the booking, direct and commission-free. We make sure one of them is yours.</>}
        fine={<>Your free <b>AI Growth Report</b> shows what ChatGPT, Gemini, Perplexity and Google AI say about your hotel today: which guest questions you win, who gets named instead, and the fixes in priority order. 3 days · no pitch.</>}
        photo="/aeo-lp/h_hero.webp" alt="Doorman at a grand hotel entrance in golden autumn light"
      />
      <Band />
      <Cases vertical="hotel" />
      <Credibility deep line="we took a travel brand from invisible to the top recommendation in AI answers" stats={[["20+ yrs", "growing brands online"], ["$4B+", "client revenue delivered"], ["600+", "eCommerce & digital builds"], ["+110%", "AI-referred traffic, retail brand"]]} />

      <section className="sec light" id="why" data-fold="why-now"><div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">Why now</span><h2>Your next guest is asking AI where to stay. <span className="acc">It’s naming your competitors, not you.</span></h2></div>
        <div className="hgrid g3 rv">
          <div><div className="bignum"><Counter to={56} suf="%" /></div><p>of travellers now plan trips with AI</p></div>
          <div><div className="bignum">3-5</div><p>hotels named in a typical AI answer. Everyone else is invisible.</p></div>
          <div><div className="bignum">4-5×</div><p>AI-referred guests convert vs organic traffic</p></div>
        </div>
        <p className="src">Sources: Phocuswright; Noble Studios / Semrush, 2025.</p>
      </div></section>

      <section className="sec" data-fold="middleman"><div className="wrap split">
        <div className="rv">
          <span className="eyebrow">Cut the middleman</span>
          <h2>AI works 24/7, <span className="mint">and takes no commission.</span></h2>
          <p className="body">OTAs and travel agents take 18 to 30% of every booking and keep your guest’s data. AI recommends hotels around the clock, in every language your guests ask in, at no commission, if it can find you. We make sure it names you, and that the booking and the guest relationship come straight to you.</p>
          <div className="chips"><span className="chip">OTAs take 18-30%</span><span className="chip">3-5 hotels named per answer</span><span className="chip">Direct: $519 vs $312</span><span className="chip m">AI: 24/7, no commission</span><span className="chip m">You own the guest</span></div>
          <CtaBtn where="middleman" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ph rv" src={img("/aeo-lp/h_fold1.webp")} alt="Boutique hotel front desk in the morning" loading="lazy" />
      </div></section>

      <section className="sec deep" data-fold="report"><div className="wrap">
        <div className="headrow rv">
          <div><span className="eyebrow">What you get</span><h2>Your free <span className="mint">AI Growth Report</span></h2><p className="sub">Pick your property type. These are the questions your guests already ask.</p></div>
          <span className="flag">Named in 2 of 20 prompts · sample</span>
        </div>
        <Report tabs={HOTEL_REPORT} inside={HOTEL_REPORT_INSIDE} note={HOTEL_REPORT_NOTE} />
      </div></section>

      <section className="sec" data-fold="upside"><div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow">The upside</span>
          <h2>More guests, <span className="mint">more direct revenue</span></h2>
          <p className="sub">As your hotel gets named in more AI answers, more guests find you before they find an OTA, and more of the booking comes direct.</p>
        </div>
        <div className="figs rv">
          <div><b><Counter to={38} pre="+" suf="%" /></b><span>direct bookings</span></div>
          <div><b><Counter to={12} pre="+" suf="%" /></b><span>RevPAR</span></div>
          <div><b><Counter to={2100} pre="+" /></b><span>guests reached in AI / mo</span></div>
          <div><b><Counter to={64} pre="$" suf="k" /></b><span>OTA commission saved / yr</span></div>
        </div>
        <div className="chartbox rv">
          <span className="eyebrow">AI-referred direct bookings, month on month</span>
          <div className="vbars" data-on>{HOTEL_GROWTH.map((h, i) => <div key={i} style={{ ["--h" as string]: h + "%" }} />)}</div>
          <div className="vlabels">{["M1", "M2", "M3", "M4", "M5", "M6"].map((m) => <span key={m}>{m}</span>)}</div>
        </div>
        <p className="src center">Illustrative growth. Real figures depend on your starting point. Your AI Growth Report sets the baseline.</p>
      </div></section>

      <section className="sec light" id="services" data-fold="what-we-do"><div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">What we do</span>
          <h2>The report is the map. <span className="acc">We run every fix.</span></h2>
          <p className="sub">Being named by AI is mostly verifiable work: pages engines can quote, trust signals they check, mentions on the sites they actually read, and a booking path that converts the guest once they arrive.</p>
        </div>
        <div className="hgrid g3 rv">
          <div><Icon name="sparkles" /><h3>Snapshot</h3><p>20 prompts × 4 engines × 3 runs, repeated monthly. You see the trend, not a screenshot.</p></div>
          <div><Icon name="file" /><h3>Foundations</h3><p>Room, amenity, location and FAQ pages with clear facts and prices: pages engines can actually quote.</p></div>
          <div><Icon name="star" /><h3>Trust</h3><p>Review velocity and response programme across Google, TripAdvisor and the OTAs, plus awards and certifications.</p></div>
          <div><Icon name="search" /><h3>Mentions</h3><p>Travel guides, “best of” lists, local press, YouTube, Reddit. 77% of what AI cites lives off your site.</p></div>
          <div><Icon name="chart" /><h3>Measurement</h3><p>AI-referred bookings tagged in your analytics and booking engine, so the channel shows up in your own numbers.</p></div>
          <div><Icon name="trend" /><h3>Conversion</h3><p>Site speed, mobile booking and a clean path to your booking engine, so the guest the AI sends books direct.</p></div>
        </div>
        <p className="src" style={{ fontSize: 16, color: "var(--l-ink)", marginTop: 30 }}>80% of this is doing the fundamentals properly. 20% is genuinely new. We tell you which is which.</p>
      </div></section>

      <section className="sec" data-fold="partner"><div className="wrap">
        <div className="sec-head rv"><span className="eyebrow">Why scandiweb</span><h2>A growth partner, <span className="mint">not another tool.</span></h2></div>
        <div className="rows">
          {[
            { im: "/aeo-lp/h_f1.webp", t: "We run it for you.", d: "Pages, mentions, reviews and measurement, operated end to end. One walkthrough call a month, everything else happens on our side. No load on your team, no new hire.", pts: ["We write, build and publish. You approve.", "Monthly report in plain language: named or not, trending up or down, what we did"] },
            { im: "/aeo-lp/h_f2.webp", t: "Guests arrive pre-sold.", d: "An AI-referred guest has already compared hotels, read the reviews and picked yours before they land on your site. They book direct, and the relationship is yours from the first message.", pts: ["No commission on the booking", "You own the guest data, not the OTA"] },
            { im: "/aeo-lp/h_f3.webp", t: "Works with what you run.", d: "We plug into your existing PMS, booking engine and channel manager. No rip-and-replace, live in weeks.", pts: ["Mews, Cloudbeds, OPERA, SiteMinder", "Weeks to live, not quarters"] },
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
          <p className="sub">Hospitality sits alongside luxury, retail and B2B in our portfolio: the same AI search playbook, tuned to your property.</p>
        </div>
        <div className="inds rv">{["Luxury & hospitality", "Fashion", "Automotive", "Electronics", "Food & beverages", "Manufacturing", "Furniture", "B2B", "40+ more"].map((x, i) => <span key={x} className={i === 0 ? "m" : ""}>{x}</span>)}</div>
      </div></section>

      <Proof title={<>We’ve done this, <span className="mint">and it works with what you run.</span></>} results={HOTELS.results} footer={<div className="measure rv"><span className="eyebrow">Works with</span><div className="pms"><span>Mews</span><span>Cloudbeds</span><span>Oracle OPERA</span><span>SiteMinder</span><span>Apaleo</span></div></div>} />
      <Leader lead="Your AI Growth Report covers the baseline. For hotels that want to lead their market in AI search, we offer a tailored, hands-on program that goes further." />
      <Faq title="The things hoteliers ask us" items={[
        ["What exactly is the AI Growth Report?", "We run ~20 real guest questions for your hotel and city across ChatGPT, Gemini, Perplexity and Google AI, three times each, and report where you’re named, who gets named instead, where the answers come from, and your fixes in priority order."],
        ["Is it really free? What’s the catch?", "It’s free, with no obligation and no pitch. We only earn if you want us as your partner on the fixes."],
        ["How long does it take?", "3 business days, built by our specialists, not an automated scan."],
        ["Do travellers really book through ChatGPT?", "56% of travellers now use AI to plan trips (Phocuswright), and AI-referred visitors convert 4 to 5 times better than organic traffic. Your report shows your own answers, so the data settles it either way."],
        ["We already pay an SEO agency.", "Good. 80% of AI visibility is SEO and reputation done right. We cover the 20% that’s new: pages shaped to be quoted, off-site mentions, review velocity and monthly measurement of what the engines actually say. A layer on top, not a replacement."],
        ["Will it work with our PMS and booking engine?", "Yes. We work with Mews, Cloudbeds, OPERA, SiteMinder and more. No rip-and-replace, and no load on your team."],
        ["What happens after the report?", "A 30-minute walkthrough: we show you your answers live, what’s winnable first, and what it takes. You choose what to action, with us or without us."],
      ]} />
      <Guides eyebrow="Guides & success stories" title={<>See how it’s decided, <span className="mint">and what it’s worth</span></>} />
      <FinalCta title={<>See what the AI says about <span className="mint">your hotel.</span></>} body="Your free AI Growth Report covers what ChatGPT, Gemini, Perplexity and Google AI answer when guests ask where to stay in your city: where you’re named, who wins instead, and what to fix first. 3 business days. No pitch." bg="/aeo-lp/h_cta.webp" />
      <Newsletter />
    </>
  );
}

export function HotelsPage() {
  return <AeoShell cfg={HOTELS}><HotelsBody /></AeoShell>;
}
