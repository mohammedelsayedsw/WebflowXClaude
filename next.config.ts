import type { NextConfig } from "next";
import { APP_BASE_PATH } from "./src/lib/appBasePath";

const nextConfig: NextConfig = {
  basePath: APP_BASE_PATH,
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
