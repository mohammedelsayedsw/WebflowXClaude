"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = [
  {
    title: "See every customer as one person",
    how: "by matching the entries scattered across your website, stores, CRM, and clienteling",
  },
  {
    title: "Trust your customer numbers again",
    how: "by a clean, checked database that keeps staff, wholesale, and guest entries out",
  },
  {
    title: "Reach customers everywhere, not just email",
    how: "by sending the same group to Google, Meta, SMS, and your stores",
  },
  {
    title: "Get your analysts off spreadsheets",
    how: "by automated reporting on clean customer files, not weekly exports",
  },
  {
    title: "Give store staff real customer history",
    how: "by putting each customer's past purchases and preferences on the screen in front of them",
  },
  {
    title: "Change the rules without a vendor",
    how: "by handing your team the identity rules, with training and documentation",
  },
];

export function TheFix() {
  return (
    <section id="the-fix" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <span className="label-code mb-4 block text-[var(--sw-black)]/50">
            The fix
          </span>
          <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
            We replace vendor-locked customer data with{" "}
            <span className="text-[var(--sw-blue)]">one hub your team runs</span>.
          </h2>
        </Reveal>

        {/* six outcomes in a three column grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:mt-12 md:gap-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-4">
                <h3 className="font-head text-[16px] font-bold leading-[1.25] text-[var(--sw-black)] md:text-[17px]">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--sw-black)]/55">
                  <span
                    aria-hidden
                    className="mr-1.5 font-semibold text-[var(--sw-blue)]"
                  >
                    &rarr;
                  </span>
                  {o.how}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* slim full-width CTA band under the results */}
        <Reveal delay={0.1}>
          <a
            href="#cta"
            className="group mt-3 flex flex-col justify-between gap-4 rounded-[4px] p-5 transition-colors sm:flex-row sm:items-center md:mt-4 md:px-7"
            style={{ background: "var(--sw-blue)" }}
          >
            <span className="font-head text-[16px] font-bold text-white md:text-[18px]">
              Want this across your customer data?
            </span>
            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-[2px] border border-white/55 px-4 py-2 font-head text-[13px] font-semibold text-white transition-colors group-hover:bg-white group-hover:text-[var(--sw-blue)]">
              Book a 20-minute fit call
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
