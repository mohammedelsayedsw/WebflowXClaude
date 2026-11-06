"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { LAVENDER, LINE_LIGHT, SECTION_Y } from "./ui";

const H2_LIGHT =
  "font-head font-bold text-[var(--sw-black)] text-[30px] sm:text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.02em]";

const NUMBERS: { who: string; logo: string; logoClass: string; tag: string; value: number; suffix: string; text: string }[] = [
  {
    who: "Amazon",
    logo: "/chat-to-buy/logos/amazon.svg",
    logoClass: "h-[30px] md:h-[34px] translate-y-[5px]",
    tag: "Has conversational commerce",
    value: 60,
    suffix: "%+",
    text: "more likely to buy when shoppers use Amazon’s AI assistant",
  },
  {
    who: "Byggmax",
    logo: "/chat-to-buy/logos/byggmax.svg",
    logoClass: "h-[17px] md:h-[19px]",
    tag: "Uses Chat to Buy",
    value: 5,
    suffix: "×",
    text: "longer engagement with an AI project assistant that knows DIY builds and the full catalog",
  },
  {
    who: "Zorro",
    logo: "/chat-to-buy/logos/zorro.png",
    logoClass: "h-[21px] md:h-[24px]",
    tag: "Uses Chat to Buy",
    value: 32,
    suffix: "%",
    text: "of customers who had stopped buying came back, through an AI concierge on WhatsApp",
  },
];

/**
 * Counts from zero to the real value once, when the number comes into view. The server HTML carries the real value
 * (what crawlers and AI tools read); the browser sets it to zero while it is still hidden, then writes the count to the DOM.
 */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (!inView) {
      el.textContent = `0${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduced, value, suffix]);

  return <span ref={ref}>{`${value}${suffix}`}</span>;
}

/** Three real numbers, one per column split by hairlines: Amazon's figure, then the two stores that already run Chat to Buy. */
export function Proof() {
  return (
    <section id="results" className={`relative z-10 ${SECTION_Y}`} style={{ background: LAVENDER }}>
      <div className="wrap w-full">
        <Reveal>
          <h2 className={H2_LIGHT}>
            Shoppers who chat{" "}
            <span className="inline-block whitespace-nowrap text-[var(--sw-blue)]">buy more</span>
          </h2>
        </Reveal>

        <div className={`mt-6 md:mt-[clamp(24px,5vh,56px)] grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 border-t ${LINE_LIGHT}`}>
          {NUMBERS.map((n, i) => (
            <Reveal
              key={n.who}
              delay={i * 0.07}
              className={`py-4 md:py-0 md:pt-[clamp(20px,4vh,40px)] md:px-8 lg:px-10 ${i ? `border-t md:border-t-0 md:border-l ${LINE_LIGHT}` : "md:pl-0"}`}
            >
              <div className="flex h-9 items-center justify-between gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assetUrl(n.logo)} alt={n.who} className={`${n.logoClass} w-auto`} />
                <span className="text-right text-[12px] md:text-[13px] leading-snug text-[var(--sw-black)]/50">{n.tag}</span>
              </div>
              <div className="mt-2 md:mt-[clamp(10px,2.4vh,24px)] font-head font-bold text-[var(--sw-blue)] text-[44px] md:text-[clamp(48px,min(6vw,10vh),88px)] leading-none tracking-[-0.04em] tabular-nums">
                <CountUp value={n.value} suffix={n.suffix} />
              </div>
              <p className="mt-2 md:mt-4 text-[15px] md:text-[17px] leading-snug text-[var(--sw-black)]/75 max-w-[30ch]">{n.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className={`mt-6 md:mt-[clamp(24px,5vh,48px)] pt-5 border-t ${LINE_LIGHT} text-[15px] text-[var(--sw-black)]/60`}>
            Works for B2C and B2B stores, on any eCommerce platform.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
