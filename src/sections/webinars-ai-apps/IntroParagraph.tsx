"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
} from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

/* ── Timing ────────────────────────────────────────────────────── */
const STEP_MS = 1400;
const END_PAUSE_MS = 2500;
const TOTAL_STEPS = 9;

const bubbleIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

/* ── Subcomponents ─────────────────────────────────────────────── */

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
        "flex items-center gap-2 mb-2 " +
        (side === "right" ? "justify-end" : "")
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

function CustomerTurn({ text }: { text: string }) {
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
    >
      <TurnLabel side="right" avatar="U" label="Customer" />
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
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
    >
      <TurnLabel side="left" avatar="A" label="ai app" />
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

function StatusPill({ text }: { text: string }) {
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
    >
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

function ProductCard({
  name,
  meta,
  colors,
  cta,
}: {
  name: string;
  meta: string;
  colors?: { name: string; hex: string }[];
  cta?: string;
}) {
  return (
    <div className="rounded-[4px] bg-white/[0.03] border border-white/[0.08] p-3 flex items-center gap-3">
      <div
        className="shrink-0 h-14 w-14 rounded-[4px] flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <span
          className="font-head uppercase text-white/40"
          style={{ fontSize: "9px", letterSpacing: "0.14em" }}
        >
          Product
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-head text-white text-[13px] leading-tight">
          {name}
        </div>
        <div className="text-white/55 text-[11.5px] mt-0.5">{meta}</div>
        {colors && (
          <div className="mt-2 flex items-center gap-1.5">
            {colors.map((c, i) => (
              <span
                key={c.name}
                title={c.name}
                aria-label={c.name}
                className="h-3.5 w-3.5 rounded-full"
                style={{
                  background: c.hex,
                  boxShadow:
                    i === 0
                      ? "inset 0 0 0 1px rgba(255,255,255,0.25), 0 0 0 1.5px rgba(255,255,255,0.55)"
                      : "inset 0 0 0 1px rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        )}
        {cta && (
          <div
            className="mt-1.5 text-[11.5px] font-head font-semibold"
            style={{ color: "var(--sw-mint)" }}
          >
            {cta}
          </div>
        )}
      </div>
    </div>
  );
}

function StatusCard({
  label,
  body,
  steps,
}: {
  label?: string;
  body?: string;
  steps?: string[];
}) {
  if (steps) {
    return (
      <div className="rounded-[4px] bg-white/[0.03] border border-white/[0.08] p-3">
        <div className="space-y-1.5">
          {steps.map((s, i) => (
            <div
              key={s}
              className="flex items-center gap-2 text-[12px] text-white"
            >
              <span
                className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold"
                style={{
                  background:
                    i === steps.length - 1
                      ? "var(--sw-mint)"
                      : "rgba(110,247,110,0.22)",
                  color:
                    i === steps.length - 1 ? "#0a0d24" : "var(--sw-mint)",
                }}
              >
                {i === steps.length - 1 ? "•" : "✓"}
              </span>
              <span
                className={i === steps.length - 1 ? "" : "text-white/55"}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
        {body && (
          <div className="mt-2 text-white/85 text-[12px]">{body}</div>
        )}
      </div>
    );
  }
  return (
    <div className="rounded-[4px] bg-white/[0.03] border border-white/[0.08] p-3">
      {label && (
        <div className="text-white text-[12.5px] font-semibold leading-tight">
          {label}
        </div>
      )}
      {body && (
        <div className="text-white/55 text-[11.5px] mt-0.5">{body}</div>
      )}
    </div>
  );
}

/* ── Panel ─────────────────────────────────────────────────────── */

function ChatDemo() {
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
    if (!started) return;
    if (step < TOTAL_STEPS) {
      const t = setTimeout(() => setStep((s) => s + 1), STEP_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep(0), END_PAUSE_MS);
    return () => clearTimeout(t);
  }, [step, started]);

  useEffect(() => {
    if (!convoRef.current) return;
    const id = requestAnimationFrame(() => {
      if (!convoRef.current) return;
      convoRef.current.scrollTo({
        top: step === 0 ? 0 : convoRef.current.scrollHeight,
        behavior: step === 0 ? "auto" : "smooth",
      });
    });
    return () => cancelAnimationFrame(id);
  }, [step]);

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
          Claude
        </span>
        <span className="text-white/40 text-[11px]">webinar-app</span>
      </div>

      {/* Conversation */}
      <div
        ref={convoRef}
        className="lp-chat-scroll px-4 py-4 space-y-4 overflow-y-auto h-[380px] sm:h-[420px]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <AnimatePresence mode="popLayout">
          {step >= 1 && (
            <CustomerTurn
              key="c1"
              text="I need trail running shoes under €150, size 10."
            />
          )}
          {step === 2 && (
            <StatusPill key="s1" text="Searching catalog…" />
          )}
          {step >= 3 && (
            <AppTurn key="a1">
              <AppMessage text="Found a perfect option for you." />
              <ProductCard
                name="Stratos Trail GTX 4"
                meta="€129 · Size 10 · In stock"
                colors={[
                  { name: "Blue", hex: "#2b4a6f" },
                  { name: "White", hex: "#d6d9df" },
                  { name: "Red", hex: "#7e2d33" },
                  { name: "Green", hex: "#2c5141" },
                ]}
                cta="Add to cart →"
              />
            </AppTurn>
          )}

          {step >= 4 && (
            <CustomerTurn
              key="c2"
              text="Add the blue pair and check out."
            />
          )}
          {step === 5 && (
            <StatusPill key="s2" text="Placing order…" />
          )}
          {step >= 6 && (
            <AppTurn key="a2">
              <AppMessage text="Order #10482 confirmed. Arriving Thu, Jun 19." />
            </AppTurn>
          )}

          {step >= 7 && (
            <CustomerTurn key="c3" text="Where's my order?" />
          )}
          {step === 8 && (
            <StatusPill key="s3" text="Pulling shipment status…" />
          )}
          {step >= 9 && (
            <AppTurn key="a3">
              <StatusCard
                steps={["Packed", "Shipped", "Out for delivery"]}
                body="Out for delivery, arriving today."
              />
            </AppTurn>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-3.5 py-2 border-t border-white/[0.07] flex items-center justify-between">
        <span
          className="font-head uppercase text-white/40"
          style={{ fontSize: "9px", letterSpacing: "0.16em" }}
        >
          Powered by{" "}
          <span className="text-white/65">your AI app</span>
        </span>
        <span className="text-white/30 text-[10px]">v1.0 · MCP/0.4</span>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */

export function IntroParagraph() {
  return (
    <section
      id="the-shift"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
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
                Your customers now can shop, order, and get support inside{" "}
                <span className="text-[var(--sw-blue)]">
                  ChatGPT and Claude
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                When the App Store launched in 2008, the brands that built
                early owned their category for years. ChatGPT and Claude
                reached that same moment now. Hundreds of millions of people
                already ask them what to buy, where to book, and how to get
                support.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                Both platforms opened a new app layer. People use brand apps
                inside the chat to search products, place orders, get quotes,
                and manage their accounts. The first brands went live already.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                On June 17, scandiweb COO Rolands Popovs shows why you need
                to be among the first stores inside ChatGPT and Claude, then
                maps your first app live: where to start and how to launch in
                under two weeks.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-9 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[19px]">
                Tuesday, June 17, 2026 at 10:00 AM (GMT)
              </p>
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
