import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, setIsOpen, setCurrentSection, currentSection }) => {
  const navItems = ['Home', 'About', 'Experience', 'Education', 'Research', 'Projects', 'Services', 'Contact'];

  return (
    <motion.div 
      className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 ${isOpen ? 'block' : 'hidden'}`}
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <button onClick={() => setIsOpen(false)} className="float-right text-gray-600 dark:text-gray-300">
          <FaTimes />
        </button>
        <nav className="mt-8">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <button 
                  onClick={() => {
                    setCurrentSection(item.toLowerCase());
                    setIsOpen(false);
                  }}
                  className={`block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    currentSection === item.toLowerCase() ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;