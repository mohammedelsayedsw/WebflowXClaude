"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

/** The StyleSmuggler check form in HubSpot (portal 25724996, EU1). */
const FORM_ID = "8ad693d8-7cbf-440e-88b3-b40a3d1ce983";

export function Check() {
  return (
    <section id="check" className="relative z-10 py-24 md:py-32 border-t border-white/10">
      <div className="wrap">
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/45">Free initial check · No store access required</div>
            <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              Find out what to{" "}
              <span style={{ color: "var(--sw-mint)" }}>check next</span>
            </h2>
            <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[44ch]">
              Share your store address and answer a few questions to get an
              initial assessment. Our Magento engineers will review your
              submission, check what is visible externally, and email you
              recommended next steps.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm portalId="25724996" formId={FORM_ID} region="eu1" submitText="Get a free security check" />
            <p className="label-code text-white/45 mt-3 px-1">
              Reviewed by scandiweb’s Magento engineers, including on weekends.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
