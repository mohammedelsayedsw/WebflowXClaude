"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { NORMAL, PEAK, type Row } from "./data";
import { Reveal } from "@/components/primitives/Reveal";
import { Shell } from "./Shell";

/** Real milliseconds become this many on screen, so a 20 ms answer is visible at all. */
const SLOW = 4;

/**
 * Every page type requested at the same instant, replayed 10x slower. Each bar
 * fills for exactly as long as that build took to answer, so the race is the
 * data: the green side finishes while the grey side is still waiting.
 */
export function Race({ bare = false, onMode }: { bare?: boolean; onMode?: (m: "peak" | "normal") => void }) {
  const [mode, setMode] = useState<"peak" | "normal">("peak");
  const rows: Row[] = mode === "peak" ? PEAK : NORMAL;
  const max = Math.max(...rows.map((r) => r.magento));

  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { amount: 0.35 });
  const [t, setT] = useState(0); // elapsed real ms in the replay
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const start = performance.now();
    const end = max * SLOW + 1400;
    const step = (now: number) => {
      const e = now - start;
      setT(Math.min(e / SLOW, max));
      if (e < end) raf = requestAnimationFrame(step);
    };
    setT(0);
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, run, max]);

  const pick = (m: "peak" | "normal") => {
    setMode(m);
    onMode?.(m);
    setRun((r) => r + 1);
  };

  return (
    <Shell bare={bare}>
        {!bare && (
        <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px]">
              Response time: {mode === "peak" ? "peak" : "normal"} traffic
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              {mode === "peak"
                ? "Median response time per page type, at the traffic where stock Magento began to strain."
                : "Median response time per page type, at about half of peak traffic."}{" "}
              Bars replay each response four times slower.
            </p>
          </div>
        </Reveal>
        )}

        <div className={`${bare ? "" : "mt-10 "}flex flex-wrap items-center gap-3`}>
          <div className="inline-flex rounded-[2px] border border-white/20 p-1">
            {(["peak", "normal"] as const).map((m) => (
              <button
                key={m}
                onClick={() => pick(m)}
                className={`h-9 px-4 text-[14px] font-semibold rounded-[2px] transition ${
                  mode === m ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/70 hover:text-white"
                }`}
              >
                {m === "peak" ? "Peak traffic" : "Normal traffic"}
              </button>
            ))}
          </div>
          <button onClick={() => setRun((r) => r + 1)} className="h-11 px-4 text-[14px] text-white/70 hover:text-white">
            Replay
          </button>
          <div className="ml-auto hidden md:flex items-center gap-5 text-[13px] text-white/60">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-[1px]" style={{ background: "var(--magento)" }} />
              Stock Magento
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-[1px]" style={{ background: "var(--sw-mint)" }} />
              Expedio
            </span>
          </div>
        </div>

        <div ref={ref} className="mt-8 hair-t">
          {rows.map((r) => {
            const mDone = t >= r.magento;
            const eDone = t >= r.expedio;
            return (
              <div key={r.page} className="hair-b py-5 md:py-6 grid grid-cols-12 gap-x-4 gap-y-3 items-center">
                <div className="col-span-8 md:col-span-3">
                  <div className="text-white text-[16px] font-semibold">{r.page}</div>
                  <div className="text-white/45 text-[13px] mt-0.5">{r.rate} requests a second</div>
                </div>
                <div className="col-span-4 md:col-span-2 md:order-last text-right">
                  <span
                    className="font-[family-name:var(--font-golos)] font-bold text-[28px] md:text-[34px] leading-none tabular-nums transition-opacity duration-500"
                    style={{ color: "var(--sw-mint)", opacity: mDone ? 1 : 0.18 }}
                  >
                    {r.x.toFixed(1)}x
                  </span>
                </div>
                <div className="col-span-12 md:col-span-7 space-y-2">
                  <Bar value={Math.min(t, r.magento)} total={r.magento} max={max} done={mDone} color="var(--magento)" />
                  <Bar value={Math.min(t, r.expedio)} total={r.expedio} max={max} done={eDone} color="var(--sw-mint)" glow />
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-white/45 text-[13px]">Median time to first byte, no page cache. 1,000 ms is one second.</p>
    </Shell>
  );
}

function Bar({
  value,
  total,
  max,
  done,
  color,
  glow,
}: {
  value: number;
  total: number;
  max: number;
  done: boolean;
  color: string;
  glow?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1 h-3 md:h-3.5 bg-white/[0.06] rounded-[1px] overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-[1px]"
          style={{
            width: `${(value / max) * 100}%`,
            background: color,
            boxShadow: glow && done ? "0 0 16px rgba(110,247,110,0.6)" : undefined,
          }}
        />
      </div>
      <div className={`w-[64px] text-right text-[14px] tabular-nums ${done ? "text-white" : "text-white/40"}`}>
        {done ? total : Math.round(value)} ms
      </div>
    </div>
  );
}
