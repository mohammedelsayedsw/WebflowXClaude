"use client";

import { useEffect, useRef } from "react";

/**
 * Compact five-step reconciliation flow for the case-study right column.
 * A timeline: each step is a node on a vertical rail, and the rail segments
 * light up top to bottom on scroll into view, loop with a pause, and are shown
 * fully lit with no motion when the visitor prefers reduced motion.
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
    detail:
      "Every correction an operator makes feeds back, so the same mistake stops coming back.",
  },
];

export function ReconciliationFlow() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const connRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const conns = connRefs.current.filter(Boolean) as HTMLSpanElement[];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      conns.forEach((c) => c.classList.add("cf-lit"));
      return;
    }

    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((r) => window.setTimeout(r, ms));

    const run = async () => {
      while (!cancelled) {
        conns.forEach((c) => c.classList.remove("cf-lit"));
        await wait(300);
        for (const c of conns) {
          if (cancelled) return;
          c.classList.add("cf-lit");
          await wait(420);
        }
        await wait(2000);
      }
    };

    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            run();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(wrap);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef}>
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
                  style={{
                    background: "var(--sw-mint)",
                    boxShadow: "0 0 0 4px rgba(110,247,110,0.12)",
                  }}
                />
                {!last && (
                  <span
                    className="relative mt-1 w-[2px] flex-1 rounded"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    <span
                      ref={(el) => {
                        connRefs.current[i] = el;
                      }}
                      className="cf-conn absolute inset-0 rounded"
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

      <style jsx>{`
        .cf-conn {
          background: var(--sw-mint);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 440ms ease;
          box-shadow: 0 0 6px rgba(110, 247, 110, 0.6);
        }
        .cf-conn.cf-lit {
          transform: scaleY(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .cf-conn {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
