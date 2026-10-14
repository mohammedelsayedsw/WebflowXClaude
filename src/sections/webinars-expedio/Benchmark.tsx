"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { Stars } from "./Stars";

const BENCHMARK_URL = "https://www.withari.ai/expedio/benchmark";

type Row = { label: string; sub?: string; a: number; b: number; aText: string; bText: string; ratio?: string };
type Tab = {
  key: string;
  tab: string;
  title: string;
  note: string;
  /** Bars grow over four times each response time, like a slowed-down replay. */
  replay?: boolean;
  /** Scale each row on its own: the rows mix units. */
  perRow?: boolean;
  rows: Row[];
};

const ms = (a: number, b: number) => ({ a, b, aText: `${a} ms`, bText: `${b} ms` });
const rps = (n: number) => `${n} requests a second`;

/* Figures from the Expedio benchmark on withari.ai/expedio, unchanged. */
const TABS: Tab[] = [
  {
    key: "peak",
    tab: "Response time, peak traffic",
    title: "Response time at peak traffic",
    note: "Median time to first byte per page type, at the traffic where stock Magento began to strain. Bars replay each response four times slower.",
    replay: true,
    rows: [
      { label: "Homepage", sub: rps(4), ...ms(519, 20), ratio: "25.9x" },
      { label: "Category page", sub: rps(20), ...ms(400, 19), ratio: "21.2x" },
      { label: "Category, page 2 and beyond", sub: rps(22), ...ms(140, 17), ratio: "8.3x" },
      { label: "Content page", sub: rps(28), ...ms(84, 13), ratio: "6.4x" },
      { label: "Product page", sub: rps(20), ...ms(146, 23), ratio: "6.3x" },
      { label: "Search results", sub: rps(18), ...ms(285, 76), ratio: "3.8x" },
      { label: "Filtered category", sub: rps(24), ...ms(111, 37), ratio: "3.0x" },
      { label: "Add to cart", sub: rps(46), ...ms(68, 34), ratio: "2.0x" },
    ],
  },
  {
    key: "normal",
    tab: "Response time, normal traffic",
    title: "Response time at normal traffic",
    note: "Median time to first byte per page type, at about half of peak traffic. Bars replay each response four times slower.",
    replay: true,
    rows: [
      { label: "Homepage", sub: rps(2), ...ms(472, 20), ratio: "23.7x" },
      { label: "Category page", sub: rps(10), ...ms(131, 22), ratio: "6.0x" },
      { label: "Category, page 2 and beyond", sub: rps(12), ...ms(117, 20), ratio: "6.0x" },
      { label: "Product page", sub: rps(10), ...ms(120, 27), ratio: "4.5x" },
      { label: "Content page", sub: rps(14), ...ms(70, 17), ratio: "4.1x" },
      { label: "Search results", sub: rps(10), ...ms(228, 79), ratio: "2.9x" },
      { label: "Filtered category", sub: rps(12), ...ms(98, 43), ratio: "2.3x" },
      { label: "Add to cart", sub: rps(22), ...ms(56, 31), ratio: "1.8x" },
    ],
  },
  {
    key: "capacity",
    tab: "Traffic capacity",
    title: "Traffic capacity",
    note: "Highest traffic each build handled without strain, in requests a second. A + means Expedio was not yet strained at the highest traffic tested.",
    rows: [
      { label: "Homepage", a: 4, b: 68, aText: "4/s", bText: "68+/s", ratio: "17x+" },
      { label: "Category page", a: 14, b: 80, aText: "14/s", bText: "80+/s", ratio: "5.7x+" },
      { label: "Category, page 2 and beyond", a: 18, b: 90, aText: "18/s", bText: "90+/s", ratio: "5.0x+" },
      { label: "Content page", a: 28, b: 88, aText: "28/s", bText: "88+/s", ratio: "3.1x+" },
      { label: "Search results", a: 18, b: 54, aText: "18/s", bText: "54+/s", ratio: "3.0x+" },
      { label: "Filtered category", a: 24, b: 54, aText: "24/s", bText: "54+/s", ratio: "2.2x+" },
      { label: "Product page", a: 20, b: 40, aText: "20/s", bText: "40/s", ratio: "2.0x" },
      { label: "Add to cart", a: 46, b: 78, aText: "46/s", bText: "78+/s", ratio: "1.7x+" },
    ],
  },
  {
    key: "db",
    tab: "Database queries",
    title: "Database queries and server time per page",
    note: "Per request. Empty-cache rows had all caches emptied first.",
    perRow: true,
    rows: [
      { label: "Database queries, homepage", a: 604, b: 11, aText: "604", bText: "11" },
      { label: "Database queries, category page", a: 164, b: 4, aText: "164", bText: "4" },
      { label: "Database queries, product page", a: 142, b: 20, aText: "142", bText: "20" },
      { label: "Database queries, category page with 40+ products", a: 655, b: 30, aText: "655", bText: "30" },
      { label: "Cache round trips, homepage", a: 603, b: 44, aText: "603", bText: "44" },
      { label: "Server time, category page with empty caches", ...ms(181, 57) },
      { label: "Server time per product shown", a: 4.9, b: 0.46, aText: "4.9 ms", bText: "0.46 ms" },
      { label: "First request after a restart", ...ms(832, 87) },
    ],
  },
];

/** One bar that grows from zero each time `run` changes. */
function Bar({ pct, ms, run, tone }: { pct: number; ms: number; run: number; tone: "magento" | "expedio" }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (run === 0) return;
    setOn(false);
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setOn(true)));
    return () => cancelAnimationFrame(id);
  }, [run]);
  return (
    <span className="block h-1.5 w-full rounded-full bg-white/[0.06]">
      <span
        className="block h-full rounded-full"
        style={{
          width: on ? `${Math.max(pct, 1.5)}%` : "0%",
          background: tone === "expedio" ? "var(--sw-mint)" : "rgba(255,255,255,0.4)",
          transition: on ? `width ${ms}ms linear` : "none",
        }}
      />
    </span>
  );
}

/**
 * The Expedio benchmark from withari.ai, in scandiweb's look: copy and links on
 * the left, the four-tab table on the right, kept compact. Bars start when the
 * table scrolls into view, and again on every tab change or Replay.
 */
export function Benchmark() {
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setRun((r) => r + 1);
      },
      { threshold: 0.3 },
    );
    io.observe(box.current!);
    return () => io.disconnect();
  }, []);

  const t = TABS[active];
  const tabMax = Math.max(...t.rows.map((r) => Math.max(r.a, r.b)));
  const dur = (v: number) => (reduce.current ? 0 : t.replay ? v * 4 : 900);

  return (
    <section id="the-benchmark" className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20">
      <Stars />
      <div className="wrap relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:gap-14 lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              The <span style={{ color: "var(--sw-mint)" }}>benchmark</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[52ch] text-white/75 text-[16px] md:text-[18px] leading-relaxed">
              scandiweb ran one real merchant&apos;s store twice on the same server, once as it runs today and once
              on Expedio, with no page cache in front of either. 162 runs and 487,115 requests went into the
              figures below.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={BENCHMARK_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[var(--sw-mint)] px-5 py-2.5 font-head text-[15px] text-[var(--sw-black)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                See the full benchmark
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`${BENCHMARK_URL}#pdf`}
                target="_blank"
                rel="noopener"
                className="font-head text-[15px] text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-[var(--sw-mint)]"
              >
                Get the PDF
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div ref={box} className="rounded-[4px] border border-white/10 bg-white/[0.03] p-4 sm:p-6">
            <div role="tablist" aria-label="Benchmark figures" className="flex flex-wrap gap-1.5">
              {TABS.map((x, i) => (
                <button
                  key={x.key}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  onClick={() => {
                    setActive(i);
                    setRun((r) => r + 1);
                  }}
                  className={`rounded-[4px] border px-2.5 py-1.5 text-[12px] transition-colors ${
                    i === active
                      ? "border-[var(--sw-mint)] bg-[var(--sw-mint)] text-[var(--sw-black)]"
                      : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {x.tab}
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-white/10 pb-3">
              <h3 className="font-head text-white text-[17px] md:text-[19px]">{t.title}</h3>
              <div className="flex items-center gap-4 text-[12px] text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <i aria-hidden className="h-2 w-2 rounded-[1px] bg-white/40" />
                  Stock Magento
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i aria-hidden className="h-2 w-2 rounded-[1px] bg-[var(--sw-mint)]" />
                  Expedio
                </span>
              </div>
            </div>

            <ul role="tabpanel">
              {t.rows.map((r) => {
                const max = t.perRow ? Math.max(r.a, r.b) : tabMax;
                return (
                  <li
                    key={t.key + r.label}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 border-b border-white/[0.07] py-2.5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_auto]"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <div className="text-white text-[14px] leading-snug">{r.label}</div>
                      {r.sub && <div className="text-white/45 text-[12px]">{r.sub}</div>}
                    </div>
                    <div className="grid grid-cols-[minmax(0,1fr)_4.5rem] items-center gap-x-3 gap-y-1">
                      <Bar pct={(r.a / max) * 100} ms={dur(r.a)} run={run} tone="magento" />
                      <span className="text-right text-white/60 text-[12px] tabular-nums">{r.aText}</span>
                      <Bar pct={(r.b / max) * 100} ms={dur(r.b)} run={run} tone="expedio" />
                      <span className="text-right text-white text-[12px] tabular-nums">{r.bText}</span>
                    </div>
                    <div
                      className={`text-right font-head font-bold text-[20px] md:text-[22px] tabular-nums ${r.ratio ? "w-[4.5rem]" : ""}`}
                      style={{ color: "var(--sw-mint)" }}
                    >
                      {r.ratio}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex items-start justify-between gap-4">
              <p className="max-w-[60ch] text-white/50 text-[12px] leading-relaxed">{t.note}</p>
              <button
                type="button"
                onClick={() => setRun((r) => r + 1)}
                className="inline-flex shrink-0 items-center gap-1.5 text-[12px] text-white/70 transition-colors hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Replay
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
