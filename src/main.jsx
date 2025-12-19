/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { useAuth } from './store/useAuth';
import { registerAuthHandler } from './lib/api';
import ErrorToastProvider from './components/shared/ErrorToastProvider';
import ErrorBoundary from './components/shared/ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorToastProvider>
      <ErrorBoundary>
        <AuthInitializer />
        <App />
      </ErrorBoundary>
    </ErrorToastProvider>
  </React.StrictMode>
);

function AuthInitializer() {
  useEffect(() => {
    registerAuthHandler(() => useAuth.getState().fetchUser());
    const token = localStorage.getItem('token');
    if (token) {
      useAuth.getState().fetchUser();
    } else {
      console.log('[AuthInitializer] no token - skipping initial fetchUser');
    }
  }, []);
  return null;
}
