"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const METRICS = [
  { v: "~90%", k: "faster reporting" },
  { v: "3.06M to 336K", k: "records matched to real people" },
  { v: "40%+", k: "of online sales from email and SMS" },
  { v: "In-house", k: "your team owns the rules" },
];

const BUILT = [
  "One trusted customer identity, replacing vendor-controlled rules for which entries are the same person",
  "A clean, checked customer database with failure handling, so bad customer files get caught",
  "Automated reporting, replacing manual exports and spreadsheets",
  "What people do on your site, carts, and purchases connected to known customers",
  "Joined-up audiences feeding email, SMS, Google, and Meta",
  "Store stylists given real customer history and preferences",
];

const SHIFTS = [
  {
    before: "A vendor gated who counts as the same person",
    after: "the team owns and can read those rules",
  },
  {
    before: "Manual exports and spreadsheet reporting",
    after: "automated reporting on clean customer files",
  },
  {
    before: "What people do on your site, cut off from known customers",
    after: "what people do on your site, mapped to real customers",
  },
  {
    before: "Another forced contract renewal",
    after: "delivered before the renewal deadline, on their terms",
  },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap relative">
        {/* Headline + intro · full width */}
        <Reveal>
          <div className="max-w-[64rem]">
            <span className="label-code mb-6 block text-[var(--sw-mint)]">
              Proven with Lafayette 148
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              A luxury fashion brand that{" "}
              <span className="text-[var(--sw-mint)]">
                took back control of its customer data
              </span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Lafayette 148 New York moved off vendor-locked rules for which
              entries are the same person and spreadsheet reporting onto a clean,
              checked customer database their own team runs, before their old
              contract forced another year&apos;s renewal.
            </p>
          </div>
        </Reveal>

        {/* Stats band · full width, one row of four */}
        <Reveal delay={0.05}>
          <div className="mt-12 border-y border-white/10 py-8 md:mt-14 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
              {METRICS.map((m) => (
                <div key={m.k}>
                  <div className="font-head text-[22px] leading-none tracking-[-0.01em] text-[var(--sw-mint)] md:text-[30px]">
                    {m.v}
                  </div>
                  <div className="mt-2 text-[12px] leading-tight text-white/55 md:text-[13px]">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* mandatory honesty caveats, straight from the case doc */}
          <p className="mt-4 max-w-[90ch] text-[12px] leading-relaxed text-white/45 md:text-[13px]">
            Lafayette 148 operating results. The 40%+ is the share of online
            sales from email and SMS, not uplift caused by moving to new
            software. The 3.06M to 336K is a point-in-time reading on the main
            rule for which entries are the same person. The 90% refers to
            reporting cycle time.
          </p>
        </Reveal>

        {/* What we built + before/after · two columns */}
        <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <Reveal>
            <div>
              <span className="label-code mb-5 block text-white/50">
                What we built
              </span>
              <ul className="flex flex-col gap-3">
                {BUILT.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[15px] leading-snug text-white/80 md:text-[16px]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sw-mint)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="label-code mb-5 block text-white/50">
                Before and after
              </span>
              <div className="flex flex-col gap-2.5">
                {SHIFTS.map((s) => (
                  <div
                    key={s.before}
                    className="rounded-[4px] border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="text-[13px] leading-snug text-white/45 line-through decoration-white/25">
                      {s.before}
                    </div>
                    <div className="mt-1.5 flex gap-2 text-[14px] leading-snug text-white md:text-[15px]">
                      <span aria-hidden className="text-[var(--sw-mint)]">
                        &rarr;
                      </span>
                      {s.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Built on · the only place the stack is named */}
        <Reveal delay={0.1}>
          <p className="mt-12 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/50 md:mt-14 md:text-[14px]">
            Built on Salesforce Data Cloud and AWS, with Tableau reporting. The
            stack proves delivery. What you buy is control.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
