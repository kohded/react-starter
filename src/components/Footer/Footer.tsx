import { Layout, Typography } from 'antd';
import React, { FC } from 'react';
import { APP_NAME } from '../../common/constants';
import { Container } from '../Container/Container';

export const Footer: FC = () => (
  <Layout.Footer role="contentinfo">
    <Container>
      <Typography>Copyright &#xA9; {`${new Date().getFullYear()} ${APP_NAME}`}</Typography>
    </Container>
  </Layout.Footer>
);
