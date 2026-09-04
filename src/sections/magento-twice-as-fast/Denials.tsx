"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

/**
 * The three lines, one at a time. The section is three screens tall and its
 * content is pinned, so scrolling walks the reader through the lines: each
 * one brightens on its turn, the earlier ones dim behind it, and the last one
 * takes the accent colour and stays.
 */
const LINES = ["No new platform.", "No replatforming.", "Your Magento."];

function Line({
  progress,
  index,
  text,
}: {
  progress: MotionValue<number>;
  index: number;
  text: string;
}) {
  const n = LINES.length;
  const start = index / n;
  const end = (index + 1) / n;
  const first = index === 0;
  const last = index === n - 1;

  // Motion runs this on the native scroll timeline where the input range
  // becomes keyframe offsets, so every stop has to stay inside 0..1.
  const opacity = useTransform(
    progress,
    last ? [start, start + 0.1, 1] : [start, start + 0.1, end, end + 0.06],
    last ? [0.14, 1, 1] : [first ? 1 : 0.14, 1, 1, 0.28]
  );
  const x = useTransform(progress, [start, start + 0.1], [first ? 0 : 28, 0]);
  const color = useTransform(
    progress,
    [start, start + 0.1],
    last ? ["#ffffff", "#6ef76e"] : ["#ffffff", "#ffffff"]
  );

  return (
    <motion.p
      style={{ opacity, x, color }}
      className="font-head text-[38px] sm:text-[60px] md:text-[84px] lg:text-[112px] leading-[1.02] tracking-[-0.025em]"
    >
      {text}
    </motion.p>
  );
}

export function Denials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} id="before-you-ask" className="relative z-10 h-[300vh]">
      <div className="sticky top-0 h-[100svh] flex items-center">
        <div className="wrap w-full">
          <div className="label-code text-white/40 mb-8 md:mb-12">Before you ask</div>
          <div className="flex flex-col gap-2 md:gap-4">
            {LINES.map((t, i) => (
              <Line key={t} progress={scrollYProgress} index={i} text={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
