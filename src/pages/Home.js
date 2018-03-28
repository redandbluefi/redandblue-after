import React, { Component } from 'react';
import Header from '../components/Header/Header';

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default Home;
