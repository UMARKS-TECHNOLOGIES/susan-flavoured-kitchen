import React, { useState } from 'react';
import Abt2 from '@/assets/Abt2.svg';
import Logo from '@/assets/Logo.webp';
import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/shared/ErrorToastProvider';
import LoginSubmitHandler from '@/handlers/loginSubmitHandler';
import LoginUI from '@/componentUIs/LoginUI';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [localError, setLocalError] = useState(null);
  const { showSuccess, showError } = useToast();

  const handleChange = (field, value) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = LoginSubmitHandler(
    setLocalError,
    formData,
    setSubmitting,
    login,
    showSuccess,
    navigate,
    showError
  );

  const handleForgotPassword = () => navigate('/forgotpassword');
  const handleSignUp = () => navigate('/signup');
  const handleKeyPress = e => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <LoginUI
      Abt2={Abt2}
      Logo={Logo}
      localError={localError}
      formData={formData}
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      handleForgotPassword={handleForgotPassword}
      handleSubmit={handleSubmit}
      submitting={submitting}
      handleSignUp={handleSignUp}
    />
  );
};

export default LoginPage;
