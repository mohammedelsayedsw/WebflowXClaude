"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Quote = { quote: string; role: string };

const lead: Quote = {
  quote:
    "We were paying Adobe $90K a year for an edition we'd outgrown. scandiweb moved us to Open Source in weeks, same store, and that $90K funds growth now, not a license.",
  role: "CFO, mid-market apparel brand",
};

const quotes: Quote[] = [
  {
    quote:
      "My team swore we'd lose half our features. We didn't. They proved it on a working demo of our own store before we paid a cent.",
    role: "Head of eCommerce, multi-store retailer",
  },
  {
    quote:
      "We set out to just drop the license. We came out faster too, conversion up double digits on Hyvä. Best call we made all year.",
    role: "Founder, D2C home goods",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            testimonials
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            Hear from merchants who moved to{" "}
            <span className="text-[var(--sw-blue)]">Open Source</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-12 md:mt-16 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-8 md:p-12">
            <span
              aria-hidden
              className="font-head text-[56px] leading-none text-[var(--sw-blue)]"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 max-w-[60ch] font-head text-[var(--sw-black)] text-[22px] md:text-[34px] leading-[1.18]">
              {lead.quote}
            </blockquote>
            <figcaption className="mt-8 label-code text-[var(--sw-blue)]">
              {lead.role}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.role} delay={i * 0.08}>
              <figure className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-8">
                <blockquote className="font-head text-[var(--sw-black)] text-[19px] md:text-[22px] leading-snug">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 label-code text-[var(--sw-black)]/55">
                  {q.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
