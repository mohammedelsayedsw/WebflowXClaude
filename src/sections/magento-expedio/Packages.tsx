"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary, btnSecondary } from "./Hero";
import { assetUrl } from "@/lib/assets";
import { COMPARE, INSTALL_WITH_ARI_URL, PACKAGES, PACKAGES_URL, TERMS } from "./packageData";

const H2 = "text-[40px] md:text-[56px] lg:text-[64px]";

function Cards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 pt-4">
      {PACKAGES.map((p) => (
        <div key={p.id} id={`pkg-${p.id}`} className="relative flex flex-col border border-white/12 bg-[rgba(8,11,24,0.88)] backdrop-blur-[10px] p-7 pt-9">
          {p.badge && (
            <span
              className="absolute -top-3 left-6 h-6 inline-flex items-center px-2.5 text-[12px] font-medium font-[family-name:var(--font-golos)] whitespace-nowrap"
              style={
                p.id === "implementation"
                  ? { background: "var(--sw-mint)", color: "#06210a" }
                  : { background: "#05070f", color: "var(--sw-mint)", border: "1px solid rgba(110,247,110,.55)" }
              }
            >
              {p.badge}
            </span>
          )}
          <h3 className="text-white text-[20px] md:text-[22px]">{p.name}</h3>
          <div className="mt-6 min-h-[84px]">
            <span
              className="font-[family-name:var(--font-golos)] font-bold text-[40px] leading-none tracking-[-0.03em]"
              style={{ color: p.price === "Free" ? "#fff" : "var(--sw-mint)" }}
            >
              {p.price}
            </span>
            {p.then && <div className="mt-2 text-white/55 text-[14px] leading-[1.45]">{p.then}</div>}
          </div>
          <p className="mt-4 text-white/70 text-[15px] leading-[1.6] flex-1">{p.body}</p>
          {p.howAri && (
            <a
              href={INSTALL_WITH_ARI_URL}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 self-start text-[14px] font-semibold text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)] font-[family-name:var(--font-golos)]"
            >
              How Ari installs Expedio <span aria-hidden>→</span>
            </a>
          )}
          {p.byScandiweb && (
            <div className="mt-5 flex items-center gap-2.5 text-white/50 text-[13px]">
              Delivered by
              <img src={assetUrl("/shared/logos/scandiweb.svg")} alt="scandiweb" className="h-[13px] w-auto opacity-90" />
            </div>
          )}
          <a href={p.cta.href} target="_blank" rel="noopener" className={`${p.price === "Free" ? btnSecondary : btnPrimary} mt-6 w-full !px-4`}>
            {p.cta.label} <span aria-hidden>↗</span>
          </a>
        </div>
      ))}
    </div>
  );
}

/** Packages on the main page: the four cards and a link to the full comparison. */
export function Packages() {
  return (
    <section id="packages" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Reveal className="max-w-[46rem] mx-auto text-center">
          <div className="label-code !text-[13px] !tracking-[0.24em]" style={{ color: "#fff" }}>Expedio packages</div>
          <h2 className={`mt-5 ${H2}`}>Choose your Expedio package</h2>
          <p className="mt-6 text-white/75 text-[18px] md:text-[20px] leading-[1.55]">
            Expedio is open source. Every package has the same Expedio core. Choose how much help your team needs.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Cards />
        </Reveal>
        <Reveal className="mt-10 text-center">
          <a
            href={PACKAGES_URL}
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)] font-[family-name:var(--font-golos)]"
          >
            Compare what each package includes <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** The packages subpage body: cards, full comparison, and what each level covers. */
export function PackagesDetail() {
  return (
    <>
      <section className="relative z-10 pt-40 md:pt-48 pb-16">
        <div className="wrap">
          <Reveal className="max-w-[48rem] mx-auto text-center">
            <div className="label-code !text-[13px] !tracking-[0.24em]" style={{ color: "#fff" }}>Expedio packages</div>
            <h1 className="mt-5 text-[48px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-[-0.045em]">
              Choose your Expedio package
            </h1>
            <p className="mt-6 text-white/75 text-[18px] md:text-[20px] leading-[1.55] max-w-[40rem] mx-auto">
              Expedio is open source. Every package has the same Expedio core. Choose how much help your team needs.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <Cards />
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 py-16 md:py-24">
        <div className="wrap">
          <Reveal>
            <h2 className={H2}>Compare what&apos;s included</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-4 pr-4 label-code text-white/45 font-medium w-[30%]">Feature</th>
                  {PACKAGES.map((p) => (
                    <th key={p.id} className="py-4 px-4 text-white text-[15px] font-semibold font-[family-name:var(--font-golos)]">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([f, ...cells]) => (
                  <tr key={f} className="border-b border-white/10">
                    <td className="py-4 pr-4 text-white/85 text-[15px]">{f}</td>
                    {cells.map((c, i) => (
                      <td
                        key={i}
                        className="py-4 px-4 text-[14px]"
                        style={{ color: c === "Not included" ? "rgba(255,255,255,.35)" : c === "Your team" ? "rgba(255,255,255,.65)" : "var(--sw-mint)" }}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal className="mt-14 grid md:grid-cols-3 gap-8">
            {TERMS.map(([k, v]) => (
              <div key={k}>
                <h3 className="text-white text-[18px]">{k}</h3>
                <p className="mt-3 text-white/60 text-[15px] leading-[1.6]">{v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 py-24 md:py-32">
        <div className="wrap text-center">
          <h2 className={H2}>Not sure which one fits?</h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/solutions/magento/expedio#contact" className={btnPrimary}>
              Talk to us
            </a>
            <a href="/solutions/magento/expedio" className={btnSecondary}>
              Back to Expedio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
