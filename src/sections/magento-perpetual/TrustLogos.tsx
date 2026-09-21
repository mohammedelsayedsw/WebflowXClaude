"use client";

import { assetUrl } from "@/lib/assets";

const logos: { src: string; alt: string; h: number }[] = [
  { src: "/shared/logos/clients/puma.svg", alt: "PUMA", h: 30 },
  { src: "/shared/logos/clients/olympus.png", alt: "OM Digital Solutions / Olympus", h: 24 },
  { src: "/shared/logos/clients/boyscouts.png", alt: "Boy Scouts of America", h: 28 },
  { src: "/shared/logos/clients/nytimes.svg", alt: "The New York Times", h: 22 },
  { src: "/shared/logos/clients/samsung.svg", alt: "Samsung", h: 22 },
  { src: "/shared/logos/clients/adobe.svg", alt: "Adobe", h: 22 },
];

const FADE =
  "linear-gradient(90deg, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%)";

/**
 * The client logo marquee, as on the other Magento pages, except that the row
 * fades out at both ends through a mask. The shared one paints navy gradients
 * over the ends, and on this page's ink ground those read as a blue tint on
 * the logos passing under them.
 */
export function TrustLogos() {
  const loop = [...logos, ...logos];
  return (
    <div className="relative z-10">
      <div className="wrap py-3 md:py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <div className="font-head font-bold text-white text-[14px] md:text-[18px] leading-[1.35] shrink-0">
          Trusted by 700+ leading brands worldwide
        </div>
        <div
          className="relative flex-1 overflow-hidden"
          aria-label="Client logos"
          style={{ maskImage: FADE, WebkitMaskImage: FADE }}
        >
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
        </div>
      </div>
    </div>
  );
}
