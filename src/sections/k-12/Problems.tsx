"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { SectionIcon } from "./motifs";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "The catalog eats your week",
      body:
        "Thousands of products from dozens of suppliers. New price lists arrive as Excel files and someone retypes them. Stock runs out at the supplier and your store keeps selling. And your product pages show the same manufacturer description as every other shop selling the identical kit — so search engines have no reason to rank yours.",
      solved: "Solved by Module 1 · Catalog & supplier feed engine",
      href: "#outcome-1",
    },
    {
      n: "2",
      title: "You sell on one channel. Your buyers are on many",
      body:
        "Many parents start their search on Amazon or Google Shopping, not on your site. Retailers who list there often manage it by hand — separate listings, stock counted twice, overselling at Christmas. Retailers who don’t list there simply never meet those buyers.",
      solved: "Solved by Module 2 · Marketplaces & shopping feeds",
      href: "#outcome-2",
    },
    {
      n: "3",
      title: "Every sale is the last sale",
      body:
        "A family buys once and disappears. Only 1 of the 14 stores we checked sells any kind of subscription — in the industry where KiwiCo proved kids’ boxes work at massive scale, building over $1B of lifetime revenue. The whole year’s revenue depends on Q4, and there is no machinery that brings the same family back in February.",
      solved: "Solved by Module 3 · Subscription boxes & gift subscriptions",
      href: "#outcome-3",
    },
    {
      n: "4",
      title: "Surprises: at the courier desk and under the tree",
      body:
        "STEM products are physically difficult: lithium batteries banned on many shipping routes, chemicals with postal limits, strong magnets with their own rules. And they’re difficult on arrival too — the robot needs batteries that aren’t in the box, the chemistry set needs goggles nobody mentioned. Both stories end the same way: a cancelled order, a ruined gift morning, a one-star review in January.",
      solved: "Solved by Module 4 · Shipping rules + Module 5 · Batteries & extras reminder",
      href: "#outcome-4",
    },
  ];

  return (
    <section id="problems" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <svg
        className="absolute top-0 inset-x-0 h-px opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
      </svg>

      <div className="wrap relative">
        <div className="max-w-[66ch] mb-14 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <SectionIcon name="head-gear" tone="dark" />
              <span className="label-code text-white/60">64 COMPANIES · 14 STORES CHECKED</span>
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Four problems every{" "}
              <span className="text-[var(--sw-mint)]">STEM toy retailer</span> recognises
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[60ch] leading-relaxed">
              We researched 64 STEM product companies across the US, UK, and
              Europe, and live-checked 14 consumer stores feature by feature.
              The same problems came up again and again.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mb-16 md:mb-24">
          {problems.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-8 h-full flex flex-col">
                <div className="label-code text-white/55 mb-5">Problem · {f.n}</div>
                <h3 className="font-head text-white text-[22px] md:text-[26px] leading-[1.15] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[15px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
                <a
                  href={f.href}
                  className="mt-6 inline-flex items-center gap-2 label-code text-[var(--sw-mint)] hover:opacity-80 transition"
                >
                  <span className="h-px w-6 bg-[var(--sw-mint)]/70" />
                  {f.solved}
                </a>
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="max-w-[72ch] mx-auto text-center">
            <svg aria-hidden className="mx-auto mb-6 h-8 opacity-60" viewBox="0 0 48 32" fill="none">
              <path
                d="M4 24 Q 4 4, 20 4 L 20 12 Q 14 12, 12 20 L 20 20 L 20 30 L 4 30 Z M28 24 Q 28 4, 44 4 L 44 12 Q 38 12, 36 20 L 44 20 L 44 30 L 28 30 Z"
                fill="var(--sw-mint)"
              />
            </svg>
            <blockquote className="font-head text-white text-[24px] md:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.01em]">
              We checked 14 STEM toy stores feature by feature. Supplier feeds
              retyped by hand, marketplaces managed manually or missing, and{" "}
              <span className="text-[var(--sw-mint)]">
                exactly one store selling a subscription
              </span>
              . The repeat-revenue model this industry itself proved is sitting
              unused.
            </blockquote>
            <figcaption className="mt-7 label-code text-white/60">
              scandiweb STEM commerce store check · June 2026
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
