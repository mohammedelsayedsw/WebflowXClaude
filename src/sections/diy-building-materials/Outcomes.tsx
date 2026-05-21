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
          External WMS as truth. <span className="text-[var(--sw-mint)]">Magento as view</span>
        </>
      ),
      lede:
        "At Murergrej, Magento became view-only on stock. The WMS (YouWe) is the source of truth. Reservations and allocations live in the WMS; the storefront shows origin per request, fjernlager flag, and reservation status. At Byggmax, 160+ stores plus the Skånska Big Water dropship feed run as dual-source inventory with a persistent store-selector.",
      results: [
        "Magento inventory_reservation table truncated; PlaceReservationsForSalesEventInterface overridden – Murergrej runs YouWe as source of truth",
        "Origin tags on every PDP – customers see which warehouse or store ships their order",
        "Fjernlager (remote warehouse) flag on PDP – the pattern that dropped Murergrej refund-queue overnight",
        "Store-selector state persists across sessions – Byggmax fixed the cache regression that was breaking it",
        "Dual-source inventory pattern – primary stock plus supplier-direct dropship in the same cart",
        "250 stock updates per hour per location operational ceiling – Byggmax-verified at peak",
      ],
      diagram: (
        <SpecPanel
          title="Inventory architecture"
          subtitle="WMS-AS-TRUTH"
          rows={[
            ["Pattern", "External WMS owns reservations · Magento is view-only"],
            ["Murergrej", "YouWe WMS · 5,000 customer accounts · 2,000 orders/month"],
            ["Byggmax", "160+ stores · Skånska Big Water dropship · store-selector"],
            ["PDP signal", "Origin tag · fjernlager flag · stock per location"],
            ["Sync rate", "250 updates/hr/location ceiling (Byggmax peak)"],
            ["Result", "Murergrej 99.2% Q4 uptime · first season post-cutover"],
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
          VAT toggle on the same PDP. <span className="text-[var(--sw-blue)]">Two worlds, one catalog</span>
        </>
      ),
      lede:
        "Murergrej shipped session-based VAT toggle (ex/incl) on Hyvä, pallet-count math live on PDP, tier pricing with rule stacking, and B2B invoice email through Swiipe checkout. Built once for 200+ trade accounts. Took 18 months zero-to-live – the honest number for a real B2B portal.",
      results: [
        "Session-based VAT toggle (ex/incl) on Hyvä – first-visit modal forces B2B vs retail choice unless arriving from Google",
        "Pallet-count math live on PDP – Math.ceil(weight / pallet_capacity), savings displayed inline as the customer adds units",
        "Tier pricing with promo-rule stacking – pallet rule plus per-unit promo (the request Byggmax had open for 2 years before we shipped it)",
        "B2B invoice email via Swiipe checkout middleware – approved B2B accounts get invoice option at checkout",
        "Quote-to-order workflow with status tracking – contractor configures, admin approves, ERP picks up",
        "200+ live B2B accounts at Murergrej alongside 5,000+ B2C accounts in the same storefront",
      ],
      diagram: (
        <SpecPanel
          title="B2B + B2C model"
          subtitle="MURERGREJ-PROVEN"
          rows={[
            ["VAT toggle", "Session-based ex/incl on Hyvä · first-visit modal"],
            ["Pricing", "Customer · account · volume · pallet-stack rules"],
            ["Pallet math", "Live PDP calc · savings shown inline"],
            ["B2B payment", "Swiipe invoice middleware at checkout"],
            ["Live scale", "200+ trade accounts · 5,000+ B2C accounts"],
            ["Honest timing", "Murergrej B2B portal · 18 months zero-to-live"],
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
          800 flat families → 2000+ in a <span className="text-[var(--sw-mint)]">4-level tree with custom inheritance</span>
        </>
      ),
      lede:
        "Ermitazas restructured 800 flat product families into 2000+ across a 4-level hierarchy with dynamic attribute inheritance – via a custom PHP save handler because standard Akeneo could not do it. A 288-hour epic. Plus Devoro integration with exception workspace for supplier-feed exceptions. The pattern travels to any DIY retailer with hundreds of suppliers.",
      results: [
        "Akeneo PIM (ReadyPIM build) with custom 4-level family hierarchy and dynamic attribute inheritance (ERMI-3 · 288-hour epic)",
        "2000-SKU bulk filter rebuilt as POST backend – patched Akeneo HTTP 414 ceiling (ERMI-34)",
        "Bulk attribute copy with selective inclusion – modal pulls source SKU, displays per-attribute checkboxes",
        "Completeness scoring with operator filtering and family-grouped dashboard – publishing gated by threshold",
        "Devoro supplier-feed integration with vendor mapping and validation workspace – rejected rows never silently dropped",
        "Pattern proven at Ermitazas (Akeneo) and Byggmax (Poppy supplier feeds) – PIM-first or supplier-feed-first depending on starting point",
      ],
      diagram: (
        <SpecPanel
          title="Catalog pipeline"
          subtitle="PIM-FIRST OR FEED-FIRST"
          rows={[
            ["Ermitazas", "Akeneo · 2000-family · 4-level inheritance"],
            ["Byggmax", "Poppy · supplier-feed pipeline · 55k+ SKU"],
            ["Custom build", "PHP save handler for dynamic inheritance (ERMI-3)"],
            ["Exceptions", "Workspace for rejected rows · merchandiser review"],
            ["Bulk ops", "2000-SKU bulk filter via POST (ERMI-34)"],
            ["Anchor", "Ermitazas · 4 years · supplier-driven growth"],
          ]}
        />
      ),
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "4",
      kicker: "Search and personalisation",
      title: (
        <>
          Search that matches DIY intent. <span className="text-[var(--sw-blue)]">+15% AOV from personalisation</span>
        </>
      ),
      lede:
        "Byggmax runs Loop54 semantic search plus Dynamic Yield personalisation across 55k+ SKUs and 4 Magento stores. Dotdigital and Dynamic Yield combined drive a published +15% AOV. Image-based color swatches v2 on PLP. Wiksbo 3D closet configurator shipped as a Dynamaker iframe. The search engine of your choice – the patterns travel.",
      results: [
        "Loop54 semantic search at Byggmax – DIY synonym dictionaries trained on Swedish (timmer, spik) plus Norwegian, Danish, Finnish",
        "Dynamic Yield personalisation across PDP, category, and cart – trade vs DIY segments – +15% AOV (published case study)",
        "PLP hybrid – instant skeleton plus async price load – cuts perceived load time on large category pages",
        "Image-based color swatches v2 – real product images per variant on PLP and PDP, with grayed-out unavailable combos",
        "Wiksbo 3D closet configurator – Dynamaker engine iframe, JSON-serialized shareable presets across 23-28 SKU range",
        "Hero CTA color A/B test delivered +15% revenue at Byggmax – proof that small storefront changes compound at DIY scale",
      ],
      diagram: (
        <SpecPanel
          title="Search and personalisation"
          subtitle="BYGGMAX-PROVEN"
          rows={[
            ["Search", "Loop54 semantic · DIY synonyms · multi-language"],
            ["Personalisation", "Dynamic Yield · trade vs DIY · +15% AOV"],
            ["PLP performance", "Hybrid skeleton-then-price · 99 PageSpeed"],
            ["Swatches", "Image-based v2 · per-variant · grayed unavailable"],
            ["3D configurator", "Wiksbo · Dynamaker iframe · shareable presets"],
            ["A/B testing", "+15% revenue from hero CTA color · published"],
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
          Migrate from page-builder limbo to <span className="text-[var(--sw-mint)]">headless CMS</span>
        </>
      ),
      lede:
        "Byggmax migrated from Magento page builder to Amplience headless CMS – 17 page templates mapped, JSON schema management, multi-region variants for Sweden, Norway, Denmark, Finland. Plus an AI content-type prototype shipped April 2026 as a co-innovation track. Available to clients ready to invest in content velocity.",
      results: [
        "Amplience headless CMS migration at Byggmax – 17 page templates mapped from Magento page builder",
        "Reusable content blocks – campaign banners, category overlays, comparison tables, calculator widgets",
        "Multi-region content variants – one model, four Nordic localisations (SE, NO, DK, FI)",
        "AI content-type prototype (April 2026) – co-proposed with Byggmax content lead, cuts new content type time from weeks to days",
        "Preview environment mirrors production – sign off before publish, not after",
        "GDPR-compliant tracking – Cookiebot, GTM, GA4 wired across all stores",
      ],
      diagram: (
        <SpecPanel
          title="Content stack"
          subtitle="BYGGMAX-PROVEN"
          rows={[
            ["CMS", "Amplience headless · 17 templates mapped"],
            ["Multi-region", "SE · NO · DK · FI · one model, localised"],
            ["AI prototype", "Co-innovation track · April 2026 · early access"],
            ["GDPR", "Cookiebot · GTM · GA4 across all stores"],
            ["Workflow", "Preview environment mirrors production"],
            ["Honest claim", "Headless migration is a rebuild, not a config"],
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
        "Magento 2.4 LTS, Hyvä frontend, Varnish + CloudFront, OpenSearch tuned for DIY catalog volumes. Byggmax shipped 99 PageSpeed on Hyvä. Murergrej held 99.2% uptime through Q4 first season after launch. Ermitazas got a pre-Black-Friday hardening package in 2025 after hitting an Elasticsearch memory ceiling that took an off-the-shelf cluster down (ERMI-104, ERMI-120).",
      results: [
        "Magento 2.4 LTS commerce – long-term support, security patched, open-source, no licensing wall",
        "Hyvä frontend at Byggmax – 99 PageSpeed score (published case study), mobile Lighthouse 90+ at peak",
        "Murergrej 99.2% Q4 uptime first season after launch – on Magento 2.4.6 + Hyvä + OpenSearch",
        "Ermitazas Elasticsearch cluster redesigned after memory ceiling outage (ERMI-104) – tuned for 700k SKU, 2000-family hierarchy",
        "Pre-peak hardening package shipped at Ermitazas before Black Friday 2025 – security, performance, QA bundle",
        "Pre-peak load testing scripted against the real catalog – not generic JMeter benchmarks",
      ],
      diagram: (
        <SpecPanel
          title="Resilience stack"
          subtitle="3-CLIENT TESTED"
          rows={[
            ["Platform", "Magento 2.4 LTS · Hyvä frontend"],
            ["Byggmax peak", "99 PageSpeed · mobile Lighthouse 90+"],
            ["Murergrej peak", "99.2% uptime · first Q4 post-cutover"],
            ["Ermitazas peak", "Elasticsearch cluster redesign (ERMI-104)"],
            ["Pre-peak package", "Security · performance · QA bundle"],
            ["Load testing", "Scripted against real catalog · pre-peak"],
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
