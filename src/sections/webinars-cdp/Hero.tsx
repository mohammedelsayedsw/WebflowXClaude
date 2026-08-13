"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { TrustLogos } from "./TrustLogos";
import { SPEAKERS } from "./panel";

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

/**
 * Compact in the hero so the whole section, trust bar included, lands inside
 * one viewport. The full cards live in the Meet the panel section.
 */
function HeroSpeaker({ name, company }: { name: string; company: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* TODO: real speaker photo */}
      <div
        className="h-[52px] w-[52px] shrink-0 rounded-[4px] bg-white/10 border border-white/15"
        aria-hidden
      />
      <div className="min-w-0">
        <div className="font-head text-white text-[14px] md:text-[15px] leading-[1.2] truncate">
          {name}
        </div>
        <div className="text-white/60 text-[12px] md:text-[13px] leading-snug truncate">
          {company}
        </div>
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

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-[calc(60px+clamp(28px,5vh,64px))] md:pt-[calc(75px+clamp(28px,5vh,64px))] pb-[clamp(24px,4vh,56px)] w-full">
          <div className="max-w-[52rem]">
            <Reveal>
              <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-4 md:mb-5">
                <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                  Free webinar &middot; 24 September &middot; 3:00 PM Tallinn
                  (12:00 GMT)
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-head text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[clamp(38px,4.4vh,54px)] leading-[1.06] tracking-[-0.02em]">
                Every retailer over &euro;20M needs a{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  customer data platform
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.45] max-w-[44rem] text-white/85">
                Sportland&apos;s case, 39% better ROAS, 21% more email
                orders, and 21% less marketing spend.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-2 md:mt-3 text-[14px] md:text-[16px] leading-[1.45] max-w-[44rem] text-white/70">
                An open conversation with Sportland, Bloomreach, and scandiweb.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-6 md:mt-7 flex flex-wrap items-center gap-3">
                <a href="#cta" className={btnPrimary}>
                  Save your seat
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 md:mt-10 grid gap-x-5 md:gap-x-8 gap-y-4 md:gap-y-5 grid-cols-2 lg:grid-cols-4 max-w-[68rem]">
            {SPEAKERS.map((s, i) => (
              <Reveal key={`${s.company}-${i}`} delay={0.26 + i * 0.06}>
                <HeroSpeaker name={s.name} company={s.company} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
