"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const CRITERIA = [
  "Multi-site nursery and early-years groups with central leadership",
  "Investor-backed or acquisitive childcare groups",
  "Groups bringing together acquired brands, sites, or older systems",
  "Operators preparing for due diligence, refinancing, or more formal board reporting",
  "Operations teams hit by recurring room-capacity, admissions, or staffing surprises",
];

const TRIGGERS = [
  {
    trigger: "An investor review or a new CFO",
    angle: "numbers you can trace and defend",
  },
  {
    trigger: "An acquisition or fast site growth",
    angle: "one repeatable way to screen markets and targets",
  },
  {
    trigger: "Changing nursery or CRM systems",
    angle: "one reliable view across old and new",
  },
  {
    trigger: "Occupancy pressure",
    angle: "forward room-level signals for admissions and staffing",
  },
];

export function WhoItIsFor() {
  return (
    <section id="who-its-for" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mb-12 max-w-[54rem] md:mb-16">
          <Reveal>
            <span className="label-code mb-4 block text-[var(--sw-black)]/50">
              Who it is for
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Built for nursery groups where occupancy and growth have become{" "}
              <span className="text-[var(--sw-blue)]">data problems</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* fit criteria */}
          <Reveal>
            <ul className="flex flex-col gap-3">
              {CRITERIA.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 text-[15px] leading-snug text-[var(--sw-black)]/75 md:text-[16px]"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sw-blue)]" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* strong triggers */}
          <Reveal delay={0.1}>
            <div>
              <span className="label-code mb-4 block text-[var(--sw-black)]/50">
                Common triggers
              </span>
              <div className="flex flex-col gap-2.5">
                {TRIGGERS.map((t) => (
                  <div
                    key={t.trigger}
                    className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-4"
                  >
                    <div className="font-head text-[15px] font-bold leading-snug text-[var(--sw-black)]">
                      {t.trigger}
                    </div>
                    <div className="mt-1 text-[13px] leading-snug text-[var(--sw-black)]/60">
                      <span
                        aria-hidden
                        className="mr-1.5 font-semibold text-[var(--sw-blue)]"
                      >
                        &rarr;
                      </span>
                      {t.angle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
