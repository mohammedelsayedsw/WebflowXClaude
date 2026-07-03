"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Step = { number: string; title: string; body: string };

const steps: Step[] = [
  {
    number: "1",
    title: "Magento core upgrade",
    body: "Composer and database upgrade to your target version, with a zero-downtime deploy.",
  },
  {
    number: "2",
    title: "Extension compatibility",
    body: "Third-party modules checked for conflicts and required updates, patched where needed.",
  },
  {
    number: "3",
    title: "Custom modules and integrations",
    body: "Your custom code and ERP, PIM, POS sync reviewed and adjusted so they keep working.",
  },
  {
    number: "4",
    title: "QA and release validation",
    body: "Key customer journeys tested, go-live prepared, and validated after release.",
  },
];

const flow = [
  "Send domain and version",
  "We analyze, no access needed",
  "48h fixed-price estimate",
  "You decide",
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">how it works</div>
          <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[22ch]">
            Four controllable parts,{" "}
            <span style={{ color: "var(--sw-mint)" }}>one fixed price</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            We split the upgrade into clear parts, scope each one, and lock the
            price before any work starts.
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
