"use client";

import { useRef, useState } from "react";
import { AREAS, type AreaKey } from "./copy";
import { HOST_NAME, HOST_PHOTO, HOST_TITLE, img } from "./config";
import { band, eur, eurK, type Fix, type Tier } from "./scoring";

const BAND_TXT = { poor: "Needs work", fair: "Room to grow", good: "Strong" } as const;

function Ring({ n }: { n: number }) {
  const r = 52, c = 2 * Math.PI * r;
  return (
    <svg className="ga-ring" viewBox="0 0 120 120" role="img" aria-label={`Growth Score ${n} out of 100`}>
      <circle cx="60" cy="60" r={r} className="bg" />
      <circle cx="60" cy="60" r={r} className="fg" strokeDasharray={c} strokeDashoffset={c * (1 - n / 100)} />
      <text x="60" y="58" textAnchor="middle" className="n">{n}</text>
      <text x="60" y="78" textAnchor="middle" className="o">/ 100</text>
    </svg>
  );
}

export function Areas({ sc }: { sc: Record<AreaKey, number> }) {
  return (
    <ul className="ga-areas">
      {AREAS.map((a) => {
        const b = band(sc[a.k]);
        return (
          <li key={a.k} className={"b-" + b}>
            <div className="ga-a-top"><span>{a.n}</span><b>{BAND_TXT[b]}</b></div>
            <div className="ga-bar"><i style={{ width: sc[a.k] + "%" }} /></div>
          </li>
        );
      })}
    </ul>
  );
}

/* Score first, no email asked. The fixes and the euro values sit blurred under the email form. */
export function ScoreAndGate({ store, score, sc, fixList, scanned, onSubmit, onBack }: {
  store: string; score: number; sc: Record<AreaKey, number>; fixList: Fix[]; scanned: boolean;
  onSubmit: (name: string, email: string, phone: string, hp: string) => void; onBack: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ok, setOk] = useState(false);
  const [hp, setHp] = useState("");
  const [err, setErr] = useState<{ f: "email" | "consent"; m: string } | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const submit = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) { setErr({ f: "email", m: "Enter a valid email so we can send your full scan." }); emailRef.current?.focus(); return; }
    if (!ok) { setErr({ f: "consent", m: "Tick the box so we can email your scan." }); consentRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }); return; }
    setErr(null);
    onSubmit(name.trim(), email.trim(), phone.trim(), hp);
  };
  return (
    <section className="ga-res-screen" id="screen-score">
      <div className="ga-wrap ga-narrow">
        <button className="ga-back" onClick={onBack}>&larr; Back</button>
        <div className="ga-scorehead">
          <Ring n={score} />
          <div>
            <div className="ga-qn">Growth Score · {store}</div>
            <h2>{score < 45 ? "Big gaps, which means big room to grow." : score < 70 ? "A working setup with clear gaps." : "A strong setup. The gains are in the details."}</h2>
            <p className="ga-small">{scanned ? "Scored from your answers and a scan of your homepage." : "Scored from your answers. Our scanner couldn’t read your site in time, so we’ll check it on the call."}</p>
          </div>
        </div>
        <Areas sc={sc} />
        <div className="ga-lock">
          <div className="ga-blur" aria-hidden="true">
            {fixList.slice(0, 3).map((f, i) => <div className="ga-fix" key={i}><b>{f.title}</b><span>~{eurK(f.value)}/month</span></div>)}
          </div>
          <div className="ga-gate">
            <h3>Unlock your top fixes, with estimated value in euros</h3>
            <p>We’ll show them now and email you the full scan.</p>
            <input type="text" placeholder="First name" autoComplete="given-name" value={name} onChange={(e) => setName(e.target.value)} />
            <input ref={emailRef} type="email" placeholder="Work email" autoComplete="email" value={email} className={err?.f === "email" ? "bad" : ""}
              aria-invalid={err?.f === "email"} aria-describedby={err?.f === "email" ? "ga-e-email" : undefined}
              onChange={(e) => { setEmail(e.target.value); if (err?.f === "email") setErr(null); }} onKeyDown={(e) => { if (e.key === "Enter") submit(); }} />
            {err?.f === "email" ? <div className="ga-err" id="ga-e-email" role="alert">{err.m}</div> : null}
            <input type="tel" inputMode="tel" placeholder="Mobile (optional)" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div className="ga-hp" aria-hidden="true"><input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></div>
            <label className={"ga-consent" + (err?.f === "consent" ? " bad" : "")}>
              <input ref={consentRef} type="checkbox" checked={ok} onChange={(e) => { setOk(e.target.checked); if (e.target.checked && err?.f === "consent") setErr(null); }} />
              <span>Email me my scan and growth tips from scandiweb. Unsubscribe anytime.</span>
            </label>
            {err?.f === "consent" ? <div className="ga-err" role="alert">{err.m}</div> : null}
            <button className="ga-btn" onClick={submit}>Unlock my full scan &rarr;</button>
            <p className="ga-small">No spam. No list selling. Your data stays private.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fixes({ list }: { list: Fix[] }) {
  return (
    <ol className="ga-fixes">
      {list.map((f) => (
        <li key={f.area}>
          <div className="ga-fix-top"><b>{f.title}</b>{f.value > 0 ? <span>~{eur(f.value)} a month</span> : null}</div>
          <p>{f.why}</p>
        </li>
      ))}
    </ol>
  );
}

function embed(url: string): string {
  return url + (url.includes("?") ? "&" : "?") + "embed_domain=" + encodeURIComponent(window.location.hostname) + "&embed_type=Inline";
}

export function FullResult({ tier, store, score, sc, fixList, target, bookingUrl, email, onBookView }: {
  tier: Tier; store: string; score: number; sc: Record<AreaKey, number>; fixList: Fix[];
  target: number; bookingUrl: string; email: string; onBookView: () => void;
}) {
  const qualified = tier !== "cold";
  return (
    <section className="ga-res-screen" id="screen-result">
      <div className="ga-wrap ga-narrow">
        <div className="ga-scorehead">
          <Ring n={score} />
          <div>
            <div className="ga-qn">Growth Score · {store}</div>
            {qualified
              ? <h2>Your store looks like a fit for the 15% guarantee.</h2>
              : <h2>Here’s where your store’s next sales are.</h2>}
            <p className="ga-small">{qualified ? "We confirm it on the plan call. " : ""}Your full scan is on its way to <b>{email}</b>.</p>
          </div>
        </div>
        {qualified && (
          <div className="ga-target">
            <span>15% of the revenue band you picked is about</span>
            <b>{eur(target)} more a month</b>
            <span>On the call we set the exact baseline from your store’s own sales. That’s the number we commit to over 90 days.</span>
          </div>
        )}
        <h3 className="ga-h3">Your top fixes</h3>
        <Fixes list={fixList} />
        <p className="ga-small">Euro values are estimates from your answers and the homepage scan. The plan call checks them against your real numbers.</p>
        {qualified ? (
          <div className="ga-book" id="book">
            <div className="ga-host">
              <img src={img(HOST_PHOTO)} alt={HOST_NAME} />
              <p><b>Book your 30-minute plan call</b> with {HOST_NAME}, {HOST_TITLE}. We check the scan against your numbers, show the three changes we’d make first, and confirm the guarantee terms for {store}.</p>
            </div>
            <div className="ga-cal">
              {bookingUrl
                ? <iframe src={embed(bookingUrl)} title="Book your plan call" loading="lazy" onLoad={onBookView} />
                : <div className="ga-cal-ph">The calendar is loading. If it doesn’t appear, {HOST_NAME} will email you a booking link today.</div>}
            </div>
            {bookingUrl ? <p className="ga-small">Calendar not loading? <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Open it in a new tab &rarr;</a></p> : null}
          </div>
        ) : (
          <div className="ga-cold">
            <h3>What happens next</h3>
            <p>Over the next two weeks we’ll email you one fix at a time, with how to do it yourself. Plan calls and the 15% guarantee are for stores doing €50K+ a month. When you get there, scan again and book a call.</p>
          </div>
        )}
        <details className="ga-areas-wrap"><summary>How the score is built</summary>
          <Areas sc={sc} />
          <p className="ga-small">Weights: paid acquisition 20%, retention 20%, Google search 15%, AI answers 15%, conversion 15%, tracking 15%. AI answers is estimated from the signals AI engines read; the full check (15 buyer questions through ChatGPT, Gemini and Perplexity) runs before your plan call.</p>
        </details>
      </div>
    </section>
  );
}
