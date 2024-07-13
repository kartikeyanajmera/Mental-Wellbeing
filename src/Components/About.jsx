// WhatWeDoBox.jsx

import React from 'react';
import PropTypes from 'prop-types';

function About({mode}) {
  return (
    <div className={`${mode=='dark' ? 'bg-gray-900 text-white':'bg-gray-100' } min-h-screen flex items-center justify-center`}>
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl text-center font-thin text-blck">What We Do</h2>
        <p className="text-lg text-gry-700 mt-8 font-sans">
          Join us to experience the mental health benefits of our services. Our tailored approach includes guided meditation, breathing exercises, eye exercises, and mood tracking to promote relaxation, reduce stress, and enhance overall well-being.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white border border-black border-opacity-10 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black transition-transform duration-300 transform hover:scale-105">Guided Meditation</h3>
              <p className="text-gray-700 mt-4">
                Enjoy guided meditation sessions that help you relax and find inner peace.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-black border-opacity-10 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black transition-transform duration-300 transform hover:scale-105">Breathing Exercises</h3>
              <p className="text-gray-700 mt-4">
                Learn breathing techniques to manage stress and improve relaxation.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-black border-opacity-10 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black transition-transform duration-300 transform hover:scale-105">Eye Exercises</h3>
              <p className="text-gray-700 mt-4">
                Practice exercises to relax your eyes and reduce strain from screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
export default About;
