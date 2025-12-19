import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { useAuth } from './store/useAuth';
import { registerAuthHandler } from './lib/api';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthInitializer />
    <App />
  </React.StrictMode>
);

function AuthInitializer() {
  useEffect(() => {
    registerAuthHandler(() => useAuth.getState().fetchUser());
    useAuth.getState().fetchUser();
  }, []);
  return null;
}
