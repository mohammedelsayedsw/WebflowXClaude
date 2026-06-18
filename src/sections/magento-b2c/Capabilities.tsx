"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Cap = { title: string; body: string };

const caps: Cap[] = [
  {
    title: "Conversion-focused storefronts",
    body: "PDP, search, and checkout tuned around how your customers actually buy, then tested until sales move.",
  },
  {
    title: "Speed with Hyvä",
    body: "Fast Magento frontends and all-green Core Web Vitals. Speed is the lever behind most of the conversion lifts we ship.",
  },
  {
    title: "Personalization & merchandising",
    body: "Segments, recommendations, and search that surface the right product for each shopper instead of the full catalog.",
  },
  {
    title: "Headless when you need it",
    body: "ScandiPWA or Hyvä frontends decoupled from the Magento backend, without losing SEO, checkout, or the catalog.",
  },
  {
    title: "Many markets, one backend",
    body: "Multi-store, multi-currency, multi-language, and omnichannel on a single platform, so launching a new market does not mean rebuilding the store.",
  },
  {
    title: "SEO, CRO & analytics",
    body: "Organic recovery, structured experiments, and the data to back every change before it ships and after it lands.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            what we build
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Everything a storefront needs{" "}
            <span className="text-[var(--sw-blue)]">to convert</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            For retail and DTC brands on Magento and Adobe Commerce. Design,
            build, performance, and the growth work after launch, from one team
            that owns the outcome.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caps.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <h3 className="font-head text-[var(--sw-black)] text-[19px] md:text-[22px] leading-[1.2]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
