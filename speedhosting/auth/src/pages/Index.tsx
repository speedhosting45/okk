
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import AuthForm from '@/components/AuthForm';

const Index = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <AnimatedBackground />
      
      {/* Brand Logo/Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              ETERNAL AURA
            </span>
          </h1>
          <p className="text-gray-400 text-sm font-light tracking-wider">
            PREMIUM VPS HOSTING SOLUTIONS
          </p>
        </div>
      </div>

      {/* Main Auth Form */}
      <div className="relative z-10 w-full max-w-md animate-fade-in">
        <AuthForm />
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-gray-500 text-xs text-center">
          © 2025 Eternal Aura. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
