"use client";

import { motion } from "motion/react";
import { btnLight } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { InvoiceMoment } from "@/sections/operalayer/InvoiceMoment";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Hero() {
  return (
    <section
      className="ol-light relative overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 520px at 85% 35%, rgba(63,74,175,0.10), transparent 70%), linear-gradient(180deg, #ffffff 0%, #f6f4f0 100%)",
      }}
    >
      <div className="wrap w-full pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-14 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <h1 className="font-head text-[var(--sw-black)] text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.04] tracking-[-0.025em] max-w-[16ch] text-balance">
              OperaLayer: Custom AI Apps That Work{" "}
              <span className="text-[var(--sw-blue)]">on Top of Your ERP</span>
            </h1>
            <p className="mt-7 text-[var(--sw-black)]/70 text-[18px] md:text-[20px] leading-relaxed max-w-[36ch]">
              The work that falls between your systems ends up in spreadsheets and
              inboxes. We turn it into small apps connected to your ERP, each one live
              in four weeks.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#cta" onClick={scrollToSection("cta")} className={btnLight}>
                Talk to us
              </a>
              <a
                href="#familiar"
                onClick={scrollToSection("familiar")}
                className="font-head font-semibold text-[16px] text-[var(--sw-black)]/70 hover:text-[var(--sw-black)] transition"
              >
                See what it solves
              </a>
            </div>
          </motion.div>

          <div className="lg:-mr-8">
            <InvoiceMoment />
          </div>
        </div>
      </div>
    </section>
  );
}
