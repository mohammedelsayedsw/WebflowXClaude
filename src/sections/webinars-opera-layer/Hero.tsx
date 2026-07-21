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
            "radial-gradient(1000px 700px at 80% 24%, #303c96 0%, transparent 58%)," +
            "radial-gradient(720px 600px at 8% 90%, #060917 0%, transparent 55%)," +
            "radial-gradient(1200px 820px at 30% 8%, #223072 0%, transparent 50%)," +
            "radial-gradient(1500px 1000px at 42% 55%, #171d55 0%, #131843 40%, #0e1130 72%, #090c22 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-40"
      />
      {/* darken the lower edge of the hero */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,9,20,0) 0%, rgba(6,9,20,0.45) 70%, rgba(6,9,20,0.7) 100%)",
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
  // Duplicate for a seamless loop - marquee track translates by -50%
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

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-[100px] md:pt-[112px] pb-[clamp(32px,6vh,80px)] w-full">
          <div className="grid gap-8 md:gap-10 lg:gap-10 lg:grid-cols-[1.9fr_1fr] items-center">
            {/* LEFT · copy */}
            <div className="max-w-[40rem]">
            <Reveal>
              <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-5 md:mb-6">
                <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                  Free webinar &middot; B2B operations &middot; Episode 1
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-head text-white text-[28px] sm:text-[38px] md:text-[46px] lg:text-[47px] leading-[1.09] tracking-[-0.02em]">
                Stop running operations in spreadsheets
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="mt-4 md:mt-5 font-body text-[15px] sm:text-[16px] md:text-[18px] leading-[1.4] max-w-[40rem]"
                style={{ color: "var(--sw-mint)" }}
              >
                How to build AI-powered operational apps on top of your ERP in
                as little as 72 hours, without replacing your existing systems.
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
                    TBA
                  </div>
                </div>
                <div className="w-px self-stretch bg-white/15" />
                <div>
                  <div className="label-code text-white/55 text-[10px] mb-2">
                    Time
                  </div>
                  {/* TODO: confirm webinar time */}
                  <div className="font-head text-white text-[16px] sm:text-[18px] md:text-[20px] leading-none">
                    TBA
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
