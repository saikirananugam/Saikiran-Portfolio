import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "CodeSage",
    description: "Advanced code review assistant designed to enhance the software development process. It provides automated insights, best practice suggestions, and helps maintain code quality across projects.",
    technologies: ["Python", "Flask", "AST", "McCabe complexity", "Git integration"],
    link: "https://github.com/ascender1729/CodeSage"
  },
  {
    title: "SentiPulse",
    description: "An advanced sentiment analysis tool that leverages AI to assess the emotional tone of text inputs from social media. It offers real-time processing, intuitive UI, and robust backend integration with Hugging Face for accurate sentiment predictions.",
    technologies: ["Node.js", "Express", "Svelte", "Hugging Face API", "SQLite"],
    link: "https://github.com/ascender1729/sentipulse"
  },
  {
    title: "ByBit Inverse BTCUSD Perpetual Calculator",
    description: "A Ruby-based application that assists cryptocurrency traders in managing and calculating risks associated with ByBit's Inverse BTCUSD Perpetual contracts. It features various calculators and a user-friendly interface implemented with Tk.",
    technologies: ["Ruby", "Tk", "Financial analysis"],
    link: "https://github.com/ascender1729/BybitCalculator"
  },
  {
    title: "AudioDictate",
    description: "An efficient desktop application for transcribing audio files into text using Vosk speech recognition. It offers offline functionality for the transcription of WAV audio files, including the conversion of non-WAV formats into WAV.",
    technologies: ["Python", "Tkinter", "Vosk", "PyDub"],
    link: "https://github.com/ascender1729/AudioDictate"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
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