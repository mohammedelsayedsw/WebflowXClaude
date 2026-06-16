"use client";

import { Reveal } from "@/components/primitives/Reveal";

const storefronts: { name: string; apps: string; drift?: boolean }[] = [
  { name: "Shopify Plus UK", apps: "apps: 4" },
  { name: "Shopify Plus EU", apps: "apps: 3", drift: true },
  { name: "Shopify Advanced US", apps: "apps: 3" },
  { name: "Shopify Plus B2B", apps: "apps: 3" },
  { name: "Shopify Outlet", apps: "apps: 2" },
];

const backOffice: string[] = [
  "PIM",
  "ERP",
  "OMS",
  "WMS",
  "CMS",
  "BI",
  "custom workflows",
];

function Plate({
  label,
  footnote,
  children,
}: {
  label: string;
  footnote: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bracket-frame relative rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-6 md:p-10">
      <span className="bracket-bl" />
      <span className="bracket-br" />
      <div className="flex items-center justify-between mb-8">
        <span className="label-code text-[var(--sw-black)]/60">{label}</span>
        <span className="label-code text-[var(--sw-black)]/55">{footnote}</span>
      </div>
      {children}
    </div>
  );
}

export function EcosystemMap() {
  return (
    <section className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            Fig.2 · ecosystem map
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            Many Shopify installations,{" "}
            <span className="text-[var(--sw-blue)]">
              one connected operating layer
            </span>
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Storefronts stay separate. The operating layer connects what they
            share. PIM, ERP, OMS, WMS, CMS, BI, the app stack, and your custom
            workflows.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 md:mt-20">
            <Plate label="Connected operating layer" footnote="Fig.2">
              <div className="grid gap-6 md:gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                {/* storefronts */}
                <div className="space-y-3">
                  <div className="label-code text-[var(--sw-black)]/55 mb-1">
                    storefronts stay separate
                  </div>
                  {storefronts.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-[2px] border bg-white px-4 py-3 flex items-center justify-between gap-3"
                      style={{
                        borderColor: s.drift
                          ? "rgba(224,79,79,0.55)"
                          : "rgba(16,19,44,0.12)",
                      }}
                    >
                      <span className="font-head text-[var(--sw-black)] text-[14px] md:text-[15px]">
                        {s.name}
                      </span>
                      <span className="label-code text-[var(--sw-black)]/60 text-[10px]">
                        {s.apps}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-1">
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ background: "#e04f4f" }}
                    />
                    <span className="text-[12px] text-[var(--sw-black)]/60 leading-snug">
                      app installed differently in one store
                    </span>
                  </div>
                </div>

                {/* spine */}
                <div className="flex md:flex-col items-center justify-center px-2">
                  <div
                    className="rounded-[2px] w-full md:w-auto md:h-full flex items-center justify-center px-5 py-4 md:py-8 text-center overflow-hidden"
                    style={{
                      background: "rgba(63, 74, 175, 0.08)",
                      border: "1px solid rgba(63, 74, 175, 0.35)",
                    }}
                  >
                    <div className="md:[writing-mode:vertical-rl] md:rotate-180">
                      <span className="label-code text-[var(--sw-blue)]">
                        OperaLayer
                      </span>
                    </div>
                  </div>
                </div>

                {/* back-office */}
                <div className="space-y-3">
                  <div className="label-code text-[var(--sw-black)]/55 mb-1">
                    shared or connected systems
                  </div>
                  {backOffice.map((b) => (
                    <div
                      key={b}
                      className="rounded-[2px] border border-[var(--sw-black)]/10 bg-white/70 px-4 py-3"
                    >
                      <span className="text-[var(--sw-black)]/80 text-[14px] md:text-[15px]">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center label-code text-[var(--sw-black)]/55">
                5 storefronts · 14+ apps · app cost per store · PIM / ERP / OMS /
                WMS / CMS / BI
              </div>
            </Plate>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
