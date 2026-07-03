"use client";

export type Sev = "critical" | "high" | "medium" | "low";

// Severity palette — brand accents only. Red (#e04f4f) is the brand's diagram
// red, used here strictly for the Critical severity chip.
export const sevColor: Record<Sev, string> = {
  critical: "#e04f4f",
  high: "var(--sw-orange)",
  medium: "var(--sw-blue)",
  low: "var(--sw-mint)",
};

export const sevLabel: Record<Sev, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
};

export function SevBadge({ level }: { level: Sev }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 font-head text-[10px] font-bold uppercase tracking-[0.12em]"
      style={{
        color: sevColor[level],
        background: "rgba(255,255,255,0.06)",
        boxShadow: `inset 0 0 0 1px ${sevColor[level]}`,
      }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: sevColor[level] }}
      />
      {sevLabel[level]}
    </span>
  );
}
