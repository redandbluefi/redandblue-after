import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import identityProxy from 'identity-obj-proxy';
import theme from '../src/theme';

addLocaleData([...en]);

// Stub for global Window objects
window.matchMedia = () => ({ matches: true });

const TestWrapper = props => {
  return (
    <IntlProvider locale="en" messages={identityProxy}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </MemoryRouter>
    </IntlProvider>
  );
};

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default TestWrapper;
