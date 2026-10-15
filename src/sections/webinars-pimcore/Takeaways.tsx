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
    lead: "The real cost",
    body: "A way to estimate what scattered product data costs you in hours, and the cost in revenue you have never added up",
  },
  {
    icon: MonitorPlay,
    lead: "How the fix works",
    body: "Each problem handled in a working Pimcore system, so you know what to ask for from your own team or vendor",
  },
  {
    icon: FolderCheck,
    lead: "What changed",
    body: "Before-and-after with real numbers from a brand running multiple markets",
  },
  {
    icon: Gift,
    lead: "A free PIM prototype",
    body: "Built on your own catalog and yours to keep \u2013 request it after the session",
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
        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
            What you&apos;ll get <span className="text-[var(--sw-blue)]">after the webinar</span>
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
                <p className="mt-2.5 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed text-pretty">
                  {it.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
