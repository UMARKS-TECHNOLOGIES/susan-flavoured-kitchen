import { useAuth } from '@/store/useAuth';

export default function LoginSubmitHandler(
  setLocalError,
  formData,
  setSubmitting,
  login,
  showSuccess,
  navigate,
  showError
) {
  return async () => {
    setLocalError(null);
    if (!formData.email || !formData.password) {
      setLocalError('Please fill in all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setLocalError('Please enter a valid email address');
      return;
    }

    setSubmitting(true);
    try {
      const { status, role } = await login(formData.email, formData.password);
      let currentUser;

      if (status && role === 'user') {
        currentUser = useAuth.getState().user;
        showSuccess(`Welcome back, ${currentUser?.name || 'User'}!`);
        navigate('/dashboard', { replace: true });
        return;
      }

      if (status && role === 'admin') {
        currentUser = useAuth.getState().admin;
        showSuccess(
          `You are Welcome to your Admin Dashboard, ${
            currentUser?.name || 'Admin'
          }!`
        );
        navigate('/admin', { replace: true });
        return;
      }
      setLocalError('Invalid email or password');
    } catch (e) {
      showError(e?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };
}
