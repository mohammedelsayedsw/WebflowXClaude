"use client";

import { motion } from "motion/react";

/**
 * A sweep of blue light behind the reveal and the sign-up form together: one
 * soft band and three fine lines. It sits in a wrapper around both sections so
 * the band runs from the countdown down through "Stay updated" without a seam
 * at the section edge.
 */
export function LightSweep() {
  const curve = "M-200 560 C 320 280, 720 1160, 1800 520";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 1400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="taf-streak" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3f4aaf" stopOpacity="0" />
            <stop offset="0.42" stopColor="#8fb6ff" stopOpacity="1" />
            <stop offset="0.58" stopColor="#d6e4ff" stopOpacity="1" />
            <stop offset="1" stopColor="#3f4aaf" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="taf-band" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2b3fd6" stopOpacity="0" />
            <stop offset="0.4" stopColor="#3d6cff" stopOpacity="1" />
            <stop offset="0.58" stopColor="#7fb0ff" stopOpacity="1" />
            <stop offset="1" stopColor="#2b3fd6" stopOpacity="0" />
          </linearGradient>
          <filter id="taf-soft" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <g fill="none" strokeLinecap="round">
          <path d={curve} stroke="url(#taf-band)" strokeWidth="210" opacity="0.42" filter="url(#taf-soft)" />
          <motion.g
            animate={{ x: [0, 26, 0], y: [0, -14, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d={curve} stroke="url(#taf-streak)" strokeWidth="2.5" opacity="0.9" />
            <path d="M-200 630 C 380 360, 780 1210, 1800 590" stroke="url(#taf-streak)" strokeWidth="1.2" opacity="0.5" />
            <path d="M-200 470 C 260 210, 660 1100, 1800 450" stroke="url(#taf-streak)" strokeWidth="1" opacity="0.32" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
