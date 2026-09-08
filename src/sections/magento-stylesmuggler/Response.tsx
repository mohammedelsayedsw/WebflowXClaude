"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { PATCH_DATE } from "./status";

const STEPS: { title: string; body: string }[] = [
  {
    title: "Check for signs of compromise",
    body:
      "We inspect your store for malicious files and suspicious activity. If we find anything, you hear about it first.",
  },
  {
    title: "Install the fix",
    body:
      `We install Adobe’s ${PATCH_DATE} hotfix and rotate the encryption key and credentials. Versions Adobe no longer patches get an upgrade plan.`,
  },
  {
    title: "Test the shopping journey",
    body:
      "Cart and checkout by hand, then our automated tests.",
  },
];

export function Response() {
  return (
    <section id="response" className="relative z-10 bg-[var(--sw-black)] py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
            How we’re protecting{" "}
            <span style={{ color: "var(--sw-mint)" }}>your store</span>
          </h2>
        </Reveal>

        <ol className="mt-10 md:mt-14 border-t border-white/10">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <li className="grid grid-cols-[44px_1fr] md:grid-cols-[72px_minmax(0,5fr)_minmax(0,7fr)] gap-x-4 md:gap-x-10 gap-y-2 py-6 md:py-7 border-b border-white/10 items-baseline">
                <div
                  className="font-head text-[28px] md:text-[36px] leading-none tabular-nums row-span-2 md:row-span-1"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-head font-semibold text-white text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[56ch] col-start-2 md:col-start-3">
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
