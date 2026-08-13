"use client";

import { Reveal } from "@/components/primitives/Reveal";

const cards: string[] = [
  "How to run personalization across markets with different languages, catalogs and customer bases",
  "Where the benefit actually comes from once a CDP is live, and where it doesn&apos;t",
  "What year one of advanced Marketing Automation realistically looks like, and when it starts paying",
  "The costs nobody warns you about",
];

export function Takeaways() {
  return (
    <section
      id="takeaways"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* LEFT · heading */}
          <div>
            <Reveal>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                What you&apos;ll take away
              </h2>
            </Reveal>
          </div>

          {/* RIGHT · numbered list */}
          <ul className="flex flex-col gap-4 md:gap-5">
            {cards.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <li className="flex gap-4 border-b border-[var(--sw-black)]/10 pb-4 md:pb-5">
                  <span
                    className="font-head text-[16px] md:text-[18px] leading-snug shrink-0 w-5"
                    style={{ color: "var(--sw-blue)" }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-snug"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
