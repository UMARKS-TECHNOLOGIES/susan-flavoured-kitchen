import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import Abt2 from '@/assets/Abt2.svg';
import Logo from '@/assets/Logo.jpeg';

import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';
import usePasswordValidation from '@/hooks/usePasswordValidation';

const Skeleton = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
);

const SignupSkeleton = () => (
  <div className="min-h-screen px-10 py-12 bg-[#fffcfa] flex gap-8">
    <div className="hidden lg:block w-1/2">
      <Skeleton className="h-[500px] w-full rounded-lg" />
    </div>

    <div className="w-full lg:w-1/2 max-w-md mx-auto space-y-4">
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </div>
  </div>
);
const SignupPage = () => {
    const [pageLoading, setPageLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, signupLoading, error } = useAuth();
  const [localError, setLocalError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const { validations } = usePasswordValidation(formData.password);

  const passwordsMatch = useMemo(() => {
    if (formData.confirmPassword) {
      return formData.password === formData.confirmPassword;
    }
    return true;
  }, [formData.password, formData.confirmPassword]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill in all fields');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }

    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      alert('Please enter a valid phone number');
      return false;
    }

    if (
  !validations.minLength ||
  !validations.hasUppercase ||
  !validations.hasNumberOrSymbol
) {
  alert(
    'Password must be at least 8 characters, include one uppercase letter, and one number or symbol (&, @, %)'
  );
  return false;
}


    if (!passwordsMatch) {
      alert('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    setLocalError(null);
    if (!validateForm()) return;
    const success = await signup(
      formData.name,
      formData.phone,
      formData.email,
      formData.password
    );
    if (success) {
      navigate('/login', { replace: true });
    } else {
      setLocalError('Failed to create account. Please try again.');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const passwordValue = formData.password;
  const errors = {};


  if (pageLoading) {
    return <SignupSkeleton />;
  }



  return (
    <div className="min-h-screen px-10 bg-[#fffcfa]">
      <div className="py-5">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>
      <div className="min-h-screen lg:h-[500px] flex flex-col lg:flex-row">
              <div
        className="h-[300px] sm:h-[450px] lg:h-full flex flex-col lg:w-1/2 bg-cover bg-center relative rounded-lg"
        style={{ backgroundImage: `url(${Abt2})` }}
      >
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-6 lg:px-12 text-center">
                  <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
                    Create Account
                  </h1>
                  <p className="text-base lg:text-xl max-w-md opacity-90">
                    Join us and enjoy fresh, authentic meals delivered cleanly and fast.
                  </p>
                </div>
              </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            <div className="lg:hidden mb-8 flex justify-center">
              <img src="/api/placeholder/150/60" alt="Logo" className="h-20" />
            </div>

            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Create Account</h1>
              <p className="text-gray-600">
                Join us and enjoy fresh, authentic meals delivered cleanly and
                fast.
              </p>
            </div>

            <div className="space-y-5">
              {(localError || error) && (
                <div className="text-red-500 text-sm text-center">
                  {localError || error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Number"
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={e => handleChange('password', e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`h-12 pr-10 ${
                      !passwordsMatch && formData.confirmPassword
                        ? 'border-red-500'
                        : ''
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}

          {/* Password Rules */}
          {passwordValue.length > 0 && (
            <div className="mt-3 bg-gray-50 border p-3 rounded-lg">

              <div className="flex items-center gap-2 mb-2">
                {/.{8,}/.test(passwordValue) ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
                <span
                  className={
                    /.{8,}/.test(passwordValue) ? "text-green-600" : "text-red-700"
                  }
                >
                  Minimum 8 characters
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                {/[A-Z]/.test(passwordValue) ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
                <span
                  className={
                    /[A-Z]/.test(passwordValue) ? "text-green-600" : "text-red-700"
                  }
                >
                  At least one uppercase letter
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/[0-9&@%]/.test(passwordValue) ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
                <span
                  className={
                    /[0-9&@%]/.test(passwordValue)
                      ? "text-green-600"
                      : "text-red-700"
                  }
                >
                  At least one number or symbol (&, @, %)
                </span>
              </div>
            </div>
          )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    value={formData.confirmPassword}
                    onChange={e =>
                      handleChange('confirmPassword', e.target.value)
                    }
                    onKeyPress={handleKeyPress}
                    className={`h-12 pr-10 ${
                      !passwordsMatch && formData.confirmPassword
                        ? 'border-red-500'
                        : ''
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {!passwordsMatch && formData.confirmPassword && (
                  <p className="text-xs text-red-600">
                    Passwords do not match.
                  </p>
                )}
              </div>

              <Button
  onClick={handleSubmit}
  disabled={signupLoading}
  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white"
>
  {signupLoading ? (
    <div className="flex items-center gap-2">
      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      Creating Account...
    </div>
  ) : (
    'Create Account'
  )}
</Button>

              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{' '}
                </span>
                <button
                  onClick={handleLogin}
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
