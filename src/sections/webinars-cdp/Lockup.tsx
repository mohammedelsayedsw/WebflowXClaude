"use client";

import { assetUrl } from "@/lib/assets";

const BRANDS: { src: string; alt: string; h: number; knockOut?: boolean }[] = [
  // supplied already reversed, so it needs no filter
  { src: "/webinars/cdp/logo-bloomreach-white.webp", alt: "Bloomreach", h: 22.9 },
  { src: "/webinars/cdp/logo-sportland.webp", alt: "Sportland", h: 17, knockOut: true },
  { src: "/webinars/cdp/logo-scandiweb.webp", alt: "scandiweb", h: 18, knockOut: true },
];

/**
 * Bloomreach x Sportland x scandiweb, knocked out to white for the dark
 * section, the same mono treatment the client logos in the trust bar use.
 */
export function Lockup() {
  return (
    <div className="inline-flex items-center gap-3 md:gap-4">
      {BRANDS.map((b, i) => (
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
              height: `${b.h}px`,
              filter: b.knockOut ? "brightness(0) invert(1)" : undefined,
            }}
          />
        </span>
      ))}
    </div>
  );
}
