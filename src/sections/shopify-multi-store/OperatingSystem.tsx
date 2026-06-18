"use client";

import { Reveal } from "@/components/primitives/Reveal";

const stores = [
  { name: "UK Plus", plan: "Shopify Plus" },
  { name: "EU Plus", plan: "Shopify Plus" },
  { name: "US Advanced", plan: "Advanced" },
  { name: "B2B Plus", plan: "Shopify Plus" },
];

const systems = [
  "apps & app cost",
  "tracking & events",
  "storefront monitoring",
  "custom apps & mobile",
  "CMS / PIM",
  "ERP / OMS / WMS",
  "data & reporting",
  "product feeds",
];

/* Vertical connector between the stacked bands. A single centered spine,
   capped with a filled node at each junction so it reads as a deliberate
   connection (and any sub-pixel gap is hidden), instead of a floating
   hairline. Self-contained and centered, so it never misaligns across
   breakpoints. */
function Connector() {
  return (
    <div className="relative h-12 md:h-14" aria-hidden>
      <span className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[var(--sw-blue)]/35" />
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--sw-blue)]/60" />
      <span className="absolute left-1/2 bottom-0 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--sw-blue)]/60" />
    </div>
  );
}

export function OperatingSystem() {
  return (
    <section id="system" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">how it works</div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Multiple Shopify stores,{" "}
            <span className="text-[var(--sw-blue)]">one connected operating view</span>
          </h2>
          <p className="mt-7 max-w-[62ch] text-[16px] md:text-[18px] leading-relaxed text-[var(--sw-black)]/70">
            Each store keeps its own storefront, theme, and checkout. The operating
            layer sits underneath and connects the systems your stores share, so
            your team sees one picture instead of five.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 md:mt-20 rounded-[12px] border border-[var(--sw-black)]/10 bg-white/70 p-6 md:p-10">
            {/* stores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stores.map((s) => (
                <div
                  key={s.name}
                  className="rounded-[6px] border border-[var(--sw-black)]/12 bg-white px-4 py-4 text-center"
                >
                  <div className="font-head font-semibold text-[var(--sw-black)] text-[16px] md:text-[18px] leading-tight">
                    {s.name}
                  </div>
                  <div className="label-code text-[var(--sw-black)]/45 text-[10px] mt-1.5">
                    {s.plan}
                  </div>
                </div>
              ))}
            </div>

            <Connector />

            {/* operating layer */}
            <div
              className="rounded-[6px] px-5 py-5 md:py-6 text-center"
              style={{ background: "rgba(63,74,175,0.07)", border: "1px solid rgba(63,74,175,0.3)" }}
            >
              <div className="label-code text-[var(--sw-blue)]">OperaLayer</div>
              <div className="font-head font-semibold text-[var(--sw-black)] text-[16px] md:text-[19px] mt-1.5">
                one connected view across every store
              </div>
            </div>

            <Connector />

            {/* systems */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {systems.map((sys) => (
                <div
                  key={sys}
                  className="rounded-[6px] border border-[var(--sw-black)]/10 bg-white px-3 py-3.5 text-center"
                >
                  <span className="text-[var(--sw-black)]/75 text-[13px] md:text-[14px] leading-snug">
                    {sys}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
