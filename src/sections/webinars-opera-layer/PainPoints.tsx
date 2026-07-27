"use client";

import {
  Sheet,
  FileText,
  Paperclip,
  Copy,
  FileQuestion,
  RefreshCw,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

const pains: { label: string; icon: typeof Sheet }[] = [
  { label: "Spreadsheets", icon: Sheet },
  { label: "PDFs", icon: FileText },
  { label: "Email attachments", icon: Paperclip },
  { label: "Duplicate data entry", icon: Copy },
  { label: "Missing information", icon: FileQuestion },
  { label: "Status checking", icon: RefreshCw },
];

const container: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function PainPoints() {
  return (
    <section
      id="the-pain"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-10 md:mb-12 max-w-[760px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">2</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The problem</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em]">
              Where your team&apos;s time{" "}
              <span className="text-[var(--sw-blue)]">actually disappears</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              Between your ERP, warehouse, accounting, and supplier systems sits
              a layer of manual work nobody planned for. It falls on your team to
              hold it together by hand, and it costs them hours.
            </p>
          </Reveal>
        </div>

        {/* Lead-in ties the copy to the boxes so they don't float */}
        <Reveal delay={0.2}>
          <p className="mb-5 md:mb-6 font-head text-[var(--sw-black)]/50 text-[13px] md:text-[14px] tracking-[0.08em] uppercase">
            You deal with these every day:
          </p>
        </Reveal>

        {/* The pains — full-width grid, the focal point */}
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          variants={container}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.3 }}
        >
          {pains.map((p) => (
            <motion.li
              key={p.label}
              variants={item}
              className="group relative flex min-h-[136px] flex-col justify-between gap-6 rounded-[6px] border border-[var(--sw-black)]/10 bg-white p-5 transition-colors duration-300 hover:border-[var(--sw-blue)]/40"
            >
              <span
                aria-hidden
                className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)]"
              >
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-head text-[var(--sw-black)]/85 text-[13px] leading-snug">
                {p.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
