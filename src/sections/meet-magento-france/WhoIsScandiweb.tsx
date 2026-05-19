"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { assetUrl } from "@/lib/assets";

const badges = [
  {
    src: "/events/meet-magento-france/badges/badge-mmnyc25.png",
    label: "Co-organizer · Meet Magento NYC 2025",
  },
  {
    src: "/events/meet-magento-france/badges/badge-mmca25.svg",
    label: "Co-organizer · Meet Magento Canada 2025",
  },
  {
    src: "/events/meet-magento-france/badges/badge-adobe-certified.svg",
    label: "894+ Adobe Commerce certifications · #1 globally",
  },
  {
    src: "/events/meet-magento-france/badges/badge-hyva-platinum.svg",
    label: "Hyvä Platinum Partner",
  },
  {
    src: "/events/meet-magento-france/badges/badge-magento-association-gold.svg",
    label: "Magento Association · Gold Member",
  },
];

export function WhoIsScandiweb() {
  return (
    <section
      id="who-is-scandiweb"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <SectionLabel index="02">The agency</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[22ch]">
              Quick: who is{" "}
              <span style={{ color: "var(--sw-mint)" }}>scandiweb</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[16px] md:text-[18px] text-white/85 max-w-[62ch] leading-relaxed">
              A 500-person eCommerce agency across 33 countries, 23 years in.
              We&apos;ve shipped Adobe Commerce, Magento Open Source and Hyvä
              stores for brands like Jaguar Land Rover, The New York Times,
              Samsung, Toyota and Reuters. Last year, in 2025, we co-organized
              Meet Magento NYC and Meet Magento Canada. If it runs on Magento,
              chances are we&apos;ve built one like it before.
            </p>
          </Reveal>
        </div>

        {/* TODO: replace placeholder badge SVGs in public/events/meet-magento-france/badges/ with real designs */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {badges.map((b, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-white rounded-[4px] p-4 md:p-5 h-full flex flex-col items-center text-center">
                <div className="h-16 md:h-20 w-full flex items-center justify-center mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(b.src)}
                    alt={b.label}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-[var(--sw-black)]/75 text-[12px] md:text-[13px] leading-tight">
                  {b.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
