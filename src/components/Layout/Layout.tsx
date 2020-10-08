import { Layout as LayoutAntd } from 'antd';
import React, { PropsWithChildren } from 'react';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import classes from './Layout.module.less';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>) => (
  <LayoutAntd className={classes.layout}>
    <Header />
    <LayoutAntd.Content className={classes.content}>
      <Container>{children}</Container>
    </LayoutAntd.Content>
    <Footer />
  </LayoutAntd>
);
