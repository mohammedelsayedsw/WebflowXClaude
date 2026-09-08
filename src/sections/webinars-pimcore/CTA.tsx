"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { Lockup } from "./Lockup";

/**
 * The real registration form, replacing the placeholder that stood here while
 * the form ID was pending.
 *
 * HubSpotForm loads the same v2 embed script the snippet uses, and passes empty
 * `css` and `cssRequired` so HubSpot ships no stylesheet of its own. The look
 * comes from `.hubspot-form-wrapper .hbspt-form *` in globals.css, which is why
 * this reads as part of the page rather than a HubSpot form dropped onto it.
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
                {/* Held whole per part, as in the hero, so a narrow screen
                    breaks at a separator and never mid-phrase. */}
                <span className="whitespace-nowrap">Free webinar</span> &middot;{" "}
                <span className="whitespace-nowrap">22 October</span> &middot;{" "}
                <span className="whitespace-nowrap">10:00 GMT</span> &middot;{" "}
                <span className="whitespace-nowrap">60 minutes</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.01em] max-w-[22ch] mx-auto">
              See what your product data is costing you, and{" "}
              <span style={{ color: "var(--sw-mint)" }}>what fixes it</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch] mx-auto">
              In one hour we&apos;ll work through four common problems in a live
              system.
              {/* break set from md up, so the prototype offer gets its own
                  line. Phones wrap naturally. */}
              <br className="hidden md:block" />{" "}
              Afterwards you can request a free PIM prototype on your own
              catalog.
            </p>
          </Reveal>

          {/* w-full on the Reveal: it is a flex item under items-center, so
              without it the wrapper shrinks to the form's intrinsic width. */}
          <Reveal delay={0.2} className="w-full">
            <div className="mt-10 md:mt-12 w-full max-w-[560px] mx-auto text-left">
              <HubSpotForm
                portalId="25724996"
                formId="1a9ed7a5-66ca-4c97-9d52-cc743fcd2ca4"
                region="eu1"
                submitText="Save your seat"
              />
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-5 text-white/60 text-[13px] md:text-[14px] leading-relaxed">
              Can&apos;t join live? Register and we&apos;ll send you the
              recording.
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
