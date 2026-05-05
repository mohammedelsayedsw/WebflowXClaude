"use client";

import { motion } from "motion/react";

type DrawnPathProps = {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeOpacity?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
};

export function DrawnPath({
  d,
  stroke = "currentColor",
  strokeWidth = 1.5,
  strokeDasharray,
  strokeOpacity,
  opacity,
  duration = 1.4,
  delay = 0,
}: DrawnPathProps) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeOpacity={strokeOpacity}
      fill="none"
      pathLength={1}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: opacity ?? 1 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      viewport={{ once: true, amount: 0.3 }}
    />
  );
}
