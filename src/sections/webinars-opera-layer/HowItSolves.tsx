"use client";

import { TrendingUp, Radar, Brain } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const useCases: {
  icon: typeof TrendingUp;
  title: string;
  body: string;
}[] = [
  {
    icon: TrendingUp,
    title: "Procurement and demand prediction",
    body: "Work out what to reorder and when, from your own order history, stock levels, and supplier lead times.",
  },
  {
    icon: Radar,
    title: "Live visibility across processes and tasks",
    body: "One view of what is running, what is late, and what is blocked, pulled from the systems that already hold the answer.",
  },
  {
    icon: Brain,
    title: "Company Knowledge Brain",
    body: "Your documents, decisions, and internal rules in one place your team can ask questions of.",
  },
];

export function HowItSolves() {
  return (
    <section
      id="how-it-solves"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">4</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>Other solutions</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6">
              Three more{" "}
              <span className="text-[var(--sw-blue)]">OperaLayer use cases</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[70ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              Reconciliation is where many teams start. OperaLayer does more, and
              each new use case builds on the same connected picture.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {useCases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li className="relative flex h-full flex-col rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6">
                <span
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)]"
                  aria-hidden
                >
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[18px] leading-tight">
                  {c.title}
                </div>
                <p className="mt-2.5 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {c.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
