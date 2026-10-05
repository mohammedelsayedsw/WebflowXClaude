/**
 * Every figure on the page, copied from the press PDF
 * (Magento-on-Expedio-storefront-benchmark-press-v4.pdf, September 2026).
 * Times are median time to first byte in ms. Rates are requests per second.
 */

export type Row = { page: string; rate: number; magento: number; expedio: number; x: number };

/** Page 6: at the traffic where stock Magento began to strain. */
export const PEAK: Row[] = [
  { page: "Homepage", rate: 4, magento: 519, expedio: 20, x: 25.9 },
  { page: "Category page", rate: 20, magento: 400, expedio: 19, x: 21.2 },
  { page: "Category, page 2 and beyond", rate: 22, magento: 140, expedio: 17, x: 8.3 },
  { page: "Content page", rate: 28, magento: 84, expedio: 13, x: 6.4 },
  { page: "Product page", rate: 20, magento: 146, expedio: 23, x: 6.3 },
  { page: "Search results", rate: 18, magento: 285, expedio: 76, x: 3.8 },
  { page: "Filtered category", rate: 24, magento: 111, expedio: 37, x: 3.0 },
  { page: "Add to cart", rate: 46, magento: 68, expedio: 34, x: 2.0 },
];

/** Page 5: about half of peak traffic. */
export const NORMAL: Row[] = [
  { page: "Homepage", rate: 2, magento: 472, expedio: 20, x: 23.7 },
  { page: "Category page", rate: 10, magento: 131, expedio: 22, x: 6.0 },
  { page: "Category, page 2 and beyond", rate: 12, magento: 117, expedio: 20, x: 6.0 },
  { page: "Product page", rate: 10, magento: 120, expedio: 27, x: 4.5 },
  { page: "Content page", rate: 14, magento: 70, expedio: 17, x: 4.1 },
  { page: "Search results", rate: 10, magento: 228, expedio: 79, x: 2.9 },
  { page: "Filtered category", rate: 12, magento: 98, expedio: 43, x: 2.3 },
  { page: "Add to cart", rate: 22, magento: 56, expedio: 31, x: 1.8 },
];

/** Page 9. `plus`: Expedio was not yet strained at the highest traffic tested. */
export const CAPACITY = [
  { page: "Homepage", magento: 4, expedio: 68, plus: true, x: "17x+" },
  { page: "Category page", magento: 14, expedio: 80, plus: true, x: "5.7x+" },
  { page: "Category, page 2 and beyond", magento: 18, expedio: 90, plus: true, x: "5.0x+" },
  { page: "Content page", magento: 28, expedio: 88, plus: true, x: "3.1x+" },
  { page: "Search results", magento: 18, expedio: 54, plus: true, x: "3.0x+" },
  { page: "Filtered category", magento: 24, expedio: 54, plus: true, x: "2.2x+" },
  { page: "Product page", magento: 20, expedio: 40, plus: false, x: "2.0x" },
  { page: "Add to cart", magento: 46, expedio: 78, plus: true, x: "1.7x+" },
];

/** Page 8: average share of the server's CPU at peak traffic. */
export const CPU = [
  { page: "Homepage", magento: 52, expedio: 4 },
  { page: "Category page", magento: 98, expedio: 15 },
  { page: "Category, page 2 and beyond", magento: 72, expedio: 14 },
  { page: "Content page", magento: 66, expedio: 16 },
  { page: "Product page", magento: 77, expedio: 19 },
  { page: "Search results", magento: 84, expedio: 22 },
  { page: "Filtered category", magento: 70, expedio: 29 },
  { page: "Add to cart", magento: 63, expedio: 34 },
];

/** Pages 11, 12 and 14. */
export const WORK = [
  { label: "Database queries, homepage", magento: "604", expedio: "11" },
  { label: "Database queries, category page", magento: "164", expedio: "4" },
  { label: "Database queries, product page", magento: "142", expedio: "20" },
  { label: "Database queries, category page with 40+ products", magento: "655", expedio: "30" },
  { label: "Cache round trips, homepage", magento: "603", expedio: "44" },
  { label: "Server time, category page with empty caches", magento: "181 ms", expedio: "57 ms" },
  { label: "Server time per product shown", magento: "4.9 ms", expedio: "0.46 ms" },
  { label: "First request after a restart", magento: "832 ms", expedio: "87 ms" },
];

export const DEMO_URL = "https://expedio.37-27-237-253.sslip.io/";
