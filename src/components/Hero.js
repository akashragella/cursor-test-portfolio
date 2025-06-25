import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, ArrowDown, Sparkles } from 'lucide-react';

const Hero = ({ onMouseEnter, onMouseLeave }) => {
  const typingRef = useRef(null);

  useEffect(() => {
    const text = "AI Enthusiast, UI Designer and Developer";
    let index = 0;
    
    const typeWriter = () => {
      if (index < text.length) {
        typingRef.current.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-bg opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-google-blue rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-google-red rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-purple rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
            >
              <Sparkles className="w-5 h-5 text-cyber-neon" />
              <span className="text-cyber-neon font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Manish</span>
              <br />
              <span className="text-white">Ragella</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              <span ref={typingRef} className="typing-animation"></span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-400 mb-8 italic"
            >
              "Winners never quit, quitters never win."
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="btn-cyber bg-gradient-to-r from-cyber-neon to-cyber-cyan text-black px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyber-neon/25 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="btn-cyber border-2 border-cyber-neon text-cyber-neon px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-cyber-neon hover:text-black transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Let's Connect</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Avatar Container */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Avatar Placeholder */}
                <div className="w-80 h-80 bg-gradient-to-br from-cyber-neon via-cyber-cyan to-cyber-purple rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="w-72 h-72 bg-cyber-darker rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-google-blue to-google-green rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">MR</span>
                      </div>
                      <p className="text-cyber-neon font-medium">AI-Generated Avatar</p>
                      <p className="text-sm text-gray-400">Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 border-2 border-cyber-neon rounded-full"
                ></motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-cyber-cyan rounded-full"
                ></motion.div>

                {/* Tech Icons */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 left-8 w-8 h-8 bg-google-blue rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">AI</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-8 right-8 w-8 h-8 bg-google-red rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">UI</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-cyber-neon"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 