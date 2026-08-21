"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function WhatChanged() {
  return (
    <section
      id="what-just-changed"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-25"
      />

      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div>
            <Reveal>
              <div className="label-code mb-5 text-white/55">
                The first of its kind
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                An agent that does the work, in{" "}
                <span style={{ color: "var(--sw-mint)" }}>your own code</span>
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 md:gap-7">
            <Reveal delay={0.1}>
              <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]">
                Ari is the first agent built for Magento (Adobe Commerce). You
                ask for a change the way you would ask a colleague, and it reads
                your store, writes the change in readable Magento code, and
                opens a pull request in your repository. Nothing goes live until
                you approve it.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]">
                Nothing about how your team works has to change. Your repo, your
                review, your CI, your staging, your release, all of it stays
                where it is. Ari does the part you have been waiting on.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
