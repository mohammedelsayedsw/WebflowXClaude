"use client";

import { Reveal } from "@/components/primitives/Reveal";

/** Client replies to the September 6 alert, quoted as written. */
const QUOTES: { quote: string; company: string }[] = [
  {
    quote:
      "Thank you for the proactive response. Please proceed with the assessment and any required mitigation activities as outlined in your email.",
    company: "Purdys Chocolatier",
  },
  {
    quote: "Thanks, I appreciate the proactive approach here. Please keep us updated.",
    company: "Airthings",
  },
  {
    quote: "Thank you very much for your support on this.",
    company: "Beauty Works",
  },
  {
    quote: "Thanks all. We greatly appreciate the proactive response.",
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
              <Reveal key={q.company + i} delay={i * 0.06}>
                <figure className="py-7 md:py-8 border-b border-white/10">
                  <blockquote className="font-head font-semibold text-white text-[19px] md:text-[22px] leading-[1.3] tracking-[-0.005em] max-w-[52ch]">
                    “{q.quote}”
                  </blockquote>
                  <figcaption className="mt-4 label-code text-white/55">{q.company}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
