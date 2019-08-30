import React, {Component, Fragment} from 'react';
import ErrorIndicator from "../error-indicator";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    return (
      <Fragment>{hasError ? <ErrorIndicator/> : children}</Fragment>
    )
  }
}

export default ErrorBoundary;