"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * The cost section carries the substance of the page, so each block gets its
 * own small figure rather than an icon. The AI block is deliberately the loudest,
 * it is the one that lands with CTOs and CDOs.
 *
 * Four pain points, final. The heading carries no count, so the section reads
 * the same if a fifth is ever added.
 */

const AXIS = "rgba(255,255,255,0.14)";
const INK = "rgba(255,255,255,0.55)";

/** Launches slip while data is found, checked, and rekeyed. */
function TimeFigure() {
  return (
    <svg viewBox="0 0 280 96" className="w-full h-auto" aria-hidden>
      <text x="0" y="12" fill={INK} fontSize="10" letterSpacing="1">
        PLANNED
      </text>
      <rect x="0" y="20" width="150" height="14" rx="4" fill="var(--sw-mint)" opacity="0.8" />
      <text x="0" y="60" fill={INK} fontSize="10" letterSpacing="1">
        ACTUAL
      </text>
      <rect x="0" y="68" width="150" height="14" rx="4" fill="var(--sw-mint)" opacity="0.3" />
      <rect x="150" y="68" width="112" height="14" rx="4" fill="var(--sw-orange)" opacity="0.85" />
      <line x1="150" y1="16" x2="150" y2="90" stroke={AXIS} strokeDasharray="3 3" />
    </svg>
  );
}

/** Listings are rejected, and the ones that go live convert worse. */
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
            fill={b.bad ? "var(--sw-orange)" : "var(--sw-mint)"}
            opacity={b.bad ? 0.85 : 0.7}
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

/** Every new market multiplies the work instead of adding to the revenue. */
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
              fill={ok ? "rgba(110,247,110,0.10)" : "rgba(255,90,49,0.10)"}
            />
            <text x="10" y={y + 13} fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="600">
              {r.code}
            </text>
            <circle
              cx="46"
              cy={y + 9}
              r="3.5"
              fill={ok ? "var(--sw-mint)" : "var(--sw-orange)"}
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

const COSTS: { n: string; title: string; body: string; figure: () => React.JSX.Element }[] = [
  {
    n: "1",
    title: "Time to market",
    body: "Every launch waits while someone finds, checks, and retypes the data.",
    figure: TimeFigure,
  },
  {
    n: "2",
    title: "Channel and marketplace revenue",
    body: "Every channel asks for different details, and nothing tells you what is missing until a product is rejected.",
    figure: ChannelFigure,
  },
  {
    n: "3",
    title: "The growth ceiling on new markets",
    body: "You update a product, and the other languages don't update accordingly.",
    figure: MarketsFigure,
  },
];

export function Costs() {
  return (
    <section
      id="the-cost"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
              <span className="text-white/55">3</span>
              <span className="h-px w-6 bg-white/15" />
              <span>The price you pay</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Where it{" "}
              <span style={{ color: "var(--sw-orange)" }}>costs you</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-head text-white/80 text-[16px] md:text-[19px] leading-relaxed">
              It shows up in four places, and nobody ever counts the total.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 md:grid-cols-3">
          {COSTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li className="flex h-full flex-col rounded-[4px] border border-white/12 bg-white/[0.035] p-6 md:p-7">
                <span
                  className="font-head text-[13px] tabular-nums leading-none"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {c.n}
                </span>
                <div className="mt-4 font-head font-bold text-white text-[17px] md:text-[18px] leading-tight">
                  {c.title}
                </div>
                <div className="mt-6 mb-6">
                  <c.figure />
                </div>
                <p className="mt-auto text-white/70 text-[14px] md:text-[15px] leading-relaxed">
                  {c.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* 4, the block that lands with CTOs and CDOs, so it gets the width.
            The link to product data leads, the figures back it up. */}
        <Reveal delay={0.24}>
          <div className="mt-3 md:mt-4 rounded-[4px] border border-[var(--sw-orange)]/35 bg-[var(--sw-orange)]/[0.06] p-7 md:p-10">
            <span
              className="font-head text-[13px] tabular-nums leading-none"
              style={{ color: "var(--sw-orange)" }}
            >
              4
            </span>
            <div className="mt-4 grid gap-8 lg:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              {/* left, the point. right, the figures that back it up, which
                  keeps the block wide rather than tall */}
              <div>
                {/* set to match the three cost cards above, so block 4 reads
                    as the fourth item rather than a separate pull-quote */}
                <div className="font-head font-bold text-white text-[17px] md:text-[18px] leading-tight">
                  Your AI plans are waiting on product data
                </div>
                <p className="mt-4 max-w-[52ch] text-white/70 text-[14px] md:text-[15px] leading-relaxed">
                  AI works from the data you already have, so when your product
                  data is inconsistent, the results are too.
                </p>
              </div>

              <div className="lg:border-l lg:border-white/12 lg:pl-10 xl:pl-14">
                <div className="flex flex-wrap gap-8 md:gap-12">
                  <div>
                    <div
                      className="font-head font-bold text-[40px] md:text-[56px] leading-none tracking-[-0.03em] tabular-nums"
                      style={{ color: "var(--sw-orange)" }}
                    >
                      80%+
                    </div>
                    <div className="mt-2 max-w-[22ch] text-white/70 text-[13px] md:text-[14px] leading-snug">
                      say AI has not changed their profit
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-head font-bold text-[40px] md:text-[56px] leading-none tracking-[-0.03em] tabular-nums"
                      style={{ color: "var(--sw-orange)" }}
                    >
                      5.5%
                    </div>
                    <div className="mt-2 max-w-[22ch] text-white/70 text-[13px] md:text-[14px] leading-snug">
                      say AI is actually making them money
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
