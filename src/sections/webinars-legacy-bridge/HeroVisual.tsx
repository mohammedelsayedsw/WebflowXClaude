"use client";

/**
 * The email above, the AS/400 screen below, and the reading that joins them.
 *
 * Both boxes are on screen the whole time and nothing travels between them.
 * The only movement is a line sweeping down the attachment: as it passes a
 * detail the detail lights up, and the same instant that value is in its field
 * on the screen underneath. That is the product in one picture, and it reads
 * without a caption.
 *
 * The two sit 12px apart and share a width so they read as one object rather
 * than two cards that happen to be stacked.
 *
 * Under prefers-reduced-motion the finished state is painted once: every
 * detail highlighted, every field filled, waiting for approval.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { Caret, DotRow, ScreenShell } from "./ScreenShell";

/** One row of the attachment, and the field on the screen it lands in. */
const LINES: { doc: string; label: string; value: string }[] = [
  { doc: "Nordic Supply AB", label: "Supplier", value: "NORDIC SUPPLY AB" },
  { doc: "Invoice INV-48120", label: "Invoice no", value: "INV-48120" },
  { doc: "Amount 12 480.00", label: "Amount", value: "12,480.00" },
  { doc: "Due 14/11/26", label: "Due date", value: "14/11/26" },
];

/** Height of one attachment row, in px. The scan line steps by this. */
const ROW = 26;
const STEP_MS = 900;
const HOLD_MS = 2000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function HeroVisual() {
  const [shown, setShown] = useState(LINES.length);
  const root = useRef<HTMLDivElement>(null);
  const runId = useRef(0);
  const started = useRef(false);
  const visible = useRef(false);

  const play = useCallback(async () => {
    const id = ++runId.current;
    const live = () => runId.current === id;

    while (live()) {
      setShown(0);
      for (let i = 0; i < LINES.length; i++) {
        await sleep(STEP_MS);
        if (!live()) return;
        setShown(i + 1);
      }
      await sleep(HOLD_MS);
      if (!live()) return;
      // Idle rather than loop to an empty room.
      while (live() && !visible.current) await sleep(400);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          visible.current = e.isIntersecting;
          if (e.isIntersecting && !started.current) {
            started.current = true;
            void play();
          }
        }),
      { threshold: 0.25 }
    );
    if (root.current) io.observe(root.current);

    const runs = runId;
    return () => {
      io.disconnect();
      runs.current++;
    };
  }, [play]);

  const filled = shown >= LINES.length;

  return (
    <div ref={root} className="flex flex-col gap-3">
      {/* TOP - the email and its attachment */}
      <div className="rounded-[4px] border border-white/12 bg-white/[0.04] p-4 md:p-5">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.05] text-white/70"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <div className="font-head font-bold text-white text-[13px] md:text-[14px] leading-tight truncate">
              Nordic Supply AB
            </div>
            <div className="text-white/55 text-[12px] md:text-[13px] leading-snug truncate">
              Invoice for October
            </div>
          </div>
        </div>

        {/* The attachment. White, because it is a document and everything
            around it is not. */}
        <div className="mt-3 md:mt-4 rounded-[4px] bg-white overflow-hidden">
          <div className="px-3 py-2 border-b border-[var(--sw-black)]/10 font-mono text-[10px] md:text-[11px] tracking-[0.04em] text-[var(--sw-black)]/55">
            INVOICE &middot; INV-48120.pdf
          </div>

          <div className="relative px-3 py-2">
            {LINES.map((l, i) => (
              <div
                key={l.doc}
                className="flex items-center font-mono text-[11px] md:text-[12.5px] transition-colors duration-200"
                style={{
                  height: ROW,
                  color: i < shown ? "#12702f" : "rgba(16,19,44,0.75)",
                  background: i < shown ? "rgba(110,247,110,0.22)" : "transparent",
                  borderRadius: 2,
                  paddingInline: 4,
                }}
              >
                {l.doc}
              </div>
            ))}

            {/* The line doing the reading. It steps down a row at a time, and
                the transition is what makes it a sweep rather than a jump. */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-2 right-2 h-px"
              style={{
                top: 8 + shown * ROW,
                background: "#3bf07a",
                boxShadow: "0 0 6px 1px rgba(59,240,122,0.85)",
                opacity: filled ? 0 : 1,
                transition: `top ${STEP_MS}ms linear, opacity 300ms ease-out`,
              }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM - the screen the values land in */}
      <ScreenShell screenId="AP4010" title="Invoice entry">
        <div className="mt-3 md:mt-4 flex flex-col" aria-live="polite">
          {LINES.map((l, i) => (
            <DotRow key={l.label} label={l.label}>
              <span
                className={
                  "transition-opacity duration-200 " +
                  (i < shown ? "opacity-100" : "opacity-0")
                }
              >
                {i < shown ? l.value : " "}
              </span>
            </DotRow>
          ))}
        </div>

        <div className="mt-4 md:mt-5 min-h-[1.75em]">
          {filled ? (
            <div className="flex items-center gap-2.5">
              <span className="text-[#7dffb0]">Waiting for your approval</span>
              <span className="rounded-[2px] border border-[#7dffb0] px-1.5 text-[#7dffb0] text-[10px] md:text-[11px] leading-[1.6]">
                Enter
              </span>
              <Caret />
            </div>
          ) : null}
        </div>
      </ScreenShell>
    </div>
  );
}
