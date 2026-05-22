"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Testimonials() {
  const quotes = [
    {
      short: "It looks great. Really slick.",
      long: "It looks great. It’s really slick. Can’t wait to get it in.",
      who: "Jon Mann",
      role: "COO · reference client",
      accent: "mint",
    },
    {
      short: "Money coming in. No phone calls. Smooth sailing.",
      long: "Money coming in. No phone calls from anybody. No upset customers. Smooth sailing.",
      who: "Head of Operations",
      role: "Reference client",
      accent: "blue",
    },
  ];
  return (
    <section id="testimonials" className="bg-[var(--sw-black)] py-28 md:py-36 relative overflow-hidden">
      {/* ambient top line */}
      <svg className="absolute inset-x-0 top-0 h-px w-full opacity-50" viewBox="0 0 1000 1" preserveAspectRatio="none">
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={2} />
      </svg>

      <div className="wrap">
        <div className="max-w-[60ch] mb-14 md:mb-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.05] max-w-[22ch]">
              The client,{" "}
              <span className="text-white/45">in their own words</span>
            </h2>
            <p className="mt-6 text-white/75 text-[16px] md:text-[17px] leading-relaxed">
              Two voices from the reference launch, pulled from weekly syncs
              over the engagement.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-[900px]">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <figure className="relative rounded-[4px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col gap-6 transition-all hover:-translate-y-1 hover:border-white/20">
                {/* accent bar */}
                <span
                  className="absolute left-0 top-7 bottom-7 w-px"
                  style={{
                    background:
                      q.accent === "mint" ? "var(--sw-mint)" : "var(--sw-blue)",
                    opacity: 0.6,
                  }}
                />
                <blockquote className="font-head text-white text-[20px] md:text-[22px] leading-[1.22] pl-3">
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
