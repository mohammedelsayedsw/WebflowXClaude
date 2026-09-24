"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * What the hour covers, as a checklist.
 *
 * It was a timetable, with a start and end time against every item and a line
 * of description under each. That is a schedule, and nobody reads a schedule
 * to decide whether to attend. The same block on the Pimcore page is a list of
 * things you will come away knowing, so this follows it: one line each, no
 * timings, no descriptions.
 */
const POINTS: string[] = [
  "Why many teams still type orders and invoices into the AS/400 by hand",
  "A live demo of a PDF going from the inbox into the AS/400",
  "What happens when part of the PDF is hard to read, or the AS/400 shows an error",
  "How a person on your team checks the details before they are saved",
  "How to test the software on your own documents for two weeks",
  "Time for your questions",
];

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <Reveal>
              <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
                <span className="text-white/55">1</span>
                <span className="h-px w-6 bg-white/20" />
                <span>The agenda</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                What we&apos;ll cover{" "}
                <span style={{ color: "var(--sw-mint)" }}>during the webinar</span>
              </h2>
            </Reveal>
          </div>

          <ul className="flex flex-col gap-4 md:gap-5">
            {POINTS.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="flex gap-4 border-b border-white/10 pb-4 md:pb-5">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--sw-mint)" }}
                    strokeWidth={2}
                  />
                  <span className="text-white/75 text-[16px] md:text-[18px] leading-snug text-pretty">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
