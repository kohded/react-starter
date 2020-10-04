import React, { PropsWithChildren } from 'react';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>) => (
  <>
    <Header />
    <main className="wrapper">
      <Container>{children}</Container>
    </main>
    <Footer />
  </>
);
