"use client";

import { assetUrl } from "@/lib/assets";
import { OperatingViewMock } from "@/sections/shopify-multi-store/OperatingViewMock";

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 700px at 50% 0%, #1d2566 0%, #141a48 38%, #0c1030 72%, #080b22 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 30%, rgba(63,74,175,0.25), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
    </>
  );
}

function TrustLogos() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg", alt: "PUMA", h: 26 },
    { src: "/shared/logos/clients/olympus.png", alt: "Olympus", h: 22 },
    { src: "/shared/logos/clients/boyscouts.png", alt: "Boy Scouts of America", h: 24 },
    { src: "/shared/logos/clients/nytimes.svg", alt: "The New York Times", h: 20 },
    { src: "/shared/logos/clients/samsung.svg", alt: "Samsung", h: 20 },
    { src: "/shared/logos/clients/acer.png", alt: "Acer", h: 20 },
    { src: "/shared/logos/clients/adobe.svg", alt: "Adobe", h: 20 },
  ];
  const loop = [...logos, ...logos];
  return (
    <div className="relative z-10 border-t border-white/10">
      <div className="wrap py-7 md:py-8">
        <div className="text-center label-code text-white/45 mb-5">
          trusted by 700+ leading brands
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
    <section className="relative overflow-hidden flex flex-col">
      <HeroBg />

      <div className="wrap relative z-10 pt-36 md:pt-44 pb-16 md:pb-20 text-center flex flex-col items-center">
        <div className="inline-flex items-center rounded-full border border-white/25 px-3.5 py-1.5 mb-8">
          <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase">
            Shopify multi-store support
          </span>
        </div>

        <h1 className="font-head text-white text-[32px] sm:text-[46px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.02em] max-w-[15ch] text-balance">
          Every Shopify store, <span style={{ color: "var(--sw-mint)" }}>working as one</span>
        </h1>

        <p className="mt-7 text-[17px] md:text-[20px] text-white/75 max-w-[58ch] leading-relaxed">
          We connect the apps, data, and systems behind your stores, so problems
          get solved across the whole setup, not one store at a time.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-[2px] border border-[var(--sw-beige)] px-7 py-3.5 text-[var(--sw-beige)] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold text-[15px]"
          >
            Talk to us about your stores
          </a>
          <a
            href="#view"
            className="inline-flex items-center gap-2 text-white/75 hover:text-white transition font-head font-semibold text-[15px]"
          >
            See how it works
          </a>
        </div>

        <div className="mt-14 md:mt-20 w-full flex justify-center">
          <OperatingViewMock />
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
