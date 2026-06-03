"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "motion/react";
import { Check, Package, Truck, MapPin } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/* ── Animation timings ─────────────────────────────────────────── */
const STEP_MS = 1300;
const END_PAUSE_MS = 2500;
const TOTAL_STEPS = 9;
const CONVO_HEIGHT = 420; // fixed chat window height (px)

const bubbleIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const cardIn = (i: number): Transition => ({
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  delay: 0.15 + i * 0.12,
});

/* ── Bubbles ───────────────────────────────────────────────────── */

function CustomerBubble({ text }: { text: string }) {
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
      className="flex justify-end"
    >
      <div
        className="max-w-[78%] rounded-[16px] px-3.5 py-2.5 text-[13px] leading-relaxed text-white font-medium"
        style={{
          background:
            "linear-gradient(160deg, var(--sw-blue) 0%, #2f3895 100%)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.18) inset",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}

function AppBubble({ text }: { text: string }) {
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
      className="flex"
    >
      <div className="max-w-[80%] rounded-[14px] bg-white/[0.10] border border-white/[0.10] px-3.5 py-2.5 text-[13px] leading-relaxed text-white">
        {text}
      </div>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
      className="flex"
    >
      <div className="rounded-[14px] bg-white/[0.08] border border-white/[0.10] px-3.5 py-2.5 inline-flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-white/75"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ProductCarousel() {
  // Clean colored gradient tiles — no icons. Text lays out: name (truncate) → price → stock tag.
  const products: { name: string; price: string; tile: string }[] = [
    {
      name: "Trail Pro 6",
      price: "€129",
      tile:
        "linear-gradient(160deg, rgba(63,74,175,0.42) 0%, rgba(63,74,175,0.10) 100%)",
    },
    {
      name: "FellRunner X",
      price: "€139",
      tile:
        "linear-gradient(160deg, rgba(110,247,110,0.30) 0%, rgba(63,74,175,0.18) 100%)",
    },
    {
      name: "Path-Lite GT",
      price: "€149",
      tile:
        "linear-gradient(160deg, rgba(160,168,232,0.35) 0%, rgba(63,74,175,0.10) 100%)",
    },
  ];
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
      className="flex gap-2"
    >
      {products.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={cardIn(i)}
          className="shrink-0 basis-0 grow rounded-[8px] border border-white/[0.10] bg-white/[0.05] p-2.5"
        >
          {/* Clean gradient tile, no icon */}
          <div
            className="h-14 w-full rounded-[4px] mb-2"
            style={{ background: p.tile }}
          />
          {/* Name — single line, truncates */}
          <div className="text-white text-[12px] font-semibold leading-tight truncate">
            {p.name}
          </div>
          {/* Price — own line, bigger */}
          <div className="text-white font-head text-[13px] tabular-nums mt-1">
            {p.price}
          </div>
          {/* Stock tag — own line, small */}
          <div
            className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: "var(--sw-mint)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--sw-mint)" }}
            />
            In stock
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function OrderConfirmCard() {
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
      className="rounded-[10px] border border-white/[0.10] bg-white/[0.05] p-3 flex items-center gap-3"
    >
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{
          background: "rgba(110,247,110,0.18)",
          border: "1px solid rgba(110,247,110,0.45)",
        }}
      >
        <Check
          className="h-4 w-4"
          style={{ color: "var(--sw-mint)" }}
          strokeWidth={3}
        />
      </span>
      <div className="min-w-0">
        <div className="text-white text-[13px] font-semibold leading-tight">
          Order #10482 confirmed
        </div>
        <div className="text-white/60 text-[11.5px] mt-1">
          Arriving Thu, Jun 19
        </div>
      </div>
    </motion.div>
  );
}

function TrackingCard() {
  const stages = [
    { Icon: Package, label: "Packed" },
    { Icon: Truck, label: "Shipped" },
    { Icon: MapPin, label: "Out for delivery" },
  ];
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="shown"
      exit="exit"
      className="rounded-[10px] border border-white/[0.10] bg-white/[0.05] p-3.5"
    >
      <div className="relative flex items-center justify-between mb-3">
        <div className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-white/15" />
        <div
          className="absolute left-3 top-1/2 h-px -translate-y-1/2"
          style={{
            width: "calc(100% - 1.5rem)",
            background:
              "linear-gradient(90deg, var(--sw-mint) 0%, var(--sw-mint) 100%)",
          }}
        />
        {stages.map((s, i) => (
          <div
            key={s.label}
            className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full"
            style={{
              background:
                i < 2 ? "rgba(110,247,110,0.2)" : "rgba(110,247,110,0.95)",
              border:
                i < 2
                  ? "1px solid rgba(110,247,110,0.5)"
                  : "1px solid var(--sw-mint)",
              boxShadow:
                i === 2 ? "0 0 0 4px rgba(110,247,110,0.18)" : undefined,
            }}
          >
            <s.Icon
              className="h-3.5 w-3.5"
              style={{ color: i < 2 ? "var(--sw-mint)" : "#0a0d24" }}
              strokeWidth={2.6}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-white/70">
        {stages.map((s) => (
          <span key={s.label} className="text-center" style={{ width: "33%" }}>
            {s.label}
          </span>
        ))}
      </div>
      <div className="mt-3 text-white text-[12.5px] font-medium">
        Out for delivery, arriving today.
      </div>
    </motion.div>
  );
}

/* ── Main panel ────────────────────────────────────────────────── */

function ChatDemo() {
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const convoRef = useRef<HTMLDivElement>(null);

  // Start loop once panel is in view
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

  // Step driver + loop
  useEffect(() => {
    if (!started) return;
    if (step < TOTAL_STEPS) {
      const t = setTimeout(() => setStep((s) => s + 1), STEP_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep(0), END_PAUSE_MS);
    return () => clearTimeout(t);
  }, [step, started]);

  // Auto-scroll the conversation window to the latest message
  useEffect(() => {
    const c = convoRef.current;
    if (!c) return;
    // Wait a frame so new content is laid out
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
      className="relative overflow-hidden rounded-[16px] w-full"
      style={{
        background:
          "linear-gradient(155deg, rgba(63,74,175,0.42) 0%, rgba(42,51,128,0.55) 40%, rgba(16,19,44,0.62) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.06), 0 30px 60px -20px rgba(16,19,44,0.35)",
      }}
    >
      {/* Hide scrollbar across browsers for the conversation window */}
      <style>{`.lp-chat-scroll::-webkit-scrollbar{display:none}`}</style>

      {/* Top bar */}
      <div className="px-3.5 py-2.5 border-b border-white/[0.10] flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 text-center text-[10.5px] tracking-[0.14em] uppercase text-white/55 font-semibold">
          Live conversation
        </div>
        <div className="w-10" />
      </div>

      {/* Conversation — fixed height, scrolls like a real chat */}
      <div
        ref={convoRef}
        className="lp-chat-scroll px-4 py-4 space-y-3 overflow-y-auto"
        style={{
          height: CONVO_HEIGHT,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <AnimatePresence mode="popLayout">
          {step >= 1 && (
            <CustomerBubble
              key="c1"
              text="I need trail running shoes under €150, size 10."
            />
          )}
          {step === 2 && <TypingDots key="t1" />}
          {step >= 3 && (
            <AppBubble key="a1" text="Found 3 perfect options for you." />
          )}
          {step >= 3 && <ProductCarousel key="pc1" />}

          {step >= 4 && (
            <CustomerBubble
              key="c2"
              text="Add the blue pair and check out."
            />
          )}
          {step === 5 && <TypingDots key="t2" />}
          {step >= 6 && <OrderConfirmCard key="a2" />}

          {step >= 7 && (
            <CustomerBubble key="c3" text="Where's my order?" />
          )}
          {step === 8 && <TypingDots key="t3" />}
          {step >= 9 && <TrackingCard key="a3" />}
        </AnimatePresence>
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
                className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.05] tracking-[-0.01em]"
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
              <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
                Both platforms opened a new app layer. People use brand apps
                inside the chat to search products, place orders, get quotes,
                and manage their accounts. The first brands went live already.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
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

          {/* RIGHT · looping animated chat panel */}
          <div className="w-full max-w-[420px] mx-auto lg:mr-0 lg:ml-auto">
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
