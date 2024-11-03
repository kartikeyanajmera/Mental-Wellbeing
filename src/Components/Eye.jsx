import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Eyes from '../assets/Eye_exercise.mp4';

const Eye = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const videoRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (currentPage === 2) {
      const timer = setTimeout(() => {
        setCurrentPage(3);
      }, 76000); // 76 seconds for the first exercise
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    if (currentPage === 1) {
      setShowPopup(true); // Show popup when moving to page 2
      playVideoFullscreen(); // Play video in fullscreen
    }
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send feedback to server
    // Redirect or show confirmation message after submission
    alert('Thanks For Taking Care Of Your Eyes!');
    // Redirect to homepage or another page
    navigate('/');
  };

  const playVideoFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      video.requestFullscreen().then(() => {
        video.play();
      });
    }
  };

  const handleVideoPlay = () => {
    alert('The video has started playing!');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans items-center justify-center bg-gray-900 text-gray-200">
      {currentPage === 1 && (
        <div className="max-w-lg p-8 rounded-lg shadow-lg bg-gray-800 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Eye Exercises for Relaxation</h1>
          <p className="mb-6 text-lg">
            Eye exercises can help relax your eyes, reduce strain, and improve focus by targeting
            the muscles of the eye, pupil, retina, and ciliary muscles.
          </p>
          <button
            onClick={nextPage}
            className="bg-orange-500 hover:bg-zinc-900 rotating-button text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Next
          </button>
        </div>
      )}

      {currentPage === 2 && (
        <div className="w-full h-screen flex flex-col items-center justify-center relative">
          {showPopup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              </div>
            
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-fit controls"
            autoPlay
            muted
            onPlay={handleVideoPlay}
          >
            <source src={Eyes} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
          {/* <div className="absolute bottom-8 flex space-x-4">
            <button
              onClick={prevPage}
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Next
            </button>
          </div> */}
        </div>
      )}

      {currentPage === 3 && (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Exercise 2: Ciliary Muscles</h2>
            <p className="mb-6 text-lg">Instructions and details for exercising ciliary muscles.</p>
          </div>
          <form onSubmit={handleFormSubmit} className="absolute bottom-8 left-8 right-8">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Feedback Form</h2>
              <div className="mb-4">
                <label htmlFor="feedback" className="block text-lg font-semibold mb-2">
                  Share your experience:
                </label>
                <textarea
                  id="feedback"
                  className="bg-[#222630] px-4 py-3 outline-none w-[600px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="feeling" className="block text-lg font-semibold mb-2">
                  How are you feeling?
                </label>
                <input
                  type="text"
                  id="feeling"
                  className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 animated-button text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 mr-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Eye;
