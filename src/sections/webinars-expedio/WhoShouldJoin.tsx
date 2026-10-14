"use client";

import { Code, Server, ShoppingCart, Store } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { Stars } from "./Stars";

const AUDIENCE: { icon: typeof Server; lead: string; body: string }[] = [
  { icon: Store, lead: "Store owners", body: "See how to make your Magento store 2x faster without replatforming" },
  { icon: ShoppingCart, lead: "eCommerce directors", body: "Keep all pages fast on your busiest sales days" },
  { icon: Server, lead: "CTOs", body: "Speed up Magento one page type at a time, with no big migration" },
  { icon: Code, lead: "Magento developers", body: "Learn about the free open-source core and setting it up" },
];

/**
 * Dark, ruled columns: one rule under the heading, hairlines between the
 * columns, a small mint icon over each title. Four across on desktop, two on
 * tablet, stacked with rules between them on phones.
 */
export function WhoShouldJoin() {
  return (
    <section id="the-audience" className="relative bg-[var(--sw-black)] border-t border-white/10 py-24 md:py-32 overflow-hidden scroll-mt-20">
      <Stars />
      <div className="wrap relative">
        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Made for <span style={{ color: "var(--sw-mint)" }}>Magento decision-makers</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.lead} delay={i * 0.07} className="h-full">
              <li
                className={[
                  "h-full py-8 md:py-10 border-white/15",
                  // phones: rules between stacked items
                  i > 0 ? "border-t sm:border-t-0" : "",
                  // tablet (2 cols): second row gets a top rule, right column a left rule
                  i >= 2 ? "sm:border-t lg:border-t-0" : "",
                  i % 2 === 1 ? "sm:border-l sm:pl-8" : "sm:pr-8",
                  // desktop (4 cols): hairline before every column but the first
                  i > 0 ? "lg:border-l lg:pl-8" : "",
                  i < 3 ? "lg:pr-8" : "",
                ].join(" ")}
              >
                <a.icon aria-hidden className="h-6 w-6" strokeWidth={1.5} style={{ color: "var(--sw-mint)" }} />
                <div className="mt-6 md:mt-8 font-head text-white text-[18px] md:text-[20px] leading-tight text-balance">
                  {a.lead}
                </div>
                <p className="mt-2 max-w-[34ch] text-white/60 text-[14px] md:text-[15px] leading-relaxed">{a.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
