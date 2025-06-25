import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  ExternalLink, 
  Github, 
  Zap,
  Eye,
  Star,
  GitBranch
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart Resume Screener',
      description: 'AI model to parse and match resumes with job descriptions using advanced NLP techniques.',
      stack: ['Python', 'NLTK', 'Scikit-learn', 'Pandas'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      aiRelated: true,
      category: 'ai',
      features: ['Resume Parsing', 'Job Matching', 'NLP Analysis', 'ML Models']
    },
    {
      id: 2,
      title: 'Tech Blog CMS',
      description: 'Dynamic content platform for blog/article publishing with modern UI and real-time updates.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      aiRelated: false,
      category: 'web',
      features: ['Content Management', 'Real-time Updates', 'Responsive Design', 'SEO Optimized']
    },
    {
      id: 3,
      title: 'AI Chatbot Portfolio',
      description: 'Self-trained chatbot that answers queries about Manish\'s resume and portfolio.',
      stack: ['Python', 'Rasa', 'LangChain', 'NLP'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      aiRelated: true,
      category: 'ai',
      features: ['Natural Language Processing', 'Conversational AI', 'Resume Training', 'Interactive Chat']
    },
    {
      id: 4,
      title: 'DesignGen – UI Toolkit Generator',
      description: 'Tool that auto-generates UI components from prompts using AI and design principles.',
      stack: ['HTML', 'CSS', 'JavaScript', 'OpenAI API'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      aiRelated: true,
      category: 'ai',
      features: ['AI-Powered Generation', 'UI Components', 'Design System', 'Prompt Engineering']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'web', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-bg opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyber-purple rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-google-blue rounded-full blur-3xl opacity-10"></div>

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-neon to-cyber-cyan mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest work, featuring AI-powered solutions and modern web applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 space-x-4"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyber-neon to-cyber-cyan text-black'
                  : 'bg-dark-200 text-gray-300 hover:text-cyber-neon border border-dark-300'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-dark-200 rounded-lg border border-dark-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-dark-300 to-dark-400 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon/20 to-cyber-cyan/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-cyber-neon opacity-50" />
                </div>
                
                {/* AI Badge */}
                {project.aiRelated && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-google-red to-cyber-purple px-3 py-1 rounded-full flex items-center space-x-1"
                  >
                    <Brain className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-bold">AI</span>
                  </motion.div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="w-12 h-12 bg-dark-200 rounded-full flex items-center justify-center hover:bg-cyber-neon hover:text-black transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live}
                    className="w-12 h-12 bg-dark-200 rounded-full flex items-center justify-center hover:bg-cyber-neon hover:text-black transition-all duration-300"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-neon transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.aiRelated && (
                    <Zap className="w-5 h-5 text-cyber-neon" />
                  )}
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyber-neon mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-dark-300 text-gray-300 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyber-neon mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gradient-to-r from-cyber-neon/20 to-cyber-cyan/20 text-cyber-neon px-2 py-1 rounded border border-cyber-neon/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-300">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>1.2k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>45</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-4 h-4" />
                      <span>12</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-cyber-neon hover:text-white transition-colors duration-300"
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-dark-200 to-dark-300 p-8 rounded-lg border border-dark-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge AI technology and modern web development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyber-neon to-cyber-cyan text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-neon/25 transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 