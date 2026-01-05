import api from '@/lib/api';
import { API } from '@/lib/endpoints';

const ProductService = {
  // get products grouped by category (for dashboard / menu)
  getGrouped: () => api.get(`${API.MENU}/menu-items/grouped`),

  // get single product
  getOne: id => api.get(`${API.MENU}/menu-items/${id}`),

  // create product (menu item)
  create: data => api.post(`${API.MENU}/menu-items`, data),

  // update product
  update: (id, data) => api.put(`${API.MENU}/menu-items/${id}`, data),

  // delete product
  remove: id => api.delete(`${API.MENU}/menu-items/${id}`),
};

export default ProductService;
