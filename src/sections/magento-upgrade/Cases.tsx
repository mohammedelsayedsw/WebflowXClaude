"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

type Case = {
  /** the figure counts up from `from` to `to` once, when it scrolls into view */
  from: number;
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  metric: string;
  store: string;
};

const cases: Case[] = [
  {
    from: 0,
    to: 110.9,
    decimals: 1,
    prefix: "+",
    suffix: "%",
    metric: "Revenue, year over year",
    store: "Ten years of order history carried onto a supported release",
  },
  {
    from: 0,
    to: 86,
    prefix: "+",
    suffix: "%",
    metric: "Cart-to-view rate",
    store: "A national telecom rebuilt on Magento 2.4 and Hyvä",
  },
  {
    from: 0,
    to: 39,
    prefix: "+",
    suffix: "%",
    metric: "Revenue",
    store: "A 134-boutique chocolate brand, 30+ extensions, upgraded to 2.4.7",
  },
  {
    from: 85,
    to: 99,
    prefix: "85 → ",
    metric: "PageSpeed score, product listing",
    store: "A frontend rebuild across 160+ Nordic retail stores",
  },
  {
    from: 1,
    to: 2.5,
    decimals: 1,
    suffix: "x",
    metric: "PageSpeed performance score",
    store: "A 22,000-SKU store, upgraded two release lines",
  },
  {
    from: 0,
    to: 95,
    suffix: " days",
    metric: "Four markets launched, end to end",
    store: "First orders two minutes after go-live",
  },
];

function Figure({ c }: { c: Case }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [value, setValue] = useState(c.from);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(c.to);
      return;
    }
    const controls = animate(c.from, c.to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setValue,
    });
    return () => controls.stop();
  }, [inView, c.from, c.to]);

  return (
    <span ref={ref} className="tabular-nums">
      {c.prefix}
      {value.toFixed(c.decimals ?? 0)}
      {c.suffix}
    </span>
  );
}

/** Six stores, one figure each. Text in a grid, hairlines between, no boxes. */
export function Cases() {
  return (
    <section id="proof" className="relative z-10 bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[20ch]">
            Stores that performed better after the upgrade
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14">
          {cases.map((c, i) => (
            <Reveal key={c.store} delay={i * 0.07}>
              <div className="h-full border-t border-[var(--sw-black)]/12 pt-7 pb-10 md:pb-14">
                <div className="font-head font-bold text-[var(--sw-black)] text-[56px] md:text-[72px] leading-[0.95] tracking-[-0.035em] whitespace-nowrap">
                  <Figure c={c} />
                </div>
                <div className="mt-4 font-head font-semibold text-[var(--sw-blue)] text-[16px] md:text-[17px]">
                  {c.metric}
                </div>
                <p className="mt-2 text-[var(--sw-black)]/60 text-[15px] leading-relaxed max-w-[34ch]">
                  {c.store}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
