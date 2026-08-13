"use client";

import { assetUrl } from "@/lib/assets";

const BRANDS: { src: string; alt: string; h: number }[] = [
  { src: "/webinars/cdp/logo-bloomreach.webp", alt: "Bloomreach", h: 22 },
  { src: "/webinars/cdp/logo-sportland.webp", alt: "Sportland", h: 17 },
  { src: "/webinars/cdp/logo-scandiweb.webp", alt: "scandiweb", h: 18 },
];

/**
 * Bloomreach x Sportland x scandiweb. The Bloomreach wordmark is navy and the
 * other two are red, so on a dark section the row sits on a light plate rather
 * than being recoloured, which would break all three brands.
 */
export function Lockup() {
  return (
    <div className="inline-flex items-center gap-3 md:gap-4 rounded-[4px] bg-white px-4 py-2.5">
      {BRANDS.map((b, i) => (
        <span key={b.alt} className="inline-flex items-center gap-3 md:gap-4">
          {i > 0 ? (
            <span
              aria-hidden
              className="font-head text-[var(--sw-black)]/35 text-[13px] leading-none"
            >
              &times;
            </span>
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl(b.src)}
            alt={b.alt}
            className="w-auto"
            style={{ height: `${b.h}px` }}
          />
        </span>
      ))}
    </div>
  );
}
