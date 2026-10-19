"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import "./aeo-lp.css";
import type { FunnelCfg, QuizData } from "./types";
import { Booking } from "./Booking";
import { Quiz } from "./Quiz";
import { initTracking, track, trackLanding, watchExit, watchFolds, watchOutbound } from "./track";
import { Arrow, img, useReveal } from "./ui";

type Ctx = { cfg: FunnelCfg; openQuiz: (where: string) => void; openBook: (where: string) => void; openGuide: (i: number) => void };
const AeoCtx = createContext<Ctx | null>(null);
export const useAeo = () => {
  const c = useContext(AeoCtx);
  if (!c) throw new Error("useAeo outside AeoShell");
  return c;
};

const CERT_BASE = "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/";
const CERTS: [string, string, string?][] = [
  ["69b159f45ee7b675bf186570_ISO%209001.svg", "ISO 9001"],
  ["69b159f4f74db6f5d5c588f0_ISO%2027001.svg", "ISO 27001"],
  ["69b159f4beec80dfc273e1f0_ISO%2027017.svg", "ISO 27017"],
  ["69b159f4510babc0e1b3d84a_PCI%20DSS.svg", "PCI DSS", "pci"],
];

function Header({ label, onCta }: { label: string; onCta: () => void }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={"hd" + (solid ? " solid" : "")}>
      <div className="wrap hd-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hd-logo" src={img("/shared/logos/scandiweb.svg")} alt="scandiweb" />
        <button type="button" className="btn" onClick={onCta} tabIndex={solid ? 0 : -1}>{label} <Arrow /></button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("/shared/logos/scandiweb.svg")} alt="scandiweb" />
            <p>scandiweb is a full-service eCommerce agency providing expert development and digital marketing solutions.</p>
          </div>
          <div className="ft-certs" aria-label="Certifications">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {CERTS.map(([f, alt, cls]) => <img key={f} className={cls} src={CERT_BASE + f} alt={alt} loading="lazy" />)}
          </div>
        </div>
        <div className="ft-bot">
          <span>&copy; 2026 scandiweb. All Rights Reserved.</span>
          <span>
            <a href="https://scandiweb.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://scandiweb.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="https://scandiweb.com/cookie-policy" target="_blank" rel="noopener noreferrer">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function GuideModal({ cfg, i, onClose, onCta }: { cfg: FunnelCfg; i: number | null; onClose: () => void; onCta: () => void }) {
  const g = i === null ? null : cfg.guides[i];
  return (
    <div className={"ov" + (g ? " on" : "")} aria-hidden={!g}>
      <div className="mdl" role="dialog" aria-modal="true" aria-label={g?.t || "Guide"}>
        <button type="button" className="x" aria-label="Close" onClick={onClose}>&#x2715;</button>
        {g && (
          <div className="gpop">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="im"><img src={img(g.img)} alt="" /></div>
            <div className="mdl-in">
              <div className="k">{g.k}</div>
              <h3>{g.t}</h3>
              {g.stat ? <div className="stat">{g.stat}</div> : null}
              {g.body.map((p) => <p key={p}>{p}</p>)}
              <button type="button" className="btn block" onClick={onCta}>{cfg.cta} <Arrow /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function AeoShell({ cfg, children }: { cfg: FunnelCfg; children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [quiz, setQuiz] = useState(false);
  const [book, setBook] = useState(false);
  const [guide, setGuide] = useState<number | null>(null);
  const [answers, setAnswers] = useState<QuizData>({});
  const stepRef = useRef("lp");

  /* Set the funnel before any child effect can fire an event (child effects run first). */
  initTracking(cfg.fn);
  useReveal(root);

  useEffect(() => {
    trackLanding();
    const a = watchFolds(root.current);
    const b = watchOutbound();
    const c = watchExit(() => stepRef.current);
    return () => { a(); b(); c(); };
  }, [cfg.fn]);

  const anyOpen = quiz || book || guide !== null;
  useEffect(() => {
    document.body.classList.toggle("aeolp-lock", anyOpen);
    return () => document.body.classList.remove("aeolp-lock");
  }, [anyOpen]);

  const openQuiz = useCallback((where: string) => { setGuide(null); setBook(false); setQuiz(true); track("start", { where }); }, []);
  const openBook = useCallback((where: string) => { setGuide(null); setQuiz(false); setBook(true); stepRef.current = "book"; track("book_open", { where }); }, []);
  const openGuide = useCallback((i: number) => { setGuide(i); track("guide_open", { i }); }, []);
  const closeQuiz = useCallback(() => { setQuiz(false); track("quiz_close", { step: stepRef.current }); }, []);
  const closeBook = useCallback(() => { setBook(false); track("book_close"); }, []);

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setGuide(null); if (quiz) closeQuiz(); if (book) closeBook(); } };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [quiz, book, closeQuiz, closeBook]);

  return (
    <AeoCtx.Provider value={{ cfg, openQuiz, openBook, openGuide }}>
      <div className="aeolp" ref={root}>
        <Header label={cfg.headerCta} onCta={() => openQuiz("header")} />
        <main>{children}</main>
        <Footer />
        <div className="mcta"><button type="button" className="btn block" onClick={() => openQuiz("mobile-bar")}>{cfg.cta} <Arrow /></button></div>
        <GuideModal cfg={cfg} i={guide} onClose={() => setGuide(null)} onCta={() => openQuiz("guide")} />
        <Quiz cfg={cfg} open={quiz} onClose={closeQuiz} onStep={(n) => { stepRef.current = n; }} onSent={setAnswers} onBook={() => openBook("quiz-done")} />
        <Booking cfg={cfg} open={book} onClose={closeBook} data={answers} />
      </div>
    </AeoCtx.Provider>
  );
}
