"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

/**
 * What a PIM is, and who runs on Pimcore.
 *
 * Two columns, centred against each other: the explanation on the left, the
 * proof on the right. The proof is the reason the Platinum Partner claim moved
 * here out of the hero, where it was a badge with nothing beside it.
 */

/**
 * The logo wall.
 *
 * `h` is the drawn height in pixels, tuned per mark rather than shared, because
 * a single height makes a wide wordmark like Statista shout and a square mark
 * like Nissan disappear. The heights run roughly as height x sqrt(aspect) held
 * constant, which keeps the inked area even, then adjusted by eye: Beauty Works
 * is a fine serif and carries less weight per pixel, Burger King is a dense
 * roundel and carries more.
 *
 * The files are white artwork on transparency, converted from the brand
 * originals rather than inverted in CSS. A CSS invert would have flattened
 * Burger King's bun highlights and Raiffeisen's cross, both of which are white
 * inside the mark, into a solid blob.
 */
const LOGOS: { src: string; alt: string; h: number }[] = [
  { src: "burger-king.png", alt: "Burger King", h: 44 },
  { src: "audi.png", alt: "Audi", h: 27 },
  { src: "gabor.png", alt: "Gabor", h: 21 },
  { src: "vespa.png", alt: "Vespa", h: 27 },
  { src: "fritz-kola.png", alt: "fritz-kola", h: 24 },
  { src: "statista.png", alt: "Statista", h: 20 },
  { src: "suzuki.png", alt: "Suzuki", h: 36 },
  { src: "nissan.png", alt: "Nissan", h: 40 },
  { src: "beauty-works.png", alt: "Beauty Works", h: 38 },
  { src: "raiffeisen-salzburg.png", alt: "Raiffeisen Salzburg", h: 28 },
];

export function Basics() {
  return (
    <section
      id="the-platform"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        {/* Centred against each other, so the wall reads as evidence for the
            paragraph beside it rather than as a separate band. */}
        <div className="grid gap-12 md:gap-14 lg:gap-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* LEFT · what a PIM is */}
          <div>
            <Reveal>
              <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
                <span className="text-white/55">2</span>
                <span className="h-px w-6 bg-white/15" />
                <span>The platform</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[18ch]">
                One place where your{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  product details live
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 md:mt-7 text-white/75 text-[16px] md:text-[18px] leading-[1.65] max-w-[60ch]">
                A product information management system, or PIM, holds every
                detail about every product in one record. Descriptions, images,
                specifications, prices, translations. Your website, your
                marketplaces, your partners and your printed catalogs all pull
                from that one record, so a change made once reaches all of them.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-white/75 text-[16px] md:text-[18px] leading-[1.65] max-w-[60ch]">
                Pimcore is the platform we build these on, and the one every
                example in this session runs on. scandiweb is a certified
                Pimcore Platinum Solution Partner.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · who runs on it */}
          <div>
            <Reveal delay={0.1}>
              <div className="label-code mb-7 md:mb-9 text-white/55">
                Brands using Pimcore
              </div>
            </Reveal>

            {/*
              Flex rather than a fixed grid. Three across from md up and two on
              a phone, and a trailing part-row centres itself instead of leaving
              a lone mark hanging under the first column. Ten marks were
              supplied for the twelve slots a strict three-by-four would need,
              so the last row carries one, centred.
            */}
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-9 md:gap-y-11">
              {LOGOS.map((l, i) => (
                <li
                  key={l.alt}
                  /* The basis subtracts its share of the 1.5rem gap, or three
                     at 33.3% plus two gaps overflow the row and it silently
                     falls back to two across. The list item stays the flex item
                     so the markup is still a real list. */
                  className="basis-[calc(50%-0.75rem)] md:basis-[calc(33.333%-1rem)] flex items-center justify-center px-2"
                >
                  <Reveal delay={i * 0.07}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={assetUrl(`/webinars/pimcore/logos/${l.src}`)}
                      alt={l.alt}
                      className="w-auto max-w-full opacity-85"
                      style={{ height: `${l.h}px` }}
                    />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
