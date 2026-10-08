"use client";

import { assetUrl } from "@/lib/assets";

/**
 * scandiweb x ReadyMage, the same artwork and spacing the Expedio page header
 * uses. `size` scales both marks together.
 */
export function Lockup({ size = 1 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-3 sm:gap-4" aria-label="scandiweb and ReadyMage">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl("/shared/logos/scandiweb.svg")}
        alt="scandiweb"
        className="w-auto"
        style={{ height: `${17 * size}px` }}
      />
      <span aria-hidden className="w-px bg-white/35" style={{ height: `${26 * size}px` }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl("/magento/expedio/readymage.svg")}
        alt="ReadyMage"
        className="w-auto translate-y-[2px]"
        style={{ height: `${23 * size}px` }}
      />
    </span>
  );
}
