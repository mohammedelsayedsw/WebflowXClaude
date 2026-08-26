"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { Lockup } from "./Lockup";
import { assetUrl } from "@/lib/assets";

/** Outcomes rather than figures: the client asked for no numbers on the page. */
const stats: { figure: string; label: string }[] = [
  { figure: "More email revenue", label: "year on year" },
  { figure: "A better return", label: "on paid media" },
  { figure: "A smaller marketing budget", label: "for more revenue" },
];

export function Results() {
  return (
    <section
      id="the-results"
      className="relative py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      {/* Same gradient recipe as the hero, with the highlights repositioned so
          the two do not read as the identical image. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1000px 700px at 16% 28%, #303c96 0%, transparent 58%)," +
            "radial-gradient(720px 600px at 92% 12%, #060917 0%, transparent 55%)," +
            "radial-gradient(1200px 820px at 74% 86%, #223072 0%, transparent 50%)," +
            "radial-gradient(1500px 1000px at 56% 46%, #171d55 0%, #131843 40%, #0e1130 72%, #090c22 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-30"
      />

      {/* Product shot sits above the gradient but below the content, so the
          stat cards, which are only 3% white, let it show through where the
          two overlap. Desktop only, since the narrower layouts stack the cards
          over it and it reads as clutter behind the text. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{ transform: "translateY(8px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetUrl("/webinars/cdp/results-products.webp")}
          alt=""
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[46rem]">
          <Reveal>
            <div className="label-code mb-5 text-white/60">The results</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em]">
              What changed after switching to Bloomreach
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.figure} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-6 md:p-7">
                <div
                  className="min-h-[2.5em] font-head text-[22px] md:text-[26px] leading-tight tracking-[-0.02em] text-balance"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {s.figure}
                </div>
                <div className="mt-3 text-white/75 text-[14px] md:text-[15px] leading-snug">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 md:mt-12 text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[70ch]">
            Every market on one platform, with no new hires.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-7 md:mt-8">
            <Lockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
