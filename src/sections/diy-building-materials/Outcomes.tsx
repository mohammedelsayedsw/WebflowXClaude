"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";

type OutcomeBlock = {
  n: string;
  kicker: string;
  title: React.ReactNode;
  lede: string;
  results: string[];
  diagram: React.ReactNode;
  theme: "dark" | "beige";
  reverse?: boolean;
  diagramDark?: boolean;
};


function SpecPanel({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle?: string;
  rows: [string, string][];
}) {
  return (
    <div
      className="relative rounded-[4px] p-6 md:p-8 text-white overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
        border: "1px solid rgba(230,231,239,0.08)",
      }}
    >
      <span
        className="absolute top-0 left-0 h-[3px] w-20"
        style={{ background: "var(--sw-mint)" }}
      />
      <div className="flex items-baseline justify-between mb-7 gap-4 flex-wrap">
        <h4 className="font-head text-white text-[18px] md:text-[20px] leading-tight">
          {title}
        </h4>
        {subtitle && (
          <span className="label-code text-[var(--sw-mint)]/80 tracking-[0.18em]">
            {subtitle}
          </span>
        )}
      </div>
      <dl className="space-y-0">
        {rows.map(([k, v], i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, x: 6 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] gap-4 py-3 border-b border-white/10 last:border-b-0"
          >
            <dt className="label-code text-white/55">{k}</dt>
            <dd className="text-[13px] md:text-[14px] text-white/90 leading-snug">
              {v}
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}


function OutcomeBlockRow({ n, kicker, title, lede, results, diagram, theme, reverse, diagramDark }: OutcomeBlock) {
  const dark = theme === "dark";
  const diagramOnDark = diagramDark ?? dark;
  const textColor = dark ? "text-white" : "text-[var(--sw-black)]";
  const mutedColor = dark ? "text-white/75" : "text-[var(--sw-black)]/70";
  const bulletColor = dark ? "text-white/85" : "text-[var(--sw-black)]/80";
  const labelColor = dark ? "text-white/55" : "text-[var(--sw-black)]/55";
  const bg = dark ? "bg-[var(--sw-black)]" : "bg-lp-bright";
  const accentColor = dark ? "var(--sw-mint)" : "var(--sw-blue)";

  let diagramWrapClass = "";
  let diagramWrapStyle: React.CSSProperties | undefined;
  if (diagramOnDark && !dark) {
    diagramWrapClass = "rounded-[4px] p-6 md:p-8 text-white";
    diagramWrapStyle = {
      background:
        "linear-gradient(180deg, rgba(16,19,44,1) 0%, rgba(23,26,56,1) 100%)",
      border: "1px solid rgba(230,231,239,0.08)",
    };
  } else if (dark) {
    diagramWrapClass = "p-4 md:p-6 text-white";
  } else {
    diagramWrapClass = "bracket-frame p-5 md:p-7 text-[var(--sw-black)]";
  }

  return (
    <section id={`outcome-${n}`} className={`${bg} relative overflow-hidden scroll-mt-24`}>
      {!dark && <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />}

      {!dark && (
        <>
          <div
            aria-hidden
            className="absolute pointer-events-none select-none hidden md:block"
            style={{
              [reverse ? "right" : "left"]: "-3%",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-golos)",
              fontWeight: 700,
              fontSize: "clamp(260px, 32vw, 460px)",
              lineHeight: 0.85,
              color: "rgba(63, 74, 175, 0.055)",
              letterSpacing: "-0.05em",
            }}
          >
            {n}
          </div>

          <div
            aria-hidden
            className="hidden lg:flex absolute flex-col items-center gap-3 z-0"
            style={{
              [reverse ? "left" : "right"]: "24px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <span className="h-10 w-px bg-[var(--sw-black)]/20" />
            <span
              className="label-code text-[var(--sw-black)]/45"
              style={{
                writingMode: "vertical-rl",
                letterSpacing: "0.3em",
              }}
            >
              OUTCOME / {n}
            </span>
            <span className="h-10 w-px bg-[var(--sw-black)]/20" />
          </div>

          <span className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[var(--sw-black)]/20 pointer-events-none" />
        </>
      )}

      <div className="wrap relative py-24 md:py-32">
        <div className={`grid gap-12 lg:gap-16 md:grid-cols-2 items-center`}>
          <Reveal className={`min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
              <span className={`label-code ${labelColor}`}>OUTCOME · {n}</span>
              <span className={`h-px w-6 hidden sm:block ${dark ? "bg-white/15" : "bg-[var(--sw-black)]/15"}`} />
              <span className={`label-code ${labelColor} whitespace-normal sm:whitespace-nowrap`}>{kicker}</span>
            </div>
            <h3 className={`font-head ${textColor} text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mb-5 max-w-[22ch]`}>
              {title}
            </h3>
            <p className={`${mutedColor} text-[15px] md:text-[17px] leading-relaxed max-w-[46ch] mb-7`}>
              {lede}
            </p>
            <ul className="space-y-3">
              {results.map((r, i) => (
                <li key={i} className={`flex gap-3 ${bulletColor} text-[14px] md:text-[15px] leading-relaxed`}>
                  <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: accentColor }} />
                  <span className="min-w-0">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className={`min-w-0 ${reverse ? "md:order-1" : "md:order-2"}`}>
            <div className={`relative ${diagramWrapClass}`} style={diagramWrapStyle}>
              <span className="bracket-bl" />
              <span className="bracket-br" />
              {diagram}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


export function Outcomes() {
  const items: OutcomeBlock[] = [
    {
      n: "1",
      kicker: "Multi-warehouse truth",
      title: (
        <>
          Stock that <span className="text-[var(--sw-mint)]">does not lie</span>
        </>
      ),
      lede:
        "Origin-tagged inventory across central, regional, store, and in-transit positions. One reconciled truth on the PDP – not a guess. Built for Murergrej in Denmark, running through three years of peak.",
      results: [
        "Origin tags on every stock position – central DC, regional hub, store bay, in-transit",
        "Reservation locks at cart-add time, released on abandonment or after configurable TTL",
        "Real-time fjernlager (remote warehouse) flag on PDP – customers see which bay ships their order",
        "Transfer-in-progress visibility so support can promise delivery dates without guessing",
        "Audit ledger on every stock movement – reconcile against ERP nightly, alert on drift",
        "Multi-warehouse pickup option for trade accounts that want to collect across bays",
      ],
      diagram: (
        <SpecPanel
          title="Inventory layer"
          subtitle="ORIGIN-TAGGED"
          rows={[
            ["Sources", "Central DC · regional hubs · store bays · in-transit"],
            ["Sync model", "Live for central · hourly for regional · 30-min for stores"],
            ["Storefront", "One reconciled truth per PDP request · fjernlager flag"],
            ["Lock", "Cart-reserve TTL · auto-release on abandon"],
            ["Audit", "Append-only ledger · nightly ERP reconciliation"],
            ["Anchor", "Murergrej · 3.7 years · 99.2% peak uptime"],
          ]}
        />
      ),
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "2",
      kicker: "Trade and DIY in one storefront",
      title: (
        <>
          One catalog. <span className="text-[var(--sw-blue)]">Two worlds</span>
        </>
      ),
      lede:
        "A homeowner and a contractor open the same PDP and see two different prices, two different pack sizes, two different delivery options. Role-based access, tiered pricing, and bulk PO upload as first-class commerce – not bolted on.",
      results: [
        "Tiered pricing engine – customer-specific, account-specific, volume-tier, and contract pricing",
        "Role-based access on accounts – buyer, approver, finance, branch manager – each with scoped permissions",
        "Bulk PO upload via CSV or paste – matches against your SKU master, flags exceptions",
        "Credit terms integrated with the ERP – approved balance, payment-on-account, statement view",
        "Account-specific catalogs – hide consumer SKUs from trade, hide trade SKUs from consumer",
        "Multi-branch ordering – one trade account, many ship-to locations, consolidated billing",
      ],
      diagram: (
        <SpecPanel
          title="Account model"
          subtitle="B2B + B2C · ONE STACK"
          rows={[
            ["Pricing", "Customer · account · volume · contract"],
            ["Roles", "Buyer · approver · finance · branch manager"],
            ["Bulk PO", "CSV upload · paste · SKU-master match"],
            ["Credit", "ERP-integrated balance + payment-on-account"],
            ["Catalogs", "Account-specific gating · consumer vs trade"],
            ["Anchor", "Murergrej B2B2C · zero-to-live in 18 months"],
          ]}
        />
      ),
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "3",
      kicker: "Supplier-fed catalogs that stay clean",
      title: (
        <>
          Hundreds of suppliers. <span className="text-[var(--sw-mint)]">Weekly churn. Clean storefront.</span>
        </>
      ),
      lede:
        "Akeneo PIM as the master data layer. Supplier feeds run through a clean pipe – family hierarchies, attribute mapping, exception flagging. Bad CSV from one supplier does not reach the storefront. Built for Ermitazas across 4 years of supplier-feed evolution.",
      results: [
        "Akeneo PIM (ReadyPIM build) as the master data layer for every SKU attribute",
        "Family hierarchies model fitment, compatibility, and configurable product structures",
        "Devoro integration handles supplier-feed sync, attribute mapping, and image normalisation",
        "Exception workspace – rejected rows surfaced to a merchandiser, never silently dropped",
        "Bulk import for new ranges – staged into draft state, reviewed, then promoted to live",
        "Vendor SKU mapping table – the same product across three suppliers resolves to one canonical SKU",
      ],
      diagram: (
        <SpecPanel
          title="Catalog pipeline"
          subtitle="PIM-FIRST"
          rows={[
            ["Master data", "Akeneo PIM · ReadyPIM build"],
            ["Sync", "Devoro · supplier feed automation"],
            ["Structures", "Family hierarchies · configurable products"],
            ["Exceptions", "Workspace for rejected rows · merchandiser review"],
            ["Promotion", "Draft → review → live · audit log"],
            ["Anchor", "Ermitazas · 4 years · weekly supplier-feed churn"],
          ]}
        />
      ),
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "4",
      kicker: "Search that matches intent",
      title: (
        <>
          People type <span className="text-[var(--sw-blue)]">paint roller 9 inch</span>. Match it
        </>
      ),
      lede:
        "Loop54 semantic search plus Dynamic Yield personalisation. Match shopper intent across attributes, synonyms, and typos. Cross-sell the brush. Surface the consumable. Built for Byggmax over 6 years of search-and-personalisation iteration.",
      results: [
        "Loop54 semantic search – matches paint roller 9 inch even if the SKU says nine-inch roller",
        "Synonym dictionaries trained on DIY-specific vocabulary – timber vs lumber, plasterboard vs drywall",
        "Typo and partial-match tolerance for site search and category filtering",
        "Dynamic Yield personalisation – trade vs DIY segmentation feeds recommended SKUs",
        "Cross-sell logic for consumables – buy the drill, see the bits, the case, the right battery",
        "Empty-results capture – every zero-results query routed to merchandising for action",
      ],
      diagram: (
        <SpecPanel
          title="Search and personalisation"
          subtitle="SEMANTIC + PERSONALISED"
          rows={[
            ["Search", "Loop54 semantic engine + synonym dictionaries"],
            ["Personalisation", "Dynamic Yield · trade vs DIY segments"],
            ["Coverage", "Site search · category filtering · merchandising"],
            ["Cross-sell", "Consumables · accessories · battery compatibility"],
            ["Zero-results", "Auto-captured · routed to merchandising"],
            ["Anchor", "Byggmax · 6-year search and personalisation iteration"],
          ]}
        />
      ),
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "5",
      kicker: "Content velocity for seasonal campaigns",
      title: (
        <>
          Ship spring build in days, <span className="text-[var(--sw-mint)]">not weeks</span>
        </>
      ),
      lede:
        "Amplience headless CMS plus prompt-built content types. Your merchandising team ships landing pages, campaign blocks, and category overlays without a dev cycle. Built for Byggmax – evolved into AI-assisted content authoring in 2026.",
      results: [
        "Amplience headless CMS for content modeling, separated from the commerce backend",
        "Reusable content blocks – campaign banners, category overlays, comparison tables, calculator widgets",
        "Prompt-built new content types – merchandising team describes the block, the system scaffolds it",
        "Multi-region content variants – Sweden, Denmark, Lithuania share the model, vary the localisation",
        "Preview environment that mirrors prod – sign off before publish, not after",
        "GDPR-compliant cookie consent + analytics – Cookiebot, GTM, GA4 already wired",
      ],
      diagram: (
        <SpecPanel
          title="Content stack"
          subtitle="HEADLESS + AI-ASSISTED"
          rows={[
            ["CMS", "Amplience headless · content modeling"],
            ["Blocks", "Banners · overlays · comparisons · calculators"],
            ["Authoring", "Prompt-built content types · AI co-innovation"],
            ["Multi-region", "SE · DK · LT · one model, localised variants"],
            ["Workflow", "Preview environment mirrors production"],
            ["Anchor", "Byggmax · AI content prototype shipped 2026"],
          ]}
        />
      ),
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "6",
      kicker: "Peak resilience",
      title: (
        <>
          Spring and Black Friday – <span className="text-[var(--sw-blue)]">no patching with people</span>
        </>
      ),
      lede:
        "Magento 2.4 LTS, Hyvä frontend, horizontal scaling, Elasticsearch tuned, ERP queue with retry logic. Survive when traffic doubles in a weekend. Murergrej held 99.2% uptime through their first Q4 peak post-cutover.",
      results: [
        "Magento 2.4 LTS commerce – long-term support, security patched, open-source, no licensing wall",
        "Hyvä frontend – mobile Lighthouse 90+ at peak, not on a blank dev environment",
        "Horizontal scaling for application servers, separate fleets for cart, catalog, and admin",
        "Elasticsearch tuned for DIY catalog volumes – Murergrej hit a memory ceiling, we redesigned the cluster",
        "ERP queue with retry logic, dead-letter capture, and alerting before the queue saturates",
        "Pre-peak load testing scripted against the real catalog – not generic JMeter benchmarks",
      ],
      diagram: (
        <SpecPanel
          title="Resilience stack"
          subtitle="PEAK-TESTED"
          rows={[
            ["Platform", "Magento 2.4 LTS · Hyvä frontend"],
            ["Scaling", "Horizontal app · split fleets · cache layers"],
            ["Search infra", "Elasticsearch · DIY-volume tuning"],
            ["ERP queue", "Retry + DLQ + saturation alerting"],
            ["Load testing", "Scripted against real catalog · pre-peak"],
            ["Anchor", "Murergrej · 99.2% uptime · first Q4 post-cutover"],
          ]}
        />
      ),
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
  ];

  return (
    <>
      <section id="outcomes" className="bg-[var(--sw-black)] pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1000px 600px at 85% 30%, rgba(63,74,175,0.20) 0%, transparent 60%), radial-gradient(800px 500px at 10% 100%, rgba(110,247,110,0.06) 0%, transparent 55%)",
          }}
        />
        <div className="wrap relative">
          <div className="grid gap-10 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] items-end">
            <Reveal>
              <h2 className="font-head text-white text-[40px] md:text-[68px] lg:text-[88px] leading-[0.98] tracking-[-0.015em] max-w-[14ch]">
                Six modules.{" "}
                <span className="text-[var(--sw-mint)]">All in production.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
                Every module is live today on three Northern European DIY retailers. Not concepts. Not roadmap. Configure them against your warehouses, your supplier feeds, and your back office – that is the project.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-5 max-w-[420px]">
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">6</div>
                  <div className="label-code text-white/50 mt-2">Modules</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">14</div>
                  <div className="label-code text-white/50 mt-2">Weeks to live</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">3</div>
                  <div className="label-code text-white/50 mt-2">Reference retailers</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {items.map((it, i) => (
              <Reveal key={it.n} delay={i * 0.05}>
                <a
                  href={`#outcome-${it.n}`}
                  className="group flex flex-col gap-2 p-4 md:p-5 rounded-[3px] border border-white/10 hover:border-white/25 hover:bg-white/[0.03] transition-colors h-full"
                >
                  <span className="label-code text-white/45 group-hover:text-[var(--sw-mint)] transition-colors">
                    {it.n}
                  </span>
                  <span className="font-head text-white text-[14px] md:text-[15px] leading-[1.25]">
                    {it.kicker}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {items.map((it) => (
        <OutcomeBlockRow key={it.n} {...it} />
      ))}

      <section className="relative bg-lp-bright overflow-hidden">
        <div className="wrap py-16 md:py-20 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[44ch]">
            Cut a year off your roadmap. Start with the workflow costing you the most.
          </p>
          <a href="#cta" className={btnLight}>
            Start the accelerator
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
