import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <div className="max-w-lg mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-green-600 dark:text-green-400">{status}</p>}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Connect with me</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/im-pavankumar" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/ascender1729" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg">
              <FaGithub size={32} />
            </a>
            <a href="https://twitter.com/the_complex_one" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg">
              <FaTwitter size={32} />
            </a>
            <a href="mailto:pavankumar.dubasi2019@gmail.com" className="text-white bg-red-600 p-3 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-lg">
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;