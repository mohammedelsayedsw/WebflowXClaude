import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** DevLink output — do not lint (generated; edits should not be required for CI). */
const eslintConfig = [
  {
    ignores: ["src/webflow/**", "src/webflow.d.ts", ".next/**", ".open-next/**", ".wrangler/**", "out/**", "build/**", "next-env.d.ts", "cloudflare-env.d.ts"],
  },
  ...nextVitals,
  ...nextTs,
  {
    /* New React Compiler advisories in eslint-plugin-react-hooks v7 (came with Next 16). Existing
       pages trip them without being broken, so they warn instead of failing CI. */
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/static-components": "warn",
    },
  },
];

export default eslintConfig;
