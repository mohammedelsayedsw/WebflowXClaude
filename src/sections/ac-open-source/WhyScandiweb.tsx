"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const base = "/magento/adobe-commerce-to-magento-open-source";

const badges = [
  { src: `${base}/badges/b1.png`, label: "Adobe Commerce #1 most-certified agency" },
  { src: `${base}/badges/b2.png`, label: "Adobe Solution Partner Gold" },
  { src: `${base}/badges/b3.png`, label: "Hyvä #1 most-certified agency" },
  { src: `${base}/badges/b4.png`, label: "Magento Association Gold member" },
];

export function WhyScandiweb() {
  return (
    <section className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">why scandiweb</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Work with the{" "}
            <span style={{ color: "var(--sw-mint)" }}>#1 Magento agency</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            scandiweb is an Adobe Commerce Gold Partner and a Hyvä Platinum
            Partner, and the #1 most-certified team on both. The same people who
            run enterprise Adobe Commerce builds run the move to Open Source.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {badges.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.06}>
              <div className="h-full rounded-[4px] border border-white/10 bg-white/[0.03] p-6 flex flex-col items-center text-center">
                <img
                  src={assetUrl(b.src)}
                  alt={b.label}
                  className="h-16 md:h-20 w-auto object-contain"
                />
                <div className="label-code text-white/60 mt-5">{b.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:gap-6 md:grid-cols-2">
          {[
            {
              src: `${base}/why/awards.png`,
              caption: "Three consecutive design awards at Meet Magento",
            },
            {
              src: `${base}/why/conference.png`,
              caption: "Organizers of Meet Magento New York, Canada, and Baltics",
            },
          ].map((img, i) => (
            <Reveal key={img.caption} delay={i * 0.08}>
              <figure className="h-full overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.03]">
                <img
                  src={assetUrl(img.src)}
                  alt={img.caption}
                  className="w-full h-[220px] md:h-[260px] object-cover"
                />
                <figcaption className="label-code text-white/60 px-6 py-5">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
