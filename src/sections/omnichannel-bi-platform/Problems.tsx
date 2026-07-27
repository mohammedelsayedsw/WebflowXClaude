"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

const PROBLEMS = [
  {
    n: "1",
    title: "Your data is scattered across too many systems",
    body: "Online, shops, ads, email, and — search each live in their own place.",
  },
  {
    n: "2",
    title: "No single view of the whole business",
    body: "Every channel reports on its own, so the numbers get pulled together by hand before every meeting.",
  },
  {
    n: "3",
    title: "Your shop-floor sales sit apart from everything else",
    body: "In-store data is cut off from your online and marketing data, so you never see the full customer.",
  },
  {
    n: "4",
    title: "You do not really know your customers",
    body: "No view of who your regulars are or what makes them buy again, just transactions.",
  },
  {
    n: "5",
    title: "Tracking breaks without anyone noticing",
    body: "A checkout step quietly stops recording, and wrong numbers reach your reports for weeks unnoticed.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <svg
        className="absolute inset-x-0 top-0 h-px w-full opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath
          d="M0 0.5 H1000"
          stroke="rgba(110,247,110,0.45)"
          strokeWidth={1}
          duration={1.8}
        />
      </svg>

      <div className="wrap relative">
        <div className="mb-14 max-w-[56rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-white/60">
              The problem
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              You cannot run an omnichannel business on{" "}
              <span className="text-[var(--sw-mint)]">
                data that never comes together
              </span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              The more places you sell, the more systems you run, the harder it
              gets to see the whole picture.{" "}
              <br className="hidden md:block" />
              These five gaps are why.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-5">
                <div className="label-code mb-4 text-white/55">Gap · {p.n}</div>
                <h3 className="font-head mb-3 text-[18px] leading-[1.2] text-white lg:text-[17px] xl:text-[18px]">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70">
                  {p.body}
                </p>
                <span className="absolute left-5 top-0 h-px w-8 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
