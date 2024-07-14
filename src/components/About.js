import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../images/PHOTO.jpg';

const About = () => {
  const resumeLink = "https://bit.ly/resumePavan"; // Replace with your actual resume link

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
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
            alt="Dubasi Pavan Kumar" 
            className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-8 object-cover"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              I'm Dubasi Pavan Kumar, an aspiring researcher with a profound interest in the interplay between mathematics and cutting-edge technology. I completed my Integrated Master of Science in Mathematics at the National Institute of Technology, Patna, achieving an impressive CGPA of 8.89/10.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              My research explores intricate fields such as machine learning and blockchain technology, with the goal of harnessing these disciplines to drive practical innovations and solutions.
            </p>
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;