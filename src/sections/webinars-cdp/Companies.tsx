"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const COMPANIES: {
  logo: string;
  alt: string;
  h: number;
  body: string;
}[] = [
  {
    logo: "/webinars/cdp/logo-sportland.webp",
    alt: "Sportland",
    h: 20,
    body: "The retailer in the case, the leading sportswear brand in the Baltics. It runs five markets on one platform.",
  },
  {
    logo: "/webinars/cdp/logo-bloomreach.webp",
    alt: "Bloomreach",
    h: 24,
    body: "The customer data platform. It unifies customer data from every source into one profile, then runs personalization across email, ads, and the storefront.",
  },
  {
    logo: "/webinars/cdp/logo-scandiweb.webp",
    alt: "scandiweb",
    h: 21,
    body: "The agency that built and runs it. scandiweb scoped the platform, migrated Sportland off Klaviyo, and owns the personalization strategy.",
  },
];

export function Companies() {
  return (
    <section
      id="the-companies"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[70ch]">
          <Reveal>
            <div className="label-code mb-4 text-[var(--sw-black)]/55">The companies</div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em]">
              Three companies, three roles
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 md:mt-6 text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-[1.6]">
              A customer data platform, or CDP, pulls all your customer data
              into one place so you can act on it. These three companies each
              played a part in Sportland&apos;s.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {COMPANIES.map((c, i) => (
            <Reveal key={c.alt} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <div className="h-8 flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(c.logo)}
                    alt={c.alt}
                    className="w-auto"
                    style={{
                      height: `${c.h}px`,
                    }}
                  />
                </div>
                <p className="mt-6 text-[var(--sw-black)]/75 text-[15px] md:text-[16px] leading-relaxed">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
