"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { QUESTIONS, img } from "./copy";
import { computeLeak, computeScore, fmtK } from "./scoring";
import { CALENDAR_URL, HOST_NAME, HOST_TITLE } from "./status";

type Props = {
  open: boolean;
  onClose: () => void;
  store: string;
  leadName: string;
  leadEmail: string;
  answers: Record<string, number>;
  labels: Record<string, string>;
};

/* Everything the scan already knows, handed to the scheduler so nothing is retyped. */
function calendarURL(p: Omit<Props, "open" | "onClose">): string {
  const full = (p.leadName || "").trim();
  const first = full.split(" ")[0] || "";
  const last = full.split(" ").slice(1).join(" ");
  const q: Record<string, string> = {};
  if (/hubspot/i.test(CALENDAR_URL)) { q.firstName = first; q.lastName = last; q.email = p.leadEmail; q.company = p.store; }
  else if (/calendly/i.test(CALENDAR_URL)) { q.name = full; q.email = p.leadEmail; q.a1 = p.store; }
  else { q.name = full; q.email = p.leadEmail; }
  q.store = p.store;
  const scanned = p.answers.rev != null;
  if (scanned) {
    q.score = String(computeScore(p.answers));
    q.opportunity = String(computeLeak(p.answers));
    q.scan = QUESTIONS.map((Q) => Q.k + "=" + (p.labels[Q.k] || "")).join("; ");
  }
  q.utm_source = "retention-scan"; q.utm_medium = "summary-modal";
  q.utm_content = scanned ? "score-" + computeScore(p.answers) : "no-scan";
  const qs = Object.entries(q).filter(([, v]) => v !== "" && v != null).map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v)).join("&");
  return CALENDAR_URL + (CALENDAR_URL.indexOf("?") > -1 ? "&" : "?") + qs;
}

export function BookingModal(props: Props) {
  const { open, onClose, store, answers } = props;
  const closeRef = useRef<HTMLButtonElement>(null);
  const scanned = answers.rev != null;
  const url = useMemo(() => (CALENDAR_URL ? calendarURL(props) : ""), [props]);
  /* Portal to <body>: the page <main> is an isolated stacking context and the site footer
     paints above it, so a fixed overlay inside <main> would sit under the footer. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("noscroll");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("noscroll"); document.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  if (!mounted) return null;
  return createPortal(
    <div className="r90"><div className={"modal" + (open ? " on" : "")} role="dialog" aria-modal="true" aria-labelledby="modal-h" aria-hidden={!open}>
      <div className="backdrop" onClick={onClose} />
      <div className="dialog">
        <button ref={closeRef} className="x" onClick={onClose} aria-label="Close">&times;</button>
        <h2 id="modal-h">Let’s fix the leak in 90 days</h2>
        <div className="who">
          <img src={img("andres-reitsnik.webp")} alt={HOST_NAME} />
          <p className="lead">30 minutes with <b>{HOST_NAME}</b>, {HOST_TITLE}. We’ll review your current setup, validate the numbers from your scan, and confirm whether the 90-day test makes sense for your store.</p>
        </div>
        {scanned && (
          <div className="scanline2">
            <span>Your scan: <b>{store}</b></span><span>Score <b>{computeScore(answers)}/100</b></span><span>Estimated upside <b>{fmtK(computeLeak(answers))}/mo</b></span>
          </div>
        )}
        <div className="calwrap">
          {url ? (
            <iframe src={url} title="Booking calendar" loading="lazy" />
          ) : (
            <div className="ph">Booking calendar is being connected.<br />We have your scan and your email. <b>{HOST_NAME}</b> will send you a booking link.</div>
          )}
        </div>
        {url && <p className="fine" style={{ marginTop: 8 }}>Calendar not loading? <a href={url} target="_blank" rel="noopener noreferrer">Open it in a new tab &rarr;</a></p>}
        <p className="fine">No prep needed. No sales deck. We’ll work from the scan you already completed.</p>
      </div>
    </div></div>,
    document.body,
  );
}
