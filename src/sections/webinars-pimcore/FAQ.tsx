"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * Each answer validates the concern first, then answers it plainly, so the
 * section reads as a conversation rather than a defence. One panel open at a
 * time, the first open on load so the pattern is obvious.
 */
const QA: { q: string; a: string }[] = [
  {
    q: "Is this a sales pitch for Pimcore?",
    a: "No. The session is about what fragmented product data costs and how a PIM fixes it. The demos run in Pimcore because that is the system we build on.",
  },
  {
    q: "We already have an ERP. Is that not enough?",
    a: "An ERP holds transactions and stock. It was not built to hold rich product content, channel-specific views, or translations, which is where most of the work sits.",
  },
  {
    q: "Our catalog is huge and messy. Is it too late?",
    a: "Large and messy is the normal starting point. The session covers what a first phase actually looks like.",
  },
  {
    q: "How long does a PIM project take?",
    a: "We'll walk through realistic timelines and what drives them, including what you can do before any system is bought.",
  },
  {
    q: "What is the free prototype, exactly?",
    a: "You can request a working prototype built on a sample of your own catalog, so you see your own products in a PIM rather than a demo dataset.",
  },
  {
    q: "I can't make the time",
    a: "Register anyway and we'll send you the recording.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">9</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>Questions</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] mb-10 md:mb-14">
            Questions <span className="text-[var(--sw-blue)]">people ask</span>
          </h2>
        </Reveal>

        <div className="max-w-[62rem]">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="border-b border-[var(--sw-black)]/12">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left"
                  >
                    <span className="font-head text-[var(--sw-black)] text-[17px] md:text-[21px] leading-tight tracking-[-0.01em]">
                      {item.q}
                    </span>
                    <span className="mt-0.5 shrink-0">
                      {isOpen ? (
                        <Minus
                          className="h-5 w-5"
                          strokeWidth={2}
                          style={{ color: "var(--sw-blue)" }}
                          aria-hidden
                        />
                      ) : (
                        <Plus
                          className="h-5 w-5 text-[var(--sw-black)]/40"
                          strokeWidth={2}
                          aria-hidden
                        />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="panel"
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{
                          duration: reduce ? 0 : 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 md:pb-7 pr-10 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed max-w-[68ch]">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
