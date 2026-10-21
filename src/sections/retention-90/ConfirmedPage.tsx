"use client";

import { useEffect, useState } from "react";
import { img } from "./copy";
import { HOST_NAME, HOST_PHOTO, HOST_TITLE, PIXEL_CONTENT, UPDATE_ENDPOINT } from "./status";
import { track } from "./track";

/* /retention-90/confirmed: where the confirmation email's button lands (Omnisend property
   r90_confirm_url). Query: e = the contact's email, cal = their Calendly link (same as in
   r90_book_url). Adds r90-confirmed in Omnisend (via /api/retention/update) and fires the Meta
   custom event "EmailConfirmed" once per session. The ad conversions (Lead) still fire on quiz
   submit, not here. */

const CAL_RE = /^https:\/\/calendly\.com\//;

export function ConfirmedPage() {
  const [bookHref, setBookHref] = useState("/solutions/retention-90/book");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const email = (q.get("e") || "").trim();
    const cal = q.get("cal") || "";
    const b = new URLSearchParams({ utm_source: "confirm-page" });
    if (email) b.set("e", email);
    if (CAL_RE.test(cal)) b.set("cal", cal);
    setBookHref("/solutions/retention-90/book?" + b.toString());
    track("confirmed_view", { has_email: email ? 1 : 0, has_cal: CAL_RE.test(cal) ? 1 : 0 });
    /* once per browser session, so a reload doesn't double count */
    let first = true;
    try { first = !sessionStorage.getItem("r90-confirmed"); sessionStorage.setItem("r90-confirmed", "1"); } catch {}
    if (!first) return;
    try {
      const w = window as unknown as { fbq?: (...a: unknown[]) => void };
      if (typeof w.fbq === "function") w.fbq("trackCustom", "EmailConfirmed", { content_name: PIXEL_CONTENT });
    } catch {}
    if (!email) return;
    try {
      fetch(UPDATE_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
        body: JSON.stringify({ kind: "confirmed", email }),
      }).then((r) => track("confirm_omni", { res: r.headers.get("x-omnisend") || String(r.status) })).catch(() => track("confirm_omni", { res: "network" }));
    } catch {}
  }, []);

  const first = HOST_NAME.split(" ")[0];
  return (
    <div className="r90 confpg">
      <div className="cf-wrap">
        <a className="cf-logo" href="https://scandiweb.com">scandiweb</a>
        <div className="cf-card">
          <div className="cf-tick"><svg viewBox="0 0 24 24" fill="none" stroke="#0b0e22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
          <h1>You&rsquo;re confirmed.</h1>
          <p>Thanks. Your Retention Score and the gaps worth fixing first are on their way to your inbox.</p>
          <p>Want to talk it through sooner? Pick a 30-minute slot with {first}. Nothing to prepare.</p>
          <a className="btn big" href={bookHref} onClick={() => track("confirmed_book_click")}>Book my 30-minute call &rarr;</a>
          <div className="cf-host">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img(HOST_PHOTO)} alt={HOST_NAME} width={44} height={44} />
            <div><b>{HOST_NAME}</b><span>{HOST_TITLE.replace(/^our /, "")[0].toUpperCase() + HOST_TITLE.replace(/^our /, "").slice(1)}, scandiweb</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
