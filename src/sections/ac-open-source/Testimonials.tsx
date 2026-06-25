"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Quote = {
  quote: string;
  highlight: string;
  tail: string;
  who: string;
  role: string;
};

const quotes: Quote[] = [
  {
    quote: "We were paying Adobe $90K a year for a platform we already knew inside out. Moving to Open Source took that line item to ",
    highlight: "zero",
    tail: ", and nothing about how we run the store changed.",
    who: "Head of eCommerce",
    role: "Mid-market fashion retailer",
  },
  {
    quote: "My team swore we would lose half our features. We lost ",
    highlight: "none of them",
    tail: ". The enterprise pieces we actually used got rebuilt, and we own them now instead of renting them.",
    who: "CTO",
    role: "B2B and B2C electronics",
  },
  {
    quote: "We expected a trade-off and there wasn&apos;t one. We came out faster too, with ",
    highlight: "conversion up double digits",
    tail: " after the performance work we did on the way across.",
    who: "Director of Digital",
    role: "Multi-store retail group",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            from merchants who moved
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            The license went away.{" "}
            <span className="text-[var(--sw-blue)]">
              The store stayed the same
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.who} delay={i * 0.07}>
              <figure className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8 flex flex-col">
                <blockquote className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-[1.4] flex-1">
                  &ldquo;
                  <span dangerouslySetInnerHTML={{ __html: q.quote }} />
                  <span className="text-[var(--sw-blue)]">{q.highlight}</span>
                  <span dangerouslySetInnerHTML={{ __html: q.tail }} />
                  &rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-[var(--sw-black)]/10">
                  <div className="text-[var(--sw-black)] font-medium text-[14px] md:text-[15px]">
                    {q.who}
                  </div>
                  <div className="label-code text-[var(--sw-black)]/55 mt-1">
                    {q.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
