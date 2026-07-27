"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = [
  {
    title: "One view across every channel",
    how: "by pulling your online store, shops, ads, email, and search into one place",
  },
  {
    title: "One customer across online and store",
    how: "by matching a shopper's in-store buys to what they do online",
  },
  {
    title: "Know your customers, not just their orders",
    how: "by building lifetime value and grouping them by how they shop, from your whole customer history",
  },
  {
    title: "Make decisions from one place",
    how: "by dashboards covering the whole business, with automatic alerts the moment something looks off",
  },
  {
    title: "Numbers you can trust",
    how: "by catching broken tracking before it ever reaches the dashboard",
  },
  {
    title: "A platform that grows with you",
    how: "by one solid foundation your next systems can plug into, like a new till system or a customer data platform",
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
            We bring your online and in-store data into{" "}
            <span className="text-[var(--sw-blue)]">
              one view your team can act on
            </span>
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
              Want one view across your whole business?
            </span>
            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-[2px] border border-white/55 px-4 py-2 font-head text-[13px] font-semibold text-white transition-colors group-hover:bg-white group-hover:text-[var(--sw-blue)]">
              Book a free analytics consultation
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
