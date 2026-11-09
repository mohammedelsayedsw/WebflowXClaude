"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate, AnimatePresence } from "motion/react";
import { Inbox, Link2, ListChecks, Database } from "lucide-react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { H2, Rise, btnMain, btnSoft, go } from "@/sections/operalayer/kit/parts";
import { C, Window, AppButton, ease } from "@/sections/operalayer/kit/ui";
import { LayerField } from "@/sections/operalayer/kit/LayerField";
import { QUICK, FULL, STEPS, FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";

/* Copy on this page is Anton's, word for word (copy.ts). Nothing here adds sentences of its own. */

const PAD = "py-[clamp(64px,11vh,128px)]";
const ESELO = assetUrl("/operalayer/invoice-matching/eselo-mark.png");

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease },
});

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden">
      <LayerField />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(44rem 20rem at 50% 46%, rgba(5,7,15,0.66), rgba(5,7,15,0) 70%)" }}
      />
      <div className="wrap relative z-10 w-full flex flex-col items-center pt-28 pb-[14vh]">
        <h1 className="m-0">
          <motion.span
            {...enter(0.3)}
            className="block bg-clip-text text-transparent font-[family-name:var(--font-inter)] font-medium leading-[0.98] tracking-[-0.06em] px-[0.05em] pb-[0.08em] text-[40px] sm:text-[64px] md:text-[80px] lg:text-[clamp(72px,min(8vw,13vh),116px)]"
            style={{
              backgroundImage: "linear-gradient(180deg, #ffffff 10%, #e6e9ff 55%, #9aa6f5 100%)",
              filter: "drop-shadow(0 0 48px rgba(123,134,232,0.35))",
            }}
          >
            Catch invoice errors
          </motion.span>
          <motion.span
            {...enter(0.55)}
            className="block mt-2 text-[var(--sw-mint)] font-[family-name:var(--font-inter)] font-medium tracking-[-0.045em] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[clamp(52px,min(5.2vw,8.5vh),72px)] leading-[1.05]"
          >
            before you pay.
          </motion.span>
        </h1>
        <motion.p {...enter(0.8)} className="mt-7 max-w-[40rem] text-white/75 text-[17px] md:text-[19px] leading-[1.55]">
          OperaLayer connects your warehouse, accounting and ERP to check every invoice against what you ordered and received.
        </motion.p>
        <motion.div {...enter(1.05)} className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a href="#contact" onClick={go("contact")} className={btnMain}>
            Book a demo call
          </a>
          <a href="#example" onClick={go("example")} className={btnSoft}>
            See an invoice example
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Results strip ---------- */

function Count({ to, dec = 0 }: { to: number; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const run = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  /* The server HTML carries the real number (crawlers read it); the browser resets to 0 before paint and counts up on view. */
  const [v, setV] = useState(to);
  useLayoutEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setV(0);
  }, []);
  useEffect(() => {
    if (!run) return;
    const c = animate(0, to, { duration: reduce ? 0 : 1.4, ease, onUpdate: setV });
    return () => c.stop();
  }, [run, to, reduce]);
  return <span ref={ref}>{v.toFixed(dec)}</span>;
}

const RESULTS: { n: number; dec?: number; post: string; unit?: string; label: string }[] = [
  { n: 150, post: "+", label: "suppliers" },
  { n: 2, post: " hours", unit: "per person", label: "back for the team" },
  { n: 36, post: " seconds", label: "from upload to posting" },
  { n: 98.5, dec: 1, post: "%", label: "matching accuracy after two weeks" },
];

export function Results() {
  return (
    <section id="results" className="relative pb-[clamp(56px,9vh,112px)] scroll-mt-20">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {RESULTS.map((s, i) => (
            <Rise
              key={s.label}
              delay={i * 0.06}
              className={`py-8 pr-4 ${i % 2 ? "pl-5 border-l border-white/10" : ""} ${i > 1 ? "border-t lg:border-t-0 border-white/10" : ""} ${i > 0 ? "lg:pl-8 lg:border-l lg:border-white/10" : ""}`}
            >
              <div className="font-head font-bold text-[var(--sw-mint)] text-[32px] sm:text-[44px] lg:text-[clamp(36px,2.95vw,48px)] leading-none tracking-[-0.03em] tabular-nums">
                <span className="whitespace-nowrap">
                  <Count to={s.n} dec={s.dec} />
                  {s.post}
                </span>
                {s.unit && <span className="inline-block whitespace-nowrap ml-1.5 text-white/60 text-[14px] lg:text-[15px] font-semibold tracking-[-0.01em]">{s.unit}</span>}
              </div>
              <div className="mt-3 text-white/80 text-[15px] md:text-[16px] font-head font-semibold leading-snug">{s.label}</div>
            </Rise>
          ))}
        </div>
        <Rise delay={0.1} className="border-t border-white/10 pt-7 flex items-center gap-4">
          <img src={ESELO} alt="ESELO" className="h-9 w-9 object-contain brightness-0 invert opacity-90 shrink-0" />
          <div>
            <p className="font-head font-semibold text-white text-[17px] md:text-[20px] leading-snug">
              “Our employees smiling again. Two hours per person of ‘monkey work’ gone.”
            </p>
            <p className="mt-1 text-white/50 text-[14px]">Māris Renigers, E-business Manager, ESELO</p>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ---------- The invoice, checked in the app ---------- */

/** Which cell disagrees in each example: [row, column] in Record / Item / Quantity / Unit price. */
const FLAG: [number, number][] = [
  [2, 3],
  [1, 2],
  [2, 1],
];
const STEP_MS = [500, 1300, 1400, 3800];
const TOTAL = STEP_MS.reduce((a, b) => a + b, 0);

function useMatchPlayer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      const t = window.setTimeout(() => {
        setPhase(3);
        setAuto(false);
      }, 0);
      return () => clearTimeout(t);
    }
    if (phase < 3) {
      const t = window.setTimeout(() => setPhase((p) => p + 1), STEP_MS[phase]);
      return () => clearTimeout(t);
    }
    if (auto) {
      const t = window.setTimeout(() => {
        setI((k) => (k + 1) % 3);
        setPhase(0);
      }, STEP_MS[3]);
      return () => clearTimeout(t);
    }
  }, [inView, reduce, phase, auto]);

  const pick = (k: number) => {
    setAuto(false);
    setI(k);
    setPhase(reduce ? 3 : 0);
  };
  return { ref, i, phase, auto: auto && inView, pick };
}

const box = { containerType: "inline-size" as const, fontSize: "clamp(11px,1.85cqw,15px)" };

function ReviewWindow({ i, phase }: { i: number; phase: number }) {
  const x = FULL[i];
  const [fr, fc] = FLAG[i];
  const flagged = phase >= 2;
  return (
    <div style={box}>
      <Window title="app.operalayer / invoice review">
        <div className="flex flex-wrap items-center gap-x-[1.2em] gap-y-1 px-[1.4em] py-[0.9em] border-b" style={{ borderColor: C.line }}>
          <span className="font-semibold" style={{ fontSize: "1.15em" }}>
            Supplier invoice INV-2846
          </span>
          <span className="ml-auto" style={{ color: C.faint, fontSize: "0.9em" }}>
            Example records · INV-2846
          </span>
        </div>

        <div>
          {/* The three records side by side */}
          <div className="px-[1.4em] py-[1.3em] min-w-0">
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease }}>
                <div style={{ color: C.faint, fontSize: "0.88em" }}>{x.line}</div>
                <div className="mt-[0.2em] font-semibold tracking-[-0.01em]" style={{ fontSize: "1.45em" }}>
                  {x.title}
                </div>

                <div className="mt-[1em] rounded-[2px] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${C.line}` }}>
                  <div
                    className="hidden sm:grid grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_minmax(0,0.9fr)] gap-x-[0.8em] px-[1em] py-[0.55em]"
                    style={{ color: C.faint, fontSize: "0.85em", background: "#080b18" }}
                  >
                    {["Record", "Item", "Quantity", "Unit price"].map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </div>
                  {x.rows.map((r, k) => {
                    const shown = phase >= 1;
                    return (
                      <motion.div
                        key={r[0]}
                        className="grid grid-cols-3 sm:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_minmax(0,0.9fr)] gap-x-[0.8em] gap-y-[0.3em] px-[1em] py-[0.75em] border-t items-center"
                        style={{ borderColor: C.line }}
                        initial={false}
                        animate={{ opacity: shown ? 1 : 0.2 }}
                        transition={{ duration: 0.35, delay: shown ? k * 0.28 : 0 }}
                      >
                        {r.map((c, n) => {
                          const bad = flagged && k === fr && n === fc;
                          const agreed = flagged && k !== fr && n === fc && !(i === 2 && k === 1);
                          return (
                            <span
                              key={n}
                              className={`rounded-[2px] tabular-nums leading-[1.35] ${n === 0 ? "col-span-3 sm:col-span-1 font-semibold" : ""}`}
                              style={{
                                color: bad ? C.orange : agreed ? C.mint : n === 0 ? C.text : C.dim,
                                background: bad ? "rgba(255,90,49,0.12)" : "transparent",
                                boxShadow: bad ? "inset 0 0 0 1px rgba(255,90,49,0.45)" : "none",
                                padding: bad ? "0.1em 0.4em" : 0,
                                margin: bad ? "0 -0.4em" : 0,
                                transition: "color .35s, background .35s, box-shadow .35s",
                              }}
                            >
                              {c}
                            </span>
                          );
                        })}
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  className="mt-[1.1em] grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[minmax(0,1fr)_auto] gap-[1em] items-end"
                  initial={false}
                  animate={{ opacity: flagged ? 1 : 0, y: flagged ? 0 : 6 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <div>
                    <div className="font-semibold" style={{ fontSize: "0.92em" }}>
                      Why it matters
                    </div>
                    <p className="mt-[0.3em] leading-[1.5]" style={{ color: C.dim, fontSize: "0.92em" }}>
                      {x.why}
                    </p>
                  </div>
                  <AppButton state={phase >= 3 ? 2 : 1} idle={x.hold} busy={x.hold} done="On hold" />
                </motion.div>
                <div className="mt-[0.7em] min-h-[1.5em]" style={{ color: C.mint, fontSize: "0.88em" }}>
                  {phase >= 3 ? x.result : ""}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Window>
    </div>
  );
}

export function Example() {
  const { ref, i, phase, auto, pick } = useMatchPlayer();
  return (
    <section id="example" className={`relative ${PAD} scroll-mt-16 overflow-hidden`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[70%]"
        style={{ background: "radial-gradient(760px 420px at 70% 50%, rgba(63,74,175,0.26), transparent 70%)" }}
      />
      <div className="wrap relative" ref={ref}>
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <Rise className="lg:col-span-4">
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[clamp(32px,min(3.1vw,6vh),46px)] leading-[1.05] tracking-[-0.025em] text-balance mb-8 lg:mb-[clamp(20px,4vh,40px)]">
              Follow one invoice with three different problems.
            </h2>
            <div role="tablist" aria-label="Invoice examples" className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-0 lg:border-t lg:border-white/10">
              {QUICK.map((q, k) => {
                const on = k === i;
                return (
                  <button
                    key={q.tab}
                    role="tab"
                    aria-selected={on}
                    onClick={() => pick(k)}
                    className={`relative text-left rounded-[2px] lg:rounded-none border lg:border-0 lg:border-b px-3 py-3 lg:px-0 lg:py-[clamp(12px,2.4vh,24px)] transition ${
                      on ? "border-white/40 lg:border-white/10" : "border-white/10"
                    }`}
                  >
                    <div className={`text-[13px] lg:text-[14px] font-head font-semibold ${on ? "text-[var(--sw-mint)]" : "text-white/45"}`}>{FULL[k].tab}</div>
                    <div
                      className={`hidden lg:block mt-1.5 font-head font-bold text-[20px] xl:text-[clamp(20px,min(1.8vw,3.4vh),26px)] leading-[1.15] tracking-[-0.015em] transition-colors ${
                        on ? "text-white" : "text-white/40"
                      }`}
                    >
                      {q.title}
                    </div>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease }}
                          className="hidden lg:block overflow-hidden text-white/60 text-[16px] leading-[1.55]"
                        >
                          <span className="block pt-3">{q.note}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {on && auto && (
                      <span
                        key={`p${i}`}
                        aria-hidden
                        className="absolute left-0 bottom-[-1px] h-[2px] bg-[var(--sw-mint)]"
                        style={{ animation: `olProgress ${TOTAL}ms linear forwards` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="lg:hidden mt-5">
              <div className="font-head font-bold text-white text-[22px] leading-[1.2]">{QUICK[i].title}</div>
              <p className="mt-2 text-white/60 text-[15px] leading-[1.55]">{QUICK[i].note}</p>
            </div>
          </Rise>
          <Rise delay={0.1} className="lg:col-span-8">
            <ReviewWindow i={i} phase={phase} />
          </Rise>
        </div>
      </div>
      <style>{`@keyframes olProgress { from { width: 0 } to { width: 100% } }`}</style>
    </section>
  );
}

/* ---------- How it works ---------- */

const ICONS = [Inbox, Link2, ListChecks, Database];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [k, setK] = useState(1);
  useEffect(() => {
    if (!inView || reduce) return;
    const t = window.setInterval(() => setK((v) => (v % 4) + 1), 1800);
    return () => clearInterval(t);
  }, [inView, reduce]);
  const lit = reduce ? 4 : k;
  return (
    <section id="how" className={`relative ${PAD} scroll-mt-16`}>
      <div className="wrap" ref={ref}>
        <Rise>
          <h2 className={`${H2} max-w-[20ch]`}>From the supplier inbox to an invoice you can approve.</h2>
        </Rise>
        {/* Phones and tablets: the four icons in a row, the active step's sentence below */}
        <div className="lg:hidden mt-10">
          <div className="relative flex justify-between">
            <div aria-hidden className="absolute left-6 right-6 top-6 h-px bg-white/[0.12]" />
            <motion.div
              aria-hidden
              className="absolute left-6 right-6 top-6 h-px bg-[var(--sw-mint)] origin-left"
              initial={false}
              animate={{ scaleX: Math.max(0, Math.min(lit, 4) - 1) / 3 }}
              transition={{ duration: 0.9, ease }}
            />
            {STEPS.map((t, n) => {
              const Icon = ICONS[n];
              const on = lit >= n + 1 || (lit === 0 && n === 0);
              return (
                <button
                  key={t}
                  type="button"
                  aria-label={`Step ${n + 1}`}
                  onClick={() => setK(n + 1)}
                  className="relative z-10 h-12 w-12 rounded-[2px] flex items-center justify-center bg-[#05070f] transition-shadow duration-500"
                  style={{ boxShadow: on ? "inset 0 0 0 1px rgba(110,247,110,0.9), 0 0 28px -6px rgba(110,247,110,0.55)" : "inset 0 0 0 1px rgba(255,255,255,0.16)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: on ? C.mint : "rgba(255,255,255,0.55)" }} strokeWidth={1.6} />
                </button>
              );
            })}
          </div>
          <div className="mt-7 min-h-[7.5em]">
            <AnimatePresence mode="wait">
              <motion.div key={Math.max(1, lit)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}>
                <div className="font-head font-bold text-[var(--sw-mint)] text-[15px]">{Math.max(1, lit)}</div>
                <p className="mt-2 text-white/90 text-[17px] leading-[1.55]">{STEPS[Math.max(1, lit) - 1]}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative mt-14 md:mt-20 hidden lg:grid grid-cols-4 gap-x-8 gap-y-12">
          <div aria-hidden className="hidden lg:block absolute left-7 right-7 top-7 h-px bg-white/[0.12]" />
          <motion.div
            aria-hidden
            className="hidden lg:block absolute left-7 right-7 top-7 h-px bg-[var(--sw-mint)] origin-left"
            initial={false}
            animate={{ scaleX: Math.max(0, Math.min(lit, 4) - 1) / 3 }}
            transition={{ duration: 0.9, ease }}
          />
          {STEPS.map((t, n) => {
            const Icon = ICONS[n];
            const on = lit >= n + 1 || (lit === 0 && n === 0);
            return (
              <Rise key={t} delay={n * 0.07} className="relative">
                <motion.div
                  className="relative z-10 h-14 w-14 rounded-[2px] flex items-center justify-center bg-[#05070f]"
                  initial={false}
                  animate={{
                    boxShadow: on ? "inset 0 0 0 1px rgba(110,247,110,0.9), 0 0 32px -6px rgba(110,247,110,0.55)" : "inset 0 0 0 1px rgba(255,255,255,0.16)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-6 w-6 transition-colors duration-500" style={{ color: on ? C.mint : "rgba(255,255,255,0.55)" }} strokeWidth={1.6} />
                </motion.div>
                <div className="mt-6 font-head font-bold text-white/35 text-[15px]">{n + 1}</div>
                <p className={`mt-2 text-[16px] md:text-[17px] leading-[1.55] transition-colors duration-500 ${on ? "text-white/90" : "text-white/55"}`}>{t}</p>
              </Rise>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Quote ---------- */

export function Quote() {
  return (
    <section id="customer-case" className={`relative ${PAD}`}>
      <div className="wrap">
        <Rise className="max-w-[60rem]">
          <blockquote>
            <p className="font-head font-semibold text-white text-[28px] md:text-[42px] lg:text-[50px] leading-[1.14] tracking-[-0.02em]">
              <span className="text-[var(--sw-mint)]">“From demo to live in weeks.</span> Fastest implementation we have experienced so far for such a complex system and
              functionality.”
            </p>
            <footer className="mt-9 flex items-center gap-4">
              <img src={ESELO} alt="ESELO" className="h-10 w-10 object-contain brightness-0 invert opacity-90" />
              <span className="text-white/60 text-[15px] md:text-[16px]">Māris Renigers, E-business Manager, ESELO</span>
            </footer>
          </blockquote>
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Calculator ---------- */

const DEFAULTS = { volume: 2000, minutes: 4, rate: 25, credits: 8, amount: 65 };
type Key = keyof typeof DEFAULTS;
const euro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const count = new Intl.NumberFormat("en-IE", { maximumFractionDigits: 1 });

const SLIDERS: { group: string; items: { k: Key; label: string; min: number; max: number; step: number }[] }[] = [
  {
    group: "Time back for your team",
    items: [
      { k: "volume", label: "Invoices per month", min: 0, max: 10000, step: 50 },
      { k: "minutes", label: "Minutes saved per invoice", min: 0, max: 15, step: 0.5 },
      { k: "rate", label: "Staff cost per hour (€)", min: 10, max: 80, step: 1 },
    ],
  },
  {
    group: "Supplier bills corrected",
    items: [
      { k: "credits", label: "Confirmed corrections per month", min: 0, max: 50, step: 1 },
      { k: "amount", label: "Average accepted reduction (€)", min: 0, max: 500, step: 5 },
    ],
  },
];

const range =
  "w-full h-5 cursor-pointer appearance-none bg-transparent outline-none " +
  "[&::-webkit-slider-runnable-track]:h-[2px] [&::-webkit-slider-runnable-track]:[background:linear-gradient(90deg,#6ef76e_var(--p),rgba(255,255,255,0.14)_var(--p))] " +
  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-[7px] [&::-webkit-slider-thumb]:rounded-[2px] [&::-webkit-slider-thumb]:bg-[var(--sw-mint)] [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(110,247,110,0.15)] " +
  "[&::-moz-range-track]:h-[2px] [&::-moz-range-track]:bg-white/15 [&::-moz-range-progress]:h-[2px] [&::-moz-range-progress]:bg-[var(--sw-mint)] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-[2px] [&::-moz-range-thumb]:bg-[var(--sw-mint)]";

export function Calculator() {
  const [v, setV] = useState(DEFAULTS);
  const hours = ((v.volume * v.minutes) / 60) * 12;
  const capacity = hours * v.rate;
  const reductions = v.credits * v.amount * 12;
  const isDefault = (Object.keys(v) as Key[]).every((k) => v[k] === DEFAULTS[k]);
  return (
    <section id="calculator" className={`relative ${PAD} scroll-mt-16 overflow-hidden`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(700px 420px at 80% 55%, rgba(63,74,175,0.22), transparent 70%)" }}
      />
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-x-14 gap-y-10 lg:gap-y-[clamp(24px,4.4vh,40px)]">
          <Rise className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[clamp(34px,min(3.4vw,6.6vh),50px)] leading-[1.05] tracking-[-0.025em] text-balance">What is invoice checking costing you?</h2>
            <p className="mt-4 max-w-[40rem] text-white/65 text-[17px] md:text-[18px] leading-[1.55]">Use your own volumes and costs to explore a year.</p>
          </Rise>
          <Rise delay={0.05} className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 self-center grid gap-[clamp(20px,4vh,36px)]">
            {SLIDERS.map((g) => (
              <div key={g.group}>
                <div className="font-head font-semibold text-white text-[17px] md:text-[18px]">{g.group}</div>
                <div className="mt-3 grid gap-[clamp(10px,2.2vh,20px)]">
                  {g.items.map((s) => {
                    const p = ((v[s.k] - s.min) / (s.max - s.min)) * 100;
                    return (
                      <label key={s.k} className="block">
                        <span className="flex items-baseline justify-between gap-4 text-[15px]">
                          <span className="text-white/65">{s.label}</span>
                          <span className="font-head font-semibold text-white tabular-nums">{count.format(v[s.k])}</span>
                        </span>
                        <input
                          type="range"
                          min={s.min}
                          max={s.max}
                          step={s.step}
                          value={v[s.k]}
                          onChange={(e) => setV((o) => ({ ...o, [s.k]: Number(e.target.value) }))}
                          className={`mt-2 ${range}`}
                          style={{ ["--p" as string]: `${p}%` } as React.CSSProperties}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 text-[14px] min-h-[21px]">
              <span className="text-white/45">{isDefault ? "Example inputs" : "Your inputs"}</span>
              {!isDefault && (
                <button type="button" onClick={() => setV(DEFAULTS)} className="font-head font-semibold text-white/80 underline underline-offset-4 hover:text-[var(--sw-mint)] transition">
                  Reset example
                </button>
              )}
            </div>
          </Rise>
          <Rise delay={0.1} className="lg:col-span-6 lg:col-start-1 lg:row-start-2">
            <div
              className="rounded-[4px] p-7 md:p-10 lg:p-[clamp(24px,4.4vh,40px)]"
              style={{ background: C.panel, boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 50px 120px -40px rgba(0,0,0,0.9), 0 0 80px -30px rgba(63,74,175,0.45)" }}
            >
              <div className="text-white/60 text-[15px] md:text-[16px]">Gross annual value in this scenario</div>
              <div className="mt-3 font-head font-bold text-[var(--sw-mint)] leading-none tracking-[-0.035em] tabular-nums text-[52px] sm:text-[72px] lg:text-[clamp(52px,min(5.2vw,10vh),88px)]">
                {euro.format(capacity + reductions)}
              </div>
              <div className="mt-[clamp(18px,3.4vh,32px)] grid grid-cols-2 gap-6 border-t border-white/10 pt-[clamp(14px,2.6vh,24px)]">
                <div>
                  <div className="font-head font-bold text-white text-[22px] md:text-[30px] tabular-nums leading-none">{euro.format(capacity)}</div>
                  <div className="mt-2 text-white/55 text-[14px] leading-snug">
                    value of <b className="text-white font-semibold">{count.format(hours)}</b> hours per year
                  </div>
                </div>
                <div>
                  <div className="font-head font-bold text-white text-[22px] md:text-[30px] tabular-nums leading-none">{euro.format(reductions)}</div>
                  <div className="mt-2 text-white/55 text-[14px] leading-snug">in confirmed reductions per year</div>
                </div>
              </div>
              <p className="mt-[clamp(14px,2.8vh,28px)] text-white/40 text-[13px] leading-[1.6]">
                Time released becomes a cash saving when it reduces overtime, hiring or other spending. Deduct licence, setup and support costs when you estimate the return.
              </p>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  );
}

/* ---------- Questions ---------- */

export function Questions() {
  const [g, setG] = useState(0);
  return (
    <section id="faq" className={`relative ${PAD} scroll-mt-16`}>
      <div className="wrap grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-16">
        <Rise className="lg:col-span-4">
          <h2 className={`${H2} max-w-[12ch]`}>Fair questions before you start</h2>
        </Rise>
        <Rise delay={0.08} className="lg:col-span-8">
          <div role="tablist" aria-label="Question groups" className="flex flex-wrap gap-2 mb-6">
            {FAQ_GROUPS.map((x, k) => (
              <button
                key={x.group}
                role="tab"
                aria-selected={k === g}
                onClick={() => setG(k)}
                className={`h-9 px-4 rounded-[2px] text-[14px] font-head font-semibold transition ${
                  k === g ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/65 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] hover:text-white"
                }`}
              >
                {x.group}
              </button>
            ))}
          </div>
          <div className="border-t border-white/10">
            {FAQ_GROUPS[g].items.map((x) => (
              <details key={x.q} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 text-white text-[18px] md:text-[20px] font-semibold font-head leading-snug [&::-webkit-details-marker]:hidden">
                  {x.q}
                  <span aria-hidden className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-[var(--sw-mint)]" />
                    <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-[var(--sw-mint)] transition-transform group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="pb-6 md:pb-7 pr-2 md:pr-10 text-white/65 text-[16px] md:text-[17px] leading-[1.65] max-w-[44rem]">{x.a}</p>
              </details>
            ))}
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-4">
      <LayerField line={false} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(5,7,15,0.2) 0%, rgba(5,7,15,0.7) 50%, rgba(5,7,15,0.95) 100%)" }}
      />
      <div className="wrap relative z-10 w-full py-[clamp(56px,10vh,128px)]">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Rise className="text-center lg:text-left lg:col-span-6 max-w-[40rem] mx-auto lg:mx-0">
          <h2
            className="font-[family-name:var(--font-inter)] font-medium text-white text-[40px] sm:text-[56px] lg:text-[clamp(48px,min(4.6vw,9vh),72px)] leading-[1] tracking-[-0.05em]"
            style={{ textShadow: "0 0 60px rgba(123,134,232,0.3)" }}
          >
            Bring the invoice that made three people stop working.
          </h2>
          <p className="mt-6 text-white/75 text-[17px] md:text-[19px] leading-[1.55] max-w-[38rem] mx-auto lg:mx-0">
            See which line OperaLayer would flag, the evidence the reviewer would see, and how an accepted invoice gets back into your ERP.
          </p>
        </Rise>
        <Rise delay={0.1} className="lg:col-span-6 w-full max-w-[40rem] mx-auto text-left">
          <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" submitText="Book a demo call" />
        </Rise>
        </div>
      </div>
    </section>
  );
}
