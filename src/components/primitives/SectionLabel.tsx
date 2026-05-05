export function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="label-code mb-5 inline-flex items-center gap-3">
      {index && <span className="text-white/55">{index}</span>}
      {index && <span className="h-px w-6 bg-white/15" />}
      <span>{children}</span>
    </div>
  );
}
