"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "./Eyebrow";
import { HERO_EYEBROW_PARTS } from "./details";
import { GreenScreen } from "./GreenScreen";
import { PaperDoc } from "./PaperDoc";
import { TrustBar } from "./TrustBar";

function HeroBg() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1000px 700px at 80% 24%, #303c96 0%, transparent 58%)," +
            "radial-gradient(720px 600px at 8% 90%, #060917 0%, transparent 55%)," +
            "radial-gradient(1200px 820px at 30% 8%, #223072 0%, transparent 50%)," +
            "radial-gradient(1500px 1000px at 42% 55%, #171d55 0%, #131843 40%, #0e1130 72%, #090c22 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-backdrop opacity-40" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,9,20,0) 0%, rgba(6,9,20,0.45) 70%, rgba(6,9,20,0.7) 100%)",
        }}
      />
    </>
  );
}

/**
 * The invoice and the screen, side by side, with the values from one landing in
 * the other. This is the page's argument in a single picture, so it gets the
 * larger half of the hero.
 */
function HeroVisual() {
  return (
    // Side by side only once there is room for it. Sharing a phone's width
    // between the two left the screen around 200px across, where the dot
    // leaders collapse and the field values wrap, which is the one thing this
    // visual cannot afford. Stacked, the document sits above the screen and
    // the eye still travels from one to the other.
    <div className="relative">
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[0.72fr_1fr] sm:gap-4 sm:items-center">
        <PaperDoc
          className="w-full max-w-[280px] sm:max-w-none"
          kind="Invoice"
          reference="NORDIC SUPPLY AB"
          rows={[
            { label: "Invoice no", value: "INV-48120" },
            { label: "Amount", value: "12 480.00" },
            { label: "Due", value: "14/11/26" },
          ]}
        />
        <GreenScreen
          screenId="AP4010"
          title="Invoice entry"
          fields={[
            { label: "Supplier", value: "NORDIC SUPPLY AB" },
            { label: "Invoice no", value: "INV-48120" },
            { label: "Amount", value: "12,480.00" },
            { label: "Due date", value: "14/11/26" },
          ]}
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative -mt-[60px] md:-mt-[75px] overflow-hidden hero-fill flex flex-col"
    >
      <HeroBg />

      <div className="flex-1 flex items-start lg:items-center">
        <div className="wrap relative z-10 pt-[calc(116px+clamp(10px,2.4vh,34px))] md:pt-[calc(124px+clamp(12px,3vh,40px))] pb-[clamp(16px,2.6vh,44px)] w-full">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            {/* LEFT - copy */}
            <div className="max-w-[46rem]">
              <Reveal>
                <Eyebrow parts={HERO_EYEBROW_PARTS} className="mb-[clamp(12px,2.2vh,24px)]" />
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="font-head text-white text-[30px] sm:text-[38px] md:text-[44px] lg:text-[clamp(34px,min(5.4vh,3.8vw),48px)] leading-[1.08] tracking-[-0.02em] text-balance">
                  Get PDFs into your{" "}
                  <span style={{ color: "var(--sw-mint)" }}>AS/400</span> without
                  typing
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-[clamp(10px,1.8vh,20px)] max-w-[54ch] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.45] text-white/85 text-pretty">
                  A document that takes your team up to 15 minutes to type can
                  go into your AS/400 in under 10 seconds. And yes, it&apos;s
                  real.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-[clamp(6px,1.2vh,12px)] max-w-[54ch] text-[14px] md:text-[15px] leading-[1.45] italic text-white/60">
                  If this sounds too good to be true, join us and watch it live
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-[clamp(20px,3.4vh,40px)]">
                  <a href="#cta" className={`${btnPrimary} py-3`} style={{ height: "auto" }}>
                    Save your seat
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.34}>
                <div className="mt-[clamp(16px,2.6vh,30px)] flex items-center gap-3 border-t border-white/10 pt-[clamp(12px,2vh,20px)]">
                  {/* TODO: speaker photo for Dmitrijs Tarasovs. */}
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-[4px] border border-white/15 bg-white/[0.06] font-head text-white/70 text-[13px]"
                  >
                    DT
                  </span>
                  <div>
                    <div className="font-head text-white text-[14px] md:text-[15px] leading-tight">
                      Dmitrijs Tarasovs
                    </div>
                    <div className="text-white/55 text-[12px] md:text-[13px] leading-snug">
                      Founder of LegacyBridge
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT - the visual */}
            <Reveal delay={0.18}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
