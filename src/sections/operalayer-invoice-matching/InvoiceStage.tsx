"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";

/**
 * One supplier invoice, followed through the app. A pure function of the step.
 *  0  a PDF arrives
 *  1  every supplier's PDF looks different
 *  2  OperaLayer reads every line
 *  3  each line sits beside its purchase order line, ticks appear
 *  4  the one line that differs goes to a person, who approves it
 *  5  everything packs into Navision
 * Positions are percentages of the stage box.
 */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fs = (min: number, cqw: number, max: number) => `clamp(${min}px, ${cqw}cqw, ${max}px)`;

const ODD = 3;
const ROWS = [0, 1, 2, 3, 4];
// widths of the item text bar on each line, so the lines do not look cloned
const ITEM_W = [62, 48, 70, 55, 40];

const DOC = { l: 3, t: 8, w: 42, h: 74 };
const PANEL = { l: 51, t: 8, w: 46, h: 58 };
const DESK = { l: 51, t: 72, w: 46, h: 20 };

function rowPose(i: number, step: number) {
  // on the paper
  if (step <= 2) return { left: DOC.l + 4, top: DOC.t + 30 + i * 8, width: DOC.w - 8, height: 5, opacity: 1, scale: 1 };
  // beside the purchase order
  if (step === 3 || (step === 4 && i !== ODD))
    return { left: PANEL.l + 3, top: PANEL.t + 13 + i * 9, width: 28, height: 6, opacity: 1, scale: 1 };
  // the odd line waits on the person's desk
  if (step === 4) return { left: DESK.l + 3, top: DESK.t + 7, width: 18, height: 6, opacity: 1, scale: 1 };
  // packed into Navision
  return { left: DESK.l + 4, top: DESK.t + 11, width: 18, height: 4, opacity: 0, scale: 0.6 };
}

function ApproveButton() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1300);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div
      className="flex items-center justify-center gap-1 rounded-[2px] font-semibold transition-colors duration-300"
      style={{
        fontSize: fs(9, 1.9, 13),
        padding: "0.6em 1em",
        border: `1px solid ${done ? "#6ef76e" : "var(--sw-beige)"}`,
        background: done ? "#6ef76e" : "transparent",
        color: done ? "var(--sw-black)" : "var(--sw-beige)",
      }}
    >
      {done && <Check className="h-3 w-3" />}
      {done ? "Approved" : "Approve"}
    </div>
  );
}

/** A sheet of paper drawn with blocks. `variant` changes the header so suppliers differ. */
function Paper({ variant }: { variant: 0 | 1 | 2 }) {
  return (
    <div className="absolute inset-0 rounded-[3px] bg-white overflow-hidden" style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.7)" }}>
      {variant === 0 && (
        <div className="absolute left-[9%] right-[9%] top-[7%] flex items-start justify-between">
          <div className="h-[2.4cqw] w-[2.4cqw] min-h-[10px] min-w-[10px] rounded-[2px] bg-[var(--sw-blue)]" />
          <div className="w-[40%] space-y-[0.8cqw]">
            <div className="h-[0.7cqw] min-h-[3px] rounded-full bg-[var(--sw-black)]/25" />
            <div className="h-[0.7cqw] min-h-[3px] w-[70%] ml-auto rounded-full bg-[var(--sw-black)]/15" />
          </div>
        </div>
      )}
      {variant === 1 && <div className="absolute left-0 right-0 top-0 h-[16%] bg-[#2b2f4f]" />}
      {variant === 2 && (
        <div className="absolute left-[9%] top-[7%] w-[50%] space-y-[0.8cqw]">
          <div className="h-[1.2cqw] min-h-[5px] w-[60%] rounded-full bg-[#ff5a31]/70" />
          <div className="h-[0.7cqw] min-h-[3px] rounded-full bg-[var(--sw-black)]/15" />
        </div>
      )}
      <div className="absolute left-[9%] right-[9%] top-[29%] h-px bg-[var(--sw-black)]/10" />
      {variant !== 0 &&
        ROWS.map((i) => (
          <div
            key={i}
            className="absolute left-[9%] right-[9%] h-[0.7cqw] min-h-[3px] rounded-full bg-[var(--sw-black)]/12"
            style={{ top: `${36 + i * 11}%`, width: `${ITEM_W[(i + variant) % 5] - 10}%` }}
          />
        ))}
      <div className="absolute left-[9%] right-[9%] bottom-[8%] flex justify-end">
        <div className="h-[0.9cqw] min-h-[4px] w-[30%] rounded-full bg-[var(--sw-black)]/25" />
      </div>
    </div>
  );
}

export function InvoiceStage({ step }: { step: number }) {
  const reduce = useReducedMotion();
  const checked = step >= 3;

  return (
    <div
      className="relative w-full max-w-[700px] mx-auto aspect-[1.12] select-none"
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      {/* other suppliers' PDFs behind, fanned out on step 1 */}
      {[1, 2].map((v, k) => (
        <motion.div
          key={v}
          className="absolute"
          style={{ left: `${DOC.l}%`, top: `${DOC.t}%`, width: `${DOC.w}%`, height: `${DOC.h}%` }}
          initial={{ opacity: 0, x: 0, rotate: 0 }}
          animate={{
            opacity: step <= 1 ? 1 : 0,
            x: step === 1 ? `${k === 0 ? 70 : 118}%` : `${k === 0 ? 4 : 8}%`,
            y: step === 1 ? `${k === 0 ? -2 : 3}%` : "0%",
            rotate: step === 1 ? (k === 0 ? 4 : -3) : k === 0 ? 3 : 6,
          }}
          transition={{ duration: 0.8, ease, delay: step === 1 ? k * 0.1 : 0 }}
        >
          <Paper variant={v as 1 | 2} />
        </motion.div>
      ))}

      {/* the invoice we follow */}
      <motion.div
        className="absolute"
        style={{ left: `${DOC.l}%`, top: `${DOC.t}%`, width: `${DOC.w}%`, height: `${DOC.h}%`, zIndex: 2 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: step >= 5 ? 0.25 : 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <Paper variant={0} />
        <div
          className="absolute left-[9%] bottom-[8%] font-semibold text-[var(--sw-black)]/70"
          style={{ fontSize: fs(9, 1.9, 14) }}
        >
          PDF
        </div>
      </motion.div>

      {/* reading beam */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: `${DOC.l}%`,
          width: `${DOC.w}%`,
          height: "7%",
          zIndex: 4,
          background: "linear-gradient(180deg, transparent, rgba(110,247,110,0.35), transparent)",
          borderBottom: "2px solid rgba(110,247,110,0.9)",
        }}
        initial={{ opacity: 0, top: `${DOC.t + 26}%` }}
        animate={
          step === 2 && !reduce
            ? { opacity: [0, 1, 1, 0], top: [`${DOC.t + 26}%`, `${DOC.t + 72}%`] }
            : { opacity: 0 }
        }
        transition={step === 2 ? { duration: 2.2, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" } : { duration: 0.3 }}
      />

      {/* purchase order panel */}
      <motion.div
        className="absolute rounded-[4px]"
        style={{
          left: `${PANEL.l}%`,
          top: `${PANEL.t}%`,
          width: `${PANEL.w}%`,
          height: `${PANEL.h}%`,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.16)",
        }}
        initial={false}
        animate={{ opacity: step >= 3 ? 1 : 0, x: step >= 3 ? 0 : 20 }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="absolute left-[6%] top-[6%] text-white font-medium" style={{ fontSize: fs(10, 2.3, 16) }}>
          Purchase order
        </div>
        {/* the purchase order's own lines, under each invoice line */}
        {ROWS.map((i) => (
          <div
            key={i}
            className="absolute left-[6.5%] rounded-full bg-white/20"
            style={{ top: `${((13 + i * 9 + 6.8) / PANEL.h) * 100}%`, width: "56%", height: "1.6%" }}
          />
        ))}
      </motion.div>

      {/* ticks beside each line */}
      {ROWS.map((i) => {
        const flagged = i === ODD && step < 5;
        const show = checked && !(i === ODD && step === 4);
        return (
          <motion.div
            key={`tick-${i}`}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              left: `${PANEL.l + PANEL.w - 11}%`,
              top: `${PANEL.t + 13 + i * 9 + 0.2}%`,
              width: "5.2%",
              aspectRatio: "1",
              zIndex: 6,
            }}
            initial={false}
            animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.3, backgroundColor: flagged ? "#ff5a31" : "#6ef76e" }}
            transition={{ duration: 0.35, delay: show ? 0.6 + i * 0.15 : 0 }}
          >
            {flagged ? (
              <span className="font-bold text-white leading-none" style={{ fontSize: fs(9, 2.2, 15) }}>
                !
              </span>
            ) : (
              <Check className="text-[var(--sw-black)]" style={{ width: "60%", height: "60%" }} strokeWidth={3} />
            )}
          </motion.div>
        );
      })}

      {/* the person who decides on the odd line */}
      <motion.div
        className="absolute rounded-[4px] flex items-center justify-end gap-[4%] pr-[4%]"
        style={{
          left: `${DESK.l}%`,
          top: `${DESK.t}%`,
          width: `${DESK.w}%`,
          height: `${DESK.h}%`,
          background: "rgba(255,90,49,0.08)",
          border: "1px solid rgba(255,90,49,0.5)",
        }}
        initial={false}
        animate={{ opacity: step === 4 ? 1 : 0, y: step === 4 ? 0 : 14 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="rounded-full bg-white/80 shrink-0" style={{ width: "13%", aspectRatio: "1" }} />
        {step === 4 && <ApproveButton />}
      </motion.div>

      {/* Navision */}
      <motion.div
        className="absolute rounded-[4px] flex items-center justify-center gap-[3%]"
        style={{
          left: `${DESK.l}%`,
          top: `${DESK.t}%`,
          width: `${DESK.w}%`,
          height: `${DESK.h}%`,
          background: "linear-gradient(90deg, rgba(110,247,110,0.12), rgba(63,74,175,0.4))",
          border: "1px solid rgba(110,247,110,0.6)",
          boxShadow: "0 0 50px -12px rgba(110,247,110,0.45)",
        }}
        initial={false}
        animate={{ opacity: step >= 5 ? 1 : 0, scale: step >= 5 ? 1 : 0.9 }}
        transition={{ duration: 0.6, ease, delay: step >= 5 ? 0.5 : 0 }}
      >
        <span className="font-head text-white font-semibold" style={{ fontSize: fs(13, 3.4, 24) }}>
          Navision
        </span>
        <Check className="text-[var(--sw-mint)]" style={{ width: "7%", height: "auto" }} strokeWidth={3} />
      </motion.div>

      {/* the invoice lines themselves */}
      {ROWS.map((i) => {
        const p = rowPose(i, step);
        const odd = i === ODD;
        const read = step >= 2;
        return (
          <motion.div
            key={`row-${i}`}
            className="absolute rounded-[2px] flex items-center gap-[6%] px-[2.5%]"
            style={{ zIndex: 5 }}
            initial={false}
            animate={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.width}%`,
              height: `${p.height}%`,
              opacity: p.opacity,
              scale: p.scale,
              backgroundColor: step >= 3 ? (odd && step === 3 ? "#ffe6df" : "#ffffff") : "rgba(255,255,255,0)",
              boxShadow: step >= 3 ? "0 10px 24px -14px rgba(0,0,0,0.7)" : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.75, ease, delay: step >= 3 ? i * 0.07 : 0 }}
          >
            <motion.span
              className="shrink-0 rounded-full"
              style={{ width: 4, height: "55%" }}
              initial={false}
              animate={{ backgroundColor: read ? (odd && step === 3 ? "#ff5a31" : "#3fb83f") : "rgba(16,19,44,0.18)" }}
              transition={{ delay: step === 2 ? 0.3 + i * 0.35 : 0 }}
            />
            <span className="h-[34%] rounded-full bg-[var(--sw-black)]/30" style={{ width: `${ITEM_W[i]}%` }} />
            <span className="ml-auto h-[34%] w-[16%] rounded-full bg-[var(--sw-black)]/45" />
          </motion.div>
        );
      })}
    </div>
  );
}
