
import { Server, Activity } from "lucide-react";

interface WelcomeHeaderProps {
  userName: string;
}

const WelcomeHeader = ({ userName }: WelcomeHeaderProps) => {
  return (
    <div className="animate-fade-in-up">
      <div className="glass-card p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold font-orbitron mb-2">
              Welcome, <span className="gradient-text">{userName}</span> 👋
            </h1>
            <p className="text-gray-400 text-lg">Ready to deploy your next server?</p>
          </div>
          
          <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row gap-4">
            <div className="glass-card p-4 border border-neon-blue/30 min-w-[150px]">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-neon-blue/20 rounded-lg">
                  <Server size={20} className="text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Active Services</p>
                  <p className="text-xl font-bold font-orbitron">2</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-4 border border-neon-green/30 min-w-[150px]">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-neon-green/20 rounded-lg">
                  <Activity size={20} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-lg font-semibold text-neon-green">All Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
