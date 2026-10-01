"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { assetUrl } from "@/lib/assets";

/**
 * A guided tour through real OperaLayer screens.
 *
 * Every shot is a 2560 px wide screenshot of the live app. A shot names the
 * point to look at (fx, fy as fractions of the image) and how far to zoom.
 * The frame moves there with one transform, so the motion stays smooth, and an
 * optional box marks the exact part the step talks about.
 */
export type Shot = {
  src: string;
  /** image size in px */
  w: number;
  h: number;
  /** focus point, 0..1 of the image */
  fx: number;
  fy: number;
  /** 1 = image width fills the frame */
  zoom: number;
  /** highlight box in 0..1 image units */
  mark?: { x: number; y: number; w: number; h: number };
};

const ease = [0.65, 0, 0.35, 1] as [number, number, number, number];

function useSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [s, setS] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      setS((p) => (p.w === width && p.h === height ? p : { w: width, h: height }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return { ref, ...s };
}

function camera(shot: Shot, vw: number, vh: number) {
  const W = vw * shot.zoom;
  const H = W * (shot.h / shot.w);
  let x = vw / 2 - shot.fx * W;
  let y = vh / 2 - shot.fy * H;
  // never show empty space past the edges of the screenshot
  x = Math.min(0, Math.max(vw - W, x));
  y = H <= vh ? 0 : Math.min(0, Math.max(vh - H, y));
  return { x, y, W, H };
}

export function TourFrame({ shots, step }: { shots: Shot[]; step: number }) {
  const { ref, w: vw, h: vh } = useSize<HTMLDivElement>();
  const reduce = useReducedMotion();
  const shot = shots[Math.min(step, shots.length - 1)];
  // lay every image out at the largest zoom it is ever shown at and only
  // scale it down, so the browser never upscales a rasterized layer
  const zMax = Math.max(...shots.filter((s) => s.src === shot.src).map((s) => s.zoom));
  const cam = vw ? camera(shot, vw, vh) : null;
  const baseW = vw * zMax;
  const baseH = baseW * (shot.h / shot.w);

  return (
    <div
      className="relative w-full rounded-[6px] overflow-hidden"
      style={{
        background: "#0d0d10",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 50px 120px -40px rgba(0,0,0,0.85)",
      }}
    >
      <div className="h-7 md:h-8 flex items-center gap-1.5 px-3 border-b border-white/[0.08] bg-[#141418]">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      <div ref={ref} className="relative w-full aspect-[16/10] overflow-hidden">
        <AnimatePresence initial={false}>
          {cam && (
            <motion.div
              key={shot.src}
              className="absolute left-0 top-0"
              style={{ width: baseW, height: baseH, transformOrigin: "0 0", willChange: "transform" }}
              initial={{ opacity: 0, x: cam.x, y: cam.y, scale: shot.zoom / zMax }}
              animate={{ opacity: 1, x: cam.x, y: cam.y, scale: shot.zoom / zMax }}
              exit={{ opacity: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.9, ease, opacity: { duration: 0.45 } }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetUrl(shot.src)} alt="" draggable={false} className="block w-full h-full select-none" />
              <AnimatePresence>
                {shot.mark && (
                  <motion.div
                    key={`${shot.mark.x}-${shot.mark.y}`}
                    className="absolute rounded-[4px] pointer-events-none"
                    style={{
                      left: `${shot.mark.x * 100}%`,
                      top: `${shot.mark.y * 100}%`,
                      width: `${shot.mark.w * 100}%`,
                      height: `${shot.mark.h * 100}%`,
                      boxShadow: `0 0 0 ${2 / (shot.zoom / zMax)}px #6ef76e, 0 0 0 9999px rgba(8,8,12,0.5)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: reduce ? 0 : 0.7 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
