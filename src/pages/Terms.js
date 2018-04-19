import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Header from '../components/Header/Header';

class Terms extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>
          <FormattedMessage id="page.terms" defaultMessage="Terms" />
        </h1>
      </div>
    );
  }
}

export default Terms;
