"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandLockup } from "./BrandLockup";
import { SPEAKERS, SpeakerBox } from "./panel";

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
      className="relative -mt-[60px] md:-mt-[75px] overflow-hidden flex flex-col"
    >
      <HeroBg />

      <div className="wrap relative z-10 pt-[150px] md:pt-[170px] pb-[clamp(40px,7vh,88px)] w-full">
        <div className="max-w-[54rem]">
          <Reveal>
            <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-5 md:mb-6">
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                Free webinar &middot; 24 September &middot; 3:00 PM Tallinn
                (12:00 GMT)
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-head text-white text-[30px] sm:text-[40px] md:text-[50px] lg:text-[56px] leading-[1.06] tracking-[-0.02em]">
              More revenue on{" "}
              <span style={{ color: "var(--sw-mint)" }}>less spend</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 md:mt-6 text-[16px] sm:text-[17px] md:text-[19px] leading-[1.45] max-w-[46rem] text-white/85">
              How Sportland runs AI personalization across four Baltic markets,
              and what it took to get there.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-3 text-[15px] md:text-[17px] leading-[1.45] max-w-[46rem] text-white/70">
              An open conversation with Sportland, Bloomreach, and scandiweb.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 md:mt-9 flex flex-wrap items-center gap-3">
              <a href="#cta" className={btnPrimary}>
                Save your seat
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* speaker row */}
        <div className="mt-12 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <SpeakerBox speaker={s} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 md:mt-16 border-t border-white/12 pt-8">
            <BrandLockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
