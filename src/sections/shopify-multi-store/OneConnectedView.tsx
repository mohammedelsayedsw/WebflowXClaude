"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { OperatingViewRadial } from "@/sections/shopify-multi-store/OperatingViewRadial";

export function OneConnectedView() {
  return (
    <section id="view" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[60ch]">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">
              how it works
            </div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Many Shopify stores,{" "}
              <span className="text-[var(--sw-blue)]">one connected view</span>
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
              Each store keeps its own storefront, theme, and checkout. The
              systems they share are connected underneath, so your team sees one
              picture instead of five.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 md:mt-16 mx-auto max-w-[860px]">
            <OperatingViewRadial theme="bright" />
          </div>
          <p className="mt-8 text-center label-code text-[var(--sw-black)]/55">
            five stores. one view. the systems they share, connected underneath
          </p>
        </Reveal>
      </div>
    </section>
  );
}
