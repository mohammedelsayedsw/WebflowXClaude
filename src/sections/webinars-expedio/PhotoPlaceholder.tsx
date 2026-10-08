import { User } from "lucide-react";

/* TODO before publish: replace with the speaker photos. */
export function PhotoPlaceholder({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center rounded-[4px] border ${
        dark
          ? "border-white/15 bg-white/[0.06] text-white/40"
          : "border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-black)]/30"
      } ${className}`}
    >
      <User className="h-1/2 w-1/2" strokeWidth={1.5} />
    </span>
  );
}
