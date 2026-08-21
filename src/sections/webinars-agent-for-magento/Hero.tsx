"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { TrustBar } from "./TrustBar";
import { HeroChat } from "./HeroChat";

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

      <div className="flex-1 flex items-start md:items-center">
        <div className="wrap relative z-10 pt-[calc(106px+clamp(12px,2vh,40px))] md:pt-[calc(96px+clamp(16px,3vh,44px))] pb-[clamp(16px,2vh,40px)] md:pb-[clamp(24px,4vh,56px)] w-full">
          <Reveal>
            <div className="mb-5 md:mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                Free launch webinar
              </span>
              <span
                aria-hidden
                className="hidden sm:block h-3 w-px bg-white/25"
              />
              {/* TODO: replace with the confirmed date and time */}
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase">
                [Date TBC] &middot; [Time TBC]
              </span>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:gap-7 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-[52rem]">
              <Reveal delay={0.04}>
                <div className="inline-flex items-center rounded-[4px] border border-white/25 px-2.5 py-1">
                  <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.12em] text-white/70 uppercase">
                    The first agent for Magento
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 md:mt-5 font-head text-white text-[clamp(24px,4vh,30px)] sm:text-[36px] md:text-[44px] lg:text-[clamp(38px,min(4.6vh,3.2vw),58px)] leading-[1.05] tracking-[-0.025em]">
                  Change anything on your Magento store by{" "}
                  <span style={{ color: "var(--sw-mint)" }}>
                    chatting with AI
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.45] max-w-[44rem] text-white/85">
                  Ari is the first agent for Magento. Type what you want in
                  plain English, and it builds the change in your own code,
                  ready for you to approve. Join the live launch and watch it
                  work on a real store.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-7 md:mt-9 flex flex-wrap items-center gap-3">
                  <a href="#cta" className={btnPrimary}>
                    Save your seat
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <p className="mt-4 text-white/55 text-[13px] md:text-[14px] leading-snug max-w-[36rem]">
                  Free. Can&apos;t join live? Register and we&apos;ll get you
                  the recording.
                </p>
              </Reveal>
            </div>

            <div className="mt-2 lg:mt-0">
              <HeroChat />
            </div>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
