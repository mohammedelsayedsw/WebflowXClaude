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
    </>
  );
}

const stats: { value: string; label: string }[] = [
  { value: "+29.8%", label: "revenue, year on year · Macron" },
  { value: "+90.2%", label: "online revenue · IONTO-COMED" },
  { value: "40%", label: "faster order creation · Macron" },
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
          <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8">
            <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
              Adobe Commerce for B2B
            </span>
          </div>

          <h1 className="font-head text-white text-[40px] sm:text-[52px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] max-w-[18ch] text-balance">
            B2B commerce, built for how your buyers{" "}
            <span style={{ color: "var(--sw-mint)" }}>actually order</span>
          </h1>

          <p className="mt-7 text-[17px] md:text-[19px] text-white/85 max-w-[62ch] leading-relaxed">
            Account pricing, quotes, punchout, and ERP, working together on one
            Magento platform. We build and run B2B and wholesale stores for
            manufacturers and distributors, then make them faster to buy from.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-beige)] px-7 py-3.5 text-[var(--sw-beige)] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold text-[15px]"
            >
              <span>Talk to us about your B2B store</span>
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition font-head font-semibold text-[15px]"
            >
              See the work
            </a>
          </div>

          <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-14 w-full max-w-[800px] pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2.5">
                <div
                  className="font-head text-[36px] md:text-[44px] leading-none tabular-nums"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {s.value}
                </div>
                <div className="label-code text-white/60 text-center leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
