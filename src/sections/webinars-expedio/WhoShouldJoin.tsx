"use client";

import { Handshake, Server, ShoppingCart, Store } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "./SectionLabel";

const AUDIENCE: { icon: typeof Server; lead: string; body: string }[] = [
  { icon: ShoppingCart, lead: "eCommerce leads", body: "Managers who watch the store slow down when traffic peaks" },
  { icon: Server, lead: "CTOs and IT teams", body: "People who look after a Magento 2 or Adobe Commerce store" },
  { icon: Store, lead: "Store owners", body: "Owners who want a faster store without replatforming" },
  { icon: Handshake, lead: "Agencies and partners", body: "Teams that build and run Magento stores for clients" },
];

export function WhoShouldJoin() {
  return (
    <section id="the-audience" className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <Reveal>
          <SectionLabel n={5} dark>The audience</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Who this webinar <span style={{ color: "var(--sw-mint)" }}>is for</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.lead} delay={i * 0.07} className="h-full">
              <li className="flex h-full gap-5 rounded-[4px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.05]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  <a.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="font-head font-bold text-white text-[17px] md:text-[19px] leading-tight text-balance">
                    {a.lead}
                  </div>
                  <p className="mt-2.5 text-white/65 text-[14px] md:text-[15px] leading-relaxed text-balance">{a.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
