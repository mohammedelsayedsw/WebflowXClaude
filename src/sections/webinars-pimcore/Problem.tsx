"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * The three symptoms, set as the alerts they actually arrive as rather than as
 * generic content boxes. The first one is the hard failure, so it carries the
 * orange label; the other two are the quieter ones.
 */
const ALERTS: {
  key: string;
  glyph: string;
  source: string;
  message: React.ReactNode;
  urgent?: boolean;
}[] = [
  {
    key: "portal",
    glyph: "⚠",
    source: "Partner portal",
    message: "Upload failed, 1 required field empty",
    urgent: true,
  },
  {
    key: "distributor",
    glyph: "✉",
    source: "From a distributor",
    message: (
      <>
        &ldquo;Is this price list still correct?&rdquo; Sent in spring
      </>
    ),
  },
  {
    key: "erp",
    glyph: "⟳",
    source: "ERP, field updated",
    message: "Website still shows the old value",
  },
];

export function Problem() {
  const reduced = useReducedMotion();

  // the cards drop in the way a notification does, unless the visitor has
  // asked the operating system for less movement
  const card: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    shown: {
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0.2 }
        : {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
    },
  };

  return (
    <section
      id="the-problem"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">2</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The problem</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Your product details live in{" "}
              <span style={{ color: "var(--sw-orange)" }}>too many places</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[70ch] font-head text-[var(--sw-black)]/80 text-[16px] md:text-[19px] leading-relaxed">
              Your product details sit in a spreadsheet, an ERP extension, a
              shared drive, and whatever your team built to fill the gaps, and
              none of them agree.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 md:mt-12 flex max-w-[560px] flex-col gap-2.5 md:gap-3">
          {ALERTS.map((a, i) => (
            <motion.li
              key={a.key}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, amount: 0.4 }}
              variants={card}
              transition={{ delay: i * 0.12 }}
              className="rounded-[4px] bg-white p-4 md:p-5"
              style={{
                borderLeft: "3px solid var(--sw-orange)",
                boxShadow: "0 1px 2px rgba(20,20,30,0.06), 0 6px 18px rgba(20,20,30,0.07)",
              }}
            >
              <div
                className="label-code flex items-center gap-2"
                style={{
                  color: a.urgent
                    ? "var(--sw-orange)"
                    : "rgba(57,55,72,0.55)",
                }}
              >
                <span aria-hidden className="text-[12px] leading-none">
                  {a.glyph}
                </span>
                <span>{a.source}</span>
              </div>
              <p className="mt-2 text-[var(--sw-black)] text-[15px] md:text-[16px] leading-snug">
                {a.message}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
