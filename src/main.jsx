import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorToastProvider from './components/shared/ErrorToastProvider';
import ErrorBoundary from './components/shared/ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorToastProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ErrorToastProvider>
  </React.StrictMode>
);
