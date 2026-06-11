import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { assetUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "eCommerce accelerators for vertical commerce | scandiweb",
  description:
    "Pre-built vertical stores for school photography, school uniform, DIY and building materials, trading cards. Your new store live in 8 to 14 weeks, 80% built before kickoff.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/accelerator",
  },
  openGraph: {
    title: "eCommerce accelerators for vertical commerce | scandiweb",
    description:
      "Pre-built vertical stores. Live in 8 to 14 weeks. School photography, school uniform, DIY and building materials, trading cards.",
    url: "https://scandiweb.com/solutions/accelerator",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce accelerators for vertical commerce | scandiweb",
    description:
      "Pre-built vertical stores. Your new store live in 8 to 14 weeks.",
  },
};

const INK = "#10132c";
const MINT = "#6ef76e";
const BEIGE = "var(--sw-beige)";
const BLUE = "var(--sw-blue)";

type Accelerator = {
  slug: string;
  vertical: string;
  forWhom: string;
  weeks: string;
  capabilities: string[];
  accent: string;
};

const ACCELERATORS: Accelerator[] = [
  {
    slug: "school-photography",
    vertical: "School photography commerce",
    forWhom:
      "Photographers shooting hundreds of schools each season, selling packages back to parents.",
    weeks: "8 to 12 weeks",
    accent: "var(--sw-mint)",
    capabilities: [
      "Subject-based ordering and album logic",
      "Class and school code workflows",
      "Bulk pre-order and parent reorder",
      "Studio + retail dual checkout",
    ],
  },
  {
    slug: "school-uniform",
    vertical: "School uniform commerce",
    forWhom:
      "Uniform retailers serving named schools with strict approved-product lists and term peaks.",
    weeks: "8 to 12 weeks",
    accent: "var(--sw-light-grey)",
    capabilities: [
      "School-by-school approved catalogs",
      "Sibling and tax-exempt accounts",
      "Term-time stock and pickup logic",
      "Bulk school account ordering",
    ],
  },
  {
    slug: "diy-building-materials",
    vertical: "DIY and building materials commerce",
    forWhom:
      "Multi-warehouse DIY and trade retail with peak seasons, supplier-fed catalogs, and dual buyer types.",
    weeks: "12 to 14 weeks",
    accent: "var(--sw-orange)",
    capabilities: [
      "Multi-warehouse stock and reservations",
      "Trade-and-DIY account split",
      "Supplier-fed catalog ingestion",
      "Peak-resilient infrastructure",
    ],
  },
  {
    slug: "trading-cards",
    vertical: "Trading cards commerce",
    forWhom:
      "Card resellers running set-based catalogs, condition grading, and rapid release drops.",
    weeks: "8 to 12 weeks",
    accent: "var(--sw-red)",
    capabilities: [
      "Set, rarity, and grade catalogs",
      "Condition-aware product data",
      "Pre-order and release-drop flows",
      "Single-copy stock control",
    ],
  },
];

export default function AcceleratorHubPage() {
  return (
    <main className="font-body" style={{ background: INK, color: "#ffffff" }}>
      {/* ----------------- Hero ----------------- */}
      {/* min-h-screen (100vh) is the fallback; dvh tracks mobile browser chrome.
          `isolate` creates a stacking context so the -z layers paint above
          <main>'s opaque background instead of behind it. */}
      <section
        className="relative isolate overflow-hidden min-h-screen flex items-center"
        style={{ minHeight: "100dvh" }}
      >
        {/* Background photo – light blur, scaled so blur edges stay off-canvas */}
        <div
          className="absolute inset-0 -z-20 bg-center bg-cover"
          style={{
            backgroundImage: `url(${assetUrl("/accelerator/hero-bg.jpg")})`,
            filter: "blur(3px)",
            transform: "scale(1.04)",
          }}
        />
        {/* Navy wash – stronger behind the text column, lighter on the right */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,13,36,0.86) 0%, rgba(13,16,40,0.66) 45%, rgba(10,13,36,0.42) 100%)," +
              "linear-gradient(180deg, rgba(10,13,36,0.30) 0%, rgba(10,13,36,0.10) 50%, rgba(10,13,36,0.55) 100%)",
          }}
        />

        <div className="wrap w-full pt-24 md:pt-28 pb-14 md:pb-16">
          <div className="font-head text-[12px] md:text-[13px] tracking-[0.18em] uppercase font-medium text-white/70 mb-6">
            eCommerce accelerators
          </div>
          <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[16ch] font-medium">
            Your new store,{" "}
            <span style={{ color: MINT }}>live in 12 weeks</span>
          </h1>
          <p className="mt-7 md:mt-9 text-white/85 text-[18px] md:text-[21px] leading-relaxed max-w-[58ch]">
            Most of an online store is not unique to your business. Your
            whole industry shares the same catalog logic, account structures,
            and seasonal peaks. We build that core once per industry and
            harden it in production, so your store starts at 80% done instead
            of a blank page.
          </p>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 md:gap-5">
            <a
              href="#accelerators"
              className="font-head inline-flex items-center gap-3 px-7 py-4 rounded-[2px] font-medium transition-all group"
              style={{
                background: MINT,
                color: INK,
                fontSize: "15.5px",
              }}
            >
              See the accelerators
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#cta"
              className="font-head inline-flex items-center gap-2 px-5 py-3.5 rounded-[2px] text-white font-medium hover:opacity-80 transition-opacity"
              style={{
                fontSize: "15.5px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(10,13,36,0.35)",
              }}
            >
              Talk to us about your vertical
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 md:mt-14 text-white/55 text-[13.5px] md:text-[14px] tracking-wide">
            Fixed scope · Fixed price · Full code ownership
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#accelerators"
          aria-label="Scroll down to the accelerators"
          className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/55 hover:text-white transition-colors"
        >
          <span className="text-[10px] tracking-[0.22em] uppercase">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      {/* ----------------- Accelerator cards ----------------- */}
      <section
        id="accelerators"
        className="relative"
        style={{ background: INK }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div
                className="font-head text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
                style={{ color: MINT }}
              >
                Available accelerators
              </div>
              <h2 className="font-head text-white text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] font-medium max-w-[18ch]">
                Pick your vertical
              </h2>
              <p className="mt-5 text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[52ch]">
                {ACCELERATORS.length} accelerators in production, each grown
                out of stores we already ship for that industry. Every one is
                a working store, ready to carry your catalog, accounts, and
                integrations.
              </p>
            </div>
            <a
              href="#cta"
              className="text-white/80 hover:text-white text-[14px] inline-flex items-center gap-2 transition-colors"
            >
              Don&rsquo;t see yours? Talk to us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {ACCELERATORS.map((a) => (
              <Link
                key={a.slug}
                href={`/accelerator/${a.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-[4px] p-6 md:p-7 transition-all hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.03) 100%), rgba(16,19,44,0.55)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Accent bar – each vertical gets its own color */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: a.accent, opacity: 0.85 }}
                />
                {/* Accent glow on hover */}
                <div
                  aria-hidden="true"
                  className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ background: a.accent, filter: "blur(110px)" }}
                />

                <div className="relative flex items-center justify-between gap-4 mb-4">
                  <span
                    className="font-head text-[11px] tracking-[0.14em] uppercase font-semibold"
                    style={{ color: a.accent }}
                  >
                    {a.weeks}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="font-head relative text-white text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.005em] font-medium mb-3">
                  {a.vertical}
                </h3>

                <p className="relative text-white/65 text-[14px] md:text-[14.5px] leading-relaxed mb-5">
                  {a.forWhom}
                </p>

                <ul className="relative space-y-2.5 mb-6">
                  {a.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-2.5 text-white/80 text-[13.5px] md:text-[14px]"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rotate-45 inline-block flex-shrink-0 mt-[6px]"
                        style={{ background: a.accent }}
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="font-head relative mt-auto inline-flex items-center gap-2 text-white text-[14px] font-medium pt-4"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    width: "100%",
                  }}
                >
                  See accelerator
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- What an accelerator is (light) ----------------- */}
      <section
        id="what-it-is"
        className="relative"
        style={{ background: BEIGE, color: "var(--sw-black)" }}
      >
        <div className="wrap py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <div
                className="font-head text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
                style={{ color: BLUE }}
              >
                What an accelerator is
              </div>
              <h2 className="text-[var(--sw-black)] text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.015em] font-medium max-w-[18ch]">
                A backbone that already knows your vertical
              </h2>
              <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[17px] leading-relaxed max-w-[44ch]">
                Roughly 80% of a vertical store is identical for every merchant
                in that industry. The accelerator is that 80%, built once and
                hardened in production. Your project pays for the 20% that is
                actually yours.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  k: "Pre-built in the core",
                  items: [
                    "Industry data model: school codes, approved catalogs, set and grade data, trade accounts",
                    "Vertical checkout flows: parent reorder, bulk account ordering, release drops, dual retail",
                    "Integration adapters for ERP, PIM, payments, tax, and shipping",
                    "Multi-warehouse, multi-account, peak-resilient infrastructure",
                  ],
                },
                {
                  k: "Built for you on top",
                  items: [
                    "Your brand and design system, applied to the storefront",
                    "Your one-off workflows and business rules",
                    "Your data, migrated and validated",
                    "Full code ownership after handover. No license fee, no lock-in",
                  ],
                },
              ].map((col) => (
                <div key={col.k}>
                  <div
                    className="font-head text-[var(--sw-black)] font-medium text-[18px] md:text-[20px] mb-4"
                    style={{ letterSpacing: "-0.005em" }}
                  >
                    {col.k}
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-baseline gap-3 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="w-1.5 h-1.5 rotate-45 inline-block flex-shrink-0 mt-[7px]"
                          style={{ background: BLUE, opacity: 0.6 }}
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- How we ship ----------------- */}
      <section id="how-we-ship" className="relative" style={{ background: INK }}>
        <div className="wrap py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-12 md:mb-16">
            <div>
              <div
                className="font-head text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
                style={{ color: MINT }}
              >
                How we ship
              </div>
              <h2 className="text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.015em] font-medium max-w-[18ch]">
                Three phases. Eight to fourteen weeks.
              </h2>
            </div>
            <p className="text-white/75 text-[17px] md:text-[19px] leading-relaxed self-end max-w-[58ch]">
              A custom build spends its first two quarters writing code the
              accelerator already has. We start from a working store, so the
              weeks go into your integrations, your data, and your workflows.
              Every phase ends with something you can hold us to.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-6 md:gap-7">
            {[
              {
                step: "1",
                k: "Discovery",
                weeks: "Weeks 1-2",
                v: "Audit your data, integrations, and team. Map the accelerator against your operational gaps.",
                ends: "Ends with: fixed scope, fixed price, and the success metric we will be measured on.",
              },
              {
                step: "2",
                k: "Build",
                weeks: "Weeks 3-10",
                v: "Stand up the accelerator core. Wire in your ERP, PIM, payments, and tax. Migrate the data that has to move. Brand and design layer on top.",
                ends: "Ends with: a staging store you click through every week, not a slide deck.",
              },
              {
                step: "3",
                k: "Launch + handover",
                weeks: "Weeks 10-14",
                v: "Load test, security audit, content freeze, and go-live. Your team trains on the live system and owns the codebase.",
                ends: "Ends with: your team running the store. We stay on call for the first 90 days.",
              },
            ].map((p) => (
              <li
                key={p.step}
                className="rounded-[4px] p-6 md:p-7"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.03) 100%), rgba(16,19,44,0.55)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex items-baseline justify-between mb-5">
                  <span
                    className="font-medium tabular-nums"
                    style={{
                      color: MINT,
                      fontSize: "13px",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {p.step}
                  </span>
                  <span
                    className="text-white/55"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.weeks}
                  </span>
                </div>
                <h3
                  className="text-white font-medium mb-3"
                  style={{
                    fontSize: "22px",
                    letterSpacing: "-0.005em",
                    lineHeight: 1.15,
                  }}
                >
                  {p.k}
                </h3>
                <p
                  className="text-white/70"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.55,
                  }}
                >
                  {p.v}
                </p>
                <p
                  className="mt-4 pt-4 text-white/85"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.5,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span style={{ color: MINT }}>{p.ends.split(":")[0]}:</span>
                  {p.ends.split(":").slice(1).join(":")}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------- Proof strip (light) ----------------- */}
      <section
        id="proof"
        className="relative"
        style={{ background: BEIGE, color: "var(--sw-black)" }}
      >
        <div className="wrap py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {[
              {
                v: "Weeks 1-2",
                l: "you get a fixed price and a success metric in writing",
              },
              {
                v: "Every Friday",
                l: "a staging store you click through, not a slide deck",
              },
              {
                v: "Week 12",
                l: "your store is live and your team owns the code",
              },
              {
                v: "Day 90",
                l: "we are still on call after launch, included",
              },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="font-head text-[var(--sw-black)] font-medium tabular-nums"
                  style={{
                    fontSize: "clamp(24px, 2.4vw, 34px)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.v}
                </div>
                <div
                  className="text-[var(--sw-black)]/65 mt-3 max-w-[26ch]"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Closing CTA ----------------- */}
      <section id="cta" className="relative overflow-hidden" style={{ background: INK }}>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 600px at 80% 20%, #2a3380 0%, transparent 55%)," +
              "radial-gradient(700px 500px at 12% 90%, rgba(110,247,110,0.07) 0%, transparent 50%)",
          }}
        />
        <div className="wrap py-24 md:py-32">
          <div className="max-w-[820px]">
            <div
              className="font-head text-[12px] tracking-[0.18em] uppercase font-medium mb-6"
              style={{ color: MINT }}
            >
              New vertical
            </div>
            <h2 className="font-head text-white text-[40px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.015em] font-medium max-w-[22ch]">
              Don&rsquo;t see your vertical? Let&rsquo;s build the next one
            </h2>
            <p className="mt-7 text-white/75 text-[17px] md:text-[19px] leading-relaxed max-w-[58ch]">
              If you sell in a category where the same workflows repeat
              across most merchants, it probably belongs in the accelerator
              family. We will audit your stack, scope a new accelerator, and
              tell you honestly whether your vertical is ready.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="https://scandiweb.com/contact"
                className="font-head inline-flex items-center gap-3 px-7 py-4 rounded-[2px] font-medium transition-all group"
                style={{
                  background: MINT,
                  color: INK,
                  fontSize: "15.5px",
                }}
              >
                Book a discovery call
                <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <span className="text-white/55 text-[13px] tracking-wide max-w-[36ch]">
                30 minutes with the team that builds these. Written summary
                inside 24 hours.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
