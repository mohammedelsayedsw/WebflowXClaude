"use client";

import { TrendingUp, Radar, Brain, CalendarClock } from "lucide-react";
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
    title: "Live visibility across your operation",
    body: "One view of what is running and what is stuck, pulled from the systems that already hold it.",
  },
  {
    icon: Brain,
    title: "Company Knowledge Brain",
    body: "Your documents, decisions, and internal rules in one place your team can just ask.",
  },
];

export function HowItSolves() {
  return (
    <section
      id="how-it-solves"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
              <span className="text-white/55">5</span>
              <span className="h-px w-6 bg-white/15" />
              <span>More use cases</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em]">
              Three more{" "}
              <span style={{ color: "var(--sw-mint)" }}>OperaLayer use cases</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[70ch] text-white/75 text-[16px] md:text-[18px] leading-relaxed">
              Reconciliation is where many teams start. OperaLayer does more, and
              each new use case builds on the same connected picture.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {useCases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li className="relative flex h-full flex-col rounded-[4px] border border-white/12 bg-white/[0.035] p-6">
                <span
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/12 bg-white/[0.05] text-[var(--sw-mint)]"
                  aria-hidden
                >
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="font-head font-bold text-white text-[17px] md:text-[18px] leading-tight">
                  {c.title}
                </div>
                <p className="mt-2.5 text-white/65 text-[14px] md:text-[15px] leading-relaxed">
                  {c.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Series note, deliberately not styled as a fourth use case */}
        <Reveal delay={0.24}>
          <div className="mt-3 flex flex-col gap-4 rounded-[4px] border border-[var(--sw-mint)]/35 bg-[var(--sw-mint)]/[0.06] p-6 sm:flex-row sm:items-center md:mt-4">
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-[var(--sw-mint)]/30 bg-[var(--sw-mint)]/[0.08] text-[var(--sw-mint)]"
              aria-hidden
            >
              <CalendarClock className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <div className="font-head font-bold text-white text-[17px] md:text-[18px] leading-tight">
                More in the coming webinars
              </div>
              <p className="mt-1.5 text-white/70 text-[14px] md:text-[15px] leading-relaxed">
                Each of these gets its own live demo in upcoming webinars, one
                new use case at a time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
