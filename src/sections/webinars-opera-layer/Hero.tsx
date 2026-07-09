"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

function HeroBg() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(900px 620px at 18% 22%, #2a3380 0%, transparent 55%)," +
            "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
            "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-40"
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
  // Duplicate for a seamless loop — marquee track translates by -50%
  const loop = [...logos, ...logos];
  return (
    <div
      className="relative z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-[clamp(14px,2.5vh,32px)] flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <div className="font-head font-bold text-white text-[14px] md:text-[18px] leading-[1.35] shrink-0">
          Trusted by 700+ leading brands worldwide
        </div>
        <div
          className="relative flex-1 overflow-hidden"
          aria-label="Client logos"
        >
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

function SpeakerCard() {
  return (
    <div className="w-full max-w-[420px] mx-auto flex flex-col items-center text-center">
      <div className="label-code text-white/55 text-[10px] mb-5">Speaker</div>

      <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-60 lg:w-60 rounded-[4px] overflow-hidden border border-white/15 bg-white/[0.03]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetUrl("/webinars/opera-layer/martins.png")}
          alt="Martins Jakubovskis, Enterprise Architect at scandiweb"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-5 md:mt-7">
        <div className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
          Martins Jakubovskis
        </div>
        <div className="text-white/70 text-[13px] md:text-[15px] mt-1.5 md:mt-2">
          Enterprise Architect at scandiweb
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden hero-fill flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-start">
        <div className="wrap relative z-10 pt-[132px] md:pt-[160px] pb-[clamp(32px,6vh,96px)] w-full">
          <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.5fr_1fr] items-center">
            {/* LEFT · copy */}
            <div className="max-w-[40rem]">
            <Reveal>
              <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-5 md:mb-6">
                <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                  Free webinar &middot; Operations &amp; systems
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-head text-white text-[30px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.06] tracking-[-0.015em] max-w-[22ch]">
                ERP, CRM, store, warehouse.
                <br />
                And a spreadsheet holding them together.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="mt-4 md:mt-5 font-body text-[16px] sm:text-[18px] md:text-[22px] leading-[1.35] max-w-[46ch]"
                style={{ color: "var(--sw-mint)" }}
              >
                What OperaLayer is, and how it closes the gap between the
                systems you already run.
              </p>
            </Reveal>

            {/* Date + time block */}
            <Reveal delay={0.15}>
              <div className="mt-6 md:mt-8 flex flex-row gap-5 sm:gap-8 items-start">
                <div>
                  <div className="label-code text-white/55 text-[10px] mb-2">
                    Date
                  </div>
                  {/* TODO: confirm webinar date */}
                  <div className="font-head text-white text-[16px] sm:text-[18px] md:text-[20px] leading-none">
                    August 26, 2026
                  </div>
                </div>
                <div className="w-px self-stretch bg-white/15" />
                <div>
                  <div className="label-code text-white/55 text-[10px] mb-2">
                    Time
                  </div>
                  <div className="font-head text-white text-[16px] sm:text-[18px] md:text-[20px] leading-none">
                    10:00 AM (GMT)
                  </div>
                </div>
                <div className="w-px self-stretch bg-white/15" />
                <div>
                  <div className="label-code text-white/55 text-[10px] mb-2">
                    Format
                  </div>
                  <div className="font-head text-white text-[16px] sm:text-[18px] md:text-[20px] leading-none">
                    45 min + live Q&amp;A
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
                {/* TODO: replace with real registration link / HubSpot form */}
                <a href="#cta" className={btnPrimary}>
                  Save your seat
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            </div>

            {/* RIGHT · speaker card */}
            <Reveal delay={0.15} className="flex justify-center lg:justify-end">
              <SpeakerCard />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Trust bar – real client logos, running marquee */}
      <TrustLogos />
    </section>
  );
}
