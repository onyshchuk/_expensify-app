import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './../../components/ExpensesSummary';

test('should render Expense Summary page properly with 1 expense', () => {
   const wrapper = shallow(<ExpensesSummary
      expenseCount={1}
      expensesTotal={195}
   />);
   expect(wrapper).toMatchSnapshot();
});

test('should render Expense Summary page properly with multiple expense', () => {
   const wrapper = shallow(<ExpensesSummary
      expenseCount={3}
      expensesTotal={114195}
   />);
   expect(wrapper).toMatchSnapshot();
});