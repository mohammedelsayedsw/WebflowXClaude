import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  assetPrefix: "/app",
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
