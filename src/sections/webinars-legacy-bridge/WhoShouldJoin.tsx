"use client";

import { Calculator, ClipboardList, Headset, Server } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const AUDIENCE: { icon: typeof Calculator; lead: string; body: string }[] = [
  {
    icon: Calculator,
    lead: "Finance teams",
    body: "Managers and clerks who type supplier invoices into the AS/400",
  },
  {
    icon: Headset,
    lead: "Order desk teams",
    body: "Managers and staff who type emailed orders into the AS/400 line by line",
  },
  {
    icon: ClipboardList,
    lead: "Operations teams",
    body: "Managers who watch the pile of documents grow in busy weeks",
  },
  {
    icon: Server,
    lead: "IT teams",
    body: "People who look after the AS/400 and want less typing without changing it",
  },
];

export function WhoShouldJoin() {
  return (
    <section
      id="who-should-join"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
            <span className="text-white/55">7</span>
            <span className="h-px w-6 bg-white/20" />
            <span>The audience</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Who this webinar{" "}
            <span style={{ color: "var(--sw-mint)" }}>is for</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.lead} delay={i * 0.07} className="h-full">
              <li className="flex h-full gap-5 rounded-[4px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.04] text-[var(--sw-mint)]"
                >
                  <a.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="font-head font-bold text-white text-[17px] md:text-[19px] leading-tight text-balance">
                    {a.lead}
                  </div>
                  <p className="mt-2.5 text-white/65 text-[14px] md:text-[15px] leading-relaxed">
                    {a.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
