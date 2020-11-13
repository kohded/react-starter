import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';

export const Header: FC = () => (
  <header role="banner">
    <Container isFullWidth>
      <Link to="/">Logo</Link>
    </Container>
  </header>
);
