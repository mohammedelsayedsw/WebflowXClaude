"use client";

import { assetUrl } from "@/lib/assets";

const LOGOS = [
  ["puma-white", "PUMA"],
  ["samsung-white", "Samsung"],
  ["land-rover", "Land Rover"],
  ["new-york-times-white", "The New York Times"],
  ["adobe-white", "Adobe"],
  ["sportland", "Sportland"],
] as const;

export function Logos() {
  return (
    <section aria-label="Brands scandiweb works with" className="relative z-10 bg-[#05070f] border-t border-white/10">
      <div className="wrap py-10 md:py-12 flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6">
        {LOGOS.map(([file, name]) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={file}
            src={assetUrl(`/akeneo/plus-bundle/clients/${file}.svg`)}
            alt={name}
            className="h-6 md:h-7 w-auto opacity-60"
            style={{ filter: "brightness(0) invert(1)" }}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
