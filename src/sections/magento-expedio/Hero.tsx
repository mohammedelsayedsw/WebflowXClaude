"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease: EASE },
});

export const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-[var(--sw-beige)] text-[var(--sw-beige)] px-8 text-[17px] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-[family-name:var(--font-golos)] font-semibold";
export const btnSecondary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-white/30 text-white/80 px-8 text-[17px] hover:border-white/60 hover:text-white transition font-[family-name:var(--font-golos)] font-semibold";

/**
 * The reveal, centred under the falling light: the scandiweb "Introducing"
 * label, Expedio as the headline, the teaser's promise under it, one line on
 * what it is, and the two ways in.
 */
export function Hero() {
  return (
    <section className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="wrap relative z-10 w-full flex flex-col items-center pt-24 pb-16 md:pt-[clamp(120px,15vh,170px)] md:pb-[clamp(48px,8vh,96px)]">
        <motion.div {...enter(0.3)} className="label-code !text-[13px] md:!text-[14px] !tracking-[0.24em]" style={{ color: "#ffffff" }}>
          Introducing
        </motion.div>

        <h1 className="mt-5">
          <motion.span
            {...enter(0.5)}
            className="block text-[84px] sm:text-[120px] md:text-[length:min(190px,22vh)] lg:text-[length:min(210px,23vh)] leading-[0.86] tracking-[-0.06em] bg-clip-text text-transparent px-[0.06em] pb-[0.04em]"
            style={{
              backgroundImage: "linear-gradient(180deg, #ffffff 0%, #d9ffd9 40%, #6ef76e 100%)",
              filter: "drop-shadow(0 0 40px rgba(110,247,110,0.22))",
            }}
          >
            Expedio
          </motion.span>
          <motion.span
            {...enter(0.75)}
            className="block mt-4 text-white text-[28px] sm:text-[36px] md:text-[length:min(44px,5.4vh)] leading-[1.1] tracking-[-0.025em]"
          >
            Magento. <span style={{ color: "var(--sw-mint)" }}>2x faster.</span>
          </motion.span>
        </h1>

        <motion.p {...enter(1)} className="mt-5 max-w-[34rem] text-white/75 text-[16px] md:text-[18px] leading-[1.55]">
          Expedio makes your existing Magento store at least twice as fast. Same store, same data, no replatforming.
        </motion.p>

        <motion.div {...enter(1.25)} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a href="#contact" className={btnPrimary}>
            Get Expedio
          </a>
          <a href="#demo" className={btnSecondary}>
            Try the live demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
