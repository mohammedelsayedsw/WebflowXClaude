"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";
import { ADOBE_BULLETIN, ADOBE_BULLETIN_URL, CALL_URL, CVE, PATCH_DATE, SANSEC_URL, UPDATED_LABEL } from "./status";
import { scrollToId } from "./scrollTo";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Each line of the hero arrives out of a blur, a beat after the field. */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay, ease: EASE },
});

const H1_SIZE =
  "text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] leading-[1.02] tracking-[-0.025em]";

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
          Security alert · StyleSmuggler · Updated {UPDATED_LABEL}
        </motion.div>

        <h1 className="mt-6 md:mt-8 font-head text-white w-full">
          <motion.span {...enter(0.5)} className={`block ${H1_SIZE}`}>
            A critical Magento vulnerability.
          </motion.span>
          <motion.span
            {...enter(0.8)}
            className={`block mt-2 md:mt-3 ${H1_SIZE}`}
            style={{
              color: "var(--sw-mint)",
              textShadow: "0 0 48px rgba(110,247,110,0.25)",
            }}
          >
            Our team is on it.
          </motion.span>
        </h1>

        <motion.p
          {...enter(1.05)}
          className="mt-7 md:mt-9 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]"
        >
          A new Magento flaw, StyleSmuggler, is being exploited. scandiweb is
          installing Adobe’s fix and has rebuilt it for the versions Adobe
          left out.
        </motion.p>

        <motion.div {...enter(1.3)} className="mt-9 md:mt-11 flex flex-wrap items-center justify-center gap-4">
          <a href="#pdf" onClick={scrollToId("pdf")} className={`${btnPrimary} h-auto min-h-12 py-3 w-full sm:w-auto`}>
            Download patch
            <ArrowDown className="h-4 w-4" />
          </a>
          <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} h-auto min-h-12 py-3 w-full sm:w-auto`}>
            Talk to our team
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div {...enter(1.6)} className="relative z-10 border-t border-white/10">
        <div className="wrap py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-10">
          <p className="text-[13px] md:text-[14px] leading-relaxed text-white/65 max-w-[78ch]">
            <span className="label-code text-white/55 mr-2">Patch status</span>
            Adobe released an emergency hotfix on {PATCH_DATE} ({ADOBE_BULLETIN},{" "}
            {CVE}). It covers Magento Open Source 2.4.6 to 2.4.9 and Adobe
            Commerce 2.4.4 to 2.4.9. Magento Open Source stores on 2.4.5 or
            older get no patch.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 shrink-0">
            <a
              href={ADOBE_BULLETIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-head font-semibold text-[14px] text-white/75 hover:text-white transition"
            >
              Adobe’s bulletin
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={SANSEC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-head font-semibold text-[14px] text-white/75 hover:text-white transition"
            >
              Security advisory
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
