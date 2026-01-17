import { create } from 'zustand';
import api from '../lib/api';
import { API } from '../lib/endpoints';
import { reportSuccess, reportError } from '@/lib/errorHandler';

export const useAuth = create(set => ({
  user: null,
  admin: null,
  loading: true,
  error: null,

  setUser: user => set({ user }),

  /* =========================
     INITIALIZE AUTH
  ========================= */
  initializeAuth: async () => {
    const accessToken = localStorage.getItem('accessToken');
    const adminToken = sessionStorage.getItem('AdminAccessToken');

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
            phone: payload?.phone,
            role: payload?.role || 'user',
            addresses: payload?.addresses || [],
            createdAt: payload?.createdAt || null,
          },
        });

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
    } finally {
      set({ loading: false });
    }
  },

  /* =========================
     SIGNUP (REGISTER)
  ========================= */
  signup: async payload => {
    /**
     * payload = {
     *   name,
     *   email,
     *   phone,
     *   password
     * }
     */

    set({ loading: true, error: null });

    try {
      const res = await api.post(`${API.USER}/register`, payload);

      if (res.status !== 200 && res.status !== 201) {
        const message = res?.data?.message || 'Signup failed';
        set({ error: message, loading: false });
        reportError(message);
        return false;
      }

      const data = res?.data?.data || res?.data || {};
      const accessToken = data?.token?.accessToken;
      const refreshToken = data?.token?.refreshToken;

      if (!accessToken) {
        set({ loading: false, error: 'Invalid signup response' });
        reportError('Invalid signup response');
        return false;
      }

      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));

      const userPayload = data?.user || data;

      set({
        user: {
          id: userPayload?.id || userPayload?.userId || null,
          name: userPayload?.name || userPayload?.fullName || null,
          email: userPayload?.email || null,
          phone: userPayload?.phone || null,
          role: userPayload?.role || 'user',
          createdAt: userPayload?.createdAt || null,
        },
        loading: false,
        error: null,
      });

      reportSuccess('Account created successfully');
      return { status: true };
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.message || 'Signup failed';

      set({ error: message, loading: false });
      reportError(message);
      return false;
    }
  },

  /* =========================
     LOGIN
  ========================= */
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

      // ADMIN
      if (res.data?.admin) {
        sessionStorage.setItem(
          'AdminAccessToken',
          JSON.stringify(res.data.token)
        );
        set({ admin: res.data.admin, loading: false, error: null });
        sessionStorage.setItem('admin-Role', res.data.admin.role);
        reportSuccess('Admin logged in successfully');
        return { status: true, role: 'admin' };
      }

      // USER
      const payload = res?.data?.data || res?.data || {};
      const token = payload?.token?.accessToken;
      const refreshToken = payload?.token?.refreshToken;

      if (!token) {
        set({ loading: false, error: 'Invalid login response' });
        return false;
      }

      localStorage.setItem('accessToken', JSON.stringify(token));
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));

      const userPayload = payload?.user || payload;

      set({
        user: {
          id: userPayload?.id || userPayload?.userId,
          name: userPayload?.name || userPayload?.fullName,
          email: userPayload?.email,
          phone: userPayload?.phone,
          role: userPayload?.role || 'user',
        },
        loading: false,
        error: null,
      });

      reportSuccess('Logged in successfully');
      return { status: true, role: 'user' };
    } catch (e) {
      const message =
        e?.response?.data?.message || e?.message || 'Login failed';

      set({ error: message, loading: false });
      reportError(message);
      return false;
    }
  },

  /* =========================
     LOGOUT
  ========================= */
  logout: () => {
    localStorage.clear();
    set({ user: null, admin: null });
  },

  /* =========================
     PASSWORD RESET
  ========================= */
  requestPasswordReset: async email => {
    try {
      const res = await api.post(API.FORGOTTPASSWORD, { email });
      return { status: true, message: res.data.message };
    } catch (err) {
      return {
        status: false,
        message: err.response?.data?.message || 'Failed to send reset link',
      };
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      const res = await api.post(API.RESETPASSWORD, {
        token,
        password: newPassword,
      });
      return { status: true, message: res.data.message };
    } catch (err) {
      return {
        status: false,
        message: err.response?.data?.message || 'Failed to reset password',
      };
    }
  },
}));
