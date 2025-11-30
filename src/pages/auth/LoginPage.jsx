import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import Abt2 from "@/assets/Abt2.svg";
import Logo from "@/assets/Logo.jpeg";



const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        // Validation
        if (!formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            // Replace with your actual login API
            console.log('Logging in:', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Handle successful login
            alert('Login successful!');
            // Redirect to home or dashboard
            // window.location.href = '/';

        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = () => {
        window.location.href = '/forgotpassword';
    };

    const handleSignUp = () => {
        console.log('Navigate to sign up');
        // window.location.href = '/signup';
    };

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
                    className="hidden lg:flex lg:w-1/2 bg-cover  bg-center relative"
                    style={{
                        backgroundImage: `url(${Abt2})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>



                    {/* Welcome Text */}
                    <div className="relative z-10 flex flex-col items-center justify-center w-full text-white px-12">
                        <h1 className="text-5xl font-bold mb-4">Log In</h1>
                        <p className="text-xl text-center max-w-md">
                            Welcome back! Please sign in to continue.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <div className="lg:hidden mb-8 flex justify-center">
                            <img
                                src="/api/placeholder/150/60"
                                alt="Logo"
                                className="h-12"
                            />
                        </div>

                        {/* Mobile Heading */}
                        <div className="lg:hidden mb-8 text-center">
                            <h1 className="text-3xl font-bold mb-2">Log In</h1>
                            <p className="text-gray-600">Welcome back! Please sign in to continue.</p>
                        </div>

                        {/* Form */}
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
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
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
                                        placeholder="Enter Your Password"
                                        value={formData.password}
                                        onChange={(e) => handleChange('password', e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="h-12 pr-10"
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
                            </div>

                            {/* Forgot Password Link */}
                            <div className="flex justify-end">
                                <button
                                    onClick={handleForgotPassword}
                                    className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <Button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium disabled:opacity-50"
                            >
                                {isLoading ? 'Logging in...' : 'Log In'}
                            </Button>

                            {/* Sign Up Link */}
                            <div className="text-center">
                                <span className="text-sm text-gray-600">Don't have an account? </span>
                                <button
                                    onClick={handleSignUp}
                                    className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage