"use client";

import { assetUrl } from "@/lib/assets";

/**
 * scandiweb x LegacyBridge, knocked out to white for the dark sections.
 *
 * scandiweb is the artwork the other pages use. There is no LegacyBridge mark
 * in the repo yet, so its half is set as a wordmark in the heading face at the
 * same optical size. Swapping in the real file later is one line, and until
 * then the lockup is honest rather than missing.
 */
/* TODO: LegacyBridge logo path, then render it as an <img> like scandiweb. */
export function Lockup({ size = 1 }: { size?: number }) {
  return (
    <div className="inline-flex items-center gap-3 md:gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl("/shared/logos/scandiweb.svg")}
        alt="scandiweb"
        className="w-auto opacity-90"
        style={{ height: `${19 * size}px`, filter: "brightness(0) invert(1)" }}
      />
      <span aria-hidden className="font-head text-white/35 text-[13px] leading-none">
        &times;
      </span>
      {/* 10% over the 17 it shared with the scandiweb mark. The two were
          matched on height, which left the wordmark reading smaller than the
          logo beside it. */}
      <span
        className="font-head font-bold text-white/90 leading-none tracking-[-0.01em]"
        style={{ fontSize: `${18.7 * size}px` }}
      >
        LegacyBridge
      </span>
    </div>
  );
}
