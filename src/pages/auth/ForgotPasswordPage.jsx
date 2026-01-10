import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoArrowBack } from "react-icons/io5";
import Logo from "@/assets/Logo.jpeg";
import Abt2 from "@/assets/Abt2.svg";
import { useAuth } from "../../store/useAuth";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  const { requestPasswordReset } = useAuth(); // ✅ Use store
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const res = await requestPasswordReset(email); // ✅ Store handles backend

      if (res.status) {
        setIsEmailSent(true);

        // Wait 1 second to show success modal, then navigate
        setTimeout(() => {
          navigate(`/reset-password?email=${encodeURIComponent(email)}`);
        }, 1000);
      } else {
        setError(res.message || "Failed to send reset link");
      }
    } catch (err) {
      console.error("Password reset error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  const handleKeyPress = (e) => {
  if (e.key === "Enter") handleSubmit();
};


  return (
    <div className="min-h-screen px-4 lg:px-10 bg-[#fffcfa]">
      {/* Logo */}
      <div className="py-5 flex justify-start">
        <img src={Logo} alt="Logo" className="h-16 lg:h-20" />
      </div>

      {/* Back Button */}
      <div className="mb-4 flex justify-start">
        <button
          onClick={() => window.history.back()}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <IoArrowBack className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 min-h-[600px] lg:max-h-[400px] w-full lg:max-w-[90%] mx-auto rounded-lg overflow-hidden lg:overflow-visible pb-10">
        {/* Left Side - Image Section */}
        <div className="w-full lg:w-1/2 h-[250px] lg:h-auto relative rounded-2xl overflow-hidden order-1">
          <img
            src={Abt2}
            alt="Reset Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-6 lg:px-12 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
              Forgot Password?
            </h1>
            <p className="text-base lg:text-xl max-w-md opacity-90 leading-relaxed">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:px-8 order-2">
          <div className="w-full max-w-lg bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none border lg:border-none border-gray-100">
            {isEmailSent ? (
              // Success Modal
              <div className="text-center space-y-6 p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Email Sent!
                </h2>
                <p className="text-gray-600">
                  Redirecting to reset password page...
                </p>
              </div>
            ) : (
              // Reset Form
              <div className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="h-12 bg-gray-50/50 border-gray-200"
                    autoFocus
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold rounded-lg shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Verifying..." : "Send Reset Link"}
                </Button>

                <div className="text-center">
                  <button
                    onClick={handleBackToLogin}
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 font-bold transition-colors"
                  >
                    <IoArrowBack className="w-4 h-4" />
                    Go back to Log In
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
