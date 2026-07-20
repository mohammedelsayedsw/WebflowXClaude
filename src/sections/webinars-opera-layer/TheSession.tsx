"use client";

import { Search, Rocket, Calculator, Gift } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const takeaways: {
  icon: typeof Search;
  title: React.ReactNode;
  body: string;
}[] = [
  {
    icon: Search,
    title: (
      <>
        Where your gaps are
        <br />
        costing you
      </>
    ),
    body:
      "A clear read on which disconnected-systems problems are quietly draining time and margin, so you know exactly what to fix first.",
  },
  {
    icon: Rocket,
    title: "Your first move, mapped",
    body:
      "The one workflow to connect first and a realistic sense of what it takes to get it live, so you can start without a big project.",
  },
  {
    icon: Calculator,
    title: "The numbers to decide",
    body:
      "An honest read on effort, systems, and timeline, so you can size the opportunity before you spend a cent.",
  },
];

export function TheSession() {
  return (
    <section
      id="the-session"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[720px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">5</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The takeaway</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
              Leave with things you can{" "}
              <span className="text-[var(--sw-blue)]">actually use</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[58ch]">
              Not theory you could get from any chatbot. You walk away with
              concrete moves for your own operations, and a working demo built on
              your own data if you join live.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {takeaways.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <li className="group h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7 md:p-8 transition-all hover:border-[var(--sw-blue)]/35 hover:-translate-y-0.5">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)] mb-5"
                  aria-hidden
                >
                  <t.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[22px] leading-[1.2]">
                  {t.title}
                </div>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">
                  {t.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Offer for live attendees: a working demo built on their own data. */}
        <Reveal delay={0.1}>
          <div
            className="mt-4 md:mt-5 rounded-[4px] border p-6 sm:p-8 md:p-9 flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
            style={{
              background: "rgba(63,74,175,0.06)",
              borderColor: "rgba(63,74,175,0.30)",
            }}
          >
            <span
              className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[4px] text-white"
              style={{ background: "var(--sw-blue)" }}
              aria-hidden
            >
              <Gift className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <div className="flex-1">
              <div className="label-code text-[var(--sw-blue)] text-[10px] mb-2">
                For joining live
              </div>
              <div className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[24px] leading-[1.2]">
                Join live and we will build a working demo on your own data
              </div>
              <p className="mt-2.5 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed max-w-[68ch]">
                Bring a workflow you run by hand today. We take your own data and
                build a working demo of it, so you see the module running on your
                numbers, not a canned example.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
