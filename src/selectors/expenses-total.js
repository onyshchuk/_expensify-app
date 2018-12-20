export default (expenses = []) => expenses.length === 0 ? 0 : 
   expenses.map(expense => expense.amount).reduce((acc, current) => acc + current);