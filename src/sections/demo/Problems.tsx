"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "A legacy stack nobody wants to touch",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Downtime risk compounds every year.",
    },
    {
      n: "2",
      title: "Data scattered across silos",
      body:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Names as single text strings. Relationships and transfers nowhere in the schema.",
    },
    {
      n: "3",
      title: "Hard seasonal peak",
      body:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. A manual stack breaks at peak. Support queue explodes every season.",
    },
  ];

  return (
    <section id="problems" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <svg
        className="absolute top-0 inset-x-0 h-px opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
      </svg>

      <div className="wrap relative">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Three problems common to{" "}
              <span className="text-[var(--sw-mint)]">lorem ipsum commerce</span>
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[56ch] leading-relaxed">
              Consectetur adipiscing elit. Hundreds of clients. Tens of
              thousands of records. A hard seasonal peak. A stack that has been
              patched for a decade. Any mid-market business will recognise all three.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mb-16 md:mb-24">
          {problems.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7 h-full">
                <div className="label-code text-white/55 mb-5">Problem · {f.n}</div>
                <h3 className="font-head text-white text-[20px] md:text-[22px] leading-[1.15] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="max-w-[72ch] mx-auto text-center">
            <svg aria-hidden className="mx-auto mb-6 h-8 opacity-60" viewBox="0 0 48 32" fill="none">
              <path
                d="M4 24 Q 4 4, 20 4 L 20 12 Q 14 12, 12 20 L 20 20 L 20 30 L 4 30 Z M28 24 Q 28 4, 44 4 L 44 12 Q 38 12, 36 20 L 44 20 L 44 30 L 28 30 Z"
                fill="var(--sw-mint)"
              />
            </svg>
            <blockquote className="font-head text-white text-[24px] md:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.01em]">
              We had <span className="text-[var(--sw-mint)]">lorem ipsum doing what should take far less</span>. Burning cash on unnecessary processes.
            </blockquote>
            <figcaption className="mt-7 label-code text-white/60">
              Jane Lorem · Operations · Lorem Corp
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
