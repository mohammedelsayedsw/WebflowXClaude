"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function ReferenceCase() {
  return (
    <section
      id="reference"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 15% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 85% 85%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 75%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-end">
            <h2 className="font-head text-white text-[36px] md:text-[52px] lg:text-[64px] leading-[1.04] max-w-[14ch]">
              <span className="text-[var(--sw-mint)]">Läderach.</span>{" "}
              <span className="text-white">Hyvä, live.</span>
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[60ch]">
              A 60-year-old Swiss premium chocolatier with stores across Europe,
              the US, and the Middle East. Their previous Magento + PWA frontend
              was costing them on speed, on conversion, and on every release
              cycle. We migrated them to Hyvä in production – content
              preserved, integrations preserved, every metric up.
            </p>
          </div>
        </Reveal>

        {/* 3 problems they brought us */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "Problem · 1",
              title: "Slow on mobile, losing conversions",
              body: "The PWA frontend was carrying too much JS to checkout fast on mid-range devices. Every PageSpeed audit said the same thing. Conversion was the casualty.",
            },
            {
              n: "Problem · 2",
              title: "Every Magento release was a project",
              body: "Each platform upgrade triggered a frontend re-test, a GraphQL re-validation, and a string of follow-up patches. Engineering capacity was going to compatibility, not features.",
            },
            {
              n: "Problem · 3",
              title: "A multi-region store with no room to break",
              body: "DACH, US, Middle East – multiple currencies, languages, tax rules, and seasonal peaks. Migration could not afford to drop SEO, lose checkout, or scramble the catalog.",
            },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-[4px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col">
                <div className="label-code text-white/55 mb-4">{f.n}</div>
                <h3 className="font-head text-white text-[19px] md:text-[22px] leading-[1.2] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 4 strong stats */}
        <Reveal delay={0.2}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pt-12 border-t border-white/10">
            {[
              ["+39%", "revenue post-launch"],
              ["+47.8%", "conversion rate"],
              ["+22%", "avg session duration"],
              ["12 wk", "kickoff → live"],
            ].map(([v, l]) => (
              <div key={v} className="flex flex-col gap-3">
                <div
                  className="font-head text-[36px] md:text-[44px] lg:text-[52px] leading-none tabular-nums"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {v}
                </div>
                <div className="label-code text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* closing note */}
        <Reveal delay={0.3}>
          <p className="mt-14 md:mt-16 max-w-[70ch] text-white/75 text-[14px] md:text-[15px] leading-relaxed">
            Same Magento backend. Same catalog, same content, same SEO equity.
            Hyvä frontend instead of PWA. Result: a faster store on every
            device, a lighter codebase for the engineering team, and a
            migration our delivery team can now run as a templated
            engagement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
