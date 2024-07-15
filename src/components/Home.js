import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight, FaCode, FaDatabase, FaRobot, FaChartLine, FaGraduationCap, FaPaperPlane } from 'react-icons/fa';

const LatestUpdates = [
  { title: "Research on ML-driven Fraud Detection", icon: <FaRobot />, color: "bg-blue-100 dark:bg-blue-900" },
  { title: "Published Paper on Blockchain in Healthcare", icon: <FaPaperPlane />, color: "bg-green-100 dark:bg-green-900" },
  { title: "Completed Data Science Project", icon: <FaChartLine />, color: "bg-purple-100 dark:bg-purple-900" },
  { title: "Graduated with Integrated MSc in Mathematics", icon: <FaGraduationCap />, color: "bg-yellow-100 dark:bg-yellow-900" },
  { title: "Developed Full-Stack Web Application", icon: <FaCode />, color: "bg-red-100 dark:bg-red-900" },
  { title: "Implemented Advanced Database Solution", icon: <FaDatabase />, color: "bg-indigo-100 dark:bg-indigo-900" },
];

const Home = ({ setCurrentSection }) => {
  const controls = useAnimation();
  const scrollRef = useRef(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
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
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi There, I'm{' '}
          <span className="text-blue-600 dark:text-blue-400">
            Dubasi Pavan Kumar
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 glow-text"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a{' '}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Researcher
          </span>
          ,{' '}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Data Scientist
          </span>
          , and{' '}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Software Developer
          </span>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => setCurrentSection('about')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
          >
            About Me
          </button>
          
          <button
            onClick={() => setCurrentSection('services')}
            className="text-blue-600 dark:text-blue-400 flex items-center group text-xl"
          >
            Hire Me 
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">Latest Updates</h2>
        <div 
          ref={scrollRef} 
          className="flex space-x-6 overflow-x-hidden"
          style={{ width: '100%' }}
        >
          {[...LatestUpdates, ...LatestUpdates].map((update, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-3"
              style={{ width: '300px' }}
            >
              <div className="text-blue-600 dark:text-blue-400 text-2xl">
                {update.icon}
              </div>
              <p className="text-gray-800 dark:text-gray-200">{update.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
