"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "How is this rate possible?",
    a: "Twenty-plus years on Magento means we&apos;ve compressed almost every kind of Adobe Commerce work into a delivery model that fits inside these rates. The 2008 rate cut, repeated in 2020, taught us how to structure the work so the margin holds at low headline rates. We&apos;re not subsidizing this from another line of business and we&apos;re not running a loss leader.",
  },
  {
    q: "Are these your real engineers, or junior teams under a senior badge?",
    a: "Same engineers we put on enterprise migration projects. Senior Adobe Commerce specialists, Hyvä-fluent where the stack supports it, certified where the platform recognizes certifications. No bait-and-switch between sales call and live work.",
  },
  {
    q: "What&apos;s the catch?",
    a: "No catch on the rate. The honest constraint is volume: we run this program at scale, so each merchant gets a productized shape (a team configuration we&apos;ve already optimized) rather than a bespoke org chart. If you need a custom team structure with handpicked individuals, we have a separate offering at standard market rates.",
  },
  {
    q: "Will the rate hold, or does it climb after twelve months?",
    a: "It holds for the duration of the program. We&apos;re not running a teaser rate that resets at month thirteen. Quarterly math reviews are the moment to re-scope hours if your needs change &mdash; rate stays.",
  },
  {
    q: "What if the math doesn&apos;t beat our current setup?",
    a: "We tell you on the math call. About one in five comparisons comes back as &lsquo;you&apos;re already in a good place, stay put.&rsquo; We&apos;d rather lose a 30-minute call than win a customer who isn&apos;t actually saving money.",
  },
  {
    q: "Can we keep our current vendor and add you alongside?",
    a: "Yes. Several merchants run a hybrid: current vendor on the legacy critical-path stuff, scandiweb on new feature work and BAU support. The math still works because you&apos;re shrinking the higher-rate spend.",
  },
  {
    q: "How does transition work without breaking production?",
    a: "Parallel work for 2-4 weeks. We onboard onto your codebase, ticket queue, deploy pipeline, and on-call rotation while your current vendor stays operational. Cutover happens when both teams agree the handover is complete. No big-bang switches.",
  },
  {
    q: "Do you sign a multi-year contract?",
    a: "Month-to-month is the default. We don&apos;t need lock-in &mdash; if the math holds, the merchant stays. If the math stops working, they leave. Contracts are a sales tool, not an engineering one.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_2fr] items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">
              what people ask first
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
              The{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                obvious questions
              </span>
              , answered.
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] text-white/80 leading-relaxed max-w-[44ch]">
              If yours isn&apos;t here, put it on the math call. We&apos;ll
              answer it then.
            </p>
          </Reveal>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details
                  className="group rounded-[4px] border border-white/10 px-6 py-5 md:px-7 md:py-6 open:bg-white/[0.03]"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.45)",
                  }}
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span
                      className="font-head text-white text-[16px] md:text-[18px] leading-[1.3]"
                      dangerouslySetInnerHTML={{ __html: f.q }}
                    />
                    <span
                      aria-hidden
                      className="shrink-0 mt-1 h-5 w-5 rounded-full border border-white/40 grid place-items-center text-white/70 group-open:rotate-45 transition"
                    >
                      +
                    </span>
                  </summary>
                  <div
                    className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: f.a }}
                  />
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
