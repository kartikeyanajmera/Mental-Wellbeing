import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import breathingGuide from '../Music/Breathing.mp3';
import Breath from '../assets/Breathing.mp4';

const exercises = [
  {
    id: 1,
    title: "Breathing Exercise 1",
    description: "Interactive animated breathing pattern. Click 'Get Started' to begin.",
    content: (nextExercise) => (
      <div className="flex flex-col items-center justify-center space-y-4">
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-indigo-600 rotating-button text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors"
          onClick={nextExercise}
        >
        Get Started
        </motion.button>
      </div>
    ),
  },
  {
    id: 2,
    title: "Breathing Exercise 2",
    content: () => (
      <div className="">
        <audio controls src={breathingGuide} className="w-full">
          Your browser does not support the audio element.
        </audio>
      </div>
    ),
  },
  {
    id: 3,
    title: "Breathing Exercise 3",
    description: "Timers and counters to help pace your breathing.",
    content: () => (
      <div className="flex items-center justify-center">
        <video className="w-full rounded-lg shadow-lg" controls>
          <source src={Breath} type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
      </div>
    ),
  },
  {
    id: 4,
    title: "Give us feedback",
    description: "Your experience matters",
    content: () => (
      <form className="flex items-center justify-center">
        <textarea className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md px-4 py-2 w-64 h-32 resize-none" placeholder="Enter text..."></textarea>
      </form>
    ),
  },
];

function Breathing() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [play] = useSound(breathingGuide);
  const videoRef = useRef(null);

  useEffect(() => {
    if (currentExercise === 2 && videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  }, [currentExercise]);

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setCurrentExercise(0); // Reset to the first exercise
    }
  };

  const prevExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
    } else {
      setCurrentExercise(exercises.length - 1); // Go to the last exercise
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-cyan-400 font-bold font-sans">Welcome to Breathing Exercises</h1>
      <p className="text-lg text-center my-4 text-cyan-400">Breathing exercises help manage stress and improve relaxation.</p>

      <div className="relative bg-zinc-900/90 p-10 my-24 rounded-3xl shadow-lg transition-all duration-500 ease-in-out transform w-full max-w-lg">
        <AnimatePresence>
          <motion.div
            key={exercises[currentExercise].id}
            initial={{ opacity: 0, y: 50 }} // Adjust initial opacity and y position
            animate={{ opacity: 1, y: 0 }} // Smoothly animate to full opacity and original position
            transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust transition properties
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-400">{exercises[currentExercise].title}</h2>
            <p className="text-gray-400">{exercises[currentExercise].description}</p>
            {exercises[currentExercise].id === 3 ? (
              <div className="flex items-center justify-center">
                <video ref={videoRef} className="w-full rounded-lg shadow-lg" controls>
                  <source src={Breath} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
              </div>
            ) : (
              exercises[currentExercise].content(nextExercise)
            )}
            {currentExercise !== 0 && (
              <div className="flex justify-between mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevExercise}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-800 transition-colors"
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextExercise}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-800 transition-colors"
                >
                  Next
                </motion.button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Breathing;
