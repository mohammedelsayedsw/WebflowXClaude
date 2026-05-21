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


function HeroOfferCard() {
  const tiers: { price: string; name: string; detail: string; accent?: boolean }[] = [
    {
      price: "€490",
      name: "Vertical audit",
      detail: "Map your stack against the accelerator. Gap list, reusable parts, first-sprint recommendation. 5 days.",
    },
    {
      price: "€990",
      name: "One-module build",
      detail: "Bring one painful workflow. Two working sessions, prototype, integration map, build estimate. 5 days.",
      accent: true,
    },
    {
      price: "€1,900",
      name: "First accelerator sprint",
      detail: "First delivery sprint on the highest-value workflow once module fit is clear.",
    },
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
      <div className="p-6 md:p-7">
        <div className="flex items-baseline justify-between mb-5">
          <span className="label-code text-[var(--sw-mint)]">START LADDER</span>
          <span className="label-code text-white/50">CHECK · PROOF · START</span>
        </div>

        <ul className="space-y-3">
          {tiers.map((t) => (
            <li
              key={t.price}
              className="rounded-[2px] px-4 py-3.5"
              style={{
                background: t.accent
                  ? "linear-gradient(180deg, rgba(110,247,110,0.06) 0%, rgba(110,247,110,0.02) 100%)"
                  : "rgba(255,255,255,0.025)",
                border: t.accent
                  ? "1px solid rgba(110,247,110,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-baseline justify-between gap-3 mb-1.5">
                <span className="font-head text-white text-[20px] md:text-[22px] leading-none tabular-nums">
                  {t.price}
                </span>
                <span className="text-white/90 text-[13px] md:text-[14px] font-medium">
                  {t.name}
                </span>
              </div>
              <p className="text-[12px] text-white/60 leading-snug">
                {t.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[12px] text-white/70">
            Credited toward the next step within 14 days
          </span>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 text-[12px] text-white hover:text-[var(--sw-mint)] transition"
          >
            Start at €490
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
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
              // eslint-disable-next-line @next/next/no-img-element
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
            {/* LEFT · copy */}
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  scandiweb industry solution
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[14ch]">
                DIY & building materials{" "}
                <span style={{ color: "var(--sw-mint)" }}>commerce</span>
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[54ch] leading-relaxed">
                A <span className="font-semibold text-white">production-ready commerce backbone</span> for multi-warehouse DIY retail. Built across Byggmax (Sweden, 6 years), Murergrej (Denmark, 5 years), and Ermitazas (Lithuania, 4 years).
              </p>
              <p className="mt-4 text-[14px] md:text-[15px] text-white/80 max-w-[54ch] leading-relaxed">
                Multi-warehouse stock that does not lie. Trade and DIY in one storefront. Supplier-fed catalogs with an exception workspace. A platform that holds every sales peak. <span className="font-semibold text-white">Platform-agnostic</span>. We layer onto Adobe Commerce, BigCommerce, Bizzkit, Shopify Plus, or your custom stack.
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

            {/* RIGHT · offer ladder card */}
            <div className="lg:pt-12">
              <HeroOfferCard />
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
