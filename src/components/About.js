import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImage from '../images/profile-pic.png';
import BannerCarousel from './BannerCarousel';


const About = ({ setCurrentSection }) => {
  const resumeLink = "https://drive.google.com/file/d/1Dti6sI3i0CkwYCpga0KerYp8mi-Y0o2n/view?usp=sharing"; 
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <BannerCarousel />
      <div className="flex items-center justify-center h-full">
  <motion.p 
    className="text-xl font-semibold text-black-900 dark:text-black-100 text-center mb-6 mt-4 italic"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    "If I don’t tell my story powerfully, then who will?"
  </motion.p>
</div>


      
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-blue-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.img 
            src={profileImage} 
            alt="Saikiran Anugam" 
            className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-8 object-cover "
            // className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-8 object-cover -mt-50 -ml-20" //update to move image 

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="max-w-2xl text-justify"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-4">
            I am <strong>Saikiran Anugam</strong>, a passionate Data Science and Machine Learning professional currently pursuing a Master’s in Engineering Data Science at the University of Houston. With a strong background in high-performance computing, statistical modeling, and machine learning, I have hands-on experience in NASA-funded research projects, optimizing large-scale data processing using Python, Fortran, and HPC clusters.

            </p>
            <p className="text-lg text-gray-700 mb-4">
            Driven by curiosity and innovation, I enjoy solving real-world challenges across energy, biotechnology, and industrial automation. I hold certifications in OCI Generative AI, Microsoft Azure AI Fundamentals, and NVIDIA RAPIDS, and have contributed to patented agricultural technology and award-winning research in steel manufacturing optimization.

            </p>
            <div className="flex space-x-4 justify-center">
              <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg flex items-center"
              >
                <FaDownload className="mr-2" />
                Resume
              </a>
              <button
                onClick={() => setCurrentSection('certifications')}
                className="text-blue-600 dark:text-blue-400 flex items-center group text-xl bg-white px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
              >
                Hire Me 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
