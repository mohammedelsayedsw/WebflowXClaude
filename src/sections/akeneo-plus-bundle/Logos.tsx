"use client";

import { assetUrl } from "@/lib/assets";

const LOGOS = [
  ["puma-white", "PUMA"],
  ["new-york-times-white", "The New York Times"],
  ["adobe-white", "Adobe"],
  ["samsung-white", "Samsung"],
  ["buff", "Buff"],
  ["land-rover", "Land Rover"],
  ["sportland", "Sportland"],
] as const;

export function Logos() {
  return (
    <section
      aria-label="Brands scandiweb works with"
      className="relative z-10 border-t border-white/10"
      style={{
        background:
          "radial-gradient(ellipse 30% 220% at 55% 50%, rgba(68,76,170,0.68) 0%, rgba(39,45,103,0.25) 52%, transparent 80%), var(--sw-black)",
      }}
    >
      <div className="wrap py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-11">
        <p className="lg:w-[210px] shrink-0 font-head font-bold text-white text-[17px] leading-[1.5] text-center lg:text-left">
          Trusted by leading brands worldwide
        </p>
        <ul className="flex-1 grid grid-cols-3 sm:grid-cols-4 lg:flex items-center lg:justify-between gap-x-8 gap-y-5">
          {LOGOS.map(([file, name]) => (
            <li key={file} className="flex items-center justify-center h-12 lg:h-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl(`/akeneo/plus-bundle/clients/${file}.svg`)}
                alt={name}
                className="max-h-full w-auto max-w-[96px] sm:max-w-[120px] lg:max-w-[150px] object-contain"
                style={
                  file === "buff"
                    ? { filter: "grayscale(1) contrast(10) invert(1)", mixBlendMode: "screen", width: 48, height: 48 }
                    : { filter: "brightness(0) invert(1)" }
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
