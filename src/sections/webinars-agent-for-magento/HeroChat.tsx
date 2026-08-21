"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Check, Loader2 } from "lucide-react";

/**
 * Hero visual for the Agent for Magento launch webinar.
 *
 * A chat thread. The request sits at the top, Ari works through a four-step
 * checklist, and a small store preview behind the thread lights up as the run
 * completes. Steps arrive one by one on scroll into view and the run loops with
 * a pause, so a visitor who lands mid-scroll still sees it work.
 *
 * State-driven rather than imperative: `stage` counts half-steps, so an odd
 * stage means the current step is still spinning and an even one means it has
 * ticked. That keeps the render honest and makes the loop trivial to reset.
 *
 * Under prefers-reduced-motion the thread renders finished and still, which is
 * the same information without the movement.
 */

const STEPS: { label: string; count: string }[] = [
  { label: "Read the category and 90 days of orders", count: "4,108 products" },
  { label: "Wrote the catalog price rule, 25% off", count: "1 rule" },
  { label: "Built the countdown banner", count: "2 store views" },
  { label: "Re-sorted by units sold and reindexed", count: "8 moved" },
];

const PROMPT =
  "launch the autumn sale on Outerwear, 25% off, old price crossed out, a countdown banner, bestsellers first";

const TOTAL = STEPS.length * 2;
const HOLD_MS = 3600;

export function HeroChat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const [stage, setStage] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setStage(TOTAL);
      return;
    }

    let timer = 0;
    let cancelled = false;

    const advance = (next: number) => {
      if (cancelled) return;
      setStage(next);
      // Odd stages are the spinner, even ones the tick, so the spinner holds
      // longer than the tick that follows it.
      const delay =
        next >= TOTAL ? HOLD_MS : next % 2 === 1 ? 620 : 380;
      timer = window.setTimeout(
        () => advance(next >= TOTAL ? 0 : next + 1),
        delay,
      );
    };

    timer = window.setTimeout(() => advance(1), 500);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [inView]);

  const done = stage >= TOTAL;

  return (
    <div ref={ref} className="relative">
      {/* Store preview behind the thread. A flat placeholder rather than a
          screenshot, so it never competes with the chat for attention. */}
      <div
        aria-hidden
        className="absolute -right-2 -top-4 hidden lg:block w-[62%] rounded-[4px] border border-white/10 bg-white/[0.04] p-4 transition-opacity duration-500"
        style={{ opacity: done ? 1 : 0.25 }}
      >
        <div className="flex items-center gap-1.5 mb-3">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
        </div>
        <div
          className="h-6 w-2/3 rounded-[2px] mb-3"
          style={{ background: "var(--sw-mint)", opacity: 0.55 }}
        />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-[2px] bg-white/[0.07]"
            />
          ))}
        </div>
      </div>

      <div className="relative rounded-[4px] border border-white/12 bg-[var(--lp-bg-elev)]/85 backdrop-blur-sm p-5 md:p-6">
        <div className="label-code text-white/45 mb-3">You</div>
        <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.5]">
          &ldquo;{PROMPT}&rdquo;
        </p>

        <div className="mt-5 pt-5 border-t border-white/10">
          <div className="label-code text-white/45 mb-4">Ari</div>

          {/* Reserved height so the hero does not jump as steps arrive. */}
          <ul className="flex flex-col gap-3 min-h-[132px] md:min-h-[140px]">
            {STEPS.map((s, i) => {
              const shown = still || stage >= i * 2 + 1;
              const ticked = still || stage >= i * 2 + 2;
              return (
                <li
                  key={s.label}
                  className="flex items-start gap-3 transition-all duration-300"
                  style={{
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  <span className="relative mt-0.5 h-4 w-4 shrink-0">
                    {ticked ? (
                      <Check
                        className="absolute inset-0 h-4 w-4"
                        style={{ color: "var(--sw-mint)" }}
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Loader2
                        className="absolute inset-0 h-4 w-4 animate-spin text-white/40"
                        strokeWidth={2}
                      />
                    )}
                  </span>
                  <span className="text-[14px] md:text-[15px] leading-snug text-white/75">
                    {s.label}
                    <span className="text-white/40"> &middot; {s.count}</span>
                  </span>
                </li>
              );
            })}
          </ul>

          <div
            className="mt-5 flex items-center gap-2 transition-opacity duration-500"
            style={{ opacity: done ? 1 : 0 }}
          >
            <span
              className="font-head text-[22px] md:text-[26px] leading-none tracking-[-0.02em]"
              style={{ color: "var(--sw-mint)" }}
            >
              2m 10s
            </span>
            <span className="text-white/50 text-[13px] md:text-[14px]">
              ready for your approval
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
