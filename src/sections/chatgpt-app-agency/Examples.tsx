"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Examples() {
  const examples = [
    {
      audience: "For D2C brands",
      quote:
        "Find me a waterproof hiking jacket under €200, in stock for next-day.",
      returns: "live products · sizes · stock · reviews · checkout link",
    },
    {
      audience: "For B2B buyers",
      quote:
        "Reorder the gloves we bought last month. Increase quantity by 20%.",
      returns: "account match · contract pricing · delivery date · draft order",
    },
    {
      audience: "For support",
      quote:
        "Where is my order, and which spare part fits this model?",
      returns: "shipment tracking · compatible parts · ticket if escalation",
    },
  ];

  return (
    <section
      id="the-shift"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <div className="label-code text-[var(--sw-mint)] mb-4">The shift</div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Your customers are already buying through{" "}
              <span className="text-[var(--sw-mint)]">ChatGPT</span>.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[60ch] leading-relaxed">
              ChatGPT now answers product questions, compares options, recommends suppliers, and helps shoppers decide – for millions of buyers, every day. If your catalog, prices, and stock aren&apos;t connected to that conversation, ChatGPT is talking about you from public information only.
            </p>
            <p className="mt-4 text-[15px] md:text-[16px] text-white/70 max-w-[60ch] leading-relaxed">
              A ChatGPT App fixes that. With a custom MCP server, ChatGPT calls your approved tools, reads your real data, and runs your real workflows – inside the conversation, in real time.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {examples.map((ex, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7 h-full">
                <div className="label-code text-[var(--sw-mint)] mb-5">
                  {ex.audience}
                </div>
                <p className="font-head text-white text-[18px] md:text-[20px] leading-[1.3] mb-5 italic border-l-2 border-[var(--sw-mint)] pl-4">
                  &ldquo;{ex.quote}&rdquo;
                </p>
                <div className="text-[13px] text-white/60 leading-relaxed">
                  <span className="text-white/80">App returns:</span> {ex.returns}.
                </div>
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
