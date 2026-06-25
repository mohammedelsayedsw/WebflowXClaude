"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { WEBINAR, SPEAKER, REGISTER_URL } from "./details";

function HeroBg() {
  return (
    <>
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-center bg-cover"
        style={{
          backgroundImage: `url(${assetUrl("/webinars/adobe-commerce-to-magento-open-source/hero-bg.png")})`,
        }}
      />
      {/* Darken overlay – flat near-black wash so the image reads as ambience, not subject */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,13,36,0.78) 0%, rgba(16,19,44,0.82) 50%, rgba(10,13,36,0.92) 100%)",
        }}
      />
      {/* Cool radial tint to keep brand mood */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 mix-blend-overlay opacity-70"
        style={{
          background:
            "radial-gradient(900px 620px at 18% 22%, rgba(42,51,128,0.55) 0%, transparent 55%)," +
            "radial-gradient(800px 580px at 85% 82%, rgba(7,10,30,0.6) 0%, transparent 52%)",
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
    <div className="w-full max-w-[440px] mx-auto flex flex-col items-center text-center">
      <div className="label-code text-white/55 text-[10px] mb-5">Speaker</div>

      <div
        className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-[4px] overflow-hidden border border-white/15 bg-white/[0.03]"
      >
        {/* TODO(announce): replace placeholder headshot via SPEAKER.photo in details.ts */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetUrl(SPEAKER.photo)}
          alt={SPEAKER.alt}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-5 md:mt-7">
        <div className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
          {SPEAKER.name}
        </div>
        <div className="text-white/70 text-[13px] md:text-[15px] mt-1.5 md:mt-2">
          {SPEAKER.title}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden hero-fill flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-start lg:items-center">
        <div className="wrap relative z-10 pt-[148px] md:pt-[176px] lg:pt-[clamp(80px,11vh,144px)] pb-[clamp(32px,6vh,96px)] w-full">
          <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
            {/* LEFT · copy */}
            <div>
              <Reveal>
                <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-5 md:mb-6">
                  <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                    Free webinar &middot; Magento / e-commerce
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="font-head text-white text-[28px] sm:text-[38px] md:text-[46px] lg:text-[60px] leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
                  Stop paying the Adobe Commerce license. Move to{" "}
                  <span style={{ color: "var(--sw-mint)" }}>
                    Magento Open Source
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p
                  className="mt-3 md:mt-4 font-body text-[16px] sm:text-[18px] md:text-[22px] leading-[1.3] max-w-[42ch]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  Same platform, same store, without the annual license fee
                </p>
              </Reveal>

              {/* Date + time block — TODO(announce): values come from WEBINAR in details.ts */}
              <Reveal delay={0.15}>
                <div className="mt-5 md:mt-7 flex flex-row gap-5 sm:gap-8 items-start">
                  <div>
                    <div className="label-code text-white/55 text-[10px] mb-2">
                      Date
                    </div>
                    <div className="font-head text-white text-[16px] sm:text-[18px] md:text-[20px] leading-none">
                      {WEBINAR.date}
                    </div>
                  </div>
                  <div className="w-px self-stretch bg-white/15" />
                  <div>
                    <div className="label-code text-white/55 text-[10px] mb-2">
                      Time
                    </div>
                    <div className="font-head text-white text-[16px] sm:text-[18px] md:text-[20px] leading-none">
                      {WEBINAR.time}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Partner row */}
              <Reveal delay={0.2}>
                <div className="mt-5 md:mt-7 flex items-center gap-4 md:gap-5 flex-wrap">
                  <span className="label-code text-white/55 text-[10px]">
                    Adobe Solution Partner
                  </span>
                  <span className="h-px w-5 bg-white/15" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl("/shared/logos/clients/adobe.svg")}
                    alt="Adobe"
                    className="h-5 md:h-6 w-auto opacity-90"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnPrimary}
                  >
                    Register
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

            </div>

            {/* RIGHT · speaker card – vertical, centered, larger photo */}
            <Reveal delay={0.15} className="flex justify-center">
              <SpeakerCard />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Trust bar – real client logos */}
      <TrustLogos />
    </section>
  );
}
