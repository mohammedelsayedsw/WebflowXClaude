"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Pain = { tag: string; title: string; body: string };

const pains: Pain[] = [
  {
    tag: "the invoice",
    title: "Your support spend is creeping",
    body: "Hourly rates have drifted up since the contract was signed. The same monthly bill now buys fewer hours, fewer releases, fewer fixes. Nobody had a conversation about it.",
  },
  {
    tag: "the team",
    title: "The team is bigger than the work",
    body: "Eight people billed against your Magento, four of them productive. The other four exist because someone, somewhere, agreed they were necessary. Cutting them is hard from inside the contract.",
  },
  {
    tag: "the inertia",
    title: "Switching feels expensive",
    body: "The current vendor knows your codebase. They built half of it. Moving feels like a six-month exercise in re-discovery before any work gets done. So the spend continues.",
  },
  {
    tag: "the conversation",
    title: "No one will give you a math comparison",
    body: "Every pitch comes back as a deck about &lsquo;value&rsquo; and &lsquo;partnership.&rsquo; What you actually wanted was rate × team × twelve months, your number vs. theirs. Hard to get a straight one.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            why this campaign exists
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            The market is reassessing every line item.{" "}
            <span style={{ color: "var(--sw-mint)" }}>
              Your Magento support contract is one of them
            </span>
            .
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Four patterns we hear from merchants on existing Adobe Commerce
            support contracts. None of them are new. All four are louder this
            year than last.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div className="label-code text-white/55 mb-4">{p.tag}</div>
                <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                  {p.title}
                </h3>
                <p
                  className="mt-4 text-[14px] md:text-[15px] text-white/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <div className="mt-14 md:mt-20 rounded-[4px] border-l-2 border-[var(--sw-mint)] bg-white/[0.03] pl-6 md:pl-7 py-5 md:py-6 max-w-[78ch]">
            <p className="font-head text-white text-[18px] md:text-[22px] leading-[1.35]">
              We did this once before, in 2008. Cut our hourly rates 5×. Got a
              flood of inbound from buyers who were reassessing spend in a
              downturn. The price became the unlock.{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                The market is moving again. We&apos;re moving first.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
