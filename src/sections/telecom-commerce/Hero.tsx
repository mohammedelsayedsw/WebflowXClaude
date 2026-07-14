"use client";

import { assetUrl } from "@/lib/assets";
import { SignalBars } from "./motifs";

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

/** Reference-build figures. Values rendered exactly as written in the brief. */
function HeroProofCard() {
  const stats: { v: string; l: React.ReactNode }[] = [
    { v: "6-12 wk", l: "kickoff to live, scoped per module set" },
    { v: "0", l: "changes required to the operator's BSS" },
    { v: "2 h", l: "fastest delivery option built into checkout" },
    { v: "50+", l: "scandiweb specialists have shipped telecom commerce work" },
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
        <div className="mb-5 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <SignalBars tone="dark" size={16} />
            <span className="label-code text-[var(--sw-mint)]">REFERENCE BUILD</span>
          </span>
        </div>

        <ul className="space-y-0">
          {stats.map((s, i) => (
            <li
              key={i}
              className="flex items-center gap-4 border-b border-white/10 py-4 first:pt-0 last:border-b-0"
            >
              <span className="font-head shrink-0 min-w-[104px] text-[26px] leading-none tabular-nums text-white md:text-[32px]">
                {s.v}
              </span>
              <span className="text-[12px] leading-snug text-white/70 md:text-[13px]">
                {s.l}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Reference-case proof line. */
function ReferenceNote() {
  return (
    <div
      className="mt-5 rounded-[4px] p-5"
      style={{
        border: "1px solid rgba(110,247,110,0.3)",
        background: "rgba(110,247,110,0.05)",
      }}
    >
      <span className="label-code text-[var(--sw-mint)]">AWARD-WINNING REFERENCE BUILD</span>
      <p className="mt-2 text-[13px] leading-relaxed text-white/70">
        The reference case won an award at Meet Magento New York 2025. Reference
        calls with the operator are available on request.
      </p>
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
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <HeroBg />

      <div className="flex flex-1 items-center">
        <div className="wrap relative z-10 w-full pt-24 pb-10 md:pt-28 md:pb-14">
          <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-[1.3fr_1fr]">
            {/* LEFT · copy */}
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-7">
                <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5">
                  <span className="font-head text-[11px] font-semibold uppercase tracking-[0.14em] text-white md:text-[12px]">
                    scandiweb industry solution
                  </span>
                </div>
              </div>

              <h1 className="font-head max-w-[16ch] text-[40px] leading-[1.03] tracking-[-0.015em] text-white sm:text-[52px] md:text-[60px] lg:text-[76px]">
                Telecom{" "}
                <span style={{ color: "var(--sw-mint)" }}>commerce</span>
              </h1>

              <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-white/90 md:mt-6 md:text-[18px]">
                A{" "}
                <span className="font-semibold text-white">
                  production-ready commerce accelerator
                </span>{" "}
                for telecom operators. Sell devices, plans, and bundles online,
                with installments, number selection, and coverage checks built
                in. Your BSS and CRM stay exactly as they are: the store
                connects to them, it doesn&apos;t replace them.
              </p>

              <p className="font-head mt-6 max-w-[54ch] text-[17px] leading-[1.35] text-white md:text-[20px]">
                Live in 6 to 12 weeks. Five modules, proven in production at a
                national telecom operator.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 md:mt-8">
                <div className="flex items-center gap-3 text-white">
                  <span
                    className="relative inline-flex items-center justify-center rounded-full border border-white/70"
                    style={{ width: "14px", height: "20px" }}
                    aria-hidden
                  >
                    <span className="absolute top-[4px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/80" />
                  </span>
                  <span className="text-[14px] leading-none">scroll to discover</span>
                </div>
              </div>
            </div>

            {/* RIGHT · proof card + unfinished quote slot */}
            <div className="lg:pt-16">
              <HeroProofCard />
              <ReferenceNote />
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
