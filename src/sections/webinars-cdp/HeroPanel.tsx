"use client";

import { Fragment } from "react";
import { assetUrl } from "@/lib/assets";

/**
 * The panel cut-out. Names sit over the faded lower part of the shot rather
 * than above it, one under each person. Add a third and a fourth by extending
 * this list and swapping the image.
 */
const NAMES: { name: string; role: string; company: string }[] = [
  {
    name: "Hugo Habodasz",
    role: "Senior Success Manager",
    company: "Bloomreach",
  },
  {
    name: "Liis Veersalu",
    role: "Head of Group Marketing & Communications",
    company: "Sportland",
  },
  {
    name: "Glebs Vrevsky",
    role: "Board Member & co-CEO",
    company: "scandiweb",
  },
];

export function HeroPanel() {
  return (
    // Below lg the height cap decides the size, so the box shrinks to the shot
    // itself and centres. Otherwise the names span the full column while the
    // photo sits letterboxed in the middle of it, and each name drifts left of
    // the person it belongs to.
    <div className="relative w-fit mx-auto lg:w-full lg:mx-0 max-[380px]:max-h-0 max-[380px]:overflow-hidden max-[380px]:hidden">
      {/* The shot is a cut-out, so it fades out at the bottom with a mask
          rather than a coloured overlay. That keeps the hero's gradient
          showing through instead of banding against a flat colour, and it
          gives the names a dark area to sit on. */}
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, #000 46%, rgba(0,0,0,0) 92%)",
          maskImage:
            "linear-gradient(180deg, #000 0%, #000 46%, rgba(0,0,0,0) 92%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetUrl("/webinars/cdp/panel-hugo-liis-glebs.webp")}
          alt="Hugo Habodasz of Bloomreach, Liis Veersalu of Sportland and Glebs Vrevsky of scandiweb"
          className="w-auto max-w-full lg:w-full h-auto max-h-[22vh] sm:max-h-[30vh] lg:max-h-[60vh] object-contain object-bottom"
        />
      </div>

      {/* Names and companies are two rows of one grid rather than a stack per
          person. Around 1024-1100px a column gets narrow enough for one of the
          names to wrap, and a per-person stack would push only that company
          line down. Sharing a row keeps every company on the same baseline
          whichever name happens to wrap first. */}
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
            <div className="font-head text-white text-[13px] md:text-[15px] leading-[1.2]">
              {p.name}
            </div>
            <div className="text-white/55 text-[11px] md:text-[13px] leading-snug mt-1">
              {p.company}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
