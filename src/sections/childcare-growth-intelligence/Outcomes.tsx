"use client";

import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = [
  {
    title: "Board numbers you can defend",
    body: "Present investor and board figures from one reliable source, with a clear record of where each number came from.",
  },
  {
    title: "Capacity risk you see coming",
    body: "Spot which rooms will fill up or fall short early enough to act on admissions, marketing, and staffing.",
  },
  {
    title: "Growth you can back with evidence",
    body: "Screen new sites and acquisitions in a consistent way before senior people spend time on any single one.",
  },
  {
    title: "A clearer picture of your families",
    body: "See where your most valuable families live, and connect hiring plans to where you are growing.",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <span className="label-code mb-4 block text-[var(--sw-black)]/50">
            What changes
          </span>
          <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
            One view for the decisions that{" "}
            <span className="text-[var(--sw-blue)]">actually matter</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:mt-12 md:gap-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5">
                <h3 className="font-head text-[16px] font-bold leading-[1.25] text-[var(--sw-black)] md:text-[18px]">
                  {o.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/60 md:text-[14px]">
                  {o.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
