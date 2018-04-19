import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Header from '../components/Header/Header';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>
          <FormattedMessage id="page.about" defaultMessage="About" />
        </h1>
      </div>
    );
  }
}

export default About;
