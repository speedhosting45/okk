
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Plans from '@/components/Plans';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections with animation class
    const animatedElements = document.querySelectorAll('.section-animation');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 -right-40 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Plans />
        <Services />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-orbitron text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                ETERNAL AURA
              </h3>
              <p className="text-gray-400 text-sm">
                Premium VPS & RDP hosting solutions for modern businesses and developers.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-neon-blue transition-colors">VPS Hosting</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">RDP Plans</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Bulk Orders</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Reseller Options</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-neon-blue transition-colors">24/7 Support</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Status Page</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@eternalaura.com</li>
                <li>Telegram: @eternalaura</li>
                <li>WhatsApp Support</li>
                <li>24/7 Live Chat</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Eternal Aura. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
