"use client";

import { motion } from "motion/react";

/** The 50 states as an 11 by 8 tile map, [code, column, row]. */
export const US_TILES: [string, number, number][] = [
  ["AK", 0, 0], ["ME", 10, 0],
  ["VT", 9, 1], ["NH", 10, 1],
  ["WA", 0, 2], ["ID", 1, 2], ["MT", 2, 2], ["ND", 3, 2], ["MN", 4, 2], ["IL", 5, 2], ["WI", 6, 2], ["MI", 7, 2], ["NY", 8, 2], ["RI", 9, 2], ["MA", 10, 2],
  ["OR", 0, 3], ["NV", 1, 3], ["WY", 2, 3], ["SD", 3, 3], ["IA", 4, 3], ["IN", 5, 3], ["OH", 6, 3], ["PA", 7, 3], ["NJ", 8, 3], ["CT", 9, 3],
  ["CA", 0, 4], ["UT", 1, 4], ["CO", 2, 4], ["NE", 3, 4], ["MO", 4, 4], ["KY", 5, 4], ["WV", 6, 4], ["VA", 7, 4], ["MD", 8, 4], ["DE", 9, 4],
  ["AZ", 1, 5], ["NM", 2, 5], ["KS", 3, 5], ["AR", 4, 5], ["TN", 5, 5], ["NC", 6, 5], ["SC", 7, 5],
  ["OK", 3, 6], ["LA", 4, 6], ["MS", 5, 6], ["AL", 6, 6], ["GA", 7, 6],
  ["HI", 0, 7], ["TX", 3, 7], ["FL", 8, 7],
];

export function UsTiles({
  run,
  on,
  off,
  textOn,
  textOff,
  lit,
}: {
  run: boolean;
  on: string;
  off: string;
  textOn: string;
  textOff: string;
  /** optional: only light these codes; default lights all */
  lit?: Set<string>;
}) {
  return (
    <div
      className="grid gap-[4px] md:gap-[6px] w-full"
      style={{ gridTemplateColumns: "repeat(11, minmax(0, 1fr))", gridTemplateRows: "repeat(8, auto)" }}
    >
      {US_TILES.map(([code, c, r]) => {
        const light = run && (!lit || lit.has(code));
        return (
          <motion.div
            key={code}
            className="aspect-square rounded-[3px] flex items-center justify-center font-semibold"
            style={{ gridColumn: c + 1, gridRow: r + 1, fontSize: "clamp(7px, 1.6vw, 11px)" }}
            initial={{ backgroundColor: off, color: textOff }}
            animate={{ backgroundColor: light ? on : off, color: light ? textOn : textOff }}
            transition={{ delay: light ? 0.3 + c * 0.09 + r * 0.03 : 0, duration: 0.35 }}
          >
            {code}
          </motion.div>
        );
      })}
    </div>
  );
}
