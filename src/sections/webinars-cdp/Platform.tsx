"use client";

import { Reveal } from "@/components/primitives/Reveal";

const cards: { title: string; body: string }[] = [
  {
    title: "One customer view",
    body: "It unifies data from eCommerce, ERP, ads, and email into a single profile",
  },
  {
    title: "AI that learns",
    body: "Loomi, Bloomreach's AI, learns from customer behavior and improves recommendations over time",
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
        <div className="mb-12 md:mb-16 max-w-[75ch]">
          <Reveal>
            <div className="label-code mb-4 text-white/60">The platform</div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em]">
              Why Sportland switched to{" "}
              <span style={{ color: "var(--sw-mint)" }}>Bloomreach</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 md:mt-6 text-white/75 text-[16px] md:text-[18px] leading-[1.6]">
              Sportland had outgrown a standalone email tool, so they moved to
              Bloomreach, a customer data platform and personalization engine in
              one. A customer data platform, or CDP, pulls customer data from
              every source, eCommerce, ERP, email, ads, and support, into one
              profile, so every channel works from the same view of the
              customer.
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

        <Reveal delay={0.34}>
          <p className="mt-10 md:mt-12 text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            This is the platform behind the results you&apos;re about to see.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
