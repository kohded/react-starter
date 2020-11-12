import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './Container.module.less';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }: PropsWithChildren<ContainerProps>) => (
  <div className={classes.container}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);
