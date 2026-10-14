"use client";

import { MonitorSmartphone, Server, ShoppingCart, Store } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const AUDIENCE: { icon: typeof Server; lead: string; body: string }[] = [
  { icon: Store, lead: "Store owners", body: "Owners paying for bigger servers just to get through busy days" },
  { icon: ShoppingCart, lead: "eCommerce leads", body: "Managers whose store gets slowest on the days that bring the most sales" },
  { icon: Server, lead: "CTOs and IT teams", body: "People told the only way to a fast store is a costly replatform" },
  { icon: MonitorSmartphone, lead: "Heads of digital", body: "People responsible for how the store feels to shoppers" },
];

/**
 * Dark, ruled columns: one rule under the heading, hairlines between the
 * columns, a small mint icon over each title. Four across on desktop, two on
 * tablet, stacked with rules between them on phones.
 */
export function WhoShouldJoin() {
  return (
    <section id="the-audience" className="relative bg-[var(--sw-black)] border-t border-white/10 py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Who this webinar <span style={{ color: "var(--sw-mint)" }}>is for</span>
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
