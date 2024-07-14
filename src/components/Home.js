import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFileDownload } from 'react-icons/fa';

const latestItems = [
  {
    title: "Research Intern",
    company: "National Institute of Technology, Patna",
    date: "Jul 2023 - Jun 2024",
    type: "Experience",
    details: "Developed ML model for healthcare insurance fraud detection with 89% accuracy."
  },
  {
    title: "Integrated Master of Science, Mathematics",
    institution: "National Institute of Technology, Patna",
    date: "Jul 2019 - Jun 2024",
    type: "Education",
    details: "CGPA: 8.89/10, Rank 1 in the department"
  },
  {
    title: "CodeSage",
    description: "Advanced code review assistant",
    type: "Project",
    details: "Automated insights and best practice suggestions for maintaining code quality"
  },
  {
    title: "Healthcare Insurance Fraud Detection",
    description: "ML and Blockchain-based approach",
    type: "Paper",
    details: "Accepted for publication in the 2024 International Conference on Communication, Computer Sciences and Engineering (IC3SE)"
  },
  {
    title: "AI-Enabled Robotic Device for Business Automation",
    description: "UK Design Registration No. 6335588",
    type: "Patent",
    details: "Grant Date: 10 January 2024"
  }
];

const Home = ({ setCurrentSection }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 1;
        }
      }, 30);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    startScroll();
    scrollElement.addEventListener('mouseenter', stopScroll);
    scrollElement.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      scrollElement.removeEventListener('mouseenter', stopScroll);
      scrollElement.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">Dubasi Pavan Kumar</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Researcher | Data Scientist | Freelancer</p>
      </motion.div>

      <div ref={scrollRef} className="flex overflow-x-hidden pb-4 space-x-6 mb-8">
        {latestItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex-shrink-0 w-80"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
            {item.company && <p className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</p>}
            {item.institution && <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>}
            {item.date && <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{item.date}</p>}
            {item.description && <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>}
            <p className="text-blue-600 dark:text-blue-400 mt-4">{item.type}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.details}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => setCurrentSection('services')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Hire Me
        </button>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300 flex items-center"
        >
          <FaFileDownload className="mr-2" /> Resume
        </a>
      </div>
    </section>
  );
};

export default Home;