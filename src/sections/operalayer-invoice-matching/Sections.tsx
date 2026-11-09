"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate, AnimatePresence } from "motion/react";
import {
  Inbox,
  Link2,
  ListChecks,
  Database,
  ShoppingCart,
  Package,
  Receipt,
  Landmark,
  Workflow,
  Server,
  Users,
  Check,
  FileText,
  Search,
  Boxes,
  Scale,
  Layers,
  ArrowRight,
} from "lucide-react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { Rise, btnMain, go } from "@/sections/operalayer/kit/parts";
import { C, Window, ease } from "@/sections/operalayer/kit/ui";
import {
  QUICK,
  PROBLEMS,
  FULL,
  STATS,
  STEPS,
  ROLES,
  FIT,
  START,
  HOOD,
  FAQ_GROUPS,
} from "@/sections/operalayer-invoice-matching/copy";

/* All visible copy is Anton's, word for word (copy.ts and the strings below). */

const ESELO = assetUrl("/operalayer/invoice-matching/eselo-mark.png");
const INSPECT = "ol-im-inspect";

const SECTION = "relative overflow-clip py-[clamp(80px,12vh,136px)] border-t border-white/[0.06]";
const H2 = "font-head font-bold text-white text-[34px] md:text-[46px] lg:text-[54px] leading-[1.05] tracking-[-0.028em] text-balance";
const LEAD = "text-white/65 text-[17px] md:text-[19px] leading-[1.6]";
const CARD = "rounded-[4px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))]";
const SURFACE = "#0a0d1c";

/* ---------- Background pieces (no curtain) ---------- */

function Grid({ at = "50% 0%", size = "70% 60%" }: { at?: string; size?: string }) {
  const mask = `radial-gradient(ellipse ${size} at ${at}, #000 25%, transparent 75%)`;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

function Glow({ at = "50% 50%", size = "56rem 34rem", color = "rgba(63,74,175,0.28)" }: { at?: string; size?: string; color?: string }) {
  return <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(${size} at ${at}, ${color}, transparent 70%)` }} />;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="mb-5 font-head font-semibold text-[15px] md:text-[16px] text-[var(--sw-mint)]">{children}</div>;
}

function PlusMinus() {
  return (
    <span aria-hidden className="relative h-4 w-4 shrink-0">
      <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-[var(--sw-mint)]" />
      <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-[var(--sw-mint)] transition-transform duration-200 group-open:scale-y-0" />
    </span>
  );
}

function onTabKeys(e: React.KeyboardEvent, i: number, n: number, set: (k: number) => void, group: string) {
  const order: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i + n - 1) % n, Home: 0, End: n - 1 };
  if (!(e.key in order)) return;
  e.preventDefault();
  set(order[e.key]);
  document.getElementById(`${group}-tab-${order[e.key]}`)?.focus();
}

/* ============================================================
   1. Hero: copy on the left, the example invoice on the right
   ============================================================ */

function HeroInvoice() {
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (touched || !inView || reduce) return;
    const t = window.setInterval(() => setI((k) => (k + 1) % QUICK.length), 5200);
    return () => clearInterval(t);
  }, [touched, inView, reduce]);
  const pick = (k: number) => {
    setTouched(true);
    setI(k);
  };
  const s = QUICK[i];
  const inspect = (e: React.MouseEvent) => {
    window.dispatchEvent(new CustomEvent(INSPECT, { detail: i }));
    go("example")(e);
  };
  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute -inset-10 rounded-[24px] blur-3xl opacity-70" style={{ background: "radial-gradient(closest-side, rgba(63,74,175,0.45), transparent)" }} />
      <div className="relative" style={{ fontSize: 15 }}>
        <Window title="app.operalayer / invoices">
          <div className="p-4 md:p-5 lg:p-[clamp(14px,2.2vh,20px)]">
            <div className="flex items-center justify-between gap-4 text-[13px] md:text-[14px]">
              <span className="font-head font-semibold text-white">Example invoice</span>
              <span className="text-white/45 tabular-nums">PO-1048 / INV-2846</span>
            </div>
            <div role="tablist" aria-label="Invoice quick examples" className="mt-3 lg:mt-[clamp(8px,1.6vh,14px)] grid grid-cols-3 rounded-[2px] p-1 bg-black/30 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
              {QUICK.map((q, k) => (
                <button
                  key={q.tab}
                  id={`quick-tab-${k}`}
                  role="tab"
                  aria-selected={k === i}
                  aria-controls="quick-panel"
                  tabIndex={k === i ? 0 : -1}
                  onClick={() => pick(k)}
                  onKeyDown={(e) => onTabKeys(e, k, QUICK.length, pick, "quick")}
                  className={`relative h-9 lg:h-[clamp(32px,4.6vh,38px)] rounded-[2px] font-head font-semibold text-[14px] transition-colors ${k === i ? "text-[var(--sw-black)]" : "text-white/60 hover:text-white"}`}
                >
                  {k === i && <motion.span layoutId="quickTab" className="absolute inset-0 rounded-[2px] bg-[var(--sw-beige)]" transition={{ duration: 0.35, ease }} />}
                  <span className="relative">{q.tab}</span>
                </button>
              ))}
            </div>

            {/* The supplier's paper */}
            <div id="quick-panel" role="tabpanel" aria-labelledby={`quick-tab-${i}`} className="relative mt-3 lg:mt-[clamp(8px,1.6vh,14px)]">
              <div className="relative rounded-[2px] bg-[var(--sw-beige)] text-[var(--sw-black)] p-5 md:p-6 lg:p-[clamp(14px,2.6vh,24px)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between text-[11px] tracking-[0.08em] text-[var(--sw-black)]/50 pb-3 border-b border-dashed border-[var(--sw-black)]/20">
                  <span>SUPPLIER INVOICE</span>
                  <span className="tabular-nums">INV-2846</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3, ease }}>
                    <div className="mt-4 lg:mt-[clamp(8px,1.6vh,16px)] text-[13px] text-[var(--sw-blue)] font-head font-semibold">{s.product}</div>
                    <div className="mt-1 font-head font-bold text-[24px] md:text-[27px] lg:text-[clamp(20px,3.2vh,27px)] leading-[1.1] tracking-[-0.02em]">{s.title}</div>
                    <div className="mt-4 lg:mt-[clamp(8px,1.6vh,16px)] grid grid-cols-2 rounded-[2px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(16,19,44,0.12)]">
                      {s.pair.map((p, k) => (
                        <div key={p.k} className={`px-4 py-3 lg:py-[clamp(6px,1.2vh,12px)] ${k ? "bg-[rgba(224,79,79,0.09)]" : "bg-white"}`}>
                          <div className="text-[11px] tracking-[0.06em] text-[var(--sw-black)]/50">{p.k.toUpperCase()}</div>
                          <div className={`mt-0.5 font-head font-semibold text-[19px] tabular-nums ${k ? "text-[var(--sw-red)]" : ""}`}>{p.v}</div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 lg:mt-[clamp(8px,1.4vh,14px)] text-[14.5px] leading-[1.5] text-[var(--sw-black)]/75">{s.note}</p>
                    <div className="mt-3 pt-3 lg:mt-[clamp(8px,1.4vh,14px)] lg:pt-[clamp(8px,1.4vh,14px)] border-t border-dashed border-[var(--sw-black)]/20">
                      <div className="text-[11px] tracking-[0.08em] font-semibold text-[var(--sw-black)]/55">SUGGESTED ACTION</div>
                      <p className="mt-1 text-[14.5px] leading-[1.5] text-[var(--sw-black)]/80">{s.action}</p>
                    </div>
                    <a href="#example" onClick={inspect} className="mt-3 lg:mt-[clamp(8px,1.4vh,14px)] inline-flex items-center gap-1.5 font-head font-semibold text-[14px] text-[var(--sw-blue)] hover:gap-2.5 transition-all">
                      Inspect this line <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <Grid at="72% 42%" size="62% 70%" />
      <Glow at="78% 42%" size="50rem 36rem" color="rgba(63,74,175,0.3)" />
      <Glow at="0% 100%" size="40rem 24rem" color="rgba(110,247,110,0.05)" />
      <div className="wrap relative w-full flex-1 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-12 lg:gap-10 xl:gap-16 pt-[104px] pb-12 lg:pt-[clamp(92px,13vh,140px)] lg:pb-[clamp(20px,4vh,56px)]">
        <div>
          <Rise>
            <Eyebrow>Invoice matching</Eyebrow>
            <h1 className="font-head font-bold text-white text-[44px] sm:text-[60px] lg:text-[clamp(46px,min(4.1vw,8.4vh),62px)] leading-[1.03] tracking-[-0.035em]">
              Catch invoice errors
              <span className="block text-[var(--sw-mint)]">before you pay.</span>
            </h1>
          </Rise>
          <Rise delay={0.08}>
            <p className="mt-6 lg:mt-[clamp(14px,2.6vh,26px)] max-w-[36rem] text-white/70 text-[17px] md:text-[19px] lg:text-[clamp(15px,2vh,19px)] leading-[1.6]">
              OperaLayer connects your warehouse, accounting and ERP to check every invoice against what you ordered and received. Wrong prices, missing quantities and
              different products reach your team before the bill is approved.
            </p>
            <p className="mt-3 text-white/45 text-[15px] leading-[1.5]">For wholesalers, distributors and retailers buying stock from many suppliers.</p>
            <p className="mt-5 lg:mt-[clamp(10px,2vh,20px)] font-head font-semibold text-white text-[18px] md:text-[20px] lg:text-[clamp(17px,2.4vh,20px)]">
              Give your team its mornings back.
            </p>
          </Rise>
          <Rise delay={0.16} className="mt-7 lg:mt-[clamp(14px,3vh,30px)] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
            <a href="#demo" onClick={go("demo")} className={`${btnMain} self-start`}>
              Book a demo call
            </a>
            <a href="#example" onClick={go("example")} className="font-head font-semibold text-[17px] text-white/75 hover:text-[var(--sw-mint)] transition self-start sm:self-auto">
              See an invoice example ↓
            </a>
          </Rise>
        </div>
        <Rise delay={0.2} className="w-full max-w-[33rem] lg:justify-self-end">
          <HeroInvoice />
        </Rise>
      </div>

      <div className="wrap relative w-full">
        <div className="border-t border-white/10 py-5 md:py-6 lg:py-[clamp(12px,2.4vh,24px)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-10">
          <div className="flex items-center gap-4">
            <img src={ESELO} alt="ESELO" className="h-8 w-8 object-contain brightness-0 invert opacity-90 shrink-0" />
            <div>
              <p className="font-head font-semibold text-white text-[16px] md:text-[18px] lg:text-[clamp(14px,2vh,18px)] leading-snug">
                “Our employees smiling again. Two hours per person of ‘monkey work’ gone.”
              </p>
              <p className="mt-0.5 text-white/45 text-[13px] md:text-[14px]">Māris Renigers, E-business Manager, ESELO</p>
            </div>
          </div>
          <a href="#customer-case" onClick={go("customer-case")} className="font-head font-semibold text-[15px] md:text-[16px] text-white/80 hover:text-[var(--sw-mint)] transition whitespace-nowrap self-start md:self-auto">
            Read one customer’s story →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. The problem: three cards, each with its picture
   ============================================================ */

function PriceVisual() {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <div className="text-center">
        <div className="text-[12px] text-white/40 font-head font-semibold">PO</div>
        <div className="mt-1 font-head font-bold text-white text-[34px] tabular-nums">€4.80</div>
      </div>
      <ArrowRight className="h-5 w-5 text-white/30" />
      <div className="text-center">
        <div className="text-[12px] text-[var(--sw-orange)] font-head font-semibold">Billed</div>
        <div className="mt-1 font-head font-bold text-[var(--sw-orange)] text-[34px] tabular-nums" style={{ textShadow: "0 0 28px rgba(255,90,49,0.45)" }}>
          €5.10
        </div>
      </div>
    </div>
  );
}

function ShortVisual() {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="grid grid-cols-10 gap-[3px]">
        {Array.from({ length: 100 }, (_, k) => {
          const missing = k >= 92;
          return (
            <span
              key={k}
              className={`h-[9px] w-[9px] rounded-[1px] ${missing ? "animate-pulse" : ""}`}
              style={{
                background: missing ? "transparent" : "rgba(110,247,110,0.55)",
                boxShadow: missing ? "inset 0 0 0 1px rgba(255,90,49,0.9)" : "none",
              }}
            />
          );
        })}
      </div>
      <div className="grid gap-3 text-left">
        <div>
          <div className="text-[12px] text-white/40 font-head font-semibold">Billed</div>
          <div className="font-head font-bold text-white text-[26px] leading-none tabular-nums">100</div>
        </div>
        <div>
          <div className="text-[12px] text-white/40 font-head font-semibold">Received</div>
          <div className="font-head font-bold text-[var(--sw-orange)] text-[26px] leading-none tabular-nums">92</div>
        </div>
      </div>
    </div>
  );
}

function PeopleVisual() {
  const who = [ShoppingCart, Package, Receipt];
  return (
    <div className="relative w-full max-w-[270px] mx-auto h-[118px]">
      <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 270 118" fill="none" preserveAspectRatio="none">
        {[45, 135, 225].map((x) => (
          <path key={x} d={`M135 26 C 135 60, ${x} 52, ${x} 84`} stroke="rgba(255,255,255,0.2)" strokeDasharray="3 4" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-[2px] px-3 py-1.5 bg-[rgba(255,90,49,0.1)] shadow-[inset_0_0_0_1px_rgba(255,90,49,0.5)] text-[12px] font-head font-semibold text-[var(--sw-orange)] whitespace-nowrap">
        INV-2846
      </div>
      {who.map((Icon, k) => (
        <div key={k} className="absolute bottom-0 -translate-x-1/2" style={{ left: `${((45 + k * 90) / 270) * 100}%` }}>
          <span className="h-9 w-9 rounded-[2px] flex items-center justify-center bg-[#05070f] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]">
            <Icon className="h-4 w-4 text-white/75" strokeWidth={1.7} />
          </span>
        </div>
      ))}
    </div>
  );
}

const PROBLEM_VISUALS = [PriceVisual, ShortVisual, PeopleVisual];

export function Problem() {
  return (
    <section id="problem" className={SECTION}>
      <Glow at="50% 0%" size="60rem 26rem" color="rgba(63,74,175,0.18)" />
      <div className="wrap relative">
        <Rise>
          <Eyebrow>The problem</Eyebrow>
          <h2 className={`${H2} max-w-[22ch]`}>A supplier can send you a perfectly good invoice for the wrong thing.</h2>
        </Rise>
        <div className="mt-12 md:mt-16 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => {
            const V = PROBLEM_VISUALS[i];
            return (
              <Rise key={p.title} delay={i * 0.07} className={`${CARD} overflow-hidden flex flex-col`}>
                <div className="h-[168px] flex items-center justify-center px-6 border-b border-white/[0.07]" style={{ background: SURFACE }}>
                  <V />
                </div>
                <div className="p-7">
                  <h3 className="font-head font-bold text-white text-[21px] md:text-[22px] leading-[1.22] tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-3 text-white/60 text-[16px] leading-[1.6]">{p.body}</p>
                </div>
              </Rise>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. Inside an invoice: the review screen
   ============================================================ */

/** The cell that disagrees in each example: [row, column] of Record / Item / Quantity / Unit price. */
const FLAG: [number, number][] = [
  [2, 3],
  [1, 2],
  [2, 1],
];
const ROW_COLS = "md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]";

export function Example() {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState<boolean[]>([false, false, false]);
  useEffect(() => {
    const on = (e: Event) => setI((e as CustomEvent<number>).detail);
    window.addEventListener(INSPECT, on);
    return () => window.removeEventListener(INSPECT, on);
  }, []);
  const x = FULL[i];
  const [fr, fc] = FLAG[i];
  const setHold = (v: boolean) => setHeld((h) => h.map((b, k) => (k === i ? v : b)));
  return (
    <section id="example" className={`${SECTION} scroll-mt-16`}>
      <Grid at="50% 100%" size="80% 60%" />
      <Glow at="70% 70%" size="60rem 36rem" color="rgba(63,74,175,0.22)" />
      <div className="wrap relative">
        <Rise className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Inside an invoice</Eyebrow>
            <h2 className={H2}>Follow one invoice with three different problems.</h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>
            Switch between the lines. In each example you can see what the supplier billed, what the order says and who can settle the difference.
          </p>
        </Rise>

        <Rise delay={0.08} className="mt-10 md:mt-14">
          <div style={{ fontSize: 15 }}>
            <Window title="app.operalayer / invoice review">
              <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-3.5 border-b border-white/[0.08] text-[14px]">
                <span className="font-head font-semibold text-white">Invoice review</span>
                <span className="text-white/45 tabular-nums">Example records · INV-2846</span>
              </div>
              <div role="tablist" aria-label="Invoice full examples" className="grid grid-cols-3 md:flex border-b border-white/[0.08] px-1 md:px-5" style={{ background: "#080b18" }}>
                {FULL.map((f, k) => (
                  <button
                    key={f.tab}
                    id={`full-tab-${k}`}
                    role="tab"
                    aria-selected={k === i}
                    aria-controls="full-panel"
                    tabIndex={k === i ? 0 : -1}
                    onClick={() => setI(k)}
                    onKeyDown={(e) => onTabKeys(e, k, FULL.length, setI, "full")}
                    className={`relative min-h-14 py-3 px-2 md:px-4 font-head font-semibold text-[14px] md:text-[15px] leading-[1.2] md:whitespace-nowrap transition-colors ${
                      k === i ? "text-white" : "text-white/45 hover:text-white/80"
                    }`}
                  >
                    {f.tab}
                    {k === i && <motion.span layoutId="fullTab" className="absolute left-2 right-2 md:left-4 md:right-4 bottom-0 h-[2px] bg-[var(--sw-mint)]" transition={{ duration: 0.35, ease }} />}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  id="full-panel"
                  role="tabpanel"
                  aria-labelledby={`full-tab-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="p-5 md:p-8 lg:p-10"
                >
                  <div className="max-w-[46rem]">
                    <div className="text-[13px] text-[var(--sw-mint)] font-head font-semibold">{x.line}</div>
                    <h3 className="mt-2 font-head font-bold text-white text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.02em]">{x.title}</h3>
                    <p className="mt-3 text-white/60 text-[16px] leading-[1.6]">{x.body}</p>
                  </div>
                      <div className="mt-6 rounded-[2px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)]">
                        <div className={`hidden md:grid ${ROW_COLS} gap-x-4 px-4 py-2.5 text-[12.5px] text-white/40 font-head font-semibold`} style={{ background: "#080b18" }}>
                          {["Record", "Item", "Quantity", "Unit price"].map((h) => (
                            <span key={h}>{h}</span>
                          ))}
                        </div>
                        {x.rows.map((r, k) => {
                          const invoice = k === x.rows.length - 1;
                          return (
                            <motion.div
                              key={r[0]}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.35, delay: 0.1 + k * 0.12, ease }}
                              className={`relative grid grid-cols-3 ${ROW_COLS} gap-x-4 gap-y-1 px-4 py-3.5 border-t border-white/[0.07] text-[14.5px] items-center ${
                                invoice ? "bg-[rgba(255,90,49,0.06)]" : ""
                              }`}
                            >
                              {invoice && <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--sw-orange)]" />}
                              {r.map((c, n) => {
                                const bad = k === fr && n === fc;
                                return (
                                  <span key={n} className={`tabular-nums leading-[1.35] ${n === 0 ? "col-span-3 md:col-span-1 font-semibold text-white" : bad ? "" : "text-white/65"}`}>
                                    {bad ? (
                                      <motion.span
                                        initial={{ backgroundColor: "rgba(255,90,49,0)" }}
                                        animate={{ backgroundColor: "rgba(255,90,49,0.16)" }}
                                        transition={{ delay: 0.6, duration: 0.4 }}
                                        className="inline-block -mx-1.5 px-1.5 rounded-[2px] text-[var(--sw-orange)] font-semibold shadow-[inset_0_0_0_1px_rgba(255,90,49,0.5)]"
                                      >
                                        {c}
                                      </motion.span>
                                    ) : (
                                      c
                                    )}
                                  </span>
                                );
                              })}
                            </motion.div>
                          );
                        })}
                      </div>

                  <div className="mt-5 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-4">
                    <div className="rounded-[2px] p-5 md:p-6 bg-white/[0.03] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]">
                      <h4 className="font-head font-semibold text-white text-[16px]">Why it matters</h4>
                      <p className="mt-2 text-white/60 text-[15px] leading-[1.6]">{x.why}</p>
                    </div>
                    <div className="rounded-[2px] p-5 md:p-6 bg-white/[0.03] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]">
                      <h4 className="font-head font-semibold text-white text-[16px]">Suggested action</h4>
                      <p className="mt-2 text-white/60 text-[15px] leading-[1.6]">{x.action}</p>
                    </div>
                  </div>
                      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                        <div className="flex flex-wrap items-center gap-4">
                          <button
                            type="button"
                            disabled={held[i]}
                            onClick={() => setHold(true)}
                            className={`inline-flex h-11 items-center gap-2 rounded-[2px] px-5 font-head font-semibold text-[15px] transition ${
                              held[i] ? "bg-[var(--sw-mint)] text-[var(--sw-black)] cursor-default" : "bg-[var(--sw-beige)] text-[var(--sw-black)] hover:bg-white"
                            }`}
                          >
                            {held[i] ? (
                              <>
                                <Check className="h-4 w-4" strokeWidth={3} /> On hold
                              </>
                            ) : (
                              <>
                                {x.hold} <ArrowRight className="h-4 w-4" />
                              </>
                            )}
                          </button>
                          {held[i] && (
                            <button type="button" onClick={() => setHold(false)} className="text-[14px] font-head font-semibold text-white/60 underline underline-offset-4 hover:text-white">
                              Reset example
                            </button>
                          )}
                        </div>
                        <span role="status" className="text-[14.5px] text-[var(--sw-mint)] min-h-[1.4em]">
                          {held[i] ? x.result : ""}
                        </span>
                      </div>
                </motion.div>
              </AnimatePresence>
            </Window>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ============================================================
   4. One customer's story
   ============================================================ */

function Count({ to, dec = 0 }: { to: number; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const run = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  /* Server HTML carries the real number for crawlers; the browser resets to 0 before paint and counts up on view. */
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

function AccuracyBars() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.6 });
  return (
    <div ref={ref} className="mt-5 grid gap-2">
      {[69, 87, 98.5].map((n, k) => (
        <div key={n} className="flex items-center gap-3">
          <div className="h-[6px] flex-1 rounded-[1px] bg-white/[0.07] overflow-hidden">
            <motion.div
              className="h-full rounded-[1px]"
              style={{ background: k === 2 ? "var(--sw-mint)" : "rgba(110,247,110,0.35)" }}
              initial={{ width: 0 }}
              animate={{ width: run ? `${n}%` : 0 }}
              transition={{ duration: 1, delay: k * 0.25, ease }}
            />
          </div>
          <span className={`w-12 text-right text-[13px] tabular-nums ${k === 2 ? "text-[var(--sw-mint)] font-semibold" : "text-white/45"}`}>{n}%</span>
        </div>
      ))}
    </div>
  );
}

const STAT_NUM = [
  { n: 2, post: " hours per person" },
  { n: 36, post: " seconds" },
  { n: 98.5, dec: 1, post: "%" },
];

export function CustomerCase() {
  return (
    <section id="customer-case" className={`${SECTION} scroll-mt-16`} style={{ background: "#070a16" }}>
      <Glow at="0% 30%" size="50rem 36rem" color="rgba(63,74,175,0.22)" />
      <div className="wrap relative grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <Rise className="lg:col-span-7">
          <Eyebrow>One customer’s story</Eyebrow>
          <h2 className={`${H2} max-w-[18ch]`}>What changed for an electrical goods distributor</h2>
          <p className={`mt-6 ${LEAD}`}>
            For one of our customers, electrical goods distributor ESELO, buying from more than 150 suppliers meant working through different document layouts, product
            codes and pack sizes. Purchasing, warehouse and finance now use OperaLayer to compare orders, deliveries and invoices.
          </p>
          <figure className="mt-10 relative pl-7 border-l-2 border-[var(--sw-mint)]">
            <blockquote className="font-head font-semibold text-white text-[22px] md:text-[28px] leading-[1.3] tracking-[-0.015em]">
              “From demo to live in weeks. Fastest implementation we have experienced so far for such a complex system and functionality.”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img src={ESELO} alt="ESELO" className="h-8 w-8 object-contain brightness-0 invert opacity-90" />
              <span className="text-white/55 text-[15px]">Māris Renigers, E-business Manager, ESELO</span>
            </figcaption>
          </figure>
        </Rise>
        <div className="lg:col-span-5 grid gap-4">
          {STATS.map((s, i) => (
            <Rise key={s.n} delay={i * 0.08} className={`${CARD} p-6 md:p-7`}>
              <div className="font-head font-bold text-[var(--sw-mint)] text-[34px] md:text-[42px] leading-none tracking-[-0.03em] tabular-nums">
                <Count to={STAT_NUM[i].n} dec={STAT_NUM[i].dec} />
                {STAT_NUM[i].post}
              </div>
              <div className="mt-3 font-head font-semibold text-white text-[17px]">{s.label}</div>
              <p className="mt-1.5 text-white/55 text-[15px] leading-[1.55]">{s.body}</p>
              {i === 2 && <AccuracyBars />}
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. How it works
   ============================================================ */

const STEP_ICONS = [Inbox, Link2, ListChecks, Database];

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
    <section id="solution" className={SECTION}>
      <Grid at="50% 60%" size="70% 70%" />
      <div className="wrap relative" ref={ref}>
        <Rise className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={H2}>From the supplier inbox to an invoice you can approve.</h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>
            OperaLayer reads the documents, finds the purchase order in your ERP and compares the lines. Your rules decide what can move ahead and what needs a buyer, a
            warehouse colleague or an accountant.
          </p>
        </Rise>
        <div className="relative mt-14 md:mt-20 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div aria-hidden className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-[52px] h-px bg-white/[0.1]" />
          <motion.div
            aria-hidden
            className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-[52px] h-px bg-[var(--sw-mint)] origin-left"
            initial={false}
            animate={{ scaleX: (Math.min(lit, 4) - 1) / 3 }}
            transition={{ duration: 0.9, ease }}
          />
          {STEPS.map((t, n) => {
            const Icon = STEP_ICONS[n];
            const on = lit >= n + 1;
            return (
              <Rise key={t} delay={n * 0.07} className={`${CARD} relative p-6 md:p-7 pt-[30px] text-center transition-colors duration-500 ${on ? "border-white/[0.14]" : ""}`}>
                <motion.div
                  className="relative z-10 mx-auto h-11 w-11 rounded-[2px] flex items-center justify-center"
                  style={{ background: "#05070f" }}
                  initial={false}
                  animate={{
                    boxShadow: on ? "inset 0 0 0 1px rgba(110,247,110,0.9), 0 0 30px -4px rgba(110,247,110,0.5)" : "inset 0 0 0 1px rgba(255,255,255,0.18)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-5 w-5 transition-colors duration-500" style={{ color: on ? C.mint : "rgba(255,255,255,0.55)" }} strokeWidth={1.7} />
                </motion.div>
                <div className={`mt-5 font-head font-bold text-[14px] transition-colors duration-500 ${on ? "text-[var(--sw-mint)]" : "text-white/35"}`}>{n + 1}</div>
                <p className={`mt-2 text-[16px] leading-[1.55] transition-colors duration-500 ${on ? "text-white/90" : "text-white/60"}`}>{t}</p>
              </Rise>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. What does it change for you? + best fit
   ============================================================ */

const ROLE_ICONS = [Landmark, Receipt, ShoppingCart, Package, Workflow, Server];

export function Roles() {
  return (
    <section id="roles" className={SECTION}>
      <Glow at="50% 0%" size="60rem 30rem" color="rgba(63,74,175,0.16)" />
      <div className="wrap relative">
        <Rise>
          <h2 className={`${H2} max-w-[18ch]`}>What does it change for you?</h2>
        </Rise>
        <div className="mt-12 md:mt-14 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ROLES.map((r, i) => {
            const Icon = ROLE_ICONS[i];
            return (
              <Rise key={r.role} delay={(i % 3) * 0.07} className={`${CARD} p-6 md:p-7 transition-colors hover:border-white/[0.16]`}>
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 shrink-0 rounded-[2px] flex items-center justify-center bg-[rgba(110,247,110,0.08)] shadow-[inset_0_0_0_1px_rgba(110,247,110,0.3)]">
                    <Icon className="h-[18px] w-[18px] text-[var(--sw-mint)]" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-head font-bold text-white text-[19px] leading-[1.2]">{r.role}</h3>
                </div>
                <ul className="mt-5 grid gap-3">
                  {r.items.map((t) => (
                    <li key={t} className="relative pl-5 text-white/65 text-[15.5px] leading-[1.55]">
                      <span aria-hidden className="absolute left-0 top-[0.6em] h-[5px] w-[5px] bg-[var(--sw-mint)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Rise>
            );
          })}
        </div>

        <Rise delay={0.05} className="mt-6 md:mt-8">
          <div className="relative rounded-[4px] p-px" style={{ background: "linear-gradient(120deg, rgba(110,247,110,0.55), rgba(63,74,175,0.5) 45%, rgba(255,255,255,0.08))" }}>
            <div className="relative rounded-[3px] p-7 md:p-10 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-8 lg:gap-14" style={{ background: "#080b18" }}>
              <div>
                <Eyebrow>Best fit</Eyebrow>
                <h3 className="font-head font-bold text-white text-[26px] md:text-[32px] leading-[1.12] tracking-[-0.02em]">Built for businesses that buy stock from many suppliers</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Electrical and industrial distribution", "Wholesale", "Food service supply", "Multi-store retail"].map((c) => (
                    <span key={c} className="rounded-[2px] px-3 py-1.5 text-[13.5px] text-white/75 bg-white/[0.04] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="grid gap-4 self-center">
                {FIT.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80 text-[16px] leading-[1.55]">
                    <span className="mt-[2px] h-5 w-5 shrink-0 rounded-[2px] flex items-center justify-center bg-[var(--sw-mint)]">
                      <Check className="h-3.5 w-3.5 text-[var(--sw-black)]" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ============================================================
   7. Calculator
   ============================================================ */

const DEFAULTS = { volume: 2000, minutes: 4, rate: 25, credits: 8, amount: 65 };
type Key = keyof typeof DEFAULTS;
const euro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 2, minimumFractionDigits: 0 });
const count = new Intl.NumberFormat("en-IE", { maximumFractionDigits: 1 });

const range =
  "w-full h-5 cursor-pointer appearance-none bg-transparent outline-none " +
  "[&::-webkit-slider-runnable-track]:h-[2px] [&::-webkit-slider-runnable-track]:[background:linear-gradient(90deg,#6ef76e_var(--p),rgba(255,255,255,0.14)_var(--p))] " +
  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-[7px] [&::-webkit-slider-thumb]:rounded-[2px] [&::-webkit-slider-thumb]:bg-[var(--sw-mint)] [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(110,247,110,0.15)] " +
  "[&::-moz-range-track]:h-[2px] [&::-moz-range-track]:bg-white/15 [&::-moz-range-progress]:h-[2px] [&::-moz-range-progress]:bg-[var(--sw-mint)] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-[2px] [&::-moz-range-thumb]:bg-[var(--sw-mint)]";

function Slider({ k, label, min, max, step, v, set }: { k: Key; label: string; min: number; max: number; step: number; v: number; set: (k: Key, n: number) => void }) {
  const p = ((v - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4 text-[15px]">
        <span className="text-white/65">{label}</span>
        <span className="font-head font-semibold text-white tabular-nums">{count.format(v)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => set(k, Number(e.target.value))}
        className={`mt-2 ${range}`}
        style={{ ["--p" as string]: `${p}%` } as React.CSSProperties}
      />
    </label>
  );
}

export function Calculator() {
  const [v, setV] = useState(DEFAULTS);
  const set = (k: Key, n: number) => setV((o) => ({ ...o, [k]: n }));
  const hours = ((v.volume * v.minutes) / 60) * 12;
  const capacity = hours * v.rate;
  const reductions = v.credits * v.amount * 12;
  const isDefault = (Object.keys(v) as Key[]).every((k) => v[k] === DEFAULTS[k]);
  return (
    <section id="calculator" className={`${SECTION} scroll-mt-16`} style={{ background: "#070a16" }}>
      <Grid at="50% 100%" size="80% 55%" />
      <Glow at="80% 80%" size="50rem 30rem" color="rgba(110,247,110,0.07)" />
      <div className="wrap relative">
        <Rise className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Annual value calculator</Eyebrow>
            <h2 className={H2}>What is invoice checking costing you?</h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>
            Use your own volumes and costs to explore a year. The example separates the value of staff time from actual supplier corrections.
          </p>
        </Rise>

        <Rise delay={0.08} className="mt-10 md:mt-14">
          <div className="flex items-center justify-between mb-3 text-[14px]">
            <span className="text-white/45">{isDefault ? "Example inputs" : "Your inputs"}</span>
            <button type="button" onClick={() => setV(DEFAULTS)} className="font-head font-semibold text-white/70 underline underline-offset-4 hover:text-[var(--sw-mint)] transition">
              Reset example
            </button>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-4">
            <div className={`${CARD} p-6 md:p-8 flex flex-col`}>
              <h3 className="font-head font-bold text-white text-[21px] md:text-[23px]">Time back for your team</h3>
              <div className="mt-6 grid gap-5">
                <Slider k="volume" label="Invoices per month" min={0} max={10000} step={50} v={v.volume} set={set} />
                <Slider k="minutes" label="Minutes saved per invoice" min={0} max={15} step={0.5} v={v.minutes} set={set} />
                <Slider k="rate" label="Staff cost per hour (€)" min={10} max={80} step={1} v={v.rate} set={set} />
              </div>
              <div className="mt-auto pt-7">
                <div className="pt-6 border-t border-white/[0.08]">
                  <div className="font-head font-bold text-white text-[36px] md:text-[42px] leading-none tabular-nums tracking-[-0.02em]">{euro.format(capacity)}</div>
                  <div className="mt-2 text-white/55 text-[15px]">
                    value of <strong className="text-white font-semibold">{count.format(hours)}</strong> hours per year
                  </div>
                </div>
              </div>
            </div>
            <div className={`${CARD} p-6 md:p-8 flex flex-col`}>
              <h3 className="font-head font-bold text-white text-[21px] md:text-[23px]">Supplier bills corrected</h3>
              <div className="mt-6 grid gap-5">
                <Slider k="credits" label="Confirmed corrections per month" min={0} max={50} step={1} v={v.credits} set={set} />
                <Slider k="amount" label="Average accepted reduction (€)" min={0} max={500} step={5} v={v.amount} set={set} />
              </div>
              <div className="mt-auto pt-7">
                <div className="pt-6 border-t border-white/[0.08]">
                  <div className="font-head font-bold text-white text-[36px] md:text-[42px] leading-none tabular-nums tracking-[-0.02em]">{euro.format(reductions)}</div>
                  <div className="mt-2 text-white/55 text-[15px]">in confirmed reductions per year</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 relative rounded-[4px] p-px" style={{ background: "linear-gradient(90deg, rgba(110,247,110,0.6), rgba(110,247,110,0.12))" }}>
            <div className="rounded-[3px] px-6 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" style={{ background: "#08120f" }}>
              <span className="font-head font-semibold text-white text-[17px] md:text-[19px]">Gross annual value in this scenario</span>
              <span className="font-head font-bold text-[var(--sw-mint)] text-[44px] md:text-[56px] leading-none tabular-nums tracking-[-0.03em]">{euro.format(capacity + reductions)}</span>
            </div>
          </div>
          <p className="mt-5 text-white/65 text-[15px] leading-[1.6]" aria-live="polite">
            This combines {euro.format(capacity)} of staff time and {euro.format(reductions)} in corrected bills.
          </p>
          <p className="mt-1.5 max-w-[52rem] text-white/40 text-[14px] leading-[1.6]">
            Time released becomes a cash saving when it reduces overtime, hiring or other spending. Deduct licence, setup and support costs when you estimate the return.
          </p>
        </Rise>
      </div>
    </section>
  );
}

/* ============================================================
   8. Getting started
   ============================================================ */

export function GettingStarted() {
  return (
    <section id="first-step" className={SECTION}>
      <Glow at="0% 20%" size="44rem 30rem" color="rgba(63,74,175,0.18)" />
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-12 lg:gap-16">
          <Rise className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div>
              <Eyebrow>Getting started</Eyebrow>
              <h2 className={`${H2} max-w-[15ch]`}>Start with one supplier and one real invoice.</h2>
              <p className={`mt-6 ${LEAD}`}>
                Choose an invoice your team knows well. The best example is one where somebody had to call the warehouse, check a price or ask what the supplier meant.
              </p>
            </div>
          </Rise>
          <ol className="lg:col-span-7 relative">
            <span aria-hidden className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--sw-mint)] via-white/15 to-white/5" />
            {START.map((s, i) => (
              <li key={s.title} className="relative pl-16 pb-6 last:pb-0">
                <span className="absolute left-0 top-0 h-10 w-10 rounded-[2px] flex items-center justify-center font-head font-bold text-[16px] text-[var(--sw-black)] bg-[var(--sw-mint)] shadow-[0_0_24px_-4px_rgba(110,247,110,0.6)]">
                  {i + 1}
                </span>
                <Rise delay={i * 0.05} className={`${CARD} p-6 md:p-7`}>
                  <h3 className="font-head font-bold text-white text-[20px] md:text-[22px] leading-[1.25]">{s.title}</h3>
                  <div className="mt-4 grid gap-3">
                    <p className="flex gap-3 text-white/75 text-[15.5px] leading-[1.6]">
                      <Users className="h-[18px] w-[18px] mt-[3px] shrink-0 text-white/40" strokeWidth={1.7} />
                      <span>{s.team}</span>
                    </p>
                    <p className="flex gap-3 text-white/60 text-[15.5px] leading-[1.6]">
                      <Layers className="h-[18px] w-[18px] mt-[3px] shrink-0 text-[var(--sw-mint)]" strokeWidth={1.7} />
                      <span>{s.us}</span>
                    </p>
                  </div>
                </Rise>
              </li>
            ))}
          </ol>
        </div>

        <Rise delay={0.05} className="mt-14 md:mt-16">
          <div
            className="relative overflow-hidden rounded-[4px] p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12 border border-white/[0.1]"
            style={{ background: "linear-gradient(110deg, #111638, #0a0d1c 60%)" }}
          >
            <Grid at="90% 50%" size="40% 120%" />
            <div className="relative max-w-[44rem]">
              <h3 className="font-head font-bold text-white text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.015em]">See it before connecting your ERP</h3>
              <p className="mt-3 text-white/60 text-[16px] leading-[1.6]">
                The first call uses example documents. Follow a price change, a short delivery and a different product code, then discuss the suppliers and records that
                matter in your business.
              </p>
            </div>
            <a href="#demo" onClick={go("demo")} className={`${btnMain} relative self-start md:self-auto whitespace-nowrap`}>
              Book a demo call
            </a>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ============================================================
   9. Under the hood
   ============================================================ */

const HOOD_ICONS = [FileText, Search, Boxes, Scale, Database];

function PackVisual() {
  return (
    <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
      <div className={`${CARD} p-4`}>
        <div className="text-[12px] text-white/40 font-head font-semibold">Supplier invoice</div>
        <div className="mt-2 font-head font-bold text-white text-[19px] leading-tight">10 boxes of 12</div>
        <div className="mt-3 h-2 w-3/4 rounded-[1px] bg-white/[0.08]" />
        <div className="mt-1.5 h-2 w-1/2 rounded-[1px] bg-white/[0.08]" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="h-9 w-9 rounded-[2px] flex items-center justify-center bg-[rgba(110,247,110,0.1)] shadow-[inset_0_0_0_1px_rgba(110,247,110,0.5),0_0_24px_-4px_rgba(110,247,110,0.45)]">
          <Layers className="h-4 w-4 text-[var(--sw-mint)]" strokeWidth={1.8} />
        </span>
        <ArrowRight className="h-4 w-4 text-white/30" />
      </div>
      <div className={`${CARD} p-4`}>
        <div className="text-[12px] text-white/40 font-head font-semibold">Purchase order</div>
        <div className="mt-2 font-head font-bold text-[var(--sw-mint)] text-[19px] leading-tight">120 pieces</div>
        <div className="mt-3 h-2 w-3/4 rounded-[1px] bg-white/[0.08]" />
        <div className="mt-1.5 h-2 w-1/2 rounded-[1px] bg-white/[0.08]" />
      </div>
    </div>
  );
}

export function UnderTheHood() {
  return (
    <section id="technology" className={SECTION} style={{ background: "#070a16" }}>
      <Grid at="20% 80%" size="50% 60%" />
      <div className="wrap relative grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-12 lg:gap-16">
        <Rise className="lg:col-span-5">
          <Eyebrow>Under the hood</Eyebrow>
          <h2 className={`${H2} max-w-[16ch]`}>How OperaLayer knows two different lines refer to the same item</h2>
          <p className={`mt-6 ${LEAD}`}>
            Your PO might say 120 pieces. The supplier might write 10 boxes of 12 and use its own item code. OperaLayer has to establish the product and the unit before a
            price comparison means anything.
          </p>
          <PackVisual />
        </Rise>
        <Rise delay={0.08} className="lg:col-span-7 self-center grid gap-3">
          {HOOD.map((h, i) => {
            const Icon = HOOD_ICONS[i];
            return (
              <details key={h.q} open={i === 0} className={`group ${CARD} open:border-white/[0.16] transition-colors`}>
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 md:px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="h-9 w-9 shrink-0 rounded-[2px] flex items-center justify-center bg-white/[0.04] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] group-open:bg-[rgba(110,247,110,0.1)] group-open:shadow-[inset_0_0_0_1px_rgba(110,247,110,0.45)] transition">
                    <Icon className="h-4 w-4 text-white/60 group-open:text-[var(--sw-mint)]" strokeWidth={1.8} />
                  </span>
                  <span className="flex-1 font-head font-semibold text-white text-[17px] md:text-[19px] leading-snug">{h.q}</span>
                  <PlusMinus />
                </summary>
                <p className="px-5 md:px-6 pb-6 md:pl-[76px] text-white/65 text-[15.5px] md:text-[16px] leading-[1.65]">{h.a}</p>
              </details>
            );
          })}
        </Rise>
      </div>
    </section>
  );
}

/* ============================================================
   10. Questions
   ============================================================ */

export function Questions() {
  return (
    <section id="questions" className={SECTION}>
      <div className="wrap relative">
        <Rise>
          <Eyebrow>Questions</Eyebrow>
          <h2 className={H2}>Fair questions before you start</h2>
        </Rise>
        <div className="mt-12 md:mt-14 grid gap-12 md:gap-14">
          {FAQ_GROUPS.map((g, i) => (
            <Rise key={g.group} delay={i * 0.05} className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-16">
              <h3 className="lg:col-span-4 font-head font-bold text-white text-[20px] md:text-[22px] leading-[1.25] lg:pt-5">{g.group}</h3>
              <div className="lg:col-span-8 border-t border-white/10">
                {g.items.map((x) => (
                  <details key={x.q} className="group border-b border-white/10">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 text-white text-[17px] md:text-[19px] font-semibold font-head leading-snug [&::-webkit-details-marker]:hidden hover:text-[var(--sw-mint)] transition-colors">
                      {x.q}
                      <PlusMinus />
                    </summary>
                    <p className="pb-6 md:pb-7 pr-2 md:pr-10 text-white/65 text-[16px] md:text-[17px] leading-[1.65] max-w-[46rem]">{x.a}</p>
                  </details>
                ))}
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. Book a demo call
   ============================================================ */

export function Demo() {
  return (
    <section id="demo" className={`${SECTION} scroll-mt-4`} style={{ background: "#070a16" }}>
      <Grid at="25% 40%" size="55% 80%" />
      <Glow at="20% 30%" size="46rem 32rem" color="rgba(63,74,175,0.3)" />
      <div className="wrap relative grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Rise className="lg:col-span-6">
          <h2 className="font-head font-bold text-white text-[38px] md:text-[52px] lg:text-[clamp(44px,4.4vw,64px)] leading-[1.03] tracking-[-0.03em] text-balance">
            Bring the invoice that made three people stop working.
          </h2>
          <p className="mt-6 text-white/75 text-[17px] md:text-[19px] leading-[1.6]">
            See which line OperaLayer would flag, the evidence the reviewer would see, and how an accepted invoice gets back into your ERP.
          </p>
          <p className="mt-4 text-white/50 text-[15px] md:text-[16px] leading-[1.6]">
            Start with our example records. You leave knowing which documents, checks and connections to test in your own business.
          </p>
        </Rise>
        <Rise delay={0.08} className="lg:col-span-6">
          <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" submitText="Book a demo call" />
        </Rise>
      </div>
    </section>
  );
}
