import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    title: "Data Science",
    icon: <FaChartLine className="text-4xl mb-4" />,
    description: "Leveraging data to drive insights and make informed decisions.",
    tasks: [
      "Data Analysis",
      "Machine Learning",
      "Statistical Modeling",
      "Data Visualization",
      "Predictive Analytics"
    ]
  },
  {
    title: "Software Development",
    icon: <FaCode className="text-4xl mb-4" />,
    description: "Building robust and scalable software solutions tailored to your needs.",
    tasks: [
      "Web Development",
      "Mobile App Development",
      "API Development",
      "Database Design",
      "System Architecture"
    ]
  },
  {
    title: "Freelance Services",
    icon: <FaLaptopCode className="text-4xl mb-4" />,
    description: "Offering flexible, on-demand expertise for your projects.",
    tasks: [
      "Project-based Work",
      "Consulting",
      "Code Reviews",
      "Technical Writing",
      "Proof of Concept Development"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-blue-600 dark:text-blue-400">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <div className="flex flex-wrap mb-4">
                {service.tasks.map((task) => (
                  <span key={task} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    {task}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="mailto:your.email@example.com" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
