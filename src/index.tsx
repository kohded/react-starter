import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { enableAllPlugins } from 'immer';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import './index.less';

enableAllPlugins();

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
);
