"use client";

import { ArrowUp, Sparkles } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

/** Sequential reveal: each turn fades + slides in on top of the prior. */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Typing dots that fade out once the assistant response arrives. */
function TypingDots() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1, 1, 0] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, times: [0, 0.2, 0.85, 1], delay: 0.55 }}
      className="flex gap-3 items-start"
    >
      <div className="h-7 w-7 rounded-full bg-[var(--sw-mint)]/15 ring-1 ring-[var(--sw-mint)]/40 flex items-center justify-center shrink-0 mt-0.5">
        <Sparkles
          className="h-3.5 w-3.5 text-[var(--sw-mint)]"
          strokeWidth={2.5}
        />
      </div>
      <div className="flex items-center gap-1 px-2 py-2.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-white/55"
            animate={{ opacity: [0.25, 1, 0.25] }}
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

/** ChatGPT-style conversation card with sequential reveal animation. */
function ChatMockup() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[8px] w-full"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25 }}
      style={{
        background: "#212121",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 30px 60px -20px rgba(0,0,0,0.45)",
      }}
    >
      {/* Top bar — looks like ChatGPT app chrome */}
      <motion.div
        variants={itemVariants}
        transition={{ delay: 0 }}
        className="px-3.5 py-2.5 border-b border-white/[0.07] flex items-center gap-2"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-[11px] text-white/40 font-medium">
          ChatGPT
        </div>
        <div className="w-10" />
      </motion.div>

      {/* Conversation area */}
      <div className="px-4 md:px-5 py-5 space-y-4 min-h-[300px]">
        {/* User turn */}
        <motion.div
          variants={itemVariants}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-end"
        >
          <div className="rounded-[14px] bg-white/[0.08] px-3.5 py-2.5 max-w-[90%]">
            <div className="text-white text-[13px] leading-relaxed">
              Find me a waterproof hiking jacket under &euro;200, in stock for
              next-day.
            </div>
          </div>
        </motion.div>

        {/* Typing indicator (briefly) */}
        <TypingDots />

        {/* Assistant turn — appears after the typing indicator fades */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.55,
          }}
          className="flex gap-3 items-start"
        >
          <div className="h-7 w-7 rounded-full bg-[var(--sw-mint)]/15 ring-1 ring-[var(--sw-mint)]/40 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles
              className="h-3.5 w-3.5 text-[var(--sw-mint)]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex-1 space-y-1.5">
            {[
              {
                name: "North Face Resolve 2",
                meta: "M, L · ships next-day",
                price: "€179",
              },
              {
                name: "Patagonia Torrentshell",
                meta: "S, M, L · ships next-day",
                price: "€189",
              },
              {
                name: "Marmot PreCip Eco",
                meta: "M · ships next-day",
                price: "€169",
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.8 + i * 0.15,
                }}
                className="rounded-[6px] border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="text-white text-[12.5px] font-semibold">
                    {p.name}
                  </div>
                  <div className="text-white/40 text-[10.5px] mt-0.5">
                    {p.meta}
                  </div>
                </div>
                <div className="text-white font-head text-[13px] tabular-nums">
                  {p.price}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Composer */}
      <motion.div
        variants={itemVariants}
        transition={{ delay: 0.05 }}
        className="px-4 md:px-5 pb-4"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] pl-4 pr-1.5 py-2">
          <span className="text-[12px] text-white/35 flex-1">
            Message ChatGPT&hellip;
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <ArrowUp className="h-3 w-3 text-[#212121]" strokeWidth={3} />
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
              <h2 className="font-head text-[var(--sw-black)] text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] max-w-[24ch]">
                Buyers now ask{" "}
                <span className="text-[var(--sw-blue)]">
                  ChatGPT and Claude
                </span>{" "}
                what your business used to answer
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
                In this webinar, scandiweb&apos;s COO Rolands Popovs walks you
                through a working ChatGPT and Claude app for a real eCommerce
                business, shows how it connects to your systems, and explains
                what it takes to go live in under two weeks.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-9 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[19px]">
                Tuesday, June 17, 2026 at 10:00 AM (GMT)
              </p>
            </Reveal>
          </div>

          {/* RIGHT · animated ChatGPT mockup, right-aligned + smaller */}
          <div className="w-full max-w-[400px] mx-auto lg:mr-0 lg:ml-auto">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
