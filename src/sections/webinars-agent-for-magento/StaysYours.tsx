"use client";

import { ShieldCheck, GitBranch, BadgeCheck, ScrollText } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const CARDS: { Icon: typeof ShieldCheck; title: string; body: string }[] = [
  {
    Icon: ShieldCheck,
    title: "Nothing goes live until you approve it",
    body: "Ari shows a preview and a plain list of what changed",
  },
  {
    Icon: GitBranch,
    title: "Your code stays in your repository",
    body: "Readable Magento code you can export at any time",
  },
  {
    Icon: BadgeCheck,
    title: "PCI DSS compliant",
    body: "Certified to ISO 27001, 27017 and 9001",
  },
  {
    Icon: ScrollText,
    title: "A record of every change",
    body: "Who asked, what changed, who approved, and when",
  },
];

export function StaysYours() {
  return (
    <section
      id="your-store-stays-yours"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-25"
      />

      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[46rem]">
          <Reveal>
            <div className="label-code mb-5 text-white/55">
              Security and access
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Your store stays yours
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-7 md:p-8">
                <c.Icon
                  className="h-6 w-6"
                  strokeWidth={1.75}
                  style={{ color: "var(--sw-mint)" }}
                  aria-hidden
                />
                <h3 className="mt-5 font-head text-white text-[17px] md:text-[19px] leading-tight tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="mt-3 text-white/70 text-[15px] md:text-[16px] leading-snug">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
