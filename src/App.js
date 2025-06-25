import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Services from './components/Services';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => setCursorVariant('default');

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App bg-cyber-dark min-h-screen">
      <CustomCursor variant={cursorVariant} />
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          
          <main>
            <Hero onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            <About />
            <Skills />
            <Projects />
            <Tools />
            <Services />
            <Contact />
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App; 