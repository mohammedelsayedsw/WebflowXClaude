"use client";

/**
 * One statement, given a band of its own.
 *
 * This is the objection an IT reader raises first, and it is answered in a
 * single line. It was three cards and a heading, which gave a one sentence
 * point the weight of a section; as a slim band between two green rules it
 * reads in the moment it takes to scroll past.
 *
 * Light, against the dark sections either side of it. It sits in the middle of
 * the page's longest dark run, where another dark band would have scrolled
 * past unnoticed.
 *
 * The check draws itself and the text follows. Under prefers-reduced-motion
 * both are painted finished.
 */

import { useEffect, useRef, useState } from "react";

export function YourSystem() {
  const [on, setOn] = useState(false);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setOn(true)),
      { threshold: 0.4 }
    );
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={root}
      id="your-system"
      className="relative bg-lp-bright scroll-mt-20"
      style={{
        // The mint reads as a highlight on dark and as a smear on this
        // background, so the rules take the darker green the light sections
        // already use for a check.
        borderTop: "1px solid rgba(31, 138, 59, 0.45)",
        borderBottom: "1px solid rgba(31, 138, 59, 0.45)",
      }}
    >
      <div className="wrap">
        <div className="flex items-center gap-5 md:gap-8 min-h-[160px] py-8">
          {/* A screen with a check on it. The screen is the same shape as the
              AS/400 visuals above, so the band reads as being about them. */}
          <svg
            viewBox="0 0 48 48"
            className="h-12 w-12 md:h-14 md:w-14 shrink-0"
            fill="none"
            stroke="#1f8a3b"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="7" width="42" height="29" rx="2.5" opacity="0.55" />
            <path d="M18 41h12M24 36v5" opacity="0.45" />
            <path
              d="M15 21.5l6.5 6.5L33.5 16"
              strokeWidth={2.6}
              style={{
                strokeDasharray: 34,
                strokeDashoffset: on ? 0 : 34,
                transition: "stroke-dashoffset .55s ease-out",
              }}
            />
          </svg>

          <div
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "translateY(0)" : "translateY(6px)",
              transition: "opacity .5s ease-out .45s, transform .5s ease-out .45s",
            }}
          >
            <p className="font-head font-bold text-[var(--sw-black)] text-[20px] sm:text-[24px] md:text-[30px] lg:text-[34px] leading-[1.15] tracking-[-0.01em]">
              Your AS/400 stays exactly as it is
            </p>
            <p className="mt-2 text-[var(--sw-black)]/70 text-[14px] md:text-[16px] leading-relaxed max-w-[76ch]">
              The software types into the same AS/400 your team uses today, so
              your programs and data do not change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
