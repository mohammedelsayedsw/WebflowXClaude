"use client";

import { Reveal } from "@/components/primitives/Reveal";

const certs = ["ISO 27001", "ISO 27017", "ISO 9001", "PCI DSS"];

const facts = [
  { value: "2,100+", label: "Magento projects delivered" },
  { value: "894+", label: "Magento and Adobe Commerce certifications" },
  { value: "OWASP", label: "based testing methodology" },
  { value: "Gold", label: "Adobe Commerce partner, Hyvä Platinum" },
];

export function Proof() {
  return (
    <section id="why" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            why scandiweb
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[24ch]">
            The team that runs your platform,{" "}
            <span className="text-[var(--sw-blue)]">securing it</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            We build and run enterprise Magento and Adobe Commerce every day. The
            same senior engineers audit it, under formal security certifications
            and an OWASP-based methodology.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 flex flex-wrap gap-3 md:gap-4">
          {certs.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <span className="rounded-[2px] border border-[var(--sw-black)]/15 bg-white px-5 py-3 font-head text-[15px] md:text-[16px] font-bold text-[var(--sw-black)]/80">
                {c}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.06}>
              <div className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6">
                <div className="font-head text-[var(--sw-black)] text-[28px] md:text-[34px] leading-none">
                  {f.value}
                </div>
                <div className="label-code text-[var(--sw-black)]/55 mt-3">
                  {f.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
