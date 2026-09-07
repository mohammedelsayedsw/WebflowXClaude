"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

/** Security lead form (portal 25724996, EU1), shared with the security audit page. */
const FORM_ID = "097a15ac-beeb-4993-ab0f-21fdcd398119";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative z-10 py-28 md:py-40 overflow-hidden"
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
            <div className="label-code text-white/55 mb-5">Not a scandiweb client?</div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
              Request the same check for{" "}
              <span style={{ color: "var(--sw-mint)" }}>your store</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[50ch] text-[16px] md:text-[17px] leading-relaxed">
              Send your store address and how to reach you. A senior Magento
              engineer replies, and if your store needs the emergency check, we
              start on the terms above.
            </p>

            <div className="mt-10 pt-6 border-t border-white/10 max-w-[50ch]">
              <div className="label-code text-white/55">Already a client?</div>
              <p className="mt-3 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
                Your delivery team has this in hand. Reply on the alert thread
                or contact your account manager.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId={FORM_ID}
              region="eu1"
              submitText="Request the check"
            />
            <p className="label-code text-white/45 mt-3 px-1">
              Read by the 24/7 Magento team, weekend included.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
