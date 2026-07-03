"use client";

const stats: { value: string; label: string }[] = [
  { value: "$10.22M", label: "average US data-breach cost, 2025" },
  { value: "53%", label: "of breaches expose customer PII" },
  { value: "62%", label: "of Magento stores unpatched after a critical flaw" },
];

export function StatsBar() {
  return (
    <div
      className="relative z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-5 md:py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex-1 ${
              i > 0 ? "sm:pl-8 md:pl-12 sm:border-l sm:border-white/12" : ""
            }`}
          >
            <span className="font-head font-bold text-white text-[15px] md:text-[17px] leading-[1.35]">
              <span style={{ color: "var(--sw-mint)" }}>{s.value}</span>{" "}
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
