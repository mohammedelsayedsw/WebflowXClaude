"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Countdown } from "./Countdown";
import { REVEAL_AT, REVEAL_LABEL } from "./reveal";
import { scrollToForm } from "./scrollToForm";

/** A sweep of blue light across the section, one soft band and three fine lines. */
function Streaks() {
  const curve = "M-200 640 C 300 260, 700 1040, 1800 300";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="taf-streak" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3f4aaf" stopOpacity="0" />
            <stop offset="0.42" stopColor="#8fb6ff" stopOpacity="1" />
            <stop offset="0.58" stopColor="#d6e4ff" stopOpacity="1" />
            <stop offset="1" stopColor="#3f4aaf" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="taf-band" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2b3fd6" stopOpacity="0" />
            <stop offset="0.4" stopColor="#3d6cff" stopOpacity="1" />
            <stop offset="0.58" stopColor="#7fb0ff" stopOpacity="1" />
            <stop offset="1" stopColor="#2b3fd6" stopOpacity="0" />
          </linearGradient>
          <filter id="taf-soft" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
        </defs>
        <g fill="none" strokeLinecap="round">
          <path d={curve} stroke="url(#taf-band)" strokeWidth="190" opacity="0.42" filter="url(#taf-soft)" />
          <motion.g
            animate={{ x: [0, 26, 0], y: [0, -14, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d={curve} stroke="url(#taf-streak)" strokeWidth="2.5" opacity="0.9" />
            <path d="M-200 700 C 360 340, 760 1080, 1800 360" stroke="url(#taf-streak)" strokeWidth="1.2" opacity="0.5" />
            <path d="M-200 560 C 240 200, 640 980, 1800 240" stroke="url(#taf-streak)" strokeWidth="1" opacity="0.32" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
}

export function RevealDate() {
  return (
    <section id="countdown" className="relative z-10 overflow-hidden py-32 md:py-48">
      <Streaks />
      <div className="wrap relative z-10">
        <Reveal>
          <div className="label-code text-white/45">The reveal</div>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="mt-6 font-head text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
            See it yourself on{" "}
            <span style={{ color: "var(--sw-mint)" }}>{REVEAL_LABEL}.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-14 md:mt-20">
            <Countdown deadline={REVEAL_AT} variant="large" />
          </div>
        </Reveal>
        <Reveal delay={0.21}>
          <div className="mt-14 md:mt-20">
            <a href="#cta" onClick={scrollToForm} className={btnPrimary}>
              Stay updated
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
