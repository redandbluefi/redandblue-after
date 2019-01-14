import React from 'react';
import renderer from 'react-test-renderer';
import TestWrapper from '../../../test/TestWrapper';
import HeaderComponent from './Header';

const Header = () => (
  <TestWrapper>
    <HeaderComponent />
  </TestWrapper>
);

it('renders Header correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
