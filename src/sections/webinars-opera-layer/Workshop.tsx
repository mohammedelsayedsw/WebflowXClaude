"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

/**
 * Second ask, under the registration CTA. Same form treatment as the seat
 * form above it, so the two read as one pair rather than two designs.
 */
export function Workshop() {
  return (
    <section
      id="workshop"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[820px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] leading-[1.06] tracking-[-0.01em]">
              Get a{" "}
              <span style={{ color: "var(--sw-mint)" }}>free intro workshop</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[52ch] mx-auto">
              We map your systems and come back with a plan.
            </p>
          </Reveal>

          {/* w-full on the Reveal: it is a flex item under items-center, so
              without it the wrapper shrinks to the form's intrinsic width. */}
          <Reveal delay={0.16} className="w-full">
            <div className="mt-10 md:mt-12 w-full max-w-[560px] mx-auto text-left">
              <HubSpotForm
                portalId="25724996"
                formId="43f3cbc8-9872-4390-9d73-4013420863a7"
                region="eu1"
                submitText="Book the workshop"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
