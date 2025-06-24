
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import WelcomeHeader from "@/components/WelcomeHeader";
import ServiceSelector from "@/components/ServiceSelector";
import PlanSelector from "@/components/PlanSelector";
import DeploymentModal from "@/components/DeploymentModal";

export type ServiceType = "rdp" | "vps" | null;
export type Plan = {
  id: string;
  ram: string;
  cpu: string;
  storage: string;
  os: string;
  priceUSD: string;
  priceINR: string;
  support: string;
};

const Index = () => {
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userName = "Alex Johnson"; // This would come from auth context in a real app

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsDeployModalOpen(true);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="flex h-screen relative z-10">
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'} lg:ml-64`}>
          <div className="p-6 lg:p-8 max-w-7xl mx-auto">
            <WelcomeHeader userName={userName} />
            
            <div className="mt-8">
              {!selectedService ? (
                <ServiceSelector onServiceSelect={handleServiceSelect} />
              ) : (
                <PlanSelector 
                  serviceType={selectedService}
                  onPlanSelect={handlePlanSelect}
                  onBack={handleBackToServices}
                />
              )}
            </div>
          </div>
        </main>
      </div>

      <DeploymentModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
        plan={selectedPlan}
        serviceType={selectedService}
      />
    </div>
  );
};

export default Index;
