"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

/* Outlets that covered the OperaLayer launch. White logos on a dark band.
   Entries without a `logo` fall back to a text wordmark. */
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
    h: 31,
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
    h: 23,
  },
];

/**
 * "Featured in" press row. Rendered inside the Overview (In short) section so
 * it shares the exact same bright background, with no seam between them.
 */
export function PressBand() {
  return (
    <div id="as-featured-in" className="wrap relative mt-16 md:mt-24 scroll-mt-20">
      <div>
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/45 text-[10px] text-center">
            Featured in
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
                  className="shrink-0 opacity-60 transition-opacity hover:opacity-100"
                  aria-label={p.name}
                >
                  {/* white source logos inverted to dark for the light band */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(p.logo)}
                    alt={p.name}
                    className="w-auto"
                    style={{ height: `${p.h}px`, filter: "brightness(0)" }}
                  />
                </a>
              ) : (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-head font-semibold text-[var(--sw-black)]/60 text-[15px] md:text-[18px] leading-none whitespace-nowrap transition-colors hover:text-[var(--sw-black)]"
                >
                  {p.name}
                </a>
              )
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
