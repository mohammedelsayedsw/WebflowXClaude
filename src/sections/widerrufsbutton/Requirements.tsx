"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Req = { tag: string; title: string; body: string };

const reqs: Req[] = [
  {
    tag: "the button",
    title: "A visible withdrawal button",
    body: "Clearly labeled 'Vertrag widerrufen', prominent, and continuously available while the withdrawal period runs, reachable without a login. A buried email address or a PDF form does not count.",
  },
  {
    tag: "the flow",
    title: "A two-step process",
    body: "The customer enters their order details, then confirms on a separate step. You cannot force a reason, and the first click cannot complete the withdrawal.",
  },
  {
    tag: "the confirmation",
    title: "An automatic confirmation",
    body: "The moment a withdrawal is submitted, the customer gets a confirmation of receipt on a durable medium, with the exact date and time it arrived.",
  },
  {
    tag: "the legal pages",
    title: "Updated cancellation policy",
    body: "Your Widerrufsbelehrung has to point to the new button and match the new flow, so the policy and the store actually agree.",
  },
];

export function Requirements() {
  return (
    <section id="requirements" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            what the law requires
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            Canceling has to be{" "}
            <span className="text-[var(--sw-blue)]">as simple as ordering</span>.
          </h2>
          <p className="mt-7 max-w-[66ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Since 19 June 2026, § 356a BGB applies to every B2C online shop where
            a right of withdrawal exists, on any platform. It comes down to four
            things, and a footer link meets none of them.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {reqs.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.08}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <div className="label-code text-[var(--sw-black)]/55 mb-4">
                  {r.tag}
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.15]">
                  {r.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
