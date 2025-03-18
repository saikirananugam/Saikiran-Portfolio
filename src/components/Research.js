// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaFileAlt, FaBook, FaCertificate } from 'react-icons/fa';

// const Research = () => {
//   const thesis = {
//     title: "Enhancing Healthcare Insurance Fraud Detection and Prevention with a Machine Learning and Blockchain-Based Approach",
//     supervisor: "Dr. Rajesh Kumar Sinha, Associate Professor",
//     department: "Department of Mathematics",
//     institution: "National Institute of Technology Patna",
//     period: "July, 2023 – June, 2024",
//     codeLink: "https://github.com/ascender1729/HealthFraudMLChain",
//     pdfLink: "https://www.google.com"
//   };

//   const publications = [
//     {
//       title: "Artistic Style Transfer using Generative Adversarial Networks: A Pix2Pix Implementation",
//       authors: "Dubasi Pavan Kumar, Bhadula, S., et al.",
//       conference: "2024 International Conference on Communication, Computer Sciences and Engineering (IC3SE)",
//       details: "Date of Conference: 09-11 May 2024, Date Added to IEEE Xplore: 23 July 2024, Electronic ISBN: 979-8-3503-6684-6, Print on Demand(PoD) ISBN: 979-8-3503-6685-3, DOI: 10.1109/IC3SE62002.2024.10592950, Publisher: IEEE",
//       link: "https://ieeexplore.ieee.org/document/10592950"
//     },
//     {
//       title: "A Study on Facial Feature Extraction and Emotional Analysis Using ML",
//       authors: "Adhyaru, K., Ishan, Harshitha, D., Mundlur, R.P., Dubali Pavan Kumar, et al.",
//       journal: "International Journal of All Research Education and Scientific Methods (IJARESM)",
//       details: "ISSN: 2455-6211, Vol. 11, Issue 7, July 2023, pp. 2455-2467",
//       link: "https://www.ijaresm.com/a-study-on-facial-feature-extraction-and-emotional-analysis-using-ml"
//     }
//   ];

//   const patents = [
//     {
//       title: "AI-Enabled Robotic Device for Business Automation",
//       inventors: "Kousar, H., Dubasi Pavan Kumar, Mohammed, S.A., et al.",
//       details: "UK Design Registration No. 6335588, Grant Date: 10 January 2024",
//       link: "https://www.registered-design.service.gov.uk/find/6335588"
//     },
//     {
//       title: "Emotion Recognition and Analysis System for Mental Health Assessment",
//       inventors: "Navaneethakrishan, S.R., Chinta, S., Dubasi Pavan Kumar, et al.",
//       details: "The Patent Office Journal, 29/09/2023, No. 39/2023, pp. 64318-64802",
//       link: "https://www.search.ipindia.gov.in/IPOJournal/Journal/Patent"
//     }
//   ];

//   return (
//     <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Research
//         </motion.h2>
        
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Dissertation</h3>
//             <FaBook className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
//             <strong>Title:</strong> {thesis.title}
//           </p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Supervisor:</strong> {thesis.supervisor}</p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Department:</strong> {thesis.department}</p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Institution:</strong> {thesis.institution}</p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Period:</strong> {thesis.period}</p>
//           <div className="mt-4">
//             <a href={thesis.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 mr-4">
//               View Thesis PDF
//             </a>
//             <a href={thesis.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
//               View Code
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Publications</h3>
//             <FaFileAlt className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <ul className="space-y-6">
//             {publications.map((pub, index) => (
//               <li key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
//                 <p className="font-semibold text-gray-800 dark:text-gray-200">{pub.title}</p>
//                 <p className="text-gray-700 dark:text-gray-300">Authors: {pub.authors}</p>
//                 <p className="text-gray-700 dark:text-gray-300">{pub.conference || pub.journal}</p>
//                 {pub.status && <p className="text-gray-700 dark:text-gray-300">{pub.status}</p>}
//                 {pub.details && <p className="text-gray-700 dark:text-gray-300">{pub.details}</p>}
//                 <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
//                   View Publication
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Patents</h3>
//             <FaCertificate className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <ul className="space-y-6">
//             {patents.map((patent, index) => (
//               <li key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
//                 <p className="font-semibold text-gray-800 dark:text-gray-200">{patent.title}</p>
//                 <p className="text-gray-700 dark:text-gray-300">Inventors: {patent.inventors}</p>
//                 <p className="text-gray-700 dark:text-gray-300">{patent.details}</p>
//                 <a href={patent.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
//                   View Patent
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Research;
//--------------------------------------------------------------------------------------


// import React from 'react';
// import { motion } from 'framer-motion';
// import {  FaBook, FaCertificate } from 'react-icons/fa';
// import { GiArchiveResearch } from 'react-icons/gi';
// // import { FcConferenceCall } from 'react-icons/fc';
// // import { SiIeee, SiNasa } from 'react-icons/si';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; 
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import posterImage from '../images/poster.jpeg';
// import image1 from '../images/poster_ochegs.jpeg';  // Add more images if needed
// import image2 from '../images/ai_excellence.jpeg';

// const researchImages = [posterImage, image1, image2]; 



// <Swiper
//   modules={[Navigation, Pagination, Autoplay]}
//   spaceBetween={10}
//   slidesPerView={1}
//   navigation
//   pagination={{ clickable: true }}
//   autoplay={{ delay: 3000, disableOnInteraction: false }}
//   breakpoints={{
//     640: { slidesPerView: 1 }, 
//     768: { slidesPerView: 2 }, 
//     1024: { slidesPerView: 3 }
//   }}
//   className="my-8"
// >
//   {researchImages.map((image, index) => (
//     <SwiperSlide key={index}>
//       <img src={image} alt={`Research ${index + 1}`} className="w-full h-auto rounded-lg shadow-md"/>
//     </SwiperSlide>
//   ))}
// </Swiper>







// const Research = () => {
//   const thesis = {
//     title: "Solution Convection and Mesoscopic Protein Aggregation: Space Results",
//     supervisor: "Professor X",
//     department: "Chemical & Biomolecular Engineering",
//     institution: "University of Houston",
//     period: "2024 - Present",
//     codeLink: "https://github.com/saikirananugam",
//     pdfLink: "https://example.com/thesis.pdf"
//   };

//   const publications = [
//     {
//       title: "Energy Transition AI: Optimizing Renewable Energy Systems",
//       authors: "Anugam S., et al.",
//       conference: "ICAPSM 2023 (International Conference on Advances in Physical Sciences & Materials)",
//       details: "ISSN: 2455-6211, July 2023",
//       link: "https://example.com/publication1"
//     },
//     {
//       title: "Machine Learning for Structural Integrity in Aerospace",
//       authors: "Anugam S., et al.",
//       journal: "IEEE Transactions on Aerospace & Electronics",
//       details: "DOI: 10.1109/IC3SE62002.2024.10592950, IEEE",
//       link: "https://ieeexplore.ieee.org/document/10592950"
//     }
//   ];

//   const patents = [
//     {
//       title: "Multipurpose Agriculture Apparatus",
//       inventors: "Anugam S., et al.",
//       details: "Patent No. 202241008404, Granted 2023",
//       link: "https://example.com/patent"
//     }
//   ];

//   return (
//     <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Research
//         </motion.h2>
        
//         {/* Thesis Section */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Thesis / Dissertation</h3>
//             <GiArchiveResearch className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
//             <strong>Title:</strong> {thesis.title}
//           </p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Supervisor:</strong> {thesis.supervisor}</p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Department:</strong> {thesis.department}</p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Institution:</strong> {thesis.institution}</p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Period:</strong> {thesis.period}</p>
//           <div className="mt-4">
//             <a href={thesis.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 mr-4">
//               View Thesis PDF
//             </a>
//             <a href={thesis.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
//               View Code
//             </a>
//           </div>
//         </motion.div>

//         {/* Publications Section */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Publications</h3>
//             <FaBook className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <ul className="space-y-6">
//             {publications.map((pub, index) => (
//               <li key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
//                 <p className="font-semibold text-gray-800 dark:text-gray-200">{pub.title}</p>
//                 <p className="text-gray-700 dark:text-gray-300">Authors: {pub.authors}</p>
//                 <p className="text-gray-700 dark:text-gray-300">{pub.conference || pub.journal}</p>
//                 <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
//                   View Publication
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Patents Section */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Patents</h3>
//             <FaCertificate className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <ul className="space-y-6">
//             {patents.map((patent, index) => (
//               <li key={index}>
//                 <p className="font-semibold text-gray-800 dark:text-gray-200">{patent.title}</p>
//                 <p className="text-gray-700 dark:text-gray-300">Inventors: {patent.inventors}</p>
//                 <a href={patent.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
//                   View Patent
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Research;

//--------------------
//test
import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCertificate } from 'react-icons/fa';
import { GiArchiveResearch } from 'react-icons/gi';

// Import Swiper styles and components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import Image1 from '../images/photo-output8.jpeg'; // Adjust the path
import Image2 from '../images/team-coorg.jpg'; // Adjust the path
import Image3 from '../images/photo-output5.jpeg'; // Adjust the path
import Image4 from '../images/photo-output6.jpeg'; // Adjust the path
import Image5 from '../images/DSI_flexi.jpeg'; // Adjust the path
import Image6 from '../images/photo-output4.jpeg'; // Adjust the path
import Image7 from '../images/photo-output3.jpeg'; // Adjust the path
import Image8 from '../images/photo-output2.jpeg'; // Adjust the path
import Image9 from '../images/user_testing.jpeg'; // Adjust the path
import Image10 from '../images/photo-output7.jpeg'; // Adjust the path
import Image11 from '../images/HPE_website.jpeg'; // Adjust the path
import Image12 from '../images/class2.jpeg'; // Adjust the path
import Image13 from '../images/photo-output.jpeg'; // Adjust the path




// import Image2 from '../images/AI_challenge.png'; // Adjust the path
// import Image3 from '../images/WhatsApp Image 2025-02-08 at 01.20.33.jpeg'; // Adjust the path
// import Image4 from '../images/Thesis_team.jpeg'; // Adjust the path
// import Image5 from '../images/prototype_dsi.jpeg'; // Adjust the path
// import Image6 from '../images/user_testing.jpeg'; // Adjust the path
// import Image7 from '../images/HPE_website.jpeg'; // Adjust the path
// import Image8 from '../images/IEEE_team.jpeg'; // Adjust the path
// import Image9 from '../images/DSI_flexi.jpeg'; // Adjust the path
// import Image10 from '../images/Group_picture.jpeg'; // Adjust the path
// import Image11 from '../images/.jpeg'; // Adjust the path
// import Image12 from '../images/Ochegs_Group_photo.jpeg'; // Adjust the path
// import Image13 from '../images/Team_Watt_A_Coog.jpeg'; // Adjust the path
// import Image14 from '../images/Vekilov_party2.jpeg'; // Adjust the path
// import Image15 from '../images/Dr.Powell2.jpeg'; // Adjust the path




import { PiPresentation } from 'react-icons/pi';



//AI challenge PiPresentatio, 





const images = [Image1, Image2, Image3, Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13];
const Research = () => {
  const thesis = {
    title: "Solution Convection and Mesoscopic Protein Aggregation: Space Results",
    supervisor: "Dr.Vekilov",
    department: "Chemical & Biomolecular Engineering",
    institution: "University of Houston",
    period: "2024 - Present",
    // codeLink: "https://github.com/saikirananugam",
    // pdfLink: "https://example.com/thesis.pdf"
  };

  const publications = [
    {
      title: "Speech Emotion Recognition using Deep Learning Algorithms",
      authors: "Anugam Saikiran, Dr.Sampath Kumar Tallapally,Uday kiran Anugam, et al.",
      conference: "ICAPSM 2023 (International Conference on Advances in Physical Sciences & Materials)",
      details: "AIP Conf. Proc. 3122, 080015 (2024)",
      link: "https://pubs.aip.org/aip/acp/article-abstract/3122/1/080015/3298960/Speech-emotion-recognition-using-deep-learning?redirectedFrom=fulltext"
    },
    {
      title: "Prediction of Success for Currently Operating Startups",
      authors: "Anugam Saikiran, Dr.Sampath Kumar Tallapally, Meghana Daddanala, Apoorva Irukulla,Uday kiran Anugam, et al.",
      conference: "ICAPSM 2023 (International Conference on Advances in Physical Sciences & Materials)",
      details: "AIP Conf. Proc. 3122, 080014 (2024)",
      link: "https://pubs.aip.org/aip/acp/article-abstract/3122/1/080014/3298911/Prediction-of-success-for-currently-operating?redirectedFrom=fulltext"
    }
  ];

  const patents = [
    {
      title: "Multipurpose Agriculture Apparatus",
      inventors: "Anugam Saikiran, Apoorva Irukulla, Vaishnavi Bobbala et al.",
      details: "Patent No. 202241008404, Granted 2023",
      link: "https://drive.google.com/file/d/1djw5Jl1dLUaEAGySipuy7T6AQDNWZdW3/view"
    }
  ];

  // Placeholder images for testing Swiper
  
  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Swiper Slider for Testing */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000, // Image changes every 3 seconds
            disableOnInteraction: false,
          }}
          className="mb-12 h-[500px] max-w-2xl mx-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Research Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Research
        </motion.h2>

        {/* Thesis Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Thesis / Dissertation</h3>
            <GiArchiveResearch className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
            <strong>Title:</strong> {thesis.title}
          </p>
          <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Supervisor:</strong> {thesis.supervisor}</p>
          <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Department:</strong> {thesis.department}</p>
          <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Institution:</strong> {thesis.institution}</p>
          <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Period:</strong> {thesis.period}</p>
          <div className="mt-4">
            <a href={thesis.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 mr-4">
              View Thesis PDF
            </a>
            <a href={thesis.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
              View Code
            </a>
          </div>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Publications</h3>
            <FaBook className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
          <ul className="space-y-6">
            {publications.map((pub, index) => (
              <li key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                <p className="font-semibold text-gray-800 dark:text-gray-200">{pub.title}</p>
                <p className="text-gray-700 dark:text-gray-300">Authors: {pub.authors}</p>
                <p className="text-gray-700 dark:text-gray-300">{pub.conference || pub.journal}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                  View Publication
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Patents Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Patents</h3>
            <FaCertificate className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
          <ul className="space-y-6">
            {patents.map((patent, index) => (
              <li key={index}>
                <p className="font-semibold text-gray-800 dark:text-gray-200">{patent.title}</p>
                <p className="text-gray-700 dark:text-gray-300">Inventors: {patent.inventors}</p>
                <a href={patent.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
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

//-----------------------------------------------Effect coverflow did not work as expected--------------------------------------------

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBook, FaCertificate } from 'react-icons/fa';
// import { GiArchiveResearch } from 'react-icons/gi';

// // Import Swiper React components and coverflow styles
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // Import required modules from Swiper
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// // Import your images
// import Image1 from '../images/poster.jpeg';
// import Image2 from '../images/poster_ochegs.jpeg';
// import Image3 from '../images/PHOTO.jpg';
// import Image4 from '../images/data_science_energy_logo.jpg';

// const images = [Image1, Image2, Image3,Image4];

// const Research = () => {
//   const thesis = {
//     title: "Solution Convection and Mesoscopic Protein Aggregation: Space Results",
//     supervisor: "Professor X",
//     department: "Chemical & Biomolecular Engineering",
//     institution: "University of Houston",
//     period: "2024 - Present",
//     codeLink: "https://github.com/saikirananugam",
//     pdfLink: "https://example.com/thesis.pdf"
//   };

//   const publications = [
//     {
//       title: "Energy Transition AI: Optimizing Renewable Energy Systems",
//       authors: "Anugam S., et al.",
//       conference: "ICAPSM 2023 (International Conference on Advances in Physical Sciences & Materials)",
//       details: "ISSN: 2455-6211, July 2023",
//       link: "https://example.com/publication1"
//     },
//     {
//       title: "Machine Learning for Structural Integrity in Aerospace",
//       authors: "Anugam S., et al.",
//       journal: "IEEE Transactions on Aerospace & Electronics",
//       details: "DOI: 10.1109/IC3SE62002.2024.10592950, IEEE",
//       link: "https://ieeexplore.ieee.org/document/10592950"
//     }
//   ];

//   const patents = [
//     {
//       title: "Multipurpose Agriculture Apparatus",
//       inventors: "Anugam S., et al.",
//       details: "Patent No. 202241008404, Granted 2023",
//       link: "https://example.com/patent"
//     }
//   ];

//   return (
//     <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         {/* Coverflow Slider (placed above the Research heading) */}
//         <Swiper
//           modules={[EffectCoverflow, Pagination]}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView="auto"
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={{ clickable: true }}
//           className="mb-12 max-w-2xl mx-auto"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide
//               key={index}
//               className="w-[300px] h-[300px] flex justify-center items-center"
//             >
//               <img
//                 src={image}
//                 alt={`Research Image ${index + 1}`}
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <motion.h2 
//           className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Research
//         </motion.h2>

//         {/* Thesis Section */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//               Thesis / Dissertation
//             </h3>
//             <GiArchiveResearch className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
//             <strong>Title:</strong> {thesis.title}
//           </p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300">
//             <strong>Supervisor:</strong> {thesis.supervisor}
//           </p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300">
//             <strong>Department:</strong> {thesis.department}
//           </p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300">
//             <strong>Institution:</strong> {thesis.institution}
//           </p>
//           <p className="mb-2 text-gray-700 dark:text-gray-300">
//             <strong>Period:</strong> {thesis.period}
//           </p>
//           <div className="mt-4">
//             <a
//               href={thesis.pdfLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 dark:text-blue-400 hover:text-blue-800 mr-4"
//             >
//               View Thesis PDF
//             </a>
//             <a
//               href={thesis.codeLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 dark:text-blue-400 hover:text-blue-800"
//             >
//               View Code
//             </a>
//           </div>
//         </motion.div>

//         {/* Publications Section */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//               Publications
//             </h3>
//             <FaBook className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <ul className="space-y-6">
//             {publications.map((pub, index) => (
//               <li
//                 key={index}
//                 className="border-b border-gray-300 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0"
//               >
//                 <p className="font-semibold text-gray-800 dark:text-gray-200">
//                   {pub.title}
//                 </p>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   Authors: {pub.authors}
//                 </p>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   {pub.conference || pub.journal}
//                 </p>
//                 <a
//                   href={pub.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 dark:text-blue-400 hover:text-blue-800"
//                 >
//                   View Publication
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Patents Section */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//               Patents
//             </h3>
//             <FaCertificate className="text-4xl text-blue-600 dark:text-blue-400" />
//           </div>
//           <ul className="space-y-6">
//             {patents.map((patent, index) => (
//               <li key={index}>
//                 <p className="font-semibold text-gray-800 dark:text-gray-200">
//                   {patent.title}
//                 </p>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   Inventors: {patent.inventors}
//                 </p>
//                 <a
//                   href={patent.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 dark:text-blue-400 hover:text-blue-800"
//                 >
//                   View Patent
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Research;
