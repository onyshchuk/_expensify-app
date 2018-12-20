import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from './../selectors/expenses';
import getExpensesTotal from './../selectors/expenses-total';


export const ExpensesSummary = props => {
   const visibleExpenses = getVisibleExpenses(props.expenses, props.filters);
   const expensesTotal = getExpensesTotal(visibleExpenses) / 100;

   return (
      <p>Viewing {visibleExpenses.length} {visibleExpenses.length === 1 ? 'expense' : 'expenses'} totaling {numeral(expensesTotal).format('$0,0.00')}</p>
   );
};

const mapStateToProps = state => ({
   expenses: state.expenses,
   filters: state.filters
});

export default connect(mapStateToProps)(ExpensesSummary);

