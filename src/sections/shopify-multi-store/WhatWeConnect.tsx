"use client";

import { LayoutDashboard, Network, ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

type Card = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const cards: Card[] = [
  {
    Icon: LayoutDashboard,
    title: "See every store in one view",
    body: "Orders, stock, product gaps, app costs, and alerts from all of your Shopify stores on one screen, instead of logging into each admin.",
  },
  {
    Icon: Network,
    title: "Connect the systems behind them",
    body: "ERP, CMS, orders, and warehouse linked to Shopify with proven connectors, and kept in sync so prices and stock stop disagreeing.",
  },
  {
    Icon: ShieldAlert,
    title: "Catch problems before customers do",
    body: "Site speed, failed syncs, checkout, payments, and risky releases watched across every store, so issues surface early, not after they cost you.",
  },
];

export function WhatWeConnect() {
  return (
    <section id="view" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">what we do</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.04] max-w-[20ch]">
            One team for your whole{" "}
            <span style={{ color: "var(--sw-mint)" }}>Shopify setup</span>
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] md:text-[18px] leading-relaxed text-white/75">
            Your stores stay separate. Everything around them gets connected and
            watched, by one team that sees the whole picture.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-7 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div
                className="h-full rounded-[10px] border border-white/10 p-8 md:p-9"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 55%), rgba(16,19,44,0.5)",
                }}
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-[8px] mb-7"
                  style={{
                    border: "1px solid rgba(110,247,110,0.3)",
                    background: "rgba(110,247,110,0.08)",
                  }}
                >
                  <c.Icon className="h-6 w-6" />
                </div>
                <h3 className="font-head text-white text-[21px] md:text-[24px] leading-[1.15]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/70 leading-relaxed">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
