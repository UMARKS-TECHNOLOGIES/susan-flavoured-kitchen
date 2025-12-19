export const API = {
  AUTH: import.meta.env.VITE_API_AUTH_PATH || '/api/auth',
  PRODUCTS: import.meta.env.VITE_API_PRODUCTS_PATH || '/api/products',
  CART: import.meta.env.VITE_API_CART_PATH || '/api/cart',
  ORDERS: import.meta.env.VITE_API_ORDERS_PATH || '/api/orders',
  ADMIN: import.meta.env.VITE_API_ADMIN_PATH || '/api/admin',
  USERS: import.meta.env.VITE_API_USERS_PATH || '/api/users',
};
