"use client";

import { useEffect } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
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
  // #prototype (QR code link): the registration form above loads late and grows,
  // which pushes the prototype form down after the browser's own jump, so re-align
  // a few times while the HubSpot forms settle.
  useEffect(() => {
    if (window.location.hash !== "#prototype") return;
    const align = () => document.getElementById("prototype")?.scrollIntoView({ block: "start" });
    const timers = [300, 1000, 2000, 3500].map((ms) => window.setTimeout(align, ms));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

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
              See the cost of product data problems and{" "}
              <span style={{ color: "var(--sw-mint)" }}>learn the fix</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch] mx-auto text-balance">
              In one hour, we&apos;ll walk through four common problems and how
              each one is fixed in Pimcore. Afterwards, you can request a free PIM prototype built on your
              own catalog.
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
              Can&apos;t join live? Register, and we&apos;ll send you the
              recording.
            </p>
          </Reveal>

          {/* second ask, for people who already registered: the prototype offer */}
          <Reveal delay={0.3} className="w-full">
            <div id="prototype" className="pimcore-prototype-form scroll-mt-24 mt-14 md:mt-16 w-full max-w-[560px] mx-auto">
              <h3 className="font-head text-white text-[22px] sm:text-[26px] md:text-[30px] leading-[1.15] text-center">
                Sign up for a{" "}
                <span style={{ color: "var(--sw-mint)" }}>free PIM prototype</span>
              </h3>
              <div className="mt-6 md:mt-8 text-left">
                <HubSpotForm
                  portalId="25724996"
                  formId="9951f043-3ddd-4cdb-a53f-349e6b2d8ff8"
                  region="eu1"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            {/* the Platinum badge repeats the partner status right where
                people register, next to the co-brand */}
            <div className="mt-10 md:mt-12 flex items-center justify-center gap-5 md:gap-6">
              <Lockup />
              <span aria-hidden className="h-10 w-px bg-white/15" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl("/webinars/pimcore/pimcore-platinum-partner.png")}
                alt="Pimcore Platinum Partner"
                className="h-14 md:h-16 w-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
