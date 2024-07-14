import React from 'react';
import { motion } from 'framer-motion';

const patents = [
  {
    title: "AI-Enabled Robotic Device for Business Automation",
    inventors: "Kousar, H., Dubasi Pavan Kumar, Mohammed, S.A., et al.",
    details: "UK Design Registration No. 6335588, Grant Date: 10 January 2024"
  },
  {
    title: "Emotion Recognition and Analysis System for Mental Health Assessment",
    inventors: "Navaneethakrishan, S.R., Chinta, S., Dubasi Pavan Kumar, et al.",
    details: "The Patent Office Journal, 29/09/2023, No. 39/2023, pp. 64318-64802"
  }
];

const Patents = () => {
  return (
    <section id="patents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Patents
        </motion.h2>
        <div className="space-y-8">
          {patents.map((patent, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{patent.title}</h3>
              <p className="text-gray-700 mb-1">Inventors: {patent.inventors}</p>
              <p className="text-gray-600">{patent.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;