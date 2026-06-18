"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "3,000+", label: "Magento upgrades delivered" },
  { value: "Gold", label: "Adobe Solution Partner" },
  { value: "700+", label: "brands supported worldwide" },
  { value: "Senior", label: "engineers on every upgrade, never juniors" },
];

export function Proof() {
  return (
    <section id="proof" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_1fr] items-start">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">
              who runs it
            </div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[20ch]">
              Built on{" "}
              <span className="text-[var(--sw-blue)]">3,000+ Magento upgrades</span>
              .
            </h2>

            <div className="mt-8 space-y-5 text-[15px] md:text-[17px] text-[var(--sw-black)]/75 leading-relaxed max-w-[58ch]">
              <p>
                We have delivered Magento upgrades across B2B stores with account
                pricing and ERP links, high-traffic retail, multi-store setups,
                and Adobe Commerce at scale. Senior engineers run every one.
              </p>
              <p>
                The repetitive work, the compatibility scan, code review, and
                test generation, runs on Magento upgrade agents we built from our
                own delivery. They are not a wrapper around a generic tool. A
                senior architect signs off on every change before it ships.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-9">
              <div className="label-code text-[var(--sw-black)]/55 mb-6">
                what backs the price
              </div>
              <div className="grid grid-cols-2 gap-5 md:gap-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[2px] border border-[var(--sw-black)]/10 bg-[var(--sw-black)]/[0.02] p-5"
                  >
                    <div className="font-head text-[var(--sw-black)] text-[26px] md:text-[32px] leading-none tabular-nums">
                      {s.value}
                    </div>
                    <div className="label-code text-[var(--sw-black)]/55 mt-3 leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-[var(--sw-black)]/10">
                <blockquote className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-[1.35]">
                  The scan is automated.{" "}
                  <span className="text-[var(--sw-blue)]">
                    A senior Magento architect signs off on every change before
                    it ships.
                  </span>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
