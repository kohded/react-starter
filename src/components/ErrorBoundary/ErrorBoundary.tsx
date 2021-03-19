import React, { Component, ReactNode } from 'react';
import { Container } from '../Container/Container';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo): void { /* Do something with error. */ }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Container>There was an error.</Container>;
    }

    return children;
  }
}
