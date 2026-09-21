"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

/* The row starts where `.wrap` starts and runs off the right edge of the
   screen. Percentages here resolve against the row's own width, which (unlike
   100vw) leaves the page scrollbar out, so the first card lines up with the
   heading on every OS. */
const GUTTER = "max(clamp(1.25rem, 4vw, 3rem), calc((100% - 1280px) / 2 + 3rem))";

const ARROW =
  "grid h-12 w-12 place-items-center rounded-[2px] border border-white/30 text-white/80 transition cursor-pointer hover:border-white/60 hover:text-white disabled:opacity-30 disabled:cursor-default disabled:hover:border-white/30 disabled:hover:text-white/80";

/**
 * Six client stores: the storefront, the logo, one line, three figures. One
 * row that scrolls sideways at every width: swipe on a phone, trackpad or the
 * two arrows on a desktop. The next card always shows a sliver of itself, so
 * the row reads as scrollable before anyone touches it. Dark glass on the ink
 * ground, so the star field stays visible between the cards.
 */
export function Cases() {
  const row = useRef<HTMLDivElement>(null);
  const [ends, setEnds] = useState({ start: true, end: false });

  useEffect(() => {
    const el = row.current;
    if (!el) return;
    const read = () =>
      setEnds({
        start: el.scrollLeft <= 2,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
      });
    read();
    el.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      el.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  /** One card per press. */
  const step = (dir: 1 | -1) => {
    const el = row.current;
    const card = el?.querySelector("article");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 20), behavior: "smooth" });
  };

  return (
    <section id="proof" className="relative z-10 py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[20ch]">
              Stores that performed better after the upgrade
            </h2>
            <div className="hidden sm:flex shrink-0 gap-2 pb-1">
              <button
                type="button"
                aria-label="Previous stores"
                disabled={ends.start}
                onClick={() => step(-1)}
                className={ARROW}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next stores"
                disabled={ends.end}
                onClick={() => step(1)}
                className={ARROW}
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={row}
          role="region"
          aria-label="Client stores"
          tabIndex={0}
          className="mt-12 md:mt-16 flex gap-5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none"
          style={{
            paddingLeft: GUTTER,
            paddingRight: GUTTER,
            scrollPaddingLeft: GUTTER,
            scrollPaddingRight: GUTTER,
          }}
        >
          {cases.map((c) => (
            <article
              key={c.brand}
              className="snap-start shrink-0 w-[82vw] max-w-[360px] sm:w-[360px] flex flex-col overflow-hidden rounded-[4px] border border-white/12"
              style={{ background: "rgba(16,19,44,0.55)" }}
            >
              <div className="px-4 pt-4 border-b border-white/10">
                <img
                  src={assetUrl(`${base}/${c.file}.png`)}
                  alt={c.shotAlt}
                  width={500}
                  height={365}
                  loading="lazy"
                  draggable={false}
                  className="block w-full h-auto max-h-[210px] object-contain object-bottom"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="h-9 flex items-end">
                  <img
                    src={assetUrl(`${base}/${c.file}-logo.svg`)}
                    alt={c.brand}
                    draggable={false}
                    style={{ height: c.logoH }}
                    className="w-auto max-w-[170px] object-contain object-left"
                  />
                </div>
                <p className="mt-5 flex-1 text-white/80 text-[16px] leading-relaxed">{c.line}</p>
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
          ))}
        </div>
      </Reveal>
    </section>
  );
}
