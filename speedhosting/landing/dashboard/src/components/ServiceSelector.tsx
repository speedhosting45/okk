
import { Monitor, Server } from "lucide-react";
import { ServiceType } from "@/pages/Index";

interface ServiceSelectorProps {
  onServiceSelect: (service: ServiceType) => void;
}

const ServiceSelector = ({ onServiceSelect }: ServiceSelectorProps) => {
  const services = [
    {
      id: "rdp" as const,
      title: "RDP Hosting",
      description: "Remote Desktop Protocol for Windows environments",
      icon: Monitor,
      features: ["Windows 10/11 Pro", "Full Admin Access", "24/7 Support", "Instant Setup"],
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      id: "vps" as const,
      title: "VPS Hosting",
      description: "Virtual Private Servers for maximum flexibility",
      icon: Server,
      features: ["Full Root Access", "Custom OS", "SSD Storage", "99.9% Uptime"],
      gradient: "from-neon-purple to-neon-pink"
    }
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold font-orbitron mb-4">
          Choose Your <span className="gradient-text">Hosting Service</span>
        </h2>
        <p className="text-gray-400 text-lg">Select the perfect solution for your needs</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          
          return (
            <div
              key={service.id}
              onClick={() => onServiceSelect(service.id)}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.gradient} mb-6`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold font-orbitron mb-3 group-hover:text-neon-blue transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} rounded-lg text-white font-semibold transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                    Select {service.title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSelector;
