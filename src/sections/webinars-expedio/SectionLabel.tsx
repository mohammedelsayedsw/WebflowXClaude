/** The numbered section label used across the webinar pages. `line={false}` drops the dash between number and label. */
export function SectionLabel({
  n,
  children,
  dark = false,
  line = true,
}: {
  n: number;
  children: React.ReactNode;
  dark?: boolean;
  line?: boolean;
}) {
  return dark ? (
    <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
      <span className="text-white/55">{n}</span>
      {line && <span className="h-px w-6 bg-white/20" />}
      <span>{children}</span>
    </div>
  ) : (
    <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
      <span className="text-[var(--sw-black)]/55">{n}</span>
      {line && <span className="h-px w-6 bg-[var(--sw-black)]/20" />}
      <span>{children}</span>
    </div>
  );
}
