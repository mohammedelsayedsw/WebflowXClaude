"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import { ArrowDown, ArrowRight, Camera, Check, ChevronRight, FileText, Link2, Mail, Package, Receipt, ShoppingCart, Upload } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { QUICK, PROBLEMS, FULL, STATS, STEPS } from "@/sections/operalayer-invoice-matching/copy";
import { EASE, H2, LEAD, SECTION_Y, Eyebrow, Hi, Logo, Panels, Reveal, Stage, Swipe, btn, btnGhost, onTabKeys, scrollToId } from "@/sections/operalayer-invoice-matching/kit";
import { Bad, LINES, Mark, Status, Window } from "@/sections/operalayer-invoice-matching/app";

/*
 * OperaLayer invoice matching: a product-led page. The app is drawn once (app.tsx) and shown doing its job:
 * checking the example invoice against the order and the receipt, and saying in a sentence what is wrong on each line.
 * Copy is Anton's (copy.ts and the strings below), except where a comment says otherwise.
 */

const ESELO = assetUrl("/operalayer/invoice-matching/eselo-mark.png");
/* Māris Renigers of ESELO, who gave both quotes: a square for the quote strip, a portrait for the case study. */
const MARIS_SQ = assetUrl("/operalayer/invoice-matching/maris-renigers-sq.jpg");
const MARIS = assetUrl("/operalayer/invoice-matching/maris-renigers.jpg");
const INSPECT = "ol-im-inspect";

/* ============================================================
   Header
   ============================================================ */

const LINKS = [
  { id: "example", label: "Invoice example" },
  { id: "how", label: "How it works" },
  { id: "customer-case", label: "Case studies" },
  { id: "calculator", label: "Calculator" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b transition-[background-color,border-color] duration-300 ${scrolled ? "bg-white/85 backdrop-blur-md border-[var(--line)]" : "bg-white/0 border-transparent"}`}>
      <div className="wrap h-[68px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 min-w-0">
          <a href="https://scandiweb.com/" aria-label="scandiweb" className="shrink-0 hover:opacity-70 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetUrl("/logos/scandiweb-black.svg")} alt="scandiweb" className="h-[14px] sm:h-[15px] w-auto block" />
          </a>
          <span aria-hidden className="h-5 w-px bg-[var(--ink)]/15" />
          {/* stays on this page: the mark takes you back to the top */}
          <a href="#top" onClick={scrollToId("top", 0)} aria-label="OperaLayer, back to the top" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo className="h-[24px] w-auto" />
            <span className="font-head font-semibold text-[17px] tracking-[-0.01em] text-[var(--ink)] max-[519px]:hidden">OperaLayer</span>
          </a>
        </div>
        <nav aria-label="On this page" className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={scrollToId(l.id)} className="font-body font-medium text-[14.5px] text-[var(--t2)] hover:text-[var(--ink)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#demo" onClick={scrollToId("demo")} className={`${btn} !h-10 !px-4 !text-[14.5px] shrink-0`}>
          Book a demo call
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   1. Hero: the app reads the example invoice and flags three lines
   ============================================================ */

const AUTO = 5.5;
const COLS = "grid-cols-[24px_minmax(0,1fr)_auto] sm:grid-cols-[34px_minmax(0,1.5fr)_minmax(0,0.85fr)_minmax(0,0.6fr)_minmax(0,1.1fr)]";

/**
 * One screen, two parts. On top, what OperaLayer found on the open line, as a sentence.
 * Under it, the three lines of the example invoice; each one opens its own finding.
 */
function ReviewDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.25 });
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  /* 0 the invoice is being checked, 1 its three lines are flagged, 2 one of them is open */
  const [phase, setPhase] = useState(0);
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!seen) return;
    if (reduce) {
      const t = window.setTimeout(() => setPhase(2), 0);
      return () => clearTimeout(t);
    }
    const ts = [window.setTimeout(() => setPhase(1), 1200), window.setTimeout(() => setPhase(2), 2000)];
    return () => ts.forEach(clearTimeout);
  }, [seen, reduce]);
  const auto = phase === 2 && !touched && inView && !reduce;
  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => setI((k) => (k + 1) % QUICK.length), AUTO * 1000);
    return () => clearInterval(t);
  }, [auto]);
  const pick = (k: number) => {
    setTouched(true);
    setPhase(2);
    setI(k);
  };
  const inspect = (e: React.MouseEvent<HTMLElement>) => {
    window.dispatchEvent(new CustomEvent(INSPECT, { detail: i }));
    scrollToId("example")(e);
  };
  const PAD = "px-4 sm:px-8 lg:px-10";
  return (
    <div ref={ref}>
      <Window
        brand
        crumbs={["Invoices", "INV-2846"]}
        right={
          phase < 1 ? (
            <Status tone="idle" pulse>
              Checking
            </Status>
          ) : (
            <Status tone="review">Needs review</Status>
          )
        }
      >
        {/* what was found on the open line */}
        <div className={`relative ${PAD} pt-6 pb-6 sm:pt-9 sm:pb-8 lg:pt-10 lg:pb-9`}>
          <motion.div aria-hidden initial={false} animate={{ opacity: phase < 2 ? 1 : 0 }} transition={{ duration: 0.3 }} className={`pointer-events-none absolute inset-0 flex items-center ${PAD}`}>
            <Status tone="idle" pulse>
              Checking against the order and the receipt
            </Status>
          </motion.div>
          <motion.div initial={false} animate={{ opacity: phase === 2 ? 1 : 0, y: phase === 2 ? 0 : 10 }} transition={{ duration: 0.5, ease: EASE }}>
            <Panels i={i} group="quick">
              {QUICK.map((s, k) => {
                const parts = s.title.split(". ");
                return (
                  <div key={s.tab} className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] gap-5 md:gap-10 lg:gap-14 md:items-center">
                    <div>
                      <div className="font-body font-medium text-[12.5px] sm:text-[13.5px] text-[var(--accent)]">
                        {s.tab} <span className="text-[var(--t3)]">· {s.product}</span>
                      </div>
                      {/* the two halves of the mismatch, one under the other; the billed one is the one in question */}
                      <div className="mt-2 sm:mt-3 font-head font-bold text-[var(--ink)] text-[26px] sm:text-[38px] lg:text-[46px] leading-[1.1] tracking-[-0.03em]">
                        {parts.map((p, n) => (
                          <span key={p} className={`block ${/billed/.test(p) ? "text-[var(--red)]" : ""}`}>
                            {n < parts.length - 1 ? `${p}.` : p}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 sm:mt-4 font-body text-[14.5px] sm:text-[17px] leading-[1.5] text-[var(--t2)]">{s.note}</p>
                    </div>
                    {/* what to do about it */}
                    <div className="rounded-[2px] bg-[var(--canvas)] border border-[var(--line)] p-4 sm:p-5 lg:p-6">
                      <div className="font-head font-semibold text-[14px] sm:text-[15px] text-[var(--ink)]">Suggested action</div>
                      <p className="mt-1.5 font-body text-[14px] sm:text-[15.5px] leading-[1.5] text-[var(--t2)]">{s.action}</p>
                      <a
                        href="#example"
                        onClick={inspect}
                        tabIndex={phase === 2 && k === i ? 0 : -1}
                        className="group mt-3.5 sm:mt-4 inline-flex items-center gap-1.5 font-head font-semibold text-[14.5px] sm:text-[15px] text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors"
                      >
                        Inspect this line <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </Panels>
          </motion.div>
        </div>

        {/* the invoice's lines */}
        <div className="border-t border-[var(--line)]">
          <div className={`grid ${COLS} gap-x-3 ${PAD} py-2.5 bg-[var(--canvas)] border-b border-[var(--line)] font-body font-medium text-[11.5px] sm:text-[12px] text-[var(--t3)]`}>
            <span>Line</span>
            <span>Example invoice</span>
            <span className="max-sm:hidden">Qty</span>
            <span className="max-sm:hidden">Unit price</span>
            <span>Problem</span>
          </div>
          <div role="tablist" aria-label="Invoice quick examples">
            {LINES.map((r, k) => {
              const on = phase === 2 && k === i;
              const flagged = phase >= 1;
              return (
                <button
                  key={r.n}
                  id={`quick-tab-${k}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls={`quick-panel-${k}`}
                  aria-label={QUICK[k].tab}
                  tabIndex={on || (phase < 2 && k === 0) ? 0 : -1}
                  onClick={() => pick(k)}
                  onKeyDown={(e) => onTabKeys(e, k, LINES.length, pick, "quick", true)}
                  className={`relative w-full grid ${COLS} gap-x-3 items-center ${PAD} py-3.5 sm:py-4 border-b last:border-b-0 border-[var(--line)] text-left font-body text-[13px] sm:text-[14.5px] tabular-nums transition-colors ${
                    on ? "bg-[rgba(42,85,245,0.06)]" : "hover:bg-[var(--canvas)]"
                  }`}
                >
                  {on && <motion.span layoutId="quick-bar" className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)]" transition={{ duration: 0.3, ease: EASE }} />}
                  <span className="text-[var(--t3)]">{r.n}</span>
                  <span className="min-w-0 truncate font-medium text-[var(--ink)]">{r.flag === "item" && flagged ? <Bad className="max-w-full truncate align-bottom">{r.item}</Bad> : r.item}</span>
                  <span className="text-[var(--t2)] max-sm:hidden">{r.flag === "qty" && flagged ? <Bad>{r.qty}</Bad> : r.qty}</span>
                  <span className="text-[var(--t2)] max-sm:hidden">{r.flag === "price" && flagged ? <Bad>{r.price}</Bad> : r.price}</span>
                  <span className="min-w-0">{flagged ? <Status tone="bad" className="sm:!text-[13.5px]">{FULL[k].tab}</Status> : <span className="ol-pulse inline-block h-1.5 w-1.5 rounded-[1px] bg-[var(--t3)]" />}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Window>
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
    <section id="top" className="relative min-h-[100svh] pt-[68px] pb-[clamp(40px,6vh,72px)]">
      <div className="wrap w-full text-center pt-[clamp(24px,5.4vh,64px)]">
        <motion.div {...enter(0.05)}>
          <Eyebrow>Invoice matching</Eyebrow>
        </motion.div>
        <motion.h1 {...enter(0.12)} className="mt-4 font-head font-bold text-[var(--ink)] text-[42px] sm:text-[60px] lg:text-[clamp(50px,min(5.4vw,9.4vh),80px)] leading-[1] tracking-[-0.04em]">
          Catch invoice errors
          <span className="block text-[var(--accent)]">before you pay.</span>
        </motion.h1>
        <motion.p {...enter(0.2)} className="mx-auto mt-5 lg:mt-[clamp(14px,2.6vh,26px)] max-w-[47rem] font-body text-[var(--t2)] text-[17px] md:text-[19px] lg:text-[clamp(16px,2.2vh,20px)] leading-[1.5]">
          OperaLayer connects your warehouse, accounting and ERP to check every invoice against what you ordered and received. Wrong prices, missing quantities and
          different products reach your team before the bill is approved. <span className="font-semibold text-[var(--ink)]">Give your team its mornings back.</span>
        </motion.p>
        <motion.div {...enter(0.28)} className="mt-7 lg:mt-[clamp(18px,3.2vh,32px)] flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#demo" onClick={scrollToId("demo")} className={`${btn} w-full sm:w-auto`}>
            Book a demo call <ChevronRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#example" onClick={scrollToId("example")} className={`${btnGhost} w-full sm:w-auto`}>
            See an invoice example <ArrowDown aria-hidden className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
        <motion.p {...enter(0.34)} className="mt-4 font-body text-[var(--t3)] text-[14px]">
          For wholesalers, distributors and retailers buying stock from many suppliers.
        </motion.p>
      </div>

      <motion.div {...enter(0.4)} className="pt-9 lg:pt-[clamp(28px,5vh,56px)]">
        <div className="wrap w-full">
          <Stage className="px-3 pt-3 pb-3 sm:px-8 sm:pt-10 sm:pb-10 lg:px-16 lg:pt-[clamp(28px,5.4vh,56px)] lg:pb-14">
            <ReviewDemo />
          </Stage>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   One customer, in his words
   ============================================================ */

export function Proof() {
  return (
    <section aria-label="What our customer says" className="relative">
      <div className="wrap w-full">
        <Reveal className="border-y border-[var(--line)] py-6 md:py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <div className="flex items-center gap-4 md:gap-5 flex-1 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MARIS_SQ} alt="Māris Renigers" width={400} height={400} loading="lazy" className="h-16 w-16 md:h-[72px] md:w-[72px] rounded-[2px] object-cover shrink-0" />
            <div className="min-w-0">
              <p className="font-head font-semibold text-[var(--ink)] text-[17px] md:text-[20px] leading-[1.35]">“Our employees smiling again. Two hours per person of ‘monkey work’ gone.”</p>
              <p className="mt-2 flex items-center gap-2.5 font-body text-[var(--t3)] text-[14px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ESELO} alt="ESELO" className="h-6 w-6 object-contain brightness-0 shrink-0" />
                Māris Renigers, E-business Manager, ESELO
              </p>
            </div>
          </div>
          <a href="#customer-case" onClick={scrollToId("customer-case")} className="group self-start md:self-auto shrink-0 inline-flex items-center gap-1.5 font-head font-semibold text-[16px] text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors">
            Read the case study <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   2. The problem: three cards, each showing it as the app does
   ============================================================ */

const CROP = "w-full bg-white rounded-[2px] font-body text-[13px] text-[var(--ink)] shadow-[0_24px_48px_-28px_rgba(15,19,48,0.5),0_0_0_1px_rgba(15,19,48,0.06)]";

function PriceCrop() {
  return (
    <div className={CROP}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)]">
        <span className="flex items-center gap-2.5">
          <ShoppingCart aria-hidden className="h-4 w-4 text-[var(--t3)]" strokeWidth={1.75} /> Purchase order
        </span>
        <span className="font-medium tabular-nums">€4.80</span>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)]">
        <span className="flex items-center gap-2.5">
          <FileText aria-hidden className="h-4 w-4 text-[var(--t3)]" strokeWidth={1.75} /> Supplier invoice
        </span>
        <Bad className="tabular-nums">€5.10</Bad>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-[var(--t2)]">
        <span>On 1,000 units</span>
        <span className="font-head font-semibold text-[17px] text-[var(--red)] tabular-nums">€300</span>
      </div>
    </div>
  );
}

function ShortCrop() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.6 });
  const bar = (label: string, value: string, pct: number, short: boolean) => (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-[var(--t2)]">{label}</span>
        <span className={`font-head font-semibold text-[17px] tabular-nums ${short ? "text-[var(--red)]" : "text-[var(--ink)]"}`}>{value}</span>
      </div>
      <div className="mt-2 h-[6px] rounded-[1px] bg-[var(--line)] overflow-hidden flex">
        <motion.div className="h-full" style={{ background: short ? "var(--green)" : "var(--ink)" }} initial={{ width: 0 }} animate={{ width: run ? `${pct}%` : 0 }} transition={{ duration: 1, delay: short ? 0.25 : 0, ease: EASE }} />
        {short && <div className="h-full flex-1 bg-[repeating-linear-gradient(135deg,var(--red)_0_3px,transparent_3px_6px)]" />}
      </div>
    </div>
  );
  return (
    <div ref={ref} className={`${CROP} p-4 grid gap-4`}>
      {bar("Billed", "100 cartons", 100, false)}
      {bar("Received", "92 cartons", 92, true)}
    </div>
  );
}

function PeopleCrop() {
  const who: [typeof ShoppingCart, string, string][] = [
    [ShoppingCart, "The buyer", "knows the codes"],
    [Package, "Receiving", "has the count"],
    [Receipt, "Accounting", "has the invoice"],
  ];
  return (
    <div className={CROP}>
      {who.map(([Icon, t, has], n) => (
        <div key={t} className={`flex items-center gap-3 px-4 py-3 ${n ? "border-t border-[var(--line)]" : ""}`}>
          <Icon aria-hidden className="h-4 w-4 text-[var(--t3)]" strokeWidth={1.75} />
          <span className="font-medium">{t}</span>
          <span className="ml-auto text-[var(--t2)]">{has}</span>
        </div>
      ))}
    </div>
  );
}

const CROPS = [PriceCrop, ShortCrop, PeopleCrop];

export function Problem() {
  return (
    <section id="problem" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            A supplier can send you a perfectly good invoice{" "}
            <span className="xl:block">
              <Hi>for the wrong thing.</Hi>
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.06} className="mt-8 md:mt-14">
          <Swipe
            label="The problem"
            until="lg"
            className="lg:grid lg:grid-cols-3 lg:gap-6"
            items={PROBLEMS.map((p, i) => {
              const C = CROPS[i];
              return (
                <div key={p.title} className="flex flex-col">
                  <Stage soft className="h-[196px] md:h-[212px] flex items-center px-5 lg:px-7 [&>div]:w-full">
                    <C />
                  </Stage>
                  <h3 className="mt-5 md:mt-6 font-head font-bold text-[var(--ink)] text-[20px] lg:text-[23px] leading-[1.22] tracking-[-0.015em]">{p.title}</h3>
                  <p className="mt-2.5 md:mt-3 font-body text-[var(--t2)] text-[15.5px] md:text-[16px] leading-[1.6]">{p.body}</p>
                </div>
              );
            })}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   3. Inside an invoice: the three records side by side
   ============================================================ */

/** The cell that disagrees in each example: [record, field] where fields are Item / Quantity / Unit price. */
const FLAG: [number, number][] = [
  [2, 2],
  [1, 1],
  [2, 0],
];
const FIELDS = ["Item", "Quantity", "Unit price"];
const REC_ICONS = [ShoppingCart, Package, FileText];

function Records({ k }: { k: number }) {
  const x = FULL[k];
  const [fr, ff] = FLAG[k];
  return (
    <Swipe
      inset
      label="Records"
      className="md:grid md:grid-cols-3 md:gap-3"
      items={x.rows.map((r, n) => {
        const Icon = REC_ICONS[n];
        const cut = r[0].lastIndexOf(" ");
        const odd = n === fr;
        return (
          <div key={r[0]} className={`bg-white rounded-[2px] border ${odd ? "border-[var(--red)]" : "border-[var(--line)]"} shadow-[0_14px_30px_-22px_rgba(15,19,48,0.4)]`}>
            <div className="px-4 pt-4 pb-3.5 border-b border-[var(--line)]">
              <div className="flex items-center gap-2 font-body text-[12px] text-[var(--t3)]">
                <Icon aria-hidden className="h-3.5 w-3.5" strokeWidth={1.75} />
                {r[0].slice(0, cut)}
              </div>
              <div className="mt-1 font-head font-semibold text-[17px] text-[var(--ink)] tracking-[-0.01em]">{r[0].slice(cut + 1)}</div>
            </div>
            <dl className="px-4 py-1">
              {FIELDS.map((f, m) => {
                const bad = odd && m === ff;
                const val = r[m + 1];
                const blank = val === "Colour unrecorded";
                return (
                  <div key={f} className={`flex items-start justify-between gap-2 py-2.5 ${m ? "border-t border-[var(--line)]" : ""}`}>
                    <div className="min-w-0">
                      <dt className="font-body text-[11.5px] text-[var(--t3)]">{f}</dt>
                      <dd className={`mt-0.5 font-body font-medium text-[13.5px] leading-[1.3] tabular-nums ${bad ? "text-[var(--red)]" : blank ? "text-[var(--t3)]" : "text-[var(--ink)]"}`}>{val}</dd>
                    </div>
                    <Mark v={blank ? null : !bad} className="mt-3.5 shrink-0" />
                  </div>
                );
              })}
            </dl>
          </div>
        );
      })}
    />
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
    <section id="example" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="mx-auto max-w-[52rem] text-center">
          <Eyebrow>Inside an invoice</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            Follow one invoice with <Hi>three different problems.</Hi>
          </h2>
          <p className={`${LEAD} mt-5 mx-auto max-w-[40rem]`}>Switch between the lines. In each example you can see what the supplier billed, what the order says and who can settle the difference.</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-9 md:mt-12">
          <Stage className="px-2.5 pb-2.5 pt-3 sm:px-8 sm:pb-10 sm:pt-7 lg:px-16 lg:pb-14 lg:pt-8">
            <div role="tablist" aria-label="Invoice full examples" className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-wrap sm:justify-center sm:gap-2">
              {FULL.map((f, k) => (
                <button
                  key={f.tab}
                  id={`full-tab-${k}`}
                  role="tab"
                  aria-selected={k === i}
                  aria-controls={`full-panel-${k}`}
                  tabIndex={k === i ? 0 : -1}
                  onClick={() => setI(k)}
                  onKeyDown={(e) => onTabKeys(e, k, FULL.length, setI, "full")}
                  className={`min-h-11 px-2 sm:px-4 py-1.5 rounded-[2px] font-head font-semibold text-[13px] leading-[1.15] sm:text-[15px] transition-colors ${k === i ? "bg-white text-[var(--ink)]" : "bg-white/15 text-white hover:bg-white/25"}`}
                >
                  {f.tab}
                </button>
              ))}
            </div>

            <Window crumbs={["Invoices", "INV-2846", x.line]} right={<Status tone={held[i] ? "hold" : "review"}>{held[i] ? "On hold" : "Needs review"}</Status>} className="mt-3 sm:mt-7">
              <Panels i={i} group="full" collapse>
                {FULL.map((f, k) => (
                  <div key={f.tab}>
                    <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)]">
                      <div className="p-5 md:p-8 lg:p-10 flex flex-col justify-center">
                        <h3 className="font-head font-bold text-[var(--ink)] text-[26px] md:text-[34px] leading-[1.08] tracking-[-0.03em] text-balance">{f.title}</h3>
                        <p className="mt-4 font-body text-[var(--t2)] text-[15.5px] md:text-[17px] leading-[1.55]">{f.body}</p>
                      </div>
                      <div className="bg-[var(--canvas)] border-t lg:border-t-0 lg:border-l border-[var(--line)] p-4 md:p-6 lg:p-8">
                        <Records k={k} />
                      </div>
                    </div>
                    <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 border-t border-[var(--line)]">
                      <div className="p-5 md:px-8 md:py-7 lg:px-10">
                        <h4 className="font-head font-semibold text-[var(--ink)] text-[16px]">Why it matters</h4>
                        <p className="mt-2 font-body text-[var(--t2)] text-[15px] md:text-[15.5px] leading-[1.55]">{f.why}</p>
                      </div>
                      <div className="p-5 md:px-8 md:py-7 lg:px-10 border-t md:border-t-0 md:border-l border-[var(--line)]">
                        <h4 className="font-head font-semibold text-[var(--ink)] text-[16px]">Suggested action</h4>
                        <p className="mt-2 font-body text-[var(--t2)] text-[15px] md:text-[15.5px] leading-[1.55]">{f.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Panels>
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 px-5 md:px-8 lg:px-10 py-4 border-t border-[var(--line)]">
                <span role="status" className="flex-1 flex items-start gap-2 font-body font-medium text-[14.5px] leading-[1.45] text-[var(--ink)] min-h-[21px]">
                  {held[i] && (
                    <>
                      <Check aria-hidden className="h-4 w-4 mt-[3px] shrink-0 text-[var(--accent)]" strokeWidth={3} />
                      {x.result}
                    </>
                  )}
                </span>
                <div className="flex items-center gap-2.5 shrink-0">
                  {held[i] && (
                    <button type="button" onClick={() => setHold(false)} className={`${btnGhost} !h-11 !px-4 !text-[14.5px]`}>
                      Reset example
                    </button>
                  )}
                  <button type="button" disabled={held[i]} onClick={() => setHold(true)} className={`${btn} !h-11 !px-5 !text-[14.5px] disabled:opacity-40 disabled:cursor-default disabled:hover:bg-[var(--accent)]`}>
                    {x.hold}
                  </button>
                </div>
              </div>
            </Window>
          </Stage>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   4. How it works: four steps, each with its screen
   ============================================================ */

const TILE = "w-full bg-white rounded-[2px] font-body text-[12.5px] text-[var(--ink)] shadow-[0_20px_40px_-26px_rgba(15,19,48,0.5),0_0_0_1px_rgba(15,19,48,0.06)]";

function StepRead() {
  const docs: [typeof Mail, string, string][] = [
    [Mail, "Invoice", "inbox"],
    [Upload, "Delivery note", "upload"],
    [Camera, "CMR", "photo"],
  ];
  return (
    <div className={TILE}>
      {docs.map(([Icon, t, via], n) => (
        <div key={t} className={`flex items-center gap-2.5 px-3.5 py-[9px] ${n ? "border-t border-[var(--line)]" : ""}`}>
          <Icon aria-hidden className="h-[15px] w-[15px] text-[var(--t3)]" strokeWidth={1.75} />
          <span className="font-medium">{t}</span>
          <span className="ml-auto text-[var(--t3)]">{via}</span>
        </div>
      ))}
    </div>
  );
}

function StepLink() {
  return (
    <div className={TILE}>
      <div className="flex items-center gap-2.5 px-3.5 py-[9px] border-b border-[var(--line)]">
        <ShoppingCart aria-hidden className="h-[15px] w-[15px] text-[var(--accent)]" strokeWidth={1.75} />
        <span className="font-medium">PO-1048</span>
        <Check aria-hidden className="ml-auto h-4 w-4 text-[var(--green)]" strokeWidth={2.75} />
      </div>
      {["supplier codes", "packs", "units"].map((t, n) => (
        <div key={t} className={`flex items-center gap-2.5 px-3.5 py-[7px] ${n ? "border-t border-[var(--line)]" : ""}`}>
          <Link2 aria-hidden className="h-[14px] w-[14px] text-[var(--t3)]" strokeWidth={1.75} />
          <span className="text-[var(--t2)]">{t}</span>
          <Check aria-hidden className="ml-auto h-4 w-4 text-[var(--green)]" strokeWidth={2.75} />
        </div>
      ))}
    </div>
  );
}

function StepCheck() {
  const rows: [string, boolean][] = [
    ["prices", false],
    ["quantities", true],
    ["item details", true],
    ["warehouse count", true],
  ];
  return (
    <div className={TILE}>
      {rows.map(([t, ok], n) => (
        <div key={t} className={`flex items-center justify-between px-3.5 py-[7px] ${n ? "border-t border-[var(--line)]" : ""}`}>
          <span className={ok ? "text-[var(--t2)]" : "font-medium text-[var(--red)]"}>{t}</span>
          <Mark v={ok} />
        </div>
      ))}
    </div>
  );
}

function StepSend() {
  return (
    <div className={TILE}>
      <div className="flex items-center justify-between px-3.5 py-[9px] border-b border-[var(--line)]">
        <span className="font-medium">INV-2846</span>
        <Status tone="review">Needs review</Status>
      </div>
      <div className="px-3.5 py-3 grid gap-2">
        <span className="flex items-center justify-center h-8 rounded-[2px] border border-[#cfd3e3] font-medium">Review</span>
        <span className="flex items-center justify-center gap-1.5 h-8 rounded-[2px] bg-[var(--accent)] text-white font-medium">
          Send to the ERP <ArrowRight aria-hidden className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

const STEP_TILES = [StepRead, StepLink, StepCheck, StepSend];
/* Short names for the four steps (ours); the sentence under each one is Anton's. */
const STEP_TITLES = ["Upload the invoice", "Match it to your order", "Compare every line", "Review and send to the ERP"];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [k, setK] = useState(0);
  useEffect(() => {
    if (!inView || reduce) return;
    const t = window.setInterval(() => setK((v) => (v + 1) % 4), 2400);
    return () => clearInterval(t);
  }, [inView, reduce]);
  return (
    <section id="how" className={`relative bg-[var(--canvas)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            From the supplier inbox to an invoice{" "}
            <span className="xl:block">
              <Hi>you can approve.</Hi>
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.06} className="mt-8 md:mt-14">
          <div ref={ref}>
            <Swipe
              label="How it works"
              className="md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-5"
              items={STEPS.map((t, n) => {
                const T = STEP_TILES[n];
                const on = !reduce && k === n;
                return (
                  <div key={t} className="h-full bg-white rounded-[2px] border border-[var(--line)] flex flex-col">
                    <div className="relative h-[196px] overflow-hidden flex items-center px-5" style={{ background: "var(--stage-soft)" }}>
                      <motion.div aria-hidden className="absolute inset-0" style={{ background: "var(--stage)" }} initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.7 }} />
                      <div className="relative w-full">
                        <T />
                      </div>
                    </div>
                    <div className="p-5 lg:p-6 flex-1">
                      <h3 className={`font-head font-bold text-[19px] md:text-[20px] leading-[1.2] tracking-[-0.015em] transition-colors duration-500 ${on ? "text-[var(--accent)]" : "text-[var(--ink)]"}`}>{STEP_TITLES[n]}</h3>
                      <p className="mt-2.5 font-body text-[var(--t2)] text-[15.5px] md:text-[16px] leading-[1.55]">{t}</p>
                    </div>
                  </div>
                );
              })}
            />
          </div>
        </Reveal>
        {/* what the four steps add up to, said once they have been seen */}
        <Reveal delay={0.1} className="mt-8 md:mt-14">
          <p className="max-w-[62rem] font-head font-medium text-[var(--ink)] text-[19px] md:text-[24px] lg:text-[26px] leading-[1.4] tracking-[-0.015em] text-pretty">
            OperaLayer reads the documents, finds the purchase order in your ERP and compares the lines. Your rules decide what can move ahead and what needs a buyer, a
            warehouse colleague or an accountant.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   5. Case study
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

/** Dashes that travel along a connector, so the picture reads left to right. */
function Wire({ d, className = "" }: { d: string[]; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 56 100" preserveAspectRatio="none" className={`h-full w-full overflow-visible ${className}`}>
      {d.map((p) => (
        <g key={p} fill="none" vectorEffect="non-scaling-stroke">
          <path d={p} stroke="#d5d9e8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d={p} stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 13" className="ol-wire" vectorEffect="non-scaling-stroke" />
        </g>
      ))}
    </svg>
  );
}

const FLOW_DOCS: [typeof Mail, string, string][] = [
  [Mail, "Invoice", "inbox"],
  [Upload, "Delivery note", "upload"],
  [Camera, "CMR", "photo"],
];
/* Matching accuracy over the first two weeks, from the customer's account. */
const ACCURACY: [string, number][] = [
  ["At the start", 69],
  ["Week 1", 87],
  ["Week 2", 98.5],
];

/**
 * The customer's three figures (copy.ts STATS) drawn as what happens to a supplier document:
 * it comes in, OperaLayer matches it, it is posted, and the team gets its time back.
 */
function CaseFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.35 });
  const [hours, seconds, accuracy] = STATS;
  const STEP = "font-head font-semibold text-[14.5px] text-[var(--ink)]";
  const NUM = "ol-display font-head text-[var(--ink)] text-[44px] sm:text-[52px] leading-none";
  const step = (n: number, t: string) => (
    <div className={STEP}>
      <span className="mr-2 text-[var(--accent)]">{n}</span>
      {t}
    </div>
  );
  return (
    <div ref={ref} className="bg-white text-[var(--ink)] rounded-[2px] p-5 sm:p-8 lg:p-10 shadow-[0_50px_100px_-50px_rgba(15,19,48,0.75)]">
      <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.9fr)_56px_minmax(0,1.2fr)_56px_minmax(0,1.15fr)] lg:grid-rows-[auto_1fr] gap-y-4 lg:gap-y-5">
        {/* 1. what comes in */}
        <div className="lg:col-start-1 lg:row-start-1">{step(1, "Documents from 150+ suppliers")}</div>
        <ul className="lg:col-start-1 lg:row-start-2 grid lg:grid-rows-3 border-t border-[var(--line)] font-body text-[15px]">
          {FLOW_DOCS.map(([Icon, t, via]) => (
            <li key={t} className="flex items-center gap-3 border-b border-[var(--line)] py-3.5 lg:py-0 lg:pr-2">
              <Icon aria-hidden className="h-[17px] w-[17px] text-[var(--t3)]" strokeWidth={1.75} />
              <span className="font-medium">{t}</span>
              <span className="ml-auto text-[13.5px] text-[var(--t3)]">{via}</span>
            </li>
          ))}
        </ul>
        <div className="max-lg:hidden lg:col-start-2 lg:row-start-2">
          <Wire d={["M0 16.67 C 30 16.67, 26 50, 56 50", "M0 50 L 56 50", "M0 83.33 C 30 83.33, 26 50, 56 50"]} />
        </div>
        <div aria-hidden className="lg:hidden ml-6 h-7 w-px bg-[linear-gradient(180deg,var(--accent)_50%,transparent_50%)] bg-[length:1px_10px]" />

        {/* 2. what OperaLayer does with it */}
        <div className="lg:col-start-3 lg:row-start-1">{step(2, "Matched by OperaLayer")}</div>
        <div className="lg:col-start-3 lg:row-start-2 border border-[var(--ink)] rounded-[2px] p-5 sm:p-6 lg:p-7">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className={NUM}>
              <Count to={98.5} dec={1} />%
            </span>
            <span className="pb-1 font-head font-semibold text-[16px] sm:text-[17px]">{accuracy.label}</span>
          </div>
          <div className="mt-6 grid gap-3">
            {ACCURACY.map(([t, v], n) => (
              <div key={t} className="grid grid-cols-[86px_minmax(0,1fr)_48px] items-center gap-3 font-body text-[13.5px]">
                <span className="text-[var(--t2)]">{t}</span>
                <span className="h-[6px] rounded-[1px] bg-[var(--canvas)] overflow-hidden">
                  <motion.span
                    className={`block h-full ${n === 2 ? "bg-[var(--accent)]" : "bg-[#b9c2ee]"}`}
                    initial={{ width: 0 }}
                    animate={{ width: run ? `${v}%` : 0 }}
                    transition={{ duration: 1, delay: 0.15 + n * 0.25, ease: EASE }}
                  />
                </span>
                <span className={`text-right tabular-nums ${n === 2 ? "font-semibold text-[var(--ink)]" : "text-[var(--t2)]"}`}>{v}%</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[14.5px] leading-[1.55] text-[var(--t2)]">{accuracy.body}</p>
        </div>
        <div className="max-lg:hidden lg:col-start-4 lg:row-start-2">
          <Wire d={["M0 50 C 30 50, 26 25, 56 25", "M0 50 C 30 50, 26 75, 56 75"]} />
        </div>
        <div aria-hidden className="lg:hidden ml-6 h-7 w-px bg-[linear-gradient(180deg,var(--accent)_50%,transparent_50%)] bg-[length:1px_10px]" />

        {/* 3. what that changed */}
        <div className="lg:col-start-5 lg:row-start-1">{step(3, "What changed")}</div>
        <div className="lg:col-start-5 lg:row-start-2 grid lg:grid-rows-2 border-t border-[var(--line)]">
          {[
            { s: seconds, n: 36, unit: "seconds" },
            { s: hours, n: 2, unit: "hours per person" },
          ].map(({ s, n, unit }) => (
            <div key={unit} className="flex flex-col justify-center border-b border-[var(--line)] py-5 lg:py-4 lg:pl-4">
              <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className={NUM}>
                  <Count to={n} />
                </span>
                <span className="pb-1 font-head font-semibold text-[16px] sm:text-[17px]">
                  {unit} {s.label}
                </span>
              </div>
              <p className="mt-2.5 font-body text-[14.5px] leading-[1.55] text-[var(--t2)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CustomerCase() {
  return (
    <section id="customer-case" className={`relative overflow-hidden text-white ${SECTION_Y}`} style={{ background: "var(--stage)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 70% at 0% 0%, rgba(255,255,255,0.16), transparent 60%), linear-gradient(180deg, rgba(15,19,48,0.18), rgba(15,19,48,0.34))" }} />
      <div className="wrap relative w-full">
        <Reveal>
          <Eyebrow light>Case studies</Eyebrow>
          <h2 className="mt-4 font-head font-bold text-white text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.08] tracking-[-0.03em] text-balance">What changed for an electrical goods distributor</h2>
        </Reveal>

        {/* who says so, and the story in two sentences */}
        <Reveal delay={0.06} className="mt-8 md:mt-12 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] gap-6 md:gap-10 lg:gap-16 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MARIS}
            alt="Māris Renigers, E-business Manager at ESELO"
            width={840}
            height={1050}
            loading="lazy"
            className="w-full aspect-[4/3] md:aspect-[4/5] object-cover object-[50%_18%] rounded-[2px] shadow-[0_40px_80px_-40px_rgba(15,19,48,0.8)]"
          />
          <div>
            <p className="max-w-[44rem] font-body text-white text-[17px] md:text-[20px] leading-[1.55]">
              For one of our customers, electrical goods distributor ESELO, buying from more than 150 suppliers meant working through different document layouts, product codes
              and pack sizes. Purchasing, warehouse and finance now use OperaLayer to compare orders, deliveries and invoices.
            </p>
            <figure className="mt-7 md:mt-9 pt-7 md:pt-9 border-t border-white/25">
              <blockquote className="max-w-[40rem] font-head font-bold text-white text-[22px] md:text-[28px] lg:text-[32px] leading-[1.22] tracking-[-0.02em]">
                “From demo to live in weeks. Fastest implementation we have experienced so far for such a complex system and functionality.”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 font-body text-white/85 text-[15px] md:text-[16px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ESELO} alt="ESELO" className="h-9 w-9 object-contain brightness-0 invert shrink-0" />
                Māris Renigers, E-business Manager, ESELO
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* what was measured, in the order it happens */}
        <Reveal delay={0.08} className="mt-9 md:mt-14">
          <CaseFlow />
        </Reveal>
      </div>
    </section>
  );
}
