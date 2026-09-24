"use client";

import { Reveal } from "@/components/primitives/Reveal";

const BLOCKS: { title: string; body: string; todo?: boolean }[] = [
  {
    title: "What you choose",
    body: "One document type, such as a supplier invoice or a customer order",
  },
  {
    // Left as written until Dmitrijs confirms it. Inventing a measure here
    // would be inventing the thing the pilot is judged on.
    title: "What it measures",
    body: "[ADD: confirm with Dmitrijs what the pilot measures]",
    todo: true,
  },
  {
    title: "What we need from you",
    body: "One real document and a walkthrough of your screens",
  },
];

export function Pilot() {
  return (
    <section
      id="the-pilot"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">8</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>Getting started</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[24ch]">
            Try it on one of your own documents{" "}
            <span className="text-[var(--sw-blue)]">for two weeks</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[66ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            The pilot runs on one document type your team already enters by
            hand, inside an environment and access setup your team approves.
            Your team keeps working as usual while it runs.
          </p>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 md:grid-cols-3">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07} className="h-full">
              <li
                className={
                  "h-full rounded-[4px] border bg-white p-6 md:p-7 " +
                  (b.todo
                    ? "border-dashed border-[var(--sw-orange)]/45"
                    : "border-[var(--sw-black)]/10")
                }
              >
                <div className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[19px] leading-tight">
                  {b.title}
                </div>
                <p
                  className={
                    "mt-2.5 text-[14px] md:text-[15px] leading-relaxed " +
                    (b.todo
                      ? "text-[var(--sw-orange)] font-mono text-[13px]"
                      : "text-[var(--sw-black)]/70")
                  }
                >
                  {b.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.28}>
          <p className="mt-8 md:mt-10 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            After two weeks you decide based on the results on your own
            documents.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
