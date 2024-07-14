import React from 'react';

const HireMeButton = ({ setCurrentSection }) => {
  return (
    <div className="mt-12 text-center">
      <button
        onClick={() => setCurrentSection('services')}
        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Hire Me
      </button>
    </div>
  );
};

export default HireMeButton;