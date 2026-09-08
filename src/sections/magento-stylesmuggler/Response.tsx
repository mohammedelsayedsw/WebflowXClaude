"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { PATCH_DATE } from "./status";

const STEPS: { title: string; body: string }[] = [
  {
    title: "Check for signs of compromise",
    body:
      "We inspect your store for malicious files, suspicious background activity, and other known signs of this attack. If we find anything concerning, we’ll explain what we found and the next steps.",
  },
  {
    title: "Install the fix",
    body:
      `We review, test, and install Adobe’s ${PATCH_DATE} hotfix, rotate the encryption key and credentials as Adobe requires, and keep temporary protection in place until that is done. Stores on a version Adobe no longer patches keep the protection and get an upgrade plan.`,
  },
  {
    title: "Test the shopping journey",
    body:
      "We manually test key shopping steps, including cart and checkout, and run our core automated tests to check that the protective changes work with your store.",
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
          <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[52ch]">
            Our team is treating this as a priority, with three areas of focus:
          </p>
        </Reveal>

        <ol className="mt-12 md:mt-16 border-t border-white/10">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <li className="grid grid-cols-[56px_1fr] md:grid-cols-[120px_minmax(0,5fr)_minmax(0,7fr)] gap-x-4 md:gap-x-12 gap-y-3 py-8 md:py-10 border-b border-white/10">
                <div
                  className="font-head text-[40px] md:text-[64px] leading-none tabular-nums row-span-2 md:row-span-1"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-head font-semibold text-white text-[22px] md:text-[28px] leading-[1.15] tracking-[-0.01em] self-start">
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
