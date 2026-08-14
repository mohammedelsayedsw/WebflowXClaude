"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden scroll-mt-20"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 mix-blend-overlay -z-10"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <div className="wrap relative">
        <div className="max-w-[860px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-6">
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                Free webinar &middot; September 24 &middot; 3 PM EEST
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.01em] max-w-[22ch] mx-auto">
              See what{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                advanced omnichannel marketing automation can deliver
              </span>
              , and ask your questions live
            </h2>
          </Reveal>

          {/* w-full on the Reveal: it is a flex item under items-center, so
              without it the wrapper shrinks to the form's intrinsic width. */}
          <Reveal delay={0.2} className="w-full">
            {/* Registration form. Styling comes from `.hubspot-form-wrapper` in
                globals.css, which already matches this design system, so the
                embed does not read as a HubSpot form. */}
            <div className="mt-10 md:mt-12 w-full max-w-[560px] mx-auto text-left">
              <HubSpotForm
                portalId="25724996"
                formId="47da245c-6de1-413a-bfbf-4b4a649ff7a8"
                region="eu1"
                submitText="Save your seat"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
