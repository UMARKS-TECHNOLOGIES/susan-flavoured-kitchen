import api from '@/lib/api';
import { API } from '@/lib/endpoints';

const CategoryService = {
  // get all categories (with items)
  getAll: () => api.get(`${API.MENU}/categories`),

  //get all categories(with no items)
  getAllOnlyName: () => api.get(`${API.MENU}/categories`),

  // create category
  create: data => api.post(`${API.MENU}/categories`, data),

  // update category
  update: (id, data) => api.put(`${API.MENU}/categories/${id}`, data),

  // delete category
  remove: id => api.delete(`${API.MENU}/categories/${id}`),
};

export default CategoryService;
