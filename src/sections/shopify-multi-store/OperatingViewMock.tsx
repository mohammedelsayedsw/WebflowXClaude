"use client";

/**
 * OperatingViewMock — a realistic product UI panel (not an abstract diagram).
 * A white "operating view" dashboard floating on the dark hero: one screen
 * across every Shopify store. Webflow-style "show the product" visual.
 */

type Row = { name: string; plan: string; rev: string; status: string; warn?: boolean };

const stores: Row[] = [
  { name: "UK store", plan: "Shopify Plus", rev: "£12.4k", status: "in sync" },
  { name: "EU store", plan: "Shopify Plus", rev: "€9.8k", status: "app drift", warn: true },
  { name: "US store", plan: "Advanced", rev: "$15.1k", status: "in sync" },
  { name: "B2B store", plan: "Shopify Plus", rev: "$7.2k", status: "in sync" },
  { name: "Outlet", plan: "Basic", rev: "$3.0k", status: "in sync" },
];

const kpis = [
  { label: "Orders today", value: "1,284" },
  { label: "Revenue today", value: "$47.5k" },
  { label: "Failed syncs", value: "0" },
];

function Spark() {
  // simple upward sparkline
  const pts = "0,26 18,22 36,24 54,16 72,18 90,9 108,12 126,4";
  return (
    <svg viewBox="0 0 126 30" className="h-8 w-full" preserveAspectRatio="none" aria-hidden>
      <polyline
        points={pts}
        fill="none"
        stroke="var(--sw-blue)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function OperatingViewMock() {
  return (
    <div
      className="w-full max-w-[560px] rounded-[12px] bg-white text-[var(--sw-black)] overflow-hidden"
      style={{
        border: "1px solid rgba(16,19,44,0.08)",
        boxShadow: "0 30px 80px -20px rgba(7,10,30,0.65), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* header */}
      <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-[var(--sw-black)]/8">
        <div>
          <div className="font-head font-semibold text-[15px] md:text-[16px] leading-none">
            Operating view
          </div>
          <div className="text-[12px] text-[var(--sw-black)]/50 mt-1">
            5 Shopify stores, connected
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--sw-black)]/10 px-2.5 py-1 text-[11px] text-[var(--sw-black)]/60">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#22c55e" }} />
          live
        </span>
      </div>

      {/* store rows */}
      <div className="px-5 md:px-6 py-2">
        {stores.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between py-2.5 border-b border-[var(--sw-black)]/6 last:border-0"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: s.warn ? "#e04f4f" : "#22c55e" }}
              />
              <span className="font-head font-medium text-[13px] md:text-[14px]">
                {s.name}
              </span>
              <span className="text-[11px] text-[var(--sw-black)]/40">{s.plan}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[13px] tabular-nums text-[var(--sw-black)]/70">{s.rev}</span>
              <span
                className="text-[11px] w-[60px] text-right"
                style={{ color: s.warn ? "#e04f4f" : "rgba(16,19,44,0.45)" }}
              >
                {s.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* kpi + spark */}
      <div className="grid grid-cols-3 border-t border-[var(--sw-black)]/8">
        {kpis.map((k, i) => (
          <div
            key={k.label}
            className={`px-5 md:px-6 py-4 ${i > 0 ? "border-l border-[var(--sw-black)]/8" : ""}`}
          >
            <div className="text-[11px] text-[var(--sw-black)]/45">{k.label}</div>
            <div className="font-head font-semibold text-[18px] md:text-[20px] mt-1 tabular-nums">
              {k.value}
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 md:px-6 pt-3 pb-5">
        <div className="text-[11px] text-[var(--sw-black)]/45 mb-1">Revenue, last 30 days</div>
        <Spark />
      </div>
    </div>
  );
}
