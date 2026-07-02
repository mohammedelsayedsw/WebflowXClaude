"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const logoBase = "/magento/adobe-commerce-to-magento-open-source/logos/moved";

const brands: { slug: string; name: string }[] = [
  { slug: "nissan-co-jp", name: "Nissan" },
  { slug: "loake-com", name: "Loake" },
  { slug: "fleetcomplete-com", name: "Fleet Complete" },
  { slug: "federation-edu-au", name: "Federation University" },
  { slug: "humanware-com", name: "HumanWare" },
  { slug: "termly-io", name: "Termly" },
  { slug: "motifmotif-com", name: "Motif" },
  { slug: "simetrica-mx", name: "Simetrica" },
  { slug: "scalefree-com", name: "Scalefree" },
  { slug: "amazonhose-com", name: "Amazon Hose" },
  { slug: "oecanada-com", name: "OE Canada" },
  { slug: "arcitura-com", name: "Arcitura" },
  { slug: "satyamedicals-com", name: "Satya Medicals" },
  { slug: "parrishlawncare-com", name: "Parrish Lawn Care" },
  { slug: "shepherdofthehillssylva-org", name: "Shepherd of the Hills" },
  { slug: "xavierdelion-com", name: "Xavier de Lion" },
  { slug: "olgainthekitchen-com", name: "Olga in the Kitchen" },
  { slug: "lighthouse-sf-org", name: "Lighthouse SF" },
  { slug: "tailoredemerged-com", name: "Tailored" },
  { slug: "muirchertach-com", name: "Muirchertach" },
];

export function MigratedBrands() {
  const loop = [...brands, ...brands];
  return (
    <section className="bg-lp-bright py-14 md:py-16 border-b border-[var(--sw-black)]/10">
      <div className="wrap">
        <Reveal>
          <p className="font-head text-[var(--sw-black)] text-[18px] md:text-[22px] leading-[1.3] max-w-[46ch]">
            <span className="text-[var(--sw-blue)]">15,000+ stores</span>{" "}
            worldwide have already moved off Adobe Commerce to Magento Open
            Source
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-8 overflow-hidden" aria-label="Brands migrated to Magento Open Source">
          <div className="sw-marquee-track flex items-center gap-x-4">
            {loop.map((b, i) => (
              <span
                key={i}
                aria-hidden={i >= brands.length}
                className="flex shrink-0 items-center gap-2.5 rounded-[2px] border border-[var(--sw-black)]/12 bg-white px-4 py-2.5"
              >
                <img
                  src={assetUrl(`${logoBase}/${b.slug}.png`)}
                  alt={i < brands.length ? b.name : ""}
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <span className="whitespace-nowrap font-head text-[14px] md:text-[15px] font-semibold text-[var(--sw-black)]/80">
                  {b.name}
                </span>
              </span>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24"
            style={{
              background:
                "linear-gradient(90deg, var(--sw-beige) 0%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24"
            style={{
              background:
                "linear-gradient(270deg, var(--sw-beige) 0%, transparent 100%)",
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}
