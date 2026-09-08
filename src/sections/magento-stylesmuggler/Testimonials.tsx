"use client";

import { Reveal } from "@/components/primitives/Reveal";

/** Client replies to the September 6 alert, quoted as written. */
const QUOTES: { quote: string; name: string; role: string; company: string }[] = [
  {
    quote:
      "Thank you for the proactive response. Please proceed with the assessment and any required mitigation activities as outlined in your email.",
    name: "Glenn Jope",
    role: "Vice-President, Information Technology",
    company: "Purdys Chocolatier",
  },
  {
    quote: "Thanks, I appreciate the proactive approach here. Please keep us updated.",
    name: "Nicolai Grevstad",
    role: "Global Ecommerce Manager",
    company: "Airthings",
  },
  {
    quote: "Thank you very much for your support on this.",
    name: "Brian Roche",
    role: "Interim CTO",
    company: "Beauty Works",
  },
  {
    quote:
      "We are keeping the block in place. I was able to place an order and it sounds like we are safer to keep it in place.",
    name: "Stephanie Cohen",
    role: "Director of Marketing",
    company: "Country Casual Teak",
  },
  {
    quote: "Thanks all. We greatly appreciate the proactive response.",
    name: "Melanie Roy",
    role: "Director, Digital & Direct Sales",
    company: "Purdys Chocolatier",
  },
];

export function Testimonials() {
  return (
    <section id="clients" className="relative z-10 py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
          <Reveal>
            <div className="label-code text-white/45">Client replies</div>
            <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              What clients{" "}
              <span style={{ color: "var(--sw-mint)" }}>said</span>
            </h2>
            <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[40ch]">
              Every scandiweb Magento and Adobe Commerce client heard from us on
              the day the flaw became public.
            </p>
          </Reveal>

          <div className="border-t border-white/10">
            {QUOTES.map((q, i) => (
              <Reveal key={q.name + q.company} delay={i * 0.06}>
                <figure className="py-7 md:py-8 border-b border-white/10">
                  <blockquote className="font-head font-semibold text-white text-[19px] md:text-[22px] leading-[1.3] tracking-[-0.005em] max-w-[52ch]">
                    “{q.quote}”
                  </blockquote>
                  <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[14px] text-white/85">{q.name}</span>
                    <span className="label-code text-white/45">
                      {q.role} · {q.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
