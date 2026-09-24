"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "./scrollToSection";

/** Enough years that nobody sees the row end. */
const YEARS = 40;
/** Pixels the row travels per second. Slow enough to read, fast enough to notice. */
const SPEED = 18;

/* The row starts where `.wrap` starts and runs off the right edge of the
   screen. Percentages resolve against the row's own width, which leaves the
   page scrollbar out, so the first year lines up with the heading. */
const GUTTER = "max(clamp(1.25rem, 4vw, 3rem), calc((100% - 1280px) / 2 + 3rem))";

/**
 * The years ahead as one row, every one of them $0, drifting slowly to the
 * left for as long as the page is open. No control: the point is that the
 * answer is the same for every year, so there is nothing to pick. The row
 * fades out at the right edge and never reaches its end. Reduced-motion
 * readers get the row standing still.
 */
export function Future() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // the track is as wide as its content; the overflow is against the clip around it
    const clip = el.parentElement;
    if (!clip) return;
    const distance = el.scrollWidth - clip.clientWidth;
    if (distance <= 0) return;
    const anim = el.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${distance}px)` }],
      { duration: (distance / SPEED) * 1000, easing: "linear", fill: "forwards" }
    );
    const pause = () => anim.pause();
    const play = () => anim.play();
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", play);
    return () => {
      anim.cancel();
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", play);
    };
  }, []);

  const first = new Date().getFullYear() + 1;
  const years = Array.from({ length: YEARS }, (_, i) => first + i);

  return (
    <section id="future" className="relative z-10 py-28 md:py-36 overflow-hidden">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
            Every year, a new Magento release.
            <br />
            <span
              style={{
                color: "var(--sw-mint)",
                textShadow: "0 0 56px rgba(110,247,110,0.28)",
              }}
            >
              Every year, $0.
            </span>
          </h2>
          <p className="mt-7 md:mt-8 text-white/75 text-[17px] md:text-[19px] leading-relaxed max-w-[52ch]">
            An agency quotes $15,000 to $35,000 for each one. With Perpetual,
            every one is included.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          aria-label={`Every year from ${first}: $0`}
          className="mt-14 md:mt-20 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, #000 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, #000 70%, transparent 100%)",
          }}
        >
          <div
            ref={track}
            className="flex w-max"
            style={{ paddingLeft: GUTTER, paddingRight: GUTTER }}
          >
            {years.map((y) => (
              <div
                key={y}
                className="shrink-0 w-[170px] md:w-[220px] border-l border-white/15 pl-5 md:pl-6 pr-6"
              >
                <div className="label-code text-white/55 tabular-nums">{y}</div>
                <div
                  className="mt-4 font-head font-bold leading-[0.9] tracking-[-0.04em] text-[64px] md:text-[88px] tabular-nums"
                  style={{
                    color: "var(--sw-mint)",
                    textShadow: "0 0 40px rgba(110,247,110,0.22)",
                  }}
                >
                  $0
                </div>
                <div className="mt-4 text-white/55 text-[14px] md:text-[15px] leading-snug">
                  Release and patches
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="wrap">
        <Reveal delay={0.16}>
          <div className="mt-14 md:mt-20">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
              Get free Magento upgrades
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
