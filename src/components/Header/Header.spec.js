import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import HeaderComponent from './Header';

// We need to wrap the original Header with 'MemoryRouter'
// because Header uses Link, which relies on React-Router context
const messages = {};
const Header = () => (
  <MemoryRouter>
    <IntlProvider locale="en" messages={messages}>
      <HeaderComponent />
    </IntlProvider>
  </MemoryRouter>
);

it('renders Header correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
