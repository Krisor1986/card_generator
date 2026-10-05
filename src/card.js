export const suits = [
  { name: "corazones", symbol: "♥", className: "heart" },
  { name: "picas", symbol: "♠", className: "spade" },
  { name: "tréboles", symbol: "♣", className: "club" },
  { name: "diamantes", symbol: "♦", className: "diamond" }
];
export const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export function randomCard(random = Math.random) {
  const suit = suits[Math.floor(random() * suits.length)];
  const value = values[Math.floor(random() * values.length)];
  return { suit, value };
}
