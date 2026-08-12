"use client";

import { Reveal } from "@/components/primitives/Reveal";

const cards: string[] = [
  "How a Baltic retail leader runs personalization across markets with different languages, catalogs, and customer bases",
  "Where the benefit actually comes from once a CDP is live, and where it doesn&apos;t",
  "What year one of advanced marketing automation realistically looks like, and when it starts paying",
  "The costs nobody warns you about",
];

export function Takeaways() {
  return (
    <section
      id="takeaways"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em] mb-12 md:mb-16 max-w-[24ch]">
            What you&apos;ll take away
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <div
                  className="font-head text-[15px] mb-4"
                  style={{ color: "var(--sw-blue)" }}
                >
                  {i + 1}
                </div>
                <p
                  className="text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-snug"
                  dangerouslySetInnerHTML={{ __html: c }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
