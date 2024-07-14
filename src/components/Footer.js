import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Dubasi Pavan Kumar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/im-pavankumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">LinkedIn</a>
            <a href="https://github.com/ascender1729" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">GitHub</a>
            <a href="https://twitter.com/the_complex_one" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;