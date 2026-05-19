"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { assetUrl } from "@/lib/assets";

export function MeetMichael() {
  return (
    <section
      id="meet-michael"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)] scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]/55">
            <span>3</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>scandiweb in Paris</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mb-14 md:mb-20">
            Meet{" "}
            <span className="text-[var(--sw-blue)]">Michael</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
          {/* Left column: photo + name */}
          <Reveal delay={0.1}>
            <div>
              <div className="aspect-[2/3] w-full max-w-[280px] rounded-[4px] overflow-hidden border border-[var(--sw-black)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/events/meet-magento-france/assets/michael-bliah.jpg")}
                  alt="Michael Bliah, VP of North America &amp; B2B at scandiweb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px]">
                  Michael Bliah
                </div>
                <div className="text-[var(--sw-black)]/65 text-[14px] mt-1 leading-snug">
                  VP of North America &amp; B2B at scandiweb
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[var(--sw-blue)] text-[13px] leading-snug">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  Attending Meet Magento France · 25 June, Paris
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right column: bio + CTA + email */}
          <Reveal delay={0.15}>
            <div>
              <p className="text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">
                Michael leads scandiweb&apos;s North America and B2B practice.
                He&apos;s spent 25+ years in digital and eCommerce &ndash; VP
                of eCommerce &amp; CRM at Groupe Dynamite, senior roles at
                ALDO and Mackage, and co-founder of Catalevo &ndash; so
                he&apos;s worked both sides of the table: the merchant making
                the call, and the agency delivering on it.
              </p>
              <p className="mt-5 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">
                He&apos;ll be at the event all day. Bring him the kind of
                problem you&apos;d usually hire a senior consultant to solve
                &ndash; things like:
              </p>

              <ul className="mt-6 space-y-3 max-w-[62ch]">
                {[
                  {
                    topic: "Replatforming and Magento migrations",
                    body: "off Magento 1, SAP Commerce, Salesforce Commerce Cloud, Shopify Plus, custom stacks",
                  },
                  {
                    topic: "B2B commerce on Magento",
                    body: "complex pricing, customer-specific catalogs, account hierarchies, quoting, portals",
                  },
                  {
                    topic: "PIM, product data and inventory at scale",
                    body: "clean catalogs, multi-warehouse stock, syndication across channels",
                  },
                  {
                    topic: "Omnichannel and order management",
                    body: "store, warehouse, POS and online tied into one journey",
                  },
                  {
                    topic: "AI in commerce that actually ships",
                    body: "merchandising, search, content ops, internal tooling – beyond the demoware",
                  },
                ].map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] md:text-[17px] leading-relaxed"
                  >
                    <span className="mt-[10px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--sw-mint)] shrink-0" />
                    <span>
                      <span className="font-medium text-[var(--sw-black)]">
                        {t.topic}
                      </span>
                      <span className="text-[var(--sw-black)]/70">
                        {" "}
                        &ndash; {t.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">
                Find him at the event and talk it through.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/michaelbliah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnLight}
                >
                  Connect with Michael on LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-[var(--sw-black)]/60 text-[14px]">
                Prefer email?{" "}
                <a
                  href="mailto:michael.bliah@scandiweb.com"
                  className="text-[var(--sw-blue)] hover:text-[var(--sw-black)] underline underline-offset-4"
                >
                  michael.bliah@scandiweb.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
