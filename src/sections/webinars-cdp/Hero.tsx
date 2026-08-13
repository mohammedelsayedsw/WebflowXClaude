"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { TrustLogos } from "./TrustLogos";
import { HeroPanel } from "./HeroPanel";
import { Lockup } from "./Lockup";

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

export function Hero() {
  return (
    <section
      id="hero"
      className="relative -mt-[60px] md:-mt-[75px] overflow-hidden hero-fill flex flex-col"
    >
      <HeroBg />

      {/* From md up the block centres between the header and the trust bar, so
          a taller window opens the hero out instead of leaving the copy pinned
          to the top with a growing empty band under it. Phones keep the top
          alignment, where the content already fills the space. */}
      <div className="flex-1 flex items-start md:items-center">
        <div className="wrap relative z-10 pt-[calc(106px+clamp(12px,2vh,40px))] md:pt-[calc(96px+clamp(16px,3vh,44px))] pb-[clamp(16px,2vh,40px)] md:pb-[clamp(24px,4vh,56px)] w-full">
          {/* Eyebrow spans the hero, so the lockup sits out on the right */}
          <Reveal>
            <div className="mb-7 md:mb-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                  Free webinar
                </span>
                <span aria-hidden className="hidden sm:block h-3 w-px bg-white/25" />
                <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase">
                  September 24 &middot; 2 PM CET
                </span>
              </div>
              <Lockup />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:gap-6 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-[52rem]">
            <Reveal delay={0.05}>
              <h1 className="font-head text-white text-[clamp(26px,4.4vh,32px)] sm:text-[42px] md:text-[52px] lg:text-[clamp(46px,min(5.6vh,4.2vw),72px)] leading-[1.03] tracking-[-0.025em]">
                Every retailer over &euro;20M needs a{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  customer data platform
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 sm:mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.45] max-w-[44rem] text-white/85">
                One of them already proved it. Sportland&apos;s case, 39% better
                ROAS, 21% more email orders, and 21% less marketing spend.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-7 md:mt-9 flex flex-wrap items-center gap-3">
                <a href="#cta" className={btnPrimary}>
                  Save your seat
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-4 lg:mt-0">
            <HeroPanel />
          </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
