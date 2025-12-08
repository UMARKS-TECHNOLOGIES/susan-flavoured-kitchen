import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Check, X } from "lucide-react";
import Abt2 from "@/assets/Abt2.svg";
import Logo from "@/assets/Logo.jpeg";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasSpecialChar: false,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

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
      alert("Please fill in all fields");
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
      alert("Please meet all password requirements");
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
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Replace with your actual sign up API
      console.log("Creating account:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Account created successfully!");
      // Redirect to login or home
      window.location.href = "/login";
    } catch (error) {
      console.error("Sign up error:", error);
      alert("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    // console.log('Navigate to login');
    window.location.href = "/login";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="min-h-screen px-4 lg:px-10 bg-[#fffcfa]">
      {/* Logo */}
      <div className="py-5 flex justify-center lg:justify-start">
        <img src={Logo} alt="Logo" className="h-16 lg:h-20" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 min-h-[700px] lg:h-auto max-w-[90%] mx-auto rounded-lg overflow-hidden lg:overflow-visible pb-10">
        {/* Left Side - Image Section (Hero for Mobile) */}
        <div className="w-full lg:w-1/2 h-[250px] lg:h-auto relative rounded-2xl overflow-hidden order-1">
          <img
            src={Abt2}
            alt="Signup Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Welcome Text */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-6 lg:px-12 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
              Create Account
            </h1>
            <p className="text-base lg:text-xl max-w-md opacity-90 leading-relaxed">
              Join us and enjoy fresh, authentic meals delivered cleanly and
              fast.
            </p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:px-8 order-2">
          <div className="w-full max-w-md bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none border lg:border-none border-gray-100">
            {/* Form */}
            <div className="space-y-4 lg:space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  {" "}
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
              </div>

              {/* Email Field */}
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
                  onChange={(e) => handleChange("email", e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
              </div>

              {/* Password Field */}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`h-12 pr-10 bg-gray-50/50 border-gray-200 ${
                      !passwordsMatch && formData.confirmPassword
                        ? "border-red-500"
                        : ""
                    }`}
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

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    onKeyPress={handleKeyPress}
                    className={`h-12 pr-10 bg-gray-50/50 border-gray-200 ${
                      !passwordsMatch && formData.confirmPassword
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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

              {/* Password Requirements */}
              {formData.password && (
                <div className="space-y-1 text-xs mt-2 p-3 bg-gray-50 rounded-lg">
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.minLength
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {passwordValidation.minLength ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <X className="w-3.5 h-3.5" />
                    )}
                    <span>Minimum 8 characters</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.hasUppercase
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {passwordValidation.hasUppercase ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <X className="w-3.5 h-3.5" />
                    )}
                    <span>At least one uppercase letter</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.hasSpecialChar
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {passwordValidation.hasSpecialChar ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <X className="w-3.5 h-3.5" />
                    )}
                    <span>At least one number or special symbol (!,@,#,$)</span>
                  </div>
                </div>
              )}

              {/* Create Account Button */}
              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold rounded-lg shadow-md transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              {/* Login Link */}
              <div className="text-center pt-2">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                </span>
                <button
                  onClick={handleLogin}
                  className="text-sm text-orange-500 hover:text-orange-600 font-bold transition-colors ml-1"
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
