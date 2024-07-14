import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Research Intern",
    company: "National Institute of Technology, Patna",
    duration: "July 2023 - Jun 2024",
    description: "Developed a machine learning model for healthcare insurance fraud detection, achieving 89% accuracy and reducing false positives by 30%."
  },
  {
    title: "Data Scientist Intern",
    company: "Arvo (OneArvo Ventures Pvt. Ltd.)",
    duration: "Mar 2024 - May 2024",
    description: "Optimized counterfeit detection ML algorithms, improving model accuracy by 15% and reducing manual inspection by 20%."
  },
  {
    title: "SDE Intern",
    company: "Eut Hub Technologies Pvt. Ltd.",
    duration: "Aug 2023 - Jan 2024",
    description: "Implemented React.js and Node.js for web development, increasing user engagement by 20% and optimizing data flow."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600">{exp.title}</h3>
              <p className="text-gray-600 mb-2">{exp.company} | {exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;