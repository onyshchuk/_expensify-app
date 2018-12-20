import expenses from './../fixtures/expenses';
import getExpensesTotal from './../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
   const totalExpenses = getExpensesTotal();
   expect(totalExpenses).toBe(0);
});

test('should correctly and up a single expense', () => {
   const totalExpenses = getExpensesTotal([expenses[0]]);
   expect(totalExpenses).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
   const totalExpenses = getExpensesTotal(expenses);
   expect(totalExpenses).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});