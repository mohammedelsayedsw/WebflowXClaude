"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { Modules } from "@/sections/operalayer/shared/Modules";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const DOCS = 16;
const CYCLE = 6.4;

/**
 * A steady stream of invoices. At the fork, most carry on into Navision and
 * every eighth one drops to a person, which is the 87 to 13 split.
 */
function Stream({ run }: { run: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-full aspect-[2.2] md:aspect-[2.6]" aria-hidden>
      {/* main line and the drop to review */}
      <div className="absolute left-0 right-[16%] top-[38%] h-[2px] bg-[var(--sw-black)]/12" />
      <div className="absolute left-[58%] top-[38%] h-[44%] w-[2px] bg-[var(--sw-black)]/12" />
      <div className="absolute left-[58%] right-[16%] top-[82%] h-[2px] bg-[var(--sw-black)]/12" />

      {/* Navision, where the clean ones go */}
      <div className="absolute right-0 top-[18%] h-[40%] w-[15%] rounded-[4px] bg-[var(--sw-blue)] flex items-center justify-center">
        <span className="font-head text-white font-semibold text-[10px] md:text-[16px]">Navision</span>
      </div>
      {/* the person who sees the rest */}
      <div className="absolute right-0 top-[68%] h-[28%] w-[15%] rounded-[4px] border border-[#ff5a31]/60 bg-white flex items-center justify-center gap-2">
        <span className="h-[34%] aspect-square rounded-full bg-[#ff5a31]/80" />
        <span className="text-[10px] md:text-[15px] text-[var(--sw-black)]/70">Review</span>
      </div>

      {Array.from({ length: DOCS }).map((_, i) => {
        const odd = i % 8 === 5;
        const delay = (i / DOCS) * CYCLE;
        if (reduce || !run) return null;
        return (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[2px] border overflow-hidden"
            style={{ width: "4.4%", aspectRatio: "3 / 4", zIndex: 2, boxShadow: "0 6px 14px -8px rgba(16,19,44,0.45)" }}
            initial={{ left: "0%", top: "38%", opacity: 0 }}
            animate={{
              left: odd ? ["0%", "58%", "58%", "84%"] : ["0%", "58%", "84%", "84%"],
              top: odd ? ["38%", "38%", "82%", "82%"] : ["38%", "38%", "38%", "38%"],
              opacity: [0, 1, 1, 0],
              backgroundColor: odd
                ? ["#ffffff", "#ffffff", "#ff5a31", "#ff5a31"]
                : ["#ffffff", "#ffffff", "#6ef76e", "#6ef76e"],
              borderColor: ["rgba(16,19,44,0.18)", "rgba(16,19,44,0.18)", "rgba(16,19,44,0)", "rgba(16,19,44,0)"],
            }}
            transition={{
              duration: CYCLE,
              times: [0, 0.55, 0.85, 1],
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="absolute left-[20%] right-[20%] top-[24%] h-[7%] rounded-full bg-[var(--sw-black)]/25" />
            <span className="absolute left-[20%] right-[38%] top-[44%] h-[7%] rounded-full bg-[var(--sw-black)]/15" />
            <span className="absolute left-[20%] right-[30%] top-[62%] h-[7%] rounded-full bg-[var(--sw-black)]/15" />
          </motion.div>
        );
      })}

      {(reduce || !run) &&
        [8, 20, 32, 44, 66, 76].map((x, k) => (
          <div
            key={x}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[2px]"
            style={{
              left: `${x}%`,
              top: k === 4 ? "82%" : "38%",
              width: "4.4%",
              aspectRatio: "3 / 4",
              background: k === 4 ? "#ff5a31" : x > 58 ? "#6ef76e" : "#ffffff",
              border: x > 58 ? "none" : "1px solid rgba(16,19,44,0.3)",
            }}
          />
        ))}
    </div>
  );
}

function Count({ to, run }: { to: number; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [run, to]);
  return <>{v}</>;
}

export function Result() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section id="result" className="bg-lp-bright py-28 md:py-40">
      <div className="wrap" ref={ref}>
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-12 lg:gap-20 items-center">
          <div>
            <div className="font-head text-[var(--sw-black)] text-[88px] md:text-[128px] leading-none tracking-[-0.03em] tabular-nums">
              <Count to={87} run={run} />
              <span className="text-[0.45em]">%</span>
            </div>
            <p className="mt-6 text-[var(--sw-black)] text-[20px] md:text-[24px] leading-snug max-w-[22ch] font-head">
              of invoices go through without anyone touching them
            </p>
            <p className="mt-6 text-[var(--sw-black)]/65 text-[17px] md:text-[18px] leading-relaxed max-w-[40ch]">
              Two people used to check these invoices by hand every morning. Now one
              app reads about a hundred supplier layouts and sends them only the
              exceptions.
            </p>
          </div>
          <Stream run={run} />
        </div>
        <Modules current="invoice-matching" />
      </div>
    </section>
  );
}
