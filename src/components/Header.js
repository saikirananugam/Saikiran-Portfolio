import React from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaMoon, FaSun, FaHome } from 'react-icons/fa';

const Header = ({ isMenuOpen, setIsMenuOpen, isDarkMode, setIsDarkMode, currentSection, setCurrentSection }) => {
  const navItems = ['Home', 'About', 'Experience', 'Education', 'Research', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.header 
      className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => setCurrentSection('home')} 
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          Dubasi Pavan Kumar
        </button>
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <button 
              key={item}
              onClick={() => setCurrentSection(item.toLowerCase())}
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                currentSection === item.toLowerCase() ? 'font-bold' : ''
              }`}
            >
              {item === 'Home' ? <FaHome /> : item}
            </button>
          ))}
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-600 dark:text-gray-300">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 dark:text-gray-300">
          <FaBars />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;