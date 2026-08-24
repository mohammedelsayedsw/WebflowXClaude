"use client";

import { assetUrl } from "@/lib/assets";

/**
 * scandiweb x Pimcore, knocked out to white for the dark sections. Both marks
 * are single-colour artwork, so `brightness(0) invert(1)` reverses them cleanly
 * and they sit on one optical baseline.
 */
export function Lockup({ size = 1 }: { size?: number }) {
  const brands: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/scandiweb.svg", alt: "scandiweb", h: 19 },
    { src: "/webinars/pimcore/logo-pimcore.png", alt: "Pimcore", h: 21 },
  ];

  return (
    <div className="inline-flex items-center gap-3 md:gap-4">
      {brands.map((b, i) => (
        <span key={b.alt} className="inline-flex items-center gap-3 md:gap-4">
          {i > 0 ? (
            <span
              aria-hidden
              className="font-head text-white/35 text-[13px] leading-none"
            >
              &times;
            </span>
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl(b.src)}
            alt={b.alt}
            className="w-auto opacity-90"
            style={{
              height: `${b.h * size}px`,
              filter: "brightness(0) invert(1)",
            }}
          />
        </span>
      ))}
    </div>
  );
}

/** Platinum partner badge, used as proof at the foot of the hero. */
export function PartnerBadge({ h = 56 }: { h?: number }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={assetUrl("/webinars/pimcore/pimcore-platinum-partner.png")}
      alt="scandiweb is a Pimcore Platinum Solution Partner"
      className="w-auto shrink-0"
      style={{ height: `${h}px` }}
    />
  );
}
