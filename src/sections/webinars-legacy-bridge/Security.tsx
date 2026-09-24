"use client";

import { BadgeCheck, FileClock, ShieldCheck, UserCheck } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const CARDS: { icon: typeof ShieldCheck; title: string; body: string }[] = [
  {
    icon: UserCheck,
    title: "Nothing is submitted without a person",
    body: "Every prepared entry waits for your team to approve it",
  },
  {
    icon: ShieldCheck,
    title: "You decide what it may do",
    body: "Access, permissions and the approval step are agreed with your team before anything runs",
  },
  {
    icon: FileClock,
    title: "Every action is recorded",
    body: "The audit trail shows each entry and who approved it",
  },
  {
    icon: BadgeCheck,
    title: "Certified for security",
    body: "The company behind LegacyBridge holds ISO 9001, ISO/IEC 27001 and ISO/IEC 27017, on PCI DSS-compliant infrastructure",
  },
];

export function Security() {
  return (
    <section
      id="security-and-control"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
            <span className="text-white/55">6</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Security and control</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[22ch]">
            Your team stays in control of{" "}
            <span style={{ color: "var(--sw-mint)" }}>every entry</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li className="flex h-full gap-5 rounded-[4px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.04] text-[var(--sw-mint)]"
                >
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="font-head font-bold text-white text-[17px] md:text-[19px] leading-tight">
                    {c.title}
                  </div>
                  <p className="mt-2.5 text-white/65 text-[14px] md:text-[15px] leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
