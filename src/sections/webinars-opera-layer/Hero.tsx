"use client";

import { ArrowUpRight } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";

/* Outlets that covered the OperaLayer launch. No logo files on hand, so
   these render as text wordmarks linking to the coverage.
   {/* TODO: swap for real press SVG logos when available *\/} */
const press: { name: string; href: string }[] = [
  {
    name: "IT Wire",
    href: "https://itwire.com/business-it-news/business-software/scandiwebs-operalayer-ships-72-hour-mvps-to-plug-the-gaps-your-erp-cant-see",
  },
  {
    name: "European Business Review",
    href: "https://www.europeanbusinessreview.com/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
  },
  {
    name: "Tech Bullion",
    href: "https://techbullion.com/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
  },
  {
    name: "Retail Tech Innovation Hub",
    href: "https://retailtechinnovationhub.com/home/2026/6/1/scandiweb-releases-new-version-of-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions",
  },
  {
    name: "Retail Focus",
    href: "https://retail-focus.co.uk/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
  },
  {
    name: "Tech Buzz Ireland",
    href: "https://techbuzzireland.com/2026/05/29/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
  },
];

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

function PressStrip() {
  return (
    <div
      className="relative z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-[clamp(14px,2.5vh,30px)] flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <div className="label-code text-white/55 text-[10px] shrink-0">
          As featured in
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 md:gap-x-9">
          {press.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-head font-semibold text-white/65 text-[13px] md:text-[15px] leading-none whitespace-nowrap transition-colors hover:text-white"
            >
              {p.name}
            </a>
          ))}
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
          <div className="max-w-[52rem]">
            <Reveal>
              <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-5 md:mb-6">
                <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                  Free webinar &middot; Operations &amp; systems
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-head text-white text-[30px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[1.04] tracking-[-0.015em] max-w-[20ch]">
                You bought every platform. The gap between them is still
                yours.
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
        </div>
      </div>

      {/* Press coverage strip */}
      <PressStrip />
    </section>
  );
}
