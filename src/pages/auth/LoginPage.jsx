import React, { useState, useEffect, Suspense } from 'react';
import LoginSkeleton from './LoginSkeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import Abt2 from '@/assets/Abt2.svg';
import Logo from '@/assets/Logo.jpeg';
import { useAuth } from '../../store/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../components/shared/ErrorToastProvider';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [localError, setLocalError] = useState(null);
  const { showSuccess, showError } = useToast();

  const [loading, setLoading] = useState(true);

  


  const handleChange = (field, value) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
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

  const handleKeyPress = e => {
    if (e.key === 'Enter') handleSubmit();
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); 

  return () => clearTimeout(timer);
}, []);

if (loading) {
    return <LoginSkeleton />;
  }

  return (
    <div className="min-h-screen px-10 bg-[#fffcfa]">
      <div className="py-5">
        <img src={Logo} loading='lazy' alt="Logo" className="h-20" />
      </div>

<div className="min-h-screen lg:h-[500px] flex flex-col lg:flex-row">
        <div
  className="h-[300px] sm:h-[450px] lg:h-full flex flex-col lg:w-1/2 bg-cover bg-center relative rounded-lg"
  style={{ backgroundImage: `url(${Abt2})` }}
>
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-6 lg:px-12 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
              Log In
            </h1>
            <p className="text-base lg:text-xl max-w-md opacity-90">
              Welcome back! Please sign in to continue.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center lg:px-8 order-2">
          <div className="w-full max-w-lg bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none border lg:border-none border-gray-100">
            <div className="space-y-5 lg:space-y-6">
              {localError && (
                <div className="text-red-500 text-sm text-center">
                  {localError}
                </div>
              )}

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-14 lg:h-12 text-base lg:text-sm px-4 bg-gray-50/50 border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={e => handleChange('password', e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="h-14 lg:h-12 pr-12 text-base lg:text-sm px-4 bg-gray-50/50 border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/forgotpassword"
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold rounded-lg shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? 'Logging in...' : 'Log In'}
              </Button>

              <div className="text-center pt-2">
                <span className="text-sm text-gray-600">
                  Don't have an account?{' '}
                </span>
                <Link
                  to="/signup"
                  className="text-sm text-orange-500 hover:text-orange-600 font-bold transition-colors ml-1"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
