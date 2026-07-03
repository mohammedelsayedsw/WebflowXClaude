"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const base = "/magento/security-audit/team";

type Quote = {
  quote: string;
  name: string;
  title: string;
  photo?: string;
};

const lead: Quote = {
  quote:
    "Partnering with scandiweb's team allowed us to bring a site to market that has 3 to 4 times better performance than any other site.",
  name: "Jason Barney",
  title: "eCommerce Technology Consultant, PUMA",
  photo: `${base}/jason-barney.png`,
};

const quotes: Quote[] = [
  {
    quote:
      "scandiweb makes sure our site is secure and performing optimally at all times. Over almost ten years they have always provided their best and brightest talent to reach our strategic goals and drive revenue.",
    name: "Jonathan Chan",
    title: "Head of Global IT, Lafayette 148 NY",
    photo: `${base}/jonathan-chan.png`,
  },
  {
    quote:
      "scandiweb helped us understand and implement our eCommerce platform on Magento. They repeatedly went above and beyond on design and process decisions, and I would not hesitate to recommend them to any organization that wants an eCommerce solution done quickly and correctly.",
    name: "Erik Klepper",
    title: "Head of News Agency Applications, Thomson Reuters",
    photo: `${base}/erik-klepper.jpg`,
  },
];

function Avatar({ photo, name }: { photo?: string; name: string }) {
  if (!photo) {
    return (
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--sw-blue)]/10 font-head text-[15px] text-[var(--sw-blue)]">
        {name
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}
      </div>
    );
  }
  return (
    <img
      src={assetUrl(photo)}
      alt={name}
      className="h-11 w-11 rounded-full object-cover shrink-0"
      style={{ border: "1px solid rgba(11,12,26,0.12)" }}
    />
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            testimonials
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[24ch]">
            Trusted with the stores that{" "}
            <span className="text-[var(--sw-blue)]">cannot go down</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-12 md:mt-16 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-8 md:p-12">
            <span
              aria-hidden
              className="font-head text-[56px] leading-none text-[var(--sw-blue)]"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 max-w-[60ch] font-head text-[var(--sw-black)] text-[22px] md:text-[34px] leading-[1.18]">
              {lead.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Avatar photo={lead.photo} name={lead.name} />
              <div>
                <div className="font-head text-[var(--sw-black)] text-[16px]">
                  {lead.name}
                </div>
                <div className="label-code text-[var(--sw-black)]/55 mt-0.5">
                  {lead.title}
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-8 flex flex-col">
                <blockquote className="font-head text-[var(--sw-black)] text-[19px] md:text-[22px] leading-snug flex-1">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-[var(--sw-black)]/10 flex items-center gap-4">
                  <Avatar photo={q.photo} name={q.name} />
                  <div>
                    <div className="font-head text-[var(--sw-black)] text-[15px]">
                      {q.name}
                    </div>
                    <div className="label-code text-[var(--sw-black)]/55 mt-0.5">
                      {q.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
