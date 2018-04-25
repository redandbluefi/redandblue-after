import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HeaderComponent from './Header';

// We need to wrap the original Header with 'MemoryRouter'
// because Header uses Link, which relies on React-Router context
const Header = () => (
  <MemoryRouter>
    <HeaderComponent />
  </MemoryRouter>
);

it('renders Header correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
