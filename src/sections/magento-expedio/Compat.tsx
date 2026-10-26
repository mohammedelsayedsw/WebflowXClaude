import { Reveal } from "@/components/primitives/Reveal";

/*
 * Which Magento setups Expedio runs on, as a checklist: each fact gets a mint
 * check and one line. No images or tiles, so the section scans in seconds.
 * Copy follows the FAQ answers; the theme row keeps the custom-theme caveat.
 */

const ITEMS = [
  {
    title: "Magento 2",
    body: "Magento Open Source, Adobe Commerce and Adobe Commerce Cloud. Not Magento 1.",
  },
  {
    title: "Luma, Hyvä or custom themes",
    body: "Custom themes and the extensions that touch their templates get adapted and tested.",
  },
  {
    title: "Any hosting",
    body: "Built into ReadyMage, where it switches on for an existing store.",
  },
  {
    title: "Nothing changes for your team",
    body: "Admin, catalog, prices, checkout, orders and design stay as they are.",
  },
];

export function Compat() {
  return (
    <section id="compat" className="relative z-10 py-20 md:py-32 scroll-mt-20 border-t border-white/10">
      <div className="wrap">
        <Reveal className="max-w-[46rem]">
          <h2 className="text-[30px] md:text-[44px] lg:text-[50px] leading-[1.06] tracking-[-0.022em] [text-wrap:balance]">
            Magento versions and hosting Expedio works with
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 md:mt-14">
          <ul className="grid gap-x-12 md:grid-cols-2">
            {ITEMS.map((it) => (
              <li key={it.title} className="flex gap-4 py-6 border-t border-white/10">
                <span
                  aria-hidden
                  className="grid place-items-center shrink-0 w-8 h-8 rounded-[2px] text-[var(--sw-ink)] text-[18px] font-bold"
                  style={{ background: "var(--sw-mint)", boxShadow: "0 0 24px rgba(110,247,110,0.35)" }}
                >
                  ✓
                </span>
                <div className="grid gap-1.5">
                  <h3 className="text-white text-[20px] md:text-[22px] leading-[1.25] tracking-[-0.015em] font-[family-name:var(--font-golos)] font-bold">
                    {it.title}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-[1.6]">{it.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
