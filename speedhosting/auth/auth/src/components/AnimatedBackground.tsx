
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['#00d4ff', '#9333ea', '#ec4899', '#06b6d4'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        y: particle.y < -10 ? window.innerHeight + 10 : particle.y - particle.speed,
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle absolute rounded-full animate-sparkle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
      
      {/* Additional floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-neon-purple/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-neon-pink/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default AnimatedBackground;
