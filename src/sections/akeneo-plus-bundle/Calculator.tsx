"use client";

import { useEffect, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { btnLight } from "@/components/primitives/buttonStyles";
import { calculate, periodLabel, useSavings, type Currency } from "./Savings";
import { scrollToId } from "./scrollTo";
import {
  ANNUAL_SERVICE_PRICE,
  LICENCE_MAX,
  LICENCE_MIN,
  LICENCE_STEP,
  MIGRATION_PRICE,
  YEARS,
} from "./status";
import { LAVENDER, LINE_LIGHT } from "./ui";

const INK = "text-[var(--sw-black)]";
const fmt = (n: number) => n.toLocaleString("en-US");

/** White savings card in the hero. Migration and service are fixed; license fee, timeframe and currency move. */
export function Calculator() {
  const { licence, years, currency, setLicence, setYears, setCurrency, money } = useSavings();
  const r = calculate(licence, years);
  const period = periodLabel(years);
  const [draft, setDraft] = useState(fmt(licence));
  const [open, setOpen] = useState(false);

  useEffect(() => setDraft(fmt(licence)), [licence]);

  const commitDraft = () => {
    const n = Number(draft.replace(/[^\d]/g, ""));
    if (Number.isFinite(n) && n >= LICENCE_MIN && n <= LICENCE_MAX) setLicence(n);
    else setDraft(fmt(licence));
  };
  const nudge = (dir: 1 | -1) =>
    setLicence(Math.min(LICENCE_MAX, Math.max(LICENCE_MIN, licence + dir * LICENCE_STEP)));

  const pct = (v: number, min: number, max: number) => `${(100 * (v - min)) / (max - min)}%`;
  const positive = r.netSaving > 0;
  const beyond = r.paybackMonths !== null && r.paybackMonths > years * 12;
  const symbol = currency === "USD" ? "$" : "€";
  const round = "grid place-items-center h-8 w-8 rounded-full text-[var(--sw-blue)] disabled:opacity-30 transition";

  return (
    <div id="calculator" className="bg-white rounded-[2px] p-6 md:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between gap-3">
        <div className="font-head font-bold uppercase text-[12px] tracking-[0.16em] text-[var(--sw-blue)]">Your savings</div>
        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="akeneo-currency">Currency</label>
          <select
            id="akeneo-currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className={`h-9 rounded-[2px] border ${LINE_LIGHT} bg-white px-2 text-[14px] ${INK}`}
          >
            <option value="EUR">EUR €</option>
            <option value="USD">USD $</option>
          </select>
          <span className="hidden sm:inline-block px-2 py-1 text-[12px] text-[var(--sw-black)]/70" style={{ background: LAVENDER }}>
            Indicative estimate
          </span>
        </div>
      </div>

      <h2 className={`mt-4 font-head font-bold ${INK} text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.01em]`}>
        How much could you save?
      </h2>

      <div className="mt-6 bg-[var(--sw-black)] p-5 md:p-6" aria-live="polite" aria-atomic="true">
        <div className="text-white/80 text-[14px]">
          {positive ? `Estimated net saving over ${period}` : r.netSaving < 0 ? `Estimated extra cost over ${period}` : `No net saving over ${period}`}
        </div>
        <div
          className="mt-2 font-head font-bold text-[44px] md:text-[52px] leading-none tracking-[-0.03em]"
          style={{ color: positive ? "var(--sw-mint)" : "var(--sw-orange)" }}
        >
          {money(Math.abs(r.netSaving))}
        </div>
        <div className="mt-2 text-white/70 text-[13px]">After migration and the yearly service</div>
        <div className="mt-5 pt-5 border-t border-white/15">
          {r.paybackMonths === null ? (
            <p className="text-white/80 text-[14px]">The yearly service costs as much as your license or more.</p>
          ) : (
            <>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-white/80 text-[14px]">Migration paid back in</span>
                <span className="font-head font-bold text-[22px] md:text-[26px] whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
                  {r.paybackMonths.toFixed(1)} months
                </span>
              </div>
              <p className="mt-2 text-white text-[14px]">
                {beyond ? "After payback" : "After that"}, you save{" "}
                <strong style={{ color: "var(--sw-mint)" }}>{money(r.annualSaving / 12)}/month</strong>
              </p>
            </>
          )}
        </div>
      </div>

      <div className="mt-7">
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-3">
          <label htmlFor="akeneo-licence" className={`font-head font-semibold ${INK} text-[15px]`}>
            Your current annual license fee
          </label>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => nudge(-1)} disabled={licence <= LICENCE_MIN} aria-label={`Decrease by ${money(LICENCE_STEP)}`} className={round} style={{ background: LAVENDER }}>
              <Minus className="h-4 w-4" />
            </button>
            <div className={`flex items-center h-11 border ${LINE_LIGHT} rounded-[2px] px-3`}>
              <span className={`${INK} font-head font-bold text-[16px]`}>{symbol}</span>
              <input
                id="akeneo-licence"
                inputMode="numeric"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={commitDraft}
                onKeyDown={(e) => e.key === "Enter" && commitDraft()}
                className={`w-[84px] bg-transparent text-right ${INK} font-head font-bold text-[17px] outline-none`}
              />
            </div>
            <button type="button" onClick={() => nudge(1)} disabled={licence >= LICENCE_MAX} aria-label={`Increase by ${money(LICENCE_STEP)}`} className={round} style={{ background: LAVENDER }}>
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
        <input
          type="range"
          min={LICENCE_MIN}
          max={LICENCE_MAX}
          step={LICENCE_STEP}
          value={licence}
          onChange={(e) => setLicence(Number(e.target.value))}
          aria-label="Annual license fee"
          aria-valuetext={money(licence)}
          className="akeneo-range mt-5 w-full"
          style={{ ["--fill" as string]: pct(licence, LICENCE_MIN, LICENCE_MAX) }}
        />
        <div className="mt-2 flex justify-between text-[var(--sw-black)]/60 text-[13px]">
          <span>{money(LICENCE_MIN)}</span>
          <span>{money(LICENCE_MAX)}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className={`font-head font-semibold ${INK} text-[15px]`}>Savings timeframe</span>
          <span className="font-head font-bold text-[var(--sw-blue)] text-[15px]">{period}</span>
        </div>
        <div role="group" aria-label="Savings timeframe" className="mt-3 grid grid-cols-5 gap-1">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              aria-pressed={years === y}
              onClick={() => setYears(y)}
              className={`h-12 rounded-[2px] border text-[14px] leading-tight transition ${
                years === y
                  ? "border-[#c9cdeb] text-[var(--sw-blue)] font-semibold"
                  : "border-transparent text-[var(--sw-black)]/70 hover:text-[var(--sw-black)]"
              }`}
              style={years === y ? { background: LAVENDER } : undefined}
            >
              {y}
              <span className="block text-[12px]">{y === 1 ? "yr" : "yrs"}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={`mt-6 pt-6 border-t ${LINE_LIGHT} grid grid-cols-2 gap-4`}>
        {[
          ["One-off migration", "Fixed price", MIGRATION_PRICE, "Migration, connectors, and setup"],
          ["Yearly service", "Fixed per year", ANNUAL_SERVICE_PRICE, "Maintenance, hosting, and upgrades"],
        ].map(([label, tag, price, note]) => (
          <div key={label as string}>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className={`font-head font-semibold ${INK} text-[14px]`}>{label}</span>
              <span className="px-1.5 py-0.5 text-[12px] text-[var(--sw-blue)]" style={{ background: LAVENDER }}>{tag}</span>
            </div>
            <div className={`mt-2 px-3 py-2.5 font-head font-bold ${INK} text-[20px] md:text-[22px]`} style={{ background: LAVENDER }}>
              {money(price as number)}
            </div>
            <div className="mt-2 text-[var(--sw-black)]/60 text-[12px] leading-snug">{note}</div>
          </div>
        ))}
      </div>

      <div className={`mt-6 pt-5 border-t ${LINE_LIGHT}`}>
        <p className={`flex items-center gap-3 font-head font-semibold ${INK} text-[15px]`}>
          <Check aria-hidden className="h-4 w-4 text-[var(--sw-blue)]" strokeWidth={3} />
          You own the system and the data
        </p>
        <details className="mt-3" open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
          <summary className={`cursor-pointer list-none flex items-center justify-between py-2 font-head font-semibold ${INK} text-[15px] [&::-webkit-details-marker]:hidden`}>
            See costs and assumptions
            <Plus aria-hidden className={`h-4 w-4 transition ${open ? "rotate-45" : ""}`} />
          </summary>
          <dl className="mt-2 text-[14px]">
            {[
              [`Your license over ${period}`, money(r.currentTotal)],
              ["One-off migration", money(MIGRATION_PRICE)],
              [`Yearly service over ${period}`, money(r.serviceTotal)],
            ].map(([k, v]) => (
              <div key={k} className={`flex justify-between py-2 border-t ${LINE_LIGHT}`}>
                <dt className="text-[var(--sw-black)]/70">{k}</dt>
                <dd className={INK}>{v}</dd>
              </div>
            ))}
            <div className={`flex justify-between py-2 border-t ${LINE_LIGHT} font-semibold`}>
              <dt className={INK}>Total with scandiweb</dt>
              <dd className={INK}>{money(r.proposedTotal)}</dd>
            </div>
          </dl>
          <p className="mt-2 text-[var(--sw-black)]/60 text-[12px] leading-relaxed">
            Switching currency changes the symbol, not the amounts. The estimate assumes today&apos;s prices and starts
            when your paid license ends. It leaves out tax and any remaining contract commitments.
          </p>
        </details>
      </div>

      <a href="#cta" onClick={scrollToId("cta")} className={`${btnLight} mt-6 w-full h-auto min-h-12 py-3 text-center`}>
        Get a savings assessment for my setup
      </a>
      <p className="mt-3 text-center text-[var(--sw-black)]/60 text-[13px]">
        The assessment confirms feature coverage and migration scope
      </p>
    </div>
  );
}
