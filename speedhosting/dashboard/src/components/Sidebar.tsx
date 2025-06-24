
import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Server, History, HardDrive, Headphones, User } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "services", label: "My Services", icon: Server },
    { id: "history", label: "Purchase History", icon: History },
    { id: "storage", label: "Add Storage", icon: HardDrive },
    { id: "support", label: "Support", icon: Headphones },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full glass-nav z-50 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      } lg:w-64`}>
        
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${isOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-300`}>
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold font-orbitron">EA</span>
              </div>
              <div className="hidden lg:block">
                <h1 className="text-lg font-bold font-orbitron gradient-text">Eternal Aura</h1>
                <p className="text-xs text-gray-400">Premium Hosting</p>
              </div>
            </div>
            
            <button
              onClick={onToggle}
              className="lg:hidden p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 neon-glow' 
                    : 'hover:bg-white/5 hover:border-white/10'
                } ${isOpen ? '' : 'justify-center lg:justify-start'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon 
                  size={20} 
                  className={`${isActive ? 'text-neon-blue' : 'text-gray-400 group-hover:text-white'} transition-colors`}
                />
                <span className={`${
                  isOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'
                } transition-opacity duration-300 ${
                  isActive ? 'text-white font-medium' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className={`glass-card p-3 ${isOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity duration-300`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div className="hidden lg:block flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Alex Johnson</p>
                <p className="text-xs text-gray-400 truncate">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
