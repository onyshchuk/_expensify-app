import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from './../../components/ExpenceDashboardPage';

test('should render Expense Dashboard page properly', () => {
   const wrapper = shallow(<ExpenseDashboardPage />);
   expect(wrapper).toMatchSnapshot();
});