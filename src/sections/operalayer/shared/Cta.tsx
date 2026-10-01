"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { HubSpotForm } from "@/components/site/HubSpotForm";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Four weeks drawn as one line: only the two moments a buyer cares about are named. */
function FourWeeks() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.6 });
  return (
    <div ref={ref} className="mt-12 max-w-[520px]">
      <div className="relative h-[2px] bg-white/15">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[var(--sw-mint)]"
          initial={{ width: "0%" }}
          animate={{ width: run ? "100%" : "0%" }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
        />
        {[0, 1, 2, 3].map((w) => (
          <motion.span
            key={w}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2"
            style={{ left: `${(w / 3) * 100}%` }}
            initial={{ backgroundColor: "#10132c", borderColor: "rgba(255,255,255,0.3)" }}
            animate={run ? { backgroundColor: "#6ef76e", borderColor: "#6ef76e" } : {}}
            transition={{ delay: 0.2 + (w / 3) * 2.2, duration: 0.2 }}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-8 text-[15px] md:text-[16px] leading-snug">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: run ? 1 : 0 }} transition={{ delay: 0.4 }}>
          <div className="font-head text-white">Week 1</div>
          <div className="mt-1 text-white/60">You try a working prototype on your own data.</div>
        </motion.div>
        <motion.div
          className="text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: run ? 1 : 0 }}
          transition={{ delay: 2.3, ease }}
        >
          <div className="font-head text-[var(--sw-mint)]">Week 4</div>
          <div className="mt-1 text-white/60">It goes live, and your team knows how to use it.</div>
        </motion.div>
      </div>
    </div>
  );
}

export function Cta({ heading, body }: { heading: React.ReactNode; body: string }) {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden scroll-mt-20"
      style={{
        background:
          "radial-gradient(900px 600px at 15% 10%, #2a3380 0%, transparent 55%), radial-gradient(1200px 800px at 50% 60%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-14 md:gap-20 items-start">
          <div>
            <h2 className="font-head text-white text-[36px] md:text-[52px] leading-[1.05] max-w-[14ch]">{heading}</h2>
            <p className="mt-6 text-white/70 text-[17px] md:text-[19px] leading-relaxed max-w-[38ch]">{body}</p>
            <FourWeeks />
          </div>
          <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" />
        </div>
      </div>
    </section>
  );
}
