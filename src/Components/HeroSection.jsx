import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

// import BG from '../assets/hero-dark-bg.png'
const HeroSection = ({ mode }) => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center text-center h-screen">

      <div className="absolute inset-0"></div>
      <div className={`absolute inset-0 ${mode == 'dark' ? 'black-bg text-white' : 'bg-gradient-to-br from-transparent via-blue-200 to-pink-200'}  `} ></div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 lg:max-w-2xl lg:w-full rounded-sm xl:pb-32">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center mt-20 lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl animate-slide-up">
                <span className={`block xl:inline text-transparent bg-clip-text font-sans ${mode == 'dark' ? 'bg-gradient-to-r from-blue-400 to-indigo-600' : 'bg-gray-800'}`}>Calm Your Mind</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 xl:inline"> With Our Mental Health Services</span>
              </h1>
              <p className={`mt-3 text-base ${mode == 'dark' ? 'text-gray-300' : 'text-gray-800'} sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto animate-slide-up`}>
                Discover tools and techniques to help manage stress, anxiety, and depression. Start your journey to better mental health today.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className=" animate-slide-up">
                  <ScrollLink to='card-background' className="swipe">Get Started <span className="container">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
                  </path></svg></span>
                  </ScrollLink>

                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 animate-slide-up">
                  {/* <button className="readmore-btn">
                    <span className="book-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(86, 69, 117)"
                        viewBox="0 0 126 75"
                        className="book"
                      >
                        <rect
                          strokeWidth="3"
                          stroke="#fff"
                          rx="7.5"
                          height="70"
                          width="121"
                          y="2.5"
                          x="2.5"
                        ></rect>
                        <line strokeWidth="3" stroke="#fff" y2="75" x2="63.5" x1="63.5"></line>
                        <path
                          strokeLinecap="round"
                          strokeWidth="4"
                          stroke="#fff"
                          d="M25 20H50"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeWidth="4"
                          stroke="#fff"
                          d="M101 20H76"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeWidth="4"
                          stroke="#fff"
                          d="M16 30L50 30"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeWidth="4"
                          stroke="#fff"
                          d="M110 30L76 30"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 65 75"
                        className="book-page"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="4"
                          stroke="#fff"
                          d="M40 20H15"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeWidth="4"
                          stroke="#fff"
                          d="M49 30L15 30"
                        ></path>
                        <path
                          strokeWidth="3"
                          stroke="#fff"
                          d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="text"> Read more </span>
                  </button> */}

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default HeroSection;
