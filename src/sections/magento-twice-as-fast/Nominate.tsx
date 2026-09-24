"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { LightSweep } from "./LightSweep";
import { NOMINATE_FORM_ID, REVEAL_LABEL, STORES } from "./reveal";

/**
 * Nominate a store. The blue sweep from the first build of this page comes
 * back as the ground behind the form. Left: the ask and the promise. Right:
 * the nomination form (name, email, store URL).
 */
export function Nominate() {
  return (
    <section id="nominate" className="relative z-10 py-28 md:py-40 overflow-hidden">
      <LightSweep />
      <div className="wrap relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">Nominate a store</div>
            <h2 className="font-head text-white text-[36px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
              Think your Magento is slow?{" "}
              <span
                style={{
                  color: "var(--sw-mint)",
                  textShadow: "0 0 56px rgba(110,247,110,0.28)",
                }}
              >
                Nominate it.
              </span>
            </h2>
            <p className="mt-7 md:mt-8 text-white/85 text-[17px] md:text-[19px] leading-relaxed max-w-[40ch]">
              We pick {STORES} stores and make them 2x faster. Your store, or
              one you know. We announce the {STORES} after {REVEAL_LABEL}.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId={NOMINATE_FORM_ID}
              region="eu1"
              submitText="Nominate my store"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
