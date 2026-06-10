import type { NextConfig } from "next";
import { APP_BASE_PATH } from "./src/lib/appBasePath";

const nextConfig: NextConfig = {
  basePath: APP_BASE_PATH,
  // Redirect old /pages/<slug> URLs to /accelerator/<slug> (renamed 2026-05-06).
  async redirects() {
    return [
      {
        source: "/accelerators",
        destination: "/accelerator",
        permanent: true,
      },
      {
        source: "/accelerators/:path*",
        destination: "/accelerator/:path*",
        permanent: true,
      },
      {
        source: "/pages/:slug",
        destination: "/accelerator/:slug",
        permanent: true,
      },
      {
        source: "/pages/:slug/:path*",
        destination: "/accelerator/:slug/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
