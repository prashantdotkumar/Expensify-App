import SelectTotalExpenses from "../../selectors/expenses-total";
import ExpenseFixtureData from "../fixtures/expenses";

test("should return 0 if there are no expenses", () => {
  const result = SelectTotalExpenses([]);
  expect(result).toBe(0);
});

test("should correctly add up a single expense", () => {
  const result = SelectTotalExpenses([ExpenseFixtureData[0]]);
  expect(result).toBe(195);
});

test("should correctly add up all expenses", () => {
  const result = SelectTotalExpenses(ExpenseFixtureData);
  expect(result).toBe(114195);
});
