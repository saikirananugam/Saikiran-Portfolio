import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import logos
import nitPatnaLogo from '../images/nit-patna-logo.png';
import eutHubLogo from '../images/eut-hub-logo.png';
import arvoLogo from '../images/arvo-logo.png';

const experiences = [
  {
    title: "Research Intern",
    company: "National Institute of Technology, Patna",
    startDate: "July 2023",
    endDate: "June 2024",
    location: "Patna, Bihar, India",
    description: "Developed a machine learning model for healthcare insurance fraud detection with 89% accuracy, leading to a 30% reduction in false positives. Collaborated on integrating ECC encryption with blockchain technology, improving system trust and reliability by 40%.",
    logo: nitPatnaLogo
  },
  {
    title: "SDE Intern",
    company: "EUT HUB Technologies Pvt Ltd",
    startDate: "August 2023",
    endDate: "January 2024",
    location: "Kansas, United States (Remote)",
    description: "Implemented React.js and Node.js for web development, increasing user engagement by 20%. Streamlined RESTful API integration, optimizing data flow and improving response times by 25%.",
    logo: eutHubLogo
  },
  {
    title: "Data Scientist Intern",
    company: "OneArvo Ventures Pvt Ltd",
    startDate: "March 2024",
    endDate: "May 2024",
    location: "New Delhi, India (Remote)",
    description: "Optimized counterfeit detection ML algorithms, improving accuracy by 15%. Implemented OpenCV for advanced image processing and utilized AWS for cloud-based data management, enhancing system efficiency.",
    logo: arvoLogo
  }
];

// Sort experiences based on end date in chronological order
const sortedExperiences = experiences.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <VerticalTimeline>
          {sortedExperiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#333', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={`${exp.startDate} - ${exp.endDate}`}
              dateClassName="text-gray-700 dark:text-gray-300"
              iconStyle={{ background: '#fff', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}
              icon={
                <img 
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain p-1"
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-lg text-gray-500">{exp.company}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">{exp.location}</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
