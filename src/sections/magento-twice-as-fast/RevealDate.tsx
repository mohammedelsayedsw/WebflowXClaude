"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Countdown } from "./Countdown";
import { REVEAL_AT, REVEAL_LABEL } from "./reveal";
import { scrollToForm } from "./scrollToForm";

export function RevealDate() {
  return (
    <section id="countdown" className="relative z-10 py-32 md:py-48">
      <div className="wrap relative z-10">
        <Reveal>
          <div className="label-code text-white/45">The reveal</div>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="mt-6 font-head text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
            See it yourself on{" "}
            <span style={{ color: "var(--sw-mint)" }}>{REVEAL_LABEL}.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-14 md:mt-20">
            <Countdown deadline={REVEAL_AT} variant="large" />
          </div>
        </Reveal>
        <Reveal delay={0.21}>
          <div className="mt-14 md:mt-20">
            <a href="#cta" onClick={scrollToForm} className={btnPrimary}>
              Stay updated
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
