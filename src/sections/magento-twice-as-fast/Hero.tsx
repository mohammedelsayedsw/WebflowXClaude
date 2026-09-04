"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Countdown } from "./Countdown";
import { REVEAL_AT, REVEAL_LABEL } from "./reveal";
import { scrollToForm } from "./scrollToForm";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Each line of the hero arrives out of a blur, a beat after the galaxy. */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay, ease: EASE },
});

export function Hero() {
  return (
    <section
      id="reveal"
      className="relative z-10 -mt-[60px] md:-mt-[75px] min-h-[calc(100svh+60px)] md:min-h-[calc(100svh+75px)] flex flex-col overflow-hidden"
    >
      {/* keep the type legible where the galaxy is brightest */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,7,15,0.78) 0%, rgba(5,7,15,0.45) 38%, rgba(5,7,15,0) 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,15,0) 30%, rgba(5,7,15,0.7) 58%, rgba(5,7,15,0.92) 100%)",
        }}
      />

      <div className="wrap relative z-10 flex-1 flex flex-col justify-end md:justify-center pt-40 md:pt-48 pb-16 md:pb-24 w-full">
        <motion.div {...enter(0.3)} className="label-code text-white/55">
          Magento · {REVEAL_LABEL}, 2026
        </motion.div>

        <h1 className="mt-6 md:mt-8 font-head text-white">
          <motion.span
            {...enter(0.55)}
            className="block text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1.1] tracking-[-0.005em] text-white/75"
          >
            We made Magento
          </motion.span>
          <motion.span
            {...enter(0.8)}
            className="block mt-2 md:mt-3 text-[74px] sm:text-[108px] md:text-[150px] lg:text-[190px] xl:text-[220px] leading-[0.92] tracking-[-0.035em]"
          >
            <span
              style={{
                color: "var(--sw-mint)",
                textShadow: "0 0 56px rgba(110,247,110,0.32)",
              }}
            >
              &times;2
            </span>{" "}
            faster.
          </motion.span>
        </h1>

        <motion.p
          {...enter(1.1)}
          className="mt-6 md:mt-8 font-head text-white/85 text-[22px] sm:text-[26px] md:text-[32px] leading-[1.15]"
        >
          Faster than Shopify.
        </motion.p>

        <motion.div {...enter(1.35)} className="mt-10 md:mt-12">
          <a href="#cta" onClick={scrollToForm} className={btnPrimary}>
            Stay updated
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div {...enter(1.7)} className="relative z-10 border-t border-white/10">
        <div className="wrap py-5 md:py-6 flex items-center justify-between gap-6">
          <Countdown deadline={REVEAL_AT} variant="compact" />
          <div className="label-code text-white/40 hidden sm:flex items-center gap-2">
            Scroll
            <ArrowDown className="h-3 w-3" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
