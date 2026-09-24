"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS: { title: string; body: string }[] = [
  {
    title: "The document arrives",
    body: "An invoice, order or claim comes in as a PDF, email, scan or portal download",
  },
  {
    title: "It is read and checked",
    body: "LegacyBridge reads the document and checks the data against your rules",
  },
  {
    title: "The screen fills itself in",
    body: "The correct AS/400 screens are filled in, and the entry stops before it is submitted",
  },
  {
    title: "Your team presses Enter",
    body: "A person checks the entry and approves it, and only then is it submitted",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
            <span className="text-white/55">3</span>
            <span className="h-px w-6 bg-white/20" />
            <span>How it works</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
            From the inbox to the{" "}
            <span style={{ color: "var(--sw-mint)" }}>AS/400 screen</span>
          </h2>
        </Reveal>

        <ol className="relative mt-12 md:mt-16 grid gap-8 md:gap-6 md:grid-cols-4">
          {/* The thread joining the four steps. Desktop only: once the steps
              stack it would run down the side of the text and read as a
              border rather than a sequence. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[18px] hidden md:block h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="h-full">
              <li className="relative h-full md:pr-5">
                <span
                  className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[var(--sw-mint)]/35 bg-[#0d1130] font-head font-bold text-[var(--sw-mint)] text-[15px]"
                >
                  {i + 1}
                </span>
                <div className="mt-5 font-head font-bold text-white text-[17px] md:text-[18px] leading-tight">
                  {s.title}
                </div>
                <p className="mt-2.5 text-white/65 text-[14px] md:text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
