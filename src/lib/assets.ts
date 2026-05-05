import config from "../../next.config";

const assetsPrefix = config.assetPrefix || config.basePath || "";

export function assetUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${assetsPrefix}${clean}`;
}
