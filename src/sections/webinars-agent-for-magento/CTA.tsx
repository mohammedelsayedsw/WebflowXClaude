"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";

/**
 * Final CTA.
 *
 * The brief carries no HubSpot formId, so this renders the visual placeholder
 * form the repo rules call for rather than an embed pointed at the wrong form.
 * {/* TODO: insert HubSpot formId, then swap this block for <HubSpotForm> *}
 * TODO: replace the date and time placeholders in the eyebrow.
 */
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
            <div className="inline-flex items-center rounded-[4px] border border-white/60 px-2.5 py-1 mb-6">
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                Free launch webinar &middot; [Date TBC] &middot; [Time TBC]
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.01em] max-w-[20ch] mx-auto">
              See the{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                first agent for Magento
              </span>
              , live
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 md:mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[52ch] mx-auto">
              Watch Ari build real changes on a real store, and ask the
              co-founder anything.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <div className="mt-10 md:mt-12 w-full max-w-[560px] mx-auto text-left">
              {/* TODO: insert HubSpot formId and replace with <HubSpotForm> */}
              <div className="rounded-[4px] border border-white/15 bg-white/[0.04] p-6 md:p-7 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="cta-name"
                    className="block font-head text-[13px] text-white/60 mb-2"
                  >
                    Full name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    disabled
                    placeholder="Placeholder field"
                    className="w-full h-11 rounded-[4px] border border-white/20 bg-transparent px-3 text-[15px] text-white/80 placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-email"
                    className="block font-head text-[13px] text-white/60 mb-2"
                  >
                    Work email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    disabled
                    placeholder="Placeholder field"
                    className="w-full h-11 rounded-[4px] border border-white/20 bg-transparent px-3 text-[15px] text-white/80 placeholder:text-white/30"
                  />
                </div>
                <button type="button" disabled className={`${btnPrimary} mt-2`}>
                  Save your seat
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-5 text-white/55 text-[13px] md:text-[14px] leading-snug">
              Free, and the recording comes to everyone who registers.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8">
              <a
                href="https://demo.agentformagento.com"
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
              >
                Try the demo store first
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
