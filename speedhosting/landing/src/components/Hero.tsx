
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 glow-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
            ETERNAL AURA
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 font-light">
            Premium VPS & RDP Hosting
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Affordable, fast, and reliable hosting solutions with full customization, 
            built for developers, traders, and power users who demand excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105"
            >
              View Plans
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              Contact Support
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
              <span>Instant Setup</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-neon-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
