


//---------------------------

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards,Autoplay, Pagination, Navigation} from "swiper/modules";

// Import icons
import {  FaLinkedin } from "react-icons/fa";
import { PiCertificateThin } from "react-icons/pi";
import { VscAzure } from "react-icons/vsc";
import { SiOracle, SiNvidia, SiIeee, SiAccenture  } from "react-icons/si";
import { GrServerCluster } from "react-icons/gr";
import { FaAws } from "react-icons/fa6";
import { FcConferenceCall } from "react-icons/fc";




// Import images
import Image4 from "../images/HPC_HPE_DSI.jpeg";
import Image3 from "../images/OCI_Gen_AI.jpeg";
import Image2 from "../images/azure.png";
import Image1 from "../images/ai_excellence.jpeg";
import Image5 from "../images/nvidia_accelerated.jpeg";
import Image6 from "../images/aws_genai.jpg";
import Image7 from "../images/IEEE_membership.png";
import Image8 from "../images/ICAPSM_speech.jpeg";
import Image9 from "../images/coogs_certificate1.jpg";
import Image10 from "../images/top_ds_voice.jpeg";
import Image11 from "../images/UH-Parameters-Feature.jpeg";
// import Image12 from "../images/Let_us_C.jpeg";

// Import testimonial images
import Testimonial1 from "../images/Dr.Vijayprakash_LOR.png";
import Testimonial2 from "../images/Dr.Sandeep_lor.png";
import Testimonial3 from "../images/secernate_lor.png";
import Testimonial4 from "../images/Lloyd_recomendatition.png";
import Testimonial5 from "../images/sai_priya_lor.png";

// Define services with links
const Certifications = [
  {
    title: "Featured in UH Parameters Magazine Fall 2025",
    icon: <PiCertificateThin className="text-4xl mb-4" />,
    description: "NASA ISS Research (Research Data Scientist)",
    image: Image11,
    link: "https://drive.google.com/file/d/1QpeQwFRmWwMFA1hQrHLx-3vw6zFry0F7/view?usp=sharing"
  },
  {
    title: "Certificate of Excellence in Artificial Intelligence",
    icon: <PiCertificateThin className="text-4xl mb-4" />,
    description: "🏆 Recognized for outstanding AI expertise with HPE Data Science Institute’s Certificate of Excellence",
    image: Image1,
    link: "https://drive.google.com/file/d/10AVIoHibtAzR0Q8MKbVsHX2tubqmifFS/view?usp=sharing"
  },
  {
    title: "Microsoft Azure AI-900 Certified",
    icon: <VscAzure className="text-4xl mb-4" />,
    description: "Scored 928/1000 (Top 15%) in Microsoft Azure AI-900 Exam.",
    image: Image2,
    link: "https://drive.google.com/file/d/1FL49aPLDo8WdaGM_PR89-QoK4NST7Wsf/view?usp=sharing"
  },
  {
    title: "OCI 2024 Generative AI Certified Professional",
    icon: <SiOracle  className="text-4xl mb-4" />,
    description: "Certified in OCI 2024 Generative AI with 95%, mastering LLMs, RAG-based chatbots, and AI model fine-tuning.",
    image: Image3,
    link: "https://drive.google.com/file/d/1Hw3dvmVooTLzdwEu8bDjkGjl07R4GwX3/view?usp=sharing"
  },
  {
    title: "Introduction to Cluster Computing (HPC)",
    icon: <GrServerCluster className="text-4xl mb-4" />,
    description: "Earned certification in Cluster Computing from UH HPE DSI, mastering SLURM, HPC workflows, and job scheduling on Carya & Neches clusters",
    image: Image4,
    link: "https://drive.google.com/file/d/1cakxwAXhV2Vbjjn-6sO-6PmSR9M2ep6t/view?usp=sharing"
  },
  {
    title: "GPU-Accelerated Data Science with NVIDIA RAPIDS",
    icon: <SiNvidia className="text-4xl mb-4" />,
    description: "Hands-on experience with GPU-accelerated data science in NVIDIA RAPIDS, leveraging cuDF, cuGraph, Dask cuDF, and RAPIDS ML.",
    image: Image5,
    link: "https://drive.google.com/file/d/1bm3QxljwZTay5P3MjZA4fWM2EXd5o1VN/view?usp=sharing"
  },
  {
    title: "AWS Introduction to Generative AI",
    icon: <FaAws  className="text-4xl mb-4" />,
    description: "Accomplished AWS Introduction to Generative AI Experience, gaining expertise in Agentic AI.",
    image: Image6,
    link: "https://drive.google.com/file/d/1fHzBTKNgmRVyCPuEeFaxa0CzJXLq3M9C/view?usp=sharing"
  },
  {
    title: "IEEE Student Branch Secretary",
    icon: <SiIeee  className="text-4xl mb-4" />,
    description: "Led IEEE Student Branch operations, organizing technical events, workshops, and fostering innovation within the student community",
    image: Image7,
    link: "https://drive.google.com/file/d/1srJqHd908yIfuzCapBVXxA-JkRkcTy7Y/view?usp=sharing"
  },
  {
    title: "ICAPSM 2023 Research Presentation",
    icon: <FcConferenceCall className="text-4xl mb-4" />,
    description: "Presented research on Speech Emotion Recognition and Startup Success Prediction using Deep Learning at ICAPSM 2023",
    image: Image8,
    link: "https://drive.google.com/file/d/1_LnaoKpS1-UdE4xSn0ZnZaXFuW9OjB8a/view?usp=sharing"
  },
  {
    title: "Certification of Appreciation",
    icon: <SiAccenture className="text-4xl mb-4" />,
    description: "Secured Certification of Appreciation and Gift Coupon at Coogs for Energy Transition Event.",
    image: Image9,
    link: "https://drive.google.com/file/d/1KzWd-ZYCb-BSuTRzde-qvKkJKjE62H_M/view?usp=sharing"
  },
  {
    title: "LinkedIn Top Data Science Voice",
    icon: <FaLinkedin className="text-4xl mb-4" />,
    description: "Recognized as a LinkedIn Top Data Science Voice for contributions, engagement, and insights in the data science community.",
    image: Image10,
    link: "https://drive.google.com/file/d/1qmUfTa9qVjmRijfB9VmjBHAwpS5T6sH0/view?usp=sharing"
  }
  // {
  //   title: "Conference Poster Presentation",
  //   icon: <FaChartLine className="text-4xl mb-4" />,
  //   description: "Presented research findings at a prestigious conference.",
  //   image: Image11,
  //   link: "https://example.com/poster"
  // },
  // {
  //   title: "Conference Poster Presentation",
  //   icon: <FaChartLine className="text-4xl mb-4" />,
  //   description: "Presented research findings at a prestigious conference.",
  //   image: Image12,
  //   link: "https://example.com/poster"
  // }
];

// Define testimonials
const testimonials = [
  { image: Testimonial1, alt: "Recommendation 1" },
  { image: Testimonial2, alt: "Recommendation 2" },
  { image: Testimonial3, alt: "Recommendation 3" },
  { image: Testimonial4, alt: "Recommendation 4" },
  { image: Testimonial5, alt: "Recommendation 5" }

];


const CertificationsComponent = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white-600 dark:text-white-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Achievements
        </motion.h2>

        {/* Swiper Component for Certifications with Autoplay */}
        <Swiper 
          effect="cards" 
          grabCursor={true} 
          modules={[EffectCards, Autoplay]} // ✅ Included Autoplay module
          autoplay={{ 
            delay: 2500, // ✅ Moves to the next slide every 2.5 seconds
            disableOnInteraction: false // ✅ Keeps autoplay running even after user interaction
          }} 
          loop={true} // ✅ Ensures continuous sliding
          className="mySwiper w-full max-w-lg"
        >
          {Certifications.map((certification, index) => (  
            <SwiperSlide key={index} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6">
              {/* <a href={certification.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-72 object-cover rounded-lg mb-4 hover:opacity-80 transition-opacity"
                />
                <div className="text-center">
                  <div className="text-blue-600 dark:text-blue-400 flex justify-center">{certification.icon}</div>
                  <h3 className="text-xl font-bold mt-2">{certification.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{certification.description}</p>
                </div>
              </a> */}
              <div className="relative group">
              <a href={certification.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-96 object-contain rounded-lg mb-4 transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-semibold">
                    View Certificate
                  </span>
                </div>
              </a>
              <div className="text-center">
                <div className="text-blue-600 dark:text-blue-400 flex justify-center">{certification.icon}</div>
                <h3 className="text-xl font-bold mt-2">{certification.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{certification.description}</p>
              </div>
            </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Contact Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="mailto:saikirananugam@gmail.com" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Swiper for Testimonials */}
        <motion.h2 
          className="text-3xl font-bold mt-16 mb-8 text-center text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Testimonials & Recommendations */}
        </motion.h2>

        <div className="flex justify-center">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full max-w-8xl"
            onSwiper={(swiper) => (window.swiperInstance = swiper)} // Store swiper instance globally
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-auto object-contain rounded-lg cursor-pointer"
                  onMouseEnter={() => window.swiperInstance.autoplay.stop()} // Stop autoplay when hovering
                  onMouseLeave={() => window.swiperInstance.autoplay.start()} // Resume autoplay when leaving
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};




export default CertificationsComponent; // ✅ Renamed export