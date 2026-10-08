"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { Eyebrow } from "@/sections/webinars-legacy-bridge/Eyebrow";
import { EYEBROW_PARTS, HUBSPOT_FORM_ID, HUBSPOT_PORTAL } from "./details";
import { Lockup } from "./Lockup";

/**
 * Registration. Until HUBSPOT_FORM_ID is set the form area renders nothing,
 * so no placeholder text ever shows on the live page.
 */
export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-36 overflow-hidden scroll-mt-20"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="max-w-[860px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <Eyebrow parts={EYEBROW_PARTS} className="mb-6" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.01em] max-w-[20ch] mx-auto">
              Learn how to make your Magento store <span style={{ color: "var(--sw-mint)" }}>twice as fast</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch] mx-auto text-balance">
              See it live next to stock Magento, and ask the team about your own store.
            </p>
          </Reveal>

          {HUBSPOT_FORM_ID && (
            <Reveal delay={0.2} className="w-full">
              <div className="mt-10 md:mt-12 w-full max-w-[560px] mx-auto text-left">
                <HubSpotForm portalId={HUBSPOT_PORTAL} formId={HUBSPOT_FORM_ID} region="eu1" submitText="Save your seat" />
              </div>
            </Reveal>
          )}

          <Reveal delay={0.26}>
            <p className="mt-8 text-white/60 text-[13px] md:text-[14px] leading-relaxed">
              Can&apos;t join live? Register and we&apos;ll send you the recording.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 md:mt-12 flex justify-center">
              <Lockup />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
