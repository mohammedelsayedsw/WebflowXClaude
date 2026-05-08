"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function HowWeWork() {
  const steps = [
    {
      n: "1",
      title: "Strategy workshop",
      body:
        "Define the workflow that actually moves the metric. Not 'let’s add AI' – a use case tied to revenue, ticket volume, or speed.",
    },
    {
      n: "2",
      title: "MCP server + tools",
      body:
        "Remote MCP server, tool definitions, schemas, auth rules, error handling, logging, rate limits, secure hosting.",
    },
    {
      n: "3",
      title: "Platform integrations",
      body:
        "Connect to Shopify, Adobe Commerce, BigCommerce, ERP, CRM, PIM, helpdesk, search, analytics – whatever’s in your stack.",
    },
    {
      n: "4",
      title: "Widgets + auth",
      body:
        "Embedded ChatGPT widgets where workflows need more than text. OAuth account linking where workflows need a logged-in user.",
    },
    {
      n: "5",
      title: "Submission + launch",
      body:
        "Golden-prompt testing, safety review, metadata, mobile UI, OpenAI submission package. We stay through review.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <div className="label-code text-[var(--sw-mint)] mb-4">How we build it</div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              From idea to live{" "}
              <span className="text-[var(--sw-mint)]">ChatGPT App</span>{" "}
              in weeks.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[60ch] leading-relaxed">
              One team. One contract. From workflow design to OpenAI submission to post-launch support.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:gap-4 md:grid-cols-5 mb-14 md:mb-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="relative h-full">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sw-mint)]/15 mb-5">
                  <span className="font-head font-bold text-[14px] text-[var(--sw-mint)]">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-head text-white text-[18px] md:text-[19px] leading-[1.25] mb-3 font-semibold">
                  {s.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/65 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-[16px] md:text-[17px] text-white/85 max-w-[60ch] leading-relaxed border-t border-white/10 pt-10">
            We&apos;ve already shipped commerce systems for{" "}
            <span className="font-semibold text-white">700+ brands</span> across{" "}
            <span className="font-semibold text-white">22 years</span>. ChatGPT is the next interface. We know the stack underneath.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
