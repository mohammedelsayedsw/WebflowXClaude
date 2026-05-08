"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Examples() {
  const examples = [
    {
      audience: "For eCommerce brands",
      quote:
        "Find me a waterproof hiking jacket under €200 for winter use.",
      returns:
        "Live products, filters, stock, size options, reviews, and a checkout path.",
    },
    {
      audience: "For B2B companies",
      quote:
        "Reorder the same industrial gloves we bought last month, but increase quantity by 20%.",
      returns:
        "Account pricing, stock, delivery rules, and a draft order or quote ready to approve.",
    },
    {
      audience: "For support teams",
      quote:
        "Where is my order? Can I return this? Which spare part fits this model?",
      returns:
        "Answers from order data, return rules, product specs, and helpdesk history.",
    },
    {
      audience: "For sales teams",
      quote:
        "I need a solution for 12 locations, with approval workflow and monthly billing.",
      returns:
        "Qualification, recommendation, a CRM record, and routing to the right rep.",
    },
    {
      audience: "For internal teams",
      quote:
        "Show slow-moving stock in Germany and suggest discounts.",
      returns:
        "Live data from commerce, ERP, analytics, and pricing systems.",
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
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-mint)] mb-5">
              The shift
            </p>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Your customers, teams, and partners are already asking{" "}
              <span className="text-[var(--sw-mint)]">ChatGPT</span>.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[60ch] leading-relaxed">
              Now they can do more than ask. With a custom MCP-powered ChatGPT App, they search your catalog, check order status, create quotes, compare products, request support, and reorder supplies – directly inside the conversation.
            </p>
            <p className="mt-4 text-[15px] md:text-[16px] text-white/65 max-w-[60ch] leading-relaxed">
              No AI theater. No demo that dies after one meeting. A real app connected to your real business systems.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7 h-full">
                <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--sw-mint)] mb-5">
                  {ex.audience}
                </p>
                <p className="font-head text-white text-[17px] md:text-[19px] leading-[1.3] mb-5 italic border-l-2 border-[var(--sw-mint)] pl-4">
                  &ldquo;{ex.quote}&rdquo;
                </p>
                <div className="text-[13px] text-white/65 leading-relaxed">
                  <span className="text-white/85 font-semibold">App returns:</span>{" "}
                  {ex.returns}
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
