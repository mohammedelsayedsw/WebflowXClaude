"use client";

import { Eye, LifeBuoy, UserCheck, Wallet, Wrench, FileBarChart } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

type Item = { Icon: React.ComponentType<{ className?: string }>; label: string; body: string };

const items: Item[] = [
  {
    Icon: Eye,
    label: "One place to see what needs attention",
    body: "Recurring issues, rising app costs, failed syncs, and mismatched data surface in one view.",
  },
  {
    Icon: LifeBuoy,
    label: "Support that sees the whole picture",
    body: "Issues get read against your full setup, not patched one store at a time.",
  },
  {
    Icon: UserCheck,
    label: "Clear ownership",
    body: "Everyone knows who owns what, so nothing slips between teams or systems.",
  },
  {
    Icon: Wallet,
    label: "Control over app cost and risk",
    body: "You can finally see what each app costs and what it touches across every store.",
  },
  {
    Icon: Wrench,
    label: "Fixes that stick",
    body: "Root causes get solved once and shared, instead of reappearing store by store.",
  },
  {
    Icon: FileBarChart,
    label: "A report leadership can use",
    body: "One monthly readout, not a stack of separate ones.",
  },
];

export function WhatChanges() {
  return (
    <section id="what-changes" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            what changes with scandiweb
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            What it feels like once your stores{" "}
            <span className="text-[var(--sw-blue)]">run as one setup</span>
          </h2>
          <p className="mt-7 max-w-[60ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Real changes across stores, apps, data, and reporting.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={(i % 3) * 0.06}>
              <div>
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] mb-5"
                  style={{
                    border: "1px solid rgba(63,74,175,0.30)",
                    background: "rgba(63,74,175,0.06)",
                  }}
                >
                  <it.Icon className="h-5 w-5 text-[var(--sw-blue)]" />
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-[1.2]">
                  {it.label}
                </h3>
                <p className="mt-2.5 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
