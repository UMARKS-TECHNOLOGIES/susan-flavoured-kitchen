import api from '@/lib/api';
import { API } from '@/lib/endpoints';

export const fetchCart = () => api.get(`${API.CART}/get-cart`);
export const addToCart = (productId, quantity = 1) =>
  api.post(`${API.CART}/add-to-cart`, { productId, quantity });

export const removeFromCart = productId =>
  api.delete(`${API.CART}/remove/${productId}`);

export const updateQuantity = (productId, quantity) =>
  api.patch(`${API.CART}/update`, { productId, quantity });
