"use client";

import { Reveal } from "@/components/primitives/Reveal";

const brands = [
  "Fleet Complete",
  "Federation University",
  "HumanWare",
  "Termly",
  "Motif",
  "Simetrica",
  "Scalefree",
  "Amazon Hose",
];

export function MigratedBrands() {
  return (
    <section className="bg-lp-bright py-14 md:py-16 border-b border-[var(--sw-black)]/10">
      <div className="wrap">
        <Reveal>
          <p className="font-head text-[var(--sw-black)] text-[18px] md:text-[22px] leading-[1.3] max-w-[42ch]">
            <span className="text-[var(--sw-blue)]">15,000+ stores</span>{" "}
            worldwide have already moved off Adobe Commerce to Magento Open
            Source
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            {brands.map((b) => (
              <span
                key={b}
                className="rounded-[2px] border border-[var(--sw-black)]/12 bg-white px-4 py-2.5 font-head text-[14px] md:text-[15px] text-[var(--sw-black)]/75"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
