"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const ROWS: {
  role: string;
  company: string;
  problem: string;
  today: string;
  link?: { href: string; label: string };
}[] = [
  {
    role: "CFO",
    company: "Manufacturer with 600 staff",
    problem:
      "Month-end close takes four working days. Half of that time goes into reconciling numbers between the ERP and the data warehouse.",
    today: "Reconciled by hand",
  },
  {
    role: "Head of eCommerce",
    company: "Direct-to-consumer beauty brand",
    problem:
      "The same customer has three different IDs across the CRM, the store, and support. Two attempts to fix it stalled because nobody owned it.",
    today: "No owner",
  },
  {
    role: "COO",
    company: "B2B distributor",
    problem:
      "The team runs the same process every Monday morning. It has been on the automation backlog for two years.",
    today: "Backlog, year two",
  },
  {
    role: "Commercial Director",
    company: "Retailer selling in several countries",
    problem:
      "Regional pricing lives in a spreadsheet that one person maintains. When she is on holiday, no price changes.",
    today: "One spreadsheet",
    link: { href: "/operalayer/pricing-control", label: "Pricing control" },
  },
  {
    role: "Head of Procurement",
    company: "Industrial supplier",
    problem:
      "Buyers check invoices against purchase orders by hand because every supplier sends a different PDF. It takes two people every morning.",
    today: "Two people, daily",
    link: { href: "/operalayer/invoice-matching", label: "Invoice matching" },
  },
  {
    role: "CIO",
    company: "Specialty retailer",
    problem:
      "The board asked for a dashboard that needs data from five systems. It has been planned for next quarter three quarters in a row.",
    today: "Next quarter",
  },
];

export function Roles() {
  return (
    <section id="roles" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(800px 500px at 85% 0%, rgba(63,74,175,0.22), transparent 60%)" }}
      />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">What clients told us this year</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[20ch]">
            Six roles in six companies describe the same kind of problem
          </h2>
          <p className="mt-6 text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch]">
            The details change from one business to the next. Underneath, something
            always falls between two systems and stays there.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-16 border-t border-white/15">
          <div className="hidden lg:grid grid-cols-[13rem_1fr_11rem] gap-10 py-4 label-code text-white/40 border-b border-white/10">
            <span>Role</span>
            <span>What falls between systems</span>
            <span className="text-right">Where it sits</span>
          </div>
          {ROWS.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.06}>
              <div className="group grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[13rem_1fr_11rem] gap-3 lg:gap-10 py-6 md:py-7 border-b border-white/10 transition-colors hover:bg-white/[0.025]">
                <div>
                  <div className="font-head text-white text-[19px] md:text-[21px] leading-tight">{r.role}</div>
                  <div className="mt-1 text-[13px] md:text-[14px] text-white/50">{r.company}</div>
                </div>
                <div>
                  <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">{r.problem}</p>
                  {r.link && (
                    <a
                      href={assetUrl(r.link.href)}
                      className="mt-3 inline-flex items-center gap-1.5 text-[14px] text-[var(--sw-mint)] hover:text-white transition"
                    >
                      How we built {r.link.label.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="lg:text-right">
                  <span className="inline-flex items-center gap-2 label-code text-[var(--sw-orange)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-orange)]" />
                    {r.today}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
