"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const TODAY = [
  "Open the PDF",
  "Find the right screen",
  "Type every field",
  "Check it",
  "Start again with the next one",
];

export function Problem() {
  return (
    <section
      id="the-problem"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">2</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>The problem</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
            Someone on your team types{" "}
            <span className="text-[var(--sw-blue)]">every document in by hand</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[62ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            Orders and invoices arrive as PDFs and emails every day, and someone
            on your team types every field into the right AS/400 screen.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-4 md:gap-5 md:grid-cols-2 md:items-stretch">
          {/* Today */}
          <Reveal delay={0.14} className="h-full">
            <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-8">
              <div className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[19px]">
                Today
              </div>
              <ul className="mt-5 flex flex-col gap-3.5">
                {TODAY.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border border-[var(--sw-orange)]/30 text-[var(--sw-orange)]"
                    >
                      <X className="h-3 w-3" strokeWidth={2.4} />
                    </span>
                    <span className="text-[var(--sw-black)]/55 text-[15px] md:text-[16px] leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* With LegacyBridge */}
          <Reveal delay={0.2} className="h-full">
            <div className="h-full rounded-[4px] border border-[var(--sw-blue)]/25 bg-white p-6 md:p-8">
              <div className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[19px]">
                With LegacyBridge
              </div>
              <ul className="mt-5 flex flex-col gap-3.5">
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border border-[var(--sw-mint)]/50 bg-[var(--sw-mint)]/15 text-[#1f8a3b]"
                  >
                    <Check className="h-3 w-3" strokeWidth={2.6} />
                  </span>
                  <span className="text-[var(--sw-black)]/80 text-[15px] md:text-[16px] leading-snug">
                    The screen is already filled in, and your team checks it and
                    presses Enter
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <p className="mt-8 md:mt-10 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            Queues grow, and skilled people spend their day on data entry.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
