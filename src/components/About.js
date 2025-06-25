import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Palette, Clock, Target, Award } from 'lucide-react';

const About = () => {
  const timelineData = [
    {
      year: '2023',
      title: 'AI/ML Journey Begins',
      description: 'Started exploring AI and machine learning technologies',
      icon: Brain
    },
    {
      year: '2022',
      title: 'Web Development Focus',
      description: 'Dived deep into modern web development frameworks',
      icon: Code
    },
    {
      year: '2021',
      title: 'UI/UX Design Interest',
      description: 'Developed passion for creating beautiful user interfaces',
      icon: Palette
    },
    {
      year: '2020',
      title: 'Tech Journey Started',
      description: 'Began learning programming fundamentals',
      icon: Target
    }
  ];

  const focusAreas = [
    {
      title: 'AI/ML',
      description: 'Machine Learning, Neural Networks, AI Tools',
      icon: Brain,
      color: 'from-google-blue to-cyber-cyan'
    },
    {
      title: 'Web Development',
      description: 'Full-stack development, Modern frameworks',
      icon: Code,
      color: 'from-cyber-neon to-google-green'
    },
    {
      title: 'Freelancing',
      description: 'Client projects, Remote work, Consulting',
      icon: Award,
      color: 'from-google-yellow to-cyber-purple'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-bg opacity-5"></div>
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-cyber-purple rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-google-blue rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-neon to-cyber-cyan mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-neon">Who I Am</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm <span className="text-cyber-neon font-semibold">Manish Ragella</span> — an AI Enthusiast, UI Designer, and Developer passionate about creating intelligent, user-focused digital experiences.
              </p>
              <p>
                I blend creativity with cutting-edge tech to build sleek, interactive web interfaces and AI-powered solutions that make an impact.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a desire to solve real-world problems through innovative technology solutions.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Focus Areas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-hover bg-dark-200 p-4 rounded-lg border border-dark-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center mb-3`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-white mb-1">{area.title}</h5>
                    <p className="text-sm text-gray-400">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-neon">My Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-neon to-cyber-cyan"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 w-4 h-4 bg-cyber-neon rounded-full border-4 border-cyber-darker"></div>
                    
                    {/* Content */}
                    <div className="ml-12 bg-dark-200 p-6 rounded-lg border border-dark-300 card-hover">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyber-neon to-cyber-cyan rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-cyber-neon font-bold">{item.year}</span>
                          <h4 className="text-white font-semibold">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Available' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center card-hover bg-dark-200 p-6 rounded-lg border border-dark-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 