import axios from 'axios';

const baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://susanfalvoredkitchen-backend-23c5.onrender.com';

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['x-token'] = token;
  }
  return config;
});

let onAuthFailure = null;
export function registerAuthHandler(fn) {
  onAuthFailure = fn;
}

api.interceptors.response.use(
  res => res,
  async err => {
    const status = err.response?.status;
    const config = err.config || {};
    console.warn(
      '[api] response interceptor: status',
      status,
      'url',
      config.url
    );
    if (status === 401) {
      console.warn(
        '[api] 401 detected for',
        config.url,
        'pathname:',
        window.location.pathname
      );
      if (onAuthFailure && !config._retry) {
        config._retry = true;
        try {
          console.warn('[api] calling onAuthFailure() to refresh session');
          await onAuthFailure();
          console.warn(
            '[api] onAuthFailure() resolved, retrying request',
            config.url
          );
          return api.request(config);
        } catch (e) {
          console.error('[api] onAuthFailure failed', e);
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
        }
      } else {
        if (window.location.pathname !== '/login') {
          console.warn(
            '[api] redirecting to /login (no handler or already retried)'
          );
          window.location.href = '/login';
        } else {
          console.warn('[api] already on /login — skipping redirect');
        }
      }
    }
    return Promise.reject(err);
  }
);

export default api;
