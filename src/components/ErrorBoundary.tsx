import { Component } from 'react';

import { ChildrenProps } from '../types/interfaces';
import Error from '../pages/Error';
import Searcher from '../pages/Searcher';

type ErrorState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ChildrenProps, ErrorState> {
  constructor(props: ChildrenProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError = (): ErrorState => ({
    hasError: true,
  });

  public componentDidCatch() {
    this.setState({ hasError: true });
  }

  handleErrorState = (isError: boolean) => {
    // eslint-disable-next-line no-console
    if (isError) console.error('Error caught by Error Boundary');
    this.setState({ hasError: isError });
  };

  render() {
    const { hasError } = this.state;
    return hasError ? (
      <Error onErrorChange={this.handleErrorState} />
    ) : (
      <Searcher onErrorChange={this.handleErrorState} />
    );
  }
}

export default ErrorBoundary;
