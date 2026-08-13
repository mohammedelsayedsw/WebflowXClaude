"use client";

import { Reveal } from "@/components/primitives/Reveal";

const items: { title: string; body: string; withWho: string }[] = [
  {
    title: "Sportland&apos;s story",
    body: "Why they switched from Klaviyo to Bloomreach, the calls they made setting up four markets, and what was harder than expected.",
    withWho: "With scandiweb and Sportland",
  },
  {
    title: "Where the market is heading",
    body: "Bloomreach on how Baltic retailers compare, what separates teams who see value early from those who wait, and what the shift from rules to AI actually changes.",
    withWho: "With Bloomreach and Sportland",
  },
  {
    title: "Making it work",
    body: "scandiweb on the build, architecture decisions, controlling platform costs, which automations should stay, and how in-house and agency teams work together.",
    withWho: "With scandiweb and Sportland",
  },
  {
    title: "Your questions",
    body: "Open Q&amp;A with all three panels.",
    withWho: "",
  },
];

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em] mb-12 md:mb-16">
            What we&apos;ll cover
          </h2>
        </Reveal>

        <ul className="flex flex-col gap-4 md:gap-5">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <li className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <div className="flex gap-5 md:gap-7">
                  <span
                    className="font-head text-[20px] md:text-[24px] leading-none shrink-0"
                    style={{ color: "var(--sw-blue)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      className="font-head text-[var(--sw-black)] text-[19px] md:text-[22px] leading-[1.2]"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p
                      className="mt-3 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed max-w-[75ch]"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                    {item.withWho ? (
                      <p className="mt-3 text-[var(--sw-black)]/50 text-[13px] md:text-[14px]">
                        {item.withWho}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
