import create from 'zustand';
import axios from 'axios';

export const useAuth = create((set, get) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    set({ loading: true });
    try {
      const { data } = await axios.get('/api/auth/me', {
        withCredentials: true,
      });
      set({ user: data.user, error: null });
    } catch (e) {
      set({ user: null, error: e });
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const { data } = await axios.post(
        '/api/auth/login',
        { email, password },
        { withCredentials: true }
      );
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
      const { data } = await axios.post(
        '/api/auth/register',
        { name, phone, email, password },
        { withCredentials: true }
      );
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
    await axios.post('/api/auth/logout', {}, { withCredentials: true });
    set({ user: null });
  },
}));
