import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import logos
import nitPatnaLogo from '../images/nit-patna-logo.png';
import narayanaLogo from '../images/narayana-logo.png';
import tejaswiLogo from '../images/tejaswi-logo.png';

const educations = [
  {
    degree: "Integrated Master of Science, Mathematics",
    institution: "National Institute of Technology, Patna",
    year: "July 2019 - June 2024",
    grade: "CGPA: 8.89/10",
    description: "Achieved rank 1 with the highest absolute CGPA in the department.",
    logo: nitPatnaLogo
  },
  {
    degree: "Senior Secondary, MPC",
    institution: "Narayana Junior College",
    year: "June 2017 - May 2019",
    grade: "Grade: 93.3%",
    description: "Focused on Mathematics, Physics, and Chemistry.",
    logo: narayanaLogo
  },
  {
    degree: "Secondary",
    institution: "Tejaswi High School",
    year: "June 2016 - May 2017",
    grade: "Grade: 9.7/10",
    description: "Completed secondary education with distinction.",
    logo: tejaswiLogo
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <VerticalTimeline>
          {educations.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'white', color: '#333', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={edu.year}
              dateClassName="text-gray-700 dark:text-gray-300"
              iconStyle={{ background: '#fff', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}
              icon={
                <img 
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain p-1"
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">{edu.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle text-lg text-gray-500">{edu.institution}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">{edu.grade}</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{edu.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
