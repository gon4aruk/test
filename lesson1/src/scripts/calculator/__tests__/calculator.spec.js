import { mult, sum } from "../calculator";

it("shound return sum of numbers", () => {
  const result = sum(2, 4);
  expect(result).toEqual(6);
});

it("shound return sum of numbers", () => {
  const result = sum(-2, 4);
  expect(result).toEqual(2);
});

it("shound return mult of numbers", () => {
  const result = mult(2, 4);
  expect(result).toEqual(8);
});

it("shound return mult of numbers", () => {
  const result = mult(-2, 4);
  expect(result).toEqual(-8);
});

it("shound return mult of numbers", () => {
  const result = mult(2, 0);
  expect(result).toEqual(0);
});
