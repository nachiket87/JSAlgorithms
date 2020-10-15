const bs = require("./binarySearch");

test("return true if number in Array", () => {
  expect(bs(19, [14, 15, 16, 17, 18, 19])).toBe(true);
});

test("returns false if number if not in array", () => {
  expect(bs(99, [14, 15, 16, 17, 18, 19])).toBe(false);
});

test("returns false when non number input is provided", () => {
  expect(bs(99, [14, 15, 16, 17, 18, 19])).toBe(false);
});
