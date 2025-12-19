import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || '';

const api = axios.create({
  baseURL,
  withCredentials: true,
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
    if (status === 401) {
      if (onAuthFailure && !config._retry) {
        config._retry = true;
        try {
          await onAuthFailure();
          return api.request(config);
        } catch (e) {
          window.location.href = '/login';
        }
      } else {
        window.location.href = '/login';
      }
    }
    return Promise.reject(err);
  }
);

export default api;
