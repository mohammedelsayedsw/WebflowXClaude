"use client";

import { ArrowDown } from "lucide-react";
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

function OperatingViewCard() {
  const rows: { label: string; value: string }[] = [
    { label: "Shopify stores", value: "UK · EU · US · B2B" },
    { label: "Connected systems", value: "ERP · CMS · PIM · OMS · WMS" },
    { label: "Watched across stores", value: "CWV · apps · feeds · webhooks" },
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
        <div className="label-code text-white/55 mb-4">one operating view</div>
        <div className="space-y-3">
          {rows.map((r) => (
            <div
              key={r.label}
              className="rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <div className="label-code text-white/55 text-[9px] mb-1">
                {r.label}
              </div>
              <div className="font-head text-white text-[16px] md:text-[18px] leading-tight">
                {r.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 text-[12px] md:text-[13px] text-white/70 leading-relaxed">
          Shopify, apps, ERP, CMS, analytics, custom apps, monitoring, releases,
          and mobile. Supported as one setup, not store by store.
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
        background:
          "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
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
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  Shopify multi-store support
                </span>
              </div>

              <h1 className="font-head text-white text-[40px] sm:text-[52px] md:text-[64px] lg:text-[78px] leading-[1.03] tracking-[-0.015em] max-w-[18ch]">
                <span style={{ color: "var(--sw-mint)" }}>One</span> support
                system for merchants running multiple Shopify stores
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[60ch] leading-relaxed">
                Most merchants split into separate stores for real reasons.
                Different countries, currencies, brands, warehouses, and B2B
                versus D2C. The hard part is everything around those stores.
                Multiple installs, duplicated apps, and custom logic that drifts
                apart over time. scandiweb connects the full context around your
                stores. Shopify, apps, ERP, CMS, analytics, custom apps,
                monitoring, releases, and mobile. So issues get handled across
                the whole setup, not one store at a time.
              </p>

              <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-beige)] px-6 py-3 text-[var(--sw-beige)] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold"
                >
                  <span className="text-[14px] md:text-[15px]">
                    Talk to us about multi-store support
                  </span>
                </a>
                <a
                  href="#system"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition text-[14px] md:text-[15px] font-head font-semibold"
                >
                  See the system
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:pt-12">
              <OperatingViewCard />
            </div>
          </div>
        </div>
      </div>

      <TrustLogos />
    </section>
  );
}
