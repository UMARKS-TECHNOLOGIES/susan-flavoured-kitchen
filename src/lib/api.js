import axios from 'axios';

//set baseURL based on node environment variables
let baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://susanfalvoredkitchen-backend-23c5.onrender.com';
    // 'https://susanfalvoredkitchen-backend-oz62.onrender.com';

const devServer = import.meta.env.VITE_DEV_SERVER || 'http://localhost:5000';

console.log('Environment Mode:', import.meta.env.MODE);

// Use production backend if either VITE_API_BASE_URL is set or if we are in production build
const useProduction = import.meta.env.PROD || import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_NODE_ENV === 'production';

if (!useProduction && devServer) {
  console.log('[api] using development server:', devServer);
  baseURL = devServer;
} else {
  console.log('[api] using production server:', baseURL);
}
const api = axios.create({
  baseURL,
  withCredentials: false,
});

// OPTIONAL: attach token if you even have auth
api.interceptors.request.use(config => {
  let token = null;
  if (!(config.data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }

  if (localStorage.getItem('admin-Role')) {
    token = localStorage.getItem('AdminAccessToken');
  } else {
    token = localStorage.getItem('accessToken');
  }

  if (token) {
    try {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    } catch (e) {
      // Fallback: if it's not JSON, use it as a raw string (e.g. bare JWT)
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.request.use(config => {
  return config;
});

//simple error logging
api.interceptors.response.use(
  res => res,
  err => {
    console.error('[api error]', err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;
