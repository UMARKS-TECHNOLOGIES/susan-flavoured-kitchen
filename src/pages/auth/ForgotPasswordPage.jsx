import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import Logo from "@/assets/Logo.jpeg";
import Abt2 from "@/assets/Abt2.svg";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleSubmit = async () => {
        // Validation
        if (!email) {
            alert('Please enter your email address');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            // Replace with your actual password reset API
            console.log('Sending reset link to:', email);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success
            setIsEmailSent(true);

        } catch (error) {
            console.error('Password reset error:', error);
            alert('Failed to send reset link. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToLogin = () => {
        window.location.href = '/login';
    };
    const handleResetPassword = () => {
        window.location.href = '/resetpassword';
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
    return (
        <div className='min-h-screen px-10 bg-[#fffcfa]'>
            {/* Logo */}
            <div className="py-5">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-20"
                />
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
                        <h1 className="text-5xl font-bold mb-4">Forgot Password?</h1>
                        <p className="text-xl text-center max-w-md leading-relaxed">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <div className="lg:hidden mb-8 flex justify-center">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-12"
                            />
                        </div>

                        {/* Mobile Heading */}
                        <div className="lg:hidden mb-8 text-center">
                            <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
                            <p className="text-gray-600">
                                Enter your email address and we'll send you a link to reset your password.
                            </p>
                        </div>

                        {isEmailSent ? (
                            // Success Message
                            <div className="text-center space-y-6">
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

                                <h2 className="text-2xl font-bold">Check Your Email!</h2>

                                <p className="text-gray-600">
                                    We've sent a password reset link to <strong>{email}</strong>
                                </p>

                                <p className="text-sm text-gray-500">
                                    Didn't receive the email? Check your spam folder or try again.
                                </p>

                                <Button
                                    onClick={handleResetPassword}
                                    className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium"
                                >
                                    Back to Log In
                                </Button>
                            </div>
                        ) : (
                            // Reset Form
                            <div className="space-y-6">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="h-12"
                                        autoFocus
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium disabled:opacity-50"
                                >
                                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                                </Button>

                                {/* Back to Login Link */}
                                <div className="text-center">
                                    <button
                                        onClick={handleBackToLogin}
                                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 font-medium"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Go back to Log In
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage