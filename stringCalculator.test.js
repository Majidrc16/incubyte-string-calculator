const { add } = require('./stringCalculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('handles new lines between numbers as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws an error when negative numbers are provided', () => {
  expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
});
