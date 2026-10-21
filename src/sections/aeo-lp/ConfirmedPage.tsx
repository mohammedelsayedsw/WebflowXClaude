"use client";

import { useEffect, useState } from "react";
import "./aeo-lp.css";
import { HOST, UPDATE_ENDPOINT } from "./config";
import { CLINICS } from "./content-clinics";
import { HOTELS } from "./content-hotels";
import { initTracking, track, trackLanding } from "./track";
import { Arrow, img } from "./ui";

/* /aeo/{hotels,clinics}/confirmed: where the confirmation email's button lands (property
   aeoh_confirm_url / aeoc_confirm_url). Query: e = the contact's email, n = first name.
   Adds aeoh-confirmed / aeoc-confirmed in Omnisend (via /api/aeo/update) and fires the Meta custom
   event "EmailConfirmed". The ad conversions (Lead) still fire on quiz submit, not here. */
export function ConfirmedPage({ funnel }: { funnel: "hotels" | "clinics" }) {
  const cfg = funnel === "hotels" ? HOTELS : CLINICS;
  initTracking(cfg.fn);
  const [bookHref, setBookHref] = useState(`/solutions/aeo/${funnel}/book`);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const email = (q.get("e") || "").trim(), name = (q.get("n") || "").trim();
    const b = new URLSearchParams({ utm_source: "confirm-page" });
    if (email) b.set("e", email);
    if (name) b.set("n", name);
    setBookHref(`/solutions/aeo/${funnel}/book?` + b.toString());
    trackLanding();
    track("confirmed_view", { has_email: email ? 1 : 0 });
    /* once per browser session, so a reload doesn't double count */
    let first = true;
    try { const k = "aeo-confirmed-" + funnel; first = !sessionStorage.getItem(k); sessionStorage.setItem(k, "1"); } catch {}
    if (!first) return;
    try { if (typeof window.fbq === "function") window.fbq("trackCustom", "EmailConfirmed", { content_name: cfg.pixel.lead }); } catch {}
    if (!email) return;
    try {
      fetch(UPDATE_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
        body: JSON.stringify({ funnel, kind: "confirmed", email }),
      }).then((r) => track("confirm_omni", { res: r.headers.get("x-omnisend") || String(r.status) })).catch(() => track("confirm_omni", { res: "network" }));
    } catch {}
  }, [cfg, funnel]);

  return (
    <div className="aeolp confpg">
      <div className="wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="https://scandiweb.com"><img className="bp-logo" src={img("/shared/logos/scandiweb.svg")} alt="scandiweb" /></a>
        <div className="cf-card done">
          <div className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#0b0e22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
          <h1>{cfg.quiz.doneTitle}</h1>
          <p>{cfg.quiz.doneBody}</p>
          <p>Want to talk it through sooner? Pick a 30-minute slot with {HOST.name.split(" ")[0]}.</p>
          <a className="btn" href={bookHref} onClick={() => track("confirmed_book_click")}>Book my 30-minute call <Arrow /></a>
          <div className="cf-host">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img(HOST.photo)} alt={HOST.name} />
            <div><b>{HOST.name}</b><span>{HOST.role}, scandiweb</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
