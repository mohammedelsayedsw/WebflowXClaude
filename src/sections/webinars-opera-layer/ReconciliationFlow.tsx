"use client";

import { useEffect } from "react";
import { useAnimate, useInView } from "motion/react";

/**
 * Compact five-step reconciliation flow for the case-study right column.
 * A timeline: each step is a node on a vertical rail. On scroll into view the
 * rail segments fill top to bottom in sequence, loop with a pause, and are
 * shown fully filled with no motion under prefers-reduced-motion. Driven with
 * framer-motion (same library as the page's Reveal), no glow.
 */

const STEPS: { title: string; detail: string }[] = [
  {
    title: "Documents arrive",
    detail:
      "Invoice, delivery note, and transport waybill, uploaded by warehouse and accounting.",
  },
  {
    title: "AI reads each one",
    detail: "Extraction and OCR, with per-supplier hints.",
  },
  {
    title: "Lines matched to the purchase order",
    detail: "Against the PO lines pulled from the ERP.",
  },
  {
    title: "Posted back to the ERP",
    detail: "Goods receipt and invoice posted automatically.",
  },
  {
    title: "It learns",
    detail: "Every correction an operator makes feeds back into the system.",
  },
];

const CONN_COUNT = STEPS.length - 1;

export function ReconciliationFlow() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { amount: 0.4 });

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (let i = 0; i < CONN_COUNT; i++) {
        animate(`.cf-fill-${i}`, { scaleY: 1 }, { duration: 0 });
      }
      return;
    }

    let active = true;
    const wait = (ms: number) =>
      new Promise<void>((r) => window.setTimeout(r, ms));

    const loop = async () => {
      while (active) {
        await animate(".cf-fill", { scaleY: 0 }, { duration: 0 });
        await wait(300);
        for (let i = 0; i < CONN_COUNT; i++) {
          if (!active) return;
          await animate(
            `.cf-fill-${i}`,
            { scaleY: 1 },
            { duration: 0.44, ease: "easeOut" }
          );
        }
        await wait(2000);
      }
    };
    loop();

    return () => {
      active = false;
    };
  }, [inView, animate]);

  return (
    <div ref={scope}>
      <ol className="m-0 list-none p-0">
        {STEPS.map((s, i) => {
          const last = i === STEPS.length - 1;
          return (
            <li
              key={i}
              className="grid grid-cols-[26px_1fr] items-stretch gap-4"
            >
              {/* rail */}
              <div className="flex flex-col items-center">
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
                  style={{ background: "var(--sw-mint)" }}
                />
                {!last && (
                  <span
                    className="relative mt-1 w-[2px] flex-1 rounded"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    <span
                      className={`cf-fill cf-fill-${i} absolute inset-0 rounded`}
                      style={{
                        background: "var(--sw-mint)",
                        transformOrigin: "top",
                        transform: "scaleY(0)",
                      }}
                    />
                  </span>
                )}
              </div>

              {/* content */}
              <div className={last ? "" : "pb-7"}>
                <div className="font-head text-white text-[16px] md:text-[17px] leading-[1.25]">
                  {s.title}
                </div>
                <div className="text-white/65 text-[14px] md:text-[15px] leading-snug mt-1">
                  {s.detail}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
