import api from '@/lib/api';

const ProductService = {
  getAll: () => api.get('/admin/products'),
  create: data => api.post('/admin/products', data),
  update: (id, data) => api.put(`/admin/products/${id}`, data),
  remove: id => api.delete(`/admin/products/${id}`),
};
export default ProductService;
