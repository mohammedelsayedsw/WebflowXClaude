"use client";

import { ArrowUpRight } from "lucide-react";

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

function HeroCard() {
  const stats: [string, string][] = [
    ["12,500+", "lorem ipsum active"],
    ["8 wk", "kickoff to delivery"],
    ["99.9%", "uptime during peak"],
  ];
  return (
    <div
      className="relative block overflow-hidden rounded-[4px] backdrop-blur"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.04) 100%), rgba(16,19,44,0.55)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      <div className="p-6 md:p-8">
        <blockquote className="font-head text-white text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.005em]">
          Lorem ipsum dolor sit amet,{" "}
          <span className="text-[var(--sw-mint)]">consectetur adipiscing elit</span>
          . Sed do eiusmod tempor incididunt.
        </blockquote>

        <figcaption className="mt-5 flex items-center gap-3 text-[13px] text-white/75">
          <span className="h-px w-6 bg-white/30" />
          <span>
            <span className="text-white">Jane Lorem</span>
            <span className="text-white/55"> · Operations · Lorem Corp</span>
          </span>
        </figcaption>

        <div className="mt-7 pt-6 border-t border-white/10 grid grid-cols-3 gap-2">
          {stats.map(([k, l]) => (
            <div
              key={k}
              className="rounded-[2px] border border-white/10 bg-white/[0.03] px-3 py-3"
            >
              <div className="font-head text-white text-[20px] md:text-[22px] leading-none tabular-nums">
                {k}
              </div>
              <div className="label-code mt-2 text-[9px] text-white/55 leading-snug">
                {l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[12px] text-white/70">
            Read the Lorem Corp case study
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  demo industry solution
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[14ch]">
                Lorem ipsum{" "}
                <span style={{ color: "var(--sw-mint)" }}>dolor sit</span>
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[54ch] leading-relaxed">
                A <span className="font-semibold text-white">production-ready demo platform</span> for lorem ipsum businesses. Already built. Already peak-tested. Configure it to your catalog, clients, and stack — no rebuilding from scratch.
              </p>
              <p className="mt-4 text-[14px] md:text-[15px] text-white/80 max-w-[54ch] leading-relaxed">
                <span className="font-bold text-white">8 weeks</span> kickoff
                to live. Covers lorem data, parent commerce, client portal,
                batch exports, dual SSO, and legacy integration.
              </p>

              <div className="mt-14 md:mt-20 flex items-center gap-3 text-white">
                <span
                  className="relative inline-flex items-center justify-center border border-white/70 rounded-full"
                  style={{ width: "14px", height: "20px" }}
                  aria-hidden
                >
                  <span className="absolute top-[4px] left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-white/80" />
                </span>
                <span className="text-[14px] leading-none">scroll to discover</span>
              </div>
            </div>

            <div className="lg:pt-24">
              <HeroCard />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10"
        style={{
          background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="wrap py-6 md:py-8">
          <div className="font-head font-bold text-white text-[15px] md:text-[16px] text-white/60">
            This is a demo page — all content is placeholder lorem ipsum.
          </div>
        </div>
      </div>
    </section>
  );
}
