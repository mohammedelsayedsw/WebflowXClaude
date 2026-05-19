"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { assetUrl } from "@/lib/assets";

const badges = [
  {
    src: "/events/meet-magento-france/badges/badge-mmnyc25.svg",
    label: "Co-organizer, Meet Magento NYC 2025",
  },
  {
    src: "/events/meet-magento-france/badges/badge-mmca25.svg",
    label: "Co-organizer, Meet Magento Canada 2025",
  },
  {
    src: "/events/meet-magento-france/badges/badge-adobe-certified.svg",
    label: "Most certified Adobe Commerce agency",
  },
  {
    src: "/events/meet-magento-france/badges/badge-hyva-platinum.svg",
    label: "Hyvä Platinum Partner",
  },
  {
    src: "/events/meet-magento-france/badges/badge-magento-association-gold.svg",
    label: "Magento Association Gold Member",
  },
];

export function WhoIsScandiweb() {
  return (
    <section
      id="who-is-scandiweb"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)] scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <SectionLabel index="01">Who&apos;s scandiweb</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[24ch]">
              A digital commerce agency working with{" "}
              <span className="text-[var(--sw-blue)]">300+ brands</span> worldwide.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-[var(--sw-black)]/75 max-w-[60ch] leading-relaxed">
              We&apos;ve spent 23 years building and growing eCommerce stores on
              Adobe Commerce, Shopify Plus, Hyvä, and headless &ndash; with CRO
              and platform engineering in-house. We co-organize the regional
              Meet Magento events in North America and ship work for some of
              the biggest names in retail.
            </p>
          </Reveal>
        </div>

        {/* TODO: replace placeholder badge SVGs in public/events/meet-magento-france/badges/ with real designs */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {badges.map((b, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-white border border-[var(--sw-black)]/8 rounded-[4px] p-4 md:p-5 h-full flex flex-col items-center text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(b.src)}
                  alt={b.label}
                  className="h-16 md:h-20 w-auto mb-3"
                />
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
