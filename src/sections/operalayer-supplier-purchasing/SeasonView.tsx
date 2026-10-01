"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { useCycle } from "@/sections/operalayer/shared/useCycle";
import { CATEGORIES, MONTHS, eur, monthly } from "./data";

/**
 * Season view by category. The visitor picks a category on the left and the
 * month chart redraws: committed as an outline, delivered in mint, invoiced in
 * light blue. It cycles through categories on its own until someone clicks.
 */
const W = 640;
const H = 280;
const PAD_L = 44;
const PAD_B = 28;
const PAD_T = 12;
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Chart({ index }: { index: number }) {
  const c = CATEGORIES[index];
  const data = monthly(c);
  const max = Math.max(...data.map((d) => d.committed)) * 1.15;
  const plotH = H - PAD_B - PAD_T;
  const groupW = (W - PAD_L) / MONTHS.length;
  const barW = Math.min(18, groupW / 4.2);
  const y = (v: number) => PAD_T + plotH - (v / max) * plotH;
  const ticks = [0, max / 3, (2 * max) / 3];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`Monthly purchasing for ${c.name}`}>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={PAD_L} x2={W} y1={y(t)} y2={y(t)} stroke="rgba(255,255,255,0.08)" />
          <text x={PAD_L - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.4)">
            {eur(t)}
          </text>
        </g>
      ))}
      {data.map((d, i) => {
        const gx = PAD_L + i * groupW + groupW / 2;
        const bars = [
          { v: d.committed, fill: "transparent", stroke: "rgba(255,255,255,0.5)" },
          { v: d.delivered, fill: "var(--sw-mint)", stroke: "none" },
          { v: d.invoiced, fill: "#8f97e6", stroke: "none" },
        ];
        return (
          <g key={d.month}>
            {bars.map((b, j) => {
              const x = gx + (j - 1) * (barW + 3) - barW / 2;
              return (
                <motion.rect
                  key={j}
                  x={x}
                  width={barW}
                  rx={1}
                  fill={b.fill}
                  stroke={b.stroke}
                  strokeWidth={1}
                  initial={false}
                  animate={{ y: y(b.v), height: Math.max(0, PAD_T + plotH - y(b.v)) }}
                  transition={{ duration: 0.7, delay: i * 0.04 + j * 0.03, ease }}
                />
              );
            })}
            <text x={gx} y={H - 8} textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.55)">
              {d.month}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function SeasonView() {
  const { ref, index, pick } = useCycle(CATEGORIES.length, 3600);
  const c = CATEGORIES[index];

  return (
    <section id="season" className="bg-[var(--sw-black)] py-28 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-end">
          <Reveal>
            <div className="label-code text-white/50 mb-5">Season view</div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[52px] leading-[1.05] max-w-[16ch]">
              Every category of the season on one screen
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[50ch]">
              Pick a category to compare what was committed with what has been delivered and
              invoiced so far. Buyers see the gaps month by month, while there is still time to act
              on them.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="mt-14 md:mt-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 border-white/10 lg:border-t">
            {CATEGORIES.map((cat, i) => {
              const active = i === index;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => pick(i)}
                  className={`relative shrink-0 text-left lg:border-b border-white/10 px-3 lg:px-0 py-2.5 lg:py-3.5 transition rounded-[2px] lg:rounded-none ${
                    active
                      ? "text-white bg-white/[0.06] lg:bg-transparent"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <span className="flex items-center justify-between gap-6">
                    <span className="font-head text-[14px] lg:text-[16px] whitespace-nowrap">{cat.name}</span>
                    <span className="hidden lg:inline tabular-nums text-[13px] text-white/45">{eur(cat.committed)}</span>
                  </span>
                  {active && (
                    <motion.span
                      layoutId="season-active"
                      className="hidden lg:block absolute left-0 bottom-[-1px] h-[2px] w-full bg-[var(--sw-mint)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AppFrame module="season view" status="SS26">
            <div className="px-4 md:px-6 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 border-b border-white/10 pb-5">
              <div>
                <div className="label-code text-white/45">Committed</div>
                <div className="mt-1 font-head text-white text-[20px] md:text-[24px] tabular-nums">{eur(c.committed)}</div>
              </div>
              <div>
                <div className="label-code text-white/45">Delivered</div>
                <div className="mt-1 font-head text-[20px] md:text-[24px] tabular-nums text-[var(--sw-mint)]">
                  {Math.round(c.delivered * 100)}%
                </div>
              </div>
              <div>
                <div className="label-code text-white/45">Invoiced</div>
                <div className="mt-1 font-head text-[20px] md:text-[24px] tabular-nums" style={{ color: "#8f97e6" }}>
                  {Math.round(c.invoiced * 100)}%
                </div>
              </div>
              <div>
                <div className="label-code text-white/45">Brands</div>
                <div className="mt-1 font-head text-white text-[20px] md:text-[24px] tabular-nums">{c.brands}</div>
              </div>
            </div>
            <div className="px-2 md:px-5 pt-5 pb-2">
              <Chart index={index} />
            </div>
            <div className="px-4 md:px-6 py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[12px] text-white/55">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-[1px] border border-white/60" /> Committed
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-[1px] bg-[var(--sw-mint)]" /> Delivered
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-[1px]" style={{ background: "#8f97e6" }} /> Invoiced
                </span>
              </div>
              <span className="label-code text-white/40">Example season data</span>
            </div>
          </AppFrame>
        </div>
      </div>
    </section>
  );
}
