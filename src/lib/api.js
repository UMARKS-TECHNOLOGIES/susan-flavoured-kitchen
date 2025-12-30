import axios from 'axios';

//set baseURL based on node environment variables
let baseURL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://susanfalvoredkitchen-backend-23c5.onrender.com';

const devServer = import.meta.env.VITE_DEV_SERVER || 'http://localhost:5000';

console.log('Environment:', import.meta.env.VITE_NODE_ENV);

if (import.meta.env.VITE_NODE_ENV !== 'production' && devServer) {
  console.log('[api] using development server:', devServer);
  baseURL = devServer;
} else {
  console.log('[api] using production server:', baseURL);
}
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// OPTIONAL: attach token if you even have auth
api.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }

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
