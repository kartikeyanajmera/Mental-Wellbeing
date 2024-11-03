import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const questions = [
  "I feel overwhelmed by my emotions.",
  "I have strong relationships with people I care about.",
  "I've made many terrible decisions in my life.",
  "I procrastinate and/or avoid dealing with important things in my life.",
  "I have a sense of purpose in life.",
  "I get upset or angry easily.",
  "I'm able to bounce back from setbacks."
];

const Mood = ({ toggleDarkMode, mode }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleResponse = (response) => {
    setResponses([...responses, response]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const totalScore = responses.reduce((acc, response) => acc + response, 0);
    const maxPossibleScore = questions.length * 2;
    const normalizedScore = ((totalScore + questions.length) / maxPossibleScore) * 100;
    return Math.round(normalizedScore);
  };

  const getMoodRange = (score) => {
    if (score >= 75) return 'High';
    if (score >= 50) return 'Moderate';
    if (score >= 25) return 'Low';
    return 'Very Low';
  };

  const getResources = (moodRange) => {
    switch(moodRange) {
      case 'High':
        return {
          podcast: 'https://youtu.be/Um7yQEOAvn4?si=30_cOCBoF4xnDI6x',
          article: 'Currently you don’t need it',
          music: 'https://youtu.be/uhp2F43uAV8?si=h5lcey6welp73KOr'
        };
      case 'Moderate':
        return {
          podcast: 'https://youtu.be/we65H8a2LTo?si=qGcbRL0R8uM9p9b2',
          article: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5423723/',
          music: 'https://youtu.be/kag0aJqQsGo?si=iigXxCfFPQzQLmdO'
        };
      case 'Low':
        return {
          podcast: 'https://www.youtube.com/live/dI42vUMNRF0?si=Dc_yzzHhV5nb4chr',
          article: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5423723/',
          music: 'https://youtu.be/5rjtp2QLphE?si=bOR5bV0N5oHJgaaA'
        };
      case 'Very Low':
        return {
          podcast: 'https://youtu.be/ZebSXPUCPFc?si=2IqoBq3FAA-ycJQi',
          article: 'https://www.healthline.com/health/depression/how-to-fight-depression',
          music: 'https://youtu.be/3pNpHZ1yv3I?si=uXcvg-t7HVNHIwVK'
        };
      default:
        return {};
    }
  };

  const score = calculateScore();
  const moodRange = getMoodRange(score);
  const resources = getResources(moodRange);

  const lightModeProps = useSpring({
    from: { backgroundPosition: '0% 0%' },
    to: { backgroundPosition: '200% 200%' },
    config: { duration: 20000 },
    loop: { reverse: true },
  });

  const darkModeProps = useSpring({
    from: { backgroundPosition: '0% 0%' },
    to: { backgroundPosition: '200% 200%' },
    config: { duration: 20000 },
    loop: { reverse: true },
  });

  return (
    <animated.div 
      style={{ 
        ...(
          mode === 'dark' 
            ? { ...darkModeProps, background: 'linear-gradient(to right, #333333, #555555, #777777)', backgroundSize: '400% 400%' }
            : { ...lightModeProps, background: 'linear-gradient(to right, #ffcccb, #add8e6, #ffffff)', backgroundSize: '400% 400%' }
        )
      }} 
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-3xl dark:text-gray-100 price mb-8 text-gray-800">Your Mental Health Test</h1>
      {!showResults ? (
        <div className="w-full max-w-md">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md"
          >
            <p className="text-lg font-sans mb-4 text-gray-800 dark:text-gray-200">{questions[currentQuestion]}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleResponse(1)}
                className="flex-1 p-4 bg-green-400 text-gray-800 rounded-lg shadow-md hover:bg-green-500"
              >
                <span role="img" aria-label="Agree">😊</span> Agree
              </button>
              <button
                onClick={() => handleResponse(0)}
                className="flex-1 p-4 bg-yellow-400 text-gray-800 rounded-lg shadow-md hover:bg-yellow-500"
              >
                <span role="img" aria-label="Not Sure">😐</span> Not Sure
              </button>
              <button
                onClick={() => handleResponse(-1)}
                className="flex-1 p-4 bg-red-400 text-gray-800 rounded-lg shadow-md hover:bg-red-500"
              >
                <span role="img" aria-label="Disagree">😞</span> Disagree
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="w-full max-w-md p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-sans mb-4 text-gray-800 dark:text-gray-200">Your Results are Ready</h2>
          <div className="flex flex-col items-center mb-4">
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div
                style={{ width: `${score}%` }}
                className={`h-full bg-blue-500 transition-all duration-500 ease-in-out`}
              />
            </div>
            <p className="text-lg dark:text-gray-200 font-sans">{score} / 100</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <p className="text-lg font-sans">Very Low: 0 - 24</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <p className="text-lg font-sans">Low: 25 - 49</p>
            </div>
            <div className="p-4 bg-orange-100 rounded-lg shadow-md">
              <p className="text-lg font-sans">Moderate: 50 - 74</p>
            </div>
            <div className="p-4 bg-red-100 rounded-lg shadow-md">
              <p className="text-lg font-sans">High: 75 - 100</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-sans dark:text-gray-200">Your mood score indicates a <strong>{moodRange}</strong> level.</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-sans dark:text-gray-200">Recommended Resources:</h3>
            <ul className="list-disc list-inside dark:text-gray-200">
              <li><a href={resources.article} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400">Read this article</a></li>
              <li><a href={resources.podcast} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400">Listen to this podcast</a></li>
              <li><a href={resources.music} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400">Listen to this music</a></li>
            </ul>
          </div>
        </div>
      )}
      <button 
        onClick={toggleDarkMode} 
        className="mt-8 py-2 px-4 rounded-lg shadow-md bg-gray-800 text-gray-100 hover:bg-gray-700"
      >
        Toggle {mode === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </animated.div>
  );
};

Mood.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Mood;
