
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "High-performance SSD storage and optimized network infrastructure"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 technical support from experienced professionals"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Top-tier hardware and software solutions for optimal performance"
    },
    {
      icon: Clock,
      title: "Instant Setup",
      description: "Get your VPS ready in minutes with automated provisioning"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multiple data center locations for optimal connectivity"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 section-animation">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 glow-text text-white">
            About <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">Eternal Aura</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Eternal Aura is committed to providing affordable, fast, and reliable RDP/VPS hosting 
              with full customization, built for developers, traders, and power users who demand excellence.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              With years of experience in the hosting industry, we understand the unique requirements 
              of modern applications and provide solutions that scale with your business. Our infrastructure 
              is designed for performance, reliability, and security, ensuring your projects run smoothly 24/7.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="card-hover bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border-slate-700 hover:border-neon-blue/50 section-animation"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center section-animation">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon-blue font-orbitron">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon-green font-orbitron">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon-purple font-orbitron">5000+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon-pink font-orbitron">3</div>
            <div className="text-gray-400">Data Centers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
