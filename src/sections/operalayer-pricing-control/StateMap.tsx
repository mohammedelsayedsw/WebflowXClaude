"use client";

import { motion, useReducedMotion } from "motion/react";
import { US_TILES } from "@/sections/operalayer/shared/UsTiles";
import { C } from "@/sections/operalayer/kit/ui";

/**
 * The 50 states as square tiles. `on` lights them west to east like a price
 * update rolling out; `focus` outlines the state the side panel is showing.
 */
export function StateMap({
  on,
  focus,
  dimmed,
  onPick,
}: {
  on: boolean;
  focus?: string;
  dimmed?: Set<string>;
  onPick?: (code: string) => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div
      className="grid gap-[0.28em] w-full"
      style={{ gridTemplateColumns: "repeat(11, minmax(0, 1fr))", gridTemplateRows: "repeat(8, auto)" }}
    >
      {US_TILES.map(([code, c, r]) => {
        const isFocus = code === focus;
        const dim = dimmed?.has(code);
        const Tag = onPick ? motion.button : motion.div;
        return (
          <Tag
            key={code}
            type={onPick ? "button" : undefined}
            onClick={onPick ? () => onPick(code) : undefined}
            className="aspect-square rounded-[2px] flex items-center justify-center font-semibold"
            style={{
              gridColumn: c + 1,
              gridRow: r + 1,
              fontSize: "0.72em",
              boxShadow: isFocus ? `0 0 0 2px ${C.beige}` : "none",
              cursor: onPick ? "pointer" : undefined,
            }}
            initial={false}
            animate={{
              backgroundColor: dim ? "rgba(255,90,49,0.85)" : on ? "rgba(110,247,110,0.92)" : "rgba(255,255,255,0.06)",
              color: on || dim ? C.ink : C.faint,
            }}
            transition={{ delay: reduce || !on ? 0 : 0.1 + c * 0.11 + r * 0.035, duration: 0.35 }}
          >
            {code}
          </Tag>
        );
      })}
    </div>
  );
}
