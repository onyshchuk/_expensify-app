import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './../../components/ExpensesSummary';
import expenses from './../fixtures/expenses';
import { filters } from './../fixtures/filters';

test('should render Expense Summary page properly', () => {
   const wrapper = shallow(<ExpensesSummary
      expenses={expenses}
      filters={filters}
   />);
   expect(wrapper).toMatchSnapshot();
});