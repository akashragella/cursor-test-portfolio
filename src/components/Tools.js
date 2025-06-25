import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageSquare, 
  Zap, 
  Palette, 
  Cloud, 
  Code,
  Sparkles,
  Cpu,
  Database,
  Globe,
  Shield,
  Layers
} from 'lucide-react';

const Tools = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  const tools = [
    {
      id: 1,
      name: 'ChatGPT',
      description: 'Advanced language model for natural conversations and AI assistance',
      icon: MessageSquare,
      color: 'from-google-green to-cyber-neon',
      category: 'AI Assistant',
      features: ['Natural Language Processing', 'Code Generation', 'Problem Solving', 'Creative Writing'],
      status: 'Active'
    },
    {
      id: 2,
      name: 'Grok',
      description: 'Real-time AI model with access to current information and data',
      icon: Brain,
      color: 'from-google-red to-cyber-purple',
      category: 'AI Assistant',
      features: ['Real-time Data', 'Current Events', 'Advanced Reasoning', 'Multi-modal'],
      status: 'Active'
    },
    {
      id: 3,
      name: 'Figma AI',
      description: 'AI-powered design tool for creating stunning user interfaces',
      icon: Palette,
      color: 'from-google-blue to-cyber-cyan',
      category: 'Design',
      features: ['AI Design Generation', 'Prototyping', 'Collaboration', 'Design Systems'],
      status: 'Active'
    },
    {
      id: 4,
      name: 'Canva',
      description: 'Graphic design platform with AI-powered design suggestions',
      icon: Sparkles,
      color: 'from-google-yellow to-cyber-neon',
      category: 'Design',
      features: ['AI Design Tools', 'Templates', 'Brand Kit', 'Collaboration'],
      status: 'Active'
    },
    {
      id: 5,
      name: 'Azure',
      description: 'Microsoft cloud platform with AI and machine learning services',
      icon: Cloud,
      color: 'from-google-blue to-cyber-purple',
      category: 'Cloud',
      features: ['AI Services', 'Machine Learning', 'Cognitive Services', 'Azure OpenAI'],
      status: 'Certified'
    },
    {
      id: 6,
      name: 'Python AI Libraries',
      description: 'Comprehensive suite of AI and machine learning libraries',
      icon: Cpu,
      color: 'from-cyber-neon to-google-green',
      category: 'Development',
      features: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
      status: 'Expert'
    },
    {
      id: 7,
      name: 'Prompt Engineering',
      description: 'Advanced techniques for optimizing AI model interactions',
      icon: Zap,
      color: 'from-cyber-purple to-google-red',
      category: 'AI Skills',
      features: ['Chain-of-Thought', 'Few-shot Learning', 'Prompt Optimization', 'AI Training'],
      status: 'Advanced'
    },
    {
      id: 8,
      name: 'LangChain',
      description: 'Framework for developing applications with large language models',
      icon: Layers,
      color: 'from-google-green to-cyber-cyan',
      category: 'Development',
      features: ['LLM Integration', 'Memory Systems', 'Agents', 'Chains'],
      status: 'Active'
    }
  ];

  const categories = ['All', 'AI Assistant', 'Design', 'Cloud', 'Development', 'AI Skills'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = activeCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-cyber-neon';
      case 'Certified': return 'text-google-yellow';
      case 'Expert': return 'text-google-blue';
      case 'Advanced': return 'text-cyber-purple';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="tools" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-bg opacity-5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyber-purple rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-google-blue rounded-full blur-3xl opacity-10"></div>

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
            Tools I <span className="gradient-text">Use</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-neon to-cyber-cyan mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated collection of cutting-edge AI tools and technologies that power my work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 flex-wrap gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyber-neon to-cyber-cyan text-black'
                  : 'bg-dark-200 text-gray-300 hover:text-cyber-neon border border-dark-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredTool(tool.id)}
              onHoverEnd={() => setHoveredTool(null)}
              className="card-hover bg-dark-200 rounded-lg border border-dark-300 overflow-hidden group relative"
            >
              {/* Tool Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-bold ${getStatusColor(tool.status)}`}>
                      {tool.status}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">{tool.category}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-neon transition-colors duration-300">
                  {tool.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyber-neon">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tool.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-dark-300 text-gray-300 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyber-neon/5 to-cyber-cyan/5"
                animate={{
                  opacity: hoveredTool === tool.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 border border-cyber-neon/30 rounded-full"
                animate={{
                  rotate: hoveredTool === tool.id ? 360 : 0,
                  scale: hoveredTool === tool.id ? 1.2 : 1,
                }}
                transition={{ duration: 2, repeat: hoveredTool === tool.id ? Infinity : 0 }}
              />

              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 border border-cyber-cyan/30 rounded-full"
                animate={{
                  rotate: hoveredTool === tool.id ? -360 : 0,
                  scale: hoveredTool === tool.id ? 1.1 : 1,
                }}
                transition={{ duration: 1.5, repeat: hoveredTool === tool.id ? Infinity : 0 }}
              />
            </motion.div>
          ))}
        </div>

        {/* AI Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyber-neon">
            AI-Powered Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Site Search',
                description: 'Intelligent search functionality that understands user intent and provides relevant results',
                icon: Search,
                color: 'from-google-blue to-cyber-cyan'
              },
              {
                title: 'Resume-trained AI Chatbot',
                description: 'Custom chatbot assistant trained on my resume to answer queries about my experience',
                icon: MessageSquare,
                color: 'from-cyber-neon to-google-green'
              },
              {
                title: 'Recommend Me a Project',
                description: 'AI logic that suggests personalized project recommendations based on user preferences',
                icon: Sparkles,
                color: 'from-google-red to-cyber-purple'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover bg-dark-200 p-6 rounded-lg border border-dark-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Search icon component
const Search = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default Tools; 