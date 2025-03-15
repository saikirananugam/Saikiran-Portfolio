import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import { FaArrowRight, FaCode, FaDatabase, FaRobot, FaChartLine, FaGraduationCap, FaPaperPlane, FaGlobe, FaChartArea, FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinux, FaRProject } from 'react-icons/fa';
// import { FaArrowRight, FaCode, FaDatabase, FaRobot,FaPaperPlane, FaGlobe, FaChartArea, FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinux, FaRProject } from 'react-icons/fa';

// import { SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiMongodb, SiTypescript, SiFlask, SiCplusplus, SiGo, SiRubyonrails, SiTailwindcss, SiWebpack, SiKeras, SiOpencv, SiPytorch, SiGraphql, SiTableau, SiSolidity, SiEthereum, SiMysql } from 'react-icons/si';

// import { 
//   FaGraduationCap, FaAward, FaChartLine, FaBookOpen, FaMedal } from 'react-icons/fa';

// import { SiOracle, SiNvidia, SiIeee } from 'react-icons/si'; // Added IEEE Logo

// import { VscAzure } from "react-icons/vsc";  // Microsoft Azure Certification

// import { 
//   FaArrowRight, FaPaperPlane,
//   FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaGithub, 
//   FaLinux, FaRProject, FaGraduationCap, FaAward, FaChartLine, FaBookOpen, FaMedal, 
//   FaLinkedin
// } from 'react-icons/fa'; // Removed FaComputer from here

// import { 
//   SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiMongodb, SiTypescript, SiFlask, 
//   SiCplusplus, SiGo, SiRubyonrails, SiTailwindcss, SiWebpack, SiKeras, SiOpencv, SiPytorch, 
//   SiGraphql, SiTableau, SiSolidity, SiEthereum, SiMysql, SiOracle, SiNvidia, SiIeee, 
//   SiNasa, SiKaggle
// } from 'react-icons/si'; // NASA & Kaggle Logos

// import { VscAzure } from "react-icons/vsc"; // Microsoft Azure Certification

// import { GiTargetPoster} from "react-icons/gi"; // Poster & Research
// import { FcConferenceCall } from "react-icons/fc"; // Conference

// import { FaComputer } from "react-icons/fa6"; //


import { 
  FaArrowRight, FaPaperPlane, FaPython, FaReact, FaNodeJs, FaAws, FaHtml5, FaCss3Alt, 
  FaJs, FaGithub, FaLinux, FaGraduationCap, FaAward, FaChartLine, FaBookOpen, 
  FaMedal, FaLinkedin
} from 'react-icons/fa';

import { 
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiFlask, SiCplusplus, 
  SiTailwindcss, SiKeras, SiOpencv, SiPytorch, SiTableau, SiMysql, SiOracle, SiNvidia, 
  SiIeee, SiNasa, SiKaggle, SiJupyter, SiAnaconda, SiScipy, SiPlotly, 
  SiFortran, SiR
} from 'react-icons/si';

import { VscAzure } from "react-icons/vsc"; // ✅ Microsoft Azure Certification
import { PiMicrosoftExcelLogo } from "react-icons/pi"; // ✅ Microsoft Excel

import { GiTargetPoster } from "react-icons/gi"; // ✅ Poster & Research
import { FcConferenceCall } from "react-icons/fc"; // ✅ Conference

import { FaComputer } from "react-icons/fa6"; // ✅ Data Science Intern





// const LatestUpdates = [
//   { title: "ML Fraud Detection", icon: <FaRobot /> },
//   { title: "Data Science Project", icon: <FaChartLine /> },
//   { title: "MSc Mathematics", icon: <FaGraduationCap /> },
//   { title: "Full-Stack Web App", icon: <FaCode /> },
//   { title: "Advanced Database", icon: <FaDatabase /> },
//   { title: "Sentiment Analysis", icon: <FaGlobe /> },
//   { title: "Code Review Enhancer", icon: <FaCode /> },
//   { title: "Real-Time Analysis", icon: <FaChartArea /> },
//   { title: "Crypto Risk Management", icon: <FaDatabase /> },
//   { title: "Speech-to-Text", icon: <FaRobot /> },
//   { title: "GAN Style Transfer", icon: <FaPaperPlane /> },
//   { title: "Facial Feature Analysis", icon: <FaPaperPlane /> }
// ];

const LatestUpdates = [
  { title: "Kaggle Top 9 - Energy AI", icon: <SiKaggle /> }, // Kaggle Competition
  { title: "Researcher on NASA-funded project", icon: <SiNasa /> }, // NASA Research
  { title: "Patent Holder", icon: <FaPaperPlane /> }, // Patent,
  { title: "Data Science for Energy Intern", icon: <FaComputer /> }, // Internship
  { title: "COOGS Energy Transition Hackathon", icon: <FaChartLine /> }, // Hackathon Selection
  { title: "LinkedIn Top Data Science Voice", icon: <FaLinkedin /> }, // LinkedIn Recognition
  { title: "Presented Poster - OCHEGS", icon: <GiTargetPoster /> }, // Poster Presentation
  { title: "Research Paper - ICAPSM (Intl. Conference on Advances in Physical Sciences & Materials)", icon: <FcConferenceCall /> } // Conference Paper
  // { title: "Ongoing Research Project", icon: <GiArchiveResearch /> }, // Research Work
  
];


// const Skills = [
//   { icon: <FaPython size={28} /> },
//   { icon: <SiCplusplus size={28} /> },
//   { icon: <FaJs size={28} /> },
//   { icon: <FaReact size={28} /> },
//   { icon: <FaNodeJs size={28} /> },
//   { icon: <FaHtml5 size={28} /> },
//   { icon: <FaCss3Alt size={28} /> },
//   { icon: <SiTailwindcss size={28} /> },
//   { icon: <SiMongodb size={28} /> },
//   { icon: <SiFlask size={28} /> },
//   { icon: <SiTypescript size={28} /> },
//   { icon: <SiWebpack size={28} /> },
//   { icon: <SiTensorflow size={28} /> },
//   { icon: <SiScikitlearn size={28} /> },
//   { icon: <SiPandas size={28} /> },
//   { icon: <SiNumpy size={28} /> },
//   { icon: <SiKeras size={28} /> },
//   { icon: <SiOpencv size={28} /> },
//   { icon: <SiPytorch size={28} /> },
//   { icon: <FaGithub size={28} /> },
//   { icon: <FaDocker size={28} /> },
//   { icon: <FaAws size={28} /> },
//   { icon: <SiGo size={28} /> },
//   { icon: <SiGraphql size={28} /> },
//   { icon: <SiRubyonrails size={28} /> },
//   { icon: <FaLinux size={28} /> },
//   { icon: <SiMysql size={28} /> },
//   { icon: <SiTableau size={28} /> },
//   { icon: <SiSolidity size={28} /> },
//   { icon: <SiEthereum size={28} /> },
//   { icon: <FaRProject size={28} /> }
// ];


const Skills = [
  // ✅ Programming Languages
  { icon: <FaPython size={28} /> }, 
  { icon: <SiCplusplus size={28} /> }, 
  { icon: <FaJs size={28} /> }, 
  { icon: <SiFortran size={28} /> }, // Fortran for HPC  
  { icon: <SiR size={28} /> }, // R for Data Science  

  // ✅ Web & Backend (Minimal, Just Relevant Ones)
  { icon: <FaReact size={28} /> }, 
  { icon: <FaNodeJs size={28} /> }, 
  { icon: <FaHtml5 size={28} /> }, 
  { icon: <FaGithub size={28} /> }, 
  { icon: <FaCss3Alt size={28} /> }, 
  { icon: <SiTailwindcss size={28} /> }, 
  { icon: <SiFlask size={28} /> }, 
  { icon: <SiMysql size={28} /> },  

  // ✅ AI/ML & Data Science
  { icon: <SiTensorflow size={28} /> }, 
  { icon: <SiScikitlearn size={28} /> }, 
  { icon: <SiPandas size={28} /> }, 
  { icon: <SiNumpy size={28} /> }, 
  { icon: <SiKeras size={28} /> }, 
  { icon: <SiOpencv size={28} /> }, 
  { icon: <SiPytorch size={28} /> }, 
  { icon: <SiScipy size={28} /> }, // Scientific Computing  
  // { icon: <SiMatlab size={28} /> }, // MATLAB for Numerical Analysis  
  { icon: <SiJupyter size={28} /> }, // ✅ Jupyter Notebook  
  { icon: <SiAnaconda size={28} /> }, // ✅ Anaconda  

  // ✅ Data Visualization
  { icon: <SiTableau size={28} /> }, 
  { icon: <SiPlotly size={28} /> }, 
  // { icon: <SiSeaborn size={28} /> },  
  { icon: <PiMicrosoftExcelLogo size={28} /> }, // ✅ Microsoft Excel  

  // ✅ HPC & Research Computing
  { icon: <FaLinux size={28} /> }, 
  { icon: <FaAws size={28} /> }, 
  { icon: <SiNvidia size={28} /> }, // CUDA & GPU Computing  
  // { icon: <SiSlurm size={28} /> } // SLURM for HPC Job Scheduling
];





// const Achievements = [
//   { title: "GeeksforGeeks AIR 45", icon: <FaGraduationCap /> },
//   { title: "CodeKaze AIR 105", icon: <FaCode /> },
//   { title: "Codeforces Expert", icon: <FaChartLine /> },
//   { title: "LeetCode Knight", icon: <FaChartArea /> },
//   { title: "Highest CGPA", icon: <FaGraduationCap /> },
//   { title: "AWS Certification", icon: <FaAws /> },
//   { title: "Blockchain Specialist", icon: <FaDatabase /> },
//   { title: "Six Sigma Green Belt", icon: <FaChartLine /> }
// ];

const Achievements = [
  { title: "4.0/4.0 CGPA - UH", icon: <FaGraduationCap /> },  // Academic Excellence
  { title: "Recipient of 70% UH Scholarship", icon: <FaAward /> },  // Scholarship
  // { title: "UH AI Challenge Winner", icon: <FaTrophy /> },  // AI Competition
  { title: "Certificate of Excellence in AI", icon: <FaMedal /> },  // AI Competition
  { title: "Published 2 Scopus indexed Papers", icon: <FaBookOpen /> },  // Research & Publications
  { title: "OCI Generative AI Certified", icon: <SiOracle /> },  // Oracle AI Certification
  { title: "Microsoft Azure AI Certified", icon: <VscAzure /> },  // Azure AI Certification
  { title: "NVIDIA RAPIDS Certification", icon: <SiNvidia /> },  // GPU & ML Acceleration
  { title: "IEEE Student Branch Secretary", icon: <SiIeee /> }  // IEEE Leadership Role
];




const Home = ({ setCurrentSection }) => {
  const controls = useAnimation();
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  useEffect(() => {
    const startScroll = (ref, direction) => {
      let scrollInterval = setInterval(() => {
        if (ref.current) {
          if (direction === 'right' && ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
            ref.current.scrollLeft = 0;
          } else if (direction === 'left' && ref.current.scrollLeft <= 0) {
            ref.current.scrollLeft = ref.current.scrollWidth / 2;
          } else {
            ref.current.scrollLeft += direction === 'right' ? 1 : -1;
          }
        }
      }, 30);
      return () => clearInterval(scrollInterval);
    };

    const cleanup1 = startScroll(scrollRef1, 'right');
    const cleanup2 = startScroll(scrollRef2, 'left');
    const cleanup3 = startScroll(scrollRef3, 'right');

    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    };
  }, []);

  const renderSkillsSection = (items, ref) => (
    <div className="relative mb-8">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800 z-10"></div>
      <div 
        ref={ref} 
        className="flex space-x-4 overflow-x-hidden relative py-4"
      >
        {[...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full shadow-md flex items-center justify-center hover:bg-blue-700 transition duration-300 transform hover:scale-110 shadow-glow hover:shadow-glow-lg"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );

  const renderScrollSection = (items, ref) => (
    <div className="relative mb-8">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800 z-10"></div>
      <div 
        ref={ref} 
        className="flex space-x-6 overflow-x-hidden relative"
      >
        {[...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 bg-blue-600 text-white p-4 rounded-full shadow-md flex items-center space-x-3 hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
            style={{ width: 'auto' }}
          >
            <div className="text-white text-2xl">
              {item.icon}
            </div>
            <p className="text-white font-semibold whitespace-nowrap">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-2 text-gray-900 dark:text-white glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi There, I'm
        </motion.h1>
        
        <motion.h2
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-blue-600 dark:text-blue-400 glow-text"
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Anugam Saikiran
        </motion.h2>
        
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-800 dark:text-gray-200 glow-text"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I'm a{' '}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Researcher
          </span>
          ,{' '}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Data Scientist
          </span>
          , and{' '}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Software Developer
          </span>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => setCurrentSection('about')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
          >
            About Me
          </button>
          
          <button
            onClick={() => setCurrentSection('certifications')}
            className="text-blue-600 dark:text-blue-400 flex items-center group text-xl"
          >
            Hire Me 
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Latest Updates</h2>
        
        {renderScrollSection(LatestUpdates, scrollRef1)}
        
        <div className="my-8">
          {renderSkillsSection(Skills, scrollRef2)}
        </div>
        
        {renderScrollSection(Achievements, scrollRef3)}
      </motion.div>
    </section>
  );
};

export default Home;