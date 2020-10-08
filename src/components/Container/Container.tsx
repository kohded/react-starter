import React, { PropsWithChildren } from 'react';
import classes from './Container.module.less';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
}: PropsWithChildren<ContainerProps>) => <div className={classes.container}>{children}</div>;
