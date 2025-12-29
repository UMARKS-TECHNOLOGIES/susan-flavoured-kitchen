export const API = {
  AUTH: import.meta.env.VITE_API_AUTH_PATH || '/api/v1/user',
  PRODUCTS: import.meta.env.VITE_API_PRODUCTS_PATH || '/api/v1/products',
  CART: import.meta.env.VITE_API_CART_PATH || '/api/v1/cart',
  ORDERS: import.meta.env.VITE_API_ORDERS_PATH || '/api/v1/orders',
  ADMIN: import.meta.env.VITE_API_ADMIN_PATH || '/api/v1/admin',
  USERS: import.meta.env.VITE_API_USERS_PATH || '/api/v1/users',
  PROFILE: import.meta.env.VITE_API_PROFILE_PATH || '/api/v1/user/profile',
  CHANGEPASSWORD:
    import.meta.env.VITE_API_CHANGE_PASSWORD_PATH ||
    '/api/v1/user/change-password',
  LOGOUT: import.meta.env.VITE_API_LOGOUT_PATH || '/api/v1/user/logout',
};
