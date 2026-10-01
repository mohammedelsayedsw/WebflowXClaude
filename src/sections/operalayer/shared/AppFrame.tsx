"use client";

/**
 * Dark glass app window used for every OperaLayer product mock across the
 * pillar and module pages, so the four pages show one product, not four
 * illustrations. The bar names the module the way the real app does
 * (operalayer.app / <module>).
 */
export function AppFrame({
  module,
  status,
  children,
  className = "",
  tone = "dark",
}: {
  module: string;
  status?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div
      className={`relative rounded-[4px] overflow-hidden text-left ${className}`}
      style={{
        background: light ? "#ffffff" : "rgba(16,19,44,0.78)",
        border: light ? "1px solid rgba(16,19,44,0.12)" : "1px solid rgba(255,255,255,0.12)",
        boxShadow: light
          ? "0 30px 60px -30px rgba(16,19,44,0.25)"
          : "0 40px 80px -40px rgba(0,0,0,0.7)",
        backdropFilter: light ? undefined : "blur(14px)",
      }}
    >
      <div
        className={`flex items-center justify-between gap-4 px-4 md:px-5 h-10 ${
          light ? "border-b border-[var(--sw-black)]/10" : "border-b border-white/10"
        }`}
      >
        <div className={`label-code truncate ${light ? "text-[var(--sw-black)]/55" : "text-white/55"}`}>
          operalayer.app <span className={light ? "text-[var(--sw-black)]/25" : "text-white/25"}>/</span>{" "}
          <span className={light ? "text-[var(--sw-black)]" : "text-white/90"}>{module}</span>
        </div>
        {status && (
          <div className={`label-code flex items-center gap-2 shrink-0 ${light ? "text-[var(--sw-black)]/55" : "text-white/55"}`}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--sw-mint)] opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--sw-mint)]" />
            </span>
            {status}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
