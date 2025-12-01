import React, { useState } from 'react'
import Logo from "@/assets/Logo.jpeg";
import Abt2 from "@/assets/Abt2.svg";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';

const ResetPasswordPage = () => {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validatePassword = () => {
        // Check if passwords are filled
        if (!formData.newPassword || !formData.confirmPassword) {
            alert('Please fill in both password fields');
            return false;
        }

        // Check if passwords match
        if (formData.newPassword !== formData.confirmPassword) {
            alert('Passwords do not match');
            return false;
        }

        // Check password length
        if (formData.newPassword.length < 8) {
            alert('Password must be at least 8 characters long');
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        if (!validatePassword()) return;

        setIsLoading(true);

        try {
            // Replace with your actual password reset API
            console.log('Resetting password...');

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success
            setIsPasswordReset(true);

        } catch (error) {
            console.error('Password reset error:', error);
            alert('Failed to reset password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoToLogin = () => {
        // console.log('Navigate to login');
        window.location.href = '/login';
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen px-10 bg-[#fffcfa]">
            {/* Logo */}
            <div className="py-5">
                <img src={Logo} alt="Logo" className="h-20" />
            </div>

            {/* Reset Password Form */}
            <div className="h-[500px] flex">
                {/* left side - Image Section */}
                <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative rounded-lg"
                    style={{
                        backgroundImage: `url(${Abt2})`,
                    }}>
                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

                    {/* welcome text */}
                    <div className="relative z-10 flex flex-col items-center justify-center w-full text-white px-12">
                        <h1 className="text-5xl font-bold mb-4">Reset Password?</h1>
                        <p className="text-xl text-center max-w-md leading-relaxed">
                            Enter your new password.
                        </p>
                    </div>
                </div>
                {/* Right Side - Form Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <div className="lg:hidden mb-8 flex justify-center">
                            <img src={Logo} alt="Logo" className="h-12" />
                        </div>
                        {/* Mobile Heading */}
                        <div className="lg:hidden mb-8 text-center">
                            <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
                            <p className="text-gray-600">
                                Enter your new password.
                            </p>
                        </div>

                        {isPasswordReset ? (
                            // Success Message
                            <div className="text-center space-y-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>

                                <h2 className="text-2xl font-bold">Password Updated</h2>

                                <p className="text-gray-600">
                                    Your password has been successfully reset. You can now log in with your new password.
                                </p>

                                <Button
                                    onClick={handleGoToLogin}
                                    className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium"
                                >
                                    Log In
                                </Button>
                            </div>
                        ) : (
                            // Reset Password Form
                            <div className="space-y-6">
                                {/* New Password Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="newPassword" className="text-sm font-medium">
                                        New password
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="newPassword"
                                            type={showNewPassword ? 'text' : 'password'}
                                            placeholder="Enter New Password"
                                            value={formData.newPassword}
                                            onChange={(e) => handleChange('newPassword', e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="h-12 pr-10"
                                            autoFocus
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showNewPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                                        Confirm Password
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            placeholder="Confirm New Password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="h-12 pr-10"
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
                                </div>

                                {/* Password Requirements */}
                                <div className="text-xs text-gray-500">
                                    <p>Password must be at least 8 characters long</p>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium disabled:opacity-50"
                                >
                                    {isLoading ? 'Resetting...' : 'Reset Password'}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage