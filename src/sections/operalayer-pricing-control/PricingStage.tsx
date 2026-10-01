"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Clock, User } from "lucide-react";
import { UsTiles } from "@/sections/operalayer/shared/UsTiles";

/**
 * The pricing story as one picture, driven by the step index.
 *  0  50 states, waiting for a price
 *  1  one spreadsheet and the one person who keeps it running
 *  2  each state stacks its own rules on top of cost
 *  3  OperaLayer prices every state at once
 *  4  you approve and the store receives the update on schedule
 *  5  a competitor price moves and a person decides
 * No dollar amounts are drawn: the only numbers on the page are the real ones.
 */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fs = (min: number, cqw: number, max: number) => `clamp(${min}px, ${cqw}cqw, ${max}px)`;

function Layer({ show, children, className = "" }: { show: boolean; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 14, pointerEvents: show ? "auto" : "none" }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}

function Sheet({ show }: { show: boolean }) {
  const reduce = useReducedMotion();
  return (
    <Layer show={show} className="flex items-center justify-center">
      <div
        className="relative w-[78%] rounded-[4px] overflow-hidden"
        style={{ background: "#151a40", border: "1px solid rgba(255,255,255,0.16)" }}
      >
        <div className="px-[4%] py-[3%] border-b border-white/10 text-white/70" style={{ fontSize: fs(10, 2.2, 15) }}>
          State prices.xlsx
        </div>
        <div className="p-[4%] space-y-[2.2cqw]">
          {Array.from({ length: 9 }).map((_, r) => (
            <div key={r} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-[3%]">
              {[0, 1, 2, 3].map((c) => {
                const hot = (r === 2 && c === 3) || (r === 6 && c === 2);
                return (
                  <motion.span
                    key={c}
                    className="h-[1.6cqw] min-h-[6px] rounded-full"
                    style={{ background: hot ? "var(--sw-orange)" : "rgba(255,255,255,0.14)" }}
                    animate={hot && show && !reduce ? { opacity: [1, 0.25, 1] } : { opacity: 1 }}
                    transition={{ duration: 1.4, repeat: hot && show && !reduce ? Infinity : 0 }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        {/* the one person it depends on */}
        <motion.div
          className="absolute right-[4%] top-[3%] flex items-center justify-center rounded-full"
          style={{ width: "9cqw", height: "9cqw", background: "#232a63", border: "2px solid var(--sw-orange)" }}
          initial={false}
          animate={{ scale: show ? 1 : 0.6 }}
          transition={{ duration: 0.5, ease, delay: show ? 0.3 : 0 }}
        >
          <User className="text-white/85" style={{ width: "50%", height: "50%" }} />
        </motion.div>
      </div>
    </Layer>
  );
}

const STATES = [
  { name: "Texas", rules: 0.18, margin: 0.3 },
  { name: "California", rules: 0.42, margin: 0.26 },
  { name: "New York", rules: 0.3, margin: 0.36 },
];

function Bars({ show }: { show: boolean }) {
  const COST = 0.3;
  return (
    <Layer show={show} className="flex flex-col justify-end px-[8%] pb-[8%] pt-[10%]">
      <div className="flex-1 grid grid-cols-3 gap-[10%] items-end">
        {STATES.map((s, i) => (
          <div key={s.name} className="h-full flex flex-col justify-end items-stretch">
            {[
              { h: s.margin, c: "var(--sw-mint)", d: 0.9 },
              { h: s.rules, c: "#7f89ff", d: 0.55 },
              { h: COST, c: "rgba(255,255,255,0.3)", d: 0.2 },
            ].map((seg, k) => (
              <motion.div
                key={k}
                className="w-full first:rounded-t-[3px]"
                style={{ background: seg.c, transformOrigin: "bottom", height: `${seg.h * 100}%` }}
                initial={false}
                animate={{ scaleY: show ? 1 : 0 }}
                transition={{ duration: 0.5, ease, delay: show ? seg.d + i * 0.1 : 0 }}
              />
            ))}
            <div className="mt-[8%] text-center text-white/80" style={{ fontSize: fs(10, 2.3, 16) }}>
              {s.name}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[6%] flex justify-center gap-[6%] text-white/60" style={{ fontSize: fs(9, 2, 14) }}>
        {[
          ["rgba(255,255,255,0.3)", "Cost"],
          ["#7f89ff", "State rules"],
          ["var(--sw-mint)", "Margin"],
        ].map(([c, l]) => (
          <span key={l} className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-[2px]" style={{ background: c }} />
            {l}
          </span>
        ))}
      </div>
    </Layer>
  );
}

function Approve({ show }: { show: boolean }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!show) {
      setDone(false);
      return;
    }
    const t = window.setTimeout(() => setDone(true), 1300);
    return () => window.clearTimeout(t);
  }, [show]);

  return (
    <Layer show={show} className="flex items-center justify-center">
      <div className="w-[88%] grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] items-center gap-[4%]">
        <div className="rounded-[4px] bg-white p-[7%]" style={{ fontSize: fs(10, 2.2, 15) }}>
          <div className="font-head font-semibold text-[var(--sw-black)]">50 states updated</div>
          <div className="mt-[8%] space-y-[6%]">
            <div className="h-[5px] rounded-full bg-[var(--sw-black)]/10 w-[90%]" />
            <div className="h-[5px] rounded-full bg-[var(--sw-black)]/10 w-[65%]" />
          </div>
          <div
            className="mt-[12%] flex items-center justify-center gap-1 rounded-[2px] font-semibold transition-colors duration-300"
            style={{
              padding: "6% 0",
              border: `1px solid ${done ? "#3fb83f" : "var(--sw-blue)"}`,
              background: done ? "#3fb83f" : "transparent",
              color: done ? "#fff" : "var(--sw-blue)",
            }}
          >
            {done && <Check className="h-3.5 w-3.5" />}
            {done ? "Approved" : "Approve"}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-white/60" style={{ fontSize: fs(9, 1.9, 13) }}>
          <Clock style={{ width: "5cqw", height: "5cqw" }} className={done ? "text-[var(--sw-mint)]" : ""} />
          <div className="relative h-px w-[7cqw] bg-white/20 overflow-hidden">
            <motion.span
              className="absolute inset-y-0 left-0 bg-[var(--sw-mint)]"
              initial={false}
              animate={{ width: done ? "100%" : "0%" }}
              transition={{ duration: 0.8, delay: done ? 0.3 : 0 }}
            />
          </div>
          On schedule
        </div>

        <div
          className="rounded-[4px] overflow-hidden"
          style={{ background: "#151a40", border: "1px solid rgba(255,255,255,0.16)" }}
        >
          <div className="px-[7%] py-[5%] border-b border-white/10 font-head text-white" style={{ fontSize: fs(11, 2.5, 17) }}>
            Magento store
          </div>
          <div className="p-[7%] space-y-[9%]">
            {[0, 1, 2, 3].map((r) => (
              <div key={r} className="flex items-center justify-between gap-[6%]">
                <span className="h-[6px] rounded-full bg-white/15" style={{ width: `${62 - r * 8}%` }} />
                <motion.span
                  className="h-[8px] w-[22%] rounded-full"
                  initial={false}
                  animate={{ backgroundColor: done ? "#6ef76e" : "rgba(255,255,255,0.3)" }}
                  transition={{ delay: done ? 1.1 + r * 0.15 : 0, duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layer>
  );
}

function Competitor({ show }: { show: boolean }) {
  // ours flat, theirs drops partway through
  const ours = "M0 40 L100 40";
  const theirs = "M0 46 L45 46 L58 30 L100 30";
  return (
    <Layer show={show} className="flex flex-col justify-center px-[6%]">
      <div className="relative w-full" style={{ height: "44cqw" }}>
        <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {[15, 35, 55].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={false}
          animate={{ clipPath: show ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: show ? 0.2 : 0 }}
        >
          <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path d={ours} fill="none" stroke="white" strokeWidth={2} vectorEffect="non-scaling-stroke" />
            <path d={theirs} fill="none" stroke="var(--sw-orange)" strokeWidth={2} vectorEffect="non-scaling-stroke" />
          </svg>
        </motion.div>
      </div>
      <div className="mt-[3%] flex gap-[6%] text-white/60" style={{ fontSize: fs(9, 2, 14) }}>
        <span className="flex items-center gap-2">
          <span className="h-[2px] w-5 bg-white" />
          Your price
        </span>
        <span className="flex items-center gap-2">
          <span className="h-[2px] w-5 bg-[var(--sw-orange)]" />
          Competitor
        </span>
      </div>
      <motion.div
        className="mt-[6%] self-start rounded-[4px] bg-white px-[4%] py-[3%] flex items-center gap-[4cqw]"
        style={{ fontSize: fs(10, 2.2, 15) }}
        initial={false}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
        transition={{ delay: show ? 1.9 : 0, duration: 0.4 }}
      >
        <span className="flex items-center gap-2 text-[var(--sw-black)]">
          <span className="h-2 w-2 rounded-full bg-[var(--sw-orange)]" />
          A competitor cut their price
        </span>
        <span className="rounded-[2px] border border-[var(--sw-blue)] px-[1.6cqw] py-[0.8cqw] font-semibold text-[var(--sw-blue)]">
          Review
        </span>
      </motion.div>
    </Layer>
  );
}

export function PricingStage({ step }: { step: number }) {
  return (
    <div
      className="relative w-full max-w-[700px] mx-auto aspect-[1.12] select-none"
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      {/* the 50 states: dim while they wait, lit once OperaLayer prices them */}
      <motion.div
        className="absolute left-0 right-0 top-[10%]"
        initial={false}
        animate={{ opacity: step === 0 ? 1 : step === 3 ? 1 : step === 1 ? 0.12 : 0, scale: step === 3 || step === 0 ? 1 : 0.96 }}
        transition={{ duration: 0.6, ease }}
      >
        <UsTiles
          run={step === 3}
          on="#6ef76e"
          off="rgba(255,255,255,0.07)"
          textOn="#10132c"
          textOff="rgba(255,255,255,0.4)"
        />
      </motion.div>
      <Sheet show={step === 1} />
      <Bars show={step === 2} />
      <Approve show={step === 4} />
      <Competitor show={step === 5} />
    </div>
  );
}
