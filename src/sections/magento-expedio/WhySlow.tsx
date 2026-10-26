"use client";

import { Reveal } from "@/components/primitives/Reveal";

/*
 * Why Magento gets slow, in one idea: a page is made in two steps, and Expedio
 * speeds up the first. One heading, one line, a two-step diagram in real text
 * (so it reads without decoding and crawlers see it), and one line on full
 * page cache. Three type sizes only. The benchmark figures live in the section
 * above, so they are not drawn again here.
 */

const STEPS = [
  {
    n: "1",
    title: "The server builds the page",
    note: "Expedio speeds up this step",
    ours: true,
  },
  {
    n: "2",
    title: "The browser draws the page",
    note: "Hyvä or a lighter theme speeds up this step",
    ours: false,
  },
];

const body = "text-white/65 text-[16px] leading-[1.65]";

export function WhySlow() {
  return (
    <section id="why-slow" className="relative z-10 py-20 md:py-32 scroll-mt-20 border-t border-white/10">
      <div className="wrap">
        <Reveal className="max-w-[46rem]">
          <h2 className="text-[30px] md:text-[44px] lg:text-[50px] leading-[1.06] tracking-[-0.022em] [text-wrap:balance]">
            Why Magento gets slow, and which half Expedio fixes
          </h2>
          <p className="mt-5 text-white/70 text-[20px] leading-[1.45] font-[family-name:var(--font-golos)] font-medium [text-wrap:balance]">
            Before a shopper sees anything, Magento&apos;s server builds the whole page by running code and database
            queries. That build is slow, and a theme or cache doesn&apos;t fix it.
          </p>
          <p className={`mt-4 ${body}`}>
            Every Magento page is made in two steps. Most Magento performance issues sit in the first.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 md:mt-14">
          <ol className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            {STEPS.map((s, i) => (
              <li key={s.n} className="contents">
                {i > 0 && (
                  <span aria-hidden className="self-center justify-self-center text-white/35 text-[20px] rotate-90 md:rotate-0">
                    →
                  </span>
                )}
                <div
                  className={`grid gap-2 content-start p-6 md:p-7 rounded-[2px] border ${
                    s.ours ? "border-[var(--sw-mint)]/60 bg-[var(--sw-mint)]/[0.06]" : "border-white/15"
                  }`}
                >
                  <span className={`text-[16px] ${s.ours ? "text-[var(--sw-mint)]" : "text-white/45"}`}>Step {s.n}</span>
                  <span className="text-white text-[20px] leading-[1.3] font-[family-name:var(--font-golos)] font-semibold">
                    {s.title}
                  </span>
                  <span className={`text-[16px] ${s.ours ? "text-[var(--sw-mint)]" : "text-white/55"}`}>{s.note}</span>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15} className={`mt-8 max-w-[46rem] ${body}`}>
          <p>
            Magento full page cache does not help pages it has not saved, like filtered categories or logged-in
            shoppers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
