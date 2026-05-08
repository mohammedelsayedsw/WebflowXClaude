"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function HowWeWork() {
  const steps = [
    {
      n: "1",
      title: "Strategy + workflow design",
      body:
        "Define the use case that actually moves the metric. Increase product discovery. Reduce support tickets. Speed up reorders. Connect ChatGPT to live catalog data.",
    },
    {
      n: "2",
      title: "MCP server build",
      body:
        "Remote MCP server, tool definitions, input/output schemas, auth rules, error handling, logging, rate limits, permission boundaries, secure hosting.",
    },
    {
      n: "3",
      title: "Platform integrations",
      body:
        "Shopify, Adobe Commerce, BigCommerce, commercetools, SAP, Akeneo, Pimcore, NetSuite, HubSpot, Salesforce, Klaviyo, GA4, Zendesk, Gorgias – or custom APIs.",
    },
    {
      n: "4",
      title: "ChatGPT widgets + OAuth",
      body:
        "Embedded widgets where workflows need more than text – product cards, comparisons, quote builders, order timelines. OAuth for customer-specific actions.",
    },
    {
      n: "5",
      title: "Submission + post-launch",
      body:
        "Golden-prompt testing, broken-flow checks, privacy + safety review, metadata, mobile UI, OpenAI submission package. We stay through review feedback and iterate.",
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
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-mint)] mb-5">
              How we build it
            </p>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              From idea to live{" "}
              <span className="text-[var(--sw-mint)]">ChatGPT App</span>{" "}
              in weeks.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[60ch] leading-relaxed">
              One team, one contract. You don&apos;t need to hire separate AI consultants, backend engineers, frontend developers, DevOps, security reviewers, and OpenAI submission experts. We cover the full path.
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
      </div>
    </section>
  );
}
