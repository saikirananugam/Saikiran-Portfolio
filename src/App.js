import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const sections = [
    { id: 'home', component: Home },
    { id: 'about', component: About },
    { id: 'experience', component: Experience },
    { id: 'education', component: Education },
    { id: 'research', component: Research },
    { id: 'skills', component: Skills },
    { id: 'projects', component: Projects },
    { id: 'contact', component: Contact },
  ];

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 min-h-screen`}>
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Sidebar 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-20 pb-10"
      >
        <AnimatePresence mode='wait'>
          {sections.map(({ id, component: Component }) => (
            currentSection === id && (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Component setCurrentSection={setCurrentSection} />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;