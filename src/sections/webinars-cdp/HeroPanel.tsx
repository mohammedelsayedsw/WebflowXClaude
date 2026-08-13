"use client";

import { assetUrl } from "@/lib/assets";

/**
 * The panel cut-out. Names sit over the faded lower part of the shot rather
 * than above it, one under each person. Add a third and a fourth by extending
 * this list and swapping the image.
 */
const NAMES: { name: string; role: string; company: string }[] = [
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
    <div className="relative w-full">
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
          src={assetUrl("/webinars/cdp/panel-liis-glebs.webp")}
          alt="Liis Veersalu of Sportland and Glebs Vrevsky of scandiweb"
          className="w-full h-auto max-h-[38vh] lg:max-h-[52vh] object-contain object-bottom"
        />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 grid gap-4 md:gap-6"
        style={{
          gridTemplateColumns: `repeat(${NAMES.length}, minmax(0, 1fr))`,
        }}
      >
        {NAMES.map((p) => (
          <div key={p.name}>
            <div className="font-head text-white text-[13px] md:text-[15px] leading-[1.2]">
              {p.name}
            </div>
            <div className="text-white/70 text-[11px] md:text-[12px] leading-snug mt-1">
              {p.role}
            </div>
            <div className="text-white/50 text-[11px] md:text-[12px] leading-snug">
              {p.company}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
