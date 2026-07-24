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

/** Word-led proof, no growth numbers. The case-specific figures live in the proof section. */
function ProofStats() {
  const stats = [
    { value: "One source of truth", label: "the same numbers everywhere, matched to your orders" },
    { value: "GA4 you can trust", label: "rebuilt and matched to your real orders" },
    { value: "Every decision covered", label: "from ads to checkout to customers" },
  ];
  return (
    <div className="flex flex-col gap-6 border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-1.5 min-w-0">
          <div className="font-head text-[20px] leading-tight tracking-[-0.01em] text-[var(--sw-mint)] md:text-[24px]">
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
                  scandiweb solution · eCommerce
                </span>
              </div>

              <h1 className="font-head max-w-[15ch] text-[38px] leading-[1.03] tracking-[-0.015em] text-white sm:text-[46px] md:text-[54px] lg:text-[60px]">
                <span className="whitespace-nowrap">Decision-Grade</span>
                <br />
                <span className="text-[var(--sw-mint)]">Commerce BI</span>
              </h1>

              <p className="mt-5 max-w-[64ch] text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                Most eCommerce dashboards cannot be trusted, so leadership ends
                up deciding on numbers nobody is sure of. Decision-Grade Commerce
                BI rebuilds your tracking, ties it to your real sales, and turns
                it into dashboards your team can actually act on.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className={`${btnPrimary} w-full py-3 text-center leading-snug sm:w-auto`}
                  style={{ height: "auto", minHeight: "3rem" }}
                >
                  Book a free analytics consultation
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <a href="#proof" className={btnGhost}>
                  See the Haypp Group results
                </a>
              </div>
            </div>

            {/* RIGHT · proof */}
            <ProofStats />
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
