"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { Countdown } from "./Countdown";
import { REVEAL_AT, REVEAL_LABEL, SIGNUP_FORM_ID } from "./reveal";

const EYEBROW =
  "font-head font-bold uppercase text-white/90 text-[13px] md:text-[14px] leading-[1.5] tracking-[0.04em] text-balance";

/**
 * The waiting list. The reveal date and the timer on the left, the email-only
 * sign-up as one row on the right, the same row the hero carried before the
 * nomination section took its place.
 */
export function CTA() {
  return (
    <section id="cta" className="relative z-10 py-28 md:py-40">
      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="label-code text-white/55 mb-5">The reveal</div>
            <h2 className="font-head text-white text-[36px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
              See it yourself on{" "}
              <span style={{ color: "var(--sw-mint)" }}>{REVEAL_LABEL}.</span>
            </h2>
            <div className="mt-8 md:mt-10">
              <Countdown deadline={REVEAL_AT} variant="medium" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={`${EYEBROW} mb-3`}>Be the first to experience it</div>
            <HubSpotForm
              portalId="25724996"
              formId={SIGNUP_FORM_ID}
              region="eu1"
              submitText="Join waiting list"
              variant="inline"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
