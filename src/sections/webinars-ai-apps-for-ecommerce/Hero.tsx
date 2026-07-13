"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

function HeroBg() {
  return (
    <>
      {/* Brand gradient background — same family as the adobe-commerce hero,
          but with the highlight positions moved so it isn't a 1:1 copy
          (blue glow → top-left, deep shadow → bottom-right). */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(900px 620px at 20% 22%, #2a3380 0%, transparent 55%)," +
            "radial-gradient(820px 580px at 86% 80%, #070a1e 0%, transparent 52%)," +
            "radial-gradient(1400px 900px at 46% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
        }}
      />
      {/* Soft blurred tint layer — highlights also repositioned vs. the source */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(620px 900px at 30% 64%, rgba(7, 10, 30, 0.85), transparent 60%)," +
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
        background:
          "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-[clamp(14px,2.5vh,32px)] flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
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
      <div className="relative w-44 sm:w-52 md:w-60 lg:w-64 aspect-[3/4] rounded-[4px] overflow-hidden border border-white/15">
        {/* Bluish backdrop behind the cut-out photo */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(130% 100% at 50% 16%, #4d59c2 0%, #2c3688 44%, #161c50 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 grid-backdrop opacity-30 mix-blend-overlay"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetUrl("/webinars/ai-apps-for-ecommerce/rolands-steroids.png")}
          alt="Rolands Popovs, COO at scandiweb"
          className="relative h-full w-full object-contain object-bottom"
        />
      </div>
      <div className="mt-5 md:mt-7">
        <div className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
          Rolands Popovs
        </div>
        <div className="text-white/70 text-[13px] md:text-[15px] mt-1.5 md:mt-2">
          COO at scandiweb
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
        <div className="wrap relative z-10 pt-[168px] md:pt-[192px] lg:pt-[clamp(128px,13vh,188px)] pb-[clamp(28px,5vh,64px)] w-full">
          <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
            {/* LEFT · copy */}
            <div>
              <Reveal>
                <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-5 md:mb-6">
                  <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                    Free webinar &middot; Session 2 &middot; AI operations
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="font-head text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.04] tracking-[-0.015em] max-w-[13ch]">
                  Admin work, on steroids
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p
                  className="mt-3 md:mt-4 font-body text-[15px] sm:text-[16px] md:text-[18px] leading-[1.45] max-w-[60ch]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  Run your store from one chat in ChatGPT and Claude. Spot
                  issues, reorder stock, and handle support without opening a
                  dashboard.
                </p>
              </Reveal>

              {/* Date + time block */}
              <Reveal delay={0.15}>
                <div className="mt-5 md:mt-7 flex flex-row gap-5 sm:gap-8 items-start">
                  <div>
                    <div className="label-code text-white/55 text-[10px] mb-2">
                      Date
                    </div>
                    <div className="font-head text-white text-[16px] sm:text-[18px] md:text-[20px] leading-none">
                      July 29, 2026
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
                </div>
              </Reveal>

              {/* Platform row */}
              <Reveal delay={0.2}>
                <div className="mt-5 md:mt-7 flex items-center gap-4 md:gap-5 flex-wrap">
                  <span className="label-code text-white/55 text-[10px]">
                    Official partners with
                  </span>
                  <span className="h-px w-5 bg-white/15" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl("/webinars/ai-apps/chatgpt.png")}
                    alt="ChatGPT"
                    className="h-[26px] md:h-[31px] w-auto opacity-90"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl("/webinars/ai-apps/claude.png")}
                    alt="Claude"
                    className="h-5 md:h-6 w-auto opacity-90"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3">
                  {/* TODO: replace with real registration link / HubSpot form */}
                  <a href="#cta" className={btnPrimary}>
                    Sign up now
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT · speaker card */}
            <Reveal delay={0.15} className="flex justify-center">
              <SpeakerCard />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <TrustLogos />
    </section>
  );
}
