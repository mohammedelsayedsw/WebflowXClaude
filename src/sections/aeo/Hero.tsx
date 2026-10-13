"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { assetUrl } from "@/lib/assets";
import { PlanLink } from "./plan";
import { BETTERANSWER_URL, PLANS } from "./status";
import { Eyebrow, LINE_LIGHT } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

const IN_THE_BOX = [
  "AI visibility and competitor tracking",
  "Website content for AI search questions",
  "Five article drafts a month",
  "Monthly progress report",
];

/** Headline, one line, two facts, one button. The package and price sit in the card beside it. */
export function Hero() {
  return (
    <section id="hero" className="relative z-10 -mt-[60px] md:-mt-[75px] bg-[var(--sw-black)] overflow-hidden">
      {/* scandiweb waves: the scandiweb.com homepage hero loop */}
      <video
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src={assetUrl("/aeo/hero-waves.mp4")}
        poster={assetUrl("/aeo/hero-waves-poster.jpg")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        alt=""
        src={assetUrl("/aeo/hero-waves-poster.jpg")}
        className="absolute inset-0 h-full w-full object-cover hidden motion-reduce:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{ background: "linear-gradient(90deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0.45) 38%, rgba(16,19,44,0) 62%, rgba(16,19,44,0) 100%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 lg:hidden"
        style={{ background: "linear-gradient(180deg, rgba(16,19,44,0.35) 0%, rgba(16,19,44,0.55) 40%, rgba(16,19,44,0.85) 75%, rgba(16,19,44,0.95) 100%)" }}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, var(--sw-black) 100%)" }} />

      <div className="wrap relative pt-32 md:pt-[180px] pb-14 md:pb-28 grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-center">
        <div>
          <motion.div {...enter(0.1)}>
            <Eyebrow tone="mint">{PLANS.core.name}</Eyebrow>
          </motion.div>
          <motion.h1
            {...enter(0.2)}
            className="mt-5 font-head font-bold text-white text-[40px] sm:text-[56px] lg:text-[64px] xl:text-[68px] leading-[1.02] tracking-[-0.03em]"
          >
            <span className="lg:inline-block lg:whitespace-nowrap">The minimum coverage</span>{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              for AI search
            </span>
          </motion.h1>
          <motion.p {...enter(0.3)} className="mt-5 md:mt-6 text-white/80 text-[17px] md:text-[20px] leading-relaxed max-w-[44ch]">
            See where ChatGPT and other AI tools recommend you, where they pick competitors, and what to fix.
          </motion.p>
          <motion.ul {...enter(0.35)} className="mt-6 grid gap-2.5">
            {["Works alongside your SEO agency", "Drafts your team approves and publishes"].map((t) => (
              <li key={t} className="flex items-center gap-2.5 font-head font-semibold text-white text-[16px]">
                <Check aria-hidden className="h-5 w-5 shrink-0" style={{ color: "var(--sw-mint)" }} strokeWidth={3} />
                {t}
              </li>
            ))}
          </motion.ul>
          <motion.div {...enter(0.45)} className="mt-8 md:mt-10">
            <PlanLink plan="core" className={`${btnPrimary} w-full sm:w-auto h-auto min-h-12 py-3`}>
              Request a call
            </PlanLink>
          </motion.div>
        </div>

        <motion.div {...enter(0.3)}>
          <div className="bg-white rounded-[2px] p-6 md:p-8 lg:ml-auto lg:max-w-[440px]">
            <Eyebrow>Monthly package</Eyebrow>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-head font-bold text-[var(--sw-blue)] text-[52px] md:text-[60px] leading-none tracking-[-0.03em]">
                {PLANS.core.price}
              </span>
              <span className="text-[var(--sw-black)]/60 text-[16px]">/ month</span>
            </div>
            <ul className={`mt-7 border-t ${LINE_LIGHT}`}>
              {IN_THE_BOX.map((t) => (
                <li key={t} className={`flex items-center gap-3 border-b ${LINE_LIGHT} py-3.5 text-[15px] md:text-[16px] text-[var(--sw-black)]`}>
                  <Check aria-hidden className="h-4 w-4 shrink-0 text-[var(--sw-blue)]" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-[var(--sw-black)]/60">
              Delivered by{" "}
              <a href={BETTERANSWER_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[var(--sw-blue)]">
                BetterAnswer.ai
              </a>
              , part of scandiweb
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
