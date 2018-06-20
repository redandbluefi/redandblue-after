import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';

class App extends Component {
  static propTypes = {
    isFrontpage: PropTypes.bool,
    localeCode: PropTypes.string,
    siteData: PropTypes.object,
    children: PropTypes.any
  };
  static defaultProps = {
    siteData: {}
  };

  render() {
    const { isFrontpage, localeCode, siteData } = this.props;

    let onFrontpage = isFrontpage;
    // isFrontpage will be passed on server-side, but won't be on client-side
    // So use the prop or determine new value when component is re-rendered
    if (typeof isFrontpage === 'undefined' && !!window) {
      onFrontpage =
        isFrontpage || window.location.pathname === `/${localeCode}/`;
    }

    return (
      <div className={onFrontpage ? 'frontpage' : ''}>
        <Header />
        <pre>SiteData: {JSON.stringify(siteData)}</pre>
        <div>{this.props.children}</div>
        <h2>INSERT FOOTER HERE</h2>
      </div>
    );
  }
}

export default App;
