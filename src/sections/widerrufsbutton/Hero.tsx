"use client";

import { ArrowDown, Check } from "lucide-react";
import { assetUrl } from "@/lib/assets";

function HeroBg() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(900px 620px at 18% 22%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
      }}
    />
  );
}

const assurances = [
  "Shopify and Magento",
  "Works for guest orders",
  "You keep control of refunds",
];

function TrustLogos() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg", alt: "PUMA", h: 28 },
    { src: "/shared/logos/clients/olympus.png", alt: "OM Digital Solutions / Olympus", h: 22 },
    { src: "/shared/logos/clients/boyscouts.png", alt: "Boy Scouts of America", h: 26 },
    { src: "/shared/logos/clients/nytimes.svg", alt: "The New York Times", h: 20 },
    { src: "/shared/logos/clients/samsung.svg", alt: "Samsung", h: 20 },
    { src: "/shared/logos/clients/adobe.svg", alt: "Adobe", h: 20 },
  ];
  const loop = [...logos, ...logos];
  return (
    <div className="relative z-10 border-t border-white/10">
      <div className="wrap py-7 md:py-8">
        <div className="text-center label-code text-white/45 mb-5">
          trusted by 700+ leading brands worldwide
        </div>
        <div className="relative overflow-hidden" aria-label="Client logos">
          <div className="sw-marquee-track flex items-center justify-center gap-x-12 md:gap-x-16">
            {loop.map((l, i) => (
              <img
                key={i}
                src={assetUrl(l.src)}
                alt={i < logos.length ? l.alt : ""}
                aria-hidden={i >= logos.length}
                className="w-auto opacity-70 shrink-0"
                style={{ maxHeight: `${l.h}px`, height: "auto", filter: "brightness(0) invert(1)" }}
              />
            ))}
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28" style={{ background: "linear-gradient(90deg, #0c1030 0%, transparent 100%)" }} />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28" style={{ background: "linear-gradient(270deg, #0c1030 0%, transparent 100%)" }} />
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
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-14 md:pb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-[2px] border border-[var(--sw-mint)]/50 bg-[var(--sw-mint)]/[0.06] px-3 py-1.5 mb-8">
            <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.12em] text-[var(--sw-mint)] uppercase">
              § 356a BGB · in force 19 June 2026
            </span>
          </div>

          <h1 className="font-head text-white text-[34px] sm:text-[46px] md:text-[66px] lg:text-[78px] leading-[1.03] tracking-[-0.02em] max-w-[19ch] text-balance break-words">
            The German Widerrufsbutton, live on your store{" "}
            <span style={{ color: "var(--sw-mint)" }}>in days</span>
          </h1>

          <p className="mt-7 text-[17px] md:text-[19px] text-white/85 max-w-[64ch] leading-relaxed">
            German law now requires online shops selling to German consumers to
            offer a withdrawal button, a two-step confirmation flow, and an
            automatic confirmation of receipt, wherever a right of withdrawal
            applies. We add all three to your Shopify or Magento store so you are
            compliant without pulling your team off other work.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-beige)] px-7 py-3.5 text-[var(--sw-beige)] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold text-[15px]"
            >
              <span>Get compliant</span>
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#requirements"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition font-head font-semibold text-[15px]"
            >
              What the law requires
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {assurances.map((a) => (
              <span key={a} className="inline-flex items-center gap-2 text-white/75 text-[13px] md:text-[14px]">
                <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
