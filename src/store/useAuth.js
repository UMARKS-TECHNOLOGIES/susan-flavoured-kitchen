import { create } from 'zustand';
import api from '../lib/api';
import { API } from '../lib/endpoints';
import { reportError, reportSuccess } from '../lib/errorHandler';

export const useAuth = create(set => ({
  user: null,
  loading: true,
  error: null,

  setUser: user => set({ user }),

  // FETCH AUTHENTICATED USER
  fetchUser: async () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      set({ user: null, loading: false, error: null });
      return;
    }

    set({ loading: true });

    try {
      const { data } = await api.get(`${API.AUTH}/me`);
      const payload = data?.data || data?.user || data;

      set({
        user: {
          id: payload?.id || payload?.userId || null,
          name: payload?.name || payload?.fullName || null,
          email: payload?.email || null,
          phone: payload?.phone || null,
          address: payload?.address || null,
          role: payload?.role || 'user',
          createdAt: payload?.createdAt || null,
        },
        error: null,
      });
    } catch (e) {
      set({
        user: null,
        error:
          e?.response?.data?.message ||
          e?.message ||
          'Failed to fetch user',
      });
    } finally {
      set({ loading: false });
    }
  },

  // LOGIN
  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await api.post(`${API.AUTH}/login`, { email, password });
      const payload = res?.data?.data || res?.data || {};

      const accessToken =
        payload?.token?.accessToken || payload?.accessToken;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }

      set({ user: payload?.user || payload, error: null });
      reportSuccess('Logged in successfully');
      return true;
    } catch (e) {
      reportError(e?.response?.data?.message || 'Login failed');
      set({ error: e?.response?.data?.message });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  // LOGOUT
  logout: async () => {
    try {
      await api.post(`${API.AUTH}/logout`);
    } finally {
      localStorage.removeItem('accessToken');
      set({ user: null, error: null });
    }
  },
}));
