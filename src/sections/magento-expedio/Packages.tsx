"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { ARI_GET } from "./ariLinks";
import { btnPrimary } from "./Hero";

/** Open source, one line, one way out to Ari. No plan details on scandiweb.com by design. */
export function Packages() {
  return (
    <section id="get" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Reveal className="max-w-[46rem] mx-auto text-center">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px]">Free for the Magento community</h2>
          <p className="mt-6 text-white/75 text-[17px] md:text-[19px] leading-[1.6]">
            The Expedio core is open source. Run it yourself, or have Ari, the first agent for Magento, install it on a
            copy of your store.
          </p>
          <div className="mt-10">
            <a href={ARI_GET} className={btnPrimary}>
              Get Expedio <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
