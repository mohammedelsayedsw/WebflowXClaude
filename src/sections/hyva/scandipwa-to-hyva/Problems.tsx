"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "Easier to staff",
      body:
        "Hyvä runs on Alpine.js and Tailwind – stacks any Magento or frontend developer can ramp into in days. ScandiPWA needs senior React engineers who know its conventions, and that pool is shrinking. You stop paying a scarcity premium.",
    },
    {
      n: "2",
      title: "Lighter frontend, fewer bugs",
      body:
        "Hyvä’s server-rendered approach removes a whole class of issues PWA stacks live with – service workers, hydration mismatches, GraphQL caching corners – the kind that surface as silent checkout drop-offs.",
    },
    {
      n: "3",
      title: "One upgrade pass, not two",
      body:
        "On ScandiPWA, every Magento release triggers a parallel frontend compatibility cycle – themes, GraphQL schemas, end-to-end tests. On Hyvä, the upgrade footprint matches native Magento. One pass.",
    },
    {
      n: "4",
      title: "Where the ecosystem is investing",
      body:
        "Hyvä is the de-facto modern Magento frontend, and Hyvä Commerce now extends it into a full suite – checkout, B2B portal, customer account. The community, the modules, and the partner network are all moving in the same direction.",
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
              We built ScandiPWA in 2019, when Magento needed a fast frontend
              and didn’t have one. It earned its place. Six years on, Hyvä
              has surpassed it on speed, simplicity, and ecosystem support –
              and our merchants are quietly making the move. We are the team
              writing the migration playbook.
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
              We built ScandiPWA. We know its strengths and its limits –
              and how to <span className="text-[var(--sw-mint)]">lift a store off it without losing data, SEO, or a single line of business logic</span>.
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
