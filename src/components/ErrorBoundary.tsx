import { Component, ReactNode } from 'react';

import Error from '../pages/Error/Error';

type ErrorState = {
  hasError: boolean;
};

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError = (): ErrorState => ({
    hasError: true,
  });

  public componentDidCatch() {
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? <Error /> : children;
  }
}

export default ErrorBoundary;
