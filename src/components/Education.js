import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import logos
import nitPatnaLogo from '../images/nit-patna-logo.png';
import narayanaLogo from '../images/narayana-logo.png';
import tejaswi_logo from '../images/tejaswi-logo.png';

const educations = [
  {
    degree: "Integrated Master of Science, Mathematics",
    institution: "National Institute of Technology, Patna",
    year: "Jul 2019 - Jun 2024",
    grade: "CGPA: 8.89/10",
    description: "Achieved rank 1 with the highest absolute CGPA in the department.",
    logo: nitPatnaLogo
  },
  {
    degree: "Senior Secondary, MPC",
    institution: "Narayana Junior College",
    year: "Jun 2017 - May 2019",
    grade: "Grade: 93.3%",
    description: "Focused on Mathematics, Physics, and Chemistry.",
    logo: narayanaLogo
  },
  {
    degree: "Secondary",
    institution: "Tejaswi High School",
    year: "Jun 2016 - May 2017",
    grade: "Grade: 9.7/10",
    description: "Completed secondary education with distinction.",
    logo: tejaswi_logo
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
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
              contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
              date={edu.year}
              iconStyle={{ background: 'white', color: '#fff' }}
              icon={
                <img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`} 
                  className="w-full h-full object-contain p-2"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{edu.institution}</h4>
              <p className="text-sm">{edu.grade}</p>
              <p className="mt-2 text-sm">{edu.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;