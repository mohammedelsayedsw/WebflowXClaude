"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  ANNUAL_SERVICE_PRICE,
  DEFAULT_LICENCE,
  DEFAULT_YEARS,
  MIGRATION_PRICE,
} from "./status";

export type Currency = "EUR" | "USD";

export function calculate(licence: number, years: number) {
  const currentTotal = licence * years;
  const serviceTotal = ANNUAL_SERVICE_PRICE * years;
  const proposedTotal = MIGRATION_PRICE + serviceTotal;
  const annualSaving = licence - ANNUAL_SERVICE_PRICE;
  return {
    currentTotal,
    serviceTotal,
    proposedTotal,
    netSaving: currentTotal - proposedTotal,
    annualSaving,
    paybackMonths: annualSaving > 0 ? (12 * MIGRATION_PRICE) / annualSaving : null,
  };
}

export function formatMoney(n: number, currency: Currency) {
  return new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-IE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(n);
}

export const periodLabel = (years: number) => (years === 1 ? "1 year" : `${years} years`);

type State = {
  licence: number;
  years: number;
  currency: Currency;
  setLicence: (n: number) => void;
  setYears: (n: number) => void;
  setCurrency: (c: Currency) => void;
  money: (n: number) => string;
};

const SavingsContext = createContext<State | null>(null);

/** One calculator state for the hero, the cost model and the assessment form. */
export function SavingsProvider({ children }: { children: React.ReactNode }) {
  const [licence, setLicence] = useState(DEFAULT_LICENCE);
  const [years, setYears] = useState(DEFAULT_YEARS);
  const [currency, setCurrency] = useState<Currency>("EUR");
  const value = useMemo(
    () => ({
      licence,
      years,
      currency,
      setLicence,
      setYears,
      setCurrency,
      money: (n: number) => formatMoney(n, currency),
    }),
    [licence, years, currency],
  );
  return <SavingsContext.Provider value={value}>{children}</SavingsContext.Provider>;
}

export function useSavings() {
  const ctx = useContext(SavingsContext);
  if (!ctx) throw new Error("useSavings needs SavingsProvider");
  return ctx;
}
