"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary, btnSecondary } from "./Hero";
import { assetUrl } from "@/lib/assets";
import { COMPARE, INSTALL_WITH_ARI_URL, PACKAGES, PACKAGES_URL } from "./packageData";

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
          <h3 className="text-white text-[20px] lg:text-[19px] xl:text-[21px] lg:whitespace-nowrap">{p.name}</h3>
          <div className="mt-6 min-h-[84px]">
            <span
              className="font-[family-name:var(--font-golos)] font-bold text-[40px] leading-none tracking-[-0.03em]"
              style={{ color: p.price === "Free" ? "#fff" : "var(--sw-mint)" }}
            >
              {p.price}
            </span>
            {p.then && <div className="mt-2 text-white/55 text-[14px] leading-[1.45]">{p.then}</div>}
          </div>
          <div className="mt-4 flex-1 grid content-start gap-4">
            <div>
              <div className="label-code text-white/45">Who implements</div>
              <div className="mt-1.5 text-white text-[15px] font-medium">{p.who}</div>
            </div>
            <div>
              <div className="label-code text-white/45">What&apos;s included</div>
              <p className="mt-1.5 text-white/70 text-[15px] leading-[1.6]">{p.included}</p>
            </div>
          </div>
          {p.ariLink && (
            <a
              href={INSTALL_WITH_ARI_URL}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 self-start text-[14px] font-semibold text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)] font-[family-name:var(--font-golos)]"
            >
              Or let Ari install it <span aria-hidden>→</span>
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

const ICON: Record<string, React.ReactNode> = {
  "self-managed": <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />,
  "with-ari": (
    <>
      <path d="M4 6l6 6-6 6" />
      <path d="M13 18h7" stroke="var(--sw-mint)" />
    </>
  ),
  review: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  implementation: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

/** Main page: the four ways to adopt Expedio, no prices; prices live on /packages. Mirrors withari.ai/expedio. */
export function Packages() {
  return (
    <section id="packages" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Reveal className="max-w-[46rem] mx-auto text-center">
          <h2 className={H2}>Free for the Magento community</h2>
          <p className="mt-6 text-white/75 text-[17px] md:text-[19px] leading-[1.6]">
            The Expedio core is open source. Take it and run it on your own store, or choose how much help you want around
            it, up to a full implementation with the performance result written into your contract.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PACKAGES.map((p) => (
            <div
              key={p.id}
              className="border p-7"
              style={
                p.id === "with-ari"
                  ? { borderColor: "rgba(110,247,110,.45)", background: "linear-gradient(180deg, rgba(110,247,110,.10), rgba(110,247,110,.02))" }
                  : { borderColor: "rgba(255,255,255,.12)", background: "rgba(255,255,255,.03)" }
              }
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {ICON[p.id]}
              </svg>
              <h3 className="mt-8 text-white text-[20px] lg:text-[19px] xl:text-[21px] lg:whitespace-nowrap">{p.name}</h3>
              <p className="mt-3 text-white/65 text-[15px] leading-[1.6]">{p.short}</p>
              {p.ariLink && (
                <a
                  href={INSTALL_WITH_ARI_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)] font-[family-name:var(--font-golos)]"
                >
                  Can be installed with Ari <span aria-hidden>→</span>
                </a>
              )}
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-12 text-center">
          <a href={PACKAGES_URL} className={btnPrimary}>
            See packages and pricing <span aria-hidden>→</span>
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
                        style={{ color: c === "Not included" ? "rgba(255,255,255,.3)" : c === "Your team" ? "rgba(255,255,255,.65)" : "var(--sw-mint)" }}
                      >
                        {c === "Included" ? (
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-label="Included">
                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                          </svg>
                        ) : c === "Not included" ? (
                          <span aria-label="Not included" className="inline-block w-3 h-px bg-current align-middle" />
                        ) : (
                          c
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
