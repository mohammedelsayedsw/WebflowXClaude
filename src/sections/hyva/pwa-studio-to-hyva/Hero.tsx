"use client";

import { ArrowUpRight } from "lucide-react";
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


function HeroSpecCard() {
  const stats: [string, string][] = [
    ["+39%", "revenue · läderach"],
    ["+47.8%", "conversions · läderach"],
    ["99", "pagespeed · byggmax"],
  ];
  return (
    <a
      href="#reference"
      className="group relative block overflow-hidden rounded-[4px] backdrop-blur"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.04) 100%), rgba(16,19,44,0.55)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      <div className="p-6 md:p-8">
        <blockquote className="font-head text-white text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.005em]">
          We migrated to Hyvä and{" "}
          <span className="text-[var(--sw-mint)]">
            page speed, conversion, and revenue all moved together
          </span>
          . Same content, faster store, fewer bugs.
        </blockquote>

        <figcaption className="mt-5 flex items-center gap-3 text-[13px] text-white/75">
          <span className="h-px w-6 bg-white/30" />
          <span>
            <span className="text-white">Läderach</span>
            <span className="text-white/55"> · post-launch</span>
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
            Read the Läderach Hyvä migration case
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
        </div>
      </div>
    </a>
  );
}


function TrustLogos() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg",      alt: "PUMA",                            h: 30 },
    { src: "/shared/logos/clients/olympus.png",   alt: "OM Digital Solutions / Olympus",  h: 24 },
    { src: "/shared/logos/clients/boyscouts.png", alt: "Boy Scouts of America",           h: 28 },
    { src: "/shared/logos/clients/nytimes.svg",   alt: "The New York Times",              h: 22 },
    { src: "/shared/logos/clients/samsung.svg",   alt: "Samsung",                         h: 22 },
    { src: "/shared/logos/clients/acer.png",      alt: "Acer",                            h: 22 },
    { src: "/shared/logos/clients/adobe.svg",     alt: "Adobe",                           h: 22 },
  ];
  const loop = [...logos, ...logos];
  return (
    <div
      className="relative z-10"
      style={{
        background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <div className="font-head font-bold text-white text-[14px] md:text-[18px] leading-[1.35] shrink-0">
          Trusted by 700+ leading brands worldwide
        </div>
        <div className="relative flex-1 overflow-hidden" aria-label="Client logos">
          <div className="sw-marquee-track flex items-center gap-x-12 md:gap-x-16">
            {loop.map((l, i) => (
              <img
                key={i}
                src={assetUrl(l.src)}
                alt={i < logos.length ? l.alt : ""}
                aria-hidden={i >= logos.length}
                className="w-auto opacity-80 shrink-0"
                style={{
                  maxHeight: `${l.h}px`,
                  height: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20"
            style={{
              background:
                "linear-gradient(90deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20"
            style={{
              background:
                "linear-gradient(270deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)",
            }}
          />
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
                  scandiweb migration
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[14ch]">
                PWA Studio to{" "}
                <span style={{ color: "var(--sw-mint)" }}>Hyvä</span>{" "}
                migration
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[54ch] leading-relaxed">
                PWA Studio is no longer actively developed. We move your Magento store onto Hyvä, the frontend the ecosystem has consolidated around, as a <span className="font-semibold text-white">Hyvä Platinum Partner</span> and one of the most-certified Magento teams. <span className="font-semibold text-white">10 to 14 weeks</span> from kickoff to live, with your data, integrations, and SEO preserved.
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
              <HeroSpecCard />
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
