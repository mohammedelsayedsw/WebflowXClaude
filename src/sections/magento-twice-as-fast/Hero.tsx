"use client";

import { motion } from "motion/react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { Countdown } from "./Countdown";
import { REVEAL_AT, SIGNUP_FORM_ID } from "./reveal";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Each line of the hero arrives out of a blur, a beat after the galaxy. */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay, ease: EASE },
});

/** The line above the timer carries the claim, so it runs larger than the sign-up label. */
const SUBLINE =
  "font-head font-bold uppercase text-white/90 text-[15px] md:text-[18px] leading-[1.45] tracking-[0.03em] text-balance";
const EYEBROW =
  "font-head font-bold uppercase text-white/90 text-[13px] md:text-[14px] leading-[1.5] tracking-[0.04em] text-balance";

/**
 * The whole page is this one fold, and everything sits in one left column:
 * the two-line headline (white, then the green "2x faster"), a line, the
 * timer, a line, the sign-up. The galaxy keeps the right side. The sign-up is
 * the campaign's HubSpot form (email only) as one row.
 */
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
      {/* and where the timer and the sign-up sit, below the beam's crossing */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,15,0) 46%, rgba(5,7,15,0.5) 62%, rgba(5,7,15,0.72) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,15,0) 22%, rgba(5,7,15,0.7) 50%, rgba(5,7,15,0.92) 100%)",
        }}
      />

      {/* On desktop the headline, the gaps and the paddings follow the viewport
          height, so the whole column fits a 668px-tall laptop; the top padding
          never drops below what clears the absolute header. */}
      <div className="wrap relative z-10 flex-1 flex flex-col justify-end md:justify-center pt-28 md:pt-[clamp(150px,18vh,176px)] pb-10 md:pb-[clamp(40px,8vh,96px)] w-full">
        <h1 className="font-head font-bold text-white">
          <motion.span
            {...enter(0.3)}
            className="block text-[34px] sm:text-[46px] md:text-[length:min(76px,9.5vh)] lg:text-[length:min(92px,10.5vh)] leading-[1.05] tracking-[-0.02em]"
          >
            We made Magento
          </motion.span>
          <motion.span
            {...enter(0.55)}
            className="block mt-1 md:mt-2 text-[72px] sm:text-[100px] md:text-[length:min(150px,20vh)] lg:text-[length:min(180px,22vh)] xl:text-[length:min(200px,22vh)] leading-[0.95] tracking-[-0.035em]"
            style={{
              color: "var(--sw-mint)",
              textShadow: "0 0 56px rgba(110,247,110,0.28)",
            }}
          >
            2x faster
          </motion.span>
        </h1>

        <motion.div {...enter(0.85)} className="mt-8 md:mt-[clamp(28px,4vh,44px)]">
          <div className={SUBLINE}>Faster than Shopify. See it for yourself in</div>
          <div className="mt-3 md:mt-4">
            <Countdown deadline={REVEAL_AT} variant="medium" />
          </div>
        </motion.div>

        <motion.div
          {...enter(1.1)}
          id="cta"
          className="mt-8 md:mt-[clamp(24px,4vh,40px)] max-w-[560px]"
        >
          <div className={`${EYEBROW} mb-3`}>Be the first to experience it</div>
          <HubSpotForm
            portalId="25724996"
            formId={SIGNUP_FORM_ID}
            region="eu1"
            submitText="Join waiting list"
            variant="inline"
          />
        </motion.div>
      </div>
    </section>
  );
}
