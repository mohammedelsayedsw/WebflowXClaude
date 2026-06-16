"use client";

/**
 * OperatingViewRadial — the page's signature visual.
 * Stores fan across the top, the shared systems sit underneath, and every
 * node connects into one central hub: "many stores, one connected view".
 *
 * Robust + responsive: connector lines live in an SVG (viewBox 0..100,
 * preserveAspectRatio="none") so their coords are plain percentages; the
 * labelled nodes are absolutely-positioned HTML on top, using the same
 * percentages. No foreignObject, no layout math at runtime.
 */

type Node = { label: string; sub?: string; x: number; y: number; red?: boolean };

const HUB_FULL = { x: 50, y: 50 };
const STORES_FULL: Node[] = [
  { label: "UK", sub: "Plus", x: 18.7, y: 38 },
  { label: "EU", sub: "Plus", x: 30.7, y: 18.4, red: true },
  { label: "US", sub: "Advanced", x: 50, y: 11 },
  { label: "B2B", sub: "Plus", x: 69.3, y: 18.4 },
  { label: "Outlet", x: 81.3, y: 38 },
];
const SYSTEMS_FULL: Node[] = [
  { label: "orders & stock", x: 67, y: 62 },
  { label: "products & pricing", x: 60, y: 70 },
  { label: "content", x: 50, y: 73 },
  { label: "apps", x: 40, y: 70 },
  { label: "tracking", x: 33, y: 62 },
];

const HUB_COMPACT = { x: 50, y: 64 };
const STORES_COMPACT: Node[] = [
  { label: "UK", sub: "Plus", x: 15, y: 28 },
  { label: "EU", sub: "Plus", x: 38, y: 13, red: true },
  { label: "US", sub: "Advanced", x: 62, y: 13 },
  { label: "B2B", sub: "Plus", x: 85, y: 28 },
];

export function OperatingViewRadial({
  theme = "bright",
  compact = false,
}: {
  theme?: "dark" | "bright";
  compact?: boolean;
}) {
  const dark = theme === "dark";
  const hub = compact ? HUB_COMPACT : HUB_FULL;
  const stores = compact ? STORES_COMPACT : STORES_FULL;
  const systems = compact ? [] : SYSTEMS_FULL;

  const line = dark ? "rgba(255,255,255,0.14)" : "rgba(63,74,175,0.30)";
  const mintLine = "rgba(110,247,110,0.30)";
  const storeNode = dark
    ? "border-white/12 bg-white/[0.05] text-white"
    : "border-[var(--sw-black)]/12 bg-white text-[var(--sw-black)]";
  const sysNode = dark
    ? "border-white/10 bg-white/[0.03] text-white/70"
    : "border-[var(--sw-black)]/10 bg-white/70 text-[var(--sw-black)]/75";

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: compact ? "5 / 4" : "19 / 16" }}
    >
      {/* connector lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {stores.map((n) => (
          <line
            key={`s-${n.label}`}
            x1={n.x}
            y1={n.y}
            x2={hub.x}
            y2={hub.y}
            stroke={n.red ? "#e04f4f" : compact ? mintLine : line}
            strokeWidth={1}
            strokeDasharray={n.red ? "3 3" : undefined}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {systems.map((n) => (
          <line
            key={`l-${n.label}`}
            x1={hub.x}
            y1={hub.y}
            x2={n.x}
            y2={n.y}
            stroke={line}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* hub */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[4px] px-4 py-3 text-center"
        style={{
          left: `${hub.x}%`,
          top: `${hub.y}%`,
          background: dark ? "rgba(255,255,255,0.06)" : "rgba(63,74,175,0.08)",
          border: dark
            ? "1px solid rgba(255,255,255,0.18)"
            : "1px solid rgba(63,74,175,0.35)",
          borderLeft: dark ? "2px solid var(--sw-mint)" : undefined,
          minWidth: compact ? "44%" : "26%",
        }}
      >
        <div
          className="font-head font-semibold leading-tight text-[13px] md:text-[15px]"
          style={{ color: dark ? "var(--sw-mint)" : "var(--sw-blue)" }}
        >
          one connected view
        </div>
        {!compact && (
          <div
            className={`mt-0.5 text-[11px] md:text-[12px] ${
              dark ? "text-white/55" : "text-[var(--sw-black)]/55"
            }`}
          >
            every store, every system
          </div>
        )}
      </div>

      {/* store nodes */}
      {stores.map((n) => (
        <div
          key={`sn-${n.label}`}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-[4px] border px-3 py-2 text-center ${storeNode}`}
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            borderColor: n.red ? "#e04f4f" : undefined,
          }}
        >
          {n.red && (
            <span
              className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full"
              style={{ background: "#e04f4f" }}
              aria-hidden
            />
          )}
          <div className="font-head font-semibold leading-none text-[13px] md:text-[15px]">
            {n.label}
          </div>
          {n.sub && (
            <div
              className={`mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.12em] ${
                dark ? "text-white/45" : "text-[var(--sw-black)]/45"
              }`}
            >
              {n.sub}
            </div>
          )}
        </div>
      ))}

      {/* system nodes */}
      {systems.map((n) => (
        <div
          key={`syn-${n.label}`}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-[4px] border px-3 py-1.5 text-center text-[11px] md:text-[12px] ${sysNode}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.label}
        </div>
      ))}

      {/* red drift micro-label (full only) */}
      {!compact && (
        <div
          className="absolute text-[10px] md:text-[11px] leading-tight"
          style={{ left: "30.7%", top: "8%", transform: "translateX(-50%)", color: "#e04f4f" }}
        >
          one store drifted
        </div>
      )}
    </div>
  );
}
