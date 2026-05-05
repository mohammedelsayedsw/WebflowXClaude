import { APP_BASE_PATH } from "./appBasePath";

const assetsPrefix = APP_BASE_PATH;

export function assetUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${assetsPrefix}${clean}`;
}
