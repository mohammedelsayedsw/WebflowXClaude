"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";
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

function TrustLogos() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg", alt: "PUMA", h: 30 },
    { src: "/shared/logos/clients/olympus.png", alt: "OM Digital Solutions / Olympus", h: 24 },
    { src: "/shared/logos/clients/boyscouts.png", alt: "Boy Scouts of America", h: 28 },
    { src: "/shared/logos/clients/nytimes.svg", alt: "The New York Times", h: 22 },
    { src: "/shared/logos/clients/samsung.svg", alt: "Samsung", h: 22 },
    { src: "/shared/logos/clients/acer.png", alt: "Acer", h: 22 },
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
              /* eslint-disable-next-line @next/next/no-img-element */
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
            style={{ background: "linear-gradient(90deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20"
            style={{ background: "linear-gradient(270deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)" }}
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
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[2fr_1fr] items-start">
            {/* LEFT · copy */}
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  Meet Magento France · 25 Jun 2026 · Paris
                </span>
              </div>

              <h1 className="font-head text-white text-[40px] sm:text-[48px] md:text-[52px] lg:text-[56px] leading-[1.05] tracking-[-0.015em]">
                Meet the{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  #1 Adobe Commerce agency
                </span>{" "}
                at Meet Magento France 2026
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[56ch] leading-relaxed">
                Michael&apos;s at the event all day. Get the kind of senior
                eCommerce expert advice you&apos;d normally pay six figures
                for &ndash; free, over coffee in Paris. Bring your hardest
                store problem and walk away with a fresh take.
              </p>

              <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com/scandi-bd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  Book a meeting
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://scandiweb.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnSecondary}
                >
                  Have questions? Contact us
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* RIGHT · banner image */}
            <div className="lg:pt-6">
              <div className="relative rounded-[4px] overflow-hidden border border-white/10 bg-white/[0.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/events/meet-magento-france/banner.png")}
                  alt="Meet Magento France 2026"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
