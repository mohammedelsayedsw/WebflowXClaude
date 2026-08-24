"use client";

import { Fragment } from "react";
import { assetUrl } from "@/lib/assets";

/**
 * The speaker cut-out that closes the hero, the same treatment the CDP webinar
 * page uses. Names sit over the faded lower part of the shot, one under each
 * person, rather than above it.
 *
 * Both speakers are from scandiweb and the co-brand lockup already says so, so
 * the second line carries the role instead of the company.
 */
const NAMES: { name: string; role: string }[] = [
  { name: "Ana Luisa Taylor", role: "Key Account Manager" },
  { name: "Maris Skujins", role: "Head of Digital Commerce Strategy" },
];

export function HeroPanel() {
  return (
    // Below lg the height cap decides the size, so the box shrinks to the shot
    // itself and centres. Otherwise the names span the full column while the
    // photo sits letterboxed in the middle of it, and each name drifts left of
    // the person it belongs to.
    //
    // From lg the panel is wider than its grid column on purpose. The copy
    // column needs its width for the headline, so the shot bleeds to the right
    // instead of shrinking. The hero clips the overflow.
    <div className="relative w-fit mx-auto lg:w-[126%] lg:max-w-none lg:mx-0 lg:-translate-x-[70px]">
      {/* The shot is a cut-out, so it fades out at the bottom with a mask
          rather than a coloured overlay. That keeps the hero's gradient
          showing through instead of banding against a flat colour, and it
          gives the names a dark area to sit on. */}
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0) 94%)",
          maskImage:
            "linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0) 94%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetUrl("/webinars/pimcore/panel-ana-maris.webp")}
          alt="Ana Luisa Taylor and Maris Skujins of scandiweb"
          className="w-auto max-w-full lg:w-full h-auto max-h-[22vh] sm:max-h-[26vh] lg:max-h-[62vh] object-contain object-bottom"
        />
      </div>

      {/* Names and roles are two rows of one grid rather than a stack per
          person, so a role that wraps cannot push only its own name out of
          line with the other. Each label is centred in its column, which lands
          it under the person it belongs to rather than to their left. */}
      <div
        className="absolute inset-x-0 bottom-0 grid gap-x-4 md:gap-x-6"
        style={{
          gridTemplateColumns: `repeat(${NAMES.length}, minmax(0, 1fr))`,
          gridTemplateRows: "auto auto",
          gridAutoFlow: "column",
        }}
      >
        {NAMES.map((p) => (
          <Fragment key={p.name}>
            <div className="font-head text-white text-[13px] md:text-[15px] leading-[1.2] text-center">
              {p.name}
            </div>
            <div className="text-white/55 text-[11px] md:text-[13px] leading-snug mt-1 text-pretty text-center">
              {p.role}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
