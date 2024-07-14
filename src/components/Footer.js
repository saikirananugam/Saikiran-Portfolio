import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Dubasi Pavan Kumar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com/in/im-pavankumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/ascender1729" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/the_complex_one" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;