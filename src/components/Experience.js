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
    date: "Jul 2023 - Jun 2024",
    location: "Patna, Bihar, India",
    description: "Developed ML model for healthcare insurance fraud detection with 89% accuracy.",
    logo: nitPatnaLogo
  },
  {
    title: "SDE",
    company: "EUT HUB TECHNOLOGIES PVT LTD",
    date: "Aug 2023 - Jan 2024",
    location: "Kansas, United States (Remote)",
    description: "Implemented React.js and Node.js, increasing user engagement by 20%.",
    logo: eutHubLogo
  },
  {
    title: "Data Scientist",
    company: "ARVO",
    date: "Mar 2024 - May 2024",
    location: "New Delhi, India (Remote)",
    description: "Optimized ML algorithms for counterfeit detection, improving accuracy by 15%.",
    logo: arvoLogo
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
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
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={exp.date}
              iconStyle={{ background: 'white', color: '#fff' }}
              icon={
                <img 
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain p-2"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <p className="text-sm">{exp.location}</p>
              <p className="mt-2 text-sm">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;