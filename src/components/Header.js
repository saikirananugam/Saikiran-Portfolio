import React from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Header = ({ isMenuOpen, setIsMenuOpen, isDarkMode, toggleDarkMode, currentSection, setCurrentSection }) => {
  const navItems = ['Home', 'About', 'Experience', 'Education', 'Research', 'Projects', 'Services', 'Contact'];

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer" onClick={() => setCurrentSection('home')}>
          DPK
        </h1>
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentSection(item.toLowerCase())}
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                currentSection === item.toLowerCase() ? 'font-bold' : ''
              }`}
            >
              {item}
            </button>
          ))}
          <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 dark:text-gray-300">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;