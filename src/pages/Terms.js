import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

class Terms extends Component {
  render() {
    return (
      <div>
        <Helmet title="Terms" />
        <h1>
          <FormattedMessage id="page.terms" defaultMessage="Terms" />
        </h1>
      </div>
    );
  }
}

export default Terms;
