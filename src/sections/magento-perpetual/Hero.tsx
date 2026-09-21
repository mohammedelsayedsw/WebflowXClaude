"use client";

import { motion } from "motion/react";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "./scrollToSection";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Each line of the hero arrives out of a blur, a beat after the loop. */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay, ease: EASE },
});

const EYEBROW =
  "font-head font-bold uppercase text-white/70 text-[13px] md:text-[14px] leading-[1.5] tracking-[0.14em]";

/**
 * One fold, one left column, the same build as magento/twice-as-fast: a white
 * line over one giant green word, then the two ways on. The loop keeps the
 * right side.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 -mt-[60px] md:-mt-[75px] min-h-[calc(100svh+60px)] md:min-h-[calc(100svh+75px)] flex flex-col overflow-hidden"
    >
      {/* keep the type legible where the loop is brightest */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,7,15,0.8) 0%, rgba(5,7,15,0.5) 36%, rgba(5,7,15,0) 64%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,15,0) 30%, rgba(5,7,15,0.7) 52%, rgba(5,7,15,0.92) 100%)",
        }}
      />

      {/* On desktop the headline, the gaps and the paddings follow the viewport
          height, so the whole column fits a 668px-tall laptop; the top padding
          never drops below what clears the absolute header. */}
      <div className="wrap relative z-10 flex-1 flex flex-col justify-end md:justify-center pt-28 md:pt-[clamp(150px,18vh,176px)] pb-10 md:pb-[clamp(40px,8vh,96px)] w-full">
        <motion.div {...enter(0.2)} className={EYEBROW}>
          Perpetual <span className="text-white/40">by scandiweb</span>
        </motion.div>

        <h1 className="font-head font-bold text-white mt-5 md:mt-[clamp(16px,3vh,28px)]">
          <motion.span
            {...enter(0.35)}
            className="block text-[32px] sm:text-[44px] md:text-[length:min(68px,9vh)] lg:text-[length:min(80px,10vh)] leading-[1.05] tracking-[-0.02em]"
          >
            Free Magento upgrades
          </motion.span>
          <motion.span
            {...enter(0.6)}
            className="block mt-1 md:mt-2 text-[76px] sm:text-[108px] md:text-[length:min(150px,21vh)] lg:text-[length:min(190px,24vh)] xl:text-[length:min(212px,24vh)] leading-[0.95] tracking-[-0.035em]"
            style={{
              color: "var(--sw-mint)",
              textShadow: "0 0 56px rgba(110,247,110,0.28)",
            }}
          >
            Forever.
          </motion.span>
        </h1>

        <motion.div
          {...enter(0.9)}
          className="mt-8 md:mt-[clamp(24px,4.5vh,44px)] flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
            Get free Magento upgrades
          </a>
          <a
            href="#version"
            onClick={scrollToSection("version")}
            className={btnSecondary}
          >
            Check your version
          </a>
        </motion.div>
      </div>
    </section>
  );
}
