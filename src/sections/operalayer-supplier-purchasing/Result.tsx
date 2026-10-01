"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { Modules } from "@/sections/operalayer/shared/Modules";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const FLAGGED = 52;
const BOXES = 12;

function Count({ to, run, duration = 1.8 }: { to: number; run: boolean; duration?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const c = animate(0, to, { duration, ease, onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [run, to, duration]);
  return <>{v}</>;
}

/**
 * Deliveries roll toward the shelves. At the invoice check some are lifted
 * out and held for the buyer, while the count runs up to 52.
 */
function Conveyor({ run }: { run: boolean }) {
  const reduce = useReducedMotion();
  const [held, setHeld] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setHeld(FLAGGED);
      return;
    }
    const t = window.setInterval(() => {
      setHeld((h) => {
        if (h >= FLAGGED) {
          window.clearInterval(t);
          return h;
        }
        return h + 1;
      });
    }, 90);
    return () => window.clearInterval(t);
  }, [run, reduce]);

  return (
    <div className="relative w-full">
      <div className="font-head text-[var(--sw-black)] text-[72px] md:text-[104px] leading-none tracking-[-0.03em] tabular-nums">
        {held}
      </div>
      <p className="mt-4 text-[var(--sw-black)]/75 text-[18px] md:text-[20px] leading-relaxed max-w-[28ch]">
        invoice differences caught before the goods reached the shelves.
      </p>

      {/* the line toward the shelves */}
      <div className="relative mt-14 h-[120px] md:h-[150px] overflow-hidden" aria-hidden>
        <div className="absolute left-0 right-0 bottom-[26%] h-[2px] bg-[var(--sw-black)]/15" />
        <div className="absolute bottom-0 left-[60%] -translate-x-1/2 text-[13px] md:text-[14px] text-[var(--sw-black)]/55 whitespace-nowrap">
          Invoice check
        </div>
        <div className="absolute top-[12%] bottom-[26%] left-[60%] w-px border-l border-dashed border-[var(--sw-orange)]/60" />
        <div className="absolute bottom-0 right-0 text-[13px] md:text-[14px] text-[var(--sw-black)]/55">Shelves</div>
        <div className="absolute right-0 top-[18%] bottom-[26%] w-[10%] rounded-[2px] border border-[var(--sw-black)]/15 bg-white" />

        {!reduce &&
          run &&
          Array.from({ length: BOXES }).map((_, k) => {
            const flagged = k % 3 === 1;
            const duration = 6.3;
            return (
              <motion.div
                key={k}
                className="absolute bottom-[26%] h-[24%] aspect-square rounded-[2px] border"
                style={{ marginBottom: 2 }}
                initial={{ left: "-8%", y: 0, opacity: 0 }}
                animate={
                  flagged
                    ? {
                        left: ["-8%", "57%", "57%", "57%"],
                        y: [0, 0, 0, -70],
                        opacity: [1, 1, 1, 0],
                        backgroundColor: ["#3f4aaf", "#3f4aaf", "#ff5a31", "#ff5a31"],
                        borderColor: ["#3f4aaf", "#3f4aaf", "#ff5a31", "#ff5a31"],
                      }
                    : {
                        left: ["-8%", "88%"],
                        y: 0,
                        opacity: [1, 1],
                        backgroundColor: "#3f4aaf",
                        borderColor: "#3f4aaf",
                      }
                }
                transition={{
                  duration: flagged ? duration * 0.78 : duration,
                  times: flagged ? [0, 0.72, 0.8, 1] : undefined,
                  ease: "linear",
                  repeat: Infinity,
                  delay: k * (duration / BOXES),
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export function Result() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="result" className="bg-lp-bright py-28 md:py-40">
      <div className="wrap" ref={ref}>
        <h2 className="font-head text-[var(--sw-black)] text-[36px] md:text-[52px] leading-[1.05] max-w-[20ch]">
          What changed for a Baltic sports and apparel retailer
        </h2>

        <div className="mt-16 md:mt-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-16 lg:gap-24 items-start">
          <div>
            <div className="font-head text-[var(--sw-black)] text-[72px] md:text-[104px] leading-none tracking-[-0.03em] tabular-nums">
              €<Count to={34} run={run} />
              <span className="text-[0.45em] tracking-[-0.01em]"> million</span>
            </div>
            <p className="mt-4 text-[var(--sw-black)]/75 text-[18px] md:text-[20px] leading-relaxed max-w-[28ch]">
              of SS26 purchasing tracked live across more than 50 supplier brands.
            </p>
          </div>
          <Conveyor run={run} />
        </div>

        <Modules current="supplier-purchasing" />
      </div>
    </section>
  );
}
