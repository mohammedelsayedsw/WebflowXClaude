"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { SectionLabel } from "./SectionLabel";

export function LiveDemo() {
  return (
    <section id="the-demo" className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel n={4} dark>The live demo</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                Watch both stores <span style={{ color: "var(--sw-mint)" }}>side by side</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed">
              In the webinar we run the same store on stock Magento and on Expedio, on the same data and
              server, and click through both at once so you can see the difference in every page.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-10 md:mt-14">
          <div className="overflow-hidden rounded-[4px] border border-white/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/webinars/expedio/demo-side-by-side.jpg")}
              alt="The demo: the same store on Magento and on Expedio, with live timings"
              loading="lazy"
              className="block w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
