"use client";

import { useEffect, useRef, useState } from "react";
import "./aeo-lp.css";
import { loadCal, mountCal, reportBooked } from "./Booking";
import { HOST } from "./config";
import { CLINICS } from "./content-clinics";
import { HOTELS } from "./content-hotels";
import { initTracking, track, trackLanding } from "./track";
import { img } from "./ui";

/* /aeo/{hotels,clinics}/book: the page every Omnisend email links to (property aeoh_book_url /
   aeoc_book_url). Query: e = the contact's email, n = first name (both prefill Janis's Cal.com).
   A confirmed booking adds aeoh-booked / aeoc-booked in Omnisend via /api/aeo/update. */
export function BookPage({ funnel }: { funnel: "hotels" | "clinics" }) {
  const cfg = funnel === "hotels" ? HOTELS : CLINICS;
  initTracking(cfg.fn);
  const calRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef("");
  const [ready, setReady] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    emailRef.current = (q.get("e") || "").trim();
    const name = (q.get("n") || "").trim();
    trackLanding();
    track("bookpage_view", { src: q.get("utm_content") || q.get("utm_source") || "direct", has_email: emailRef.current ? 1 : 0 });
    let done = false;
    const Cal = loadCal(
      () => { if (done) return; done = true; setBooked(true); reportBooked(cfg, emailRef.current, "bookpage"); },
      () => { setReady(true); track("cal_view", { where: "bookpage" }); },
    );
    if (calRef.current) mountCal(Cal, calRef.current, { name, email: emailRef.current });
  }, [cfg]);

  return (
    <div className="aeolp bookpg">
      <div className="wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="https://scandiweb.com"><img className="bp-logo" src={img("/shared/logos/scandiweb.svg")} alt="scandiweb" /></a>
        <div className="bp-head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bp-face" src={img(HOST.photo)} alt={HOST.name} />
          <div>
            <h1>{booked ? "You’re booked in." : "Book your 30-minute call"}</h1>
            <p>{booked
              ? "The calendar invite and reminders come from Cal.com. Talk soon."
              : <>With <b>{HOST.name}</b>, {HOST.role}. Nothing to prepare. Just bring your questions about your {cfg.vertical} and AI search.</>}</p>
          </div>
        </div>
        <div className={"bp-cal" + (booked ? " done" : "")}>
          {!ready && <div className="ld">Loading Janis’s calendar…</div>}
          <div ref={calRef} />
        </div>
        <p className="bp-fine">Calendar not loading? <a href={"https://cal.com/" + HOST.calLink} target="_blank" rel="noopener noreferrer">Open it in a new tab &rarr;</a></p>
      </div>
    </div>
  );
}
