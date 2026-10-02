"use client";

import { motion } from "motion/react";
import { H2, Rise, useSeq } from "@/sections/operalayer/kit/parts";
import { C, ease } from "@/sections/operalayer/kit/ui";

/*
 * Benchmark-style rows without invented numbers: each row shows the same work
 * before and after as a bar. Before is the season broken into many pieces
 * (one per brand sheet, in grey); now it is one continuous bar in mint.
 */
const ROWS = [
  {
    k: "Where the season lived",
    before: "More than 50 brand spreadsheets and a shared inbox",
    now: "One season view, read from Business Central",
    pieces: 14,
  },
  {
    k: "How invoice differences were found",
    before: "By a buyer, line by line, often after the goods arrived",
    now: "Flagged on arrival, before the goods reach the shelves",
    pieces: 9,
  },
  {
    k: "Who could see the whole season",
    before: "Whoever had all the sheets open",
    now: "Every buyer and the people they report to",
    pieces: 6,
  },
  {
    k: "When a supplier changed a date",
    before: "An email someone had to notice and copy across",
    now: "The order and the season view update together",
    pieces: 11,
  },
];

function Bars({ pieces, run, delay }: { pieces: number; run: boolean; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex gap-[3px] h-3">
        {Array.from({ length: pieces }).map((_, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-[1px] origin-left"
            style={{ background: C.grey, opacity: 0.55 + ((i * 37) % 40) / 100 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: run ? 1 : 0 }}
            transition={{ duration: 0.3, delay: delay + i * 0.04 }}
          />
        ))}
      </div>
      <div className="h-3 rounded-[1px] bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-[1px] origin-left"
          style={{ background: C.mint }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: run ? 1 : 0 }}
          transition={{ duration: 0.9, ease, delay: delay + 0.4 }}
        />
      </div>
    </div>
  );
}

export function BeforeNow() {
  const { ref, t } = useSeq(1, 0, 150);
  return (
    <section id="before" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap" ref={ref}>
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-7">
            <h2 className={H2}>What changed for the buyers</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              A Baltic sports and apparel retailer with more than €100 million in revenue, buying from over 50
              supplier brands on Microsoft Business Central.
            </p>
          </Rise>
        </div>

        <div className="mt-10 flex gap-6 text-[14px] text-white/60">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-[1px]" style={{ background: C.grey }} /> Before
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-[1px]" style={{ background: C.mint }} /> With OperaLayer
          </span>
        </div>

        <div className="mt-6 border-t border-white/10">
          {ROWS.map((r, i) => (
            <div key={r.k} className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-12 gap-x-6 gap-y-4 py-7 border-b border-white/10 items-center">
              <div className="md:col-span-3 text-white text-[17px] font-semibold font-head">{r.k}</div>
              <div className="md:col-span-4">
                <Bars pieces={r.pieces} run={t >= 1} delay={i * 0.15} />
              </div>
              <div className="md:col-span-5 space-y-2 text-[15px] leading-snug">
                <p className="text-white/50">{r.before}</p>
                <p className="text-white">{r.now}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
