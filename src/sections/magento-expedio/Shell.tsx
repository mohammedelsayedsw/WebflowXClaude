export function Shell({ bare, id, children }: { bare?: boolean; id?: string; children: React.ReactNode }) {
  if (bare) return <>{children}</>;
  return (
    <section id={id} className="relative z-10 py-24 md:py-36">
      <div className="wrap">{children}</div>
    </section>
  );
}
