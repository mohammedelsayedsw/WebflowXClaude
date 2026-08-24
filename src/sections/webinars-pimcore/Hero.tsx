"use client";

import { ArrowUpRight, Gift } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { HeroPanel } from "./HeroPanel";
import { PartnerBadge } from "./Lockup";
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
    <div className="flex h-full min-h-12 items-center gap-3 rounded-[4px] border border-[var(--sw-mint)]/40 bg-[var(--sw-mint)]/[0.07] px-4 py-2.5 md:px-5">
      <span
        aria-hidden
        className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] border border-[var(--sw-mint)]/35 text-[var(--sw-mint)]"
      >
        <Gift className="h-3.5 w-3.5" strokeWidth={1.9} />
      </span>
      <p className="font-head font-semibold text-white text-[13.5px] sm:text-[14px] md:text-[15px] leading-[1.35]">
        {/* the break is deliberate: the offer reads on two even lines */}
        Every attendee can get a free
        <br />
        PIM prototype after the webinar
      </p>
    </div>
  );
}

export function Hero() {
  return (
    // hero-fill plus the trust bar as the last child: landing on the page shows
    // everything down to and including the client logo row, without scrolling.
    <section
      id="hero"
      className="relative -mt-[60px] md:-mt-[75px] overflow-hidden hero-fill flex flex-col"
    >
      <HeroBg />

      <div className="flex-1 flex items-start lg:items-center">
        <div className="wrap relative z-10 pt-[calc(96px+clamp(10px,2.4vh,34px))] md:pt-[calc(100px+clamp(12px,3vh,40px))] pb-[clamp(16px,2.6vh,44px)] w-full">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* LEFT · copy */}
            <div className="max-w-[46rem]">
              <Reveal>
                <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-[clamp(12px,2.2vh,24px)]">
                  <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                    {/* TODO: replace both placeholders once the slot is confirmed */}
                    Free webinar &middot; [Date TBC] &middot; [Time TBC] &middot; 60 minutes
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="font-head text-white text-[27px] sm:text-[34px] md:text-[40px] lg:text-[clamp(30px,min(4.4vh,3.1vw),43px)] leading-[1.08] tracking-[-0.02em] text-balance">
                  Slow product launches, wrong details online, and returns{" "}
                  <span style={{ color: "var(--sw-mint)" }}>
                    you could have avoided
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-[clamp(10px,1.8vh,20px)] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.45] text-white/85">
                  You know these problems. In 60 minutes we&apos;ll show you
                  what&apos;s causing them, what they cost, and how to fix them
                  for good.
                </p>
              </Reveal>

              {/* The button and the offer sit on one line, so the payoff reads
                  as part of the action rather than a separate claim above it. */}
              <Reveal delay={0.18}>
                <div className="mt-[clamp(26px,4.4vh,52px)] flex flex-col sm:flex-row sm:items-stretch gap-3 md:gap-4">
                  {/* height auto plus align-items stretch: the button takes
                      the height of the offer box beside it, whether that box
                      sets on one line or two. py-3 keeps it 48px when it
                      stacks above the box on phones. */}
                  <a
                    href="#cta"
                    className={`${btnPrimary} shrink-0 py-3`}
                    style={{ height: "auto" }}
                  >
                    Save your seat
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <div className="sm:flex-1">
                    <OfferLine />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <p className="mt-[clamp(10px,1.6vh,18px)] text-white/60 text-[13px] md:text-[14px] leading-relaxed">
                  Free, 60 minutes. Can&apos;t join live? Register and
                  we&apos;ll send you the recording.
                </p>
              </Reveal>

              {/* the partner badge sits with the microcopy, not adrift below
                  the speaker panel */}
              <Reveal delay={0.32}>
                <div className="mt-[clamp(12px,1.8vh,20px)]">
                  <PartnerBadge h={78} />
                </div>
              </Reveal>
            </div>

            {/* RIGHT · the two speakers */}
            <Reveal delay={0.12}>
              <HeroPanel />
            </Reveal>
          </div>

        </div>
      </div>

      <TrustBar />
    </section>
  );
}
