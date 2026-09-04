"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { REVEAL_LABEL } from "./reveal";

/** The campaign's own HubSpot form (portal 25724996, EU1). */
const FORM_ID = "5f475c17-5dba-4005-a483-b780927c5c45";

export function CTA() {
  return (
    <section id="cta" className="relative z-10 py-28 md:py-40">
      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">Stay in the loop</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[16ch]">
              Stay <span style={{ color: "var(--sw-mint)" }}>updated</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[46ch] text-[16px] md:text-[17px] leading-relaxed">
              Leave your email and we&apos;ll keep you posted on everything
              around the reveal, before and on {REVEAL_LABEL}. Same store, same
              platform, same catalog. Twice the speed.
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
              We&apos;ll email you whenever there&apos;s news.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
