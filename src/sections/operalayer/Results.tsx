"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Count({ to, pre = "", post = "" }: { to: number; pre?: string; post?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const run = useInView(ref, { once: true, amount: 0.8 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
    const c = animate(0, to, { duration: 1.4, ease, onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [run, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {pre}
      {v}
      <span className="text-[0.5em] tracking-[-0.01em]">{post}</span>
    </span>
  );
}

const ROWS = [
  {
    n: 87,
    post: "%",
    line: "of supplier invoices pass without anyone touching them",
    who: "B2B electrical supplier, Microsoft Dynamics NAV",
    href: "/operalayer/invoice-matching",
    app: "Invoice matching",
  },
  {
    n: 34,
    pre: "€",
    post: " million",
    line: "of seasonal purchasing tracked across more than 50 supplier brands",
    who: "Baltic sports retailer, Microsoft Business Central",
    href: "/operalayer/supplier-purchasing",
    app: "Supplier purchasing",
  },
  {
    n: 50,
    post: " states",
    line: "priced from one set of rules and sent to the store on schedule",
    who: "US specialty retailer, Magento",
    href: "/operalayer/pricing-control",
    app: "Pricing control",
  },
];

export function Results() {
  return (
    <section id="results" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[50px] leading-[1.05] max-w-[20ch]">
          Three OperaLayer apps running at clients today
        </h2>
        <div className="mt-14 border-t border-[var(--sw-black)]/15">
          {ROWS.map((r) => (
            <a
              key={r.app}
              href={assetUrl(r.href)}
              className="group grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_auto] gap-x-12 gap-y-3 items-center py-9 md:py-11 border-b border-[var(--sw-black)]/15"
            >
              <div className="font-head text-[var(--sw-black)] text-[56px] md:text-[80px] leading-none tracking-[-0.03em]">
                <Count to={r.n} pre={r.pre} post={r.post} />
              </div>
              <div>
                <p className="text-[var(--sw-black)] text-[18px] md:text-[21px] leading-snug max-w-[34ch]">{r.line}</p>
                <p className="mt-2 text-[var(--sw-black)]/50 text-[15px]">{r.who}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-head font-semibold text-[16px] text-[var(--sw-blue)] whitespace-nowrap">
                {r.app}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
