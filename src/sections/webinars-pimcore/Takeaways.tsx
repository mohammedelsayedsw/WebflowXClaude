"use client";

import { Calculator, MonitorPlay, FolderCheck, Gift } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * Placed high on purpose. UK registrations convert to attendance only when the
 * payoff is unmistakable, so this section states it plainly before anything else.
 */
const ITEMS: {
  icon: typeof Calculator;
  lead: string;
  body: string;
  accent?: boolean;
}[] = [
  {
    icon: Calculator,
    lead: "The costs, laid out",
    body: "What each pain point takes from a business like yours, in hours and in revenue",
  },
  {
    icon: MonitorPlay,
    lead: "Live demo scenarios",
    body: "The same problems, solved in a working system",
  },
  {
    icon: FolderCheck,
    lead: "Real project examples",
    body: "What changed for companies with catalogs like yours",
  },
  {
    icon: Gift,
    lead: "A free PIM prototype",
    body: "Request one built on your own catalog, yours to keep after the session",
    accent: true,
  },
];

export function Takeaways() {
  return (
    <section
      id="what-you-get"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">1</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>Why attend</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
            What you <span className="text-[var(--sw-blue)]">walk away with</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.lead} delay={i * 0.07} className="h-full">
              <li
                className={`flex h-full flex-col rounded-[4px] border p-6 md:p-7 ${
                  it.accent
                    ? "border-[var(--sw-blue)]/60 bg-[var(--sw-blue)]/[0.09]"
                    : "border-[var(--sw-black)]/10 bg-white"
                }`}
              >
                <span
                  aria-hidden
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[4px] border text-[var(--sw-blue)] ${
                    it.accent
                      ? "border-[var(--sw-blue)]/35 bg-white"
                      : "border-[var(--sw-black)]/10 bg-[var(--sw-beige)]"
                  }`}
                >
                  <it.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[19px] leading-tight">
                  {it.lead}
                </div>
                <p className="mt-2.5 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {it.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <p className="mt-8 md:mt-10 font-head text-[var(--sw-black)]/80 text-[16px] md:text-[19px] leading-relaxed">
            An hour on what the problem costs and what fixes it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
