import { Layout as LayoutAntd } from 'antd';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import classes from './Layout.module.less';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>) => (
  <LayoutAntd className={classes.layout}>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <ErrorBoundary>
      <LayoutAntd.Content className={classes.content} role="main">
        <Container>{children}</Container>
      </LayoutAntd.Content>
    </ErrorBoundary>
    <ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  </LayoutAntd>
);
