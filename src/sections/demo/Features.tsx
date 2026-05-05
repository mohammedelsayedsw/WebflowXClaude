"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Features() {
  const features = [
    {
      label: "Feature · 01",
      title: "Lorem ipsum portal",
      body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      tags: ["Self-service", "Real-time", "Multi-tenant"],
    },
    {
      label: "Feature · 02",
      title: "Automated batch engine",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      tags: ["10+ formats", "Scheduled", "Zero downtime"],
    },
    {
      label: "Feature · 03",
      title: "Legacy integration layer",
      body: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. No direct database access.",
      tags: ["REST", "SOAP", "Kafka", "SFTP"],
    },
    {
      label: "Feature · 04",
      title: "Dual SSO + audit",
      body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. SAML federation. Full audit log from day one.",
      tags: ["SAML", "OIDC", "IP allowlist"],
    },
  ];

  return (
    <section id="features" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[60ch] mb-14 md:mb-20">
          <Reveal>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              What makes this{" "}
              <span className="text-[var(--sw-blue)]">different</span>
            </h2>
            <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[54ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.07}>
              <div className="relative rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-8 h-full">
                <span className="absolute top-0 left-6 h-[3px] w-10 bg-[var(--sw-blue)]" />
                <div className="label-code text-[var(--sw-blue)]/70 mb-4">{f.label}</div>
                <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.15] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[var(--sw-black)]/65 leading-relaxed mb-6">
                  {f.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="label-code text-[10px] px-2 py-1 rounded-[2px] border border-[var(--sw-black)]/15 text-[var(--sw-black)]/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
