import React, { useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';
import { FaGithub, FaGamepad } from 'react-icons/fa';

const projects = [
  {
    title: "Optimizing Green Hydrogen Production using ML",
    description: "Our team tackled a real-world problem statement provided by Fugro, optimizing green hydrogen production using cutting-edge data analysis and machine learning techniques. Collaborated across disciplines—Data Science, Chemical Engineering, Computer Science, and MIS—to develop a scalable, data-driven solution.",
    technologies: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn", "Pandas"],
    domains: ["Sustainable Energy", "AI", "Data Science"],
    link: "https://github.com/saikirananugam/Optimizing-Green-Hydrogen-Production-using-ML-"
},
 
  {
    title: "ML Approaches for Predicting Composition Property Relationship in Industrial Steels",
    description: "This research enhances the current understanding of materials science, providing insights into steel properties with practical implications for optimizing steel manufacturing processes and improving material performance. The use of advanced models and robust error analysis strengthens the applicability and reliability of our findings.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python","R"],
    domains: ["Web Development", "Machine Learning"],
    link: "https://github.com/saikirananugam/-Machine-Learning-Approaches-for-Predicting-Composition-Property-Relationship-in-Industrial-Steels",
    // playLink: "https://ascender1729.github.io/asteroid-dodge/"
  },
  {
    title: "Advanced Facial Recognition and Bias Mitigation",
    description: "This project leverages state-of-the-art deep learning models to predict age, gender, and race using a multi-task learning approach, integrating a user-friendly interface built with Python’s Gradio framework.",
    technologies: [ "EfficientNetB0", "ResNet50","MobileNetV2", "Scikit-learn", "NumPy","Gradio"],
    domains: ["Data Science", "Image Processing"],
    link: "https://github.com/saikirananugam/DIP_Team-4"
  },
  {
    title: "Oil Production Forecasting Using Machine Learning",
    description: "Developed a robust time series forecasting model leveraging advanced machine learning algorithms to predict future values based on historical data, aimed at overcoming the limitations of traditional forecasting methods.",
    technologies: [" Time series","Lasso Regression","Python","K-Nearest Neighbors (KNN)","Streamlit"],
    domains: ["Machine Learning",  "Big data Analytics"],
    link: ""
  },
  {
    title: "Fake news detection using NLP",
    description: "Our approach utilizes image processing techniques to convert the image text into a readable format, enabling the detection of fake news from image inputs.",
    technologies: ["Python", "LSTM", "BERT","Word2Vec","Multinomial Naive Bayes"],
    domains: ["Natural Language Processing (NLP)"],
    link: "https://www.linkedin.com/in/saikirananugam/details/projects/1635532615143/single-media-viewer?type=LINK&profileId=ACoAAC0IFlwBbQEZb7DQyckcEjPTQVYokV_27Rk&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3Bx4RMWSu4Ti64HNSE4MPdgg%3D%3D"
  },
  {
    title: "Biodefense Simulation Using Machine Learning & Geospatial Analysis (NVIDIA RAPIDS Project)",
    description: "Optimized crisis response strategies with K-means and DBSCAN clustering on an NVIDIA RAPIDS-accelerated dataset, achieving 5x faster execution for infection spread analysis",
    technologies: ["CUDA","High Performance Computing (HPC)","K-Means", "DBSCAN"],
    domains: ["AI", "Machine Learning"],
    link: "https://www.linkedin.com/in/saikirananugam/details/projects/"
  },
  {
    title: "Speech Emotion Recognition using Neural Networks and Deep Learning",
    description: "Speech Emotion Recognition, abbreviated as SER, is the act of attempting to recognize human emotion and affective states from speech using Neural Networks and Deep Learning techniques.",
    technologies: ["MLPC","CNN","LSTM"],
    domains: ["Deep Learning"],
    link: "https://github.com/saikirananugam/NNDL/tree/main/Capstone%20Project"
  },
  {
    title: "MultiPurpose Agriculture Apparatus",
    description: "To provide multipurpose equipment for dryland farmers. Used for Soil disturbing, sowing, and applying manure using a brake mechanism. A patent is Published for this project.",
    technologies: ["Python", "Image Processing","AutoCAD"],
    domains: ["Design for Social Impact"],
    link: "https://github.com/saikirananugam/Multi-purpose-agro-machine"
  },
  {
    title: "Startup success prediction using Machine Learning",
    description: "Predicting the Success of startups using Machine learning algorithms.",
    technologies: ["Python", "Regression"],
    domains: ["AI", "Machine Learning"],
    link: "https://github.com/saikirananugam/AI/tree/main/capstone-proje"
  }
];

// const Projects = () => {
//   const [selectedDomains, setSelectedDomains] = useState([]);
//   const [selectedTechnologies, setSelectedTechnologies] = useState([]);

//   const handleDomainChange = (selectedOptions) => {
//     setSelectedDomains(selectedOptions ? selectedOptions.map(option => option.value) : []);
//   };

//   const handleTechnologyChange = (selectedOptions) => {
//     setSelectedTechnologies(selectedOptions ? selectedOptions.map(option => option.value) : []);
//   };

//   // Create unique domain and technology options for Select
//   const uniqueDomains = Array.from(new Set(projects.flatMap(project => project.domains)));
//   const uniqueTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies)));

//   const domainOptions = uniqueDomains.map(domain => ({ value: domain, label: domain }));
//   const technologyOptions = uniqueTechnologies.map(tech => ({ value: tech, label: tech }));

//   const filteredProjects = projects.filter(project => 
//     (selectedDomains.length === 0 || selectedDomains.some(domain => project.domains.includes(domain))) &&
//     (selectedTechnologies.length === 0 || selectedTechnologies.every(tech => project.technologies.includes(tech)))
//   );

//   return (
//     <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Projects
//         </motion.h2>
//         <div className="flex flex-wrap justify-center mb-8 space-x-4">
//           <Select
//             options={domainOptions}
//             isMulti
//             placeholder="Select Domains"
//             onChange={handleDomainChange}
//             className="w-full md:w-1/3 mb-4 md:mb-0"
//           />
//           <Select
//             options={technologyOptions}
//             isMulti
//             placeholder="Select Approach"
//             onChange={handleTechnologyChange}
//             className="w-full md:w-1/3"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{project.title}</h3>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
//               <div className="flex flex-wrap mb-4">
//                 {[...project.technologies, ...project.domains].map((tag) => (
//                   <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <a 
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 <FaGithub className="mr-2" />
//                 View on GitHub
//               </a>
//               {project.playLink && (
//                 <a
//                   href={project.playLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline ml-4"
//                 >
//                   <FaGamepad className="mr-2" />
//                   Play Game
//                 </a>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React, { useState } from 'react';
// import Select from 'react-select';
// import { motion } from 'framer-motion';
// import { FaGithub } from 'react-icons/fa';

// const projects = [
//   {
//     title: "ML Approaches for Predicting Composition Property Relationship in Industrial Steels",
//     description: "This research enhances the current understanding of materials science, providing insights into steel properties with practical implications for optimizing steel manufacturing processes and improving material performance.",
//     technologies: ["HTML5", "CSS3", "JavaScript", "Python", "R"],
//     domains: ["Web Development", "Machine Learning"],
//     link: "https://github.com/saikirananugam/-Machine-Learning-Approaches-for-Predicting-Composition-Property-Relationship-in-Industrial-Steels"
//   },
//   {
//     title: "Advanced Facial Recognition and Bias Mitigation",
//     description: "This project leverages deep learning models to predict age, gender, and race using a multi-task learning approach, integrating a user-friendly interface built with Python’s Gradio framework.",
//     technologies: ["EfficientNetB0", "ResNet50", "MobileNetV2", "Scikit-learn", "NumPy", "Gradio"],
//     domains: ["Data Science", "Image Processing"],
//     link: "https://github.com/saikirananugam/DIP_Team-4"
//   }
// ];

const Projects = () => {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleDomainChange = (selectedOptions) => {
    setSelectedDomains(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handleTechnologyChange = (selectedOptions) => {
    setSelectedTechnologies(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const uniqueDomains = Array.from(new Set(projects.flatMap(project => project.domains)));
  const uniqueTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies)));

  const domainOptions = uniqueDomains.map(domain => ({ value: domain, label: domain }));
  const technologyOptions = uniqueTechnologies.map(tech => ({ value: tech, label: tech }));

  const filteredProjects = projects.filter(project => 
    (selectedDomains.length === 0 || selectedDomains.some(domain => project.domains.includes(domain))) &&
    (selectedTechnologies.length === 0 || selectedTechnologies.every(tech => project.technologies.includes(tech)))
  );

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* YouTube Video - Now at the Top */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-3xl">
            <iframe 
              className="w-full h-64 md:h-96 rounded-lg shadow-lg" 
              src="https://www.youtube.com/embed/Pfeulq1wms8" 
              title="YouTube Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Projects Section Heading - Below Video */}
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* Select Filters - Below Projects Title */}
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          <Select
            options={domainOptions}
            isMulti
            placeholder="Select Domains"
            onChange={handleDomainChange}
            className="w-full md:w-1/3 mb-4 md:mb-0"
          />
          <Select
            options={technologyOptions}
            isMulti
            placeholder="Select Approach"
            onChange={handleTechnologyChange}
            className="w-full md:w-1/3"
          />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {[...project.technologies, ...project.domains].map((tag) => (
                  <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
