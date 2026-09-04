"use client";

import { useEffect, useRef } from "react";

/**
 * The three lines, one at a time. The section is just under two screens tall
 * and its content is pinned, so scrolling walks the reader through the lines:
 * each one brightens on its turn and the earlier ones dim behind it. The last
 * line is the accent colour and stays lit; the pin releases soon after it does,
 * and the whole block drifts a little the entire time so the scroll never
 * feels caught.
 *
 * Progress is read straight from the section's position on each scroll event
 * and written as opacity and transform, both of which the compositor handles.
 * Colour never animates: repainting 112px glyphs on every scroll frame is what
 * made the first version stutter.
 */
const LINES = ["No new platform.", "No replatforming.", "Your Magento."];
// [lights up from, fully lit at, starts dimming at, dim by], as section progress
const WINDOWS: [number, number, number, number][] = [
  [0, 0.001, 0.3, 0.38],
  [0.26, 0.38, 0.62, 0.7],
  [0.58, 0.72, 1, 1],
];
const DIM = 0.14;
const PAST = 0.28;
const SLIDE = 28;

const ramp = (p: number, a: number, b: number) => {
  const t = Math.min(1, Math.max(0, (p - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export function Denials() {
  const section = useRef<HTMLElement>(null);
  const block = useRef<HTMLDivElement>(null);
  const lines = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const sec = section.current;
    if (!sec) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = () => {
      const range = sec.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / range)) : 1;
      lines.current.forEach((el, i) => {
        if (!el) return;
        const [from, lit, dimFrom, dimBy] = WINDOWS[i];
        const first = i === 0;
        const last = i === LINES.length - 1;
        const up = first ? 1 : ramp(p, from, lit);
        const down = last ? 0 : ramp(p, dimFrom, dimBy);
        const opacity = (DIM + (1 - DIM) * up) * (1 - down) + PAST * down;
        el.style.opacity = opacity.toFixed(3);
        el.style.transform = reduce || first ? "none" : `translateX(${(SLIDE * (1 - up)).toFixed(1)}px)`;
      });
      if (block.current) {
        block.current.style.transform = reduce ? "none" : `translateY(${(28 - 72 * p).toFixed(1)}px)`;
      }
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <section ref={section} id="before-you-ask" className="relative z-10 h-[190vh]">
      <div className="sticky top-0 h-[100svh] flex items-center">
        <div ref={block} className="wrap w-full will-change-transform">
          <div className="label-code text-white/40 mb-8 md:mb-12">Before you ask</div>
          <div className="flex flex-col gap-2 md:gap-4">
            {LINES.map((text, i) => (
              <p
                key={text}
                ref={(el) => {
                  lines.current[i] = el;
                }}
                style={{
                  opacity: i === 0 ? 1 : DIM,
                  transform: i === 0 ? "none" : `translateX(${SLIDE}px)`,
                  color: i === LINES.length - 1 ? "var(--sw-mint)" : "#ffffff",
                  willChange: "opacity, transform",
                }}
                className="font-head text-[38px] sm:text-[60px] md:text-[84px] lg:text-[112px] leading-[1.02] tracking-[-0.025em]"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
