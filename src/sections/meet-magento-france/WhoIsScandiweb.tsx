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
    src: "/events/meet-magento-france/badges/badge-mmca25.png",
    label: "Co-organizer · Meet Magento Canada 2025",
  },
  {
    src: "/events/meet-magento-france/badges/badge-adobe-certified.png",
    label: "894+ Adobe Commerce certifications · #1 globally",
  },
  {
    src: "/events/meet-magento-france/badges/badge-hyva-platinum.png",
    label: "Hyvä Platinum Partner",
  },
  {
    src: "/events/meet-magento-france/badges/badge-magento-association-gold.png",
    label: "Magento Association\nGold Member",
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
        <div className="mb-14 md:mb-20">
          <Reveal>
            <SectionLabel index="02">The agency</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6">
              What is{" "}
              <span style={{ color: "var(--sw-mint)" }}>scandiweb</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[15px] md:text-[17px] text-white/75 max-w-[62ch] leading-relaxed">
              An eCommerce agency 23 years in, working across 33 countries.
              We&apos;ve shipped 2,100+ Magento projects for 700+ clients
              &ndash; Adobe Commerce, Magento Open Source and Hyvä stores for
              brands like Jaguar Land Rover, The New York Times, Samsung,
              Toyota and Reuters. Last year, in 2025, we co-organized Meet
              Magento NYC and Meet Magento Canada. Every Magento build is its
              own puzzle &ndash; we&apos;re built to solve them.
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
                <span className="text-[var(--sw-black)]/75 text-[12px] md:text-[13px] leading-tight whitespace-pre-line">
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
