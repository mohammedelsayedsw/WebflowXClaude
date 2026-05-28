"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "Your show and your website are two businesses",
      body:
        "Whatnot pays the bills. The owned website is supposed to. Today they share no customer file, no inventory truth, no attribution. The whales who keep your show alive are invisible to your site, and the work you put into SEO never gets credit for the GMV.",
    },
    {
      n: "2",
      title: "One box opens into 200 unique SKUs",
      body:
        "Set, parallel, condition, serial, year, player. Every card is a real product, and mainstream PIMs were never built for this. Most breakers run two parallel inventories glued together with Google Sheets and Apps Script.",
    },
    {
      n: "3",
      title: "Stripe chokes on high-AOV randoms",
      body:
        "A $80 spot followed by a $4,500 personal looks like fraud to default card-issuer rules. Your buyers get declined. Fanatics Live disclosed $800K a year in chargeback losses. TikTok-self-processed breakers carry it directly.",
    },
    {
      n: "4",
      title: "PSA, BGS, SGC, CGC do not integrate with anything",
      body:
        "Submission portals, status emails, vault transfers, eBay listings. Today every breaker tracks grading and vault state in spreadsheets. A single lost $5,000 personal can erase a week of margin.",
    },
  ];

  return (
    <section id="problems" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <svg
        className="absolute top-0 inset-x-0 h-px opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
      </svg>

      <div className="wrap relative">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Generic commerce platforms were not built for{" "}
              <span className="text-[var(--sw-mint)]">breakers</span>
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[56ch] leading-relaxed">
              Trading cards retail is not fashion retail. Inventory is created during the live show. Every card is a unique SKU. AOV swings from $20 to $5,000 in the same checkout. Grading services own the chain of custody. Every breaker we speak to recognises all four problems below.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-16 md:mb-24">
          {problems.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7 h-full">
                <div className="label-code text-white/55 mb-5">Problem · {f.n}</div>
                <h3 className="font-head text-white text-[20px] md:text-[22px] leading-[1.15] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="max-w-[72ch] mx-auto text-center">
            <svg aria-hidden className="mx-auto mb-6 h-8 opacity-60" viewBox="0 0 48 32" fill="none">
              <path
                d="M4 24 Q 4 4, 20 4 L 20 12 Q 14 12, 12 20 L 20 20 L 20 30 L 4 30 Z M28 24 Q 28 4, 44 4 L 44 12 Q 38 12, 36 20 L 44 20 L 44 30 L 28 30 Z"
                fill="var(--sw-mint)"
              />
            </svg>
            <blockquote className="font-head text-white text-[24px] md:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.01em]">
              The website will actually generate revenue. The show generates revenue on the app called <span className="text-[var(--sw-mint)]">Whatnot</span>.
            </blockquote>
            <figcaption className="mt-7 label-code text-white/60">
              Founder · Reference trading card retailer
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
