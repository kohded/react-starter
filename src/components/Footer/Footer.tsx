import { Layout, Typography } from 'antd';
import React, { FC } from 'react';
import { Container } from '../Container/Container';

export const Footer: FC = () => (
  <Layout.Footer role="contentinfo">
    <Container>
      <Typography>Footer</Typography>
    </Container>
  </Layout.Footer>
);
