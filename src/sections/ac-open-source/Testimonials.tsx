"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Quote = { quote: string; role: string };

const lead: Quote = {
  quote:
    "Partnering with scandiweb's team allowed us to bring a site to market that has 3 to 4 times better performance than any other site in the client's portfolio.",
  role: "Jason Barney, Technical Consultant, PUMA",
};

const quotes: Quote[] = [
  {
    quote:
      "For almost 10 years scandiweb has partnered with us on complete site redesigns and integrations across our CRM, ERP, and PLM systems, always providing their best and brightest talent to help us reach our strategic goals and drive revenue.",
    role: "Jonathan Chan, Head of Global IT, Lafayette 148 NY",
  },
  {
    quote:
      "I have nothing but praise for the entire scandiweb team. They understood our issues right away, and the dedication to coming up with solutions quickly is admirable.",
    role: "Niyas Noormohammed, eCommerce Manager, JYSK UAE",
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
