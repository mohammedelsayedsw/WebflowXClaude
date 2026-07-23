"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Find it",
    body: "We list every source of customer data, every rule for which entries are the same person, every renewal deadline, and every place your audiences need to go.",
  },
  {
    n: "2",
    title: "Clean it",
    body: "We build a clean, checked customer database, so wrong entries are caught and everything can be traced back.",
  },
  {
    n: "3",
    title: "Match it",
    body: "We set clear, readable rules for which entries are the same person, and which to keep out.",
  },
  {
    n: "4",
    title: "Use it",
    body: "We send trusted customer files to email, SMS, Google, Meta, reporting, and store teams.",
  },
  {
    n: "5",
    title: "Own it",
    body: "We train your team to watch quality, change the rules, and add new uses themselves.",
  },
];

export function Loop() {
  return (
    <section id="loop" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mb-12 max-w-[54rem] md:mb-16">
          <Reveal>
            <span className="label-code mb-4 block text-[var(--sw-black)]/50">
              The solution
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              From scattered customer files to{" "}
              <span className="text-[var(--sw-blue)]">
                action your team owns
              </span>
            </h2>
          </Reveal>
        </div>

        {/* five steps as a process row */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5">
                <span className="font-head text-[26px] leading-none text-[var(--sw-blue)] md:text-[30px]">
                  {s.n}
                </span>
                <h3 className="font-head mt-4 text-[18px] leading-[1.2] text-[var(--sw-black)] md:text-[19px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/60 md:text-[14px]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* pull line under the steps */}
        <Reveal delay={0.1}>
          <p className="font-head mt-8 max-w-[80ch] border-l-2 border-[var(--sw-blue)] pl-5 text-[17px] leading-[1.4] text-[var(--sw-black)]/75 md:mt-10 md:text-[19px]">
            The work is done when your customer data produces repeatable action,
            who to keep, win back, serve in-store, or leave out, and your team
            can change those rules without calling a vendor.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
