
import { ArrowLeft, Cpu, HardDrive, Shield, Clock } from "lucide-react";
import { ServiceType, Plan } from "@/pages/Index";

interface PlanSelectorProps {
  serviceType: ServiceType;
  onPlanSelect: (plan: Plan) => void;
  onBack: () => void;
}

const PlanSelector = ({ serviceType, onPlanSelect, onBack }: PlanSelectorProps) => {
  const plans: Plan[] = [
    {
      id: "plan-4gb",
      ram: "4GB",
      cpu: "2 Core",
      storage: "200GB SSD",
      os: "Windows 10/11 Pro",
      priceUSD: "$1.4",
      priceINR: "₹130",
      support: "24/7 Support"
    },
    {
      id: "plan-8gb",
      ram: "8GB",
      cpu: "2 Core",
      storage: "200GB SSD",
      os: "Windows 10/11 Pro",
      priceUSD: "$1.9",
      priceINR: "₹160",
      support: "24/7 Support"
    },
    {
      id: "plan-16gb",
      ram: "16GB",
      cpu: "4 Core",
      storage: "200GB SSD",
      os: "Windows 10/11 Pro",
      priceUSD: "$3.4",
      priceINR: "₹300",
      support: "24/7 Support"
    },
    {
      id: "plan-32gb",
      ram: "32GB",
      cpu: "8 Core",
      storage: "200GB SSD",
      os: "Windows 10/11 Pro",
      priceUSD: "$4.4",
      priceINR: "₹420",
      support: "24/7 Support"
    }
  ];

  const serviceTitle = serviceType === "rdp" ? "RDP Hosting" : "VPS Hosting";

  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mr-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold font-orbitron mb-4">
          Choose Your <span className="gradient-text">{serviceTitle}</span> Plan
        </h2>
        <p className="text-gray-400 text-lg">Select the perfect configuration for your needs</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className="plan-card group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
                  <Cpu size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold font-orbitron mb-2 group-hover:text-neon-blue transition-colors">
                  {plan.ram} RAM | {plan.cpu}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <HardDrive size={16} className="text-neon-blue" />
                  <span className="text-sm text-gray-300">{plan.storage}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Shield size={16} className="text-neon-green" />
                  <span className="text-sm text-gray-300">{plan.os}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} className="text-neon-purple" />
                  <span className="text-sm text-gray-300">{plan.support}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold font-orbitron gradient-text mb-1">
                  {plan.priceUSD} / {plan.priceINR}
                </div>
                <div className="text-sm text-gray-400">per month</div>
              </div>

              <button
                onClick={() => onPlanSelect(plan)}
                className="w-full deploy-btn"
              >
                Deploy Now
              </button>

              <div className="mt-4 text-xs text-gray-500">
                + Extra 100GB = ₹120/month
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelector;
