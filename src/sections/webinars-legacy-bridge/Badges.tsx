"use client";

/**
 * The certifications, as the artwork rather than a sentence.
 *
 * Same four files the site footer uses, so they are the real marks and not a
 * set redrawn for this page. They sit under the hero visual and align to its
 * right edge, which keeps the left column's reading order unbroken: the eye
 * finishes on the headline and the button, and the badges are there when it
 * comes back across.
 */

const BADGES: { src: string; alt: string }[] = [
  {
    src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f45ee7b675bf186570_ISO%209001.svg",
    alt: "ISO 9001 certified",
  },
  {
    src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f4f74db6f5d5c588f0_ISO%2027001.svg",
    alt: "ISO/IEC 27001 certified",
  },
  {
    src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f4beec80dfc273e1f0_ISO%2027017.svg",
    alt: "ISO/IEC 27017 certified",
  },
  {
    src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f4510babc0e1b3d84a_PCI%20DSS.svg",
    alt: "PCI DSS compliant infrastructure",
  },
];

export function Badges({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-end gap-x-6 gap-y-4 ${className}`}
    >
      {BADGES.map((b) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={b.alt}
          src={b.src}
          alt={b.alt}
          loading="lazy"
          className="w-auto"
          style={{ height: "52px" }}
        />
      ))}
    </div>
  );
}
