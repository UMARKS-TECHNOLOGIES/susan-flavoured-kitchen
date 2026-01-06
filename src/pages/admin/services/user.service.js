import api from '@/lib/api';
import { API } from '@/lib/endpoints';

const UserService = {
  getAll: () => api.get(`${API.ADMIN}/users`),
};

export default UserService;
