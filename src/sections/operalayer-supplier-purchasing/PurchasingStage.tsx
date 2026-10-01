"use client";

import { useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Mail } from "lucide-react";

/**
 * One picture for the supplier purchasing story, drawn per step.
 *  0  Business Central, running
 *  1  a spreadsheet for every supplier brand
 *  2  confirmations and changes arriving by email
 *  3  all of it pulled into one view of the season
 *  4  an invoice checked against the confirmed order, one line differs
 *  5  a forecast drafts the reorder, a buyer approves it
 * Positions are percentages of the stage box.
 */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fs = (min: number, cqw: number, max: number) => `clamp(${min}px, ${cqw}cqw, ${max}px)`;

const SHEETS = 30;
const SHEET_COLS = 6;
const MAILS = 6;

const BAR = { left: 6, top: 40, width: 88, height: 13 };
const BAR_TOP_SMALL = 4;

function sheetPose(k: number, step: number) {
  const col = k % SHEET_COLS;
  const row = Math.floor(k / SHEET_COLS);
  const home = { left: 4 + col * 8.4, top: 6 + row * 10.5, width: 6.6, height: 8, opacity: 1, rotate: ((k * 7) % 9) - 4 };
  if (step === 0) return { ...home, opacity: 0.28 };
  if (step <= 2) return { ...home, opacity: step === 2 ? 0.55 : 1 };
  const slot = BAR.left + 2 + (k / SHEETS) * 52;
  if (step === 3) return { left: slot, top: BAR.top + 2.5, width: 1.4, height: BAR.height - 5, opacity: 0, rotate: 0 };
  return { left: slot, top: BAR_TOP_SMALL, width: 1.4, height: 4, opacity: 0, rotate: 0 };
}

function mailPose(k: number, step: number) {
  const home = { left: 60 + (k % 2) * 18, top: 8 + Math.floor(k / 2) * 11, opacity: 1 };
  if (step < 2) return { ...home, left: home.left + 6, opacity: 0 };
  if (step === 2) return home;
  return { left: BAR.left + 60 + k * 4, top: BAR.top + 3, opacity: 0 };
}

function ApproveButton() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 3400);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div
      className="mt-[10%] flex items-center justify-center gap-1 rounded-[2px] font-semibold transition-colors duration-300"
      style={{
        fontSize: fs(9, 1.9, 14),
        padding: "7% 0",
        border: `1px solid ${done ? "#3fb83f" : "var(--sw-blue)"}`,
        background: done ? "#3fb83f" : "transparent",
        color: done ? "#ffffff" : "var(--sw-blue)",
      }}
    >
      {done && <Check className="h-3 w-3" />}
      {done ? "Approved" : "Approve"}
    </div>
  );
}

function DocLines({ rows, bad, invoice, run }: { rows: number; bad: number; invoice: boolean; run: boolean }) {
  return (
    <div className="mt-[8%] space-y-[7%]">
      {Array.from({ length: rows }).map((_, r) => {
        const flag = invoice && r === bad;
        return (
          <div key={r} className="flex items-center gap-[6%]">
            <span className="h-[6px] rounded-full bg-white/25" style={{ width: `${46 - (r % 3) * 6}%` }} />
            <motion.span
              className="ml-auto h-[6px] rounded-full"
              style={{ width: "18%" }}
              initial={false}
              animate={{
                backgroundColor: flag && run ? "#ff5a31" : "rgba(255,255,255,0.35)",
                boxShadow: flag && run ? "0 0 14px 2px rgba(255,90,49,0.7)" : "0 0 0 0 rgba(0,0,0,0)",
              }}
              transition={{ delay: flag ? 1.1 : 0, duration: 0.4 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export function PurchasingStage({ step }: { step: number }) {
  const reduce = useReducedMotion();
  const clipId = `sp-sold-${useId().replace(/:/g, "")}`;
  const season = step >= 3;
  const barSmall = step >= 4;
  const checking = step === 4;
  const forecast = step === 5;

  // forecast curve in a 100 x 60 box: sold so far, then the forecast
  const sold = "M0 46 C 8 44, 14 38, 22 40 S 36 30, 44 32 S 54 24, 60 26";
  const ahead = "M60 26 C 68 22, 76 16, 84 18 S 94 10, 100 12";
  const band = "M60 22 C 68 16, 76 9, 84 10 S 94 2, 100 3 L 100 21 C 94 19, 88 27, 84 26 S 68 30, 60 30 Z";

  return (
    <div
      className="relative w-full max-w-[700px] mx-auto aspect-[1.12] select-none"
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      {/* a spreadsheet for every supplier brand */}
      {Array.from({ length: SHEETS }).map((_, k) => {
        const p = sheetPose(k, step);
        return (
          <motion.div
            key={`s${k}`}
            className="absolute rounded-[2px]"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.22)",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "100% 33%, 33% 100%",
            }}
            initial={false}
            animate={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.width}%`,
              height: `${p.height}%`,
              opacity: p.opacity,
              rotate: p.rotate,
            }}
            transition={{ duration: 0.8, ease, delay: step === 1 ? k * 0.025 : step === 3 ? k * 0.015 : 0 }}
          />
        );
      })}

      {/* confirmations and changes by email */}
      {Array.from({ length: MAILS }).map((_, k) => {
        const p = mailPose(k, step);
        return (
          <motion.div
            key={`m${k}`}
            className="absolute rounded-[2px] flex items-center gap-[8%] px-[2%]"
            style={{
              width: "15%",
              height: "8%",
              background: "#1a1f4a",
              border: "1px solid rgba(255,90,49,0.75)",
            }}
            initial={false}
            animate={{ left: `${p.left}%`, top: `${p.top}%`, opacity: p.opacity }}
            transition={{ duration: 0.7, ease, delay: step === 2 ? 0.15 + k * 0.12 : 0 }}
          >
            <Mail className="shrink-0 text-[var(--sw-orange)]" style={{ width: "22%", height: "auto" }} />
            <span className="h-[14%] flex-1 rounded-full bg-white/25" />
          </motion.div>
        );
      })}

      {/* the season, in one view */}
      <motion.div
        className="absolute rounded-[4px] overflow-hidden"
        style={{
          left: `${BAR.left}%`,
          width: `${BAR.width}%`,
          border: "1px solid rgba(110,247,110,0.55)",
          background: "rgba(63,74,175,0.25)",
          boxShadow: "0 0 60px -14px rgba(110,247,110,0.4)",
        }}
        initial={false}
        animate={{
          top: `${barSmall ? BAR_TOP_SMALL : BAR.top}%`,
          height: `${barSmall ? 9 : BAR.height}%`,
          opacity: season ? (barSmall ? 0.55 : 1) : 0,
          scaleX: season ? 1 : 0.5,
        }}
        transition={{ duration: 0.8, ease }}
      >
        {[0, 1, 2, 3, 4, 5].map((m) => (
          <motion.div
            key={m}
            className="absolute inset-y-[18%] rounded-[2px]"
            style={{ left: `${31 + m * 11.4}%`, width: "10%", transformOrigin: "left" }}
            initial={false}
            animate={{
              scaleX: season ? 1 : 0,
              backgroundColor: m < 3 ? "rgba(110,247,110,0.55)" : "rgba(255,255,255,0.18)",
            }}
            transition={{ delay: season && step === 3 ? 0.7 + m * 0.12 : 0, duration: 0.5, ease }}
          />
        ))}
        <div className="absolute inset-0 flex items-center px-[3%]">
          <span className="font-head text-white font-semibold" style={{ fontSize: fs(11, 2.6, 18) }}>
            SS26 season
          </span>
        </div>
      </motion.div>

      {/* Business Central */}
      <motion.div
        className="absolute rounded-[4px] flex items-center justify-center gap-[3%]"
        style={{
          left: "28%",
          width: "44%",
          height: "13%",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
        initial={{ opacity: 0, top: "84%" }}
        animate={{ opacity: 1, top: "80%" }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="text-white font-medium" style={{ fontSize: fs(11, 2.6, 18) }}>
          Business Central
        </span>
        <span className="relative flex h-[7px] w-[7px]">
          {!reduce && (
            <motion.span
              className="absolute inset-0 rounded-full bg-[var(--sw-mint)]"
              animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          )}
          <span className="relative h-[7px] w-[7px] rounded-full bg-[var(--sw-mint)]" />
        </span>
      </motion.div>

      {/* line from Business Central up into the season view */}
      <motion.div
        className="absolute w-px bg-[var(--sw-mint)]/45"
        style={{ left: "50%", top: `${BAR.top + BAR.height}%`, height: `${80 - BAR.top - BAR.height}%`, transformOrigin: "bottom" }}
        initial={false}
        animate={{ opacity: step === 3 ? 1 : 0, scaleY: step === 3 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: step === 3 ? 0.4 : 0 }}
      >
        {step === 3 && !reduce && (
          <motion.span
            className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-[var(--sw-mint)]"
            animate={{ top: ["100%", "0%"], opacity: [0, 1, 0] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.div>

      {/* an invoice checked against the confirmed order */}
      {[
        { key: "order", label: "Confirmed order", left: 6, invoice: false },
        { key: "invoice", label: "Invoice", left: 54, invoice: true },
      ].map((d, j) => (
        <motion.div
          key={d.key}
          className="absolute rounded-[4px]"
          style={{
            left: `${d.left}%`,
            top: "20%",
            width: "40%",
            height: "52%",
            padding: "3.2%",
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${d.invoice ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.18)"}`,
          }}
          initial={false}
          animate={{ opacity: checking ? 1 : 0, y: checking ? 0 : 18 }}
          transition={{ duration: 0.6, ease, delay: checking ? 0.2 + j * 0.15 : 0 }}
        >
          <div className="text-white font-medium" style={{ fontSize: fs(10, 2.3, 16) }}>
            {d.label}
          </div>
          <DocLines rows={6} bad={3} invoice={d.invoice} run={checking} />
        </motion.div>
      ))}
      <motion.div
        className="absolute h-px"
        style={{ left: "46%", width: "8%", top: "52.6%", background: "var(--sw-orange)" }}
        initial={false}
        animate={{ opacity: checking ? 1 : 0, scaleX: checking ? 1 : 0 }}
        transition={{ delay: checking ? 1.3 : 0, duration: 0.3 }}
      />

      {/* the forecast drafts the reorder */}
      <motion.div
        className="absolute rounded-[4px]"
        style={{
          left: "6%",
          top: "20%",
          width: "56%",
          height: "50%",
          padding: "3%",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
        initial={false}
        animate={{ opacity: forecast ? 1 : 0, y: forecast ? 0 : 18 }}
        transition={{ duration: 0.6, ease, delay: forecast ? 0.15 : 0 }}
      >
        <div className="text-white font-medium" style={{ fontSize: fs(10, 2.3, 16) }}>
          Forecast
        </div>
        <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="mt-[4%] w-full h-[78%] overflow-visible">
          <motion.path
            d={band}
            fill="rgba(110,247,110,0.14)"
            initial={false}
            animate={{ opacity: forecast ? 1 : 0 }}
            transition={{ delay: forecast ? 1.4 : 0, duration: 0.5 }}
          />
          <defs>
            <clipPath id={clipId}>
              <motion.rect
                x="0"
                y="-10"
                height="80"
                initial={false}
                animate={{ width: forecast ? 60 : 0 }}
                transition={{ delay: forecast ? 0.4 : 0, duration: 0.9, ease: "easeOut" }}
              />
            </clipPath>
          </defs>
          <path
            d={sold}
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            clipPath={`url(#${clipId})`}
          />
          <motion.path
            d={ahead}
            fill="none"
            stroke="var(--sw-mint)"
            strokeWidth={2}
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
            initial={false}
            animate={{ opacity: forecast ? 1 : 0 }}
            transition={{ delay: forecast ? 1.2 : 0, duration: 0.5 }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute rounded-[4px]"
        style={{ left: "66%", top: "27%", width: "28%", padding: "2.6% 2.8%", background: "#ffffff" }}
        initial={false}
        animate={{ opacity: forecast ? 1 : 0, x: forecast ? 0 : 20 }}
        transition={{ duration: 0.6, ease, delay: forecast ? 1.6 : 0 }}
      >
        <div className="font-medium text-[var(--sw-black)]" style={{ fontSize: fs(10, 2.2, 15) }}>
          Draft reorder
        </div>
        <div className="mt-[10%] space-y-[8%]">
          <div className="h-[6px] rounded-full bg-[var(--sw-black)]/12 w-[90%]" />
          <div className="h-[6px] rounded-full bg-[var(--sw-black)]/12 w-[72%]" />
          <div className="h-[6px] rounded-full bg-[var(--sw-black)]/12 w-[56%]" />
        </div>
        {forecast && <ApproveButton />}
      </motion.div>
    </div>
  );
}
