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
      const success = await login(formData.email, formData.password);
      if (success) {
        const currentUser = useAuth.getState().user;
        showSuccess(`Welcome back, ${currentUser?.name || 'User'}!`);
        if (currentUser?.role === 'admin') {
          navigate('/admin', { replace: true });
        } else {
          navigate('/dashboard', { replace: true });
        }
      }
    } catch (e) {
      showError(e?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };
}
