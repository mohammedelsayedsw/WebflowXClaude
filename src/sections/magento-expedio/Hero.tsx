"use client";

import { motion } from "motion/react";
import { ARI_EXPEDIO } from "./ariLinks";

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
 * The reveal, centred under the falling light: Expedio as the headline, the
 * promise under it, one line on what it is, and the two ways in. Sized to its
 * content rather than the viewport, so the next section starts in view.
 */
export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center overflow-hidden">
      <div className="wrap relative z-10 w-full flex flex-col items-center pt-[clamp(128px,20vh,220px)] pb-[clamp(72px,12vh,128px)]">
        <h1>
          <motion.span
            {...enter(0.5)}
            className="block text-[84px] sm:text-[120px] md:text-[length:min(190px,22vh)] lg:text-[length:min(210px,23vh)] leading-[0.86] tracking-[-0.06em] bg-clip-text text-transparent px-[0.06em] pb-[0.04em]"
            style={{
              backgroundImage: "linear-gradient(180deg, #ffffff 0%, #d9ffd9 40%, #6ef76e 100%)",
              filter: "drop-shadow(0 0 40px rgba(110,247,110,0.22))",
            }}
          >
            Expedio
          </motion.span>{" "}
          <motion.span
            {...enter(0.75)}
            className="block mt-4 text-white text-[28px] sm:text-[36px] md:text-[length:min(44px,5.4vh)] leading-[1.1] tracking-[-0.025em]"
          >
            Magento performance, <span style={{ color: "var(--sw-mint)" }}>2x faster.</span>
          </motion.span>
        </h1>

        <motion.p {...enter(1)} className="mt-5 max-w-[34rem] text-white/75 text-[16px] md:text-[18px] leading-[1.55]">
          Expedio speeds up how Magento builds every page. Same store, same design, no replatforming.
        </motion.p>

        <motion.a
          {...enter(1.1)}
          href={ARI_EXPEDIO}
          className="mt-5 inline-flex items-center gap-2.5 h-9 px-4 border border-[rgba(110,247,110,0.45)] bg-[rgba(5,7,15,0.45)] text-[14px] text-white font-[family-name:var(--font-golos)] font-medium hover:border-[var(--sw-mint)] transition"
        >
          <span style={{ color: "var(--sw-mint)" }} className="font-semibold">New</span>
          <span className="sm:hidden">Now open source</span>
          <span className="hidden sm:inline">Expedio is now open source</span>
          <span aria-hidden>→</span>
        </motion.a>

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
