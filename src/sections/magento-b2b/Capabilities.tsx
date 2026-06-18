"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Cap = { title: string; body: string };

const caps: Cap[] = [
  {
    title: "Company accounts & self-service",
    body: "Buyers manage their own users, roles, and budgets, and reorder without calling sales.",
  },
  {
    title: "Account pricing & contracts",
    body: "Shared catalogs and customer-specific price lists, so every buyer signs in to the price you negotiated with them.",
  },
  {
    title: "Quotes & approvals",
    body: "Request-a-quote, negotiated pricing, and purchase approvals handled in the store instead of over email.",
  },
  {
    title: "Fast reordering & bulk",
    body: "Requisition lists, quick order by SKU, and CSV upload, so high-volume buyers place a large order in seconds.",
  },
  {
    title: "Punchout, EDI & ERP",
    body: "Adobe Commerce connected to SAP, Infor, Pimcore, and procurement systems, with stock and pricing kept in sync.",
  },
  {
    title: "B2B and DTC on one platform",
    body: "Run wholesale alongside direct sales, across markets and currencies, on the same Magento backend and catalog.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            what we build
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Everything B2B needs,{" "}
            <span className="text-[var(--sw-blue)]">on one Magento store</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            For manufacturers, wholesalers, and distributors. We use the native
            Adobe Commerce B2B tools where they fit and build the rest, so the
            store works the way your buyers and your sales team already do.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caps.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <h3 className="font-head text-[var(--sw-black)] text-[19px] md:text-[22px] leading-[1.2]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
