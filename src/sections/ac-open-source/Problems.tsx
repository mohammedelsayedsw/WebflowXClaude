"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Pain = { title: string; body: string };

const pains: Pain[] = [
  {
    title: "The license goes up every year",
    body: "Adobe raises the price at every renewal.",
  },
  {
    title: "You pay for features you don't use",
    body: "Enterprise tools built for far bigger stores.",
  },
  {
    title: "You rent what you could own for free",
    body: "Open Source is the same platform, with no license.",
  },
  {
    title: "Every renewal is budget you can't reinvest",
    body: "That fee could fund the campaigns and launches your competitors already run on open platforms.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">the problem</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            You pay an enterprise bill for a{" "}
            <span style={{ color: "var(--sw-mint)" }}>mid-market store</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 sm:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28}>
          <div className="mt-14 md:mt-20 rounded-[4px] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="label-code text-[var(--sw-mint)] mb-8">
              what you get
            </div>
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
              <div className="shrink-0">
                <div
                  className="font-head text-[72px] md:text-[96px] font-bold leading-none"
                  style={{ color: "var(--sw-mint)" }}
                >
                  $0
                </div>
                <div className="label-code text-white/55 mt-3">
                  license on Open Source
                </div>
              </div>
              <p className="font-head text-white text-[24px] md:text-[32px] leading-snug">
                Every dollar freed from the license is a dollar for growth. The
                move pays for itself within the first year, and funds what comes
                next in every year after.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
