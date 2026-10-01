"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { STATE_PRICES, TILES, usd } from "./data";

/** Ticks per loop: the wave crosses the 11 x 8 grid in 18 ticks, then holds. */
const WAVE_END = 18;
const LOOP = 34;

function PricingMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [tick, setTick] = useState(0);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTick(LOOP);
      return;
    }
    if (!inView) return;
    const t = window.setInterval(() => {
      setTick((v) => {
        if (v + 1 >= LOOP) {
          setLoop((l) => l + 1);
          return 0;
        }
        return v + 1;
      });
    }, 110);
    return () => window.clearInterval(t);
  }, [inView]);

  const focus = STATE_PRICES[loop % STATE_PRICES.length];
  const updated = TILES.filter(([, c, r]) => c + r <= tick).length;
  const done = tick >= WAVE_END;

  return (
    <div ref={ref}>
      <AppFrame module="pricing-control" status={done ? "Export scheduled 02:00" : "Recalculating"}>
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_230px]">
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="label-code text-white/55">Price change · Product 1042</div>
              <div className="label-code text-white/55 tabular-nums">
                {updated}/50 states
              </div>
            </div>
            <div
              className="grid gap-[3px] md:gap-1"
              style={{ gridTemplateColumns: "repeat(11, minmax(0, 1fr))" }}
            >
              {TILES.map(([code, c, r]) => {
                const on = c + r <= tick;
                const isFocus = code === focus.code && done;
                return (
                  <div
                    key={code}
                    className="aspect-square rounded-[2px] flex items-center justify-center font-head font-semibold text-[8px] sm:text-[10px] md:text-[11px] transition-colors duration-300"
                    style={{
                      gridColumn: c + 1,
                      gridRow: r + 1,
                      background: on ? "rgba(110,247,110,0.82)" : "rgba(255,255,255,0.06)",
                      color: on ? "var(--sw-black)" : "rgba(255,255,255,0.45)",
                      outline: isFocus ? "2px solid #fff" : "none",
                      outlineOffset: 1,
                    }}
                  >
                    {code}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-white/10 p-4 md:p-6 flex flex-col gap-5">
            <div>
              <div className="label-code text-white/45">State</div>
              <motion.div
                key={focus.code}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-head text-white text-[22px] mt-1"
              >
                {focus.name}
              </motion.div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
              <div>
                <div className="label-code text-white/45">Current price</div>
                <div className="font-head text-white/55 text-[20px] mt-1 tabular-nums line-through decoration-white/30">
                  {usd(focus.previous)}
                </div>
              </div>
              <div>
                <div className="label-code text-white/45">New price</div>
                <div
                  className="font-head text-[28px] mt-1 tabular-nums transition-colors"
                  style={{ color: done ? "var(--sw-mint)" : "rgba(255,255,255,0.3)" }}
                >
                  {done ? usd(focus.shelf) : "···"}
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4 text-[13px] text-white/60 leading-snug">
              Margin type {focus.marginType} of 8, recalculated with the state excise rule.
            </div>
          </div>
        </div>
      </AppFrame>
      <div className="label-code text-white/35 mt-3 text-right">Example figures</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 700px at 70% 10%, #1d2566 0%, #141a48 38%, #0c1030 72%, #080b22 100%)",
        }}
      />
      <div className="wrap relative z-10 pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/25 px-3.5 py-1.5 mb-8">
              <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                OperaLayer · Pricing control
              </span>
            </div>
            <h1 className="font-head text-white text-[38px] sm:text-[50px] md:text-[60px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
              State-by-State{" "}
              <span style={{ color: "var(--sw-mint)" }}>Pricing Control</span> for
              Magento
            </h1>
            <p className="mt-7 text-[17px] md:text-[19px] text-white/75 max-w-[48ch] leading-relaxed">
              OperaLayer works out the price of every product in every US state
              and sends the updates to your Magento (Adobe Commerce) store on a
              schedule you approve.
            </p>
            <p className="mt-4 text-[17px] md:text-[19px] text-white/75 max-w-[48ch] leading-relaxed">
              Your pricing rules stop living in one person&apos;s spreadsheet.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
                Talk to us about pricing
              </a>
              <a
                href="#price"
                onClick={scrollToSection("price")}
                className="font-head font-semibold text-[15px] text-white/75 hover:text-white transition"
              >
                See how a price is built
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 max-w-[440px] border-t border-white/10">
              <div className="pt-5 pr-6">
                <dt className="font-head text-white text-[36px] leading-none">50</dt>
                <dd className="mt-2 text-[14px] text-white/60 leading-snug">US states priced live</dd>
              </div>
              <div className="pt-5 pl-6 border-l border-white/10">
                <dt className="font-head text-white text-[36px] leading-none">8</dt>
                <dd className="mt-2 text-[14px] text-white/60 leading-snug">margin types recalculated per state</dd>
              </div>
            </dl>
          </div>
          <PricingMap />
        </div>
      </div>
    </section>
  );
}
