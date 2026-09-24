"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * The shortest section on the page, and deliberately so. It answers the one
 * objection an IT manager raises first, then gets out of the way.
 */
/* Written as what stays true rather than as a list of absences. The facts are
   the same ones the brief states; a run of lines each opening with "No" is the
   negative listing the writing rules rule out. */
const UNCHANGED = [
  "Your application, programs and data stay exactly as they are",
  "It works through the screens your team already uses, so there is nothing new to connect",
  "Packaged and custom RPG or COBOL applications are both supported",
];

export function YourSystem() {
  return (
    <section
      id="your-system"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
                <span className="text-[var(--sw-black)]/55">6</span>
                <span className="h-px w-6 bg-[var(--sw-black)]/20" />
                <span>Your system</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[16ch]">
                Your AS/400{" "}
                <span className="text-[var(--sw-blue)]">stays as it is</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[58ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
                LegacyBridge works through the same screens your team uses
                today, and your programs and data do not change.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <ul className="flex flex-col gap-3 md:gap-4">
              {UNCHANGED.map((item) => (
                <li
                  key={item}
                  className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white px-5 py-4 md:px-6 md:py-5 text-[var(--sw-black)]/80 text-[15px] md:text-[16px] leading-snug"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
