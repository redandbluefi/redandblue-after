import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';

class Terms extends Component {
  render() {
    return (
      <div>
        <Header />
        <Helmet title="Terms page" />
        <h1>
          <FormattedMessage id="page.terms" defaultMessage="Terms" />
        </h1>
      </div>
    );
  }
}

export default Terms;
