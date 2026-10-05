"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * OperaLayer's background: kept deliberately quiet.
 *
 * Dark ink, one soft blue glow, and a single thin line of light across the
 * screen at `plane` (the layer itself). A faint highlight drifts slowly along
 * the line. Nothing falls, flickers, or follows the pointer. Reduced motion
 * keeps the line and drops the drift.
 */
export function LayerField({ plane = 0.7, line = true }: { contained?: boolean; plane?: number; density?: number; line?: boolean }) {
  const reduce = useReducedMotion();
  const top = `${plane * 100}%`;
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(70% 55% at 50% ${plane * 100 - 8}%, rgba(46,58,150,0.55) 0%, rgba(20,26,72,0.35) 45%, rgba(5,7,15,0) 75%), #05070f`,
        }}
      />
      {/* the line */}
      {line && <div
        className="absolute inset-x-0 h-px"
        style={{
          top,
          background:
            "linear-gradient(90deg, rgba(123,134,232,0) 0%, rgba(123,134,232,0.45) 25%, rgba(214,220,255,0.85) 50%, rgba(123,134,232,0.45) 75%, rgba(123,134,232,0) 100%)",
        }}
      />}
      {/* soft spill of light below the line */}
      <div
        className="absolute inset-x-0 h-[30%]"
        style={{
          top,
          background: "radial-gradient(50% 100% at 50% 0%, rgba(63,74,175,0.22), rgba(63,74,175,0) 70%)",
        }}
      />
      {line && !reduce && (
        <motion.div
          className="absolute left-0 h-[3px] w-[22%] -mt-px"
          style={{
            top,
            background: "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.9), rgba(160,175,255,0) 70%)",
            filter: "blur(1px)",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "455%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        />
      )}
    </div>
  );
}
