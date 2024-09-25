import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number,
  x: number,
  y: number,
  size: number
}

const generateRandomParticles = (count: number, width: number, height: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() + 1,
  }));
};

export const Particles = ({ count = 50 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setParticles(generateRandomParticles(count, width, height));
    };

    handleResize(); // Initialize particles on mount

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{ x: particle.x, y: particle.y }}
          animate={{
            x: [
              particle.x,
              particle.x + (Math.random() * 20 - 10),
              particle.x + (Math.random() * 20 - 10),
            ],
            y: [
              particle.y,
              particle.y + (Math.random() * 20 - 10),
              particle.y + (Math.random() * 20 - 10),
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: Math.random() * 3 + 2,
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            position: 'absolute',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};