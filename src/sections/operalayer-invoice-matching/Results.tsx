"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";

const STATS = [
  { value: "~100", label: "supplier PDF formats read by one extraction module" },
  { value: "87%", label: "auto-match rate, with exceptions sent to people for review" },
  { value: "2", label: "people who used to check these invoices by hand every morning" },
];

const NEXT = [
  {
    title: "Invoices read straight from email",
    body: "Supplier emails go into OperaLayer directly, so nobody downloads and uploads PDFs anymore.",
  },
  {
    title: "A direct connection to the Navision API",
    body: "Approved invoices post to Navision through its API instead of an import file.",
  },
];

/** Email to OperaLayer to Navision, with the two new links drawing in. */
function NextFlow() {
  const nodes = [
    { x: 40, label: "Supplier email" },
    { x: 240, label: "OperaLayer" },
    { x: 440, label: "Navision API" },
  ];
  return (
    <svg viewBox="0 0 480 90" className="w-full max-w-[520px] h-auto" role="img" aria-label="Supplier email to OperaLayer to the Navision API">
      {[0, 1].map((i) => (
        <motion.line
          key={i}
          x1={nodes[i].x + 34}
          x2={nodes[i + 1].x - 34}
          y1={30}
          y2={30}
          stroke="var(--sw-mint)"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 + i * 0.5, duration: 0.6 }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect
            x={n.x - 30}
            y={14}
            width={60}
            height={32}
            rx={2}
            fill={i === 1 ? "rgba(110,247,110,0.12)" : "rgba(255,255,255,0.04)"}
            stroke={i === 1 ? "var(--sw-mint)" : "rgba(255,255,255,0.25)"}
          />
          <text x={n.x} y={72} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize={12} fontFamily="Inter, sans-serif">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Results() {
  return (
    <section id="results" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(800px 500px at 85% 0%, rgba(63,74,175,0.28), transparent 60%)" }}
      />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            B2B electrical and industrial supply · Microsoft Dynamics NAV
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[20ch]">
            Results at a B2B electrical supplier with about{" "}
            <span style={{ color: "var(--sw-mint)" }}>a hundred vendors</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 border-t border-white/15">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.07}>
              <div className={`py-8 md:py-10 md:px-8 border-b md:border-b-0 border-white/10 ${i > 0 ? "md:border-l" : "md:pl-0"}`}>
                <div className="font-head text-white text-[56px] md:text-[72px] leading-none tabular-nums">{s.value}</div>
                <div className="mt-4 text-white/70 text-[15px] md:text-[16px] leading-snug max-w-[28ch]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 md:mt-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <h3 className="font-head text-white text-[26px] md:text-[32px] leading-[1.1] max-w-[22ch]">
                The next step for this client is already scoped
              </h3>
            </Reveal>
            <div className="mt-8 border-t border-white/10">
              {NEXT.map((n, i) => (
                <Reveal key={n.title} delay={i * 0.07}>
                  <div className="grid grid-cols-[28px_1fr] gap-3 border-b border-white/10 py-5">
                    <span className="label-code text-[var(--sw-mint)] pt-1">{i + 1}</span>
                    <div>
                      <div className="font-head text-white text-[18px] md:text-[20px] leading-tight">{n.title}</div>
                      <p className="mt-2 text-white/65 text-[15px] leading-relaxed max-w-[48ch]">{n.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <NextFlow />
            <div className="mt-10">
              <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
                Talk to us about your suppliers
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
