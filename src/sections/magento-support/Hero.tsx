"use client";

import { ArrowDown } from "lucide-react";
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

function RateCard() {
  const tiers: { rate: string; role: string; note: string }[] = [
    { rate: "€19/hr", role: "developer", note: "full-time, single human" },
    { rate: "€29/hr", role: "dev · PM · QA", note: "blended team rate" },
    { rate: "€58/hr", role: "BA · PO", note: "only when needed" },
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
        <div className="label-code text-white/55 mb-4">our rates</div>
        <div className="space-y-3">
          {tiers.map((t) => (
            <div
              key={t.rate}
              className="rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between gap-4"
            >
              <div className="font-head text-white text-[28px] md:text-[32px] leading-none tabular-nums">
                {t.rate}
              </div>
              <div className="text-right">
                <div className="text-white text-[14px] md:text-[15px] leading-tight">
                  {t.role}
                </div>
                <div className="label-code text-white/55 mt-1 text-[9px]">
                  {t.note}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 text-[12px] md:text-[13px] text-white/70 leading-relaxed">
          Adobe Commerce support &amp; engineering, billed by the hour. No
          retainer minimums. No long-term lock-in.
        </div>
      </div>
    </div>
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
                  Magento support takeover
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[16ch]">
                Adobe Commerce support at{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  rates that change the math
                </span>
                .
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[58ch] leading-relaxed">
                €19/hr for a full-time developer. €29/hr for a blended team.
                Same engineers, same standards, structured to fit your size.
                Bring your last support invoice &mdash; we&apos;ll show you what
                this looks like on your monthly bill.
              </p>

              <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-5 py-2.5 text-white hover:bg-[var(--sw-mint)]/10 transition"
                >
                  <span className="font-head text-[14px] md:text-[15px]">
                    Run the math
                  </span>
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="#tiers"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition text-[14px] md:text-[15px]"
                >
                  See the three tiers
                </a>
              </div>
            </div>

            <div className="lg:pt-12">
              <RateCard />
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
