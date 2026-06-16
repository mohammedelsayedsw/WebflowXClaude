import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { AcceleratorCards } from "@/sections/accelerator-hub/AcceleratorCards";

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
  label?: string;
};

const ACCELERATORS: Accelerator[] = [
  {
    slug: "school-photography",
    vertical: "School photography commerce",
    forWhom:
      "Photographers shooting hundreds of schools each season, selling packages back to parents.",
    weeks: "8 to 12 weeks",
    accent: "var(--sw-mint)",
    label: "Why it wins",
    capabilities: [
      "Take on more schools without more staff",
      "Picture Day season runs itself",
      "Schools fix their own data and pull their own photos",
      "Right photo, right student, siblings together",
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
      "Win and launch new schools faster",
      "Your busiest weeks run themselves",
      "Parents self-serve fittings, orders, and returns",
      "Right uniform, right school, every time",
    ],
  },
  {
    slug: "diy-building-materials",
    vertical: "DIY and building materials commerce",
    forWhom:
      "Multi-warehouse DIY and trade retail with peak seasons, supplier-fed catalogs, and dual buyer types.",
    weeks: "12 to 14 weeks",
    accent: "var(--sw-orange)",
    label: "Why it wins",
    capabilities: [
      "Sell to trade and DIY from one store",
      "Accurate stock across every warehouse and store",
      "Bad supplier data never reaches your store",
      "Holds up through every big sale",
    ],
  },
  {
    slug: "trading-cards",
    vertical: "Trading cards commerce",
    forWhom:
      "Card resellers running set-based catalogs, condition grading, and rapid release drops.",
    weeks: "8 to 12 weeks",
    accent: "var(--sw-red)",
    label: "Why it wins",
    capabilities: [
      "Your website sells packs, not just the live show",
      "Packs restock themselves at the right value",
      "90% buyback keeps customers in your store",
      "One customer across Whatnot, eBay, and your site",
    ],
  },
  {
    slug: "k-12",
    vertical: "K-12 STEM toys & kits commerce",
    forWhom:
      "Retailers selling STEM toys, science kits, and robotics to families and gift-givers.",
    weeks: "12 weeks",
    accent: "var(--sw-blue)",
    capabilities: [
      "Sell on Amazon and Google from one catalog",
      "Prices and stock stay current on their own",
      "Turn one-time buyers into monthly subscribers",
      "Bigger orders, fewer post-holiday returns",
    ],
  },
];

export default function AcceleratorHubPage() {
  const trustLogos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg", alt: "PUMA", h: 30 },
    { src: "/shared/logos/clients/olympus.png", alt: "OM Digital Solutions / Olympus", h: 24 },
    { src: "/shared/logos/clients/boyscouts.png", alt: "Boy Scouts of America", h: 28 },
    { src: "/shared/logos/clients/nytimes.svg", alt: "The New York Times", h: 22 },
    { src: "/shared/logos/clients/samsung.svg", alt: "Samsung", h: 22 },
    { src: "/shared/logos/clients/acer.png", alt: "Acer", h: 22 },
    { src: "/shared/logos/clients/adobe.svg", alt: "Adobe", h: 22 },
  ];
  const trustLoop = [...trustLogos, ...trustLogos];
  return (
    <main className="font-body" style={{ background: INK, color: "#ffffff" }}>
      {/* ----------------- Hero ----------------- */}
      {/* min-h-screen (100vh) is the fallback; dvh tracks mobile browser chrome.
          `isolate` creates a stacking context so the -z layers paint above
          <main>'s opaque background instead of behind it. */}
      <section
        className="relative isolate overflow-hidden min-h-screen flex flex-col"
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

        <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="wrap w-full pt-24 md:pt-28 pb-14 md:pb-16">
          <div className="font-head text-[12px] md:text-[13px] tracking-[0.18em] uppercase font-medium text-white/70 mb-6">
            eCommerce accelerators
          </div>
          <h1 className="font-head text-white text-[34px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.04] tracking-[-0.015em] max-w-[26ch] font-medium">
            Built for your industry,{" "}
            <br className="hidden sm:block" />
            <span style={{ color: MINT }}>live on your store in weeks</span>
          </h1>
          <p className="mt-7 md:mt-9 text-white/85 text-[16px] md:text-[18px] leading-relaxed max-w-[112ch]">
            In over 20 years building commerce for retailers across many industries, we learned what{" "}
            <br className="hidden md:block" />
            each one actually needs. We turned our best work into industry-specific accelerators: ready-made modules,{" "}
            <br className="hidden md:block" />
            proven in real stores, that you add to your own.
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
              Talk to us about your industry
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 md:mt-14 text-white/55 text-[13.5px] md:text-[14px] tracking-wide">
            Fixed scope · Fixed price · Full code ownership
          </div>
        </div>
        </div>

        {/* Trust logos */}
        <div
          className="relative z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div className="wrap py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <div className="font-head font-bold text-white text-[14px] md:text-[18px] leading-[1.35] shrink-0">
              Trusted by 700+ leading brands worldwide
            </div>
            <div className="relative flex-1 overflow-hidden" aria-label="Client logos">
              <div className="sw-marquee-track flex items-center gap-x-12 md:gap-x-16">
                {trustLoop.map((l, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={assetUrl(l.src)}
                    alt={i < trustLogos.length ? l.alt : ""}
                    aria-hidden={i >= trustLogos.length}
                    className="w-auto opacity-80 shrink-0"
                    style={{
                      maxHeight: `${l.h}px`,
                      height: "auto",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                ))}
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)",
                }}
              />
            </div>
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
          <div className="mb-10 md:mb-14">
            <div
              className="font-head text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
              style={{ color: MINT }}
            >
              Accelerators by industry
            </div>
            <h2 className="font-head text-white text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] font-medium max-w-[18ch]">
              Pick your industry
            </h2>
            <p className="mt-5 text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[100ch]">
              Each accelerator is built from the best of what we have
              delivered for clients in that industry.{" "}
              <br className="hidden lg:block" />
              We fit it to your store, your catalog, accounts, and integrations.
            </p>
          </div>

          <AcceleratorCards accelerators={ACCELERATORS} />

          <div className="mt-10 md:mt-12">
            <a
              href="#cta"
              className="text-white/80 hover:text-white text-[14px] inline-flex items-center gap-2 transition-colors"
            >
              Don&rsquo;t see yours? Talk to us
              <ArrowRight className="h-4 w-4" />
            </a>
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
                The growth parts most stores go without
              </h2>
              <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[17px] leading-relaxed max-w-[44ch]">
                These modules are the hard parts, the ones most stores in your industry never build because they take too long. Yet they are exactly what brings in more revenue and room to grow. We already built them, proved them in real stores, and made them ready to add to yours.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  k: "Pre-built in the core",
                  items: [
                    "The buyer accounts and pricing your industry needs",
                    "The selling and ordering flows your industry runs on",
                    "Catalog and stock built for your scale and peak season",
                    "Connections to the systems you already use",
                  ],
                },
                {
                  k: "Built for you on top",
                  items: [
                    "Your brand and design, applied to the store",
                    "Your own workflows and business rules",
                    "Your data, moved over and checked",
                    "You own all the code after handover. No license fee, no lock-in",
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

      {/* ----------------- How we work ----------------- */}
      <section id="how-we-ship" className="relative" style={{ background: INK }}>
        <div className="wrap py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.4fr_2fr] gap-12 lg:gap-20 mb-12 md:mb-16">
            <div>
              <div
                className="font-head text-[12px] tracking-[0.18em] uppercase font-medium mb-5"
                style={{ color: MINT }}
              >
                How we work
              </div>
              <h2 className="text-white text-[32px] md:text-[40px] lg:text-[40px] leading-[1.05] tracking-[-0.015em] font-medium max-w-[30ch]">
                Three phases.{" "}
                <br className="hidden sm:block" />
                Eight to fourteen weeks.
              </h2>
            </div>
            <p className="text-white/75 text-[17px] md:text-[19px] leading-relaxed self-end max-w-[58ch]">
              A custom build spends its first six months writing code the
              accelerator already has. We start from modules that already work, so the
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
                v: "We review your data, systems, and team, and find the gaps in how you work today.",
                ends: "Ends with: fixed scope, fixed price, and the goal we will be measured on.",
              },
              {
                step: "2",
                k: "Build",
                weeks: "Weeks 3-10",
                v: "We set up the accelerator and connect it to your systems for stock, payments, and tax. We move the data that has to move, then apply your brand and design.",
                ends: "Ends with: a working test store you click through every week, not a slide deck.",
              },
              {
                step: "3",
                k: "Launch + handover",
                weeks: "Weeks 11-14",
                v: "We test it under load, run a security check, and go live. Your team trains on the live store and takes over the code.",
                ends: "Ends with: your team running the store, with us on call for the first 90 days.",
              },
            ].map((p) => (
              <li
                key={p.step}
                className="rounded-[4px] p-6 md:p-7 flex flex-col h-full"
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
                  className="text-white/70 grow"
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
        {/* soft accent glow in the corner (same blur treatment as the accelerator pages) */}
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full -z-10 pointer-events-none"
          style={{ background: MINT, opacity: 0.1, filter: "blur(160px)" }}
        />
        <div className="wrap py-24 md:py-32">
          <div className="max-w-[820px]">
            <div
              className="font-head text-[12px] tracking-[0.18em] uppercase font-medium mb-6"
              style={{ color: MINT }}
            >
              New industry
            </div>
            <h2 className="font-head text-white text-[40px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.015em] font-medium max-w-[22ch]">
              Don&rsquo;t see your industry? Let&rsquo;s build the next one
            </h2>
            <p className="mt-7 text-white/75 text-[17px] md:text-[19px] leading-relaxed max-w-[58ch]">
              If you sell in a category where most stores run the same way, we
              can probably build an accelerator for it. We will look at how your
              store works today, plan what a new accelerator would cover, and
              tell you honestly whether your industry is ready.
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
