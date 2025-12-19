import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import Abt2 from '@/assets/Abt2.svg';
import Logo from '@/assets/Logo.jpeg';

import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';

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
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasSpecialChar: false,
    hasSpecialChar: false,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validate password in real-time
  useEffect(() => {
    const password = formData.password;
    setPasswordValidation({
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [formData.password]);

  // Check if passwords match
  useEffect(() => {
    if (formData.confirmPassword) {
      setPasswordsMatch(formData.password === formData.confirmPassword);
    } else {
      setPasswordsMatch(true);
    }
  }, [formData.password, formData.confirmPassword]);

  const validateForm = () => {
    // Check all fields are filled
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return false;
    }

    // Phone validation
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      alert("Please enter a valid phone number");
      return false;
    }

    // Password validation
    if (
      !passwordValidation.minLength ||
      !passwordValidation.hasUppercase ||
      !passwordValidation.hasSpecialChar
    ) {
      alert('Please meet all password requirements');
      return false;
    }

    // Passwords match
    if (!passwordsMatch) {
      alert("Passwords do not match");
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
      {/* Logo */}
      <div className="py-5">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>
      <div className="h-[500px] flex">
        {/* Left Side - Image Section */}
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative rounded-lg"
          style={{
            backgroundImage: `url(${Abt2})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

          {/* Welcome Text */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full text-white px-12">
            <h1 className="text-5xl font-bold mb-4">Create Account</h1>
            <p className="text-xl text-center max-w-md leading-relaxed">
              Join us and enjoy fresh, authentic meals delivered cleanly and
              fast.
            </p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 flex justify-center">
              <img src="/api/placeholder/150/60" alt="Logo" className="h-20" />
            </div>

            {/* Mobile Heading */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Create Account</h1>
              <p className="text-gray-600">
                Join us and enjoy fresh, authentic meals delivered cleanly and
                fast.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {(localError || error) && (
                <div className="text-red-500 text-sm text-center">
                  {localError || error}
                </div>
              )}
              {/* Name Field */}
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

              {/* Phone Field */}
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

              {/* Email Field */}
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

              {/* Password Field */}
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

                {/* Password Requirements */}
                {formData.password && (
                  <div className="space-y-1 text-xs mt-2">
                    <div
                      className={`flex items-center gap-1 ${
                        passwordValidation.minLength
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {passwordValidation.minLength ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3" />
                      )}
                      <span>Minimum 8 characters</span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        passwordValidation.hasUppercase
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {passwordValidation.hasUppercase ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3" />
                      )}
                      <span>At least one uppercase letter</span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        passwordValidation.hasSpecialChar
                          ? 'text-red-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {passwordValidation.hasSpecialChar ? (
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

              {/* Confirm Password Field */}
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

                {/* Password Match Error */}
                {!passwordsMatch && formData.confirmPassword && (
                  <p className="text-xs text-red-600">
                    Passwords do not match.
                  </p>
                )}
              </div>

              {/* Create Account Button */}
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>

              {/* Login Link */}
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
  );
};

export default SignupPage;

export default SignupPage;
