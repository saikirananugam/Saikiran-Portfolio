// import React from 'react';
// import { motion } from 'framer-motion';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// // Import logos
// import UHLogo from '../images/uh_red.png';
// import SRLogo from '../images/SR-logo.jpeg';
// import alphoresLogo from '../images/alphores.jpeg';
// import tejaswiLogo from '../images/tejaswi-logo.png';


// const educations = [
//   {
//     degree: "Master's Thesis in Engineering Data Science",
//     institution: "University of Houston, Houston Tx, USA",
//     year: "August 2023 - May 2025",
//     grade: "CGPA: 4/4",
//     description: "Achieved rank 1 with the highest absolute CGPA in the department.",
//     logo: UHLogo
//   },
//   {
//     degree: "Bachelors in Computer Science",
//     institution: "SR Engineering College, India",
//     year: "June 2019 - May 2023",
//     grade: "CGPA: 9.2/10",
//     description: "Focused on Mathematics, Physics, and Chemistry.",
//     logo: SRLogo
//   },
//   {
//     degree: "Senior Secondary, MPC",
//     institution: "Alphores Junior College",
//     year: "June 2017 - May 2019",
//     grade: "Grade: 93.6%",
//     description: "Focused on Mathematics, Physics, and Chemistry.",
//     logo: alphoresLogo
//   },
//   {
//     degree: "Secondary",
//     institution: "Tejaswi High School",
//     year: "June 2016 - May 2017",
//     grade: "Grade: 10/10",
//     description: "Completed secondary education with distinction.",
//     logo: tejaswiLogo
//   }
// ];

// const Education = () => {
//   return (
//     <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Education
//         </motion.h2>
//         <VerticalTimeline>
//           {educations.map((edu, index) => (
//             <VerticalTimelineElement
//               key={index}
//               className="vertical-timeline-element--education"
//               contentStyle={{ background: 'white', color: '#333', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
//               contentArrowStyle={{ borderRight: '7px solid white' }}
//               date={edu.year}
//               dateClassName="text-gray-700 dark:text-gray-300"
//               iconStyle={{ background: '#fff', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}
//               icon={
//                 <img 
//                   src={edu.logo}
//                   alt={`${edu.institution} logo`}
//                   className="w-full h-full object-contain p-1"
//                 />
//               }
//             >
//               <h3 className="vertical-timeline-element-title text-xl font-semibold">{edu.degree}</h3>
//               <h4 className="vertical-timeline-element-subtitle text-lg text-gray-500">{edu.institution}</h4>
//               <p className="text-sm text-gray-700 dark:text-gray-300">{edu.grade}</p>
//               <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{edu.description}</p>
//             </VerticalTimelineElement>
//           ))}
//         </VerticalTimeline>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import logos
import UHLogo from '../images/uh_red.png';
import SRLogo from '../images/SR-logo.jpeg';
import AlphoresLogo from '../images/alphores.jpeg';
import TejaswiLogo from '../images/tejaswi-logo.png';

// Education data
const educations = [
  {
    degree: "Master's Thesis in Engineering Data Science",
    institution: "University of Houston, Houston, TX, USA",
    year: "August 2023 - May 2025",
    grade: "CGPA: 4/4",
    // description: "Achieved rank 1 with the highest absolute CGPA in the department. Gained hands-on experience in machine learning, big data analytics, and research methodologies.",
    description: "Gained hands-on experience in machine learning, big data analytics, and research methodologies. Applied statistical modeling, database management, and digital image processing techniques in real-world problem-solving.",
    logo: UHLogo,
    courses: [
      "Probability and Statistics",
      "Introduction to Data Science",
      "Introduction to Machine Learning",
      "Research, Master's Thesis",
      "Digital Image Processing",
      "Big Data Analytics in Petroleum Engineering",
      "Data Analysis in Construction Management",
      "Database Management Tools"
      
    ]
  },
  {
    degree: "Bachelors in Computer Science",
    institution: "SR Engineering College, India",
    year: "June 2019 - May 2023",
    grade: "CGPA: 9.2/10",
    description: "Developed a strong foundation in computer science, focusing on AI, machine learning, and full-stack development.",
    logo: SRLogo,
    courses: [
      "Operating Systems",
      "Web Development",
      "Data Structures",
      "Artificial Intelligence",
      "Computer Organization and Architecture",
      "OOP through Java",
      "Database Management Systems",
      "Computer Networks",
      "Machine Learning",
      "Neural Networks and Deep Learning",
      "Natural Language Processing (NLP)"
    ]
  },
  {
    degree: "Senior Secondary, MPC",
    institution: "Alphores Junior College, India",
    year: "June 2017 - May 2019",
    grade: "Grade: 93.6%",
    description: "Excelled in Mathematics, Physics, and Chemistry, laying the groundwork for computational problem-solving and analytical thinking.",
    logo: AlphoresLogo,
    courses: ["Mathematics", "Physics", "Chemistry"]
  },
  {
    degree: "Secondary",
    institution: "Tejaswi High School, India",
    year: "June 2016 - May 2017",
    grade: "Grade: 10/10",
    description: "Completed secondary education with distinction, excelling in foundational subjects that set the stage for further studies.",
    logo: TejaswiLogo,
    courses: ["Mathematics", "Science", "English"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
      <motion.p
        className="text-xl italic font-semibold text-gray-700 dark:text-gray-300 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        “Creativity is seeing the same thing but thinking differently.” – Dr. A.P.J. Abdul Kalam
      </motion.p>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
  This philosophy inspires my approach to Data Science, pushing me to explore innovative solutions  
  and rethink conventional methods to drive meaningful impact.
</motion.p>
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
              <p className="mt-2 text-sm text-black-900 dark:text-black-300">{edu.description}</p>

              {/* Relevant Courses in Badge Format */}
              <div className="flex flex-wrap gap-2 mt-4">
                {edu.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="text-blue-200 bg-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {course}
                  </span>
                ))}
              </div>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;

