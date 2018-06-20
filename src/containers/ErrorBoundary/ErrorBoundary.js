import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('Error was thrown', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Unable to render the data. Please try again later.</h1>;
    }
    return this.props.children;
  }
}
