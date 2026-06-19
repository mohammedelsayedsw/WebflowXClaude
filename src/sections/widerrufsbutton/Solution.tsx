"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

type Item = { title: string; body: string };

const items: Item[] = [
  {
    title: "On-page withdrawal button",
    body: "Labeled 'Vertrag widerrufen', on every page, reachable without a login.",
  },
  {
    title: "Two-step confirmation",
    body: "Order details, then a separate confirm step. No forced reason field.",
  },
  {
    title: "Instant confirmation of receipt",
    body: "Sent on a durable medium, time-stamped, the moment a withdrawal is submitted.",
  },
  {
    title: "Guest orders covered",
    body: "Logged-in and guest customers, with no new passwords for your shoppers.",
  },
  {
    title: "Full audit log",
    body: "Every withdrawal recorded, so you can show you complied if anyone asks.",
  },
  {
    title: "You keep control of refunds",
    body: "Nothing is auto-refunded. Your team approves and triages in one queue.",
  },
];

export function Solution() {
  return (
    <section
      id="how"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">the solution</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            We make your store compliant,{" "}
            <span style={{ color: "var(--sw-mint)" }}>in days</span>.
          </h2>
          <p className="mt-7 max-w-[66ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            On Shopify or Magento, we add the button, the two-step flow, the
            confirmation, and the updated Widerrufsbelehrung, then test the whole
            thing against § 356a BGB. Most stores are compliant within days.
            Headless or multi-market setups take a little longer, and we tell you
            exactly how long on the first call.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] bg-[var(--sw-mint)]/15 mb-5">
                  <Check className="h-4 w-4 text-[var(--sw-mint)]" />
                </span>
                <h3 className="font-head text-white text-[18px] md:text-[20px] leading-[1.2]">
                  {it.title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                  {it.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-[12px] md:text-[13px] text-white/45 leading-relaxed max-w-[78ch]">
            This is not legal advice. We build to the functional requirements of
            § 356a BGB. Final legal sign-off on your cancellation policy stays
            with your counsel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
