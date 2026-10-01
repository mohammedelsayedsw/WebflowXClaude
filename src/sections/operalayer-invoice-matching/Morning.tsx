"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

type Block = { label: string; span: number };

/** Each lane fills the morning, 8:00 to 11:00, in twelve quarter hours. */
const BEFORE: { who: string; blocks: Block[] }[] = [
  {
    who: "Person 1",
    blocks: [
      { label: "Open supplier emails", span: 2 },
      { label: "Retype invoice lines", span: 4 },
      { label: "Find the PO in Navision", span: 3 },
      { label: "Compare line by line", span: 3 },
    ],
  },
  {
    who: "Person 2",
    blocks: [
      { label: "Download PDFs", span: 2 },
      { label: "Find the PO in Navision", span: 3 },
      { label: "Compare line by line", span: 4 },
      { label: "Chase differences", span: 3 },
    ],
  },
];

const HOURS = ["8:00", "9:00", "10:00", "11:00"];

function Lane({ who, blocks, row }: { who: string; blocks: Block[]; row: number }) {
  let start = 0;
  return (
    <div className="grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] items-center gap-3">
      <div className="label-code text-[var(--sw-black)]/55">{who}</div>
      <div className="grid grid-cols-12 gap-[3px]">
        {blocks.map((b, i) => {
          const s = start;
          start += b.span;
          return (
            <motion.div
              key={b.label + i}
              className="relative h-14 md:h-16 rounded-[2px] bg-[var(--sw-black)] px-2.5 py-2 overflow-hidden"
              style={{ gridColumn: `${s + 1} / span ${b.span}`, transformOrigin: "left" }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: row * 0.15 + i * 0.22, duration: 0.5, ease: "easeOut" }}
            >
              <span className="block text-white/85 text-[11px] md:text-[13px] leading-tight">{b.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Morning() {
  return (
    <section id="morning" className="bg-lp-bright py-28 md:py-36 overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-end">
          <Reveal>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[16ch]">
              What the morning looked like before
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[52ch]">
              Around a hundred suppliers each send invoices in their own PDF layout. Two people spent
              every morning reading them and checking the lines against purchase orders by hand.
            </p>
          </Reveal>
        </div>

        {/* before: the whole morning */}
        <Reveal delay={0.1} className="mt-16 md:mt-20">
          <div className="flex items-baseline justify-between mb-5">
            <div className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px]">Before</div>
            <div className="label-code" style={{ color: "var(--sw-orange)" }}>
              Every working morning
            </div>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <div className="min-w-[640px] flex flex-col gap-3">
              <div className="grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] gap-3">
                <div />
                <div className="relative h-5">
                  {HOURS.map((h, i) => (
                    <span
                      key={h}
                      className="absolute label-code text-[var(--sw-black)]/45"
                      style={{
                        left: `${(i / 3) * 100}%`,
                        transform: i === 0 ? "none" : i === 3 ? "translateX(-100%)" : "translateX(-50%)",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              {BEFORE.map((l, r) => (
                <Lane key={l.who} who={l.who} blocks={l.blocks} row={r} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* after: only the exceptions reach people */}
        <Reveal delay={0.1} className="mt-14 md:mt-16 border-t border-[var(--sw-black)]/15 pt-10">
          <div className="flex items-baseline justify-between mb-5">
            <div className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px]">With OperaLayer</div>
            <div className="label-code text-[var(--sw-blue)]">Exceptions only</div>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1.4fr_1fr] gap-3">
            <motion.div
              className="rounded-[2px] border border-[var(--sw-blue)]/30 bg-[var(--sw-blue)]/[0.06] p-5"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
            >
              <div className="label-code text-[var(--sw-blue)]">OperaLayer</div>
              <p className="mt-2 text-[var(--sw-black)]/80 text-[15px] md:text-[16px] leading-snug">
                Reads each PDF as it arrives and checks every line against the purchase order.
              </p>
            </motion.div>
            <motion.div
              className="rounded-[2px] bg-[var(--sw-black)] p-5"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="label-code text-white/55">Your team</div>
              <p className="mt-2 text-white/85 text-[15px] md:text-[16px] leading-snug">
                Opens the review queue and decides on the lines that do not agree.
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
