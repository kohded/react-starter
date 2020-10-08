import { Layout, Typography } from 'antd';
import React from 'react';
import { Container } from '../Container/Container';

export const Header: React.FC = () => (
  <Layout.Header>
    <Container>
      <Typography>Header</Typography>
    </Container>
  </Layout.Header>
);
