"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const ROWS: { title: string; body: string }[] = [
  {
    title: "You run a Magento store",
    body: "You have a backlog of changes and no budget or time to clear it",
  },
  {
    title: "You run an agency",
    body: "You want client work done without the small tickets filling your team's queue",
  },
  {
    title: "You lead eCommerce or IT",
    body: "You want to see what an agent can safely do on a live store before your competitors do",
  },
  {
    title: "You work with Magento every day",
    body: "You want to see the first agent for Magento the day it launches",
  },
];

export function WhoShouldJoin() {
  return (
    <section
      id="who-should-join"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] mb-12 md:mb-16">
            Join the launch if this is you
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {ROWS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white/70 p-7 md:p-8 flex gap-4">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0"
                  strokeWidth={2}
                  style={{ color: "var(--sw-blue)" }}
                  aria-hidden
                />
                <div>
                  <h3 className="font-head text-[var(--sw-black)] text-[17px] md:text-[19px] leading-tight tracking-[-0.01em]">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-snug">
                    {r.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
