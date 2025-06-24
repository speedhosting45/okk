
import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!isLogin && !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!isLogin && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isLogin && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!isLogin && !formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLogin ? 'Login attempted' : 'Registration attempted', formData);
      // Here you would typically make an API call
    }, 2000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab Switcher */}
      <div className="glass-dark rounded-t-2xl p-1 mb-0">
        <div className="flex">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              isLogin
                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg neon-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              !isLogin
                ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg neon-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Register
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="glass-dark rounded-b-2xl rounded-t-none p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2 animate-fade-in">
            {isLogin ? 'Welcome Back to Eternal Aura' : 'Create Your Eternal Aura Account'}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name (Register only) */}
          {!isLogin && (
            <div className={`space-y-2 ${!isLogin ? 'animate-slide-in-right' : ''}`}>
              <Label htmlFor="fullName" className="text-gray-300 font-medium">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`pl-12 bg-white/5 border-0 neon-border rounded-xl h-12 text-white placeholder-gray-400 focus:neon-glow transition-all duration-300 ${
                    errors.fullName ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-400 text-sm animate-fade-in">{errors.fullName}</p>
              )}
            </div>
          )}

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 font-medium">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`pl-12 bg-white/5 border-0 neon-border rounded-xl h-12 text-white placeholder-gray-400 focus:neon-glow transition-all duration-300 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm animate-fade-in">{errors.email}</p>
            )}
          </div>

          {/* Phone Number (Register only) */}
          {!isLogin && (
            <div className={`space-y-2 ${!isLogin ? 'animate-slide-in-right' : ''}`}>
              <Label htmlFor="phone" className="text-gray-300 font-medium">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`pl-12 bg-white/5 border-0 neon-border rounded-xl h-12 text-white placeholder-gray-400 focus:neon-glow transition-all duration-300 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-sm animate-fade-in">{errors.phone}</p>
              )}
            </div>
          )}

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300 font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`pl-12 pr-12 bg-white/5 border-0 neon-border rounded-xl h-12 text-white placeholder-gray-400 focus:neon-glow transition-all duration-300 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm animate-fade-in">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password (Register only) */}
          {!isLogin && (
            <div className={`space-y-2 ${!isLogin ? 'animate-slide-in-right' : ''}`}>
              <Label htmlFor="confirmPassword" className="text-gray-300 font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`pl-12 pr-12 bg-white/5 border-0 neon-border rounded-xl h-12 text-white placeholder-gray-400 focus:neon-glow transition-all duration-300 ${
                    errors.confirmPassword ? 'border-red-500' : ''
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm animate-fade-in">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed animate-glow-pulse"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                <span>{isLogin ? 'Logging in...' : 'Creating Account...'}</span>
              </div>
            ) : (
              isLogin ? 'Log In' : 'Sign Up'
            )}
          </Button>

          {/* Additional Links */}
          {isLogin && (
            <div className="text-center space-y-4">
              <button
                type="button"
                className="text-neon-blue hover:text-neon-purple transition-colors duration-300 text-sm"
              >
                Forgot Password?
              </button>
              <p className="text-gray-400 text-sm">
                New here?{' '}
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-neon-blue hover:text-neon-purple transition-colors duration-300 font-medium"
                >
                  Create an account
                </button>
              </p>
            </div>
          )}

          {!isLogin && (
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-neon-blue hover:text-neon-purple transition-colors duration-300 font-medium"
                >
                  Sign in here
                </button>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
