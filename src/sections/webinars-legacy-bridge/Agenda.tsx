"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * The run of the hour. Time on the left, title in bold, one line under it.
 *
 * Copy is the brief's, unchanged. The en dashes in the times are the only ones
 * on the page, which is what they are for.
 */
const ITEMS: { time: string; title: string; body: string }[] = [
  {
    time: "0:00–0:04",
    title: "Welcome and introduction",
    body: "What we'll cover today, plus a quick poll on how much manual entry your team handles",
  },
  {
    time: "0:04–0:13",
    title: "The AS/400 isn't the problem",
    body: "Why companies keep IBM i running, where the manual work around it comes from, and why general-purpose automation tools struggle with green-screen applications",
  },
  {
    time: "0:13–0:30",
    title: "Live demo: processing a dental claim",
    body: "A dental claim followed from arrival to a completed entry in the claims screen. LegacyBridge reads the form, checks the data, fills the screen and waits for human approval before anything is submitted. You'll also see how it handles an unclear field and a value the system rejects",
  },
  {
    time: "0:30–0:35",
    title: "Same flow, any document",
    body: "How the same steps apply to supplier invoices, customer orders, work orders and any other document your team enters by hand",
  },
  {
    time: "0:35–0:42",
    title: "Security and control",
    body: "What LegacyBridge is and isn't allowed to do, how the approval step works, and how every action is recorded in the audit trail",
  },
  {
    time: "0:42–0:48",
    title: "Getting started: the two-week pilot",
    body: "How a pilot on one of your own document workflows is set up, what it measures and what's needed from your team",
  },
  {
    time: "0:48–1:00",
    title: "Q&A",
    body: "Bring your questions about your own IBM i environment",
  },
];

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.55fr] lg:items-start">
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
                What we&apos;ll cover in{" "}
                <span style={{ color: "var(--sw-mint)" }}>60 minutes</span>
              </h2>
            </Reveal>
          </div>

          <ul className="flex flex-col">
            {ITEMS.map((item, i) => (
              <Reveal key={item.time} delay={i * 0.06}>
                <li className="grid gap-1 sm:grid-cols-[auto_1fr] sm:gap-x-6 border-b border-white/10 py-4 md:py-5">
                  <span className="font-mono text-[12px] md:text-[13px] leading-[1.6] text-[var(--sw-mint)] sm:w-[7.5rem] whitespace-nowrap">
                    {item.time}
                  </span>
                  <div>
                    <div className="font-head font-bold text-white text-[16px] md:text-[18px] leading-tight">
                      {item.title}
                    </div>
                    <p className="mt-1.5 text-white/65 text-[14px] md:text-[15px] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
