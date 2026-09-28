"use client";

import { useEffect, useState } from "react";
import { assetUrl } from "@/lib/assets";

/* Own header and footer for the retention funnel. The global scandiweb header is not
   rendered on this route, and the global footer plus the GTM chat widgets are hidden by
   the route-scoped rules in app/retention-90/layout.tsx. Nothing here links away. */

const CERT_BASE = "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/";
/* Same files the scandiweb.com footer uses (src/webflow/v7Layout/Footer.tsx). */
const CERTS: [string, string, string?][] = [
  ["69b159f45ee7b675bf186570_ISO%209001.svg", "ISO 9001"],
  ["69b159f4f74db6f5d5c588f0_ISO%2027001.svg", "ISO 27001"],
  ["69b159f4beec80dfc273e1f0_ISO%2027017.svg", "ISO 27017"],
  ["69b159f4510babc0e1b3d84a_PCI%20DSS.svg", "PCI DSS", "pci"],
];

export function R90Header({ showCta, onCta }: { showCta: boolean; onCta: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={"r90h" + (scrolled || !showCta ? " solid" : "")}>
      <div className="wrap r90h-in">
        <img className="r90h-logo" src={assetUrl("/shared/logos/scandiweb.svg")} alt="scandiweb" />
        <button className={"btn r90h-cta" + (showCta ? "" : " off")} onClick={onCta} tabIndex={showCta ? 0 : -1} aria-hidden={!showCta}>
          Fix my revenue leak <span className="arr">&rarr;</span>
        </button>
      </div>
    </header>
  );
}

export function R90Footer() {
  return (
    <footer className="r90f">
      <div className="wrap">
        <div className="r90f-top">
          <div className="r90f-brand">
            <img className="r90f-logo" src={assetUrl("/shared/logos/scandiweb.svg")} alt="scandiweb" />
            <p>scandiweb is a full-service eCommerce agency providing expert development and digital marketing solutions.</p>
          </div>
          <div className="r90f-certs" aria-label="Certifications">
            {CERTS.map(([f, alt, cls]) => <img key={f} className={cls} src={CERT_BASE + f} alt={alt} loading="lazy" />)}
          </div>
        </div>
        <div className="r90f-bot"><span>&copy; 2026 scandiweb. All Rights Reserved.</span><span>scandiweb SIA</span></div>
      </div>
    </footer>
  );
}
