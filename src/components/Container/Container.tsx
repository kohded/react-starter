import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import classes from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  isFullWidth?: boolean;
}

export const Container: FC<ContainerProps> = ({
  children,
  isFullWidth,
}: PropsWithChildren<ContainerProps>) => (
  <div className={`${isFullWidth ? classes[`container-full-width`] : classes.container}`}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);
