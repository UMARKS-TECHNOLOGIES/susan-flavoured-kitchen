import { Menu } from 'lucide-react';

export const API = {
  AUTH: import.meta.env.VITE_API_AUTH_PATH || '/api/v1/user',
  PRODUCTS: import.meta.env.VITE_API_PRODUCTS_PATH || '/api/v1/products',
  CART: import.meta.env.VITE_API_CART_PATH || '/api/v1/cart',
  ORDER: import.meta.env.VITE_API_ORDERS_PATH || '/api/v1/order',
  ADMIN: import.meta.env.VITE_API_ADMIN_PATH || '/api/v1/admin',
  USER: import.meta.env.VITE_API_USERS_PATH || '/api/v1/user',
  MENU: import.meta.env.VITE_API_MENU_PATH || '/api/v1/menu',

  PROFILE: import.meta.env.VITE_API_PROFILE_PATH || '/api/v1/user/profile',
  CHANGEPASSWORD:
    import.meta.env.VITE_API_CHANGE_PASSWORD_PATH ||
    '/api/v1/user/change-password',
  LOGOUT: import.meta.env.VITE_API_LOGOUT_PATH || '/api/v1/user/logout',
  FORGOTTPASSWORD: import.meta.env.VITE_API_FORGOTTPASSWORD_PATH || '/api/v1/user/forgot-password',
  RESETPASSWORD: import.meta.env.VITE_API_RESETPASSWORD || '/api/v1/user/reset-password',
    ADDRESSES: '/api/v1/address',
EDIT_ADDRESS: (id) => `/api/v1/address/${id}`,
DELETE_ADDRESS: (id) => `/api/v1/address/${id}`,
SET_DEFAULT: (id) => `/api/v1/address/${id}/default`,
GET_DEFAULT: '/api/v1/address/default',
};
