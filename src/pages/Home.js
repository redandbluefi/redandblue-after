import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import fetch from 'node-fetch';

import Header from '../components/Header/Header';
import config from '../config';

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    try {
      const response = await fetch(`${config.apiHost}/posts/1`);
      const post = await response.json();
      return { post };
    } catch (err) {
      console.error('Error while fetching example post', err);
      return { err };
    }
  }

  render() {
    const { post = {}, err = {} } = this.props;
    return (
      <div>
        <Helmet title="Homepage title" />
        <Header />
        <h1>
          <FormattedMessage id="page.home" defaultMessage="Homepage" />
        </h1>
        <p>{post.body}</p>
        <pre>{JSON.stringify(err)}</pre>
      </div>
    );
  }
}

export default Home;
