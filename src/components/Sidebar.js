import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, setIsOpen, setCurrentSection, currentSection }) => {
  const navItems = ['Home', 'About', 'Experience', 'Education', 'Research', 'Projects', 'Services', 'Contact'];

  const sidebarVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div 
      className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 ${isOpen ? 'block' : 'hidden'}`}
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={sidebarVariants}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="p-4 flex flex-col h-full">
        <button onClick={() => setIsOpen(false)} className="self-end text-gray-600 dark:text-gray-300">
          <FaTimes size={20} />
        </button>
        <nav className="mt-8 flex-grow">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <motion.li 
                key={item}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <button 
                  onClick={() => {
                    setCurrentSection(item.toLowerCase());
                    setIsOpen(false);
                  }}
                  className={`block text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                    currentSection === item.toLowerCase() ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
