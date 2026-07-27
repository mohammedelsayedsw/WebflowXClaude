"use client";

import { Eye, Lightbulb, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const takeaways: {
  icon: typeof Eye;
  title: string;
}[] = [
  {
    icon: Eye,
    title: "A clear picture of what's possible on top of your current systems",
  },
  {
    icon: Lightbulb,
    title: "Concrete ideas for your own operation",
  },
  {
    icon: MessageCircle,
    title: "Your questions answered live",
  },
];

export function TheSession() {
  return (
    <section
      id="the-session"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[720px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">7</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The takeaway</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
              What you&apos;ll{" "}
              <span className="text-[var(--sw-blue)]">walk away with</span>
            </h2>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {takeaways.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <li className="group h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7 md:p-8 transition-all hover:border-[var(--sw-blue)]/35 hover:-translate-y-0.5">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)] mb-5"
                  aria-hidden
                >
                  <t.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[22px] leading-[1.2]">
                  {t.title}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
