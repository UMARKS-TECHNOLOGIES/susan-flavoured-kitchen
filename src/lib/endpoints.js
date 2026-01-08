export const API = {
  AUTH: import.meta.env.VITE_API_AUTH_PATH || '/api/v1/user',
  PRODUCTS: import.meta.env.VITE_API_PRODUCTS_PATH || '/api/v1/products',
  CART: import.meta.env.VITE_API_CART_PATH || '/api/v1/cart',
  ORDER: import.meta.env.VITE_API_ORDERS_PATH || '/api/v1/order',
  ADMIN: import.meta.env.VITE_API_ADMIN_PATH || '/api/v1/admin',
  USER: import.meta.env.VITE_API_USERS_PATH || '/api/v1/user',
  MENU: import.meta.env.VITE_API_MENU_PATH || '/api/v1/menu',
  BASEURL:
    import.meta.env.VITE_NODE_ENV === 'production'
      ? import.meta.env.VITE_API_BASE_URL
      : import.meta.env.VITE_DEV_SERVER,
};
