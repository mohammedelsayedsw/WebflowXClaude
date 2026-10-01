"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

function Count({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    const c = animate(0, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {v}
      {suffix}
    </span>
  );
}

type CaseStat = { n: number; prefix?: string; suffix?: string; label: string };

const CASES: { slug: string; system: string; client: string; title: string; gap: string; stats: CaseStat[] }[] = [
  {
    slug: "supplier-purchasing",
    system: "Microsoft Business Central",
    client: "Baltic sports and apparel retailer",
    title: "Purchasing across more than 50 supplier brands",
    gap: "Seasonal commitments, brand reconciliation, and invoice variances lived in spreadsheets and email, outside the ERP.",
    stats: [
      { n: 34, prefix: "€", label: "million of SS26 purchasing tracked live across every supplier brand" },
      { n: 52, label: "invoice discrepancies caught before the goods reached the shelves" },
    ],
  },
  {
    slug: "pricing-control",
    system: "Magento (Adobe Commerce)",
    client: "US specialty retailer selling direct to consumers",
    title: "Prices for every one of the 50 US states",
    gap: "State-by-state pricing rules and several margin types lived in Excel, and one person kept the whole thing running.",
    stats: [
      { n: 50, label: "US states priced live, with the Excel workbook retired" },
      { n: 8, label: "margin types recalculated for each state as soon as a rule changes" },
    ],
  },
  {
    slug: "invoice-matching",
    system: "Microsoft Dynamics NAV",
    client: "B2B electrical and industrial supplier",
    title: "Invoices from about 100 vendors, each in its own format",
    gap: "Two people spent every morning checking supplier PDFs against purchase orders line by line.",
    stats: [
      { n: 100, prefix: "~", label: "vendor PDF formats read by one extraction module" },
      { n: 87, suffix: "%", label: "of invoices checked automatically, with exceptions sent to a person" },
    ],
  },
];

export function Cases() {
  return (
    <section id="cases" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/50 mb-5">Client work</div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[18ch]">
            Three gaps we closed for clients in{" "}
            <span className="text-[var(--sw-blue)]">three industries</span>
          </h2>
          <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch]">
            In each case a platform handled the core of the business well. We built
            the app for the part it was never designed to handle.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-16 border-t border-[var(--sw-black)]/20">
          {CASES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <a
                href={assetUrl(`/operalayer/${c.slug}`)}
                className="group grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 py-10 md:py-12 border-b border-[var(--sw-black)]/15"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="label-code text-[var(--sw-blue)]">{c.system}</span>
                    <span className="label-code text-[var(--sw-black)]/45">{c.client}</span>
                  </div>
                  <h3 className="mt-4 font-head text-[var(--sw-black)] text-[24px] md:text-[32px] leading-[1.12] max-w-[22ch] group-hover:text-[var(--sw-blue)] transition">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[15px] md:text-[16px] text-[var(--sw-black)]/65 leading-relaxed max-w-[50ch]">{c.gap}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-head font-semibold text-[15px] text-[var(--sw-blue)]">
                    See the module <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6 md:gap-10 self-center">
                  {c.stats.map((s) => (
                    <div key={s.label} className="border-l border-[var(--sw-black)]/15 pl-5">
                      <div className="font-head text-[var(--sw-black)] text-[44px] md:text-[60px] leading-none tracking-[-0.02em]">
                        <Count to={s.n} prefix={s.prefix} suffix={s.suffix} />
                      </div>
                      <div className="mt-3 text-[13px] md:text-[14px] text-[var(--sw-black)]/60 leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
