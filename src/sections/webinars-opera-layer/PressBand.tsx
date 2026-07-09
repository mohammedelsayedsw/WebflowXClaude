"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

/* Outlets that covered the OperaLayer launch. White logos on a dark band.
   Entries without a `logo` fall back to a text wordmark.
   {/* TODO: add Tech Buzz Ireland logo when available *\/} */
const press: { name: string; href: string; logo?: string; h: number }[] = [
  {
    name: "IT Wire",
    href: "https://itwire.com/business-it-news/business-software/scandiwebs-operalayer-ships-72-hour-mvps-to-plug-the-gaps-your-erp-cant-see",
    logo: "/webinars/opera-layer/press/itwire.png",
    h: 24,
  },
  {
    name: "The European Business Review",
    href: "https://www.europeanbusinessreview.com/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
    logo: "/webinars/opera-layer/press/ebr.png",
    h: 42,
  },
  {
    name: "Tech Bullion",
    href: "https://techbullion.com/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
    logo: "/webinars/opera-layer/press/techbullion.png",
    h: 28,
  },
  {
    name: "Retail Tech Innovation Hub",
    href: "https://retailtechinnovationhub.com/home/2026/6/1/scandiweb-releases-new-version-of-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions",
    logo: "/webinars/opera-layer/press/rtih.png",
    h: 36,
  },
  {
    name: "Retail Focus",
    href: "https://retail-focus.co.uk/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
    logo: "/webinars/opera-layer/press/retailfocus.png",
    h: 20,
  },
  {
    name: "Tech Buzz Ireland",
    href: "https://techbuzzireland.com/2026/05/29/scandiweb-announces-stock-and-shipment-control-cockpit-and-exception-allocation-technology-built-on-operalayer-to-help-retailers-respond-faster-to-supply-chain-disruptions/",
    h: 24,
  },
];

export function PressBand() {
  return (
    <section
      id="as-featured-in"
      className="relative bg-[var(--sw-black)] py-16 md:py-20 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/50 text-[10px] text-center">
            As featured in
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-7 md:mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {press.map((p) =>
              p.logo ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
                  aria-label={p.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(p.logo)}
                    alt={p.name}
                    className="w-auto"
                    style={{ height: `${p.h}px` }}
                  />
                </a>
              ) : (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-head font-semibold text-white/60 text-[15px] md:text-[18px] leading-none whitespace-nowrap transition-colors hover:text-white"
                >
                  {p.name}
                </a>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
