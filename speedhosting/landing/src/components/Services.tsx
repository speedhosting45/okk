
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HardDrive, RefreshCw, Headphones, Users, Server, ShoppingCart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: HardDrive,
      title: "Extra Storage",
      description: "Scale your storage as needed with premium SSD drives",
      price: "₹120 per 100GB",
      features: ["High-speed SSD", "Instant provisioning", "Flexible scaling"]
    },
    {
      icon: RefreshCw,
      title: "OS Reinstallation",
      description: "Fresh OS installation with automated setup",
      price: "Free for all plans",
      features: ["Windows 9-11 Pro", "Linux distributions", "Custom images"]
    },
    {
      icon: Headphones,
      title: "Remote Support",
      description: "Expert technical assistance when you need it",
      price: "24/7 availability",
      features: ["Screen sharing", "Direct assistance", "Problem resolution"]
    }
  ];

  const categories = [
    {
      icon: Server,
      title: "RDP Plans",
      description: "Remote Desktop solutions for seamless access",
      color: "from-neon-blue to-blue-600"
    },
    {
      icon: HardDrive,
      title: "VPS Hosting",
      description: "Virtual Private Servers with full control",
      color: "from-neon-purple to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Bulk Orders",
      description: "Special pricing for multiple instances",
      color: "from-neon-green to-green-600"
    },
    {
      icon: Users,
      title: "Reseller Options",
      description: "White-label solutions for your business",
      color: "from-neon-pink to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Add-on Services */}
        <div className="mb-20">
          <div className="text-center mb-16 section-animation">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 glow-text text-white">
              Add-on <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enhance your hosting experience with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="card-hover neon-border bg-card/80 backdrop-blur-sm section-animation"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-neon-blue" />
                  </div>
                  <CardTitle className="font-orbitron text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-400">{service.description}</p>
                  <div className="text-lg font-semibold text-neon-green">
                    {service.price}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-neon-blue transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <div className="text-center mb-16 section-animation">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 glow-text text-white">
              Service <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of hosting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.title}
                className="card-hover bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700 hover:border-slate-600 section-animation"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center opacity-80`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
