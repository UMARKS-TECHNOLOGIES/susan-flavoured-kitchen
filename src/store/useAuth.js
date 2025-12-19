import create from 'zustand';
import api from '../lib/api';
import { API } from '../lib/endpoints';

export const useAuth = create(set => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get(`${API.AUTH}/me`);
      set({ user: data.user, error: null });
    } catch (e) {
      set({ user: null, error: e });
      throw e;
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const { data } = await api.post(`${API.AUTH}/login`, { email, password });
      set({ user: data.user, error: null });
      return true;
    } catch (e) {
      set({ error: e.response?.data?.message || 'Login failed' });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  signup: async (name, phone, email, password) => {
    set({ loading: true });
    try {
      const { data } = await api.post(`${API.AUTH}/register`, {
        name,
        phone,
        email,
        password,
      });
      set({ user: data.user, error: null });
      return true;
    } catch (e) {
      set({ error: e.response?.data?.message || 'Signup failed' });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await api.post(`${API.AUTH}/logout`);
    } catch {
      // ignore
    } finally {
      set({ user: null });
    }
  },
}));
