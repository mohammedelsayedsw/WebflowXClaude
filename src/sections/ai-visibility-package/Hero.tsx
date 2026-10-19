"use client";

import { motion } from "motion/react";
import { ArrowDown, Check } from "lucide-react";
import { btnLight, btnPrimary } from "@/components/primitives/buttonStyles";
import { assetUrl } from "@/lib/assets";
import { PlanLink } from "./plan";
import { scrollToId } from "./scrollTo";
import { BETTERANSWER_URL, PLANS } from "./status";
import { Eyebrow, LINE_LIGHT } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/** [full label, short label for the two-by-two grid on phones] */
const IN_THE_BOX: [string, string][] = [
  ["AI visibility and competitor tracking", "AI visibility and competitor tracking"],
  ["Website content tailored to AI search questions", "Content for AI search questions"],
  ["Five AI visibility article drafts per month", "Five article drafts a month"],
  ["Monthly AI visibility and progress report", "Monthly progress report"],
];

/** Headline, one line, two facts, one button. The package, its price and a second button sit in the card beside it. */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 -mt-[60px] md:-mt-[75px] flex min-h-[calc(100svh+60px)] md:min-h-[calc(100svh+75px)] flex-col justify-center bg-[var(--sw-black)] overflow-hidden"
    >
      {/* scandiweb waves: the scandiweb.com homepage hero loop */}
      <video
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src={assetUrl("/ai-visibility-package/hero-waves.mp4")}
        poster={assetUrl("/ai-visibility-package/hero-waves-poster.jpg")}
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
        src={assetUrl("/ai-visibility-package/hero-waves-poster.jpg")}
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

      <div className="wrap w-full relative pt-[136px] max-md:[@media(max-height:700px)]:pt-[112px] md:pt-[150px] pb-10 md:pb-[clamp(32px,6vh,96px)] grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-center">
        <div>
          <motion.div {...enter(0.1)}>
            <Eyebrow tone="mint">{PLANS.core.name}</Eyebrow>
          </motion.div>
          <motion.h1
            {...enter(0.2)}
            className="mt-4 md:mt-5 font-head font-bold text-white text-wrap text-[34px] max-md:[@media(max-height:700px)]:text-[30px] sm:text-[52px] lg:text-[clamp(40px,min(4.2vw,7.6vh),64px)] leading-[1.04] tracking-[-0.03em]"
          >
            The minimum coverage your business needs for{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              AI search
            </span>
          </motion.h1>
          <motion.p {...enter(0.3)} className="mt-4 md:mt-6 text-white/80 text-[16px] md:text-[19px] leading-relaxed max-w-[46ch] max-md:[@media(max-height:700px)]:hidden">
            Make visibility in ChatGPT and other AI tools part of running your business.
          </motion.p>
          <motion.ul {...enter(0.35)} className="mt-6 hidden md:grid gap-2">
            {["Works alongside your SEO agency", "Drafts your team approves and publishes"].map((t) => (
              <li key={t} className="flex items-center gap-2.5 font-head font-semibold text-white text-[16px]">
                <Check aria-hidden className="h-5 w-5 shrink-0" style={{ color: "var(--sw-mint)" }} strokeWidth={3} />
                {t}
              </li>
            ))}
          </motion.ul>
          <motion.div {...enter(0.45)} className="mt-8 md:mt-10 hidden lg:block">
            <PlanLink plan="core" className={`${btnPrimary} w-full sm:w-auto h-auto min-h-12 py-3`}>
              Request a call
            </PlanLink>
          </motion.div>
        </div>

        <motion.div {...enter(0.3)}>
          <div className="bg-white rounded-[2px] p-5 md:p-[clamp(20px,3.5vh,32px)] lg:ml-auto lg:max-w-[440px]">
            <h2 className="font-head font-bold text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.02em]">
              {PLANS.core.name}
            </h2>
            <div className="mt-2 md:mt-3 flex items-baseline gap-2">
              <span className="font-head font-bold text-[var(--sw-blue)] text-[44px] md:text-[60px] leading-none tracking-[-0.03em]">
                {PLANS.core.price}
              </span>
              <span className="text-[var(--sw-black)]/60 text-[16px]">/ month</span>
            </div>
            <ul className={`mt-5 md:mt-7 grid grid-cols-2 gap-x-4 gap-y-3 md:block md:border-t ${LINE_LIGHT}`}>
              {IN_THE_BOX.map(([t, short]) => (
                <li key={t} className={`flex items-start md:items-center gap-2 md:gap-3 md:border-b ${LINE_LIGHT} md:py-[clamp(8px,1.6vh,14px)] text-[14px] leading-snug md:text-[16px] text-[var(--sw-black)]`}>
                  <Check aria-hidden className="mt-0.5 md:mt-0 h-4 w-4 shrink-0 text-[var(--sw-blue)]" strokeWidth={3} />
                  <span className="md:hidden">{short}</span>
                  <span className="hidden md:inline">{t}</span>
                </li>
              ))}
            </ul>
            <a
              href="#coverage"
              onClick={scrollToId("coverage")}
              className="mt-4 md:mt-5 inline-flex max-md:[@media(max-height:700px)]:hidden items-center gap-1.5 font-head font-semibold text-[14px] text-[var(--sw-blue)] border-b border-[var(--sw-blue)]/40 hover:border-[var(--sw-blue)] transition"
            >
              See everything included <ArrowDown aria-hidden className="h-3.5 w-3.5" />
            </a>
            <PlanLink plan="core" className={`${btnLight} mt-5 md:mt-6 w-full h-auto min-h-12 py-3 px-4`}>
              Request a call
            </PlanLink>
            <p className="mt-4 text-center text-[13px] text-[var(--sw-black)]/60 max-md:[@media(max-height:700px)]:hidden">
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
