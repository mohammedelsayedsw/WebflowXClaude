"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { AuroraRain } from "@/sections/magento-expedio/AuroraRain";
import { Eyebrow } from "@/sections/webinars-legacy-bridge/Eyebrow";
import { TrustBar } from "@/sections/webinars-legacy-bridge/TrustBar";
import { EYEBROW_PARTS, SPEAKERS } from "./details";

/**
 * The hero sits on the Expedio page's background: the same aurora rain
 * canvas, held inside this section instead of fixed behind the page. The
 * canvas paints one still frame under prefers-reduced-motion.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate -mt-[60px] md:-mt-[75px] overflow-hidden min-h-[100svh] flex flex-col bg-[var(--sw-ink)]"
    >
      <AuroraRain contained />
      {/* Darkens the rain on this page only, most behind the copy, so the text reads clearly. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 52%, rgba(5,7,15,0.72) 0%, rgba(5,7,15,0.45) 60%, rgba(5,7,15,0.3) 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="wrap w-full pt-[clamp(104px,14vh,150px)] pb-[clamp(32px,6vh,72px)]">
          <div className="max-w-[54rem] mx-auto text-center flex flex-col items-center">
            <Reveal>
              <Eyebrow parts={EYEBROW_PARTS} className="mb-[clamp(14px,2.4vh,26px)]" />
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-head text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[clamp(44px,min(6.6vh,4.6vw),64px)] leading-[1.06] tracking-[-0.025em] text-balance">
                Make your Magento store{" "}
                <span style={{ color: "var(--sw-mint)" }}>twice as fast</span> without
                replatforming
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-[clamp(14px,2.2vh,24px)] max-w-[60ch] mx-auto text-[16px] md:text-[18px] leading-[1.5] text-white/80 text-balance">
                Expedio speeds up Magento&apos;s backend, the part that builds each
                page before a shopper sees it. Your store, design and data stay the
                same.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-[clamp(22px,3.6vh,40px)]">
                <a href="#cta" className={`${btnPrimary} py-3`} style={{ height: "auto" }}>
                  Save your seat
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-[clamp(22px,3.6vh,40px)] flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-[clamp(14px,2.2vh,22px)]">
                {SPEAKERS.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 text-left">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={assetUrl(s.face)}
                      alt=""
                      aria-hidden
                      className="h-10 w-10 md:h-11 md:w-11 shrink-0 rounded-[4px] border border-white/15 object-cover"
                    />
                    <div>
                      <div className="font-head text-white text-[14px] md:text-[15px] leading-tight">
                        {s.name}
                      </div>
                      <div className="text-white/55 text-[12px] md:text-[13px] leading-snug">
                        {s.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
