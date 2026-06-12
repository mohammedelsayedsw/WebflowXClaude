"use client";

import { assetUrl } from "@/lib/assets";
import { AgeChip, BlueprintGrid, SectionIcon } from "./motifs";

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
      {/* faint blueprint / graph-paper grid — STEM motif, barely visible */}
      <BlueprintGrid />
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

/** Proof bar — outcomes from a reference build. */
function HeroProofCard() {
  const stats: { v: string; l: React.ReactNode }[] = [
    {
      v: "9,400",
      l: (
        <>
          products from 23 suppliers — prices and stock update by themselves,
          zero retyped price lists
        </>
      ),
    },
    {
      v: "0",
      l: "oversells across all sales channels through a full Q4 peak",
    },
    {
      v: "+11%",
      l: (
        <>
          average order value from the cart&apos;s &ldquo;needed to use
          it&rdquo; prompts
        </>
      ),
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
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <span className="flex items-center gap-2">
            <SectionIcon name="dna" tone="dark" size={18} />
            <span className="label-code text-[var(--sw-mint)]">PROVEN IN PRODUCTION</span>
          </span>
          <span className="label-code text-white/45">REFERENCE BUILD</span>
        </div>

        <ul className="space-y-0">
          {stats.map((s, i) => (
            <li
              key={i}
              className="flex items-center gap-4 py-4 border-b border-white/10 first:pt-0"
            >
              <span className="font-head text-white text-[28px] md:text-[34px] leading-none tabular-nums shrink-0 min-w-[88px]">
                {s.v}
              </span>
              <span className="text-[12px] md:text-[13px] text-white/70 leading-snug">
                {s.l}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-head text-white text-[18px] md:text-[20px] leading-none tabular-nums">
            12 wk
          </span>
          <span className="label-code text-white/55">kickoff to production</span>
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
              <div className="flex flex-wrap items-center gap-3 mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 rounded-[2px] border border-white/70 px-3 py-1.5">
                  <SectionIcon name="rocket" tone="dark" size={16} />
                  <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                    scandiweb industry solution
                  </span>
                </div>
                <AgeChip tone="dark">AGES 6–12</AgeChip>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[16ch]">
                K-12 STEM toys &amp; kits{" "}
                <span style={{ color: "var(--sw-mint)" }}>commerce</span>
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[58ch] leading-relaxed">
                A{" "}
                <span className="font-semibold text-white">
                  production-ready commerce accelerator
                </span>{" "}
                for retailers selling STEM toys, science kits, and robotics to
                families and gift-givers. The hard parts are already built — you
                configure them to your store, you don&apos;t build them from
                scratch.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 text-white">
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
            </div>

            {/* RIGHT · proof card */}
            <div className="lg:pt-16">
              <HeroProofCard />
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
