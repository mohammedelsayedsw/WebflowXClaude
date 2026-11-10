"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import { ArrowDown, ArrowRight, Camera, Check, ChevronRight, FileText, Link2, Mail, Package, Receipt, ShoppingCart, Upload } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { QUICK, PROBLEMS, FULL, STATS, STEPS } from "@/sections/operalayer-invoice-matching/copy";
import { EASE, H2, LEAD, SECTION_Y, Eyebrow, Hi, Logo, Panels, Reveal, Stage, Swipe, btn, btnGhost, onTabKeys, scrollToId } from "@/sections/operalayer-invoice-matching/kit";
import { Bad, LINES, Mark, Paper, Status, Window } from "@/sections/operalayer-invoice-matching/app";

/*
 * OperaLayer invoice matching: a product-led page. The app is drawn once (app.tsx) and shown doing its job:
 * reading the example invoice, comparing it with the order and the receipt, and flagging the three lines.
 * Copy is Anton's (copy.ts and the strings below).
 */

const ESELO = assetUrl("/operalayer/invoice-matching/eselo-mark.png");
const INSPECT = "ol-im-inspect";

/* ============================================================
   Header
   ============================================================ */

const LINKS = [
  { id: "example", label: "Invoice example" },
  { id: "how", label: "How it works" },
  { id: "customer-case", label: "Customer case" },
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
const COLS = "grid-cols-[26px_minmax(0,1fr)_58px_34px] sm:grid-cols-[30px_minmax(0,1fr)_92px_58px_40px_56px]";

function ReviewDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.25 });
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  /* 0 the document arrives and is read, 1 its lines appear, 2 each is checked, 3 one line is open */
  const [phase, setPhase] = useState(0);
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!seen) return;
    if (reduce) {
      const t = window.setTimeout(() => setPhase(3), 0);
      return () => clearTimeout(t);
    }
    const ts = [window.setTimeout(() => setPhase(1), 1500), window.setTimeout(() => setPhase(2), 2700), window.setTimeout(() => setPhase(3), 3700)];
    return () => ts.forEach(clearTimeout);
  }, [seen, reduce]);
  const auto = phase === 3 && !touched && inView && !reduce;
  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => setI((k) => (k + 1) % QUICK.length), AUTO * 1000);
    return () => clearInterval(t);
  }, [auto]);
  const pick = (k: number) => {
    setTouched(true);
    setPhase(3);
    setI(k);
  };
  const inspect = (e: React.MouseEvent<HTMLElement>) => {
    window.dispatchEvent(new CustomEvent(INSPECT, { detail: i }));
    scrollToId("example")(e);
  };
  return (
    <div ref={ref}>
      <Window
        crumbs={["Invoices", "INV-2846"]}
        right={
          phase < 2 ? (
            <Status tone="idle" pulse>
              Reading
            </Status>
          ) : (
            <Status tone="review">Needs review</Status>
          )
        }
      >
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          {/* the supplier's document */}
          <div className="hidden md:block bg-[var(--canvas)] border-r border-[var(--line)] p-5 lg:p-6">
            <div className="font-body font-medium text-[12px] text-[var(--t3)]">PO-1048 / INV-2846</div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={seen ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }}>
              <Paper active={phase === 3 ? i : -1} scan={seen && phase < 2} className="mt-3 shadow-[0_18px_40px_-24px_rgba(15,19,48,0.45)]" />
            </motion.div>
          </div>

          {/* its lines, checked against the order and the receipt */}
          <div className="min-w-0">
            <div className={`grid ${COLS} gap-x-3 px-4 md:px-6 py-2.5 border-b border-[var(--line)] font-body font-medium text-[11.5px] text-[var(--t3)]`}>
              <span>Line</span>
              <span>Example invoice</span>
              <span className="text-right max-sm:hidden">Qty</span>
              <span className="text-right">Billed</span>
              <span className="text-center">PO</span>
              <span className="text-center max-sm:hidden">Receipt</span>
            </div>
            <div role="tablist" aria-label="Invoice quick examples">
              {LINES.map((r, k) => {
                const on = phase === 3 && k === i;
                const shown = phase >= 1;
                return (
                  <motion.button
                    key={r.n}
                    id={`quick-tab-${k}`}
                    role="tab"
                    aria-selected={on}
                    aria-controls={`quick-panel-${k}`}
                    aria-label={QUICK[k].tab}
                    tabIndex={on || (phase < 3 && k === 0) ? 0 : -1}
                    onClick={() => pick(k)}
                    onKeyDown={(e) => onTabKeys(e, k, LINES.length, pick, "quick", true)}
                    initial={false}
                    animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : 8 }}
                    transition={{ duration: 0.45, delay: shown ? k * 0.14 : 0, ease: EASE }}
                    className={`relative w-full grid ${COLS} gap-x-3 items-center px-4 md:px-6 py-3 md:py-3.5 border-b border-[var(--line)] text-left font-body text-[13px] md:text-[13.5px] tabular-nums transition-colors ${
                      on ? "bg-[rgba(42,85,245,0.06)]" : "hover:bg-[var(--canvas)]"
                    }`}
                  >
                    {on && <motion.span layoutId="quick-bar" className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)]" transition={{ duration: 0.3, ease: EASE }} />}
                    <span className="text-[var(--t3)]">{r.n}</span>
                    <span className="min-w-0 truncate font-medium text-[var(--ink)]">{r.flag === "item" && phase >= 2 ? <Bad>{r.item}</Bad> : r.item}</span>
                    <span className="text-right text-[var(--t2)] max-sm:hidden">{r.flag === "qty" && phase >= 2 ? <Bad>{r.qty}</Bad> : r.qty}</span>
                    <span className="text-right text-[var(--t2)]">{r.flag === "price" && phase >= 2 ? <Bad>{r.price}</Bad> : r.price}</span>
                    <span className="flex justify-center">{phase >= 2 ? <Mark v={r.po} /> : <span className="ol-pulse h-1.5 w-1.5 rounded-[1px] bg-[var(--t3)]" />}</span>
                    <span className="flex justify-center max-sm:hidden">{phase >= 2 ? <Mark v={r.rec} /> : <span className="ol-pulse h-1.5 w-1.5 rounded-[1px] bg-[var(--t3)]" />}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* the open line */}
            <motion.div initial={false} animate={{ opacity: phase === 3 ? 1 : 0, y: phase === 3 ? 0 : 10 }} transition={{ duration: 0.5, ease: EASE }} className="px-4 md:px-6 py-5 md:py-6">
              <Panels i={i} group="quick">
                {QUICK.map((s) => (
                  <div key={s.tab}>
                    <div className="font-body font-medium text-[12px] text-[var(--accent)]">
                      {s.tab} <span className="text-[var(--t3)]">· {s.product}</span>
                    </div>
                    <div className="mt-1.5 font-head font-bold text-[var(--ink)] text-[21px] md:text-[26px] leading-[1.15] tracking-[-0.02em]">{s.title}</div>
                    <div className="mt-4 flex flex-wrap items-end gap-x-9 gap-y-3">
                      {s.pair.map((p, n) => (
                        <div key={p.k}>
                          <div className="font-body font-medium text-[11.5px] text-[var(--t3)]">{p.k}</div>
                          <div className={`mt-1 font-head font-semibold text-[24px] md:text-[30px] leading-none tracking-[-0.025em] tabular-nums whitespace-nowrap ${n ? "text-[var(--red)]" : "text-[var(--ink)]"}`}>{p.v}</div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 font-body text-[13.5px] md:text-[14.5px] leading-[1.5] text-[var(--t2)]">{s.note}</p>
                    <div className="mt-4 md:mt-5 pt-4 border-t border-[var(--line)] font-body text-[13.5px] md:text-[14px] leading-[1.5]">
                      <span className="font-semibold text-[var(--ink)]">Suggested action</span>
                      <span className="text-[var(--t2)]"> · {s.action}</span>
                    </div>
                  </div>
                ))}
              </Panels>
              <a href="#example" onClick={inspect} tabIndex={phase === 3 ? 0 : -1} className="group mt-4 inline-flex items-center gap-1.5 font-head font-semibold text-[14.5px] text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors">
                Inspect this line <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
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
        <Reveal className="border-y border-[var(--line)] py-6 md:py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ESELO} alt="ESELO" className="h-10 w-10 object-contain brightness-0 shrink-0" />
            <div>
              <p className="font-head font-semibold text-[var(--ink)] text-[17px] md:text-[20px] leading-[1.35]">“Our employees smiling again. Two hours per person of ‘monkey work’ gone.”</p>
              <p className="mt-0.5 font-body text-[var(--t3)] text-[14px]">Māris Renigers, E-business Manager, ESELO</p>
            </div>
          </div>
          <a href="#customer-case" onClick={scrollToId("customer-case")} className="group self-start md:self-auto shrink-0 inline-flex items-center gap-1.5 font-head font-semibold text-[16px] text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors">
            Read one customer’s story <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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

            <Window sidebar={false} crumbs={["Invoices", "INV-2846", x.line]} right={<Status tone={held[i] ? "hold" : "review"}>{held[i] ? "On hold" : "Needs review"}</Status>} className="mt-3 sm:mt-7">
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
                      <span className={`font-head font-semibold text-[15px] transition-colors duration-500 ${on ? "text-[var(--accent)]" : "text-[var(--t3)]"}`}>Step {n + 1}</span>
                      <p className="mt-2.5 font-body text-[var(--ink)] text-[15.5px] md:text-[16px] leading-[1.55]">{t}</p>
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
   5. One customer's story
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

/** 69% → 87% → 98.5%, the three figures in the customer's account. */
function AccuracyChart() {
  const ref = useRef<SVGSVGElement>(null);
  const run = useInView(ref, { once: true, amount: 0.6 });
  const pts = [
    { x: 30, v: 69 },
    { x: 160, v: 87 },
    { x: 290, v: 98.5 },
  ].map((p) => ({ ...p, y: 96 - ((p.v - 60) / 40) * 66 }));
  const line = `M${pts[0].x} ${pts[0].y} C ${pts[0].x + 62} ${pts[0].y}, ${pts[1].x - 62} ${pts[1].y}, ${pts[1].x} ${pts[1].y} S ${pts[2].x - 62} ${pts[2].y}, ${pts[2].x} ${pts[2].y}`;
  return (
    <svg ref={ref} viewBox="0 0 320 108" className="w-full h-auto" role="img" aria-label="Matching accuracy: 69%, then 87%, then 98.5%">
      <line x1="10" x2="310" y1="104" y2="104" stroke="rgba(255,255,255,0.25)" />
      <motion.path d={line} fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: run ? 1 : 0 }} transition={{ duration: 1.3, ease: EASE }} />
      {pts.map((p, k) => (
        <motion.g key={p.v} initial={{ opacity: 0 }} animate={{ opacity: run ? 1 : 0 }} transition={{ duration: 0.4, delay: 0.3 + k * 0.4 }}>
          <circle cx={p.x} cy={p.y} r="4.5" fill={k === 2 ? "#fff" : "#5a63f5"} stroke="#fff" strokeWidth="2.5" />
          <text x={p.x} y={p.y - 13} textAnchor="middle" fontSize="13" fontWeight={k === 2 ? 700 : 500} fill="#fff" fillOpacity={k === 2 ? 1 : 0.8} style={{ fontFamily: "var(--font-inter)" }}>
            {p.v}%
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

/** From upload to posting: a mark travels the line. */
function UploadToPosting() {
  const reduce = useReducedMotion();
  return (
    <div className="font-body text-[12.5px] text-white/80">
      <div className="relative h-[2px] bg-white/25 mt-2">
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[1px] bg-white" />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-[1px] bg-white" />
        {!reduce && (
          <motion.span
            className="absolute top-1/2 h-[6px] w-10 -translate-y-1/2 bg-white"
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
            style={{ marginLeft: -20 }}
          />
        )}
      </div>
      <div className="mt-3 flex justify-between">
        <span>upload</span>
        <span>posting</span>
      </div>
    </div>
  );
}

const STAT_NUM = [
  { n: 2, post: " hours per person" },
  { n: 36, post: " seconds" },
  { n: 98.5, dec: 1, post: "%" },
];

export function CustomerCase() {
  const GLASS = "rounded-[2px] bg-white/[0.11] border border-white/25 p-6 lg:p-7 flex flex-col";
  return (
    <section id="customer-case" className={`relative overflow-hidden text-white ${SECTION_Y}`} style={{ background: "var(--stage)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 70% at 0% 0%, rgba(255,255,255,0.16), transparent 60%), linear-gradient(180deg, rgba(15,19,48,0.18), rgba(15,19,48,0.34))" }} />
      <div className="wrap relative w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] xl:grid-cols-12 gap-5 xl:gap-12 items-end">
          <div className="xl:col-span-7">
            <Eyebrow light>One customer’s story</Eyebrow>
            <h2 className="mt-4 font-head font-bold text-white text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.08] tracking-[-0.03em] text-balance">What changed for an electrical goods distributor</h2>
          </div>
          <p className="xl:col-span-5 max-xl:max-w-[46rem] font-body text-white/85 text-[16px] md:text-[18px] leading-[1.55]">
            For one of our customers, electrical goods distributor ESELO, buying from more than 150 suppliers meant working through different document layouts, product codes
            and pack sizes. Purchasing, warehouse and finance now use OperaLayer to compare orders, deliveries and invoices.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-8 md:mt-14">
          <Swipe
            light
            label="What changed"
            until="lg"
            className="lg:grid lg:grid-cols-3 lg:gap-5"
            items={STATS.map((s, i) => (
              <div key={s.n} className={`h-full ${GLASS}`}>
              <div className="font-head font-bold leading-[0.95] tracking-[-0.045em] whitespace-nowrap">
                <span className="text-[64px] lg:text-[80px]">
                  <Count to={STAT_NUM[i].n} dec={STAT_NUM[i].dec} />
                  {STAT_NUM[i].post === "%" ? "%" : ""}
                </span>
                {STAT_NUM[i].post !== "%" && <span className="text-[21px] lg:text-[24px] tracking-[-0.02em] text-white/85">{STAT_NUM[i].post}</span>}
              </div>
              <div className="mt-4 font-head font-semibold text-[18px]">{s.label}</div>
              <p className="mt-2 font-body text-white/80 text-[15px] leading-[1.55]">{s.body}</p>
              <div className="mt-auto pt-6">
                {i === 0 && (
                  <div className="flex flex-wrap gap-2 font-body text-[12.5px]">
                    {["Buyers", "receivers", "accountants"].map((r) => (
                      <span key={r} className="rounded-[2px] border border-white/35 px-2.5 py-1">
                        {r}
                      </span>
                    ))}
                  </div>
                )}
                {i === 1 && <UploadToPosting />}
                {i === 2 && <AccuracyChart />}
              </div>
              </div>
            ))}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-9 md:mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[64px_minmax(0,1fr)] gap-4 md:gap-9 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ESELO} alt="ESELO" className="h-12 w-12 md:h-16 md:w-16 object-contain brightness-0 invert" />
          <figure>
            <blockquote className="max-w-[38ch] font-head font-bold text-white text-[22px] md:text-[34px] leading-[1.22] tracking-[-0.02em]">
              “From demo to live in weeks. Fastest implementation we have experienced so far for such a complex system and functionality.”
            </blockquote>
            <figcaption className="mt-4 font-body text-white/75 text-[15px]">Māris Renigers, E-business Manager, ESELO</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

