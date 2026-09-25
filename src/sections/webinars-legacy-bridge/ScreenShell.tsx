"use client";

/**
 * The AS/400 screen chrome, with nothing in it.
 *
 * The hero screen, the demo screen and the two race screens all have to be the
 * same object seen four times, so the frame, the title row, the field row and
 * the F-key legend live here and the callers supply only what is inside.
 */

export const FKEYS = "F3=Exit   F5=Refresh   F12=Cancel";

export function ScreenShell({
  screenId,
  title,
  children,
  className = "",
  dense = false,
}: {
  screenId: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  /**
   * Tighter padding and leading, tied to viewport height. The hero has to fit
   * a screen, a document and the logo row into one viewport, so there it
   * shrinks with the window; everywhere else the screen keeps its full size.
   */
  dense?: boolean;
}) {
  return (
    <div
      className={`rounded-[4px] border border-[var(--sw-mint)]/25 bg-black overflow-hidden ${className}`}
      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.6), 0 24px 60px rgba(0,0,0,0.45)" }}
    >
      <div
        className={
          "font-mono text-[#3bf07a] text-[11px] md:text-[12.5px] " +
          (dense ? "" : "p-4 md:p-5 leading-[1.75]")
        }
        style={
          dense
            ? {
                padding: "clamp(7px, 1.6vh, 20px)",
                lineHeight: "clamp(1.25, 2.2vh, 1.75)",
              }
            : undefined
        }
      >
        <div className="flex justify-between gap-4 text-[#3bf07a]/70">
          <span>{screenId}</span>
          <span className="hidden sm:inline">AS/400</span>
        </div>

        <div className="mt-1 text-center uppercase tracking-[0.12em] text-[#7dffb0]">
          {title}
        </div>

        {children}

        <div
          className="border-t border-[#3bf07a]/20 pt-2 text-[#3bf07a]/55 truncate"
          style={dense ? { marginTop: "clamp(6px, 1.4vh, 16px)" } : undefined}
        >
          {FKEYS}
        </div>
      </div>
    </div>
  );
}

/**
 * One field row. The dot leader takes the slack, so every value starts at the
 * same column however long its label is.
 */
export function DotRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="shrink-0">{label}</span>
      <span
        aria-hidden
        className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-[#3bf07a]/35"
      >
        {". ".repeat(60)}
      </span>
      <span className="shrink-0">{children}</span>
    </div>
  );
}

/** The block cursor that rests at the point of entry. */
export function Caret({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-[1.05em] w-[0.6em] bg-[#7dffb0] sw-caret align-middle ${className}`}
    />
  );
}
