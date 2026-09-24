"use client";

/**
 * One small drawing per step, each doing a single short motion as its step
 * appears. They are line drawings in the screen's own green so they read as
 * part of the same object as the AS/400 visuals elsewhere on the page.
 *
 * Every animated part is keyed on `on`, so the motion runs when the step
 * arrives and never again. Under prefers-reduced-motion the keyframes are
 * switched off in globals.css and each icon paints its end state.
 */

const S = "var(--sw-mint)";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className="h-7 w-7"
      fill="none"
      stroke={S}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** An envelope with the document coming out of it. */
export function IconArrives({ on }: { on: boolean }) {
  return (
    <Frame>
      <g className={on ? "sw-doc-out" : undefined} opacity={on ? 1 : 0}>
        <rect x="9.5" y="4" width="9" height="11" rx="1" />
        <path d="M11.5 7.5h5M11.5 10h5M11.5 12.5h3" opacity="0.6" />
      </g>
      <path d="M4 13.5h20v9a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 4 22.5z" />
      <path d="M4 13.5l10 6 10-6" />
    </Frame>
  );
}

/** A page with a line scanning down it. */
export function IconReads({ on }: { on: boolean }) {
  return (
    <Frame>
      <rect x="6" y="3.5" width="16" height="21" rx="1.5" />
      <path d="M9.5 9h9M9.5 13h9M9.5 17h5.5" opacity="0.55" />
      <path
        d="M7.5 8h13"
        stroke={S}
        strokeWidth={1.8}
        className={on ? "sw-scan" : undefined}
        opacity={on ? undefined : 0}
      />
    </Frame>
  );
}

/** A screen whose fields fill in one after another. */
export function IconFills({ on }: { on: boolean }) {
  return (
    <Frame>
      <rect x="3" y="5" width="22" height="15" rx="1.5" />
      <path d="M10 23.5h8" opacity="0.6" />
      <path d="M14 20v3.5" opacity="0.6" />
      {[9, 12.5, 16].map((y, i) => (
        <path
          key={y}
          d={`M6.5 ${y}h${i === 2 ? 8 : 15}`}
          strokeWidth={1.6}
          className={on ? "sw-field-in" : undefined}
          style={on ? { animationDelay: `${i * 0.14}s` } : undefined}
          opacity={on ? undefined : 0}
        />
      ))}
    </Frame>
  );
}

/** An Enter key, pressed once. */
export function IconApproves({ on }: { on: boolean }) {
  return (
    <Frame>
      <g className={on ? "sw-key-press" : undefined}>
        <rect x="4" y="7" width="20" height="14" rx="2" />
        <path d="M19 11v4h-9" />
        <path d="M12.5 12.5L10 15l2.5 2.5" />
      </g>
    </Frame>
  );
}

export const STEP_ICONS = [IconArrives, IconReads, IconFills, IconApproves];
