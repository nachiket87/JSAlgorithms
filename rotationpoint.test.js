const rp = require("./rotationpoint");

const words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
];

test("should return a number(index)", () => {
  expect(typeof rp(words)).toBe("number");
});

test("should return correct index", () => {
  expect(rp(words)).toBe(5);
});
