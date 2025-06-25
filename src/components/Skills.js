import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Cloud, 
  Palette, 
  Database, 
  Globe,
  Zap,
  Shield,
  Cpu,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-google-blue to-cyber-cyan',
      skills: [
        { name: 'C', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Java Core', level: 80 }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: Layers,
      color: 'from-cyber-neon to-google-green',
      skills: [
        { name: 'NumPy', level: 88 },
        { name: 'Pandas', level: 85 },
        { name: 'Matplotlib', level: 82 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      title: 'AI/ML Tools',
      icon: Brain,
      color: 'from-google-red to-cyber-purple',
      skills: [
        { name: 'ChatGPT', level: 95 },
        { name: 'Grok', level: 90 },
        { name: 'NLTK', level: 85 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'LangChain', level: 85 },
        { name: 'Rasa', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-google-yellow to-cyber-neon',
      skills: [
        { name: 'Azure (AZ-900)', level: 92 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 }
      ]
    },
    {
      title: 'UI/Design Tools',
      icon: Palette,
      color: 'from-cyber-purple to-google-red',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Canva', level: 90 },
        { name: 'AI Design Tools', level: 85 },
        { name: 'Adobe XD', level: 80 }
      ]
    }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-cyber-neon text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-dark-300 rounded-full h-2">
        <motion.div
          className="h-2 bg-gradient-to-r from-cyber-neon to-cyber-cyan rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-bg opacity-5"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyber-purple rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-google-blue rounded-full blur-3xl opacity-10"></div>

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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-neon to-cyber-cyan mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive collection of technical skills and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-dark-200 p-6 rounded-lg border border-dark-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-cyber-neon">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Prompt Engineering', 'API Integration', 'RESTful APIs',
              'JSON/XML', 'Web Scraping', 'Data Analysis',
              'Machine Learning', 'Natural Language Processing',
              'Computer Vision', 'Deep Learning', 'Neural Networks',
              'Responsive Design'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-300 p-3 rounded-lg text-center border border-dark-400 hover:border-cyber-neon transition-colors duration-300"
              >
                <span className="text-sm text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-google-yellow to-cyber-neon p-6 rounded-lg">
            <Shield className="w-8 h-8 text-black" />
            <div className="text-left">
              <h4 className="text-black font-bold text-lg">Azure Certified</h4>
              <p className="text-black/80 text-sm">AZ-900: Microsoft Azure Fundamentals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 