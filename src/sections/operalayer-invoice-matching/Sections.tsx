"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import { ArrowDown, ArrowRight, Check, ChevronRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { QUICK, PROBLEMS, FULL, STATS, STEPS } from "@/sections/operalayer-invoice-matching/copy";
import { EASE, H2, LEAD, SECTION_Y, Dot, Eyebrow, Hi, Layers, Panels, Reveal, Tabs, btn, layerRatio, layerY, scrollToId } from "@/sections/operalayer-invoice-matching/kit";

/*
 * OperaLayer invoice matching. The OperaLayer logo is three layers; the product compares three records
 * (purchase order, warehouse receipt, supplier invoice). The page draws each record as one of the layers.
 * All visible copy is Anton's, word for word (copy.ts and the strings below).
 */

const ESELO = assetUrl("/operalayer/invoice-matching/eselo-mark.png");
const INSPECT = "ol-im-inspect";

/* ============================================================
   Header
   ============================================================ */

export function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="wrap h-[68px] md:h-[76px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
          <a href="https://scandiweb.com/" aria-label="scandiweb" className="shrink-0 hover:opacity-70 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetUrl("/logos/scandiweb-black.svg")} alt="scandiweb" className="h-[15px] sm:h-4 w-auto block" />
          </a>
          <span aria-hidden className="h-5 w-px bg-[var(--ink)]/20" />
          <a href={assetUrl("/operalayer")} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Layers className="h-[26px] w-auto" />
            <span className="font-head font-semibold text-[17px] tracking-[-0.01em] text-[var(--ink)]">OperaLayer</span>
          </a>
        </div>
        <a
          href="#demo"
          onClick={scrollToId("demo")}
          className="group shrink-0 hidden sm:inline-flex items-center gap-1.5 font-head font-semibold text-[15px] text-[var(--ink)] hover:text-[var(--blue)] transition-colors"
        >
          Book a demo call <ChevronRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   1. Hero: the three records as the logo's three layers
   ============================================================ */

const LIFT = 96;
const ROOM = 70;
/** Top to bottom, as the layers are drawn. */
const RECORDS = ["Supplier invoice INV-2846", "Warehouse receipt GR-1170", "Purchase order PO-1048"];
/** The layer each quick example sets against the invoice: 2 is the purchase order, 1 the warehouse receipt. */
const VERSUS = [2, 1, 2];
const AUTO = 6;

function Diagram({ i }: { i: number }) {
  const q = QUICK[i];
  const vs = VERSUS[i];
  const ys = layerY(LIFT);
  /* The invoice layer lines up for a moment, then slides out: it does not agree with the layer below. */
  const [outFor, setOutFor] = useState(-1);
  useEffect(() => {
    const t = window.setTimeout(() => setOutFor(i), 380);
    return () => clearTimeout(t);
  }, [i]);
  const out = outFor === i;
  return (
    <div className="flex items-stretch h-[230px] sm:h-[320px] lg:h-[clamp(150px,calc(64vh_-_244px),380px)]">
      <div className="h-full shrink-0" style={{ aspectRatio: layerRatio(LIFT, ROOM) }}>
        <Layers lift={LIFT} room={ROOM} slide={[out ? 52 : 0, 0, 0]} fade={[1, vs === 1 ? 1 : 0.25, vs === 2 ? 1 : 0.25]} float className="h-full w-full" />
      </div>
      <div className="relative flex-1 min-w-0">
        {[0, 1, 2].map((n) => {
          const on = n === 0 || n === vs;
          const pair = n === 0 ? q.pair[1] : q.pair[0];
          return (
            <div
              key={n}
              className="absolute left-0 right-0 -translate-y-1/2 flex items-center gap-2.5 sm:gap-3 transition-opacity duration-500"
              style={{ top: `${ys[n] * 100}%`, opacity: on ? 1 : 0.42 }}
            >
              <span aria-hidden className="h-px w-3 sm:w-6 shrink-0 bg-[var(--ink)]/25" />
              <div className="min-w-0">
                <div className="font-body text-[12px] sm:text-[13px] text-[var(--slate)] sm:whitespace-nowrap">{RECORDS[n]}</div>
                {on && (
                  <motion.div key={`${i}-${n}`} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: n === 0 ? 0.45 : 0.1, ease: EASE }} className="mt-1 flex items-baseline gap-2 whitespace-nowrap">
                    <span className="font-body text-[12px] sm:text-[13px] text-[var(--slate)]">{pair.k}</span>
                    <span className={`font-head font-bold text-[19px] sm:text-[24px] lg:text-[clamp(19px,2.9vh,24px)] leading-none tracking-[-0.02em] ${n === 0 ? "text-[var(--red)]" : "text-[var(--ink)]"}`}>{pair.v}</span>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuickExample() {
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const auto = !touched && inView && !reduce;
  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => setI((k) => (k + 1) % QUICK.length), AUTO * 1000);
    return () => clearInterval(t);
  }, [auto]);
  const pick = (k: number) => {
    setTouched(true);
    setI(k);
  };
  const inspect = (e: React.MouseEvent<HTMLElement>) => {
    window.dispatchEvent(new CustomEvent(INSPECT, { detail: i }));
    scrollToId("example")(e);
  };
  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-head font-semibold text-[15px] text-[var(--ink)]">Example invoice</span>
        <span className="font-body text-[13px] text-[var(--slate)]">PO-1048 / INV-2846</span>
      </div>
      <Tabs items={QUICK.map((q) => q.tab)} i={i} set={pick} group="quick" label="Invoice quick examples" progress={auto ? AUTO : undefined} className="mt-3 lg:mt-[clamp(4px,1.6vh,14px)]" />
      <div className="mt-5 lg:mt-[clamp(6px,2.4vh,26px)]">
        <Diagram i={i} />
      </div>
      <div className="mt-5 lg:mt-[clamp(6px,2.4vh,26px)]">
        <Panels i={i} group="quick">
          {QUICK.map((s) => (
            <div key={s.tab}>
              <div className="font-body text-[13px] text-[var(--slate)]">{s.product}</div>
              <div className="mt-1 font-head font-bold text-[var(--ink)] text-[22px] sm:text-[26px] lg:text-[clamp(20px,3.3vh,26px)] leading-[1.15] tracking-[-0.02em]">{s.title}</div>
              <div className="mt-3 lg:mt-[clamp(6px,1.6vh,14px)] grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 gap-x-8 gap-y-3 font-body text-[14.5px] lg:text-[clamp(13.5px,1.9vh,15px)] leading-[1.5] text-[var(--slate)]">
                <p>{s.note}</p>
                <p>
                  <span className="block font-head font-semibold text-[var(--ink)]">Suggested action</span>
                  {s.action}
                </p>
              </div>
            </div>
          ))}
        </Panels>
        <a href="#example" onClick={inspect} className="group mt-4 lg:mt-[clamp(4px,1.8vh,18px)] inline-flex items-center gap-1.5 font-head font-semibold text-[15px] text-[var(--blue)] hover:text-[var(--blue-deep)] transition-colors">
          Inspect this line <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col bg-[var(--lav)]">
      <div className="wrap w-full flex-1 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 lg:gap-12 xl:gap-16 items-center pt-[100px] pb-12 md:pt-[116px] lg:pt-[clamp(72px,10.4vh,120px)] lg:pb-[clamp(10px,3.2vh,48px)]">
        <div>
          <motion.div {...enter(0.05)}>
            <Eyebrow>Invoice matching</Eyebrow>
          </motion.div>
          <motion.h1
            {...enter(0.12)}
            className="mt-4 font-head font-bold text-[var(--ink)] text-[42px] sm:text-[60px] lg:text-[clamp(42px,min(4.3vw,9vh),62px)] leading-[1.02] tracking-[-0.035em]"
          >
            Catch invoice errors
            <span className="block text-[var(--blue)]">before you pay.</span>
          </motion.h1>
          <motion.p {...enter(0.2)} className="mt-5 lg:mt-[clamp(14px,3vh,28px)] max-w-[35rem] font-body text-[var(--ink)]/80 text-[17px] md:text-[20px] lg:text-[clamp(15px,2.3vh,20px)] leading-[1.5]">
            OperaLayer connects your warehouse, accounting and ERP to check every invoice against what you ordered and received. Wrong prices, missing quantities and
            different products reach your team before the bill is approved.
          </motion.p>
          <motion.p {...enter(0.24)} className="mt-3 font-body text-[var(--slate)] text-[15px] leading-[1.5]">
            For wholesalers, distributors and retailers buying stock from many suppliers.
          </motion.p>
          <motion.p {...enter(0.28)} className="mt-5 lg:mt-[clamp(12px,2.6vh,24px)] font-head font-semibold text-[var(--ink)] text-[18px] md:text-[20px] lg:text-[clamp(17px,2.4vh,20px)]">
            Give your team its mornings back.
          </motion.p>
          <motion.div {...enter(0.34)} className="mt-7 lg:mt-[clamp(18px,3.8vh,36px)] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <a href="#demo" onClick={scrollToId("demo")} className={`${btn} w-full sm:w-auto`}>
              Book a demo call <ChevronRight aria-hidden className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#example"
              onClick={scrollToId("example")}
              className="group self-start sm:self-auto inline-flex items-center gap-1.5 font-head font-semibold text-[16px] text-[var(--ink)] hover:text-[var(--blue)] transition-colors"
            >
              See an invoice example <ArrowDown aria-hidden className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div {...enter(0.25)}>
          <QuickExample />
        </motion.div>
      </div>

      {/* One customer, in his words */}
      <div className="wrap w-full">
        <motion.div {...enter(0.5)} className="border-t border-[var(--ink)]/12 py-5 md:py-6 lg:py-[clamp(10px,2.4vh,24px)] flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ESELO} alt="ESELO" className="h-9 w-9 object-contain brightness-0 shrink-0" />
            <div>
              <p className="font-head font-semibold text-[var(--ink)] text-[16px] md:text-[18px] leading-[1.35]">“Our employees smiling again. Two hours per person of ‘monkey work’ gone.”</p>
              <p className="mt-0.5 font-body text-[var(--slate)] text-[13.5px] md:text-[14px]">Māris Renigers, E-business Manager, ESELO</p>
            </div>
          </div>
          <a
            href="#customer-case"
            onClick={scrollToId("customer-case")}
            className="group self-start md:self-auto shrink-0 inline-flex items-center gap-1.5 font-head font-semibold text-[15px] md:text-[16px] text-[var(--blue)] hover:text-[var(--blue-deep)] transition-colors"
          >
            Read one customer’s story <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   2. The problem: three figures
   ============================================================ */

const FIGURES: [string, string][] = [
  ["€300", "on a thousand units"],
  ["92", "100 cartons on paper"],
  ["All three", "get involved"],
];

export function Problem() {
  return (
    <section id="problem" className={`relative bg-white ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className={`${H2} mt-4 max-w-[22ch] text-[var(--ink)]`}>
            A supplier can send you a perfectly good invoice <Hi>for the wrong thing.</Hi>
          </h2>
        </Reveal>
        <div className="mt-12 md:mt-16 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-12 md:gap-0">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={`md:px-9 first:md:pl-0 last:md:pr-0 ${i ? "md:border-l border-[var(--line)]" : ""}`}>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-head font-medium text-[var(--blue)] text-[64px] md:text-[46px] lg:text-[62px] xl:text-[76px] leading-[0.95] tracking-[-0.04em] whitespace-nowrap">{FIGURES[i][0]}</span>
                <span className="font-body text-[var(--slate)] text-[15px]">{FIGURES[i][1]}</span>
              </div>
              <h3 className="mt-7 md:mt-9 font-head font-bold text-[var(--ink)] text-[21px] lg:text-[22px] leading-[1.25] tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-3 font-body text-[var(--slate)] text-[16px] leading-[1.6]">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. Inside an invoice: the three records, line by line
   ============================================================ */

/** The cell that disagrees in each example: [row, column] of Record / Item / Quantity / Unit price. */
const FLAG: [number, number][] = [
  [2, 3],
  [1, 2],
  [2, 1],
];
const ROW_COLS = "md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.25fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]";
const ROW_LAYER = ["po", "rec", "inv"] as const;

function ExamplePanel({ k, active }: { k: number; active: boolean }) {
  const x = FULL[k];
  const [fr, fc] = FLAG[k];
  /* rows run purchase order, receipt, invoice; the layers are drawn invoice, receipt, purchase order */
  const odd = 2 - fr;
  return (
    <div>
      <div className="flex items-center justify-between gap-10">
        <div className="max-w-[46rem]">
          <div className="font-body text-[14px] text-[var(--slate)]">{x.line}</div>
          <h3 className="mt-2 font-head font-bold text-[var(--ink)] text-[26px] md:text-[36px] leading-[1.1] tracking-[-0.025em]">{x.title}</h3>
          <p className="mt-3 md:mt-4 font-body text-[var(--slate)] text-[16px] md:text-[18px] leading-[1.55]">{x.body}</p>
        </div>
        <Layers lift={70} room={64} slide={[0, 1, 2].map((n) => (active && n === odd ? 56 : 0))} className="hidden lg:block h-[168px] w-auto shrink-0" />
      </div>

      <div className="mt-8 md:mt-10 border-t border-[var(--ink)]">
        <div className={`hidden md:grid ${ROW_COLS} gap-x-6 py-3 font-head font-semibold text-[13.5px] text-[var(--slate)] border-b border-[var(--line)]`}>
          {["Record", "Item", "Quantity", "Unit price"].map((h, n) => (
            <span key={h} className={n > 1 ? "text-right" : ""}>
              {h}
            </span>
          ))}
        </div>
        {x.rows.map((r, n) => (
          <div key={r[0]} className={`grid grid-cols-3 ${ROW_COLS} gap-x-6 gap-y-1.5 py-4 md:py-5 border-b border-[var(--line)] items-center`}>
            {r.map((c, m) => {
              const bad = n === fr && m === fc;
              if (m === 0)
                return (
                  <span key={m} className="col-span-3 md:col-span-1 flex items-center gap-3 font-head font-semibold text-[var(--ink)] text-[16px] md:text-[17px]">
                    <Dot layer={ROW_LAYER[n]} />
                    {c}
                  </span>
                );
              return (
                <span key={m} className={`font-body text-[15px] md:text-[17px] leading-[1.35] tabular-nums ${m > 1 ? "md:text-right" : ""} ${bad ? "" : "text-[var(--ink)]/75"}`}>
                  {bad ? <span className="inline-block rounded-[2px] bg-[rgba(224,79,79,0.1)] px-2 py-0.5 font-semibold text-[var(--red)]">{c}</span> : c}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-10 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-7 md:gap-14">
        <div>
          <h4 className="font-head font-bold text-[var(--ink)] text-[17px]">Why it matters</h4>
          <p className="mt-2 font-body text-[var(--slate)] text-[16px] leading-[1.6]">{x.why}</p>
        </div>
        <div>
          <h4 className="font-head font-bold text-[var(--ink)] text-[17px]">Suggested action</h4>
          <p className="mt-2 font-body text-[var(--slate)] text-[16px] leading-[1.6]">{x.action}</p>
        </div>
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
  const x = FULL[i];
  const setHold = (v: boolean) => setHeld((h) => h.map((b, n) => (n === i ? v : b)));
  return (
    <section id="example" className={`relative bg-[var(--lav)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Inside an invoice</Eyebrow>
            <h2 className={`${H2} mt-4 text-[var(--ink)]`}>
              Follow one invoice with <Hi>three different problems.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD} text-[var(--slate)]`}>Switch between the lines. In each example you can see what the supplier billed, what the order says and who can settle the difference.</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-14 bg-white rounded-[2px]">
          <div className="px-5 md:px-10 lg:px-14 pt-5 md:pt-7 flex items-end justify-between gap-6 border-b border-[var(--line)]">
            <Tabs items={FULL.map((f) => f.tab)} i={i} set={setI} group="full" label="Invoice full examples" className="!border-b-0 flex-1 sm:flex-none" />
            <span className="hidden md:block pb-3 font-body text-[14px] text-[var(--slate)]">Example records · INV-2846</span>
          </div>
          <div className="px-5 md:px-10 lg:px-14 py-8 md:py-11 lg:py-12">
            <Panels i={i} group="full">
              {FULL.map((f, k) => (
                <ExamplePanel key={f.tab} k={k} active={k === i} />
              ))}
            </Panels>
          </div>
          <div className="px-5 md:px-10 lg:px-14 py-5 md:py-6 border-t border-[var(--line)] flex flex-col md:flex-row md:items-center gap-4 md:gap-7">
            <div className="flex flex-wrap items-center gap-5">
              {held[i] ? (
                <span className="inline-flex h-12 items-center gap-2 rounded-[2px] border border-[var(--blue)] px-6 font-head font-semibold text-[16px] text-[var(--blue)]">
                  <Check aria-hidden className="h-4 w-4" strokeWidth={3} /> On hold
                </span>
              ) : (
                <button type="button" onClick={() => setHold(true)} className={`${btn} !h-12 !px-6 !text-[16px]`}>
                  {x.hold} <ChevronRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              )}
              {held[i] && (
                <button type="button" onClick={() => setHold(false)} className="font-head font-semibold text-[15px] text-[var(--slate)] underline underline-offset-4 hover:text-[var(--blue)] transition-colors">
                  Reset example
                </button>
              )}
            </div>
            <span role="status" className="font-body font-medium text-[15.5px] leading-[1.45] text-[var(--ink)] min-h-[1.45em]">
              {held[i] ? x.result : ""}
            </span>
          </div>
        </Reveal>
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
    const c = animate(0, to, { duration: reduce ? 0 : 1.4, ease: EASE, onUpdate: setV });
    return () => c.stop();
  }, [run, to, reduce]);
  return <span ref={ref}>{v.toFixed(dec)}</span>;
}

const STAT_NUM = [
  { n: 2, post: " hours per person" },
  { n: 36, post: " seconds" },
  { n: 98.5, dec: 1, post: "%" },
];

export function CustomerCase() {
  return (
    <section id="customer-case" className={`relative bg-[var(--ink)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow dark>One customer’s story</Eyebrow>
            <h2 className={`${H2} mt-4 text-white`}>
              What changed for an <Hi dark>electrical goods distributor</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD} text-white/70`}>
            For one of our customers, electrical goods distributor ESELO, buying from more than 150 suppliers meant working through different document layouts, product codes
            and pack sizes. Purchasing, warehouse and finance now use OperaLayer to compare orders, deliveries and invoices.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 border-t border-white/15">
          {STATS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className={`pt-8 md:pt-10 md:px-9 first:md:pl-0 last:md:pr-0 ${i ? "border-t md:border-t-0 md:border-l border-white/15 mt-8 md:mt-0" : ""}`}>
              <div className="font-head font-medium text-white leading-[0.95] tracking-[-0.04em] whitespace-nowrap">
                <span className="text-[72px] lg:text-[88px]">
                  <Count to={STAT_NUM[i].n} dec={STAT_NUM[i].dec} />
                  {STAT_NUM[i].post === "%" ? "%" : ""}
                </span>
                {STAT_NUM[i].post !== "%" && <span className="text-[22px] lg:text-[26px] tracking-[-0.02em] text-white/70">{STAT_NUM[i].post}</span>}
              </div>
              <div className="mt-5 font-head font-semibold text-[var(--peri)] text-[18px]">{s.label}</div>
              <p className="mt-2 font-body text-white/65 text-[15.5px] leading-[1.6]">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 md:mt-20 border-t border-white/15 pt-10 md:pt-12 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[72px_minmax(0,1fr)] gap-5 md:gap-10 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ESELO} alt="ESELO" className="h-12 w-12 md:h-[72px] md:w-[72px] object-contain brightness-0 invert" />
          <figure>
            <blockquote className="max-w-[36ch] font-head font-bold text-white text-[24px] md:text-[34px] leading-[1.25] tracking-[-0.02em]">
              “From demo to live in weeks. Fastest implementation we have experienced so far for such a complex system and functionality.”
            </blockquote>
            <figcaption className="mt-5 font-body text-white/60 text-[15px]">Māris Renigers, E-business Manager, ESELO</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   5. How it works: the layers come together, step by step
   ============================================================ */

/** Per step: how far apart the layers sit, which are present, and whether the invoice is out of line. */
const STEP_ART = [
  { lift: 70, fade: [1, 0.14, 0.14], slide: 0 },
  { lift: 70, fade: [1, 0.14, 1], slide: 0 },
  { lift: 70, fade: [1, 1, 1], slide: 44 },
  { lift: 0, fade: [1, 1, 1], slide: 0 },
];

export function HowItWorks() {
  return (
    <section id="solution" className={`relative bg-white ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={`${H2} mt-4 text-[var(--ink)]`}>
              From the supplier inbox to an invoice <Hi>you can approve.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD} text-[var(--slate)]`}>
            OperaLayer reads the documents, finds the purchase order in your ERP and compares the lines. Your rules decide what can move ahead and what needs a buyer, a
            warehouse colleague or an accountant.
          </p>
        </Reveal>
        <ol className="mt-12 md:mt-16 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {STEPS.map((t, n) => {
            const a = STEP_ART[n];
            return (
              <Reveal as="li" key={t} delay={n * 0.08} className="list-none">
                <div className="h-[150px] flex items-center">
                  <Layers lift={a.lift} room={50} slide={[a.slide, 0, 0]} fade={a.fade} className={a.lift ? "h-[150px] w-auto" : "h-[118px] w-auto"} />
                </div>
                <div className="mt-6 border-t border-[var(--ink)] pt-5">
                  <span className="font-head font-medium text-[var(--blue)] text-[44px] leading-none tracking-[-0.03em]">{n + 1}</span>
                  <p className="mt-4 font-body text-[var(--ink)]/80 text-[16px] leading-[1.6]">{t}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
