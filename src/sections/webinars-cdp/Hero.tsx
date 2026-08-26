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
          <Reveal>
            <div className="mb-7 md:mb-9 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                Free webinar
              </span>
              <span aria-hidden className="hidden sm:block h-3 w-px bg-white/25" />
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase">
                September 24 &middot; 3 PM EEST
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:gap-6 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-[52rem]">
            <Reveal delay={0.04}>
              <p className="font-head text-[15px] sm:text-[17px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-white/70">
                More revenue on less spend
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-2 md:mt-3 font-head text-white text-[clamp(23px,3.9vh,29px)] sm:text-[36px] md:text-[44px] lg:text-[clamp(38px,min(4.6vh,3.4vw),60px)] leading-[1.05] tracking-[-0.025em]">
                How Sportland runs{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  AI&nbsp;personalization
                </span>{" "}
                across three Baltic states, and what it took
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 sm:mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.45] max-w-[44rem] text-white/85">
                More email orders and a better return on paid media, on a
                smaller marketing budget. Sportland&apos;s team joins Bloomreach
                and scandiweb to share what worked, what didn&apos;t, and what
                they&apos;d tell a retailer starting out today.
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

            <Reveal delay={0.28}>
              <div className="mt-7 md:mt-9">
                <Lockup />
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
