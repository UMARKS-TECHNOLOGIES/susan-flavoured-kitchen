/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  registerErrorHandler,
  registerSuccessHandler,
} from '../../lib/errorHandler';

const ToastContext = createContext({
  showError: () => {},
  showSuccess: () => {},
});
export const useToast = () => useContext(ToastContext);

export function ErrorToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = t => {
    setToasts(s => [...s, t]);
    setTimeout(() => setToasts(s => s.filter(x => x.id !== t.id)), 4200);
  };

  useEffect(() => {
    registerErrorHandler(msg =>
      push({ id: Date.now() + Math.random(), type: 'error', message: msg })
    );
    registerSuccessHandler(msg =>
      push({ id: Date.now() + Math.random(), type: 'success', message: msg })
    );
  }, []);

  const showError = msg =>
    push({ id: Date.now() + Math.random(), type: 'error', message: msg });
  const showSuccess = msg =>
    push({ id: Date.now() + Math.random(), type: 'success', message: msg });

  return (
    <ToastContext.Provider value={{ showError, showSuccess }}>
      {children}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
        {toasts.map(t => (
          <div
            key={t.id}
            role="status"
            style={{
              minWidth: 260,
              marginBottom: 8,
              padding: '10px 14px',
              background: t.type === 'error' ? '#fff5f1' : '#f0fdfa',
              color: t.type === 'error' ? '#7a2e0e' : '#064e3b',
              border: `1px solid ${t.type === 'error' ? '#f7c0a7' : '#bbf7d0'}`,
              borderRadius: 8,
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              fontSize: 14,
            }}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ErrorToastProvider;
