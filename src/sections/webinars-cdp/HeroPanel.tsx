"use client";

import { SPEAKERS, SpeakerPhoto } from "./panel";

/**
 * The panel in the hero: one box per speaker, in the same order as the Meet
 * the panel section, so the two never drift apart. Two up rather than four
 * across, since four thumbnails in the hero column would be too small to
 * recognise anyone.
 */
export function HeroPanel() {
  return (
    // capped rather than filling the column, so the boxes stay a supporting
    // element next to the headline. Phones are already narrower than the cap.
    <div className="grid grid-cols-2 gap-3 md:gap-3.5 max-w-[360px]">
      {SPEAKERS.map((s) => (
        <div
          key={s.name}
          className="flex h-full flex-col rounded-[4px] border border-white/12 bg-white/[0.04] p-2.5 md:p-3"
        >
          {/* a small square rather than a full-width one, so the box stays a
              label with a face on it */}
          <SpeakerPhoto
            speaker={s}
            className="w-[84px] md:w-[92px] aspect-square"
          />
          <div className="mt-2.5">
            <div className="font-head text-white text-[13px] md:text-[14px] leading-[1.2]">
              {s.name}
            </div>
            <div className="mt-1.5 text-white/70 text-[11px] md:text-[12px] leading-snug text-pretty">
              {s.role}
            </div>
            <div className="text-white/55 text-[11px] md:text-[12px] leading-snug">
              {s.company}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
