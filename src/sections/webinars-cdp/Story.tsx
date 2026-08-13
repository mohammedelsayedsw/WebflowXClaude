"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

export function Story() {
  return (
    <section
      id="the-story"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* LEFT · label, heading, and the story */}
          <div>
            <Reveal>
              <div className="label-code mb-4 text-[var(--sw-black)]/55">
                The story
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em]">
                Sportland outgrew a{" "}
                <span className="text-[var(--sw-blue)]">
                  standalone email tool
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 md:mt-7 text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-[1.6] max-w-[60ch]">
                Sportland is the leading sportswear retailer in the Baltics,
                running distinct store views, languages, and product ranges
                across four markets. Their marketing was tied to a standalone
                email tool that could not keep up with the automation and
                personalization they wanted. Instead of moving to another email
                service, they rebuilt the foundation, migrating from Klaviyo to
                Bloomreach and unifying customer data across every market on one
                platform.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · the Sportland storefront */}
          <Reveal delay={0.15}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/webinars/cdp/sportland-storefront.webp")}
              alt="The Sportland store on desktop and mobile"
              className="w-full h-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
