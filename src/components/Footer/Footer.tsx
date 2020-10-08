import { Layout, Typography } from 'antd';
import React from 'react';
import { Container } from '../Container/Container';

export const Footer: React.FC = () => (
  <Layout.Footer>
    <Container>
      <Typography>Footer</Typography>
    </Container>
  </Layout.Footer>
);
