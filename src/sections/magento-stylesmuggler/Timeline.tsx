"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { UPDATED_TICK } from "./status";

type Tick = {
  date: string;
  title: string;
  detail: string;
  tone?: "now" | "next";
};

/** Sansec's published timeline, with scandiweb's own step added. Times are UTC. */
const TICKS: Tick[] = [
  {
    date: "Sep 4 · 22:20",
    title: "First confirmed exploitation",
    detail:
      "A fully patched 2.4.6-p15 store. Within the hour, Sansec finds the implant on unrelated stores.",
  },
  {
    date: "Sep 5",
    title: "Public disclosure",
    detail:
      "Sansec reproduces the chain on clean 2.4.7, 2.4.8, and 2.4.9 and publishes early. Shield rules go live at 07:15.",
  },
  {
    date: "Sep 5",
    title: "Every scandiweb client alerted",
    detail:
      "Within an hour, every Magento and Adobe Commerce client heard from us. Checks start the same day.",
  },
  {
    date: "Sep 6",
    title: "New persistence variant",
    detail:
      "The implant now hides as fc-cache and reinstalls itself twice an hour from cron.",
  },
  {
    date: UPDATED_TICK,
    title: "Where things stand",
    detail:
      "Checks, temporary protection, and checkout testing under way on client stores.",
    tone: "now",
  },
  {
    date: "Sep 8",
    title: "Adobe’s next scheduled bulletin",
    detail: "Not yet confirmed to cover StyleSmuggler.",
    tone: "next",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative z-10 pt-16 md:pt-20 pb-4 md:pb-6">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-white/45">Timeline · UTC · source: Sansec</div>
        </Reveal>

        <div className="relative mt-10 md:mt-14">
          {/* the line, drawn in on desktop */}
          <motion.div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-[5px] h-px bg-white/15 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <ol className="grid md:grid-cols-6 gap-y-8 md:gap-x-6 border-l border-white/15 md:border-l-0">
            {TICKS.map((t, i) => {
              const now = t.tone === "now";
              const next = t.tone === "next";
              return (
                <Reveal key={t.title} delay={0.12 + i * 0.12}>
                  <li className="relative pl-6 md:pl-0 md:pt-7">
                    <span
                      aria-hidden
                      className={`absolute left-[-6px] top-[5px] md:left-0 md:top-0 h-[11px] w-[11px] rounded-full ${
                        now ? "pulse-green" : ""
                      }`}
                      style={{
                        background: now ? "var(--sw-mint)" : next ? "transparent" : "#05070f",
                        border: `1px solid ${
                          now
                            ? "var(--sw-mint)"
                            : next
                            ? "rgba(255,255,255,0.35)"
                            : "rgba(255,255,255,0.6)"
                        }`,
                        borderStyle: next ? "dashed" : "solid",
                      }}
                    />
                    <div
                      className="label-code"
                      style={{ color: now ? "var(--sw-mint)" : "rgba(255,255,255,0.45)" }}
                    >
                      {t.date}
                    </div>
                    <div
                      className={`mt-2 font-head font-semibold text-[17px] leading-[1.2] ${
                        next ? "text-white/60" : "text-white"
                      }`}
                    >
                      {t.title}
                    </div>
                    <p className={`mt-2 text-[13px] leading-relaxed ${next ? "text-white/40" : "text-white/60"}`}>
                      {t.detail}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
