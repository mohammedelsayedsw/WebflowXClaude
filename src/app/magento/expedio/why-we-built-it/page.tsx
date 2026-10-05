import type { Metadata } from "next";
import { EXPEDIO_SHARE_IMAGE } from "@/sections/magento-expedio/share";
import { btnPrimary, btnSecondary } from "@/sections/magento-expedio/Hero";
import { Reveal } from "@/components/primitives/Reveal";
import { SiteHeader } from "@/sections/magento-expedio/SiteHeader";

const WHY_DESCRIPTION =
  "A page reaches a shopper in two halves. Modern themes fixed the second half. Expedio fixes the first.";
const WHY_URL = "https://scandiweb.com/solutions/magento/expedio/why-we-built-it";

export const metadata: Metadata = {
  title: "Why we built Expedio",
  description: WHY_DESCRIPTION,
  alternates: { canonical: WHY_URL },
  openGraph: {
    title: "Why we built Expedio | scandiweb",
    description: WHY_DESCRIPTION,
    url: WHY_URL,
    siteName: "scandiweb",
    type: "article",
    images: [EXPEDIO_SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why we built Expedio | scandiweb",
    description: WHY_DESCRIPTION,
    images: [EXPEDIO_SHARE_IMAGE.url],
  },
};

/*
 * Copy from page 2 of Benchmarks-and-technology-behind-Expedio.pdf (final).
 * Built from the main page's own parts: the same section grid, heading
 * scale, bar style, and only mint against white and grey.
 */
const H2 = "text-[40px] md:text-[56px] lg:text-[64px]";
const BODY = "text-white/70 text-[17px] md:text-[18px] leading-[1.65]";
const NUM = "font-[family-name:var(--font-golos)] font-bold leading-none tracking-[-0.04em] tabular-nums";

function Bar({ label, value, from, to, mint }: { label: string; value: string; from: number; to?: number; mint?: boolean }) {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-3 items-center py-6">
      <div className="col-span-12 md:col-span-3 text-white text-[17px] font-semibold">{label}</div>
      <div className="col-span-8 md:col-span-7 relative h-3.5 bg-white/[0.06]">
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: `${from}%`, background: mint ? "var(--sw-mint)" : "var(--magento)" }}
        />
        {to && <div className="absolute inset-y-0" style={{ left: `${from}%`, width: `${to - from}%`, background: "rgba(255,255,255,.35)" }} />}
      </div>
      <div className={`col-span-4 md:col-span-2 text-right whitespace-nowrap text-[20px] sm:text-[28px] md:text-[34px] ${NUM}`} style={{ color: mint ? "var(--sw-mint)" : "#fff" }}>
        {value}
      </div>
    </div>
  );
}

export default function WhyPage() {
  return (
    <main className="expedio relative isolate min-h-screen flex flex-col bg-[var(--sw-ink)] font-[family-name:var(--font-inter)]">
      <SiteHeader />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[90vh]"
        style={{ background: "radial-gradient(120% 90% at 50% -10%, #0d2a3a 0%, #081025 45%, rgba(5,7,15,0) 82%)" }}
      />

      {/* opening */}
      <section className="relative z-10 pt-44 md:pt-56 pb-20 md:pb-28">
        <div className="wrap">
          <Reveal className="max-w-[52rem]">
            <div className="label-code text-white/70">Expedio</div>
            <h1 className="mt-5 text-[56px] sm:text-[80px] md:text-[104px] leading-[0.92] tracking-[-0.05em]">Why we built it</h1>
            <p className="mt-8 text-white/80 text-[20px] md:text-[24px] leading-[1.45] font-[family-name:var(--font-golos)] font-medium max-w-[40rem]">
              A page reaches a shopper in two halves. Modern themes fixed the second half. Expedio fixes the first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* the two halves, drawn as one load */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="wrap">
          <Reveal>
            <h2 className={H2}>Two halves of every page</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <div className="flex h-4">
              <div className="w-1/2" style={{ background: "var(--sw-mint)", boxShadow: "0 0 24px rgba(110,247,110,.45)" }} />
              <div className="w-1/2 bg-white/25" />
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-10 md:gap-0">
              <div className="md:pr-10">
                <div className="label-code" style={{ color: "var(--sw-mint)" }}>1 · Time to first byte</div>
                <h3 className="mt-3 text-white text-[24px] md:text-[28px]">The server produces the HTML</h3>
                <p className={`mt-3 ${BODY}`}>Where Magento is still slow, and the half Expedio takes on.</p>
              </div>
              <div className="md:pl-10 md:border-l md:border-white/10">
                <div className="label-code text-white/55">2 · First byte to largest paint</div>
                <h3 className="mt-3 text-white text-[24px] md:text-[28px]">The browser draws the page</h3>
                <p className={`mt-3 ${BODY}`}>Largely solved by modern Magento themes such as Hyvä.</p>
              </div>
            </div>
          </Reveal>
          <Reveal className={`mt-14 max-w-[46rem] ${BODY}`}>
            <p>
              Hyvä shortened the time between the first byte and the largest paint, and on stores running it we see good
              largest-paint times once the HTML arrives. The time to the first byte is where Magento is still slow, and
              that is the half Expedio takes on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* the measurable reputation */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="wrap">
          <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <h2 className={`lg:col-span-7 ${H2}`}>Magento&apos;s slowness is measurable</h2>
            <p className="lg:col-span-5 text-white/60 text-[15px] leading-[1.6]">
              Share of sites that meet Google&apos;s &ldquo;good&rdquo; time to first byte of 800 ms. Chrome real-user data,
              HTTP Archive, August 2026.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Bar label="Magento" value="22%" from={22} />
            <Bar label="Shopify" value="82 to 92%" from={82} to={92} />
          </Reveal>
          <Reveal className={`mt-10 max-w-[46rem] ${BODY}`}>
            <p>
              It matches what we see across the Magento stores we run: a typical page takes around a second before the
              browser receives anything.
            </p>
          </Reveal>
        </div>
      </section>

      {/* why the baseline is already fast */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-6">
            <h2 className={H2}>Stock Magento is already fast here</h2>
            <p className={`mt-6 ${BODY}`}>
              Much of Magento&apos;s slowness is hosting: CPU speed, storage, and how its services are configured. The
              benchmark ran on ReadyMage, scandiweb&apos;s Magento hosting, with high-frequency CPUs, low-latency storage,
              and the database, search, and cache on the same machine. That is the baseline Expedio is measured against.
            </p>
            <a
              href="https://readymage.com"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)] font-[family-name:var(--font-golos)]"
            >
              Visit ReadyMage <span aria-hidden>↗</span>
            </a>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-white/10">
            <div className={`text-[64px] md:text-[88px] ${NUM}`} style={{ color: "var(--sw-mint)" }}>
              70 to 472<span className="text-[0.4em] ml-2">ms</span>
            </div>
            <div className="mt-5 text-white text-[18px] font-semibold">Unmodified Magento on ReadyMage, no page cache</div>
            <div className="mt-2 text-white/50 text-[15px]">Already better than most Magento stores</div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 py-24 md:py-36">
        <div className="wrap text-center">
          <h2 className={H2}>See the difference</h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/solutions/magento/expedio#contact" className={btnPrimary}>
              Get Expedio
            </a>
            <a href="/solutions/magento/expedio#benchmark" className={btnSecondary}>
              See the benchmark
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
