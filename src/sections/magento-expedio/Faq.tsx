import { Reveal } from "@/components/primitives/Reveal";

/*
 * Answers come from the final PDF (pages 5, 16, 17) and the client proposal
 * Theme answer per Kristaps, 2026-10-02. Hosting: available to all merchants, per Kristaps, 2026-10-05.
 */
const QA = [
  {
    q: "What is the difference between Expedio and Hyvä?",
    a: "They speed up different halves of loading a page. First, your server builds the page and starts sending it: that wait is the time to first byte, and it is what Expedio makes faster. Then the shopper's browser turns that page into something they can see and use: that is what Hyvä makes faster. Hyvä is the frontend, Expedio is the backend, and a store can run both.",
  },
  {
    q: "Does Expedio only work with Hyvä?",
    a: "No. Expedio works on Magento's backend, so it speeds up a store on any theme, including Luma and custom themes. Hyvä on the frontend with Expedio on the backend is the fastest Magento setup you can run.",
  },
  {
    q: "Which Magento versions does Expedio work with?",
    a: "Magento 2, including Magento Open Source, Adobe Commerce, and Adobe Commerce Cloud. It does not work with Magento 1.",
  },
  {
    q: "Do I need to change my hosting?",
    a: (
      <>
        No. Expedio works with any Magento hosting. The quickest way to get it is on{" "}
        <a
          href="https://readymage.com"
          target="_blank"
          rel="noopener"
          className="text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)]"
        >
          ReadyMage
        </a>
        , scandiweb&apos;s Magento hosting, where Expedio is built in and can be switched on for your store.
      </>
    ),
  },
  {
    q: "What is ReadyMage?",
    a: (
      <>
        <a
          href="https://readymage.com"
          target="_blank"
          rel="noopener"
          className="text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)]"
        >
          ReadyMage
        </a>{" "}
        is scandiweb&apos;s hosting built only for Magento. Its servers use high-frequency CPUs and low-latency storage,
        with the database, search, and cache on the same machine. Expedio makes a Magento store at least twice as fast on
        any hosting, and on ReadyMage it is faster still. ReadyMage for the server, Expedio for the backend, and Hyvä for
        the frontend is as fast as Magento gets today.
      </>
    ),
  },
  {
    q: "What changes for my team?",
    a: "Nothing they work with. The admin, catalog, prices, checkout, orders, and the storefront design stay as they are.",
  },
  {
    q: "How much faster will my store get?",
    a: "At least 2x. In the benchmark, the median page type answered 6.4x faster at peak traffic, and the homepage answered in 20 ms instead of 519 ms. The live demo shows the same store side by side.",
  },
  {
    q: "Is Expedio open source?",
    a: "Yes. The Expedio core is open source, built by scandiweb for the Magento community.",
  },
  {
    q: "What is Ari?",
    a: "Ari is the first agent for Magento, built by scandiweb. You ask for a change to your store in chat, Ari builds it on a copy of your store, and your team reviews and releases it. Expedio is available on withari.ai, Ari's website.",
  },
  {
    q: "How do I get Expedio?",
    a: (
      <>
        On{" "}
        <a href="https://www.withari.ai/expedio" className="text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)]">
          withari.ai/expedio
        </a>
        . To talk to the scandiweb team about your store, use the form below.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px]">Questions</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8 border-t border-white/10">
          {QA.map((x) => (
            <details key={x.q} className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-white text-[19px] md:text-[22px] font-semibold font-[family-name:var(--font-golos)] [&::-webkit-details-marker]:hidden">
                {x.q}
                <span aria-hidden className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-[var(--sw-mint)]" />
                  <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-[var(--sw-mint)] transition-transform group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pb-7 pr-10 text-white/70 text-[17px] leading-[1.65] max-w-[44rem]">{x.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
