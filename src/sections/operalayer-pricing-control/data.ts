/**
 * Example figures for the pricing-control page. They illustrate how one
 * product is priced per state; they are not the client's real rates.
 */
export type StatePrice = {
  code: string;
  name: string;
  cost: number;
  excise: number;
  margin: number;
  marginType: number;
  shelf: number;
  previous: number;
};

export const STATE_PRICES: StatePrice[] = [
  { code: "TX", name: "Texas", cost: 18, excise: 2.4, margin: 8.9, marginType: 2, shelf: 29.99, previous: 28.99 },
  { code: "CA", name: "California", cost: 18, excise: 5.75, margin: 9.6, marginType: 5, shelf: 33.99, previous: 32.49 },
  { code: "NY", name: "New York", cost: 18, excise: 4.8, margin: 9.4, marginType: 4, shelf: 32.99, previous: 31.99 },
  { code: "FL", name: "Florida", cost: 18, excise: 1.2, margin: 8.7, marginType: 1, shelf: 27.99, previous: 27.49 },
  { code: "OH", name: "Ohio", cost: 18, excise: 3.1, margin: 8.8, marginType: 3, shelf: 29.99, previous: 29.49 },
];

/** Standard US tile-grid layout: [code, column, row] on an 11 x 8 grid. */
export const TILES: [string, number, number][] = [
  ["AK", 0, 0], ["ME", 10, 0],
  ["VT", 9, 1], ["NH", 10, 1],
  ["WA", 0, 2], ["ID", 1, 2], ["MT", 2, 2], ["ND", 3, 2], ["MN", 4, 2], ["IL", 5, 2], ["WI", 6, 2], ["MI", 7, 2], ["NY", 8, 2], ["RI", 9, 2], ["MA", 10, 2],
  ["OR", 0, 3], ["NV", 1, 3], ["WY", 2, 3], ["SD", 3, 3], ["IA", 4, 3], ["IN", 5, 3], ["OH", 6, 3], ["PA", 7, 3], ["NJ", 8, 3], ["CT", 9, 3],
  ["CA", 0, 4], ["UT", 1, 4], ["CO", 2, 4], ["NE", 3, 4], ["MO", 4, 4], ["KY", 5, 4], ["WV", 6, 4], ["VA", 7, 4], ["MD", 8, 4], ["DE", 9, 4],
  ["AZ", 1, 5], ["NM", 2, 5], ["KS", 3, 5], ["AR", 4, 5], ["TN", 5, 5], ["NC", 6, 5], ["SC", 7, 5],
  ["OK", 3, 6], ["LA", 4, 6], ["MS", 5, 6], ["AL", 6, 6], ["GA", 7, 6],
  ["HI", 0, 7], ["TX", 3, 7], ["FL", 8, 7],
];

export const usd = (n: number) => `$${n.toFixed(2)}`;
