"use client";

import { Reveal } from "@/components/primitives/Reveal";

const cards: { title: string; body: string }[] = [
  {
    title: "One customer view",
    body: "It unifies data from eCommerce, ERP, ads, and email into a single profile",
  },
  {
    title: "AI that learns",
    body: "Loomi, Bloomreach's AI, improves recommendations from customer behavior over time",
  },
  {
    title: "Every channel, one platform",
    body: "Email, on-site content, search, and paid audiences all run off the same data",
  },
  {
    title: "Built for many markets",
    body: "Separate store views, languages, and catalogs stay unified under one setup",
  },
];

export function Platform() {
  return (
    <section
      id="the-platform"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code mb-4 text-white/60">The solution</div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em] max-w-[75ch]">
              <span style={{ color: "var(--sw-mint)" }}>Bloomreach</span>, one
              platform for every channel
            </h2>
          </Reveal>

          {/* Wider than the heading, so the sentence holds two lines on
              desktop instead of dropping two words onto a third. */}
          <Reveal delay={0.1}>
            <p className="mt-5 md:mt-6 text-white/75 text-[16px] md:text-[18px] leading-[1.6] max-w-[1060px]">
              Bloomreach is an AI platform for personalization. It brings your
              customer and product data into one place,{" "}
              {/* the second half starts its own line on desktop */}
              <br className="hidden lg:block" />
              then personalizes every channel, email, ads, search, and your
              site.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-7 md:p-8">
                <h3 className="font-head text-white text-[17px] md:text-[19px] leading-[1.2]">
                  {c.title}
                </h3>
                <p className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
