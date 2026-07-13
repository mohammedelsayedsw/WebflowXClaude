"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const steps: { label: string; action: boolean }[] = [
  { label: "Flagged what needed attention", action: false },
  { label: "Diagnosed the cause", action: false },
  { label: "Reordered stock", action: true },
  { label: "Replied to the customer", action: true },
];

const STEP_MS = 1100;
const END_PAUSE_MS = 2600;

function TaskChecklist() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || reduceMotion) return;
    if (done < steps.length) {
      const t = setTimeout(() => setDone((d) => d + 1), STEP_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setDone(0), END_PAUSE_MS);
    return () => clearTimeout(t);
  }, [done, started, reduceMotion]);

  const doneCount = reduceMotion ? steps.length : done;

  return (
    <div ref={ref} className="space-y-2 sm:space-y-2.5">
      {steps.map((s, i) => {
        const isDone = i < doneCount;
        const isActive = !reduceMotion && i === doneCount;

        return (
          <motion.div
            key={s.label}
            className="flex items-center gap-3 rounded-[4px] border px-3.5 py-2.5 sm:py-3"
            animate={{
              borderColor: isDone
                ? "rgba(110,247,110,0.30)"
                : isActive
                  ? "rgba(255,255,255,0.20)"
                  : "rgba(255,255,255,0.09)",
              backgroundColor: isDone
                ? "rgba(110,247,110,0.05)"
                : isActive
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.02)",
            }}
            transition={{ duration: 0.35 }}
          >
            {/* indicator — square checkbox, matching the agenda checkmarks */}
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border"
              style={{
                borderColor: isDone
                  ? "rgba(110,247,110,0.45)"
                  : "rgba(255,255,255,0.15)",
                background: isDone
                  ? "rgba(110,247,110,0.10)"
                  : "rgba(255,255,255,0.04)",
              }}
            >
              {isDone ? (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                >
                  <Check className="h-4 w-4 text-[var(--sw-mint)]" strokeWidth={2.5} />
                </motion.span>
              ) : isActive ? (
                <motion.span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--sw-mint)" }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1, 0.85] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              )}
            </span>

            {/* task label + optional action marker */}
            <div className="flex-1 min-w-0 flex items-center gap-2">
              <span
                className={
                  "font-head font-semibold text-[13.5px] sm:text-[15px] leading-tight transition-colors " +
                  (isDone || isActive ? "text-white" : "text-white/45")
                }
              >
                {s.label}
              </span>
              {s.action && (
                <span className="inline-flex shrink-0 items-center rounded-[2px] border border-[var(--sw-mint)]/35 bg-[var(--sw-mint)]/[0.10] px-1.5 py-[3px] font-head font-semibold uppercase text-[8.5px] tracking-[0.12em] text-[var(--sw-mint)]">
                  Action
                </span>
              )}
            </div>

            {/* trailing status */}
            {isDone ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-head font-semibold uppercase text-[9.5px] tracking-[0.14em] shrink-0"
                style={{ color: "var(--sw-mint)" }}
              >
                Done
              </motion.span>
            ) : isActive ? (
              <span className="font-head uppercase text-[9.5px] tracking-[0.14em] text-white/45 shrink-0">
                Working
              </span>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}

function ChecklistPanel() {
  return (
    <div className="w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto rounded-[4px] border border-white/10 bg-white/[0.025] p-4 sm:p-5 md:p-6">
      {/* Status header — canonical framing, no step count */}
      <div className="flex items-center gap-2.5 mb-4 md:mb-5">
        <motion.span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ background: "var(--sw-mint)" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          className="font-head font-semibold uppercase text-white/60"
          style={{ fontSize: "9.5px", letterSpacing: "0.11em" }}
        >
          One conversation &middot; five questions &middot; two real actions
        </span>
      </div>

      <TaskChecklist />
    </div>
  );
}

export function LiveDemoTeaser() {
  return (
    <section
      id="the-demo"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.35fr_1fr] items-center">
          {/* LEFT · copy */}
          <div className="max-w-[600px]">
            <Reveal>
              <SectionLabel index="4">The demo</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] mt-6">
                One store,{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  run from a single chat
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[60ch]">
                Same store as last session, now from the admin side. Rolands
                runs it live on a real account: he flags what needs attention,
                finds the cause, reorders stock, and replies to a customer, all
                in one conversation.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-[60ch]">
                The demo shows both sides: what you ask in the chat, and the
                emails, orders, and tickets that move in your systems.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-white/45 text-[13px] md:text-[14px] leading-relaxed">
                Missed the previous session?{" "}
                <a
                  href="https://youtu.be/kY-MZtjSi9c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 font-semibold text-[var(--sw-mint)] underline decoration-[var(--sw-mint)]/30 underline-offset-2 hover:decoration-[var(--sw-mint)] transition-colors"
                >
                  Watch it there
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </p>
            </Reveal>
          </div>

          {/* RIGHT · animated task checklist */}
          <Reveal delay={0.15}>
            <ChecklistPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
