export function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: string;
}) {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <div
        className="font-head text-[40px] md:text-[52px] lg:text-[64px] leading-none tabular-nums"
        style={{ color: accent ?? "var(--sw-white)" }}
      >
        {value}
      </div>
      <div className="label-code text-[10px] leading-snug">{label}</div>
    </div>
  );
}
