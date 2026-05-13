"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "20+", label: "years building on Magento / Adobe Commerce" },
  { value: "700+", label: "merchants we&apos;ve supported, migrated, or scaled" },
  { value: "5×", label: "rate cut we made in 2008 &mdash; the precedent for this" },
  { value: "Adobe", label: "Solution Partner since the Magento 1.x era" },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_1fr] items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">
              this isn&apos;t a discount. it&apos;s a playbook.
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[20ch]">
              We&apos;ve done this once before, in{" "}
              <span style={{ color: "var(--sw-mint)" }}>2008</span>.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] md:text-[17px] text-white/85 leading-relaxed max-w-[58ch]">
              <p>
                When the 2008 financial crisis hit, every merchant we worked
                with was reassessing every line item on their spend. Including
                ours.
              </p>
              <p>
                We cut hourly rates 5×, structured the offer around the
                merchants we wanted to win, and stayed there until the market
                normalized. Inbound went up. Margins held because our delivery
                model fit the rate. The merchants we won then are still
                merchants we work with today.
              </p>
              <p>
                The market is reassessing again. The Magento Support Takeover
                is the 2026 version of the same play &mdash; lower rates,
                productized offerings, structured for the size of the merchant
                on the other end.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="rounded-[4px] border border-white/10 p-7 md:p-9"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
              }}
            >
              <div className="label-code text-white/55 mb-6">
                what backs the rate
              </div>
              <div className="grid grid-cols-2 gap-5 md:gap-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[2px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="font-head text-white text-[28px] md:text-[34px] leading-none tabular-nums">
                      {s.value}
                    </div>
                    <div
                      className="label-code text-white/55 mt-3"
                      dangerouslySetInnerHTML={{ __html: s.label }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-white/10">
                <blockquote className="font-head text-white text-[18px] md:text-[20px] leading-[1.35]">
                  &ldquo;The price isn&apos;t the discount.{" "}
                  <span style={{ color: "var(--sw-mint)" }}>
                    It&apos;s where the market is going.
                  </span>{" "}
                  We&apos;d rather get there first than wait for the next
                  contract cycle.&rdquo;
                </blockquote>
                <div className="label-code text-white/55 mt-5">
                  scandiweb executive board
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
