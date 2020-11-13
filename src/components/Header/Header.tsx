import { Layout, Typography } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';

export const Header: FC = () => (
  <Layout.Header role="banner">
    <Container>
      <Link to="/">
        <Typography>Logo</Typography>
      </Link>
    </Container>
  </Layout.Header>
);
