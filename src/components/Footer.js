// import React from 'react';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p>&copy; 2025 Saikiran Anugam. All rights reserved.</p>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="https://www.linkedin.com/in/saikirananugam/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//               <FaLinkedin size={24} />
//             </a>
//             <a href="https://github.com/saikirananugam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//               <FaGithub size={24} />
//             </a>
//             <a href="https://twitter.com/the_complex_one" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//               <FaTwitter size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Saikiran Anugam. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/saikirananugam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/saikirananugam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>

            {/* Google Scholar (using SVG) */}
            <a
              href="https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=SaiKiran+Anugam#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 9l11 7 9-5.5V20h2V9L12 2zm0 2.3l7.74 4.7L12 13.7 4.26 9 12 4.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
