import api from '@/lib/api';

 const CategoryService = {
  getAll: () => api.get('/admin/categories'),
  create: data => api.post('/admin/categories', data),
  update: (id, data) => api.put(`/admin/categories/${id}`, data),
  remove: id => api.delete(`/admin/categories/${id}`),
};

export default CategoryService;