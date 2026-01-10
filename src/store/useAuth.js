import { create } from 'zustand';
import api from '../lib/api';
import { API } from '../lib/endpoints';
import { reportSuccess, reportError } from '@/lib/errorHandler';

export const useAuth = create((set) => ({
  user: null,
  admin: null,
  loading: true,
  error: null,

  setUser: (user) => set({ user }),

  initializeAuth: async () => {
    console.log('running initializeAuth');
    const accessToken = localStorage.getItem('accessToken');
    const adminToken = localStorage.getItem('AdminAccessToken');

    if (!accessToken && !adminToken) {
      set({ loading: false, user: null, admin: null, error: null });
      return;
    }

    try {
      // USER
      if (accessToken) {
        const { data } = await api.get(`${API.AUTH}/me`);
        const payload = data?.data || data;

        set({
          user: {
            id: payload?.id,
            name: payload?.name,
            email: payload?.email,
            role: payload?.role || 'user',
            addresses: payload?.addresses || [],
            createdAt: payload?.createdAt || null,
          },
        });
        set({ error: null });
        reportSuccess('User authenticated successfully');
      }

      // ADMIN
      if (adminToken) {
        const { data } = await api.get(`${API.ADMIN}/me`);
        set({
          admin: {
            id: data.id,
            name: data.name,
            email: data.email,
            role: 'admin',
          },
        });
        reportSuccess('Admin authenticated successfully');
      }
    } catch (err) {
      set({ error: err.message, user: null, admin: null });
      console.error('Error fetching user or admin data:', err);
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    let AUTH = API.USER;

    if (email === import.meta.env.VITE_ADMIN_EMAIL) {
      AUTH = API.ADMIN;
    }

    try {
      const res = await api.post(`${AUTH}/login`, { email, password });

      if (res.status !== 200) {
        const message = res?.data?.message || 'Login failed';
        set({ error: message, loading: false });
        reportError(message);
        return false;
      }

      // Admin login
      if (res.data?.admin) {
        localStorage.setItem('AdminAccessToken', JSON.stringify(res.data.token));
        set({ admin: res.data.admin, error: null, loading: false });
        reportSuccess('Admin logged in successfully');
        return { status: true, role: 'admin' };
      }

      // User login
      const payload = res?.data?.data || res?.data || {};
      const token = payload?.token?.accessToken || null;
      const refreshToken = payload?.token?.refreshToken || null;

      if (!token) {
        set({ loading: false, error: 'Invalid login response' });
        reportError('Invalid login response');
        return false;
      }

      localStorage.setItem('accessToken', JSON.stringify(token));
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));

      const userFromPayload = payload?.user || payload;
      const user = {
        id: userFromPayload?.id || userFromPayload?.userId || null,
        name: userFromPayload?.name || userFromPayload?.fullName || null,
        email: userFromPayload?.email || null,
        phone: userFromPayload?.phone || null,
        role: userFromPayload?.role || 'user',
      };

      set({ user, loading: false, error: null });
      reportSuccess('Logged in successfully');
      return { status: true, role: 'user' };
    } catch (e) {
      const message = e?.response?.data?.message || e?.message || 'Login failed';
      set({ error: message, loading: false });
      reportError(message);
      return false;
    }
  },

  logout: () => {
    localStorage.clear();
    set({ user: null, admin: null });
  },

  requestPasswordReset: async (email) => {
    try {
      const res = await api.post(API.FORGOTTPASSWORD, { email });
      return { status: true, message: res.data.message };
    } catch (err) {
      console.error('Forgot password error:', err);
      return { status: false, message: err.response?.data?.message || 'Failed to send reset link' };
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      const res = await api.post(API.RESETPASSWORD, { token, password: newPassword });
      return { status: true, message: res.data.message };
    } catch (err) {
      console.error('Reset password error:', err);
      return { status: false, message: err.response?.data?.message || 'Failed to reset password' };
    }
  },
}));
