"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * The cost section carries the substance of the page, so each block gets its
 * own small figure rather than an icon. The AI block is deliberately the loudest,
 * it is the one that lands with CTOs and CDOs.
 *
 * TODO: the source brief promised five pain points and listed four. Ana to
 * confirm the fifth, then add it as a fourth card in COSTS below.
 */

const AXIS = "rgba(16,19,44,0.14)";
const INK = "rgba(16,19,44,0.55)";

/** Launches slip while data is found, checked, and rekeyed. */
function TimeFigure() {
  return (
    <svg viewBox="0 0 280 96" className="w-full h-auto" aria-hidden>
      <text x="0" y="12" fill={INK} fontSize="10" letterSpacing="1">
        PLANNED
      </text>
      <rect x="0" y="20" width="150" height="14" rx="4" fill="var(--sw-blue)" opacity="0.85" />
      <text x="0" y="60" fill={INK} fontSize="10" letterSpacing="1">
        ACTUAL
      </text>
      <rect x="0" y="68" width="150" height="14" rx="4" fill="var(--sw-blue)" opacity="0.35" />
      <rect x="150" y="68" width="112" height="14" rx="4" fill="var(--sw-orange)" opacity="0.75" />
      <text x="266" y="79" fill={INK} fontSize="10" textAnchor="end" opacity="0">
        .
      </text>
      <line x1="150" y1="16" x2="150" y2="90" stroke={AXIS} strokeDasharray="3 3" />
    </svg>
  );
}

/** Live but wrong listings sell worse than listings that are not live at all. */
function ChannelFigure() {
  const bars = [
    { h: 46, bad: false },
    { h: 62, bad: false },
    { h: 22, bad: true },
    { h: 54, bad: false },
    { h: 18, bad: true },
    { h: 58, bad: false },
  ];
  return (
    <svg viewBox="0 0 280 96" className="w-full h-auto" aria-hidden>
      <line x1="0" y1="86" x2="280" y2="86" stroke={AXIS} />
      {bars.map((b, i) => (
        <g key={i}>
          <rect
            x={i * 46}
            y={86 - b.h}
            width="30"
            height={b.h}
            rx="4"
            fill={b.bad ? "var(--sw-orange)" : "var(--sw-blue)"}
            opacity={b.bad ? 0.75 : 0.8}
          />
          {b.bad ? (
            <text
              x={i * 46 + 15}
              y={86 - b.h - 8}
              fill="var(--sw-orange)"
              fontSize="13"
              textAnchor="middle"
              fontWeight="600"
            >
              !
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

/** Every new market multiplies the problem instead of adding to the revenue. */
function MarketsFigure() {
  const rows = [
    { code: "EN", state: "Current" },
    { code: "DE", state: "Stale" },
    { code: "FR", state: "Stale" },
    { code: "ES", state: "Missing" },
  ];
  return (
    <svg viewBox="0 0 280 96" className="w-full h-auto" aria-hidden>
      {rows.map((r, i) => {
        const y = i * 24;
        const ok = r.state === "Current";
        return (
          <g key={r.code}>
            <rect
              x="0"
              y={y}
              width="280"
              height="18"
              rx="4"
              fill={ok ? "rgba(63,74,175,0.10)" : "rgba(255,90,49,0.09)"}
            />
            <text x="10" y={y + 13} fill="rgba(16,19,44,0.8)" fontSize="11" fontWeight="600">
              {r.code}
            </text>
            <circle
              cx="46"
              cy={y + 9}
              r="3.5"
              fill={ok ? "var(--sw-blue)" : "var(--sw-orange)"}
            />
            <text x="60" y={y + 13} fill={INK} fontSize="11">
              {r.state}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const COSTS: { n: string; title: string; body: string[]; figure: () => React.JSX.Element }[] = [
  {
    n: "01",
    title: "Time to market",
    body: [
      "New products and new channels wait on data that has to be found, checked, and rekeyed. Every launch starts later than it needed to.",
    ],
    figure: TimeFigure,
  },
  {
    n: "02",
    title: "Channel and marketplace revenue",
    body: [
      "Data errors throttle listings and drag conversion. Products that are live but wrong sell worse than products that are not live at all.",
    ],
    figure: ChannelFigure,
  },
  {
    n: "03",
    title: "The growth ceiling on new markets",
    body: [
      "Translations go stale or get overwritten, and nothing tells you which language version is current. Every new market multiplies the problem instead of adding to the revenue.",
    ],
    figure: MarketsFigure,
  },
];

export function Costs() {
  return (
    <section
      id="the-cost"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The cost</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              The four places it{" "}
              <span className="text-[var(--sw-blue)]">costs you</span>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 md:grid-cols-3">
          {COSTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li className="flex h-full flex-col rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-7">
                <span className="font-head text-[13px] tabular-nums leading-none text-[var(--sw-blue)]">
                  {c.n}
                </span>
                <div className="mt-4 font-head font-bold text-[var(--sw-black)] text-[18px] md:text-[21px] leading-tight">
                  {c.title}
                </div>
                <div className="mt-6 mb-6">
                  <c.figure />
                </div>
                {c.body.map((p) => (
                  <p
                    key={p}
                    className="mt-auto text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </li>
            </Reveal>
          ))}
        </ul>

        {/* 04, the block that lands with CTOs and CDOs, so it gets the width */}
        <Reveal delay={0.24}>
          <div className="mt-3 md:mt-4 rounded-[4px] border border-[var(--sw-blue)]/40 bg-[var(--sw-blue)]/[0.05] p-7 md:p-10">
            <span className="font-head text-[13px] tabular-nums leading-none text-[var(--sw-blue)]">
              04
            </span>
            <div className="mt-4 font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[26px] leading-tight">
              AI that never gets off the ground
            </div>

            <div className="mt-8 grid gap-8 md:gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div>
                  <div className="font-head font-bold text-[var(--sw-blue)] text-[44px] md:text-[64px] leading-none tracking-[-0.03em] tabular-nums">
                    80%+
                  </div>
                  <div className="mt-2 max-w-[22ch] text-[var(--sw-black)]/70 text-[13px] md:text-[14px] leading-snug">
                    of companies report no clear bottom line impact from AI
                  </div>
                </div>
                <div>
                  <div className="font-head font-bold text-[var(--sw-blue)] text-[44px] md:text-[64px] leading-none tracking-[-0.03em] tabular-nums">
                    5.5%
                  </div>
                  <div className="mt-2 max-w-[22ch] text-[var(--sw-black)]/70 text-[13px] md:text-[14px] leading-snug">
                    see real financial returns
                  </div>
                </div>
              </div>

              <div className="lg:border-l lg:border-[var(--sw-black)]/10 lg:pl-10">
                <p className="font-head text-[var(--sw-black)] text-[17px] md:text-[21px] leading-[1.4] max-w-[46ch]">
                  More than 80% of companies report no clear bottom line impact
                  from AI, and only 5.5% see real financial returns.
                </p>
                <p className="mt-3 label-code text-[var(--sw-black)]/50">
                  McKinsey, State of AI
                </p>
                <p className="mt-6 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed max-w-[52ch]">
                  The blocker is usually not the model. It is the product data
                  underneath it.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
