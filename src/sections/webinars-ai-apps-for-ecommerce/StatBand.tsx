"use client";

const stats: { lead: string; label: string }[] = [
  { lead: "2 weeks", label: "first setup live" },
  { lead: "Both platforms", label: "one build" },
  { lead: "Live demo", label: "a real store, run from the chat" },
];

export function StatBand() {
  return (
    <section
      aria-label="At a glance"
      className="bg-[var(--sw-beige)] border-y border-[var(--sw-black)]/10"
    >
      <div className="wrap py-5 md:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8">
          {stats.map((s) => (
            <div key={s.lead} className="flex items-baseline gap-1.5">
              <span className="font-head font-bold text-[var(--sw-black)] text-[14px] md:text-[15px] leading-snug shrink-0">
                {s.lead}
              </span>
              <span className="text-[var(--sw-black)]/45 text-[13px] md:text-[14px] leading-snug">
                &middot; {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
