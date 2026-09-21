"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const base = "/magento/perpetual/cases";

type Case = {
  brand: string;
  file: string;
  /** optical height of the logo; the marks differ too much in shape for one value */
  logoH: number;
  shotAlt: string;
  line: string;
  stats: [string, string][];
};

const cases: Case[] = [
  {
    brand: "PUMA",
    file: "puma",
    logoH: 36,
    shotAlt: "PUMA storefront rebuilt on Magento",
    line: "First orders two minutes after go-live on a locked timeline",
    stats: [
      ["4", "Markets launched"],
      ["95", "Days end to end"],
      ["3x", "Performance improvement"],
    ],
  },
  {
    brand: "Classic Football Shirts",
    file: "classic-football-shirts",
    logoH: 34,
    shotAlt: "Classic Football Shirts storefront on Magento",
    line: "A 22,000-SKU store upgraded two release lines and rebuilt for speed",
    stats: [
      ["2.5x", "PageSpeed performance score"],
      ["350%", "Faster first input response"],
      ["45%", "Faster interaction response"],
    ],
  },
  {
    brand: "Läderach",
    file: "laderach",
    logoH: 24,
    shotAlt: "Läderach storefront on Magento",
    line: "A 134-boutique chocolate brand upgraded to 2.4.7 with 30+ extensions",
    stats: [
      ["+39%", "Revenue"],
      ["+47.8%", "Conversions"],
      ["+52.9%", "Total users"],
    ],
  },
  {
    brand: "Umniah",
    file: "umniah",
    logoH: 34,
    shotAlt: "Umniah storefront rebuilt on Magento and Hyvä",
    line: "A national telecom’s legacy frontend rebuilt on Magento 2.4 and Hyvä",
    stats: [
      ["+86%", "Cart-to-view rate"],
      ["+71.2%", "Purchase-to-view rate"],
      ["+41.1%", "Items purchased"],
    ],
  },
  {
    brand: "Byggmax",
    file: "byggmax",
    logoH: 17,
    shotAlt: "Byggmax storefront rebuilt on Magento",
    line: "A page-by-page frontend rebuild across 160+ Nordic retail stores",
    stats: [
      ["85 → 99", "PLP PageSpeed score"],
      ["70 → 87", "PDP PageSpeed score"],
      ["55,000+", "SKUs on the new frontend"],
    ],
  },
  {
    brand: "Gear-Up",
    file: "gear-up",
    logoH: 30,
    shotAlt: "Gear-Up storefront on a supported Magento release",
    line: "Ten years of order history carried onto a supported release",
    stats: [
      ["+110.9%", "Revenue year over year"],
      ["+47.7%", "Orders year over year"],
      ["+124K", "Clicks year over year"],
    ],
  },
];

/**
 * Six client stores: the storefront, the logo, one line, three figures. Dark
 * glass on the ink ground, so the star field stays visible between the cards.
 */
export function Cases() {
  return (
    <section id="proof" className="relative z-10 py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[20ch]">
            Stores that performed better after the upgrade
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.brand} delay={i * 0.07} className="h-full">
              <article
                className="h-full flex flex-col overflow-hidden rounded-[4px] border border-white/12"
                style={{ background: "rgba(16,19,44,0.55)" }}
              >
                <div className="px-4 pt-4 border-b border-white/10">
                  <img
                    src={assetUrl(`${base}/${c.file}.png`)}
                    alt={c.shotAlt}
                    width={500}
                    height={365}
                    loading="lazy"
                    className="block w-full h-auto max-h-[210px] object-contain object-bottom"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="h-9 flex items-end">
                    <img
                      src={assetUrl(`${base}/${c.file}-logo.svg`)}
                      alt={c.brand}
                      loading="lazy"
                      style={{ height: c.logoH }}
                      className="w-auto max-w-[170px] object-contain object-left"
                    />
                  </div>
                  <p className="mt-5 flex-1 text-white/80 text-[16px] leading-relaxed">
                    {c.line}
                  </p>
                  <ul className="mt-6 pt-5 border-t border-white/10 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 items-baseline">
                    {c.stats.map(([n, label]) => (
                      <li key={label} className="contents">
                        <b
                          className="font-head font-bold text-[21px] leading-none tracking-[-0.02em] tabular-nums whitespace-nowrap"
                          style={{ color: "var(--sw-mint)" }}
                        >
                          {n}
                        </b>
                        <span className="text-white/70 text-[16px] leading-snug">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
