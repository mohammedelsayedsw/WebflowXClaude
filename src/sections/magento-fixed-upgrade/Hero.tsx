"use client";

import { ArrowDown, Check } from "lucide-react";
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

function EstimateCard() {
  const includes = [
    "Your target version and the path to it",
    "Scope, and a list of what we will not touch",
    "Your exact fixed price, locked",
    "Timeline and a written risk register",
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
        <div className="label-code text-white/55 mb-4">
          free estimate · 48 hours
        </div>
        <div className="flex items-baseline gap-3">
          <div className="font-head text-white text-[40px] md:text-[48px] leading-none tabular-nums">
            $5K-$15K
          </div>
          <div className="text-white/60 text-[13px] md:text-[14px] leading-tight">
            fixed, for most stores
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
          {includes.map((t) => (
            <div key={t} className="flex items-start gap-2.5">
              <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0 mt-0.5" />
              <span className="text-[13px] md:text-[14px] text-white/85 leading-snug">
                {t}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 text-[12px] md:text-[13px] text-white/70 leading-relaxed">
          No live changes. No admin access required. Yours to keep, even if you
          do not go ahead.
        </div>
      </div>
    </div>
  );
}

function TrustLogos() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg", alt: "PUMA", h: 30 },
    { src: "/shared/logos/clients/olympus.png", alt: "OM Digital Solutions / Olympus", h: 24 },
    { src: "/shared/logos/clients/boyscouts.png", alt: "Boy Scouts of America", h: 28 },
    { src: "/shared/logos/clients/nytimes.svg", alt: "The New York Times", h: 22 },
    { src: "/shared/logos/clients/samsung.svg", alt: "Samsung", h: 22 },
    { src: "/shared/logos/clients/adobe.svg", alt: "Adobe", h: 22 },
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
                  Fixed-price Magento upgrade
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[1.02] tracking-[-0.015em] max-w-[15ch]">
                Your Magento upgrade,{" "}
                <span style={{ color: "var(--sw-mint)" }}>priced before we start</span>
                .
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[60ch] leading-relaxed">
                Senior Magento engineers do the work and AI-assisted analysis
                keeps the scoping fast, so you get a locked price before anything
                begins. Most stores land between $5,000 and $15,000. Send your
                store for a free fixed-price estimate in 48 business hours.
              </p>

              <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-beige)] px-6 py-3 text-[var(--sw-beige)] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold text-[14px] md:text-[15px]"
                >
                  <span>Get your free estimate</span>
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="#tiers"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition font-head font-semibold text-[14px] md:text-[15px]"
                >
                  See the pricing
                </a>
              </div>
            </div>

            <div className="lg:pt-12">
              <EstimateCard />
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
