"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Step = { number: string; title: string; body: string };

const steps: Step[] = [
  {
    number: "1",
    title: "Penetration test",
    body: "We probe your store the way a real adversary would: authentication, APIs, checkout, and admin, to prove what can actually be reached.",
  },
  {
    number: "2",
    title: "Code and config review",
    body: "Your Magento build, extensions, custom modules, and server configuration reviewed for the flaws automated scanners miss.",
  },
  {
    number: "3",
    title: "Data exposure and PII review",
    body: "We trace where customer records, orders, and payment data live and who can reach them, mapped to your obligations under GDPR, CCPA, and the rest.",
  },
  {
    number: "4",
    title: "Findings report and re-test",
    body: "Every issue ranked by real-world risk, with exact remediation steps, then a re-test once your team has fixed them.",
  },
];

const flow = [
  "Share your domain",
  "We assess, no live changes",
  "Ranked findings report",
  "Fix, then re-test",
];

export function Scope() {
  return (
    <section
      id="scope"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">what we check</div>
          <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[22ch]">
            A full audit, not a{" "}
            <span style={{ color: "var(--sw-mint)" }}>surface scan</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Senior security engineers, not an automated tool, run every audit
            end to end and sign off the findings.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div
                  className="font-head text-[36px] md:text-[44px] leading-none tabular-nums"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {s.number}
                </div>
                <h3 className="mt-5 font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-2">
            {flow.map((f, i) => (
              <div key={f} className="flex items-center gap-3 sm:gap-2">
                <span className="label-code text-white/70">{f}</span>
                {i < flow.length - 1 && (
                  <span aria-hidden className="text-[var(--sw-mint)]">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
