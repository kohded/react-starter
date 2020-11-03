import { enableAllPlugins } from 'immer';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import './index.scss';

enableAllPlugins();

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
);
