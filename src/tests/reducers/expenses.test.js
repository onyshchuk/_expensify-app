import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';

test('should set default state', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual([]);
});

test('should remove expense by id', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
   };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
   const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
   };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});

test('should add an expense', () => {
   const expense = {
      id: '4',
      description: 'new expense',
      note: '',
      amount: 100,
      createdAt: 0
   }
   const action = {
      type: 'ADD_EXPENSE',
      expense
   }
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
   const updates = {
      id: '4',
      description: 'updated expense',
      note: '',
      amount: 0,
      createdAt: 13
   }
   const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates
   }
   const result = expensesReducer(expenses, action);
   expect(result).toEqual([expenses[0], updates, expenses[2]]);
});

test('should not edit expense if expense not found', () => {
   const updates = {
      id: '4',
      description: 'updated expense',
      note: '',
      amount: 0,
      createdAt: 13
   }
   const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates
   }
   const result = expensesReducer(expenses, action);
   expect(result).toEqual(expenses);
});

test('should set expenses', () => {
   const newExpenses = [{
      id: '4'
   },{
      id: '2'
   }]
   const action = {
      type: 'SET_EXPENSES',
      expenses: newExpenses
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual(newExpenses);
});