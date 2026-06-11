import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Magento accelerators for vertical commerce | scandiweb",
  description:
    "Productized Magento builds for specific verticals: school photography, school uniform, DIY and building materials, trading cards. Live in 8 to 14 weeks. Replace multi-quarter custom builds with a vertical-aware backbone, audited by scandiweb.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/accelerator",
  },
  openGraph: {
    title: "Magento accelerators for vertical commerce | scandiweb",
    description:
      "Productized Magento builds for specific verticals. Live in 8 to 14 weeks. School photography, school uniform, DIY and building materials, trading cards.",
    url: "https://scandiweb.com/solutions/accelerator",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magento accelerators for vertical commerce | scandiweb",
    description:
      "Productized Magento builds for specific verticals. Live in 8 to 14 weeks.",
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
    <main className="font-head" style={{ background: INK, color: "#ffffff" }}>
      {/* ----------------- Hero ----------------- */}
      {/* min-h-screen (100vh) is the fallback; dvh tracks mobile browser chrome */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{ minHeight: "100dvh" }}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 700px at 18% 20%, #2f3a91 0%, transparent 56%)," +
              "radial-gradient(700px 520px at 88% 12%, rgba(110,247,110,0.10) 0%, transparent 50%)," +
              "radial-gradient(800px 580px at 82% 85%, #070a1e 0%, transparent 52%)," +
              "radial-gradient(1400px 900px at 50% 50%, #1d2468 0%, #161c4e 35%, #10132c 70%, #0a0d24 100%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(620px 900px at 30% 60%, rgba(7, 10, 30, 0.85), transparent 60%)," +
              "radial-gradient(540px 720px at 70% 30%, rgba(63, 74, 175, 0.28), transparent 60%)",
            filter: "blur(50px)",
          }}
        />

        <div className="wrap w-full pt-24 md:pt-28 pb-14 md:pb-16">
          <div className="text-[12px] md:text-[13px] tracking-[0.18em] uppercase font-medium text-white/70 mb-6">
            Magento accelerators
          </div>
          <h1 className="text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[18ch] font-medium">
            Vertical commerce,{" "}
            <span style={{ color: MINT }}>live in weeks</span>
          </h1>
          <p className="mt-7 md:mt-9 text-white/80 text-[18px] md:text-[21px] leading-relaxed max-w-[58ch]">
            Every school photographer needs the same ordering logic. Every
            uniform retailer survives the same September. Every card shop
            fights the same drop-day traffic. We got tired of rebuilding it
            from scratch, so we built each store once, properly. Yours starts
            at 80% done.
          </p>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 md:gap-5">
            <a
              href="#accelerators"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-[2px] font-medium transition-all group"
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
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[2px] text-white font-medium hover:opacity-80 transition-opacity"
              style={{
                fontSize: "15.5px",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              Talk to us about your vertical
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 md:mt-14 text-white/55 text-[13.5px] md:text-[14px] tracking-wide">
            700+ Magento brands shipped since 2008 · 99.99% production uptime
          </div>
        </div>
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
                className="text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
                style={{ color: MINT }}
              >
                Available accelerators
              </div>
              <h2 className="text-white text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] font-medium max-w-[18ch]">
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

          <div className="grid md:grid-cols-2 gap-6 md:gap-7">
            {ACCELERATORS.map((a, i) => (
              <Link
                key={a.slug}
                href={`/accelerator/${a.slug}`}
                className="group relative block overflow-hidden rounded-[4px] p-7 md:p-9 transition-all hover:-translate-y-0.5"
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

                <div className="relative flex items-center justify-between gap-4 mb-5">
                  <span
                    className="text-[11px] tracking-[0.16em] uppercase font-semibold"
                    style={{ color: a.accent }}
                  >
                    {i + 1} · Live in {a.weeks}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="relative text-white text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.005em] font-medium mb-4 max-w-[22ch]">
                  {a.vertical}
                </h3>

                <p className="relative text-white/65 text-[15px] md:text-[16px] leading-relaxed mb-7 max-w-[44ch]">
                  {a.forWhom}
                </p>

                <ul className="relative space-y-2.5 mb-7">
                  {a.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-3 text-white/80 text-[14.5px] md:text-[15px]"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rotate-45 inline-block flex-shrink-0 mt-[7px]"
                        style={{ background: a.accent }}
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="relative inline-flex items-center gap-2 text-white text-[14px] font-medium pt-5"
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
                className="text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
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
                    className="w-2 h-2 rotate-45 mb-5"
                    style={{ background: BLUE }}
                  />
                  <div
                    className="text-[var(--sw-black)] font-medium text-[18px] md:text-[20px] mb-4"
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
                className="text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
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
                v: "Stand up the accelerator on Adobe Commerce. Wire in your ERP, PIM, payments, and tax. Migrate the data that has to move. Brand and design layer on top.",
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
              { v: "700+", l: "Magento brands shipped since 2008" },
              { v: "99.99%", l: "production uptime" },
              { v: "8-14 wks", l: "from kickoff to live" },
              { v: "90 days", l: "on call after every launch" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-[var(--sw-black)] font-medium tabular-nums"
                  style={{
                    fontSize: "clamp(34px, 3vw, 44px)",
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
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-end">
            <div>
              <div
                className="text-[12px] tracking-[0.18em] uppercase font-medium mb-6"
                style={{ color: MINT }}
              >
                New vertical
              </div>
              <h2 className="text-white text-[40px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.015em] font-medium max-w-[22ch]">
                Don&rsquo;t see your vertical? Let&rsquo;s build the next one
              </h2>
              <p className="mt-7 text-white/75 text-[17px] md:text-[19px] leading-relaxed max-w-[58ch]">
                If you sell in a category where the same workflows repeat
                across most merchants, it probably belongs in the accelerator
                family. We will audit your stack, scope a new accelerator, and
                tell you honestly whether your vertical is ready.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="/magento/voyage#start"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-[2px] font-medium transition-all group"
                style={{
                  background: MINT,
                  color: INK,
                  fontSize: "15.5px",
                }}
              >
                Book a discovery call
                <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <span className="text-white/55 text-[13px] tracking-wide">
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
