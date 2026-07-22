"use client";

import { Reveal } from "@/components/primitives/Reveal";

const activations = ["Email and SMS", "Paid media", "Reporting", "Store teams"];
const sources = ["Website", "POS", "CRM", "Clienteling"];

/** Static layered diagram: sources (bottom) -> hub (middle) -> activations (top). */
function ControlDiagram() {
  return (
    <div
      className="w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto rounded-[4px] p-5 sm:p-7"
      style={{ background: "#10132c", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* Top · where you send it */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        Where you send it
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {activations.map((c) => (
          <span
            key={c}
            className="font-head flex items-center justify-center whitespace-nowrap rounded-[2px] border border-white/12 bg-white/[0.05] px-1 py-2 text-center text-[8.5px] leading-tight text-white/80"
          >
            {c}
          </span>
        ))}
      </div>

      {/* connector: hub up into the four boxes */}
      <svg
        viewBox="0 0 100 22"
        preserveAspectRatio="none"
        className="my-1.5 h-5 w-full"
        aria-hidden
      >
        {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
          <line
            key={i}
            x1="50"
            y1="22"
            x2={x}
            y2="0"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Middle · hub */}
      <div
        className="rounded-[2px] px-4 py-3.5 text-center"
        style={{
          background: "rgba(110,247,110,0.08)",
          border: "1px solid rgba(110,247,110,0.35)",
        }}
      >
        <div
          className="font-head font-bold text-[14px] leading-tight"
          style={{ color: "var(--sw-mint)" }}
        >
          Customer Data Control Hub
        </div>
        <div className="text-white/60 text-[11px] mt-1.5">
          One trusted customer identity, owned by you
        </div>
      </div>

      {/* connector: four sources up into the hub */}
      <svg
        viewBox="0 0 100 22"
        preserveAspectRatio="none"
        className="my-1.5 h-5 w-full"
        aria-hidden
      >
        {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="22"
            x2="50"
            y2="0"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Bottom · where your data lives now */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        Where your data lives now
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {sources.map((m) => (
          <span
            key={m}
            className="font-head flex items-center justify-center whitespace-nowrap rounded-[2px] border border-white/10 bg-white/[0.03] px-1 py-2.5 text-center text-[9px] leading-tight text-white/80"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export function InShort() {
  return (
    <section id="in-short" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:items-center">
          {/* LEFT · text */}
          <div className="max-w-[40rem]">
            <Reveal>
              <span className="label-code block text-[var(--sw-black)]/50">
                In short
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head mt-5 max-w-[26ch] text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
                What the{" "}
                <span className="text-[var(--sw-blue)]">
                  Customer Data Control Hub
                </span>{" "}
                is
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[68ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[18px]">
                Your customer information is scattered across your website, your
                shops, your CRM, and your marketing tools. The Customer Data
                Control Hub pulls it together, works out which entries are the
                same person, and gives you one clean list you can actually use.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-[68ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[18px]">
                And you control that list yourself. When you want to change how
                customers are grouped or counted, your team does it, instead of
                paying your software supplier and waiting for them.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · diagram */}
          <Reveal delay={0.15}>
            <ControlDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
