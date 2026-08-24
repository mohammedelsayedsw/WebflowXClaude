"use client";

import { LineChart, ShoppingCart, Server, ClipboardList } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const AUDIENCE: { icon: typeof LineChart; lead: string; body: string }[] = [
  {
    icon: LineChart,
    lead: "You own the numbers",
    body: "CEO, MD, COO, CFO, or CMO, and product data is showing up in margin and in launch dates",
  },
  {
    icon: ShoppingCart,
    lead: "Running eCommerce or digital",
    body: "New channels and new markets keep waiting on data that is not ready",
  },
  {
    icon: Server,
    lead: "Responsible for the data foundation",
    body: "CTO or IT Director, working out what AI needs underneath it first",
  },
  {
    icon: ClipboardList,
    lead: "You live in it daily",
    body: "Catalog manager, product information lead, or localization manager, and you know where the hours go",
  },
];

export function WhoShouldJoin() {
  return (
    <section
      id="who-should-join"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">6</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>Who it is for</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Join if <span className="text-[var(--sw-blue)]">any of these is you</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.lead} delay={i * 0.07} className="h-full">
              <li className="flex h-full gap-5 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-7">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)]"
                >
                  <a.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[19px] leading-tight">
                    {a.lead}
                  </div>
                  <p className="mt-2.5 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
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
