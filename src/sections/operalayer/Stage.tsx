"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";

/**
 * The pillar's one picture, drawn as a function of the story step.
 *  0  your systems, each running
 *  1  work that belongs to none of them appears in the gaps
 *  2  that work piles up in a spreadsheet
 *  3  OperaLayer connects to every system
 *  4  each piece of work becomes its own small app
 *  5  a person approves, the app does the rest
 * All positions are percentages of the stage box.
 */

const SYSTEMS = ["ERP", "CRM", "Store", "Warehouse", "Finance"];
const SYS_W = 17;
const SYS_LEFT = [0, 20.75, 41.5, 62.25, 83];
const SYS_TOP = 82;

const TASKS = ["Invoice checks", "Regional prices", "Supplier orders", "Board report"];
const TASK_W = 21;
const GAP_CX = [18.875, 39.625, 60.375, 81.125];
const APP_LEFT = [0, 26.33, 52.67, 79];
const PILE = [
  { l: 9, t: 13, r: -6 },
  { l: 24, t: 20, r: 5 },
  { l: 12, t: 27, r: -3 },
  { l: 27, t: 33, r: 7 },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fs = (min: number, cqw: number, max: number) => `clamp(${min}px, ${cqw}cqw, ${max}px)`;

function taskPose(i: number, step: number) {
  if (step === 0) return { left: GAP_CX[i] - TASK_W / 2, top: 70, opacity: 0, rotate: 0, scale: 0.9 };
  if (step === 1) return { left: GAP_CX[i] - TASK_W / 2, top: i % 2 ? 57 : 64, opacity: 1, rotate: 0, scale: 1 };
  if (step === 2 || step === 3)
    return { left: PILE[i].l, top: PILE[i].t, opacity: step === 3 ? 0.4 : 1, rotate: PILE[i].r, scale: 1 };
  return {
    left: APP_LEFT[i],
    top: 12,
    opacity: step === 5 && i > 0 ? 0.45 : 1,
    rotate: 0,
    scale: 1,
  };
}

function ApproveButton() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1400);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div
      className="mt-[10%] flex items-center justify-center gap-1 rounded-[2px] font-semibold transition-colors duration-300"
      style={{
        fontSize: fs(8, 1.7, 12),
        padding: "6% 0",
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

export function PillarStage({ step }: { step: number }) {
  const reduce = useReducedMotion();
  const app = step >= 4;

  return (
    <div
      className="relative w-full max-w-[700px] mx-auto aspect-[1.12] select-none"
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      {/* spreadsheet the work ends up in */}
      <motion.div
        className="absolute rounded-[4px] overflow-hidden"
        style={{
          left: "4%",
          top: "6%",
          width: "52%",
          height: "42%",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.14)",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "100% 14%, 20% 100%",
        }}
        initial={false}
        animate={{ opacity: step === 2 ? 1 : step === 3 ? 0.3 : 0, scale: step >= 2 && step <= 3 ? 1 : 0.94 }}
        transition={{ duration: 0.6, ease }}
      />

      {/* inbox beside the spreadsheet */}
      <motion.div
        className="absolute rounded-[4px] flex flex-col gap-[6%] p-[2%]"
        style={{
          left: "61%",
          top: "10%",
          width: "30%",
          height: "30%",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.04)",
        }}
        initial={false}
        animate={{ opacity: step === 2 ? 1 : step === 3 ? 0.3 : 0, y: step >= 2 && step <= 3 ? 0 : 12 }}
        transition={{ duration: 0.6, ease, delay: step === 2 ? 0.15 : 0 }}
      >
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="flex items-center gap-[6%] h-[16%]">
            <span className="h-[60%] aspect-square rounded-full bg-white/25" />
            <span className="h-[34%] rounded-full bg-white/15" style={{ width: `${70 - r * 12}%` }} />
          </div>
        ))}
      </motion.div>

      {/* OperaLayer */}
      <motion.div
        className="absolute rounded-[4px] flex items-center justify-center"
        style={{
          left: 0,
          width: "100%",
          top: "49%",
          height: "13%",
          background: "linear-gradient(90deg, rgba(110,247,110,0.10), rgba(63,74,175,0.35), rgba(110,247,110,0.10))",
          border: "1px solid rgba(110,247,110,0.55)",
          boxShadow: "0 0 60px -10px rgba(110,247,110,0.35)",
        }}
        initial={false}
        animate={{ opacity: step >= 3 ? 1 : 0, scaleX: step >= 3 ? 1 : 0.4 }}
        transition={{ duration: 0.8, ease }}
      >
        <span className="font-head text-white font-semibold tracking-[-0.01em]" style={{ fontSize: fs(15, 4.2, 28) }}>
          OperaLayer
        </span>
      </motion.div>

      {/* lines from systems up to OperaLayer */}
      {SYSTEMS.map((_, i) => (
        <motion.div
          key={`down-${i}`}
          className="absolute w-px bg-[var(--sw-mint)]/40 overflow-visible"
          style={{ left: `${SYS_LEFT[i] + SYS_W / 2}%`, top: "62%", height: "20%" }}
          initial={false}
          animate={{ opacity: step >= 3 ? 1 : 0, scaleY: step >= 3 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: step >= 3 ? 0.3 + i * 0.06 : 0 }}
        >
          {step >= 3 && !reduce && (
            <motion.span
              className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-[var(--sw-mint)]"
              animate={{ top: ["100%", "0%"], opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.28, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      ))}

      {/* lines from OperaLayer up to the apps */}
      {TASKS.map((_, i) => (
        <motion.div
          key={`up-${i}`}
          className="absolute w-px bg-white/30"
          style={{ left: `${APP_LEFT[i] + TASK_W / 2}%`, top: "36%", height: "13%", transformOrigin: "bottom" }}
          initial={false}
          animate={{ opacity: app ? 1 : 0, scaleY: app ? 1 : 0 }}
          transition={{ duration: 0.4, delay: app ? 0.5 + i * 0.08 : 0 }}
        />
      ))}

      {/* systems */}
      {SYSTEMS.map((s, i) => (
        <motion.div
          key={s}
          className="absolute rounded-[4px] flex flex-col items-center justify-center gap-[10%]"
          style={{
            left: `${SYS_LEFT[i]}%`,
            top: `${SYS_TOP}%`,
            width: `${SYS_W}%`,
            height: "15%",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.16)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease }}
        >
          <span className="text-white font-medium" style={{ fontSize: fs(10, 2.5, 17) }}>
            {s}
          </span>
          <span className="relative flex h-[6px] w-[6px]">
            {!reduce && (
              <motion.span
                className="absolute inset-0 rounded-full bg-[var(--sw-mint)]"
                animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35 }}
              />
            )}
            <span className="relative h-[6px] w-[6px] rounded-full bg-[var(--sw-mint)]" />
          </span>
        </motion.div>
      ))}

      {/* the work: loose in the gaps, piled in a sheet, then each its own app */}
      {TASKS.map((t, i) => {
        const pose = taskPose(i, step);
        const approving = step === 5 && i === 0;
        return (
          <motion.div
            key={t}
            className="absolute rounded-[4px]"
            style={{ width: `${TASK_W}%`, padding: "1.6% 1.8%", zIndex: 5, border: "1px solid rgba(255,90,49,0.85)" }}
            initial={false}
            animate={{
              left: `${pose.left}%`,
              top: `${pose.top}%`,
              opacity: pose.opacity,
              rotate: pose.rotate,
              scale: pose.scale,
              backgroundColor: app ? "#ffffff" : "#1a1f4a",
              borderColor: app ? "rgba(255,255,255,1)" : "rgba(255,90,49,0.85)",
              boxShadow: app ? "0 18px 40px -18px rgba(0,0,0,0.6)" : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.75, ease, delay: step >= 1 ? i * 0.07 : 0 }}
          >
            <div className="flex items-center gap-[8%]">
              <motion.span
                className="shrink-0 rounded-full"
                style={{ width: 6, height: 6 }}
                initial={false}
                animate={{ backgroundColor: app ? "#3fb83f" : "#ff5a31" }}
              />
              <span
                className="font-medium leading-tight"
                style={{ fontSize: fs(9, 2.15, 15), color: app ? "var(--sw-black)" : "rgba(255,255,255,0.9)" }}
              >
                {t}
              </span>
            </div>
            {approving && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-[10%] space-y-[6%]">
                  <div className="h-[5px] rounded-full bg-[var(--sw-black)]/10 w-[90%]" />
                  <div className="h-[5px] rounded-full bg-[var(--sw-black)]/10 w-[70%]" />
                </div>
                <ApproveButton />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
