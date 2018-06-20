import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

class About extends Component {
  render() {
    return (
      <div>
        <Helmet title="About" />
        <h1>
          <FormattedMessage id="page.about" defaultMessage="About" />
        </h1>
      </div>
    );
  }
}

export default About;
