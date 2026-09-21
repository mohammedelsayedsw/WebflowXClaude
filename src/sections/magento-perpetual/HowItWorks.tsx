"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";

type Stage = { title: string; line: string };

const stages: Stage[] = [
  { title: "Upgrade audit", line: "Every module and integration at risk, mapped." },
  { title: "Staging upgrade", line: "Built on a copy. Production keeps selling." },
  { title: "Regression testing", line: "Checkout and every integration, tested before release." },
  { title: "Zero-downtime go-live", line: "A window you pick, with a rollback ready." },
  { title: "Post-launch check", line: "Core Web Vitals measured again, live." },
];

/** A closed track: clockwise on desktop, counter-clockwise on phones so the mote runs down the list. */
function track(w: number, h: number, r: number, ccw: boolean) {
  if (ccw) {
    return `M ${r} 0 A ${r} ${r} 0 0 0 0 ${r} V ${h - r} A ${r} ${r} 0 0 0 ${r} ${h} H ${w - r} A ${r} ${r} 0 0 0 ${w} ${h - r} V ${r} A ${r} ${r} 0 0 0 ${w - r} 0 Z`;
  }
  return `M ${r} 0 H ${w - r} A ${r} ${r} 0 0 1 ${w} ${r} V ${h - r} A ${r} ${r} 0 0 1 ${w - r} ${h} H ${r} A ${r} ${r} 0 0 1 0 ${h - r} V ${r} A ${r} ${r} 0 0 1 ${r} 0 Z`;
}

/**
 * The five stages sit on a closed track, because the fifth is followed by the
 * first: the next release runs the same loop. A mote keeps going round it.
 * The track is drawn at the measured size of the list, so its corners stay
 * round at every width. Set on the flat beige ground, so the numbered nodes and
 * the label can sit on the line and hide it behind them.
 */
export function HowItWorks() {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const vertical = size !== null && size.w < 768;
  const r = vertical ? 36 : 84;
  const d = size ? track(size.w, size.h, r, vertical) : "";

  return (
    <section id="how" className="relative z-10 bg-[var(--sw-beige)] py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
            How your Magento upgrade works
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div ref={box} className="relative mt-16 md:mt-24">
            {size && (
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-visible"
                width={size.w}
                height={size.h}
                viewBox={`0 0 ${size.w} ${size.h}`}
                fill="none"
              >
                <path d={d} stroke="rgba(16,19,44,0.2)" strokeWidth="1" />
                <g className="motion-reduce:hidden">
                  <circle r="14" fill="rgba(63,74,175,0.14)">
                    <animateMotion dur="16s" repeatCount="indefinite" path={d} />
                  </circle>
                  <circle r="4" fill="var(--sw-blue)">
                    <animateMotion dur="16s" repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              </svg>
            )}

            <ol className="relative grid md:grid-cols-5 gap-y-9 md:gap-y-0 py-[36px] md:py-0 md:px-[84px] md:pb-20">
              {stages.map((s, i) => (
                <li key={s.title} className="relative pl-9 md:pl-0 md:pr-6 md:pt-11">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 -translate-x-1/2 md:left-[14px] md:-translate-y-1/2 grid h-7 w-7 place-items-center rounded-full border bg-[var(--sw-beige)] font-head text-[13px] font-semibold tabular-nums"
                    style={{
                      borderColor:
                        i === stages.length - 1 ? "var(--sw-blue)" : "rgba(16,19,44,0.35)",
                      color: i === stages.length - 1 ? "var(--sw-blue)" : "var(--sw-black)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-head text-[var(--sw-black)] text-[19px] md:text-[20px] leading-[1.2]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[var(--sw-black)]/65 text-[15px] leading-relaxed max-w-[30ch]">
                    {s.line}
                  </p>
                </li>
              ))}
            </ol>

            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-[var(--sw-beige)] px-4 whitespace-nowrap">
              <span className="label-code" style={{ color: "var(--sw-blue)" }}>
                Then the next release. $0.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
