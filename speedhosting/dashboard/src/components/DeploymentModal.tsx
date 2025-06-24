
import { X, Server, Cpu, HardDrive, Shield } from "lucide-react";
import { ServiceType, Plan } from "@/pages/Index";

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
  serviceType: ServiceType;
}

const DeploymentModal = ({ isOpen, onClose, plan, serviceType }: DeploymentModalProps) => {
  if (!isOpen || !plan) return null;

  const serviceTitle = serviceType === "rdp" ? "RDP Hosting" : "VPS Hosting";

  const handleDeploy = () => {
    // This would typically handle the actual deployment process
    console.log("Deploying plan:", plan);
    alert("Deployment initiated! You will receive confirmation shortly.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative glass-card p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
            <Server size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold font-orbitron mb-2">
            Deploy <span className="gradient-text">{serviceTitle}</span>
          </h2>
          <p className="text-gray-400">Confirm your server configuration</p>
        </div>

        {/* Plan Details */}
        <div className="space-y-4 mb-6">
          <div className="glass-card p-4 border border-neon-blue/30">
            <h3 className="font-semibold mb-3 text-neon-blue">Configuration</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Cpu size={16} className="text-gray-400" />
                  <span className="text-sm">RAM & CPU</span>
                </div>
                <span className="text-sm font-medium">{plan.ram} | {plan.cpu}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <HardDrive size={16} className="text-gray-400" />
                  <span className="text-sm">Storage</span>
                </div>
                <span className="text-sm font-medium">{plan.storage}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-gray-400" />
                  <span className="text-sm">Operating System</span>
                </div>
                <span className="text-sm font-medium">{plan.os}</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 border border-neon-green/30">
            <h3 className="font-semibold mb-3 text-neon-green">Pricing</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Monthly Cost</span>
              <div className="text-right">
                <div className="text-lg font-bold font-orbitron gradient-text">
                  {plan.priceUSD} / {plan.priceINR}
                </div>
                <div className="text-xs text-gray-400">Billed monthly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDeploy}
            className="flex-1 deploy-btn"
          >
            Deploy Server
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Setup time: ~5-10 minutes • {plan.support}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeploymentModal;
