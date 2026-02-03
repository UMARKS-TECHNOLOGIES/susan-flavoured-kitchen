import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import Abt2 from '@/assets/Abt2.svg';
import Logo from '@/assets/Logo.jpeg';
import { useNavigate } from 'react-router-dom';
import usePasswordValidation from '@/hooks/usePasswordValidation';
import Modal from './Modal';

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(null);

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

  const handleSubmit = async () => {
    setErrorModal(null);

    if (!formData.name || !formData.email || !formData.password) {
      setErrorModal('Please fill all required fields.');
      return;
    }

    if (!passwordsMatch) {
      setErrorModal('Passwords do not match.');
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(
        'https://susanfalvoredkitchen-backend-23c5.onrender.com/api/v1/user/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Account creation failed');
      }

      setSuccessModal(true);
    } catch (err) {
      setErrorModal(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="min-h-screen px-4 lg:px-10 bg-[#fffcfa]">
      {/* Logo */}
      <div className="py-5 flex justify-start">
        <img src={Logo} alt="Logo" className="h-16 lg:h-20" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 min-h-[600px] w-full lg:max-w-[90%] mx-auto rounded-lg overflow-hidden lg:overflow-visible pb-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 h-[250px] lg:h-auto relative rounded-2xl overflow-hidden order-1">
          <img
            src={Abt2}
            alt="Signup Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-6 lg:px-12 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
              Create Account
            </h1>
            <p className="text-base lg:text-xl max-w-md opacity-90 leading-relaxed">
              Join us and enjoy fresh, authentic meals delivered cleanly and fast.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:px-8 order-2">
          <div className="w-full max-w-lg bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none border lg:border-none border-gray-100">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  value={formData.name}
                  placeholder="Enter Your Full Name"
                  onChange={e => handleChange('name', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input
                  value={formData.phone}
                  placeholder="Enter Your Phone Number"
                  onChange={e => handleChange('phone', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email Address eg user@gmail.com"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter a strong password"
                    value={formData.password}
                    onChange={e => handleChange('password', e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="h-12 pr-10 bg-gray-50/50 border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>

                {formData.password && (
                  <div className="text-xs space-y-1">
                    <div className={`flex gap-1 ${validations.minLength ? 'text-green-600' : 'text-gray-500'}`}>
                      {validations.minLength ? <Check size={12} /> : <X size={12} />} Min 8 characters
                    </div>
                    <div className={`flex gap-1 ${validations.hasUppercase ? 'text-green-600' : 'text-gray-500'}`}>
                      {validations.hasUppercase ? <Check size={12} /> : <X size={12} />} Uppercase letter
                    </div>
                    <div className={`flex gap-1 ${validations.hasSpecialChar ? 'text-green-600' : 'text-gray-500'}`}>
                      {validations.hasSpecialChar ? <Check size={12} /> : <X size={12} />} Number or symbol
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="confirm Your Password"
                  value={formData.confirmPassword}
                  onChange={e => handleChange('confirmPassword', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
                {!passwordsMatch && (
                  <p className="text-xs text-red-600">Passwords do not match</p>
                )}
              </div>

              <Button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold"
              >
                {submitting ? 'Creating Account...' : 'Create Account'}
              </Button>

              <div className="text-center">
                <span className="text-sm">Already have an account? </span>
                <button
                  onClick={() => navigate('/login')}
                  className="text-orange-500 font-bold"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={successModal}
        title="Account Created 🎉"
        onClose={() => navigate('/login')}
      >
        Your account has been created successfully. You can now log in.
      </Modal>

      <Modal
        open={!!errorModal}
        title="Signup Failed"
        onClose={() => setErrorModal(null)}
      >
        {errorModal}
      </Modal>
    </div>
  );
};

export default SignupPage;
