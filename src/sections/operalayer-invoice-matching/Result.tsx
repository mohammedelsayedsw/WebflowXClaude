"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { Modules } from "@/sections/operalayer/shared/Modules";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Count({ to }: { to: number }) {
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
      {v}
    </span>
  );
}

export function Result() {
  return (
    <section id="result" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-16 gap-y-8 items-end">
          <div className="font-head text-[var(--sw-black)] text-[120px] md:text-[184px] leading-[0.85] tracking-[-0.04em]">
            <Count to={87} />
            <span className="text-[0.4em] tracking-[-0.01em]">%</span>
          </div>
          <div className="pb-2">
            <p className="font-head text-[var(--sw-black)] text-[24px] md:text-[30px] leading-[1.2] max-w-[22ch]">
              of invoices go through without anyone touching them
            </p>
            <p className="mt-5 text-[var(--sw-black)]/65 text-[17px] leading-relaxed max-w-[42ch]">
              A B2B electrical supplier gets invoices from about a hundred vendors. Two
              people used to check them by hand every morning. Now they only see the
              exceptions.
            </p>
          </div>
        </div>
        <Modules current="invoice-matching" />
      </div>
    </section>
  );
}
