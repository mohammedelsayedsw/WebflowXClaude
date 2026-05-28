"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Testimonials() {
  const quotes = [
    {
      short:
        "The website will actually generate revenue. The show generates revenue on the app called Whatnot.",
      who: "Founder",
      role: "Reference trading card retailer",
      accent: "mint",
    },
    {
      short:
        "When an active card leaves the pack, the logic pulls the closest card in value from our reserve inventory. They cracked it.",
      who: "CEO",
      role: "Reference trading card retailer · build review",
      accent: "blue",
    },
    {
      short:
        "Users would have full PSA Vault capabilities in our platform. Send to eBay, withdraw, sell through PSA Offers. It works exactly how it does with GameStop.",
      who: "CEO",
      role: "Reference retailer · PSA partnership call",
      accent: "mint",
    },
  ];
  return (
    <section
      id="testimonials"
      className="bg-[var(--sw-black)] py-28 md:py-36 relative overflow-hidden"
    >
      <svg className="absolute inset-x-0 top-0 h-px w-full opacity-50" viewBox="0 0 1000 1" preserveAspectRatio="none">
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={2} />
      </svg>

      <div className="wrap">
        <div className="max-w-[60ch] mb-14 md:mb-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.05] max-w-[22ch]">
              Testimonials
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="relative rounded-[4px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col gap-6 transition-all hover:-translate-y-1 hover:border-white/20">
                <span
                  className="absolute left-0 top-7 bottom-7 w-px"
                  style={{
                    background:
                      q.accent === "mint" ? "var(--sw-mint)" : "var(--sw-blue)",
                    opacity: 0.6,
                  }}
                />
                <blockquote className="font-head text-white text-[19px] md:text-[21px] leading-[1.25] pl-3">
                  &ldquo;{q.short}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pl-3">
                  <div className="text-white text-[13px] md:text-[14px] font-medium">
                    {q.who}
                  </div>
                  <div className="label-code text-white/55 mt-1">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
