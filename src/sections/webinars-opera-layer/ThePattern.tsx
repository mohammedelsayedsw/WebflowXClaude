"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

/* The systems everyone already owns, plus the gap that falls between them. */
const systems: { name: string; role: string }[] = [
  { name: "ERP", role: "books, ledger" },
  { name: "CRM", role: "customers" },
  { name: "E-comm", role: "storefront" },
  { name: "WMS", role: "warehouse" },
  { name: "Finance", role: "accounting" },
];

export function ThePattern() {
  return (
    <section
      id="the-pattern"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          {/* LEFT · copy */}
          <div className="max-w-[640px]">
            <Reveal>
              <SectionLabel index="2">The pattern</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[42px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[22ch]">
                You already bought the platforms.{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  Something is still missing.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                Every business at your scale has an ERP, a CRM, an e-commerce
                system, accounting software, a warehouse system. Each one
                handles its core domain well. But something always falls
                between them.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                It ends up in a spreadsheet. In a manual process. In someone&apos;s
                email. In very old software nobody wants to touch. In a backlog
                item that never gets prioritised.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="mt-9 md:mt-10 pl-5 md:pl-6 border-l-2"
                style={{ borderColor: "var(--sw-mint)" }}
              >
                <p className="font-head font-semibold text-[18px] md:text-[22px] leading-[1.3] text-white">
                  The gap belongs to no vendor, which is why it keeps landing on
                  your team.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT · systems + gap diagram */}
          <Reveal delay={0.15}>
            <div className="rounded-[4px] border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <div className="label-code text-white/50 text-[10px] mb-4">
                Your stack today
              </div>
              <div className="space-y-2.5">
                {systems.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="font-head font-semibold text-white text-[14px]">
                      {s.name}
                    </span>
                    <span className="text-white/50 text-[12px]">{s.role}</span>
                  </div>
                ))}
                {/* the gap row */}
                <div
                  className="flex items-center justify-between rounded-[2px] px-4 py-3"
                  style={{
                    background: "rgba(110,247,110,0.08)",
                    border: "1px solid rgba(110,247,110,0.35)",
                  }}
                >
                  <span
                    className="font-head font-semibold text-[14px]"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    &hellip; and?
                  </span>
                  <span
                    className="text-[12px] font-head font-semibold uppercase tracking-[0.08em]"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    the gaps
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
