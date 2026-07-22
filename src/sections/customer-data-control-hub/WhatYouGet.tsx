"use client";

import { Reveal } from "@/components/primitives/Reveal";

const ITEMS = [
  {
    title: "A control assessment",
    body: "A full read of your sources, duplicate customer files, identity rules, gaps in how you use the data, and renewal risk, with a costed plan, before you commit to anything big.",
  },
  {
    title: "A clean, checked customer database",
    body: "It catches bad customer files and can grow without being rebuilt.",
  },
  {
    title: "One customer identity",
    body: "Readable rules that decide which entries are the same person, with staff, wholesale, and fulfillment entries kept out.",
  },
  {
    title: "Audiences that actually move",
    body: "Trusted customer files sent to email, SMS, Google, Meta, and your store tools, to run campaigns and to leave the right people out, not just for reports.",
  },
  {
    title: "Reporting and clienteling on real customers",
    body: "Retention, merchandising, and store views built on clean customer files, so teams act without rebuilding exports every week.",
  },
  {
    title: "Ownership handed over",
    body: "Documented rules, trained operators, and change controls, so your team runs it without routine vendor tickets.",
  },
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <span className="label-code mb-4 block text-[var(--sw-black)]/50">
            What you get
          </span>
          <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
            Control your team{" "}
            <span className="text-[var(--sw-blue)]">owns and runs</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:mt-12 md:gap-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5">
                <h3 className="font-head text-[16px] font-bold leading-[1.25] text-[var(--sw-black)] md:text-[17px]">
                  {it.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/60 md:text-[14px]">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
