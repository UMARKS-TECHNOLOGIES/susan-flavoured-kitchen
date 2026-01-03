import { create } from 'zustand';
import api from '../lib/api';
import { API } from '../lib/endpoints';
import { reportSuccess } from '@/lib/errorHandler';

export const useAuth = create(set => ({
  user: null,
  admin: null,
  loading: true,
  error: null,

  initializeAuth: async () => {
    const accessToken = localStorage.getItem('accessToken');
    const adminToken = localStorage.getItem('AdminAccessToken');

    if (!accessToken && !adminToken) {
      set({ loading: false });
      set({ admin: null, user: null });
      set({ error: null });
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
          },
        });

        set({ error: null });
        reportSuccess('User authenticated successfully');
      }

      // ADMIN
      if (adminToken) {
        const { data } = await api.get(`${API.ADMIN}/stats`);
        console.log('admin:', data);
        const payload = data?.data || data;

        set({
          admin: {
            id: payload?.id,
            name: payload?.name,
            email: payload?.email,
            role: 'admin',
          },
        });
      }
      set({ error: null });
      reportSuccess('Admin authenticated successfully');
    } catch (err) {
      set({ error: err.message });
      console.error('Error fetching user or admin data:', err);
      set({ user: null, admin: null });
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    let AUTH = API.USER; //default to user login

    console.log(import.meta.env.VITE_ADMIN_EMAIL);
    if (email === import.meta.env.VITE_ADMIN_EMAIL) {
      console.log('logging as an admin');
      AUTH = API.ADMIN;
    }

    try {
      const res = await api.post(`${AUTH}/login`, { email, password });

      if (res.status !== 200) {
        const message = res?.data?.message || 'Login failed';
        set({ error: message });
        set({ loading: false });
        reportError(message);
        return false;
      }

      if (Object.keys(res.data).includes('admin')) {
        set({ loading: false });
        console.log('admin=true');
        localStorage.setItem(
          'AdminAccessToken',
          JSON.stringify(res.data.token)
        );

        const payload = res.data.admin;
        const admin = {
          id: payload?.id || null,
          name: payload?.name || null,
          email: payload?.email || null,
          role: payload?.role || 'admin',
        };
        set({ admin, error: null });
        reportSuccess('Admin logged in successfully');
        return { status: true, role: 'admin' };
      }

      const payload = res?.data?.data || res?.data || {};
      const token =
        payload?.token?.accessToken || payload.data?.token?.accessToken || null;
      const refreshToken = payload?.token?.refreshToken || null;

      console.log('response:', payload);

      if (!token) {
        set({ loading: false });
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
      set({ loading: false });
      set({ user, error: null });
      reportSuccess('Logged in successfully');
      return { status: true, role: 'user' };
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.message || 'Login failed';
      set({ error: message });
      reportError(message);
      set({ loading: false });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    localStorage.clear();
    set({ user: null, admin: null });
  },
}));
