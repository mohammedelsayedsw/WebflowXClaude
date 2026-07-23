"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary, btnGhost } from "@/components/primitives/buttonStyles";
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

/** Lafayette 148 proof, four numbers. Detail and caveats live in the proof section. */
function ProofStats() {
  const stats = [
    { value: "~90%", label: "faster reporting" },
    { value: "3.06M to 336K", label: "scattered customer files, matched to real people" },
    { value: "40%+", label: "of online sales come from email and SMS" },
  ];
  return (
    <div className="flex flex-col gap-5 border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-1.5 min-w-0">
          <div
            className="font-head text-[24px] leading-none tracking-[-0.01em] text-[var(--sw-mint)] md:text-[30px]"
          >
            {s.value}
          </div>
          <div className="label-code text-[10px] leading-snug text-white/60">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Client logo marquee, same set and treatment as the other solution pages. */
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
      <div className="wrap flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10 md:py-8">
        <div className="font-head shrink-0 text-[14px] font-bold leading-[1.35] text-white md:text-[18px]">
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
                className="w-auto shrink-0 opacity-80"
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
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <HeroBg />

      <div className="flex flex-1 items-center">
        <div className="wrap relative z-10 w-full pt-24 pb-8 md:pb-10">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* LEFT · copy */}
            <div>
              <div className="mb-5 inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5">
                <span className="font-head text-[11px] font-semibold uppercase tracking-[0.14em] text-white md:text-[12px]">
                  scandiweb solution · omnichannel retail
                </span>
              </div>

              <h1 className="font-head max-w-[16ch] text-[38px] leading-[1.03] tracking-[-0.015em] text-white sm:text-[46px] md:text-[54px] lg:text-[60px]">
                Customer{" "}
                <span className="text-[var(--sw-mint)]">Data Control</span> Hub
              </h1>

              <p className="mt-5 max-w-[64ch] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                See who your customers really are, and reach them wherever they
                buy. The same shopper shows up as different customer files across
                your stores, website, CRM, and messaging. The Customer Data
                Control Hub gives you one clean view your own team controls, and
                can send to email, SMS, paid media, reporting, and store teams.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className={`${btnPrimary} w-full py-3 text-center leading-snug sm:w-auto`}
                  style={{ height: "auto", minHeight: "3rem" }}
                >
                  Book a 20-minute fit call
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <a href="#proof" className={btnGhost}>
                  See the Lafayette 148 results
                </a>
              </div>
            </div>

            {/* RIGHT · proof numbers */}
            <ProofStats />
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
