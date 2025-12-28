import { create } from 'zustand';
import api from '../lib/api';
import { API } from '../lib/endpoints';
import { reportError, reportSuccess } from '../lib/errorHandler';

export const useAuth = create(set => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, skipping fetchUser');
      set({ user: null, error: null, loading: false });
      return;
    }
    set({ loading: true });

    try {
      const { data } = await api.get(`${API.AUTH}/me`);
      // server might return payload under data.data or data.user
      const payload = data?.data || data?.user || data;
      const user = {
        id: payload?.id || payload?.userId || null,
        name: payload?.name || payload?.fullName || null,
        email: payload?.email || null,
        phone: payload?.phone || null,
        role: payload?.role || 'user',
      };
      set({ user, error: null });
    } catch (e) {
      console.error('Error fetching user:', e);
      const message =
        e?.response?.data?.message || e?.message || 'Failed to fetch user';
      set({ user: null, error: message });
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await api.post(`${API.AUTH}/login`, { email, password });
      const payload = res?.data?.data || res?.data || {};
      const token =
        payload?.token?.accessToken || payload.data?.token?.accessToken || null;
      const refreshToken = payload?.token?.refreshToken || null;

      console.log('response:', payload);

      if (!token) {
        console.error('No token found in login response');
        console.log('Login response data:', payload);
        set({ error: 'Invalid login response' });
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
      set({ user, error: null });
      reportSuccess('Logged in successfully');
      return true;
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.message || 'Login failed';
      set({ error: message });
      reportError(message);
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
      const payload = data?.data || data;
      const userFromPayload = payload?.user || payload;
      const user = {
        id: userFromPayload?.id || null,
        name: userFromPayload?.name || null,
        email: userFromPayload?.email || null,
        phone: userFromPayload?.phone || null,
        role: userFromPayload?.role || 'user',
      };
      set({ user, error: null });
      return true;
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.message || 'Signup failed';
      set({ error: message });
      reportError(message);
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
      localStorage.removeItem('token');
      set({ user: null });
    }
  },
}));
