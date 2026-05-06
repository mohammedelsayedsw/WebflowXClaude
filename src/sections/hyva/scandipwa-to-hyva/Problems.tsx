"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "ScandiPWA hires are getting expensive",
      body:
        "The pool of engineers who know ScandiPWA shrinks every quarter. Hyvä, by contrast, runs on Alpine.js and Tailwind – stacks any Magento or frontend dev can ramp into in days. You stop paying a scarcity premium.",
    },
    {
      n: "2",
      title: "Heavy frontend, hidden bugs",
      body:
        "Service workers, hydration mismatches, GraphQL caching corners – every PWA stack has them. They surface as silent checkout drop-offs and basket bugs that QA misses but customers find. Hyvä’s server-rendered approach removes the entire class.",
    },
    {
      n: "3",
      title: "Magento upgrades cost twice",
      body:
        "Every Magento release triggers a parallel ScandiPWA compatibility cycle. Themes break, GraphQL schemas drift, frontend gets re-tested end-to-end. On Hyvä, the upgrade footprint is the same as native Magento – one pass, not two.",
    },
    {
      n: "4",
      title: "Hyvä is where Adobe Commerce is going",
      body:
        "Hyvä is the de-facto modern Magento frontend, and Hyvä Commerce now extends it into a full suite – checkout, B2B portal, customer account. Staying on ScandiPWA is a bet that gets lonelier every quarter.",
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
              Why merchants are leaving ScandiPWA for{" "}
              <span className="text-[var(--sw-mint)]">Hyvä</span>
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[58ch] leading-relaxed">
              We built ScandiPWA in 2019, when Magento desperately needed a fast
              frontend. It worked. Six years on, the calculus has shifted –
              Hyvä is faster to build, cheaper to staff, and ships fewer bugs.
              The merchants we host on ScandiPWA are migrating, and we are
              the people writing the migration playbook.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-16 md:mb-24">
          {problems.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7 h-full">
                <div className="label-code text-white/55 mb-5">Reason · {f.n}</div>
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
              We built ScandiPWA. We know exactly where it bends, where it
              breaks, and how to <span className="text-[var(--sw-mint)]">lift a store off it without losing data, SEO, or a single line of business logic</span>.
            </blockquote>
            <figcaption className="mt-7 label-code text-white/60">
              Engineering Director · scandiweb
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
