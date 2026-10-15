"use client";

import { useEffect, useRef, useState } from "react";
import { img } from "./copy";
import { HOST_NAME, HOST_PHOTO, HOST_TITLE, UPDATE_ENDPOINT } from "./status";
import { track, watchCalendly } from "./track";

/* /retention-90/book: the booking page every Retention Score email links to
   (Omnisend property r90_book_url). Query: cal = Calendly link (already prefilled with
   name, email and store), e = the contact's email. The booking itself happens in the
   embedded Calendly; when Calendly reports calendly.event_scheduled, the page tells
   /api/retention/update, which adds r90-booked in Omnisend: the nurture flows exit and
   the thank-you automation starts. */

const CAL_RE = /^https:\/\/calendly\.com\//;

function embedUrl(cal: string, utm: URLSearchParams): string {
  const u = new URL(cal);
  /* Calendly records utm_* on the booking; pass the email's UTM through */
  utm.forEach((v, k) => { if (/^utm_(source|medium|campaign|content|term)$/.test(k)) u.searchParams.set(k, v); });
  u.searchParams.set("embed_domain", window.location.hostname);
  u.searchParams.set("embed_type", "Inline");
  return u.toString();
}

export function BookPage() {
  const [cal, setCal] = useState("");
  const [booked, setBooked] = useState(false);
  const [ready, setReady] = useState(false);
  const emailRef = useRef("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const c = q.get("cal") || "";
    emailRef.current = (q.get("e") || "").trim();
    if (CAL_RE.test(c)) setCal(embedUrl(c, q));
    setReady(true);
    track("bookpage_view", { src: q.get("utm_content") || q.get("utm_source") || "direct", has_cal: CAL_RE.test(c) ? 1 : 0 });
    const onBooked = () => {
      setBooked(true);
      const email = emailRef.current;
      if (!email) return;
      fetch(UPDATE_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
        body: JSON.stringify({ kind: "booked", email }),
      }).then((r) => track("bookpage_omni", { pass: r.status, res: r.headers.get("x-omnisend") || "" })).catch(() => track("bookpage_omni", { pass: 0 }));
    };
    return watchCalendly(onBooked);
  }, []);

  return (
    <div className="r90" style={{ minHeight: "100vh", background: "#10132c", color: "#fff", padding: "40px 16px 56px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <a href="https://scandiweb.com" style={{ color: "#fff", fontWeight: 800, fontSize: 22, textDecoration: "none", letterSpacing: "-.01em" }}>scandiweb</a>
        <div style={{ display: "flex", gap: 16, alignItems: "center", margin: "28px 0 8px" }}>
          <img src={img(HOST_PHOTO)} alt={HOST_NAME} width={64} height={64} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
          <div>
            <h1 style={{ fontSize: 30, lineHeight: 1.2, fontWeight: 700, margin: 0 }}>
              {booked ? "You’re booked." : "Book your 30-minute call"}
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(255,255,255,.8)", margin: "6px 0 0" }}>
              {booked
                ? "The calendar invite with the link comes from Calendly. Talk soon."
                : <>With <b>{HOST_NAME}</b>, {HOST_TITLE}. Nothing to prepare. Just bring your questions.</>}
            </p>
          </div>
        </div>
        {ready && (cal ? (
          <>
            <div style={{ borderRadius: 16, overflow: "hidden", background: "#fff", marginTop: 20 }}>
              <iframe src={cal} title="Booking calendar" style={{ width: "100%", height: 700, border: 0, display: "block" }} />
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", marginTop: 10 }}>
              Calendar not loading? <a href={cal} target="_blank" rel="noopener noreferrer" style={{ color: "#6ef76e" }}>Open it in a new tab &rarr;</a>
            </p>
          </>
        ) : (
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginTop: 24 }}>
            This booking link is incomplete. Reply to the email you came from and {HOST_NAME} will send you a time.
          </p>
        ))}
      </div>
    </div>
  );
}
