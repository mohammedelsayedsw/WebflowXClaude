"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * Accordion. Each answer validates the concern first, then answers it, so the
 * section reads as a conversation rather than a defence.
 *
 * One panel open at a time, first one open on load so the pattern is obvious.
 * The height transition is dropped under prefers-reduced-motion.
 */

const QA: { q: string; a: string }[] = [
  {
    q: "Will it break my store?",
    a: "It never publishes anything itself. Changes arrive as a pull request with a preview, and your own pipeline decides what ships.",
  },
  {
    q: "Does it replace my developers?",
    a: "It clears the small work that fills their queue. The review, the release, and every judgment call stay with them.",
  },
  {
    q: "What can it see?",
    a: "It reads your store to understand it, and access is granted by your own team. We'll walk through what it can read and what it can write.",
  },
  {
    q: "What if it gets something wrong?",
    a: "You see the change before it ships, and every change can be undone.",
  },
  {
    q: "Does it work with my setup?",
    a: "Magento 2.3 to 2.4.9, either edition, Luma or Hyvä or your own theme, and whatever extensions you are running.",
  },
  {
    q: "What does it cost?",
    a: "We'll cover pricing in the session, and you can try the demo store for free without connecting anything.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] mb-12 md:mb-16">
            Questions people ask
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
