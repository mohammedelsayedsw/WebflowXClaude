"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";
import { CALL_URL, NEXT_BULLETIN, UPDATED_LABEL, UPDATED_SHORT } from "./status";
import { scrollToId } from "./scrollTo";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Each line of the hero arrives out of a blur, a beat after the field. */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay, ease: EASE },
});

/* Sized so the first line sits on one line across the full container on
   desktop; below that the browser balances the wrap. */
const H1_SIZE =
  "text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[1.02] tracking-[-0.025em]";

export function Hero() {
  return (
    <section
      id="alert"
      className="relative z-10 -mt-[60px] md:-mt-[75px] min-h-[calc(100svh+60px)] md:min-h-[calc(100svh+75px)] flex flex-col overflow-hidden"
    >
      {/* one soft ambient glow so the dark reads as depth, not a black rectangle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 640px at 82% 18%, rgba(63,74,175,0.30) 0%, rgba(63,74,175,0) 62%)," +
            "radial-gradient(700px 520px at 8% 92%, rgba(42,51,128,0.22) 0%, rgba(42,51,128,0) 60%)",
        }}
      />

      <div className="wrap relative z-10 flex-1 flex flex-col items-center justify-end md:justify-center text-center pt-36 md:pt-44 pb-14 md:pb-20 w-full">
        <motion.div {...enter(0.25)} className="label-code text-white/55 flex items-center justify-center gap-3">
          <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-[var(--sw-red)] pulse-red" />
          Security alert · StyleSmuggler · updated {UPDATED_LABEL}
        </motion.div>

        <h1 className="mt-6 md:mt-8 font-head text-white w-full">
          <motion.span {...enter(0.5)} className={`block ${H1_SIZE}`}>
            <span className="inline-block whitespace-nowrap">Magento zero-day</span>{" "}
            <span className="inline-block whitespace-nowrap">under active attack</span>
          </motion.span>
          <motion.span
            {...enter(0.8)}
            className={`block mt-2 md:mt-3 ${H1_SIZE}`}
            style={{
              color: "var(--sw-mint)",
              textShadow: "0 0 48px rgba(110,247,110,0.25)",
            }}
          >
            scandiweb is on it
          </motion.span>
        </h1>

        <motion.p
          {...enter(1.05)}
          className="mt-7 md:mt-9 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]"
        >
          A <span className="whitespace-nowrap">zero-day</span> is a security hole
          that attackers found before a fix exists. StyleSmuggler is one. It lets
          anyone take control of a Magento or Adobe Commerce store, no password
          needed. Every current version is affected. Attacks began September 4,
          and Adobe has no fix out yet.
        </motion.p>

        <motion.div {...enter(1.3)} className="mt-9 md:mt-11 flex flex-wrap items-center justify-center gap-4">
          <a href="#check" onClick={scrollToId("check")} className={`${btnPrimary} h-auto min-h-12 py-3 w-full sm:w-auto`}>
            Check if your store has been affected
            <ArrowDown className="h-4 w-4" />
          </a>
          <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} h-auto min-h-12 py-3 w-full sm:w-auto`}>
            Have a call about security
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div {...enter(1.6)} className="relative z-10 border-t border-white/10">
        <div className="wrap py-5 md:py-6 flex items-center justify-between gap-6">
          <div className="label-code text-white/60">
            No fix from Adobe as of {UPDATED_SHORT}
            <span className="hidden sm:inline"> · Adobe&apos;s next security update is due {NEXT_BULLETIN}</span>
          </div>
          <div className="label-code text-white/40 hidden sm:flex items-center gap-2">
            Scroll
            <ArrowDown className="h-3 w-3" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
