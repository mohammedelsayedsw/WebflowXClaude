"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * Presenter card plus the partner row.
 *
 * The photo is a placeholder block per the repo rule for unknown images, and
 * the four partner statuses are set as text because no logo files for Adobe
 * Solution Partner Gold, Hyvä Platinum, Anthropic or OpenAI exist in
 * public/shared/logos.
 * TODO: swap in the real headshot and the four partner logo files.
 */
const PARTNERS: string[] = [
  "Adobe Solution Partner, Gold",
  "Hyvä Platinum Partner",
  "Anthropic partner",
  "OpenAI partner",
];

export function Host() {
  return (
    <section
      id="your-host"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-25"
      />

      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[46rem]">
          <Reveal>
            <div className="label-code mb-5 text-white/55">Your host</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Live with the people who built it
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="rounded-[4px] border border-white/12 bg-white/[0.03] p-6 md:p-7">
              {/* TODO: real image */}
              <div className="bg-white/10 rounded-[4px] aspect-[4/3] w-full" />
              <div className="mt-5">
                <div className="font-head text-white text-[19px] md:text-[21px] leading-tight tracking-[-0.01em]">
                  Glebs Vrevsky
                </div>
                <div className="mt-2 text-white/65 text-[14px] md:text-[15px] leading-snug">
                  Co-Founder of Agent for Magento
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]">
                Glebs Vrevsky, Co-Founder of Agent for Magento, runs the session
                and answers your questions live. Ari is built by scandiweb, an
                Adobe Solution Partner at Gold level, a Hyvä Platinum Partner,
                and an official partner of both Anthropic and OpenAI.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-3">
                {PARTNERS.map((p) => (
                  <span
                    key={p}
                    className="rounded-[4px] border border-white/15 bg-white/[0.03] px-4 py-2.5 font-head text-white/75 text-[13px] md:text-[14px] leading-none"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
