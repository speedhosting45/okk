
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Shield } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      ram: "4GB",
      cores: "2 Core",
      price: "$1.4",
      priceInr: "₹130",
      popular: false,
      features: [
        "200GB Default Storage",
        "Windows 9-11 Pro Available",
        "24/7 Support",
        "₹120 per extra 100GB",
        "Full Admin Access",
        "99.9% Uptime SLA"
      ]
    },
    {
      name: "Professional",
      ram: "8GB",
      cores: "2 Core",
      price: "$1.9",
      priceInr: "₹160",
      popular: true,
      features: [
        "200GB Default Storage",
        "Windows 9-11 Pro Available",
        "24/7 Priority Support",
        "₹120 per extra 100GB",
        "Full Admin Access",
        "99.9% Uptime SLA",
        "Free OS Reinstallation"
      ]
    },
    {
      name: "Business",
      ram: "16GB",
      cores: "4 Core",
      price: "$3.4",
      priceInr: "₹300",
      popular: false,
      features: [
        "200GB Default Storage",
        "Windows 9-11 Pro Available",
        "24/7 Premium Support",
        "₹120 per extra 100GB",
        "Full Admin Access",
        "99.9% Uptime SLA",
        "Free OS Reinstallation",
        "Performance Monitoring"
      ]
    },
    {
      name: "Enterprise",
      ram: "32GB",
      cores: "8 Core",
      price: "$4.4",
      priceInr: "₹420",
      popular: false,
      features: [
        "200GB Default Storage",
        "Windows 9-11 Pro Available",
        "24/7 Dedicated Support",
        "₹120 per extra 100GB",
        "Full Admin Access",
        "99.9% Uptime SLA",
        "Free OS Reinstallation",
        "Performance Monitoring",
        "Custom Configurations"
      ]
    }
  ];

  return (
    <section id="plans" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 section-animation">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 glow-text text-white">
            Choose Your <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Power</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select the perfect VPS plan for your needs. All plans include premium features and 24/7 support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative card-hover neon-border bg-card/80 backdrop-blur-sm ${
                plan.popular ? 'ring-2 ring-neon-blue scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-orbitron text-xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-3xl font-bold text-neon-blue mb-1">
                  {plan.ram} RAM | {plan.cores}
                </div>
                <div className="text-4xl font-bold text-white">
                  {plan.price}
                  <span className="text-lg text-gray-400 ml-2">/ month</span>
                </div>
                <div className="text-lg text-neon-green font-semibold">
                  {plan.priceInr} / month
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 font-semibold py-3 rounded-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green text-white shadow-lg hover:shadow-neon-blue/25 transform hover:scale-105'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-neon-blue'
                  }`}
                >
                  {plan.popular ? <Zap className="w-4 h-4 mr-2" /> : <Shield className="w-4 h-4 mr-2" />}
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 section-animation">
          <p className="text-gray-400 mb-4">Need a custom configuration?</p>
          <Button variant="outline" size="lg" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-slate-900">
            Contact for Custom Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
