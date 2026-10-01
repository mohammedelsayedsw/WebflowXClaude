"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { Modules } from "@/sections/operalayer/shared/Modules";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Count({ to, run }: { to: number; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [run, to]);
  return <>{v}</>;
}

/**
 * 8 margin types by 50 states: every cell is one price. A rule change sends a
 * wave across all of them, which is the whole point of the app.
 */
function MarginWave({ run }: { run: boolean }) {
  const reduce = useReducedMotion();
  const [wave, setWave] = useState(0);
  useEffect(() => {
    if (!run || reduce) return;
    const t = window.setInterval(() => setWave((w) => w + 1), 4200);
    return () => window.clearInterval(t);
  }, [run, reduce]);

  return (
    <div className="w-full">
      <div className="grid gap-[3px] md:gap-[4px]" style={{ gridTemplateRows: "repeat(8, minmax(0, 1fr))" }}>
        {Array.from({ length: 8 }).map((_, r) => (
          <div key={r} className="grid gap-[2px] md:gap-[3px]" style={{ gridTemplateColumns: "repeat(50, minmax(0, 1fr))" }}>
            {Array.from({ length: 50 }).map((_, c) => (
              <motion.span
                key={`${c}-${wave}`}
                className="block aspect-[1/2] rounded-[1px]"
                initial={{ backgroundColor: wave === 0 ? "rgba(16,19,44,0.08)" : "#3f4aaf" }}
                animate={
                  run
                    ? wave === 0
                      ? { backgroundColor: "#3f4aaf" }
                      : { backgroundColor: ["#3f4aaf", "#6ef76e", "#3f4aaf"] }
                    : {}
                }
                transition={{ delay: c * 0.022 + r * 0.05, duration: wave === 0 ? 0.3 : 0.9 }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-[14px] text-[var(--sw-black)]/50">
        <span>8 margin types</span>
        <span>50 states</span>
      </div>
    </div>
  );
}

export function Result() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.35 });
  return (
    <section id="result" className="bg-lp-bright py-28 md:py-40">
      <div className="wrap" ref={ref}>
        <h2 className="font-head text-[var(--sw-black)] text-[36px] md:text-[52px] leading-[1.05] max-w-[18ch]">
          One set of rules now prices all 50 states
        </h2>
        <p className="mt-6 text-[var(--sw-black)]/70 text-[18px] md:text-[20px] leading-relaxed max-w-[44ch]">
          A US specialty retailer selling direct to consumers on Magento (Adobe Commerce)
          retired its pricing workbook. Every margin type is recalculated for every state
          as soon as a rule changes.
        </p>

        <div className="mt-16 md:mt-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] gap-12 lg:gap-16 items-center">
          <div className="flex lg:flex-col gap-12 lg:gap-10">
            <div>
              <div className="font-head text-[var(--sw-black)] text-[72px] md:text-[96px] leading-none tracking-[-0.03em] tabular-nums">
                <Count to={50} run={run} />
              </div>
              <div className="mt-3 text-[16px] text-[var(--sw-black)]/60">states priced live</div>
            </div>
            <div>
              <div className="font-head text-[var(--sw-blue)] text-[72px] md:text-[96px] leading-none tracking-[-0.03em] tabular-nums">
                <Count to={8} run={run} />
              </div>
              <div className="mt-3 text-[16px] text-[var(--sw-black)]/60">margin types per state</div>
            </div>
          </div>
          <MarginWave run={run} />
        </div>

        <Modules current="pricing-control" />
      </div>
    </section>
  );
}
