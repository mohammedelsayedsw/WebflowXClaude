"use client";

import { motion } from "motion/react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { Countdown } from "./Countdown";
import { REVEAL_AT, REVEAL_LABEL, SIGNUP_FORM_ID } from "./reveal";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Each line of the hero arrives out of a blur, a beat after the galaxy. */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay, ease: EASE },
});

/**
 * The whole page is this one fold: the date, the claim, the sign-up and the
 * countdown rail. The sign-up is the campaign's HubSpot form (email only)
 * rendered as a single row where the "Stay updated" button used to be.
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,15,0) 30%, rgba(5,7,15,0.7) 58%, rgba(5,7,15,0.92) 100%)",
        }}
      />

      {/* On desktop the headline and the paddings follow the viewport height, so the
          whole fold, rail included, fits a 768px-tall laptop; the top padding never
          drops below what clears the absolute header. */}
      <div className="wrap relative z-10 flex-1 flex flex-col justify-end md:justify-center pt-40 md:pt-[clamp(176px,21vh,192px)] pb-16 md:pb-[clamp(40px,8vh,96px)] w-full">
        <motion.div {...enter(0.3)} className="label-code text-white/55">
          {REVEAL_LABEL}, 2026
        </motion.div>

        <h1 className="mt-6 md:mt-8 font-head text-white">
          <motion.span
            {...enter(0.55)}
            className="block font-normal tracking-normal text-[22px] sm:text-[26px] md:text-[32px] leading-[1.15] text-white/85"
          >
            We made Magento
          </motion.span>
          <motion.span
            {...enter(0.8)}
            className="block mt-2 md:mt-3 text-[74px] sm:text-[108px] md:text-[length:min(150px,24vh)] lg:text-[length:min(190px,25vh)] xl:text-[length:min(220px,26vh)] leading-[0.92] tracking-[-0.035em]"
          >
            <span
              style={{
                color: "var(--sw-mint)",
                textShadow: "0 0 56px rgba(110,247,110,0.32)",
              }}
            >
              &times;2
            </span>{" "}
            faster
          </motion.span>
        </h1>

        <motion.p
          {...enter(1.1)}
          className="mt-6 md:mt-8 font-head text-white/85 text-[22px] sm:text-[26px] md:text-[32px] leading-[1.15]"
        >
          Faster than Shopify
        </motion.p>

        <motion.div {...enter(1.35)} id="cta" className="mt-10 md:mt-12 max-w-[520px]">
          <div className="label-code text-white/55 mb-3">Stay updated</div>
          <HubSpotForm
            portalId="25724996"
            formId={SIGNUP_FORM_ID}
            region="eu1"
            submitText="Notify me"
            variant="inline"
          />
        </motion.div>
      </div>

      <motion.div {...enter(1.7)} className="relative z-10 border-t border-white/10">
        <div className="wrap py-5 md:py-6 flex items-center">
          <Countdown deadline={REVEAL_AT} variant="compact" />
        </div>
      </motion.div>
    </section>
  );
}
