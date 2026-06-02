"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 620px at 18% 22%, #2a3380 0%, transparent 55%)," +
            "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
            "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
}

function SpeakerCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[4px] backdrop-blur"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.04) 100%), rgba(16,19,44,0.55)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      <div className="p-6 md:p-7 flex items-center gap-5">
        <div className="shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border border-white/15 bg-white/[0.03]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl("/webinars/ai-apps/rolands.png")}
            alt="Rolands Popovs"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <div className="label-code text-white/55 text-[10px] mb-2">Speaker</div>
          <div className="font-head text-white text-[18px] md:text-[20px] leading-[1.2]">
            Rolands Popovs
          </div>
          <div className="text-white/70 text-[13px] md:text-[14px] mt-1">
            COO at scandiweb
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
            {/* LEFT · copy */}
            <div>
              <Reveal>
                <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                  <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                    Free webinar
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="font-head text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.015em] max-w-[18ch]">
                  How to turn{" "}
                  <span style={{ color: "var(--sw-mint)" }}>
                    ChatGPT and Claude
                  </span>{" "}
                  into a sales channel
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/85 max-w-[54ch] leading-relaxed">
                  The App Store moment is happening inside AI. Here&apos;s how
                  to get your business in.
                </p>
              </Reveal>

              {/* Platform row */}
              <Reveal delay={0.15}>
                <div className="mt-9 md:mt-10 flex items-center gap-3 flex-wrap">
                  <span className="label-code text-white/55 text-[10px]">
                    Built for
                  </span>
                  <span className="h-px w-6 bg-white/15" />
                  <span className="inline-flex items-center rounded-[2px] border border-white/20 bg-white/[0.04] px-3 py-1.5 font-head text-[13px] md:text-[14px] text-white">
                    ChatGPT
                  </span>
                  <span className="inline-flex items-center rounded-[2px] border border-white/20 bg-white/[0.04] px-3 py-1.5 font-head text-[13px] md:text-[14px] text-white">
                    Claude
                  </span>
                </div>
              </Reveal>

              {/* Date + time block */}
              <Reveal delay={0.2}>
                <div className="mt-9 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-8">
                  <div>
                    <div className="label-code text-white/55 text-[10px] mb-2">
                      Date
                    </div>
                    <div className="font-head text-white text-[18px] md:text-[20px] leading-none">
                      June 17, 2026
                    </div>
                  </div>
                  <div className="hidden sm:block w-px bg-white/15" />
                  <div>
                    <div className="label-code text-white/55 text-[10px] mb-2">
                      Time
                    </div>
                    <div className="font-head text-white text-[18px] md:text-[20px] leading-none">
                      10:00 AM (GMT)
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
                  <a href="#cta" className={btnPrimary}>
                    Sign up now
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT · speaker card */}
            <Reveal delay={0.15} className="lg:pt-6">
              <SpeakerCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
