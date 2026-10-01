"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * The 52 invoice discrepancies from the case, counted up on view, beside the
 * kinds of differences OperaLayer flags and what the buyer does with each.
 * The tally strip under the number draws one tick per caught discrepancy.
 */
const FLAGS = [
  {
    flag: "Price differs from the confirmed order",
    check: "Each invoice line price is compared with the price the supplier confirmed.",
    action: "The buyer asks the supplier for a corrected invoice before it is paid.",
  },
  {
    flag: "Quantity over or short",
    check: "Invoiced units are compared with the units that actually arrived.",
    action: "The buyer approves the delivered amount and holds the rest.",
  },
  {
    flag: "Item not on the order",
    check: "Invoice lines with no order line behind them are set aside.",
    action: "The buyer decides whether to accept the item or send it back.",
  },
  {
    flag: "Duplicate invoice",
    check: "An invoice with a supplier reference that was already booked is caught.",
    action: "The copy is rejected so the season is only paid once.",
  },
];

const COUNT = 52;

function Counter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(COUNT);
      return;
    }
    const c = animate(0, COUNT, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="font-head text-[var(--sw-black)] text-[120px] md:text-[168px] leading-[0.85] tracking-[-0.04em] tabular-nums">
        {n}
      </div>
      <div className="mt-6 flex flex-wrap gap-[5px] max-w-[300px]" aria-hidden>
        {Array.from({ length: COUNT }).map((_, i) => (
          <span
            key={i}
            className="h-4 w-[3px] rounded-[1px] transition-colors duration-300"
            style={{ background: i < n ? "var(--sw-orange)" : "rgba(16,19,44,0.12)" }}
          />
        ))}
      </div>
      <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[17px] leading-relaxed max-w-[34ch]">
        Invoice discrepancies the buyers caught before the goods reached the shelves.
      </p>
    </div>
  );
}

export function VarianceFlags() {
  return (
    <section id="flags" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/50 mb-5">Invoice variance flags</div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[52px] leading-[1.05] max-w-[20ch]">
            Invoice differences flagged before{" "}
            <span className="text-[var(--sw-blue)]">anyone pays them</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          <Counter />

          <div className="border-t border-[var(--sw-black)]/15">
            <div className="hidden md:grid grid-cols-[1fr_1.2fr_1.2fr] gap-6 py-3 border-b border-[var(--sw-black)]/15 label-code text-[var(--sw-black)]/45">
              <span>Flag</span>
              <span>What OperaLayer checks</span>
              <span>What the buyer does</span>
            </div>
            {FLAGS.map((f, i) => (
              <motion.div
                key={f.flag}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1fr_1.2fr_1.2fr] gap-2 md:gap-6 py-6 border-b border-[var(--sw-black)]/15"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--sw-orange)]" />
                  <span className="font-head text-[var(--sw-black)] text-[17px] md:text-[18px] leading-[1.3]">
                    {f.flag}
                  </span>
                </div>
                <p className="pl-5 md:pl-0 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {f.check}
                </p>
                <p className="pl-5 md:pl-0 text-[var(--sw-black)] text-[14px] md:text-[15px] leading-relaxed">
                  {f.action}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
