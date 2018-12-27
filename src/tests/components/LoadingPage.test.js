import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from './../../components/LoadingPage';

test('Should render Loading Page properly', () => {
   const wrapper = shallow(<LoadingPage />);
   expect(wrapper).toMatchSnapshot();
});