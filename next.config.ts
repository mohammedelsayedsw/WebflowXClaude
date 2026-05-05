import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  /**
   * DevLink output under `src/webflow/` is generated; we do not maintain its typings.
   * Next has no per-folder TS skip — this applies to the whole app (same tradeoff as many codegen setups).
   */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
