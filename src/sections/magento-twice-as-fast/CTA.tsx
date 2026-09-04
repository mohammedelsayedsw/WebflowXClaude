"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { REVEAL_LABEL } from "./reveal";

/* TODO: swap in a dedicated campaign form once one exists in HubSpot. This GUID
   is scandiweb's single-field email form (portal 25724996, EU1) reused here so
   the page captures on day one; a campaign-specific form would let the reveal
   send be segmented from ordinary contact submissions. */
const FORM_ID = "3138576e-e2b3-4dac-8ff3-1039ab9428ba";

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
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">
              One email, on the day
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[16ch]">
              Stay{" "}
              <span style={{ color: "var(--sw-mint)" }}>updated</span>.
            </h2>
            <p className="mt-6 text-white/80 max-w-[46ch] text-[16px] md:text-[17px] leading-relaxed">
              Leave your email and we&apos;ll send you the link on{" "}
              {REVEAL_LABEL}, the day it goes live. Same store, same platform,
              same catalog. Twice the speed.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId={FORM_ID}
              region="eu1"
              submitText="Notify me"
            />
            <p className="label-code text-white/45 mt-3 px-1">
              We&apos;ll email you the link on {REVEAL_LABEL}.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
