import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Palette, 
  Users, 
  BookOpen, 
  Zap,
  Clock,
  DollarSign,
  Star,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Freelancing',
      subtitle: 'Web Development & AI Bots',
      description: 'Professional web development services and custom AI chatbot solutions for businesses and individuals.',
      icon: Code,
      color: 'from-google-blue to-cyber-cyan',
      features: [
        'Custom Web Applications',
        'AI Chatbot Development',
        'API Integration',
        'Database Design',
        'Performance Optimization',
        '24/7 Support'
      ],
      pricing: 'Starting from $50/hour',
      duration: '1-4 weeks',
      popular: false
    },
    {
      id: 2,
      title: 'Mentorship & Training',
      subtitle: 'AI/ML for Beginners',
      description: 'Personalized mentorship and training programs to help you master AI and machine learning technologies.',
      icon: Brain,
      color: 'from-cyber-neon to-google-green',
      features: [
        'Personalized Learning Path',
        'Hands-on Projects',
        'Code Reviews',
        'Best Practices',
        'Industry Insights',
        'Career Guidance'
      ],
      pricing: 'Starting from $30/hour',
      duration: 'Flexible Schedule',
      popular: true
    },
    {
      id: 3,
      title: 'Design Services',
      subtitle: 'UI Prototyping',
      description: 'Modern UI/UX design services with AI-powered tools to create stunning user interfaces and prototypes.',
      icon: Palette,
      color: 'from-google-yellow to-cyber-purple',
      features: [
        'UI/UX Design',
        'Interactive Prototypes',
        'Design Systems',
        'Responsive Design',
        'User Research',
        'Design Handoff'
      ],
      pricing: 'Starting from $40/hour',
      duration: '1-2 weeks',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      content: 'Manish helped us build an AI chatbot that increased our customer engagement by 300%. His expertise in AI is unmatched!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Software Engineer',
      content: 'The mentorship program was incredible. I went from knowing nothing about AI to building my first ML model in just 2 months.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      content: 'The UI design work was exceptional. Our app saw a 40% increase in user retention after the redesign.',
      rating: 5
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-neon to-cyber-cyan mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional services tailored to bring your ideas to life with cutting-edge technology and design
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card-hover bg-dark-200 rounded-lg border border-dark-300 overflow-hidden relative ${
                service.popular ? 'ring-2 ring-cyber-neon' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyber-neon to-cyber-cyan px-3 py-1 rounded-full">
                  <span className="text-black text-xs font-bold">Most Popular</span>
                </div>
              )}

              <div className="p-8">
                {/* Service Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-cyber-neon text-sm">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyber-neon flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Duration */}
                <div className="flex items-center justify-between mb-6 p-4 bg-dark-300 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-cyber-neon" />
                    <span className="text-white font-semibold">{service.pricing}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-cyber-cyan" />
                    <span className="text-gray-300 text-sm">{service.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-cyber-neon to-cyber-cyan text-black hover:shadow-lg hover:shadow-cyber-neon/25'
                      : 'bg-dark-300 text-cyber-neon border border-cyber-neon hover:bg-cyber-neon hover:text-black'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyber-neon">
            What Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover bg-dark-200 p-6 rounded-lg border border-dark-300"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-google-yellow fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyber-neon to-cyber-cyan rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-dark-200 to-dark-300 p-8 rounded-lg border border-dark-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. I'm here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyber-neon to-cyber-cyan text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyber-neon/25 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyber-neon text-cyber-neon px-8 py-3 rounded-lg font-semibold hover:bg-cyber-neon hover:text-black transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 