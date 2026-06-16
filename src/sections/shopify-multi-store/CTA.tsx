"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="label-code text-white/55 mb-5">the first step</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.04] max-w-[15ch]">
              Book a call about your{" "}
              <span className="text-[var(--sw-mint)]">Shopify stores</span>
            </h2>
            <p className="mt-6 text-white/75 max-w-[48ch] text-[16px] md:text-[18px] leading-relaxed">
              A short call to look at your setup together. Your stores, the apps and
              systems behind them, and what keeps going wrong. You do not need to
              give us access to start, just a rough picture of how things are set up.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <HubSpotForm
              portalId="25724996"
              formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6"
              region="eu1"
            />
            <p className="label-code text-white/55 mt-3 px-1">
              We respond within one business day
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
