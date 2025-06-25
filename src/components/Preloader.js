import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-cyber-neon via-cyber-cyan to-cyber-purple rounded-full flex items-center justify-center pulse-glow">
            <span className="text-2xl font-bold text-white">MC</span>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-google-red rounded-full animate-bounce-slow"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-google-yellow rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold gradient-text"
        >
          Manish Connects
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-cyber-neon text-center max-w-md"
        >
          AI Enthusiast • UI Designer • Developer
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="w-80 h-2 bg-dark-200 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-neon to-cyber-cyan"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-sm text-dark-400"
        >
          Loading... {Math.round(progress)}%
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyber-neon rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>

        {/* Cyber Grid Background */}
        <div className="absolute inset-0 cyber-bg opacity-20 -z-10"></div>
      </div>
    </div>
  );
};

export default Preloader; 