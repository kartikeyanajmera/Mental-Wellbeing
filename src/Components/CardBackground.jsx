npm install react-scroll-horizontal@latest react-motion@latest
import React from 'react';
import { Link } from 'react-router-dom';
import breathingExerciseIcon from '../assets/breathingExerciseIcon.svg';
import eyeExerciseIcon from '../assets/eyeExerciseIcon.svg';
import guidedMeditationIcon from '../assets/guidedMeditationIcon.png';
import PropTypes from 'prop-types';

const CardsBackground = ({mode}) => {
  return (
    <>
      <div className={`flex justify-center items-center px-3 ${mode=='dark' ? 'bg-gray-800 text-white':'white-grid' } text-3xl font-extralight`}>
        <span className="font-sans mt-24">OUR SERVICES</span>
      </div> 

      <div className={`flex items-center ${mode==='dark'? 'bg-gray-800':'white-grid ' } justify-center py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          <div className="w-full p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-blue-300 to-blue-200 flex flex-col justify-center items-center">
            <img src={guidedMeditationIcon} alt="Guided Meditation icon" className="image-class mb-4 w-16 h-16" />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Guided Meditation</h3>
              <p className="text-xs text-gray-700 mb-4">Guided Pathways to Deep Relaxation</p>
              <Link to="/guided" className="bg-indigo-600 animated-button  py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">Start Meditating</Link>
            </div>
          </div>

          <div className="w-full p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-green-300 to-green-200 flex flex-col justify-center items-center">
            <img src={breathingExerciseIcon} alt="Breathing Exercises icon" className="image-class mb-4 w-16 h-16" />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Breathing Exercises</h3>
              <p className="text-xs text-gray-700 mb-4">Feel Calm, Breathe Deep, Heal Within</p>
              <Link to="/breath" className="bg-indigo-600 animated-button py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">Begin Breathing</Link>
            </div>
          </div>

          <div className="w-full p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-yellow-300 to-yellow-200 flex flex-col justify-center items-center">
            <img src={eyeExerciseIcon} alt="Eye Exercises icon" className="image-class mb-4 w-16 h-16" />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Eye Exercises</h3>
              <p className="text-xs text-gray-700 mb-4">Soothe Your Eyes, Lift Your Spirit</p>
              <Link to="/eye" className="animated-button text- py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">Start Exercising</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
CardsBackground.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
export default CardsBackground;
