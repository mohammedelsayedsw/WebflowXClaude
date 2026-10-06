"use client";

import { useEffect, useState } from "react";
import { calculate, periodLabel, useSavings, type Currency } from "./Savings";
import { scrollToId } from "./scrollTo";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import {
  ANNUAL_SERVICE_PRICE,
  LICENCE_MAX,
  LICENCE_MIN,
  LICENCE_STEP,
  MIGRATION_PRICE,
  YEARS,
} from "./status";

const LABEL = "text-white/55 text-[13px] leading-[1.4]";

/** The savings calculator that sits in the hero. Migration and annual service are fixed; license fee and timeframe move. */
export function Calculator() {
  const { licence, years, currency, setLicence, setYears, setCurrency, money } = useSavings();
  const r = calculate(licence, years);
  const period = periodLabel(years);
  const [draft, setDraft] = useState(licence.toLocaleString("en-US"));
  const [open, setOpen] = useState(false);

  useEffect(() => setDraft(licence.toLocaleString("en-US")), [licence]);

  const commitDraft = () => {
    const n = Number(draft.replace(/[^\d]/g, ""));
    if (Number.isFinite(n) && n >= LICENCE_MIN && n <= LICENCE_MAX) setLicence(n);
    else setDraft(licence.toLocaleString("en-US"));
  };
  const nudge = (dir: 1 | -1) =>
    setLicence(Math.min(LICENCE_MAX, Math.max(LICENCE_MIN, licence + dir * LICENCE_STEP)));

  const fill = `${(100 * (licence - LICENCE_MIN)) / (LICENCE_MAX - LICENCE_MIN)}%`;
  const positive = r.netSaving > 0;
  const beyond = r.paybackMonths !== null && r.paybackMonths > years * 12;

  return (
    <div
      id="calculator"
      className="rounded-[4px] border border-white/15 bg-[#0b0e20]/85 backdrop-blur p-6 md:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-head font-semibold text-white text-[20px] md:text-[22px] leading-[1.2]">
          How much could you save?
        </h2>
        <div role="group" aria-label="Currency" className="flex border border-white/20 rounded-[2px] overflow-hidden shrink-0">
          {(["EUR", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={currency === c}
              onClick={() => setCurrency(c)}
              className={`px-3 h-8 text-[13px] font-head font-semibold transition ${
                currency === c ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/70 hover:text-white"
              }`}
            >
              {c === "EUR" ? "€ EUR" : "$ USD"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 pb-6 border-b border-white/10" aria-live="polite" aria-atomic="true">
        <div className={LABEL}>
          {positive
            ? `Estimated net saving over ${period}`
            : r.netSaving < 0
              ? `Estimated additional cost over ${period}`
              : `No net saving over ${period}`}
        </div>
        <div
          className="mt-1 font-head font-bold text-[44px] md:text-[56px] leading-none tracking-[-0.02em]"
          style={{ color: positive ? "var(--sw-mint)" : "var(--sw-orange)" }}
        >
          {money(Math.abs(r.netSaving))}
        </div>
        <p className="mt-3 text-white/70 text-[14px] leading-relaxed">
          {r.paybackMonths === null ? (
            "Annual service costs match or exceed your current license fee."
          ) : (
            <>
              Migration paid back in{" "}
              <strong className="text-white">{r.paybackMonths.toFixed(1)} months</strong>.{" "}
              {beyond ? "After payback" : "After that"}, you save{" "}
              <strong className="text-white">{money(r.annualSaving / 12)}/month</strong>
            </>
          )}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="akeneo-licence" className={LABEL}>
            Your current annual license fee
          </label>
          <div className="flex items-center border border-white/20 rounded-[2px]">
            <button
              type="button"
              onClick={() => nudge(-1)}
              disabled={licence <= LICENCE_MIN}
              aria-label={`Decrease by ${money(LICENCE_STEP)}`}
              className="w-9 h-9 text-white/70 hover:text-white disabled:opacity-30"
            >
              −
            </button>
            <input
              id="akeneo-licence"
              inputMode="numeric"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commitDraft}
              onKeyDown={(e) => e.key === "Enter" && commitDraft()}
              className="w-[96px] h-9 bg-transparent text-center text-white font-head font-semibold text-[15px] outline-none border-x border-white/20"
            />
            <button
              type="button"
              onClick={() => nudge(1)}
              disabled={licence >= LICENCE_MAX}
              aria-label={`Increase by ${money(LICENCE_STEP)}`}
              className="w-9 h-9 text-white/70 hover:text-white disabled:opacity-30"
            >
              +
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
          className="akeneo-range mt-4 w-full"
          style={{ ["--fill" as string]: fill }}
        />
        <div className="mt-1 flex justify-between text-white/40 text-[12px]">
          <span>{money(LICENCE_MIN)}</span>
          <span>{money(LICENCE_MAX)}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className={LABEL}>Savings timeframe</div>
        <div role="group" aria-label="Savings timeframe" className="mt-2 grid grid-cols-5 border border-white/20 rounded-[2px] overflow-hidden">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              aria-pressed={years === y}
              onClick={() => setYears(y)}
              className={`h-10 text-[14px] font-head font-semibold transition border-r last:border-r-0 border-white/20 ${
                years === y ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/70 hover:text-white"
              }`}
            >
              {y === 1 ? "1 yr" : `${y} yrs`}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 border-t border-white/10">
        <div className="pt-4 pr-4 border-r border-white/10">
          <div className={LABEL}>One-off migration</div>
          <div className="mt-1 font-head font-semibold text-white text-[20px]">{money(MIGRATION_PRICE)}</div>
          <div className="text-white/45 text-[12px]">Fixed price</div>
        </div>
        <div className="pt-4 pl-4">
          <div className={LABEL}>Annual service</div>
          <div className="mt-1 font-head font-semibold text-white text-[20px]">{money(ANNUAL_SERVICE_PRICE)}</div>
          <div className="text-white/45 text-[12px]">Fixed per year</div>
        </div>
      </div>

      <details
        className="mt-5 border-t border-white/10"
        open={open}
        onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      >
        <summary className="cursor-pointer list-none flex items-center justify-between py-3 text-white/70 hover:text-white text-[14px] font-head font-semibold [&::-webkit-details-marker]:hidden">
          See costs and assumptions
          <span aria-hidden className={`transition ${open ? "rotate-45" : ""}`}>+</span>
        </summary>
        <dl className="text-[14px]">
          {[
            [`Your license over ${period}`, money(r.currentTotal)],
            ["One-off migration", money(MIGRATION_PRICE)],
            [`Annual service over ${period}`, money(r.serviceTotal)],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-t border-white/10">
              <dt className="text-white/60">{k}</dt>
              <dd className="text-white">{v}</dd>
            </div>
          ))}
          <div className="flex justify-between py-2 border-t border-white/20 font-semibold">
            <dt className="text-white">Total with scandiweb</dt>
            <dd className="text-white">{money(r.proposedTotal)}</dd>
          </div>
        </dl>
        <p className="mt-3 pb-2 text-white/50 text-[12px] leading-relaxed">
          Changing the currency does not convert the figures. The estimate assumes unchanged prices
          and starts after your paid license ends. It excludes tax and remaining contract commitments.
          Your assessment confirms feature coverage and the service scope.
        </p>
      </details>

      <a
        href="#cta"
        onClick={scrollToId("cta")}
        className={`${btnPrimary} mt-5 w-full h-auto min-h-12 py-3 text-center`}
      >
        Get a savings assessment for my setup
      </a>
    </div>
  );
}
