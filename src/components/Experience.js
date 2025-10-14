// import React from 'react';
// import { motion } from 'framer-motion';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// // Import logos
// import UHLogoLogo from '../images/uh_red.png';
// import DSETLogo from '../images/data_science_energy_logo.jpg';
// import SGLogo from '../images/Secernate-Games-icon.png';

// const experiences = [
//   {
//     title: "Research Data Scientist",
//     company: " Research Funded by NASA",
//     startDate: "April 2024",
//     endDate: "May 2025",
//     location: "University of Houston, Tx, USA",
//     description: "",
//     logo: UHLogoLogo
//   },
//   {
//     title: "Data Science Intern",
//     company: "National Science Foundation",
//     startDate: "April 2024",
//     endDate: "June 2024",
//     location: "University of Houston, Tx, USA",
//     description: "Implemented React.js and Node.js for web development, increasing user engagement by 20%. Streamlined RESTful API integration, optimizing data flow and improving response times by 25%.",
//     logo: DSETLogo
//   },
//   {
//     title: "Technical Content Creator",
//     company: "Secernate Games Pvt.Ltd",
//     startDate: "March 2021",
//     endDate: "June 2022",
//     location: "Warangal, India",
//     description: "",
//     logo: SGLogo
//   }
// ];

// // Sort experiences based on end date in chronological order
// const sortedExperiences = experiences.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Professional Experience
//         </motion.h2>
//         <VerticalTimeline>
//           {sortedExperiences.map((exp, index) => (
//             <VerticalTimelineElement
//               key={index}
//               className="vertical-timeline-element--work"
//               contentStyle={{ background: 'white', color: '#333', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
//               contentArrowStyle={{ borderRight: '7px solid white' }}
//               date={`${exp.startDate} - ${exp.endDate}`}
//               dateClassName="text-gray-700 dark:text-gray-300"
//               iconStyle={{ background: '#fff', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}
//               icon={
//                 <img 
//                   src={exp.logo}
//                   alt={`${exp.company} logo`}
//                   className="w-full h-full object-contain p-1"
//                 />
//               }
//             >
//               <h3 className="vertical-timeline-element-title text-xl font-semibold">{exp.title}</h3>
//               <h4 className="vertical-timeline-element-subtitle text-lg text-gray-500">{exp.company}</h4>
//               <p className="text-sm text-gray-700 dark:text-gray-300">{exp.location}</p>
//               <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
//             </VerticalTimelineElement>
//           ))}
//         </VerticalTimeline>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import logos
import UHLogo from '../images/uh_red.png';
import DSETLogo from '../images/data_science_energy_logo.jpg';
import SGLogo from '../images/Secernate-Games-icon.png';
import STLogo from '../images/staples-logo.jpeg';
const experiences = [
    {
    title: "Software Engineer (Contract)",
    company: "Staples",
    startDate: "May 2025",
    endDate: "September 2025",
    location: "Remote",
    description: [
      "Engineered a high-throughput, event-driven microservices platform (Java/Kafka) to eliminate a legacy 30-minute inventory update lag, reducing order cancellation rates by 80%.",
      "Spearheaded cloud cost governance for Azure Event Hubs by optimizing capacity consumption, avoiding 18 Throughput Units (TUs) and reducing monthly operational costs by $4,800.",
      "Pioneered multi-cloud data processing architecture, migrating ETL pipelines from Azure Data Factory to Cloud Composer/BigQuery and tuning SQL queries to accelerate report generation by 20%."
    ],
    logo: STLogo
  },
  {
    title: "Research Data Scientist",
    company: "Research Funded by NASA",
    startDate: "April 2024",
    endDate: "May 2025",
    location: "University of Houston, TX, USA",
    // description: "Leading the development of machine learning models to analyze protein aggregation patterns from high-resolution ISS video datasets. Implementing data-driven methodologies for feature extraction, signal processing, and anomaly detection in microgravity environments. Optimizing computational workflows using HPC and parallel computing to handle 100TB of image and video data efficiently.",
    description: [
    "Formulated Machine Learning Regression Models using advanced statistical techniques to predict time-series data with <5% error, guiding the optimization of pharmaceutical research protocols.",
    "Executed high-performance solutions via HPC parallelization and CUDA, boosting computation speed by 36× (from 24 hours to 40 minutes) to enable near real-time data driven solutions.",
    "Launched an interactive Streamlit platform enabling 20+ cross-disciplinary scientists to visualize metrics and explore predictive results."
  ],
    logo: UHLogo
  },
  {
    title: "Data Science Intern",
    company: "National Science Foundation",
    startDate: "April 2024",
    endDate: "June 2024",
    location: "University of Houston, TX, USA",
    // description: "Applied machine learning and statistical modeling to analyze real-world energy transition data. Designed and implemented data pipelines to process large-scale datasets. Developed predictive models to enhance decision-making in energy policy and sustainability efforts. Collaborated with domain experts to translate raw data into actionable insights for policy and industry applications.",
    description: [
    "Modeled time-series wind data using Machine Learning to optimize wind turbine location and dimensions, resulting in a 15% reduction in energy output fluctuations for operational efficiency.",
    "Deployed a Retrieval-Augmented Generation (RAG) solution using AI agents on AWS SageMaker/Bedrock, automating data ingestion and winning the Best Solution Award among 50+ participating teams."
  ],
    logo: DSETLogo
  },
  {
    title: "Technical Content Creator",
    company: "Secernate Games Pvt. Ltd.",
    startDate: "March 2021",
    endDate: "June 2022",
    location: "Warangal, India",
    // description: "Developed technical content on Machine Learning, Data Science, and Web Development for Yearner, an innovative game designed to enhance player experience. Created comprehensive documentation, tutorials, and in-game content that improved user engagement. Demonstrated strong self-motivation and adaptability, exceeding expectations and delivering high-quality work on time.",
    description: [
    "Spearheaded the creation of AI-driven learning modules and genre-based content, resulting in a 20% increase in user engagement across the educational gaming platform.",
    "Analyzed player feedback via data-driven surveys on the React UI, boosting KPI (CSAT) by 15% in the 3D environment."
  ],
    logo: SGLogo
  }
];

// Sort experiences based on end date in chronological order
const sortedExperiences = experiences.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
      <motion.div 
        className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
    Research means that you don’t know, but are willing to find out. - Charles F. Kettering
  </h3>
  <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
    My passion for research stems from my love for exploring multiple approaches to problem-solving.  
    Whether in data science, machine learning, or computational research, I challenge conventional  
    methods and strive to discover innovative solutions through continuous learning and experimentation.
  </p>
</motion.div>


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
              {Array.isArray(exp.description) ? (
                <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-black-300 dark:text-black-300">
                  {exp.description.map((point, i) => (
                    <li key={`${exp.company}-point-${i}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-black-300 dark:text-black-300">
                  {exp.description}
                </p>
              )}
              
              {/* <p className="mt-2 text-sm text-black-300 dark:text-black-300">{exp.description}</p> */}

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
