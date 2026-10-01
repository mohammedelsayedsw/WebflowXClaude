"use client";

import { STATUS_LABEL, type LineStatus } from "./data";

export function StatusChip({ status, light = false }: { status: LineStatus; light?: boolean }) {
  const ok = status === "agrees";
  const color = ok ? (light ? "#1f8a3a" : "var(--sw-mint)") : "var(--sw-orange)";
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[2px] px-2 py-0.5 text-[11px] font-medium"
      style={{
        color,
        background: ok
          ? light
            ? "rgba(31,138,58,0.08)"
            : "rgba(110,247,110,0.10)"
          : "rgba(255,90,49,0.10)",
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {STATUS_LABEL[status]}
    </span>
  );
}
