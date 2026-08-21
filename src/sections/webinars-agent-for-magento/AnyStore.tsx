"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * Six compact cards covering the range of stores Ari runs on. The first three
 * carry a figure, so they lead with it; the last three are plain range
 * statements and are set as a quieter row underneath.
 */

const STATS: { figure: string; title: string; body: string }[] = [
  {
    figure: "216,540",
    title: "Ten SKUs or two hundred thousand",
    body: "It reads the whole catalog first, 216,540 products in 41 seconds",
  },
  {
    figure: "40",
    title: "Forty store views and six currencies",
    body: "A change lands only on the views you name",
  },
  {
    figure: "60",
    title: "Sixty extensions and code nobody wrote down",
    body: "It reads what is actually installed and running",
  },
];

const RANGES: string[] = [
  "Magento 2.3 to 2.4.9, either edition",
  "Luma, Hyvä, or a theme of your own",
  "B2B, retail, or both at once",
];

export function AnyStore() {
  return (
    <section
      id="works-on-any-store"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-25"
      />

      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] mb-12 md:mb-16 max-w-[24ch]">
            It works on the store you already have
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-7 md:p-8">
                <div
                  className="font-head text-[32px] md:text-[40px] leading-none tracking-[-0.02em]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {s.figure}
                </div>
                <h3 className="mt-5 font-head text-white text-[16px] md:text-[18px] leading-tight tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/70 text-[14px] md:text-[15px] leading-snug">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {RANGES.map((r, i) => (
            <Reveal key={r} delay={0.21 + i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/10 bg-white/[0.02] px-7 py-6">
                <p className="text-white/75 text-[15px] md:text-[16px] leading-snug">
                  {r}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
