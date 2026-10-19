"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { ARI_GET } from "./ariLinks";
import { btnPrimary, btnSecondary } from "./Hero";

/** Open source, one line, one way out to Ari. No plan details on scandiweb.com by design. */
export function Packages() {
  return (
    <section id="get" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Reveal className="max-w-[46rem] mx-auto text-center">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px]">Get Expedio for your store</h2>
          <p className="mt-6 text-white/75 text-[17px] md:text-[19px] leading-[1.6]">
            Built by scandiweb, with an open-source core. Get it for your store, or talk to the scandiweb team about
            making your Magento at least 2x faster.
          </p>
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href={ARI_GET} className={btnPrimary}>
                Get Expedio <span aria-hidden>↗</span>
              </a>
              <a href="#contact" className={btnSecondary}>
                Talk to us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
