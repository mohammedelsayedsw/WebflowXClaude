"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnSecondary } from "@/components/primitives/buttonStyles";
import { READYMAGE_URL } from "./status";

/** From readymage.com. */
const INCLUDED = [
  "Sansec malware protection",
  "WAF and DDoS defense",
  "Auto-healing, auto-scaling Kubernetes",
  "24/7 expert support",
  "PCI DSS, ISO 27001, ISO 27017",
];

export function ReadyMage() {
  return (
    <section id="readymage" className="relative z-10 py-24 md:py-32 border-t border-white/10">
      <div className="wrap">
        <div className="grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/45">Hosting</div>
            <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
              The same team runs{" "}
              <span style={{ color: "var(--sw-mint)" }}>ReadyMage</span>
            </h2>
            <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[56ch]">
              ReadyMage is managed Magento and Adobe Commerce hosting, created
              within scandiweb and run as one unit with it. Sansec malware
              protection, a WAF, and DDoS defense are part of the platform, not{" "}
              <span className="whitespace-nowrap">add-ons</span>. If you would rather not face the next zero-day on your
              own infrastructure, ReadyMage starts with a free infrastructure
              audit and a 30-day migration plan.
            </p>
            <div className="mt-8">
              <a
                href={READYMAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
              >
                readymage.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="label-code text-white/45 pb-4 border-b border-white/10">Included with hosting</div>
            <ul>
              {INCLUDED.map((t) => (
                <li
                  key={t}
                  className="py-4 border-b border-white/10 font-head font-semibold text-white text-[16px] md:text-[18px] leading-[1.25]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
