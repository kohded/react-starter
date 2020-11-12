import { Layout, Typography } from 'antd';
import React, { FC } from 'react';
import { Container } from '../Container/Container';

export const Header: FC = () => (
  <Layout.Header role="banner">
    <Container>
      <Typography>Header</Typography>
    </Container>
  </Layout.Header>
);
