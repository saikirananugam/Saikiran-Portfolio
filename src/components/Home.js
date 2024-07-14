import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Import logos
import nitPatnaLogo from '../images/nit-patna-logo.png';
import arvoLogo from '../images/arvo-logo.png';
import eutHubLogo from '../images/eut-hub-logo.png';

const latestItems = [
  {
    title: "Research Intern",
    company: "National Institute of Technology, Patna",
    date: "Jul 2023 - Jun 2024",
    logo: nitPatnaLogo,
    type: "Experience",
    link: "experience"
  },
  {
    title: "Data Scientist",
    company: "ARVO",
    date: "Mar 2024 - May 2024",
    logo: arvoLogo,
    type: "Experience",
    link: "experience"
  },
  {
    title: "Integrated Master of Science, Mathematics",
    institution: "National Institute of Technology, Patna",
    date: "Jul 2019 - Jun 2024",
    logo: nitPatnaLogo,
    type: "Education",
    link: "education"
  },
  {
    title: "Senior Secondary, MPC",
    institution: "Narayana Junior College",
    date: "Jun 2017 - May 2019",
    type: "Education",
    link: "education"
  },
  {
    title: "Healthcare Insurance Fraud Detection",
    description: "ML and Blockchain-based approach",
    type: "Research",
    link: "research"
  },
  {
    title: "Artistic Style Transfer using GANs",
    description: "Pix2Pix Implementation",
    type: "Research",
    link: "research"
  },
  {
    title: "Machine Learning",
    proficiency: "90%",
    type: "Skills",
    link: "skills"
  },
  {
    title: "Blockchain",
    proficiency: "85%",
    type: "Skills",
    link: "skills"
  },
  {
    title: "CodeSage",
    description: "Advanced code review assistant",
    type: "Projects",
    link: "projects"
  },
  {
    title: "SentiPulse",
    description: "Social sentiment analyzer",
    type: "Projects",
    link: "projects"
  }
];

const Home = ({ setCurrentSection }) => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">Dubasi Pavan Kumar</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Researcher | Data Scientist | Software Developer</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {item.logo && <img src={item.logo} alt={item.company || item.institution} className="w-16 h-16 mx-auto mb-4 object-contain" />}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
              {item.company && <p className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</p>}
              {item.institution && <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>}
              {item.date && <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{item.date}</p>}
              {item.description && <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>}
              {item.proficiency && <p className="text-gray-600 dark:text-gray-400 mb-2">Proficiency: {item.proficiency}</p>}
              <p className="text-blue-600 dark:text-blue-400 mt-4">{item.type}</p>
              <button 
                onClick={() => setCurrentSection(item.link)} 
                className="mt-4 text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                See more <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;