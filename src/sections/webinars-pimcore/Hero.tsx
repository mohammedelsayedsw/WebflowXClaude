"use client";

import { ArrowUpRight, Gift } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { HeroPanel } from "./HeroPanel";
import { Lockup, PartnerBadge } from "./Lockup";

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
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-40"
      />
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

/** The offer, boxed and in the accent colour. It is the strongest reason to attend. */
function OfferLine() {
  return (
    <div className="flex items-start gap-3 rounded-[4px] border border-[var(--sw-mint)]/40 bg-[var(--sw-mint)]/[0.07] px-4 py-3.5 md:px-5 md:py-4">
      <span
        aria-hidden
        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] border border-[var(--sw-mint)]/35 text-[var(--sw-mint)]"
      >
        <Gift className="h-3.5 w-3.5" strokeWidth={1.9} />
      </span>
      <p className="font-head font-semibold text-white text-[14px] sm:text-[15px] md:text-[17px] leading-[1.35]">
        Every attendee can get a free PIM prototype after the webinar
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative -mt-[60px] md:-mt-[75px] overflow-hidden flex flex-col"
    >
      <HeroBg />

      <div className="flex-1 flex items-start lg:items-center">
        <div className="wrap relative z-10 pt-[calc(128px+clamp(12px,2vh,36px))] md:pt-[calc(126px+clamp(16px,3vh,44px))] pb-[clamp(24px,4vh,56px)] w-full">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            {/* LEFT · copy */}
            <div className="max-w-[38rem]">
              <Reveal>
                <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-5 md:mb-6">
                  <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                    {/* TODO: replace both placeholders once the slot is confirmed */}
                    Free webinar &middot; [Date TBC] &middot; [Time TBC] &middot; 60 minutes
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="font-head text-white text-[29px] sm:text-[38px] md:text-[46px] lg:text-[48px] leading-[1.07] tracking-[-0.02em]">
                  Spreadsheets built your catalog.{" "}
                  <span style={{ color: "var(--sw-orange)" }}>
                    Now they&apos;re holding it back.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.45] text-white/85">
                  One product lives in a dozen partial versions across
                  spreadsheets, ERP extensions, and shared drives. It costs you
                  hours every week, and the errors reach your customers.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-6 md:mt-7">
                  <OfferLine />
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-6 md:mt-7 flex flex-wrap items-center gap-3">
                  <a href="#cta" className={btnPrimary}>
                    Save your seat
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <p className="mt-4 text-white/60 text-[13px] md:text-[14px] leading-relaxed">
                  Free, 60 minutes. Can&apos;t join live? Register and
                  we&apos;ll send you the recording.
                </p>
              </Reveal>
            </div>

            {/* RIGHT · the two speakers */}
            <Reveal delay={0.12}>
              <HeroPanel />
            </Reveal>
          </div>

          {/* co-brand lockup and the partner proof, at the foot of the hero */}
          <Reveal delay={0.34}>
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/12 pt-6 md:pt-7">
              <Lockup />
              <span aria-hidden className="hidden sm:block h-10 w-px bg-white/12" />
              <PartnerBadge />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
