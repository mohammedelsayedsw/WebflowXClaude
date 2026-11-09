"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Check,
  Database,
  FileText,
  Inbox,
  Landmark,
  Layers,
  Link2,
  ListChecks,
  Package,
  Plus,
  Receipt,
  Scale,
  Search,
  Server,
  ShoppingCart,
  Users,
  Workflow,
} from "lucide-react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight, btnPrimary } from "@/components/primitives/buttonStyles";
import { assetUrl } from "@/lib/assets";
import { QUICK, PROBLEMS, FULL, STATS, STEPS, ROLES, FIT, START, HOOD, FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";

/*
 * OperaLayer invoice matching, on the scandiweb page system (/akeneo/plus-bundle, /ai-visibility-package):
 * wave hero with a white card, then white, lavender and navy sections with hairline lists.
 * All visible copy is Anton's, word for word (copy.ts and the strings below).
 */

const ESELO = assetUrl("/operalayer/invoice-matching/eselo-mark.png");
const INSPECT = "ol-im-inspect";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const LAVENDER = "#f0f1fa";
const LINE = "border-[#dfe1f0]";
const SECTION_Y = "py-[clamp(56px,9vh,112px)]";
const H2_LIGHT = "font-head font-bold text-[var(--sw-black)] text-[32px] sm:text-[38px] md:text-[46px] lg:text-[48px] leading-[1.06] tracking-[-0.02em]";
const H2_DARK = "font-head font-bold text-white text-[32px] sm:text-[38px] md:text-[46px] lg:text-[48px] leading-[1.06] tracking-[-0.02em]";
const BODY_LIGHT = "text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed";
const BODY_DARK = "text-white/75 text-[16px] md:text-[18px] leading-relaxed";

function Eyebrow({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "mint" }) {
  return (
    <div className="font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={{ color: tone === "mint" ? "var(--sw-mint)" : "var(--sw-blue)" }}>
      {children}
    </div>
  );
}

/** The coloured part of a headline: blue on light, green on dark, on its own line. */
function Hi({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "mint" }) {
  return (
    <span className="block" style={{ color: tone === "mint" ? "var(--sw-mint)" : "var(--sw-blue)" }}>
      {children}
    </span>
  );
}

/** A list item that rises into view (Reveal renders a div, which cannot sit directly in a list). */
function RevealItem({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.li>
  );
}

/** In-page links do not scroll on their own in this app (smooth scroll on html, overflow on body), so each link scrolls itself. */
function scrollToId(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const from = window.scrollY;
    const to = from + target.getBoundingClientRect().top;
    const started = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / 700);
      window.scrollTo({ top: from + (to - from) * (1 - Math.pow(1 - t, 3)), behavior: "instant" });
      if (t < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    window.history.replaceState(null, "", `#${id}`);
  };
}

function onTabKeys(e: React.KeyboardEvent, i: number, n: number, set: (k: number) => void, group: string) {
  const order: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i + n - 1) % n, Home: 0, End: n - 1 };
  if (!(e.key in order)) return;
  e.preventDefault();
  set(order[e.key]);
  document.getElementById(`${group}-tab-${order[e.key]}`)?.focus();
}

/** Underline tabs, blue on light (the scandiweb.com homepage "Our work" tabs). */
function Tabs({ items, i, set, group, label }: { items: string[]; i: number; set: (k: number) => void; group: string; label: string }) {
  return (
    <div role="tablist" aria-label={label} className={`grid grid-cols-3 sm:flex sm:gap-8 border-b ${LINE}`}>
      {items.map((t, k) => (
        <button
          key={t}
          id={`${group}-tab-${k}`}
          role="tab"
          aria-selected={k === i}
          aria-controls={`${group}-panel-${k}`}
          tabIndex={k === i ? 0 : -1}
          onClick={() => set(k)}
          onKeyDown={(e) => onTabKeys(e, k, items.length, set, group)}
          className={`relative -mb-px py-3 px-1 sm:px-0 font-head font-semibold text-[14px] sm:text-[15px] leading-[1.2] transition-colors ${
            k === i ? "text-[var(--sw-blue)]" : "text-[var(--sw-black)]/55 hover:text-[var(--sw-black)]"
          }`}
        >
          {t}
          {k === i && <motion.span layoutId={`${group}-line`} className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--sw-blue)]" transition={{ duration: 0.35, ease: EASE }} />}
        </button>
      ))}
    </div>
  );
}

/** Every panel sits in the same grid cell, so switching tabs never changes the height of the page. */
function Panels({ i, group, children }: { i: number; group: string; children: React.ReactNode[] }) {
  return (
    <div className="grid">
      {children.map((c, k) => (
        <motion.div
          key={k}
          id={`${group}-panel-${k}`}
          role="tabpanel"
          aria-labelledby={`${group}-tab-${k}`}
          aria-hidden={k !== i}
          initial={false}
          animate={{ opacity: k === i ? 1 : 0, y: k === i ? 0 : 6 }}
          transition={{ duration: 0.3, ease: EASE }}
          className={`[grid-area:1/1] ${k === i ? "" : "invisible pointer-events-none"}`}
        >
          {c}
        </motion.div>
      ))}
    </div>
  );
}

/* ============================================================
   1. Hero: waves, copy on the left, the example invoice in a white card
   ============================================================ */

function HeroCard() {
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
  const inspect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.dispatchEvent(new CustomEvent(INSPECT, { detail: i }));
    scrollToId("example")(e);
  };
  return (
    <div ref={ref} className="bg-white rounded-[2px] p-5 md:p-7 lg:p-[clamp(18px,3.2vh,32px)] lg:ml-auto lg:max-w-[460px] text-[var(--sw-black)]">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[22px] leading-[1.15] tracking-[-0.01em]">Example invoice</h2>
        <span className="text-[13px] text-[var(--sw-black)]/50 tabular-nums">PO-1048 / INV-2846</span>
      </div>
      <div className="mt-3 lg:mt-[clamp(6px,1.2vh,12px)]">
        <Tabs items={QUICK.map((q) => q.tab)} i={i} set={pick} group="quick" label="Invoice quick examples" />
      </div>
      <Panels i={i} group="quick">
        {QUICK.map((s) => (
          <div key={s.tab} className="pt-4 lg:pt-[clamp(10px,2vh,20px)]">
            <div className="font-head font-semibold text-[13px] text-[var(--sw-blue)]">{s.product}</div>
            <div className="mt-1 font-head font-bold text-[24px] md:text-[28px] lg:text-[clamp(22px,3.4vh,28px)] leading-[1.1] tracking-[-0.02em]">{s.title}</div>
            <div className={`mt-4 lg:mt-[clamp(10px,1.8vh,16px)] grid grid-cols-2 border ${LINE} rounded-[2px]`}>
              {s.pair.map((p, k) => (
                <div key={p.k} className={`px-4 py-3 lg:py-[clamp(8px,1.4vh,12px)] ${k ? `border-l ${LINE} bg-[rgba(224,79,79,0.07)]` : ""}`}>
                  <div className="font-head font-semibold text-[12px] uppercase tracking-[0.08em] text-[var(--sw-black)]/50">{p.k}</div>
                  <div className={`mt-0.5 font-head font-bold text-[20px] tabular-nums ${k ? "text-[var(--sw-red)]" : ""}`}>{p.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 lg:mt-[clamp(8px,1.6vh,14px)] text-[15px] leading-[1.5] text-[var(--sw-black)]/70">{s.note}</p>
            <div className={`mt-3 pt-3 lg:mt-[clamp(8px,1.6vh,14px)] lg:pt-[clamp(8px,1.6vh,14px)] border-t ${LINE}`}>
              <div className="font-head font-bold text-[14px]">Suggested action</div>
              <p className="mt-1 text-[15px] leading-[1.5] text-[var(--sw-black)]/70">{s.action}</p>
            </div>
          </div>
        ))}
      </Panels>
      <a href="#example" onClick={inspect} className={`${btnLight} mt-5 lg:mt-[clamp(12px,2.4vh,24px)] w-full h-auto min-h-12 py-3 px-4`}>
        Inspect this line
      </a>
    </div>
  );
}

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 -mt-[60px] md:-mt-[75px] flex min-h-[calc(100svh+60px)] md:min-h-[calc(100svh+75px)] flex-col justify-center bg-[var(--sw-black)] overflow-hidden"
    >
      {/* scandiweb waves: the scandiweb.com homepage hero loop */}
      <video
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src={assetUrl("/operalayer/invoice-matching/hero-waves.mp4")}
        poster={assetUrl("/operalayer/invoice-matching/hero-waves-poster.jpg")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img aria-hidden alt="" src={assetUrl("/operalayer/invoice-matching/hero-waves-poster.jpg")} className="absolute inset-0 h-full w-full object-cover hidden motion-reduce:block" />
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{ background: "linear-gradient(90deg, rgba(16,19,44,0.82) 0%, rgba(16,19,44,0.5) 40%, rgba(16,19,44,0) 64%, rgba(16,19,44,0) 100%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 lg:hidden"
        style={{ background: "linear-gradient(180deg, rgba(16,19,44,0.35) 0%, rgba(16,19,44,0.6) 40%, rgba(16,19,44,0.88) 75%, rgba(16,19,44,0.95) 100%)" }}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, var(--sw-black) 100%)" }} />

      <div className="wrap w-full relative pt-[124px] md:pt-[150px] lg:pt-[clamp(120px,17vh,160px)] pb-12 md:pb-[clamp(40px,7vh,96px)] grid grid-cols-[minmax(0,1fr)] gap-10 lg:gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-center">
        <div>
          <motion.div {...enter(0.1)}>
            <Eyebrow tone="mint">Invoice matching</Eyebrow>
          </motion.div>
          <motion.h1
            {...enter(0.2)}
            className="mt-4 md:mt-5 font-head font-bold text-white text-[40px] sm:text-[56px] lg:text-[clamp(44px,min(4.4vw,8vh),64px)] leading-[1.02] tracking-[-0.03em]"
          >
            Catch invoice errors
            <span className="block" style={{ color: "var(--sw-mint)" }}>
              before you pay.
            </span>
          </motion.h1>
          <motion.p {...enter(0.3)} className="mt-5 md:mt-6 lg:mt-[clamp(14px,2.6vh,24px)] text-white/80 text-[17px] md:text-[19px] lg:text-[clamp(16px,2.2vh,19px)] leading-relaxed max-w-[44ch]">
            OperaLayer connects your warehouse, accounting and ERP to check every invoice against what you ordered and received. Wrong prices, missing quantities and
            different products reach your team before the bill is approved.
          </motion.p>
          <motion.p {...enter(0.34)} className="mt-3 text-white/60 text-[15px] md:text-[16px] leading-[1.5]">
            For wholesalers, distributors and retailers buying stock from many suppliers.
          </motion.p>
          <motion.p {...enter(0.38)} className="mt-5 lg:mt-[clamp(12px,2.2vh,22px)] flex items-center gap-2.5 font-head font-semibold text-white text-[17px] md:text-[18px]">
            <Check aria-hidden className="h-5 w-5 shrink-0" style={{ color: "var(--sw-mint)" }} strokeWidth={3} />
            Give your team its mornings back.
          </motion.p>
          <motion.div {...enter(0.45)} className="mt-8 lg:mt-[clamp(18px,3.6vh,40px)] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <a href="#demo" onClick={scrollToId("demo")} className={`${btnPrimary} w-full sm:w-auto h-auto min-h-12 py-3`}>
              Book a demo call
            </a>
            <a
              href="#example"
              onClick={scrollToId("example")}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 font-head font-semibold text-[16px] text-white border-b border-white/40 hover:border-white py-1 transition"
            >
              See an invoice example <ArrowDown aria-hidden className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
        <motion.div {...enter(0.3)}>
          <HeroCard />
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   2. The customer's words, in the band where the client logos sit on other scandiweb pages
   ============================================================ */

export function QuoteBand() {
  return (
    <section
      aria-label="What our customer says"
      className="relative z-10 border-t border-white/10"
      style={{
        background: "radial-gradient(ellipse 30% 220% at 55% 50%, rgba(68,76,170,0.68) 0%, rgba(39,45,103,0.25) 52%, transparent 80%), var(--sw-black)",
      }}
    >
      <div className="wrap py-7 md:py-8 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
        <div className="flex items-center gap-4 md:gap-5 flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ESELO} alt="ESELO" className="h-10 w-10 md:h-12 md:w-12 object-contain brightness-0 invert shrink-0" />
          <div>
            <p className="font-head font-bold text-white text-[17px] md:text-[20px] leading-[1.35]">
              “Our employees smiling again. Two hours per person of ‘monkey work’ gone.”
            </p>
            <p className="mt-1 text-white/60 text-[14px]">Māris Renigers, E-business Manager, ESELO</p>
          </div>
        </div>
        <a
          href="#customer-case"
          onClick={scrollToId("customer-case")}
          className="self-start lg:self-auto shrink-0 inline-flex items-center gap-1.5 font-head font-semibold text-[16px] text-white border-b border-white/40 hover:border-white py-1 transition"
        >
          Read one customer’s story <ArrowRight aria-hidden className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ============================================================
   3. The problem: three columns, each with the evidence on top
   ============================================================ */

function Pair({ a, b }: { a: [string, string]; b: [string, string] }) {
  return (
    <div className="grid grid-cols-2 h-full">
      {[a, b].map(([k, v], n) => (
        <div key={k} className={`flex flex-col justify-center px-5 ${n ? `border-l ${LINE}` : ""}`}>
          <div className="font-head font-semibold text-[12px] uppercase tracking-[0.08em] text-[var(--sw-black)]/50">{k}</div>
          <div className={`mt-1 font-head font-bold text-[26px] md:text-[30px] leading-none tabular-nums tracking-[-0.02em] ${n ? "text-[var(--sw-red)]" : "text-[var(--sw-black)]"}`}>{v}</div>
        </div>
      ))}
    </div>
  );
}

function Holders() {
  const who: [typeof ShoppingCart, string][] = [
    [ShoppingCart, "Buyer"],
    [Package, "Receiving"],
    [Receipt, "Accounting"],
  ];
  return (
    <div className="grid grid-cols-3 h-full">
      {who.map(([Icon, t], n) => (
        <div key={t} className={`flex flex-col items-center justify-center gap-2 ${n ? `border-l ${LINE}` : ""}`}>
          <Icon aria-hidden className="h-6 w-6 text-[var(--sw-blue)]" strokeWidth={1.5} />
          <span className="font-head font-semibold text-[14px] text-[var(--sw-black)]">{t}</span>
        </div>
      ))}
    </div>
  );
}

const EVIDENCE = [
  <Pair key="p" a={["PO", "€4.80"]} b={["Billed", "€5.10"]} />,
  <Pair key="q" a={["Billed", "100"]} b={["Received", "92"]} />,
  <Holders key="h" />,
];

export function Problem() {
  return (
    <section id="problem" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className={`${H2_LIGHT} mt-4 max-w-[26ch]`}>
            A supplier can send you a perfectly good invoice <Hi>for the wrong thing.</Hi>
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-10 md:gap-0">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07} className={`md:px-8 first:md:pl-0 last:md:pr-0 ${i ? `md:border-l ${LINE}` : ""}`}>
              <div className={`h-[104px] border ${LINE} rounded-[2px]`} style={{ background: LAVENDER }}>
                {EVIDENCE[i]}
              </div>
              <h3 className="mt-6 font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[21px] leading-[1.25]">{p.title}</h3>
              <p className="mt-3 text-[var(--sw-black)]/70 text-[16px] leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. Inside an invoice: the three examples in full
   ============================================================ */

/** The cell that disagrees in each example: [row, column] of Record / Item / Quantity / Unit price. */
const FLAG: [number, number][] = [
  [2, 3],
  [1, 2],
  [2, 1],
];
const ROW_COLS = "md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]";

function ExamplePanel({ k, held, setHold }: { k: number; held: boolean; setHold: (v: boolean) => void }) {
  const x = FULL[k];
  const [fr, fc] = FLAG[k];
  return (
    <div className="p-5 md:p-8 lg:p-10">
      <div className="max-w-[46rem]">
        <div className="font-head font-semibold text-[13px] text-[var(--sw-blue)]">{x.line}</div>
        <h3 className="mt-1.5 font-head font-bold text-[var(--sw-black)] text-[24px] md:text-[30px] leading-[1.12] tracking-[-0.02em]">{x.title}</h3>
        <p className="mt-3 text-[var(--sw-black)]/70 text-[16px] leading-relaxed">{x.body}</p>
      </div>

      <div className={`mt-6 border ${LINE} rounded-[2px] overflow-hidden`}>
        <div className={`hidden md:grid ${ROW_COLS} gap-x-4 px-5 py-2.5 font-head font-semibold text-[13px] text-[var(--sw-black)]/55`} style={{ background: LAVENDER }}>
          {["Record", "Item", "Quantity", "Unit price"].map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {x.rows.map((r, n) => (
          <div key={r[0]} className={`grid grid-cols-3 ${ROW_COLS} gap-x-4 gap-y-1 px-5 py-3.5 border-t ${LINE} first:border-t-0 md:first:border-t text-[15px] items-center`}>
            {r.map((c, m) => {
              const bad = n === fr && m === fc;
              return (
                <span
                  key={m}
                  className={`tabular-nums leading-[1.35] ${m === 0 ? "col-span-3 md:col-span-1 font-head font-semibold text-[var(--sw-black)]" : bad ? "" : "text-[var(--sw-black)]/70"}`}
                >
                  {bad ? (
                    <span className="inline-block -mx-1.5 px-1.5 py-0.5 rounded-[2px] bg-[rgba(224,79,79,0.1)] text-[var(--sw-red)] font-semibold">{c}</span>
                  ) : (
                    c
                  )}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div className={`mt-6 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-6 md:gap-10 border-t ${LINE} pt-6`}>
        <div>
          <h4 className="font-head font-bold text-[var(--sw-black)] text-[16px]">Why it matters</h4>
          <p className="mt-2 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">{x.why}</p>
        </div>
        <div>
          <h4 className="font-head font-bold text-[var(--sw-black)] text-[16px]">Suggested action</h4>
          <p className="mt-2 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">{x.action}</p>
        </div>
      </div>

      <div className="mt-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <div className="flex flex-wrap items-center gap-4">
          {held ? (
            <span className="inline-flex h-12 items-center gap-2 rounded-[2px] px-6 font-head font-semibold text-[16px] text-[var(--sw-blue)] border border-[var(--sw-blue)]" style={{ background: LAVENDER }}>
              <Check aria-hidden className="h-4 w-4" strokeWidth={3} /> On hold
            </span>
          ) : (
            <button type="button" onClick={() => setHold(true)} className={`${btnLight} h-12 px-6`}>
              {x.hold} <ArrowRight aria-hidden className="h-4 w-4" />
            </button>
          )}
          {held && (
            <button type="button" onClick={() => setHold(false)} className="font-head font-semibold text-[15px] text-[var(--sw-black)]/60 underline underline-offset-4 hover:text-[var(--sw-blue)]">
              Reset example
            </button>
          )}
        </div>
        <span role="status" className="text-[15px] font-semibold text-[var(--sw-blue)] min-h-[1.4em]">
          {held ? x.result : ""}
        </span>
      </div>
    </div>
  );
}

export function Example() {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState<boolean[]>([false, false, false]);
  useEffect(() => {
    const on = (e: Event) => setI((e as CustomEvent<number>).detail);
    window.addEventListener(INSPECT, on);
    return () => window.removeEventListener(INSPECT, on);
  }, []);
  return (
    <section id="example" className={`relative z-10 ${SECTION_Y}`} style={{ background: LAVENDER }}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Inside an invoice</Eyebrow>
            <h2 className={`${H2_LIGHT} mt-4`}>
              Follow one invoice with <Hi>three different problems.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${BODY_LIGHT}`}>
            Switch between the lines. In each example you can see what the supplier billed, what the order says and who can settle the difference.
          </p>
        </Reveal>

        <Reveal delay={0.08} className={`mt-10 md:mt-12 bg-white border ${LINE} rounded-[2px]`}>
          <div className="px-5 md:px-8 lg:px-10 pt-2 flex items-end justify-between gap-6">
            <div className="flex-1 sm:flex-none">
              <Tabs items={FULL.map((f) => f.tab)} i={i} set={setI} group="full" label="Invoice full examples" />
            </div>
            <span className="hidden md:block pb-3 text-[13px] text-[var(--sw-black)]/50 tabular-nums">Example records · INV-2846</span>
          </div>
          <div className={`border-t ${LINE} -mt-px`} />
          <Panels i={i} group="full">
            {FULL.map((f, k) => (
              <ExamplePanel key={f.tab} k={k} held={held[k]} setHold={(v) => setHeld((h) => h.map((b, n) => (n === k ? v : b)))} />
            ))}
          </Panels>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   5. One customer's story: three results in columns, then the quote
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
    const c = animate(0, to, { duration: reduce ? 0 : 1.4, ease: EASE, onUpdate: setV });
    return () => c.stop();
  }, [run, to, reduce]);
  return <span ref={ref}>{v.toFixed(dec)}</span>;
}

function AccuracyBars() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.6 });
  return (
    <div ref={ref} className="mt-5 grid gap-2.5">
      {[69, 87, 98.5].map((n, k) => (
        <div key={n} className="flex items-center gap-3">
          <div className="h-[6px] flex-1 bg-white/10 overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: k === 2 ? "var(--sw-mint)" : "rgba(255,255,255,0.35)" }}
              initial={{ width: 0 }}
              animate={{ width: run ? `${n}%` : 0 }}
              transition={{ duration: 1, delay: k * 0.25, ease: EASE }}
            />
          </div>
          <span className={`w-12 text-right text-[13px] tabular-nums ${k === 2 ? "text-[var(--sw-mint)] font-semibold" : "text-white/55"}`}>{n}%</span>
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
    <section id="customer-case" className={`relative z-10 bg-[var(--sw-black)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="mint">One customer’s story</Eyebrow>
            <h2 className={`${H2_DARK} mt-4`}>
              What changed for an <Hi tone="mint">electrical goods distributor</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${BODY_DARK}`}>
            For one of our customers, electrical goods distributor ESELO, buying from more than 150 suppliers meant working through different document layouts, product codes
            and pack sizes. Purchasing, warehouse and finance now use OperaLayer to compare orders, deliveries and invoices.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 border-t border-white/15">
          {STATS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className={`pt-7 md:pt-8 pb-2 md:px-8 first:md:pl-0 last:md:pr-0 ${i ? "border-t md:border-t-0 md:border-l border-white/15 mt-7 md:mt-0" : ""}`}>
              <div className="font-head font-bold text-[var(--sw-mint)] leading-none tracking-[-0.03em] tabular-nums whitespace-nowrap">
                <span className="text-[52px] md:text-[64px]">
                  <Count to={STAT_NUM[i].n} dec={STAT_NUM[i].dec} />
                  {STAT_NUM[i].post === "%" ? "%" : ""}
                </span>
                {STAT_NUM[i].post !== "%" && <span className="text-[24px] md:text-[28px] tracking-[-0.02em]">{STAT_NUM[i].post}</span>}
              </div>
              <div className="mt-4 font-head font-bold text-white text-[17px] md:text-[18px]">{s.label}</div>
              <p className="mt-2 text-white/65 text-[15px] leading-relaxed">{s.body}</p>
              {i === 2 && <AccuracyBars />}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 md:mt-16 border-t border-white/15 pt-8 md:pt-10 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[64px_minmax(0,1fr)] gap-5 md:gap-8 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ESELO} alt="ESELO" className="h-12 w-12 md:h-16 md:w-16 object-contain brightness-0 invert" />
          <figure>
            <blockquote className="font-head font-bold text-white text-[22px] md:text-[30px] leading-[1.3] tracking-[-0.015em] max-w-[40ch]">
              “From demo to live in weeks. Fastest implementation we have experienced so far for such a complex system and functionality.”
            </blockquote>
            <figcaption className="mt-4 text-white/60 text-[15px]">Māris Renigers, E-business Manager, ESELO</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   6. How it works: four steps, a blue line runs across them
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
    <section id="solution" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <div className="wrap w-full" ref={ref}>
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={`${H2_LIGHT} mt-4`}>
              From the supplier inbox to an invoice <Hi>you can approve.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${BODY_LIGHT}`}>
            OperaLayer reads the documents, finds the purchase order in your ERP and compares the lines. Your rules decide what can move ahead and what needs a buyer, a
            warehouse colleague or an accountant.
          </p>
        </Reveal>
        <ol className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {STEPS.map((t, n) => {
            const Icon = STEP_ICONS[n];
            const on = lit >= n + 1;
            return (
              <RevealItem key={t} delay={n * 0.07}>
                  <div className="relative h-[2px] bg-[#dfe1f0]">
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 bg-[var(--sw-blue)] origin-left"
                      initial={false}
                      animate={{ scaleX: on ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-head font-bold text-[34px] md:text-[40px] leading-none text-[var(--sw-blue)]">{n + 1}</span>
                    <Icon aria-hidden className={`h-6 w-6 transition-colors duration-500 ${on ? "text-[var(--sw-blue)]" : "text-[var(--sw-black)]/30"}`} strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-[var(--sw-black)]/80 text-[16px] leading-relaxed">{t}</p>
              </RevealItem>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   7. What does it change for you: six roles in white cards on lavender
   ============================================================ */

const ROLE_ICONS = [Landmark, Receipt, ShoppingCart, Package, Workflow, Server];

export function Roles() {
  return (
    <section id="roles" className={`relative z-10 ${SECTION_Y}`} style={{ background: LAVENDER }}>
      <div className="wrap w-full">
        <Reveal>
          <h2 className={H2_LIGHT}>
            What does it change <Hi>for you?</Hi>
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-12 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ROLES.map((r, i) => {
            const Icon = ROLE_ICONS[i];
            return (
              <Reveal key={r.role} delay={(i % 3) * 0.06} className={`bg-white border ${LINE} rounded-[2px] p-6 md:p-7`}>
                <Icon aria-hidden className="h-7 w-7 text-[var(--sw-blue)]" strokeWidth={1.5} />
                <h3 className="mt-5 font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[20px] leading-[1.2]">{r.role}</h3>
                <ul className={`mt-4 border-t ${LINE}`}>
                  {r.items.map((t) => (
                    <li key={t} className={`flex gap-3 border-b ${LINE} last:border-b-0 py-3 text-[var(--sw-black)]/75 text-[15px] leading-[1.5]`}>
                      <Check aria-hidden className="mt-[3px] h-4 w-4 shrink-0 text-[var(--sw-blue)]" strokeWidth={3} />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. Best fit
   ============================================================ */

export function BestFit() {
  return (
    <section id="best-fit" className={`relative z-10 bg-[var(--sw-black)] ${SECTION_Y}`}>
      <div className="wrap w-full grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        <Reveal>
          <Eyebrow tone="mint">Best fit</Eyebrow>
          <h2 className={`${H2_DARK} mt-4`}>
            Built for businesses that buy stock from <Hi tone="mint">many suppliers</Hi>
          </h2>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {["Electrical and industrial distribution", "Wholesale", "Food service supply", "Multi-store retail"].map((c) => (
              <li key={c} className="rounded-[2px] border border-white/25 px-3.5 py-2 font-head font-semibold text-[14px] text-white/85">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
        <ul className="border-t border-white/15">
          {FIT.map((t, i) => (
            <RevealItem key={t} delay={i * 0.06} className="flex gap-4 border-b border-white/15 py-5 md:py-6 text-white/85 text-[16px] md:text-[18px] leading-relaxed">
              <Check aria-hidden className="mt-[4px] h-5 w-5 shrink-0" style={{ color: "var(--sw-mint)" }} strokeWidth={3} />
              {t}
            </RevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   9. Calculator
   ============================================================ */

const DEFAULTS = { volume: 2000, minutes: 4, rate: 25, credits: 8, amount: 65 };
type Key = keyof typeof DEFAULTS;
const euro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 2, minimumFractionDigits: 0 });
const count = new Intl.NumberFormat("en-IE", { maximumFractionDigits: 1 });

function Slider({ k, label, min, max, step, v, set }: { k: Key; label: string; min: number; max: number; step: number; v: number; set: (k: Key, n: number) => void }) {
  const p = ((v - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4 text-[15px]">
        <span className="text-[var(--sw-black)]/70">{label}</span>
        <span className="font-head font-bold text-[var(--sw-black)] tabular-nums">{count.format(v)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => set(k, Number(e.target.value))}
        className="akeneo-range mt-3 w-full"
        style={{ ["--fill" as string]: `${p}%` } as React.CSSProperties}
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
  const PANEL = `border ${LINE} rounded-[2px] p-6 md:p-8 flex flex-col`;
  return (
    <section id="calculator" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Annual value calculator</Eyebrow>
            <h2 className={`${H2_LIGHT} mt-4`}>
              What is invoice checking <Hi>costing you?</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${BODY_LIGHT}`}>
            Use your own volumes and costs to explore a year. The example separates the value of staff time from actual supplier corrections.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-12">
          <div className="flex items-center justify-between mb-3 text-[14px]">
            <span className="font-head font-semibold text-[var(--sw-black)]/55">{isDefault ? "Example inputs" : "Your inputs"}</span>
            <button type="button" onClick={() => setV(DEFAULTS)} className="font-head font-semibold text-[var(--sw-blue)] border-b border-[var(--sw-blue)]/40 hover:border-[var(--sw-blue)] transition">
              Reset example
            </button>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-4 md:gap-5">
            <div className={PANEL} style={{ background: LAVENDER }}>
              <h3 className="font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[22px]">Time back for your team</h3>
              <div className="mt-6 grid gap-6">
                <Slider k="volume" label="Invoices per month" min={0} max={10000} step={50} v={v.volume} set={set} />
                <Slider k="minutes" label="Minutes saved per invoice" min={0} max={15} step={0.5} v={v.minutes} set={set} />
                <Slider k="rate" label="Staff cost per hour (€)" min={10} max={80} step={1} v={v.rate} set={set} />
              </div>
              <div className={`mt-auto pt-7`}>
                <div className={`pt-6 border-t ${LINE}`}>
                  <div className="font-head font-bold text-[var(--sw-blue)] text-[38px] md:text-[44px] leading-none tabular-nums tracking-[-0.02em]">{euro.format(capacity)}</div>
                  <div className="mt-2 text-[var(--sw-black)]/65 text-[15px]">
                    value of <strong className="font-semibold text-[var(--sw-black)]">{count.format(hours)}</strong> hours per year
                  </div>
                </div>
              </div>
            </div>
            <div className={PANEL} style={{ background: LAVENDER }}>
              <h3 className="font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[22px]">Supplier bills corrected</h3>
              <div className="mt-6 grid gap-6">
                <Slider k="credits" label="Confirmed corrections per month" min={0} max={50} step={1} v={v.credits} set={set} />
                <Slider k="amount" label="Average accepted reduction (€)" min={0} max={500} step={5} v={v.amount} set={set} />
              </div>
              <div className="mt-auto pt-7">
                <div className={`pt-6 border-t ${LINE}`}>
                  <div className="font-head font-bold text-[var(--sw-blue)] text-[38px] md:text-[44px] leading-none tabular-nums tracking-[-0.02em]">{euro.format(reductions)}</div>
                  <div className="mt-2 text-[var(--sw-black)]/65 text-[15px]">in confirmed reductions per year</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-5 rounded-[2px] bg-[var(--sw-black)] px-6 md:px-8 py-6 md:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="font-head font-bold text-white text-[17px] md:text-[20px]">Gross annual value in this scenario</span>
            <span className="font-head font-bold text-[var(--sw-mint)] text-[42px] md:text-[56px] leading-none tabular-nums tracking-[-0.03em]">{euro.format(capacity + reductions)}</span>
          </div>
          <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[16px] leading-relaxed" aria-live="polite">
            This combines {euro.format(capacity)} of staff time and {euro.format(reductions)} in corrected bills.
          </p>
          <p className="mt-1.5 max-w-[52rem] text-[var(--sw-black)]/55 text-[14px] leading-relaxed">
            Time released becomes a cash saving when it reduces overtime, hiring or other spending. Deduct licence, setup and support costs when you estimate the return.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   10. Getting started: four numbered steps, then the demo offer
   ============================================================ */

export function GettingStarted() {
  return (
    <section id="first-step" className={`relative z-10 ${SECTION_Y}`} style={{ background: LAVENDER }}>
      <div className="wrap w-full">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-12 lg:self-start">
            <Eyebrow>Getting started</Eyebrow>
            <h2 className={`${H2_LIGHT} mt-4`}>
              Start with one supplier and <Hi>one real invoice.</Hi>
            </h2>
            <p className={`mt-5 md:mt-6 ${BODY_LIGHT}`}>
              Choose an invoice your team knows well. The best example is one where somebody had to call the warehouse, check a price or ask what the supplier meant.
            </p>
          </Reveal>
          <ol className="lg:col-span-7 grid gap-4">
            {START.map((s, i) => (
              <RevealItem key={s.title} delay={i * 0.05} className={`bg-white border ${LINE} rounded-[2px] p-6 md:p-7`}>
                  <div className="flex items-center gap-4">
                    <span className={`h-9 w-9 shrink-0 flex items-center justify-center rounded-[2px] border ${LINE} font-head font-bold text-[15px] text-[var(--sw-blue)]`}>{i + 1}</span>
                    <h3 className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[21px] leading-[1.25]">{s.title}</h3>
                  </div>
                  <div className={`mt-5 border-t ${LINE}`}>
                    <p className={`flex gap-3 border-b ${LINE} py-3.5 text-[var(--sw-black)]/80 text-[15px] md:text-[16px] leading-relaxed`}>
                      <Users aria-hidden className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[var(--sw-black)]/40" strokeWidth={1.7} />
                      <span>{s.team}</span>
                    </p>
                    <p className="flex gap-3 pt-3.5 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">
                      <Layers aria-hidden className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[var(--sw-blue)]" strokeWidth={1.7} />
                      <span>{s.us}</span>
                    </p>
                  </div>
              </RevealItem>
            ))}
          </ol>
        </div>

        <Reveal delay={0.05} className="mt-10 md:mt-14 rounded-[2px] bg-[var(--sw-black)] p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
          <div className="max-w-[44rem]">
            <h3 className="font-head font-bold text-white text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.015em]">See it before connecting your ERP</h3>
            <p className="mt-3 text-white/70 text-[16px] leading-relaxed">
              The first call uses example documents. Follow a price change, a short delivery and a different product code, then discuss the suppliers and records that matter
              in your business.
            </p>
          </div>
          <a href="#demo" onClick={scrollToId("demo")} className={`${btnPrimary} self-start md:self-auto whitespace-nowrap`}>
            Book a demo call
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   11. Under the hood
   ============================================================ */

const HOOD_ICONS = [FileText, Search, Boxes, Scale, Database];

function PackVisual() {
  return (
    <div className="mt-8 md:mt-10 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 md:gap-4">
      <div className="border border-white/20 rounded-[2px] px-4 py-4 md:px-5">
        <div className="font-head font-semibold text-[12px] uppercase tracking-[0.08em] text-white/50">Supplier invoice</div>
        <div className="mt-2 font-head font-bold text-white text-[19px] md:text-[22px] leading-tight whitespace-nowrap">10 boxes of 12</div>
      </div>
      <ArrowRight aria-hidden className="h-5 w-5 text-[var(--sw-mint)]" />
      <div className="border border-[var(--sw-mint)]/60 rounded-[2px] px-4 py-4 md:px-5">
        <div className="font-head font-semibold text-[12px] uppercase tracking-[0.08em] text-white/50">Purchase order</div>
        <div className="mt-2 font-head font-bold text-[var(--sw-mint)] text-[19px] md:text-[22px] leading-tight whitespace-nowrap">120 pieces</div>
      </div>
    </div>
  );
}

export function UnderTheHood() {
  return (
    <section id="technology" className={`relative z-10 bg-[var(--sw-black)] ${SECTION_Y}`}>
      <div className="wrap w-full grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow tone="mint">Under the hood</Eyebrow>
          <h2 className={`${H2_DARK} mt-4`}>
            How OperaLayer knows two different lines refer to <Hi tone="mint">the same item</Hi>
          </h2>
          <p className={`mt-5 md:mt-6 ${BODY_DARK}`}>
            Your PO might say 120 pieces. The supplier might write 10 boxes of 12 and use its own item code. OperaLayer has to establish the product and the unit before a price
            comparison means anything.
          </p>
          <PackVisual />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7 self-center border-t border-white/15">
          {HOOD.map((h, i) => {
            const Icon = HOOD_ICONS[i];
            return (
              <details key={h.q} open={i === 0} className="group border-b border-white/15">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 md:py-6 [&::-webkit-details-marker]:hidden">
                  <Icon aria-hidden className="h-5 w-5 shrink-0 text-[var(--sw-mint)]" strokeWidth={1.6} />
                  <span className="flex-1 font-head font-bold text-white text-[17px] md:text-[19px] leading-snug">{h.q}</span>
                  <Plus aria-hidden className="h-5 w-5 shrink-0 text-[var(--sw-mint)] group-open:rotate-45 transition" />
                </summary>
                <p className="pb-6 pl-9 pr-2 md:pr-10 text-white/70 text-[15px] md:text-[16px] leading-relaxed">{h.a}</p>
              </details>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   12. Questions
   ============================================================ */

export function Questions() {
  return (
    <section id="questions" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <div className="wrap w-full grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-12">
          <Eyebrow>Questions</Eyebrow>
          <h2 className={`${H2_LIGHT} mt-4`}>
            Fair questions <Hi>before you start</Hi>
          </h2>
          <a
            href="#demo"
            onClick={scrollToId("demo")}
            className="mt-6 md:mt-8 inline-block font-head font-bold text-[16px] text-[var(--sw-blue)] border-b border-[var(--sw-blue)] py-1 hover:opacity-80 transition"
          >
            Book a demo call
          </a>
        </Reveal>
        <div className="grid gap-10 md:gap-12">
          {FAQ_GROUPS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04}>
              <h3 className="font-head font-bold text-[var(--sw-blue)] text-[13px] uppercase tracking-[0.14em]">{g.group}</h3>
              <div className={`mt-3 border-t ${LINE}`}>
                {g.items.map((x) => (
                  <details key={x.q} className={`group border-b ${LINE}`}>
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-4 md:py-5 [&::-webkit-details-marker]:hidden">
                      <span className="font-head font-bold text-[var(--sw-black)] text-[16px] md:text-[18px] leading-[1.3]">{x.q}</span>
                      <Plus aria-hidden className="h-5 w-5 shrink-0 text-[var(--sw-blue)] group-open:rotate-45 transition" />
                    </summary>
                    <p className="pb-5 pr-2 md:pr-10 max-w-[68ch] text-[15px] md:text-[16px] text-[var(--sw-black)]/70 leading-relaxed">{x.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   13. Book a demo call
   ============================================================ */

export function Demo() {
  return (
    <section id="demo" className={`relative z-10 bg-[var(--sw-black)] ${SECTION_Y}`}>
      <div className="wrap w-full max-w-[760px] mx-auto text-center">
        <Reveal>
          <h2 className={H2_DARK}>
            Bring the invoice that made three people <Hi tone="mint">stop working.</Hi>
          </h2>
          <p className={`mt-5 md:mt-6 ${BODY_DARK}`}>
            See which line OperaLayer would flag, the evidence the reviewer would see, and how an accepted invoice gets back into your ERP.
          </p>
          <p className="mt-3 text-white/60 text-[15px] md:text-[16px] leading-relaxed">
            Start with our example records. You leave knowing which documents, checks and connections to test in your own business.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 md:mt-12 text-left">
          <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" submitText="Book a demo call" />
        </Reveal>
      </div>
    </section>
  );
}
