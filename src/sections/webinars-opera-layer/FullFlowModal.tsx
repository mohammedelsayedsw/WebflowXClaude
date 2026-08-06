"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus, RotateCcw, X } from "lucide-react";
import { FullFlowDiagram, flowLegend } from "./FullFlowDiagram";

const ZOOM_MIN = 1;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.5;

export function FullFlowModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [zoom, setZoom] = useState(ZOOM_MIN);
  const closeRef = useRef<HTMLButtonElement>(null);

  const clamp = useCallback(
    (z: number) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z)),
    [],
  );

  // Escape to close, and keep the page behind from scrolling.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  // Always reopen at fit-width rather than wherever the last visit left it.
  useEffect(() => {
    if (open) setZoom(ZOOM_MIN);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#05070f]/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="The full reconciliation flow"
            className="relative flex h-full w-full flex-col overflow-hidden border-[var(--sw-mint)]/15 bg-[var(--sw-black)] sm:h-[90vh] sm:max-w-[1400px] sm:rounded-[8px] sm:border"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-7">
              <div>
                <div className="font-head text-[16px] leading-tight text-white md:text-[18px]">
                  The full reconciliation flow
                </div>
                <div className="mt-1 text-[12px] text-white/55 md:text-[13px]">
                  Scroll sideways to follow it, or zoom in for the detail
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setZoom((z) => clamp(z - ZOOM_STEP))}
                  disabled={zoom <= ZOOM_MIN}
                  aria-label="Zoom out"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/15 text-white/75 transition-colors hover:border-white/35 hover:text-white disabled:opacity-30"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => clamp(z + ZOOM_STEP))}
                  disabled={zoom >= ZOOM_MAX}
                  aria-label="Zoom in"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/15 text-white/75 transition-colors hover:border-white/35 hover:text-white disabled:opacity-30"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom(ZOOM_MIN)}
                  aria-label="Reset zoom"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/15 text-white/75 transition-colors hover:border-white/35 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/25 text-white transition-colors hover:border-[var(--sw-mint)]/60 hover:text-[var(--sw-mint)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Legend */}
            <ul className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/10 px-5 py-3 md:px-7">
              {flowLegend.map((l) => (
                <li
                  key={l.label}
                  className="flex items-center gap-2 text-[11px] text-white/60 md:text-[12px]"
                >
                  <span
                    aria-hidden
                    className="inline-block h-3 w-5 rounded-[2px]"
                    style={{
                      border: `1px ${l.dashed ? "dashed" : "solid"} ${l.color}`,
                      background: l.color,
                      backgroundClip: "content-box",
                      opacity: 0.95,
                    }}
                  />
                  {l.label}
                </li>
              ))}
            </ul>

            {/* Diagram, scrollable in both directions */}
            <div className="min-h-0 flex-1 overflow-auto p-4 md:p-6">
              <div style={{ width: `${zoom * 100}%`, minWidth: 860 }}>
                <FullFlowDiagram />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
