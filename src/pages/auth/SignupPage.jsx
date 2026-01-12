import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import Abt2 from '@/assets/Abt2.svg';
import Logo from '@/assets/Logo.jpeg';

import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';
import usePasswordValidation from '@/hooks/usePasswordValidation';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, loading, error } = useAuth();
  const [localError, setLocalError] = useState(null);
  const navigate = useNavigate();

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
      !validations.hasSpecialChar
    ) {
      alert('Please meet all password requirements');
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

  return (
    <div className="min-h-screen px-10 bg-[#fffcfa]">
      <div className="py-5">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>
      <div className="h-[500px] flex">
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative rounded-lg"
          style={{
            backgroundImage: `url(${Abt2})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full text-white px-12">
            <h1 className="text-5xl font-bold mb-4">Create Account</h1>
            <p className="text-xl text-center max-w-md leading-relaxed">
              Join us and enjoy fresh, authentic meals delivered cleanly and
              fast.
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

                {formData.password && (
                  <div className="space-y-1 text-xs mt-2">
                    <div
                      className={`flex items-center gap-1 ${
                        validations.minLength
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {validations.minLength ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3" />
                      )}
                      <span>Minimum 8 characters</span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        validations.hasUppercase
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {validations.hasUppercase ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3" />
                      )}
                      <span>At least one uppercase letter</span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        validations.hasSpecialChar
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {validations.hasSpecialChar ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3" />
                      )}
                      <span>
                        At least one number or special symbol (!,@,#,$)
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
                disabled={loading}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
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
