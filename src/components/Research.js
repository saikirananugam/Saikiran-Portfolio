import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaBook, FaCertificate } from 'react-icons/fa';

const Research = () => {
  const thesis = {
    title: "ENHANCING HEALTHCARE INSURANCE FRAUD DETECTION AND PREVENTION WITH A MACHINE LEARNING AND BLOCKCHAIN-BASED APPROACH",
    supervisor: "Dr. Rajesh Kumar Sinha, Assistant Professor",
    department: "Department of Mathematics",
    institution: "National Institute of Technology Patna",
    period: "July – December, 2023",
    codeLink: "https://github.com/yourusername/thesis-code",
    pdfLink: "https://yourwebsite.com/path-to-thesis.pdf"
  };

  const publications = [
    {
      title: "Artistic Style Transfer using Generative Adversarial Networks: A Pix2Pix Implementation",
      authors: "Dubasi Pavan Kumar, Bhadula, S., et al.",
      conference: "2024 International Conference on Communication, Computer Sciences and Engineering (IC3SE)",
      status: "Accepted, to be published",
      link: "https://conference-website.com/your-paper"
    },
    {
      title: "A Study on Facial Feature Extraction and Emotional Analysis Using ML",
      authors: "Adhyaru, K., Ishan, Harshitha, D., Mundlur, R.P., Dubali Pavan Kumar, et al.",
      journal: "International Journal of All Research Education and Scientific Methods (IJARESM)",
      details: "ISSN: 2455-6211, Vol. 11, Issue 7, July 2023, pp. 2455-2467",
      link: "https://journal-website.com/your-paper"
    }
  ];

  const patents = [
    {
      title: "AI-Enabled Robotic Device for Business Automation",
      inventors: "Kousar, H., Dubasi Pavan Kumar, Mohammed, S.A., et al.",
      details: "UK Design Registration No. 6335588, Grant Date: 10 January 2024",
      link: "https://patent-office.gov/your-patent"
    },
    {
      title: "Emotion Recognition and Analysis System for Mental Health Assessment",
      inventors: "Navaneethakrishan, S.R., Chinta, S., Dubasi Pavan Kumar, et al.",
      details: "The Patent Office Journal, 29/09/2023, No. 39/2023, pp. 64318-64802",
      link: "https://patent-office.gov/your-patent"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Research
        </motion.h2>
        
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Thesis</h3>
            <FaBook className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-lg mb-2">
            <strong>Title:</strong> {thesis.title}
          </p>
          <p className="mb-2"><strong>Supervisor:</strong> {thesis.supervisor}</p>
          <p className="mb-2"><strong>Department:</strong> {thesis.department}</p>
          <p className="mb-2"><strong>Institution:</strong> {thesis.institution}</p>
          <p className="mb-2"><strong>Period:</strong> {thesis.period}</p>
          <div className="mt-4">
            <a href={thesis.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mr-4">
              View Thesis PDF
            </a>
            <a href={thesis.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              View Code
            </a>
          </div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Publications</h3>
            <FaFileAlt className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
          <ul className="space-y-6">
            {publications.map((pub, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                <p className="font-semibold">{pub.title}</p>
                <p>Authors: {pub.authors}</p>
                <p>{pub.conference || pub.journal}</p>
                {pub.status && <p>{pub.status}</p>}
                {pub.details && <p>{pub.details}</p>}
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  View Publication
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Patents</h3>
            <FaCertificate className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
          <ul className="space-y-6">
            {patents.map((patent, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                <p className="font-semibold">{patent.title}</p>
                <p>Inventors: {patent.inventors}</p>
                <p>{patent.details}</p>
                <a href={patent.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  View Patent
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;