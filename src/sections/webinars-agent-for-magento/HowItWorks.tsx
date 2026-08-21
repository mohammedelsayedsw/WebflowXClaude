"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "Connect your store",
    body: "Ari reads your version, theme, modules, and catalog. Nothing can change until you ask.",
  },
  {
    n: "2",
    title: "Ask for anything",
    body: "In plain English, the way you would ask a colleague.",
  },
  {
    n: "3",
    title: "Ari builds it",
    body: "Readable Magento code, committed to your own repository as a branch and a pull request.",
  },
  {
    n: "4",
    title: "You approve and publish",
    body: "Your review, your CI, your staging, your release, unchanged.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] mb-12 md:mb-16 max-w-[24ch]">
            From a sentence to a change you approve
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white/70 p-7 md:p-8 flex flex-col">
                <div
                  className="font-head text-[34px] md:text-[40px] leading-none tracking-[-0.02em]"
                  style={{ color: "var(--sw-blue)" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-5 font-head text-[var(--sw-black)] text-[17px] md:text-[19px] leading-tight tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-snug">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 md:mt-12 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            Nothing new for your team to learn, and nothing new to log into.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
