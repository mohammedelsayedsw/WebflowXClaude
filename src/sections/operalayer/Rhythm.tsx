"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

const STEPS = [
  {
    when: "Week 1",
    start: 0,
    span: 1,
    title: "Working prototype",
    body: "A clickable prototype on your real data and your real workflow, so everyone can see it is the right thing before it gets built.",
  },
  {
    when: "Weeks 1 to 2",
    start: 0.5,
    span: 1.5,
    title: "Review with the people who will use it",
    body: "Your team works through the prototype with us, and it changes in front of them until they sign it off.",
  },
  {
    when: "Weeks 2 to 3",
    start: 1.5,
    span: 1.5,
    title: "Production build",
    body: "We write the code and connect it to your systems. Access control and an audit trail are part of it from the first day.",
  },
  {
    when: "Week 4",
    start: 3,
    span: 1,
    title: "Live, trained, and documented",
    body: "The module goes live, your team is trained, and the documentation is yours. 30 days of support after launch are included.",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Rhythm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const go = inView || reduce;

  return (
    <section id="rhythm" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(800px 500px at 90% 20%, rgba(63,74,175,0.22), transparent 60%)" }}
      />
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end">
          <Reveal>
            <div className="label-code text-white/55 mb-5">How a module is built</div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[16ch]">
              A prototype in week one and{" "}
              <span className="text-[var(--sw-mint)]">live in week four</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[48ch]">
              Every module follows the same fixed-scope rhythm, whether it reads
              invoices or speeds up the month-end close. The second
              module goes faster, because the connections to your systems are already built.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="mt-16 md:mt-20">
          {/* week ruler */}
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[16rem_1fr] gap-x-10">
            <div className="hidden md:block" />
            <div className="relative grid grid-cols-4 border-b border-white/15 pb-3">
              {[1, 2, 3, 4].map((w) => (
                <div key={w} className="label-code text-white/45">Week {w}</div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* week gridlines + sweeping cursor, aligned with the bar column */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[16rem_1fr] gap-x-10" aria-hidden>
              <div className="hidden md:block" />
              <div className="relative">
                {[1, 2, 3].map((w) => (
                  <div key={w} className="absolute inset-y-0 w-px bg-white/[0.07]" style={{ left: `${w * 25}%` }} />
                ))}
                {go && !reduce && (
                  <motion.div
                    className="absolute inset-y-0 w-px bg-[var(--sw-mint)]/60"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 3.2, ease: "linear", delay: 0.2 }}
                  />
                )}
              </div>
            </div>

            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="relative grid grid-cols-[minmax(0,1fr)] md:grid-cols-[16rem_1fr] gap-x-10 gap-y-3 py-6 md:py-7 border-b border-white/10"
              >
                <div>
                  <div className="label-code text-[var(--sw-mint)]">{s.when}</div>
                  <div className="mt-2 font-head text-white text-[18px] md:text-[20px] leading-tight">{s.title}</div>
                </div>
                <div>
                  <div className="relative h-2.5 bg-white/[0.06] rounded-[2px]">
                    <motion.div
                      className="absolute inset-y-0 rounded-[2px]"
                      style={{
                        left: `${(s.start / 4) * 100}%`,
                        width: `${(s.span / 4) * 100}%`,
                        transformOrigin: "left",
                        background: i === STEPS.length - 1 ? "var(--sw-mint)" : "rgba(110,247,110,0.55)",
                      }}
                      initial={{ scaleX: reduce ? 1 : 0 }}
                      animate={{ scaleX: go ? 1 : 0 }}
                      transition={{ delay: 0.2 + s.start * 0.8, duration: 0.8 * s.span, ease }}
                    />
                  </div>
                  <motion.p
                    initial={{ opacity: reduce ? 1 : 0 }}
                    animate={{ opacity: go ? 1 : 0 }}
                    transition={{ delay: 0.4 + s.start * 0.8, duration: 0.5 }}
                    className="mt-4 text-white/70 text-[15px] md:text-[16px] leading-relaxed max-w-[60ch]"
                    style={{ marginLeft: `min(${(s.start / 4) * 100}%, calc(100% - 22rem))` }}
                  >
                    {s.body}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
