import type { Metadata } from "next";
import { SchoolPhotographyBody } from "./_body";

const TITLE = "School Photography Commerce";
const DESCRIPTION =
  "A pre-built operations stack for school photography operators. Student data model, self-service school portal, batch exports, ID card workflow, dual SSO, legacy integrations. Proven live on Australia's national operator.";
const URL = "https://scandiweb.com/app/pages/test-1";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | scandiweb`,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | scandiweb`,
    description: DESCRIPTION,
  },
};

export default function Test1Page() {
  return <SchoolPhotographyBody />;
}
