"use client";

/**
 * OperatingViewMock — a clean product UI panel: one screen across every store.
 */

type Row = { name: string; plan: string; rev: string; warn?: boolean };

const stores: Row[] = [
  { name: "UK store", plan: "Shopify Plus", rev: "£12.4k" },
  { name: "EU store", plan: "Shopify Plus", rev: "€9.8k", warn: true },
  { name: "US store", plan: "Advanced", rev: "$15.1k" },
  { name: "B2B store", plan: "Shopify Plus", rev: "$7.2k" },
  { name: "Outlet", plan: "Basic", rev: "$3.0k" },
];

const kpis = [
  { label: "Orders today", value: "1,284" },
  { label: "Revenue today", value: "$47.5k" },
  { label: "Failed syncs", value: "0" },
];

function Spark() {
  return (
    <svg viewBox="0 0 280 48" className="h-12 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(63,74,175,0.18)" />
          <stop offset="100%" stopColor="rgba(63,74,175,0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 L40,34 L80,37 L120,26 L160,29 L200,16 L240,20 L280,8"
        fill="none"
        stroke="var(--sw-blue)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0,40 L40,34 L80,37 L120,26 L160,29 L200,16 L240,20 L280,8 L280,48 L0,48 Z"
        fill="url(#sparkfill)"
        stroke="none"
      />
    </svg>
  );
}

export function OperatingViewMock() {
  return (
    <div
      className="w-full max-w-[580px] rounded-[14px] bg-white text-[var(--sw-black)] overflow-hidden"
      style={{
        border: "1px solid rgba(16,19,44,0.06)",
        boxShadow: "0 40px 90px -24px rgba(7,10,30,0.7)",
      }}
    >
      <div className="px-6 md:px-7 pt-6 pb-5 border-b border-[var(--sw-black)]/8">
        <div className="font-head font-semibold text-[16px] md:text-[17px] leading-none">
          Operating view
        </div>
        <div className="text-[12px] md:text-[13px] text-[var(--sw-black)]/45 mt-1.5">
          5 Shopify stores, connected
        </div>
      </div>

      <div className="px-6 md:px-7 py-2.5">
        {stores.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between py-3 border-b border-[var(--sw-black)]/[0.06] last:border-0"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: s.warn ? "#e0a93f" : "#22c55e" }}
              />
              <span className="font-head font-medium text-[14px]">{s.name}</span>
              <span className="text-[12px] text-[var(--sw-black)]/40">{s.plan}</span>
            </div>
            <div className="flex items-center gap-4">
              {s.warn && (
                <span className="text-[11px] font-medium" style={{ color: "#b07d1f" }}>
                  needs sync
                </span>
              )}
              <span className="text-[13px] tabular-nums text-[var(--sw-black)]/70 w-[56px] text-right">
                {s.rev}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 border-t border-[var(--sw-black)]/8">
        {kpis.map((k, i) => (
          <div
            key={k.label}
            className={`px-6 md:px-7 py-5 ${i > 0 ? "border-l border-[var(--sw-black)]/8" : ""}`}
          >
            <div className="text-[11px] text-[var(--sw-black)]/45">{k.label}</div>
            <div className="font-head font-semibold text-[19px] md:text-[22px] mt-1.5 tabular-nums">
              {k.value}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-7 pt-4 pb-6 border-t border-[var(--sw-black)]/8">
        <div className="text-[11px] text-[var(--sw-black)]/45 mb-2">Revenue, last 30 days</div>
        <Spark />
      </div>
    </div>
  );
}
