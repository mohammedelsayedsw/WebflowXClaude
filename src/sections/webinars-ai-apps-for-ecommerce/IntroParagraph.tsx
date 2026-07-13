"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  TrendingDown,
  PackageMinus,
  MessageSquareText,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";

/* ── Timing ────────────────────────────────────────────────────── */
const STEP_MS = 1400;
const END_PAUSE_MS = 2600;
const TOTAL_STEPS = 9;

const PRODUCT = "the Trail Runner GTX";

const bubbleIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

/* ── Turn subcomponents ────────────────────────────────────────── */

function TurnLabel({
  side,
  avatar,
  label,
}: {
  side: "left" | "right";
  avatar: string;
  label: string;
}) {
  return (
    <div
      className={
        "flex items-center gap-2 mb-2 " + (side === "right" ? "justify-end" : "")
      }
    >
      {side === "left" && (
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full font-head text-[10px] font-semibold text-white"
          style={{ background: "rgba(110,247,110,0.22)" }}
        >
          {avatar}
        </span>
      )}
      <span
        className="font-head font-semibold uppercase text-white/55"
        style={{ fontSize: "10px", letterSpacing: "0.16em" }}
      >
        {label}
      </span>
      {side === "right" && (
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full font-head text-[10px] font-semibold text-white/85"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          {avatar}
        </span>
      )}
    </div>
  );
}

function OwnerTurn({ text }: { text: string }) {
  return (
    <motion.div variants={bubbleIn} initial="hidden" animate="shown" exit="exit">
      <TurnLabel side="right" avatar="Y" label="You" />
      <div className="flex justify-end">
        <div className="max-w-[88%] rounded-[4px] bg-white/[0.06] border border-white/[0.08] px-3.5 py-2.5 text-[13px] leading-relaxed text-white">
          {text}
        </div>
      </div>
    </motion.div>
  );
}

function AppTurn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={bubbleIn} initial="hidden" animate="shown" exit="exit">
      <TurnLabel side="left" avatar="A" label="AI app" />
      <div className="space-y-2">{children}</div>
    </motion.div>
  );
}

function AppMessage({ text }: { text: string }) {
  return (
    <div className="rounded-[4px] bg-white/[0.04] border border-white/[0.06] px-3.5 py-2.5 text-[13px] leading-relaxed text-white">
      {text}
    </div>
  );
}

function TypingPill({ text }: { text: string }) {
  return (
    <motion.div variants={bubbleIn} initial="hidden" animate="shown" exit="exit">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/65">
        <motion.span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--sw-mint)" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        {text}
      </div>
    </motion.div>
  );
}

/* ── Cards ─────────────────────────────────────────────────────── */

function FlaggedItemsCard() {
  const rows: { icon: typeof TrendingDown; label: string; tone: string }[] = [
    { icon: TrendingDown, label: `Sales down on ${PRODUCT}`, tone: "#f0a35a" },
    { icon: PackageMinus, label: "Stock running low", tone: "#f0a35a" },
    { icon: MessageSquareText, label: "New support ticket", tone: "#7cc4ff" },
  ];
  return (
    <div className="rounded-[4px] bg-white/[0.03] border border-white/[0.08] p-2.5 space-y-1.5">
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 + i * 0.18, duration: 0.35 }}
          className="flex items-center gap-2.5 rounded-[4px] bg-white/[0.03] px-2.5 py-2"
        >
          <span
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px]"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <r.icon className="h-3.5 w-3.5" style={{ color: r.tone }} />
          </span>
          <span className="text-white text-[12.5px] leading-tight">
            {r.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function ReadoutCard() {
  const rows: { label: string; value: string; tone: string }[] = [
    { label: "Traffic", value: "Steady", tone: "rgba(255,255,255,0.55)" },
    { label: "Conversion", value: "Down", tone: "#f0a35a" },
    { label: "Stock", value: "Down", tone: "#f0a35a" },
  ];
  return (
    <div className="rounded-[4px] bg-white/[0.03] border border-white/[0.08] p-3">
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between text-[12.5px]"
          >
            <span className="text-white/60">{r.label}</span>
            <span className="font-head font-semibold" style={{ color: r.tone }}>
              {r.value}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 pt-2.5 border-t border-white/[0.08] flex items-center gap-2">
        <span
          className="label-code text-[9px]"
          style={{ color: "var(--sw-mint)" }}
        >
          Conclusion
        </span>
        <span className="font-head font-semibold text-white text-[12.5px]">
          Stock issue.
        </span>
      </div>
    </div>
  );
}

function ConfirmationCard() {
  return (
    <div className="rounded-[4px] bg-white/[0.03] border border-white/[0.08] p-3 flex items-start gap-3">
      <span
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
        style={{ background: "var(--sw-mint)" }}
      >
        <Check className="h-4 w-4" style={{ color: "#0a0d24" }} strokeWidth={3} />
      </span>
      <div className="min-w-0">
        <div className="text-white text-[12.5px] leading-snug">
          Reorder email sent to your supplier.
        </div>
        <div className="text-white/55 text-[11.5px] mt-0.5">
          Stock status updated.
        </div>
      </div>
    </div>
  );
}

/* ── Static thread (reduced motion) ────────────────────────────── */

function StaticThread() {
  return (
    <div className="px-4 py-4 space-y-4">
      <OwnerTurn text="What needs my attention across the store this week?" />
      <AppTurn>
        <AppMessage text="Three things stand out." />
        <FlaggedItemsCard />
      </AppTurn>
      <OwnerTurn text={`What is driving the drop on ${PRODUCT}, traffic or stock?`} />
      <AppTurn>
        <ReadoutCard />
      </AppTurn>
      <OwnerTurn text="Place a reorder." />
      <AppTurn>
        <ConfirmationCard />
      </AppTurn>
    </div>
  );
}

/* ── Animated panel ────────────────────────────────────────────── */

function ChatDemo() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const convoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el || started) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || reduceMotion) return;
    if (step < TOTAL_STEPS) {
      const t = setTimeout(() => setStep((s) => s + 1), STEP_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep(0), END_PAUSE_MS);
    return () => clearTimeout(t);
  }, [step, started, reduceMotion]);

  useEffect(() => {
    if (!convoRef.current || reduceMotion) return;
    const id = requestAnimationFrame(() => {
      if (!convoRef.current) return;
      convoRef.current.scrollTo({
        top: step === 0 ? 0 : convoRef.current.scrollHeight,
        behavior: step === 0 ? "auto" : "smooth",
      });
    });
    return () => cancelAnimationFrame(id);
  }, [step, reduceMotion]);

  return (
    <div
      ref={panelRef}
      className="relative overflow-hidden rounded-[4px] w-full"
      style={{
        background:
          "linear-gradient(180deg, #0d1414 0%, #0a1110 60%, #080c0c 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <style>{`.lp-chat-scroll::-webkit-scrollbar{display:none}`}</style>

      {/* Top bar */}
      <div className="px-3.5 py-2.5 border-b border-white/[0.07] flex items-center gap-2.5">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <span className="font-head text-white/75 text-[11.5px] font-semibold">
          ChatGPT
        </span>
        <span className="text-white/40 text-[11px]">store-ops</span>
      </div>

      {/* Conversation */}
      {reduceMotion ? (
        <StaticThread />
      ) : (
        <div
          ref={convoRef}
          className="lp-chat-scroll px-4 py-4 space-y-4 overflow-y-auto h-[380px] sm:h-[420px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <AnimatePresence mode="popLayout">
            {step >= 1 && (
              <OwnerTurn
                key="o1"
                text="What needs my attention across the store this week?"
              />
            )}
            {step === 2 && <TypingPill key="t1" text="Scanning your store…" />}
            {step >= 3 && (
              <AppTurn key="a1">
                <AppMessage text="Three things stand out." />
                <FlaggedItemsCard />
              </AppTurn>
            )}

            {step >= 4 && (
              <OwnerTurn
                key="o2"
                text={`What is driving the drop on ${PRODUCT}, traffic or stock?`}
              />
            )}
            {step === 5 && (
              <TypingPill key="t2" text="Checking analytics and stock…" />
            )}
            {step >= 6 && (
              <AppTurn key="a2">
                <ReadoutCard />
              </AppTurn>
            )}

            {step >= 7 && <OwnerTurn key="o3" text="Place a reorder." />}
            {step === 8 && <TypingPill key="t3" text="Drafting the reorder…" />}
            {step >= 9 && (
              <AppTurn key="a3">
                <ConfirmationCard />
              </AppTurn>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Footer */}
      <div className="px-3.5 py-2 border-t border-white/[0.07] flex items-center justify-between">
        <span
          className="font-head uppercase text-white/40"
          style={{ fontSize: "9px", letterSpacing: "0.16em" }}
        >
          Powered by <span className="text-white/65">your AI app</span>
        </span>
        <span className="text-white/30 text-[10px]">v1.0 · MCP/0.4</span>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */

export function IntroParagraph() {
  return (
    <section id="the-shift" className="bg-lp-bright py-28 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          {/* LEFT · copy */}
          <div className="max-w-[640px]">
            <Reveal>
              <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
                <span className="text-[var(--sw-black)]/55">1</span>
                <span className="h-px w-6 bg-[var(--sw-black)]/20" />
                <span>The shift</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                className="font-head text-[var(--sw-black)] text-[24px] sm:text-[30px] md:text-[38px] lg:text-[44px] leading-[1.05] tracking-[-0.01em]"
                style={{ textWrap: "balance" }}
              >
                Your store data lives in four systems.{" "}
                <span className="text-[var(--sw-blue)]">Now you can ask one.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                Running a store means checking stock, sales, traffic, and
                support in four separate places. You open each tool, pull the
                numbers, and piece the picture together yourself, every week.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                ChatGPT and Claude now connect to those systems. You ask one
                question, and the app reads across all of them, tells you what
                needs attention, and takes the next step for you.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                On July 29, scandiweb COO Rolands Popovs shows how to run your
                store&apos;s daily operations from one chat: spot a problem, find
                the cause, fix the stock, and answer a customer, without opening a
                single dashboard.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-9 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[19px]">
                Wednesday, July 29, 2026 at 10:00 AM (GMT)
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 md:mt-9 rounded-[4px] border border-[var(--sw-black)]/12 bg-white/55 px-5 py-4 md:px-6 md:py-5 max-w-[560px]">
                <p className="text-[var(--sw-black)]/65 text-[14px] md:text-[15px] leading-relaxed">
                  This is the second session on ChatGPT and Claude apps. The
                  first showed the customer side, a shopper finding a gift and
                  checking out inside the chat. If you missed it, catch up below.
                </p>
                <a
                  href="https://youtu.be/kY-MZtjSi9c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnLight + " mt-4"}
                >
                  Watch the first session
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT · animated chat panel */}
          <div className="w-full max-w-[420px] mx-auto lg:mr-0 lg:ml-auto">
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
