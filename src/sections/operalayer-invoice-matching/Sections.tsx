"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Database,
  FileText,
  Inbox,
  Link2,
  ListChecks,
  Package,
  Receipt,
  ShoppingCart,
  Sparkles,
  Sunrise,
  TriangleAlert,
  Truck,
} from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { QUICK, PROBLEMS, FULL, STATS, STEPS } from "@/sections/operalayer-invoice-matching/copy";
import {
  EASE,
  H2,
  LEAD,
  SECTION_Y,
  Callout,
  Doc,
  Eyebrow,
  Hi,
  Mark,
  Panels,
  Reveal,
  Row,
  Tabs,
  Tag,
  Wordmark,
  btnPrimary,
  scrollToId,
  uiPrimary,
  uiSecondary,
} from "@/sections/operalayer-invoice-matching/kit";

/*
 * OperaLayer invoice matching: a light product page drawn with the OperaLayer app's own
 * interface (review screen, status tags, document chips, "Confirm All → Export to ERP").
 * All visible copy is Anton's, word for word (copy.ts and the strings below).
 */

const ESELO = assetUrl("/operalayer/invoice-matching/eselo-mark.png");
const INSPECT = "ol-im-inspect";

/* ============================================================
   Header
   ============================================================ */

const LINKS = [
  { id: "example", label: "Invoice example" },
  { id: "customer-case", label: "Customer case" },
  { id: "calculator", label: "Calculator" },
  { id: "questions", label: "Questions" },
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
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md border-[var(--ol-border)]" : "bg-white/0 border-transparent"
      }`}
    >
      <div className="wrap h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
          <a href="https://scandiweb.com/" aria-label="scandiweb" className="shrink-0 hover:opacity-70 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetUrl("/logos/scandiweb-black.svg")} alt="scandiweb" className="h-[14px] sm:h-[15px] w-auto block" />
          </a>
          <span aria-hidden className="h-5 w-px bg-[var(--ol-border-strong)]" />
          <a href={assetUrl("/operalayer")} aria-label="OperaLayer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mark size={24} />
            <Wordmark className="text-[16px] max-[420px]:hidden" />
          </a>
        </div>
        <nav aria-label="On this page" className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={scrollToId(l.id)} className="font-body font-medium text-[14.5px] text-[var(--ol-text2)] hover:text-[var(--ol-text)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          onClick={scrollToId("demo")}
          className="shrink-0 inline-flex items-center justify-center h-10 px-4 rounded-[7px] bg-[var(--ol-accent)] text-white font-head font-semibold text-[14.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_1px_2px_rgba(26,25,23,0.2)] hover:bg-[var(--ol-accent-strong)] transition-colors"
        >
          Book a demo call
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   The supplier's paper, as the app shows it in "PDF preview"
   ============================================================ */

const PAPER = [
  { n: "04", item: "M20 cable gland", qty: "1,000", price: "€5.10" },
  { n: "11", item: "Junction boxes", qty: "100 cartons", price: "€30" },
  { n: "14", item: "LP-3000 · 3,000 K", qty: "60 panels", price: "€28" },
];
/** The cell that disagrees on each paper line. */
const PAPER_FLAG = ["price", "qty", "item"] as const;

function Paper({ active = -1, className = "" }: { active?: number; className?: string }) {
  return (
    <div className={`bg-white rounded-[3px] border border-[var(--ol-border)] text-[var(--ol-text)] ${className}`}>
      <div className="flex items-start justify-between gap-4 px-5 pt-5">
        <div className="font-body font-bold text-[13px] text-[var(--ol-accent)]">Supplier invoice</div>
        <div className="text-right">
          <div className="font-body font-extrabold text-[17px] leading-none tracking-[0.01em]">INVOICE</div>
          <div className="mt-1.5 font-body font-semibold text-[10.5px]">No. INV-2846</div>
          <div className="font-body text-[10px] text-[var(--ol-text3)]">PO ref: PO-1048</div>
        </div>
      </div>
      <div className="mt-6 px-5 pb-5">
        <div className="grid grid-cols-[22px_minmax(0,1fr)_auto_56px] gap-x-2.5 pb-1.5 border-b border-[var(--ol-border)] font-body font-semibold text-[9px] uppercase tracking-[0.06em] text-[var(--ol-text3)]">
          <span>Line</span>
          <span>Item</span>
          <span className="text-right">Qty</span>
          <span className="text-right">Unit price</span>
        </div>
        {PAPER.map((r, k) => {
          const on = k === active;
          const flag = on ? PAPER_FLAG[k] : null;
          const bad = "ol-ping rounded-[3px] bg-[var(--ol-crit-bg)] text-[var(--ol-crit-strong)] font-semibold px-1 -mx-1";
          return (
            <div
              key={r.n}
              className={`relative grid grid-cols-[22px_minmax(0,1fr)_auto_56px] gap-x-2.5 items-center py-2 -mx-2 px-2 rounded-[4px] font-body text-[11.5px] leading-[1.3] transition-colors duration-300 ${
                on ? "bg-[var(--ol-accent-bg)]" : ""
              }`}
            >
              {on && <motion.span layoutId="paper-bar" className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-[var(--ol-accent)]" transition={{ duration: 0.3, ease: EASE }} />}
              <span className="ol-mono text-[var(--ol-text3)]">{r.n}</span>
              <span className="min-w-0">
                <span className={flag === "item" ? bad : ""}>{r.item}</span>
              </span>
              <span className="ol-mono text-right whitespace-nowrap">
                <span className={flag === "qty" ? bad : ""}>{r.qty}</span>
              </span>
              <span className="ol-mono text-right">
                <span className={flag === "price" ? bad : ""}>{r.price}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   1. Hero
   ============================================================ */

const AUTO = 5.2;

function HeroCard() {
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
    <div ref={ref} className="bg-white rounded-[12px] border border-[var(--ol-border)] shadow-[var(--ol-shadow-lg)] text-[var(--ol-text)]">
      <div className="flex items-center gap-2 px-5 pt-4 lg:pt-[clamp(12px,2vh,16px)]">
        <span className="ol-mono font-semibold text-[15px]">INV-2846</span>
        <Doc>PO-1048</Doc>
        <Tag tone="caution">Needs review</Tag>
        <span className="ml-auto font-body text-[12.5px] text-[var(--ol-text3)] max-sm:hidden">Example invoice</span>
      </div>
      <Tabs
        items={QUICK.map((q) => q.tab)}
        i={i}
        set={pick}
        group="quick"
        label="Invoice quick examples"
        progress={auto ? AUTO : undefined}
        className="mt-1.5 px-5"
      />
      <div className="px-5 pb-5 lg:pb-[clamp(14px,2.4vh,20px)]">
        <Panels i={i} group="quick">
          {QUICK.map((s) => (
            <div key={s.tab} className="pt-4 lg:pt-[clamp(10px,2vh,16px)]">
              <div className="font-body text-[12.5px] text-[var(--ol-text3)]">{s.product}</div>
              <div className="mt-1 font-head font-bold text-[22px] sm:text-[24px] lg:text-[clamp(20px,3.3vh,24px)] leading-[1.15] tracking-[-0.02em]">{s.title}</div>
              <div className="mt-3.5 lg:mt-[clamp(8px,1.8vh,14px)] grid gap-1.5 font-body text-[14px]">
                <Row k={s.pair[0].k}>
                  <span className="ol-mono font-medium">{s.pair[0].v}</span>
                </Row>
                <Row k={s.pair[1].k}>
                  <span className="inline-flex items-center gap-2">
                    <Tag tone="crit">Mismatch</Tag>
                    <span className="ol-mono font-semibold text-[var(--ol-crit-strong)]">{s.pair[1].v}</span>
                  </span>
                </Row>
              </div>
              <p className="mt-3.5 lg:mt-[clamp(8px,1.8vh,14px)] font-body text-[14.5px] leading-[1.5] text-[var(--ol-text2)]">{s.note}</p>
              <Callout tone="accent" icon={<Sparkles />} title="Suggested action" className="mt-3.5 lg:mt-[clamp(8px,1.8vh,14px)] !p-3.5">
                {s.action}
              </Callout>
            </div>
          ))}
        </Panels>
        <a href="#example" onClick={inspect} className={`${uiSecondary} mt-3.5 lg:mt-[clamp(8px,1.8vh,14px)] w-full h-10`}>
          Inspect this line <ArrowRight aria-hidden className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export function Hero() {
  return (
    <section id="top" className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-16 h-[720px] bg-[radial-gradient(58rem_34rem_at_82%_8%,rgba(91,87,224,0.09),transparent_62%)]" />
      <div className="wrap relative w-full grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.04fr)_minmax(0,1fr)] gap-10 lg:gap-14 xl:gap-16 items-center pt-8 pb-12 md:pt-12 lg:pt-[clamp(20px,5vh,64px)] lg:pb-[clamp(28px,6vh,72px)]">
        <div>
          <motion.div {...enter(0.05)}>
            <Eyebrow>Invoice matching</Eyebrow>
          </motion.div>
          <motion.h1
            {...enter(0.12)}
            className="mt-4 font-head font-bold text-[var(--ol-text)] text-[42px] sm:text-[56px] lg:text-[clamp(44px,min(4.5vw,8.4vh),62px)] leading-[1.02] tracking-[-0.04em]"
          >
            Catch invoice errors
            <span className="block text-[var(--ol-accent)]">before you pay.</span>
          </motion.h1>
          <motion.p {...enter(0.2)} className="mt-5 lg:mt-[clamp(14px,2.8vh,24px)] max-w-[34rem] font-body text-[var(--ol-text2)] text-[17px] md:text-[19px] lg:text-[clamp(16px,2.3vh,19px)] leading-[1.55]">
            OperaLayer connects your warehouse, accounting and ERP to check every invoice against what you ordered and received. Wrong prices, missing quantities and
            different products reach your team before the bill is approved.
          </motion.p>
          <motion.p {...enter(0.24)} className="mt-3 font-body text-[var(--ol-text3)] text-[15px] leading-[1.5]">
            For wholesalers, distributors and retailers buying stock from many suppliers.
          </motion.p>
          <motion.p {...enter(0.28)} className="mt-5 lg:mt-[clamp(12px,2.4vh,22px)] flex items-center gap-2.5 font-head font-semibold text-[var(--ol-text)] text-[17px] md:text-[18px]">
            <Sunrise aria-hidden className="h-5 w-5 shrink-0 text-[var(--ol-accent)]" strokeWidth={2} />
            Give your team its mornings back.
          </motion.p>
          <motion.div {...enter(0.34)} className="mt-7 lg:mt-[clamp(18px,3.6vh,36px)] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
            <a href="#demo" onClick={scrollToId("demo")} className={`${btnPrimary} w-full sm:w-auto`}>
              Book a demo call
            </a>
            <a
              href="#example"
              onClick={scrollToId("example")}
              className="group self-start sm:self-auto inline-flex items-center gap-1.5 font-head font-semibold text-[16px] text-[var(--ol-text)] hover:text-[var(--ol-accent)] transition-colors"
            >
              See an invoice example <ArrowDown aria-hidden className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* The stage: the supplier's paper behind, the OperaLayer line in front */}
        <motion.div {...enter(0.2)} className="relative">
          <div className="relative overflow-hidden rounded-[20px] border border-[var(--ol-accent-line)] bg-[linear-gradient(155deg,#eae9fc_0%,#f3f2fe_55%,#faf9ff_100%)] px-4 pb-4 pt-[76px] sm:px-8 sm:pb-8 sm:pt-[92px] lg:px-[clamp(20px,2.6vw,36px)] lg:pb-[clamp(18px,3.6vh,36px)] lg:pt-[clamp(60px,10.5vh,96px)]">
            <motion.div
              aria-hidden
              initial={{ opacity: 0, y: 14, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              className="absolute left-[5%] top-[22px] w-[70%] sm:w-[62%] origin-top-left"
            >
              <Paper className="shadow-[var(--ol-shadow)]" />
            </motion.div>
            <div className="relative sm:ml-auto sm:w-[92%]">
              <HeroCard />
            </div>
          </div>
        </motion.div>
      </div>

      {/* One customer, in his words */}
      <div className="wrap relative w-full">
        <motion.div {...enter(0.45)} className="border-t border-[var(--ol-border)] py-6 md:py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ESELO} alt="ESELO" className="h-10 w-10 object-contain brightness-0 shrink-0" />
            <div>
              <p className="font-head font-semibold text-[var(--ol-text)] text-[16px] md:text-[18px] leading-[1.35]">“Our employees smiling again. Two hours per person of ‘monkey work’ gone.”</p>
              <p className="mt-0.5 font-body text-[var(--ol-text3)] text-[13.5px] md:text-[14px]">Māris Renigers, E-business Manager, ESELO</p>
            </div>
          </div>
          <a
            href="#customer-case"
            onClick={scrollToId("customer-case")}
            className="group self-start md:self-auto shrink-0 inline-flex items-center gap-1.5 font-head font-semibold text-[15px] md:text-[16px] text-[var(--ol-accent)] hover:text-[var(--ol-accent-strong)] transition-colors"
          >
            Read one customer’s story <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   2. The problem: three cards, each showing it the way the app does
   ============================================================ */

function PriceFrag() {
  return (
    <div className="w-full rounded-[8px] border border-[var(--ol-border)] bg-white overflow-hidden font-body text-[13px]">
      <div className="flex justify-between px-3.5 py-2 bg-[var(--ol-s2)] font-medium text-[12px] text-[var(--ol-text2)]">
        <span>Record</span>
        <span>Unit price</span>
      </div>
      <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 border-t border-[var(--ol-border)]">
        <span className="flex items-center gap-2 min-w-0">
          <ShoppingCart aria-hidden className="h-3.5 w-3.5 shrink-0 text-[var(--ol-text3)]" />
          <span className="truncate">Purchase order</span>
        </span>
        <span className="ol-mono">€4.80</span>
      </div>
      <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 border-t border-[var(--ol-border)] bg-[var(--ol-accent-bg)]/60">
        <span className="flex items-center gap-2 min-w-0">
          <FileText aria-hidden className="h-3.5 w-3.5 shrink-0 text-[var(--ol-text3)]" />
          <span className="truncate">Supplier invoice</span>
        </span>
        <span className="flex items-center gap-2">
          <Tag tone="crit">Mismatch</Tag>
          <span className="ol-mono font-semibold text-[var(--ol-crit-strong)]">€5.10</span>
        </span>
      </div>
    </div>
  );
}

function ShortFrag() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.6 });
  const bar = (label: string, value: string, pct: number, short: boolean) => (
    <div>
      <div className="flex items-baseline justify-between font-body text-[13px]">
        <span className="text-[var(--ol-text2)]">{label}</span>
        <span className={`ol-mono ${short ? "font-semibold text-[var(--ol-crit-strong)]" : ""}`}>{value}</span>
      </div>
      <div className="mt-1.5 h-[7px] rounded-full bg-[var(--ol-s3)] overflow-hidden flex">
        <motion.div
          className="h-full rounded-full"
          style={{ background: short ? "var(--ol-ok)" : "var(--ol-text)" }}
          initial={{ width: 0 }}
          animate={{ width: run ? `${pct}%` : 0 }}
          transition={{ duration: 0.9, delay: short ? 0.25 : 0, ease: EASE }}
        />
        {short && <div className="h-full flex-1 bg-[repeating-linear-gradient(135deg,var(--ol-crit)_0_3px,transparent_3px_6px)] opacity-70" />}
      </div>
    </div>
  );
  return (
    <div ref={ref} className="w-full rounded-[8px] border border-[var(--ol-border)] bg-white p-3.5 grid gap-3">
      {bar("Billed", "100", 100, false)}
      {bar("Received", "92", 92, true)}
    </div>
  );
}

function PeopleFrag() {
  const who: [typeof ShoppingCart, string, string][] = [
    [ShoppingCart, "Buyer", "codes"],
    [Package, "Receiving", "count"],
    [Receipt, "Accounting", "invoice"],
  ];
  return (
    <div className="w-full rounded-[8px] border border-[var(--ol-border)] bg-white overflow-hidden font-body">
      {who.map(([Icon, t, has], n) => (
        <div key={t} className={`flex items-center gap-3 px-3.5 py-[9px] ${n ? "border-t border-[var(--ol-border)]" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ol-caution)]" />
          <Icon aria-hidden className="h-4 w-4 text-[var(--ol-text2)]" strokeWidth={1.75} />
          <span className="font-medium text-[13.5px] text-[var(--ol-text)]">{t}</span>
          <span className="ml-auto text-[12.5px] text-[var(--ol-text3)]">{has}</span>
          <ChevronRight aria-hidden className="h-3.5 w-3.5 text-[var(--ol-text3)]" />
        </div>
      ))}
    </div>
  );
}

const FRAGS = [PriceFrag, ShortFrag, PeopleFrag];

export function Problem() {
  return (
    <section id="problem" className={`relative bg-[var(--ol-bg)] border-y border-[var(--ol-border)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className={`${H2} mt-4 max-w-[21ch]`}>
            A supplier can send you a perfectly good invoice <Hi>for the wrong thing.</Hi>
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-4 lg:gap-5">
          {PROBLEMS.map((p, i) => {
            const F = FRAGS[i];
            return (
              <Reveal key={p.title} delay={i * 0.07} className="bg-white border border-[var(--ol-border)] rounded-[14px] overflow-hidden flex flex-col shadow-[var(--ol-shadow-sm)]">
                <div className="h-[168px] flex items-center px-5 lg:px-6 bg-[var(--ol-bg)] border-b border-[var(--ol-border)]">
                  <F />
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="font-head font-bold text-[var(--ol-text)] text-[20px] lg:text-[21px] leading-[1.25] tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-3 font-body text-[var(--ol-text2)] text-[15.5px] lg:text-[16px] leading-[1.6]">{p.body}</p>
                </div>
              </Reveal>
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
const ROW_COLS = "md:grid-cols-[minmax(0,1.55fr)_minmax(0,1.25fr)_minmax(0,0.8fr)_minmax(0,0.85fr)]";
const REC_ICONS = [ShoppingCart, Package, FileText];

function ExamplePanel({ k, active }: { k: number; active: boolean }) {
  const x = FULL[k];
  const [fr, fc] = FLAG[k];
  return (
    <div>
      <div className="font-body text-[13px] text-[var(--ol-text3)]">{x.line}</div>
      <h3 className="mt-1.5 font-head font-bold text-[var(--ol-text)] text-[23px] md:text-[28px] leading-[1.15] tracking-[-0.02em]">{x.title}</h3>
      <p className="mt-2.5 max-w-[62ch] font-body text-[var(--ol-text2)] text-[15px] md:text-[15.5px] leading-[1.6]">{x.body}</p>

      <div className="mt-5 rounded-[8px] border border-[var(--ol-border)] overflow-hidden font-body">
        <div className={`hidden md:grid ${ROW_COLS} gap-x-4 px-4 py-2 bg-[var(--ol-s2)] font-medium text-[12.5px] text-[var(--ol-text2)]`}>
          {["Record", "Item", "Quantity", "Unit price"].map((h, n) => (
            <span key={h} className={n > 1 ? "text-right" : ""}>
              {h}
            </span>
          ))}
        </div>
        {x.rows.map((r, n) => {
          const Icon = REC_ICONS[n];
          const cut = r[0].lastIndexOf(" ");
          return (
            <div
              key={r[0]}
              className={`grid grid-cols-3 ${ROW_COLS} gap-x-4 gap-y-1 px-4 py-3 border-t border-[var(--ol-border)] first:border-t-0 md:first:border-t text-[14px] items-center ${
                n === fr ? "bg-[var(--ol-accent-bg)]/55" : ""
              }`}
            >
              {r.map((c, m) => {
                const bad = n === fr && m === fc;
                if (m === 0)
                  return (
                    <span key={m} className="col-span-3 md:col-span-1 flex items-center gap-2 font-medium text-[var(--ol-text)]">
                      <Icon aria-hidden className="h-4 w-4 shrink-0 text-[var(--ol-text3)]" strokeWidth={1.75} />
                      <span>
                        {c.slice(0, cut)} <Doc plain>{c.slice(cut + 1)}</Doc>
                      </span>
                    </span>
                  );
                return (
                  <span key={m} className={`leading-[1.35] ${m > 1 ? "md:text-right" : ""} ${m > 1 && /^[€\d]/.test(c) ? "ol-mono" : ""} ${bad ? "" : "text-[var(--ol-text2)]"}`}>
                    {bad ? (
                      <span className={`inline-block rounded-[4px] border border-[var(--ol-crit)] bg-[var(--ol-crit-bg)] px-1.5 text-[var(--ol-crit-strong)] font-semibold ${active ? "ol-ping" : ""}`}>{c}</span>
                    ) : (
                      c
                    )}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-3">
        <Callout tone="caution" icon={<TriangleAlert />} title="Why it matters">
          {x.why}
        </Callout>
        <Callout tone="accent" icon={<Sparkles />} title="Suggested action">
          {x.action}
        </Callout>
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
    <section id="example" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Inside an invoice</Eyebrow>
            <h2 className={`${H2} mt-4`}>
              Follow one invoice with <Hi>three different problems.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>Switch between the lines. In each example you can see what the supplier billed, what the order says and who can settle the difference.</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-12 bg-white rounded-[14px] border border-[var(--ol-border)] shadow-[var(--ol-shadow-lg)] overflow-clip">
          {/* document bar */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 px-5 md:px-6 py-3.5 border-b border-[var(--ol-border)]">
            <Mark size={22} />
            <span className="ol-mono font-semibold text-[15px] md:text-[16px] text-[var(--ol-text)]">INV-2846</span>
            <Tag tone={held[i] ? "ok" : "caution"}>{held[i] ? "On hold" : "Needs review"}</Tag>
            <Doc>PO-1048</Doc>
            <Doc>GR-1170</Doc>
            <span className="ml-auto font-body text-[13px] text-[var(--ol-text3)] max-md:hidden">Example records</span>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.46fr)_minmax(0,1fr)]">
            {/* the supplier's paper */}
            <div className="bg-[var(--ol-s2)] border-b lg:border-b-0 lg:border-r border-[var(--ol-border)] p-5 md:p-6">
              <div className="lg:sticky lg:top-24">
                <div className="font-body font-medium text-[12.5px] text-[var(--ol-text2)]">PDF preview</div>
                <Paper active={i} className="mt-3 shadow-[var(--ol-shadow)]" />
              </div>
            </div>

            {/* the lines */}
            <div className="min-w-0">
              <Tabs items={FULL.map((f) => f.tab)} i={i} set={setI} group="full" label="Invoice full examples" className="px-5 md:px-7 pt-1.5" />
              <div className="p-5 md:p-7">
                <Panels i={i} group="full">
                  {FULL.map((f, k) => (
                    <ExamplePanel key={f.tab} k={k} active={k === i} />
                  ))}
                </Panels>
              </div>
            </div>
          </div>

          {/* action bar, as the app's "Confirm & export" bar */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 px-5 md:px-6 py-3.5 border-t border-[var(--ol-border)] bg-[var(--ol-bg)]">
            <span role="status" className={`flex-1 flex items-start gap-2 font-body text-[14px] leading-[1.45] min-h-[20px] ${held[i] ? "text-[var(--ol-ok-strong)] font-medium" : "text-[var(--ol-text3)]"}`}>
              {held[i] ? (
                <>
                  <Check aria-hidden className="h-4 w-4 mt-[2px] shrink-0" strokeWidth={3} />
                  {x.result}
                </>
              ) : (
                x.line
              )}
            </span>
            <div className="flex items-center gap-2.5 shrink-0">
              {held[i] && (
                <button type="button" onClick={() => setHold(false)} className={uiSecondary}>
                  Reset example
                </button>
              )}
              <button type="button" disabled={held[i]} onClick={() => setHold(true)} className={`${uiPrimary} disabled:opacity-45 disabled:cursor-default disabled:hover:bg-[var(--ol-accent)]`}>
                {x.hold}
              </button>
            </div>
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

/** 69% → 87% → 98.5%, the three figures in the customer's account. */
function AccuracyChart() {
  const ref = useRef<SVGSVGElement>(null);
  const run = useInView(ref, { once: true, amount: 0.6 });
  const pts = [
    { x: 34, v: 69 },
    { x: 160, v: 87 },
    { x: 286, v: 98.5 },
  ].map((p) => ({ ...p, y: 108 - ((p.v - 55) / 45) * 84 }));
  const line = `M${pts[0].x} ${pts[0].y} C ${pts[0].x + 60} ${pts[0].y}, ${pts[1].x - 60} ${pts[1].y}, ${pts[1].x} ${pts[1].y} S ${pts[2].x - 60} ${pts[2].y}, ${pts[2].x} ${pts[2].y}`;
  return (
    <svg ref={ref} viewBox="0 0 320 124" className="w-full h-auto" role="img" aria-label="Matching accuracy: 69%, then 87%, then 98.5%">
      <defs>
        <linearGradient id="acc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b57e0" stopOpacity="0.16" />
          <stop offset="1" stopColor="#5b57e0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="16" x2="304" y1="116" y2="116" stroke="var(--ol-border)" />
      <motion.path d={`${line} L ${pts[2].x} 116 L ${pts[0].x} 116 Z`} fill="url(#acc-fill)" initial={{ opacity: 0 }} animate={{ opacity: run ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.9 }} />
      <motion.path d={line} fill="none" stroke="var(--ol-accent)" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: run ? 1 : 0 }} transition={{ duration: 1.2, ease: EASE }} />
      {pts.map((p, k) => (
        <motion.g key={p.v} initial={{ opacity: 0, y: 4 }} animate={{ opacity: run ? 1 : 0, y: run ? 0 : 4 }} transition={{ duration: 0.4, delay: 0.25 + k * 0.4 }}>
          <circle cx={p.x} cy={p.y} r="4.5" fill="#fff" stroke="var(--ol-accent)" strokeWidth="2.5" />
          <text
            x={p.x}
            y={p.y - 12}
            textAnchor="middle"
            fontSize={k === 2 ? 14 : 12.5}
            fontWeight={k === 2 ? 700 : 500}
            fill={k === 2 ? "var(--ol-accent-strong)" : "var(--ol-text2)"}
            style={{ fontFamily: "var(--ol-mono)" }}
          >
            {p.v}%
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

const STAT_NUM = [
  { n: 2, post: " hours per person" },
  { n: 36, post: " seconds" },
  { n: 98.5, dec: 1, post: "%" },
];

function StatTile({ i, children, className = "" }: { i: number; children?: React.ReactNode; className?: string }) {
  const s = STATS[i];
  const num = STAT_NUM[i];
  return (
    <div className={`bg-white border border-[var(--ol-border)] rounded-[14px] p-6 lg:p-7 shadow-[var(--ol-shadow-sm)] ${className}`}>
      <div className="font-head font-bold text-[var(--ol-text)] leading-none tracking-[-0.04em] whitespace-nowrap">
        <span className="text-[56px] lg:text-[64px]">
          <Count to={num.n} dec={num.dec} />
          {num.post === "%" ? "%" : ""}
        </span>
        {num.post !== "%" && <span className="text-[21px] lg:text-[24px] tracking-[-0.02em] text-[var(--ol-text2)]">{num.post}</span>}
      </div>
      <div className="mt-4 font-head font-semibold text-[var(--ol-text)] text-[17px]">{s.label}</div>
      <p className="mt-1.5 font-body text-[var(--ol-text2)] text-[15px] leading-[1.55]">{s.body}</p>
      {children}
    </div>
  );
}

export function CustomerCase() {
  return (
    <section id="customer-case" className={`relative bg-[var(--ol-bg)] border-y border-[var(--ol-border)] ${SECTION_Y}`}>
      <div className="wrap w-full grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        <Reveal className="lg:col-span-5">
          <Eyebrow>One customer’s story</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            What changed for an <Hi>electrical goods distributor</Hi>
          </h2>
          <p className={`${LEAD} mt-5 md:mt-6`}>
            For one of our customers, electrical goods distributor ESELO, buying from more than 150 suppliers meant working through different document layouts, product codes
            and pack sizes. Purchasing, warehouse and finance now use OperaLayer to compare orders, deliveries and invoices.
          </p>
          <figure className="mt-8 md:mt-10 rounded-[14px] border border-[var(--ol-accent-line)] bg-[linear-gradient(155deg,#eae9fc_0%,#f6f5fe_100%)] p-6 lg:p-7">
            <blockquote className="font-head font-semibold text-[var(--ol-text)] text-[19px] md:text-[21px] leading-[1.4] tracking-[-0.01em]">
              “From demo to live in weeks. Fastest implementation we have experienced so far for such a complex system and functionality.”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ESELO} alt="ESELO" className="h-9 w-9 object-contain brightness-0" />
              <span className="font-body text-[var(--ol-text2)] text-[14.5px]">Māris Renigers, E-business Manager, ESELO</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-rows-[auto_minmax(0,1fr)] gap-4 lg:gap-5">
          <Reveal>
            <StatTile i={0} className="h-full" />
          </Reveal>
          <Reveal delay={0.07}>
            <StatTile i={1} className="h-full" />
          </Reveal>
          <Reveal delay={0.12} className="sm:col-span-2">
            <div className="h-full bg-white border border-[var(--ol-border)] rounded-[14px] p-6 lg:p-7 shadow-[var(--ol-shadow-sm)] grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-6 md:gap-8 items-center">
              <div>
                <div className="font-head font-bold text-[var(--ol-accent)] text-[56px] lg:text-[64px] leading-none tracking-[-0.04em]">
                  <Count to={98.5} dec={1} />%
                </div>
                <div className="mt-4 font-head font-semibold text-[var(--ol-text)] text-[17px]">{STATS[2].label}</div>
                <p className="mt-1.5 font-body text-[var(--ol-text2)] text-[15px] leading-[1.55]">{STATS[2].body}</p>
              </div>
              <AccuracyChart />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. How it works
   ============================================================ */

function StepDocs() {
  const docs: [typeof FileText, string][] = [
    [FileText, "Invoice"],
    [Package, "Delivery note"],
    [Truck, "CMR"],
  ];
  return (
    <div className="grid gap-1.5 w-full font-body">
      {docs.map(([Icon, t]) => (
        <div key={t} className="flex items-center gap-2.5 rounded-[6px] border border-[var(--ol-border)] bg-white px-3 py-[7px] text-[13px] font-medium text-[var(--ol-text)]">
          <Icon aria-hidden className="h-4 w-4 text-[var(--ol-text2)]" strokeWidth={1.75} />
          {t}
        </div>
      ))}
    </div>
  );
}

function StepLink() {
  return (
    <div className="grid gap-[5px] w-full font-body text-[13px]">
      <div className="flex items-center gap-2 rounded-[6px] border border-[var(--ol-accent-line)] bg-[var(--ol-accent-bg)] px-3 py-[5px] font-medium text-[var(--ol-accent-strong)]">
        <Link2 aria-hidden className="h-4 w-4" strokeWidth={1.75} />
        <span className="ol-mono">PO-1048</span>
      </div>
      {["Codes", "Packs", "Units"].map((t) => (
        <div key={t} className="flex items-center justify-between rounded-[6px] border border-[var(--ol-border)] bg-white px-3 py-[5px] text-[var(--ol-text)]">
          {t}
          <Check aria-hidden className="h-3.5 w-3.5 text-[var(--ol-ok)]" strokeWidth={3} />
        </div>
      ))}
    </div>
  );
}

function StepCheck() {
  const rows: [string, "ok" | "crit"][] = [
    ["Prices", "crit"],
    ["Quantities", "ok"],
    ["Item details", "ok"],
  ];
  return (
    <div className="w-full rounded-[8px] border border-[var(--ol-border)] bg-white overflow-hidden font-body text-[13px]">
      {rows.map(([t, tone], n) => (
        <div key={t} className={`flex items-center justify-between px-3 py-2 ${n ? "border-t border-[var(--ol-border)]" : ""} ${tone === "crit" ? "bg-[var(--ol-accent-bg)]/60" : ""}`}>
          <span className="text-[var(--ol-text)]">{t}</span>
          <Tag tone={tone}>{tone === "ok" ? "Confirmed" : "Mismatch"}</Tag>
        </div>
      ))}
    </div>
  );
}

function StepSend() {
  return (
    <div className="w-full grid gap-2 font-body">
      <div className="flex items-center gap-2">
        <span className={`${uiSecondary} !h-8 !px-2.5 !text-[12.5px] flex-1`}>
          <span className="ol-mono text-[11px] text-[var(--ol-accent)]">1</span> Confirm All
        </span>
        <ArrowRight aria-hidden className="h-3.5 w-3.5 shrink-0 text-[var(--ol-text3)]" />
      </div>
      <span className={`${uiPrimary} !h-8 !px-2.5 !text-[12.5px] pointer-events-none`}>
        <span className="ol-mono text-[11px] text-white/70">2</span> Export to ERP
      </span>
      <div className="flex items-center justify-between rounded-[6px] border border-[var(--ol-border)] bg-white px-3 py-[6px] text-[12.5px]">
        <span className="ol-mono">INV-2846</span>
        <Tag tone="info">Exported</Tag>
      </div>
    </div>
  );
}

const STEP_FRAGS = [StepDocs, StepLink, StepCheck, StepSend];
const STEP_ICONS = [Inbox, Link2, ListChecks, Database];

export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [k, setK] = useState(0);
  useEffect(() => {
    if (!inView || reduce) return;
    const t = window.setInterval(() => setK((v) => (v + 1) % 4), 2200);
    return () => clearInterval(t);
  }, [inView, reduce]);
  return (
    <section id="solution" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={`${H2} mt-4`}>
              From the supplier inbox to an invoice <Hi>you can approve.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>
            OperaLayer reads the documents, finds the purchase order in your ERP and compares the lines. Your rules decide what can move ahead and what needs a buyer, a
            warehouse colleague or an accountant.
          </p>
        </Reveal>
        <ol ref={ref} className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STEPS.map((t, n) => {
            const F = STEP_FRAGS[n];
            const Icon = STEP_ICONS[n];
            const on = !reduce && k === n;
            return (
              <Reveal as="li" key={t} delay={n * 0.07} className="relative list-none">
                <div
                  className={`h-full rounded-[14px] border bg-white overflow-hidden flex flex-col transition-[border-color,box-shadow] duration-500 ${
                    on ? "border-[var(--ol-accent)] shadow-[0_0_0_3px_rgba(91,87,224,0.12),var(--ol-shadow)]" : "border-[var(--ol-border)] shadow-[var(--ol-shadow-sm)]"
                  }`}
                >
                  <div className="h-[176px] flex items-center px-5 bg-[var(--ol-bg)] border-b border-[var(--ol-border)]">
                    <F />
                  </div>
                  <div className="p-5 lg:p-6 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`h-7 w-7 rounded-[6px] flex items-center justify-center ol-mono text-[13px] font-semibold transition-colors duration-500 ${
                          on ? "bg-[var(--ol-accent)] text-white" : "bg-[var(--ol-accent-bg)] text-[var(--ol-accent-strong)]"
                        }`}
                      >
                        {n + 1}
                      </span>
                      <Icon aria-hidden className="h-[18px] w-[18px] text-[var(--ol-text3)]" strokeWidth={1.75} />
                    </div>
                    <p className="mt-3.5 font-body text-[var(--ol-text)] text-[15.5px] leading-[1.55]">{t}</p>
                  </div>
                </div>
                {n < 3 && (
                  <span aria-hidden className="hidden lg:flex absolute top-[88px] -right-[14px] z-10 h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--ol-border)] bg-white">
                    <ChevronRight className="h-3.5 w-3.5 text-[var(--ol-text3)]" />
                  </span>
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
