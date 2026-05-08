"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { Check } from "lucide-react";

const packages = [
  {
    name: "MCP Launchpad",
    price: "€9,900",
    pricePrefix: "",
    timeline: "10–15 business days",
    who:
      "Working proof of concept. Internal demo. Founder-led brand or team that wants to see real value fast.",
    features: [
      "1 core use case",
      "2–3 MCP tools",
      "1 platform integration",
      "Read-only workflow",
      "Basic auth or no-auth",
      "Developer Mode tested",
      "10 golden prompts",
      "Launch recommendation doc",
    ],
    cta: "Start with Launchpad",
    featured: false,
  },
  {
    name: "ChatGPT App Pilot",
    price: "€29,900",
    pricePrefix: "",
    timeline: "4–6 weeks",
    who:
      "Real customer-facing app. Funded brand, Shopify Plus, Adobe Commerce, or B2B commerce team ready to launch.",
    features: [
      "Strategy workshop + user journey",
      "4–6 MCP tools",
      "Main + secondary integration",
      "OAuth account linking",
      "1 ChatGPT widget",
      "Tool safety + confirmation flows",
      "Production hosting + observability",
      "OpenAI submission asset prep",
      "1 review cycle support",
    ],
    upgradeNote:
      "€5,000 credit toward Suite if you upgrade within 90 days.",
    cta: "Build my Pilot",
    featured: true,
  },
  {
    name: "Commerce AI App Suite",
    price: "€74,900",
    pricePrefix: "from ",
    timeline: "8–12 weeks",
    who:
      "Enterprise commerce AI channel. Multi-store, marketplace, B2B distributor, or complex ERP/PIM/CRM/OMS stack.",
    features: [
      "Full app strategy + architecture",
      "8–15 MCP tools",
      "Multi-system integration",
      "Role-based OAuth permissions",
      "2–4 ChatGPT widgets",
      "Agent orchestration + approval flows",
      "Audit logs + advanced observability",
      "Submission prep + 2 review cycles",
      "30-day post-launch sprint",
    ],
    cta: "Plan my Suite",
    featured: false,
  },
];

const compareRows: Array<[string, string, string, string]> = [
  ["Price", "€9,900", "€29,900", "from €74,900"],
  ["Best for", "Proof of concept", "Real launch", "Enterprise channel"],
  ["Use cases", "1", "1–2", "3–6"],
  ["MCP tools", "2–3", "4–6", "8–15"],
  ["Platform integrations", "1", "Main + secondary", "Multi-system"],
  ["OAuth login", "Basic / not included", "Standard", "Role-based"],
  ["ChatGPT widgets", "—", "1", "2–4"],
  ["Tool safety", "Basic", "Standard", "Advanced"],
  ["Production hosting", "Basic", "Included", "Included"],
  ["Observability", "Basic logs", "Standard", "Advanced"],
  ["OpenAI submission prep", "Checklist", "Included", "Included"],
  ["Review feedback support", "—", "1 cycle", "Up to 2 cycles"],
  ["Post-launch improvement", "—", "Optional", "30 days included"],
  ["Timeline", "10–15 days", "4–6 weeks", "8–12 weeks"],
];

export function Packages() {
  return (
    <section id="packages" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[68ch] mb-14 md:mb-16">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-blue)] mb-5">
              Packages
            </p>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Three productized{" "}
              <span className="text-[var(--sw-blue)]">paths</span>{" "}
              to a live ChatGPT App.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-[var(--sw-black)]/70 max-w-[60ch] leading-relaxed">
              Pick the path that matches your goal. Upgrade when ready – Pilot buyers get a €5,000 credit toward Suite within the first 90 days.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mb-16">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.07}>
              <div
                className={
                  pkg.featured
                    ? "relative rounded-[4px] bg-white border-2 border-[var(--sw-blue)] p-7 md:p-8 h-full flex flex-col shadow-[0_8px_32px_rgba(36,64,255,0.12)]"
                    : "relative rounded-[4px] bg-white border border-[var(--sw-black)]/10 p-7 md:p-8 h-full flex flex-col"
                }
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-[2px] bg-[var(--sw-blue)] px-3.5 py-1.5">
                    <span className="font-head font-semibold text-[10px] text-white tracking-[0.12em] uppercase">
                      Most popular
                    </span>
                  </div>
                )}
                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[24px] leading-[1.2] font-bold mb-2">
                  {pkg.name}
                </h3>
                <div className="font-head text-[var(--sw-black)] text-[36px] md:text-[40px] font-bold leading-none mb-2 tracking-[-0.01em]">
                  {pkg.pricePrefix && (
                    <span className="text-[14px] text-[var(--sw-black)]/55 font-medium">
                      {pkg.pricePrefix}
                    </span>
                  )}
                  {pkg.price}
                </div>
                <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[var(--sw-black)]/55 mb-5">
                  {pkg.timeline}
                </p>
                <p className="text-[13px] text-[var(--sw-black)]/65 mb-6 leading-relaxed min-h-[64px]">
                  {pkg.who}
                </p>

                <ul className="space-y-2 mb-6 text-[14px] text-[var(--sw-black)]/85 leading-snug">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2 py-1.5 border-b border-[var(--sw-black)]/8">
                      <Check className="h-4 w-4 text-[var(--sw-blue)] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {pkg.upgradeNote && (
                  <div className="rounded-[2px] bg-[var(--sw-mint)]/15 px-3.5 py-2.5 mb-5 text-[12px] text-[var(--sw-black)]/80 leading-snug">
                    <span className="font-semibold text-[var(--sw-black)]">€5,000 credit</span>{" "}
                    toward Suite if you upgrade within 90 days.
                  </div>
                )}

                <a
                  href="#cta"
                  className={
                    pkg.featured
                      ? "mt-auto inline-flex items-center justify-center gap-2 rounded-[2px] bg-[var(--sw-blue)] text-white px-6 py-3 font-head font-semibold text-[14px] hover:bg-[var(--sw-blue)]/90 transition"
                      : "mt-auto inline-flex items-center justify-center gap-2 rounded-[2px] border border-[var(--sw-black)] text-[var(--sw-black)] px-6 py-3 font-head font-semibold text-[14px] hover:bg-[var(--sw-black)] hover:text-white transition"
                  }
                >
                  {pkg.cta} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="overflow-x-auto rounded-[4px] border border-[var(--sw-black)]/10 bg-white">
            <table className="w-full text-[13px] md:text-[14px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left bg-[var(--sw-black)] text-white font-head font-semibold px-5 py-4">
                    Feature
                  </th>
                  <th className="text-left bg-[var(--sw-black)] text-white font-head font-semibold px-5 py-4">
                    Launchpad
                  </th>
                  <th className="text-left bg-[var(--sw-blue)] text-white font-head font-semibold px-5 py-4">
                    App Pilot
                  </th>
                  <th className="text-left bg-[var(--sw-black)] text-white font-head font-semibold px-5 py-4">
                    App Suite
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([k, a, b, c]) => (
                  <tr key={k} className="bg-white border-t border-[var(--sw-black)]/8">
                    <td className="px-5 py-3 font-head font-semibold text-[var(--sw-black)]">{k}</td>
                    <td className="px-5 py-3 text-[var(--sw-black)]/75">{a}</td>
                    <td className="px-5 py-3 text-[var(--sw-black)]/85">{b}</td>
                    <td className="px-5 py-3 text-[var(--sw-black)]/75">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-[4px] bg-[var(--sw-black)]/[0.04] p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[22px] font-bold leading-tight mb-2">
                Optional monthly support
              </h3>
              <p className="text-[14px] text-[var(--sw-black)]/65 leading-relaxed max-w-[68ch]">
                Monitoring · app fixes · new tools · prompt testing · metadata improvements · conversion reporting · platform-update support · new workflow roadmap. Available on all packages after launch.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[var(--sw-black)]/55 mb-1">
                From
              </p>
              <div className="font-head text-[var(--sw-black)] text-[28px] md:text-[32px] font-bold leading-none">
                €4,900<span className="text-[14px] text-[var(--sw-black)]/55 font-medium">/month</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
