"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "motion/react";
import { H2, Rise, useSeq } from "@/sections/operalayer/kit/parts";
import { C, Tag, Tick, Window, ease } from "@/sections/operalayer/kit/ui";

/*
 * The buyer's season view. Category totals are illustrative but add up to the
 * real €34 million SS26 total; brand counts add up to 50+ supplier brands.
 */
export const CATEGORIES = [
  { name: "Running footwear", brands: 12, committed: 8.6, delivered: 0.74, invoiced: 0.66 },
  { name: "Outdoor apparel", brands: 10, committed: 7.2, delivered: 0.66, invoiced: 0.61, flag: "Price differs" },
  { name: "Team sports", brands: 8, committed: 5.4, delivered: 0.8, invoiced: 0.71 },
  { name: "Training apparel", brands: 8, committed: 4.9, delivered: 0.71, invoiced: 0.68 },
  { name: "Kids", brands: 6, committed: 3.8, delivered: 0.63, invoiced: 0.54, flag: "Quantity short" },
  { name: "Swimwear", brands: 5, committed: 2.1, delivered: 0.47, invoiced: 0.42 },
  { name: "Accessories", brands: 5, committed: 2.0, delivered: 0.77, invoiced: 0.72 },
];

const MAX = 8.6;

function Total({ run }: { run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(34);
    const c = animate(0, 34, { duration: 1.6, ease, onUpdate: setV });
    return () => c.stop();
  }, [run]);
  return <>€{v.toFixed(1)}M</>;
}

export function SeasonWindow() {
  const { ref, t } = useSeq(4, 500, 300);
  return (
    <div ref={ref} style={{ containerType: "inline-size" }}>
      <Window title="operalayer / purchasing / SS26">
        <div style={{ fontSize: "clamp(9.5px, 1.25cqw, 14px)" }}>
          <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.7fr))] border-b" style={{ borderColor: C.line }}>
            <div className="px-[1.6em] py-[1.2em]">
              <div style={{ color: C.faint, fontSize: "0.85em" }}>SS26 season, every supplier brand</div>
              <div className="mt-[0.3em] font-semibold tabular-nums" style={{ fontSize: "2.4em", lineHeight: 1 }}>
                <Total run={t >= 1} />
              </div>
              <div style={{ color: C.dim, fontSize: "0.85em" }}>committed with suppliers</div>
            </div>
            {[
              ["Supplier brands", "54", C.text],
              ["Delivered", "69%", C.mint],
              ["Open flags", "2", C.orange],
            ].map(([k, v, col]) => (
              <div key={k} className="hidden sm:block px-[1.4em] py-[1.2em] border-l" style={{ borderColor: C.line }}>
                <div style={{ color: C.faint, fontSize: "0.85em" }}>{k}</div>
                <div className="mt-[0.4em] font-semibold tabular-nums" style={{ fontSize: "1.7em", color: col }}>
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div className="px-[1.6em] pt-[1em] pb-[0.4em] grid grid-cols-[minmax(0,1.25fr)_4.5em_minmax(0,2fr)_7.5em] gap-x-[1.2em] items-center" style={{ color: C.faint, fontSize: "0.82em" }}>
            <span>Category</span>
            <span className="text-right">Committed</span>
            <span className="flex gap-[1.2em]">
              <span className="inline-flex items-center gap-[0.4em]">
                <span className="h-[0.6em] w-[0.6em] rounded-[1px]" style={{ background: C.mint }} /> Delivered
              </span>
              <span className="inline-flex items-center gap-[0.4em]">
                <span className="h-[0.6em] w-[0.6em] rounded-[1px]" style={{ background: C.blue }} /> Invoiced
              </span>
            </span>
            <span className="text-right">Check</span>
          </div>

          <div className="px-[1.6em] pb-[1.2em]">
            {CATEGORIES.map((c, i) => {
              const w = (c.committed / MAX) * 100;
              const show = t >= 2;
              return (
                <div
                  key={c.name}
                  className="grid grid-cols-[minmax(0,1.25fr)_4.5em_minmax(0,2fr)_7.5em] gap-x-[1.2em] items-center py-[0.75em] border-t"
                  style={{ borderColor: C.line }}
                >
                  <div className="min-w-0">
                    <div className="truncate">{c.name}</div>
                    <div style={{ color: C.faint, fontSize: "0.8em" }}>{c.brands} brands</div>
                  </div>
                  <span className="text-right font-mono tabular-nums">€{c.committed.toFixed(1)}M</span>
                  <div className="relative h-[1.1em]">
                    <div className="absolute inset-y-0 left-0 rounded-[1px]" style={{ width: `${w}%`, background: "rgba(255,255,255,0.07)" }} />
                    <motion.div
                      className="absolute left-0 top-0 h-[0.5em] rounded-[1px] origin-left"
                      style={{ width: `${w * c.delivered}%`, background: C.mint }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: show ? 1 : 0 }}
                      transition={{ duration: 0.9, ease, delay: i * 0.06 }}
                    />
                    <motion.div
                      className="absolute left-0 bottom-0 h-[0.5em] rounded-[1px] origin-left"
                      style={{ width: `${w * c.invoiced}%`, background: C.blue }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: show ? 1 : 0 }}
                      transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.06 }}
                    />
                  </div>
                  <span className="flex justify-end">
                    {c.flag ? (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: t >= 3 ? 1 : 0 }} transition={{ duration: 0.4 }}>
                        <Tag tone="orange">{c.flag}</Tag>
                      </motion.span>
                    ) : (
                      <Tick on={t >= 3} />
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-between gap-3 px-[1.6em] py-[1em] border-t"
            style={{ borderColor: C.line, color: C.dim }}
            initial={{ opacity: 0 }}
            animate={{ opacity: t >= 4 ? 1 : 0 }}
          >
            <span>Orders read from Microsoft Business Central 6 minutes ago</span>
            <span style={{ color: C.mint }}>Up to date</span>
          </motion.div>
        </div>
      </Window>
    </div>
  );
}

export function Demo() {
  return (
    <section id="demo" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[70%]"
        style={{ background: "radial-gradient(760px 420px at 30% 55%, rgba(110,247,110,0.08), transparent 70%), radial-gradient(800px 420px at 75% 45%, rgba(63,74,175,0.26), transparent 70%)" }}
      />
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-7">
            <h2 className={H2}>The whole season on one screen</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              Buyers see each brand&apos;s commitments next to what has arrived and been invoiced. Anything that
              does not agree is flagged on the row it belongs to.
            </p>
          </Rise>
        </div>
        <Rise delay={0.1} className="mt-14">
          <SeasonWindow />
        </Rise>
      </div>
    </section>
  );
}
