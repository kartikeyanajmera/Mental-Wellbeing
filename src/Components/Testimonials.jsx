import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-svg-core/styles.css';
import john from '../assets/1st.jpg'
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'
import emily from '../assets/emily.jpg'
import liza from '../assets/liza white.jpg'
import brown from '../assets/brown.jpg'





const testimonials = [
  {
    quote: "This service has completely changed my life. I feel more at peace and in control of my emotions.",
    name: "John Doe",
    image: john,
    instagram: "@johndoe"
  },
  {
    quote: "The guided meditations are amazing! I use them every day to help manage my stress.",
    name: "Jane Smith",
    image: second,
    instagram: "@janesmith"
  },
  {
    quote: "I love the mood tracking feature. It helps me stay aware of my emotional well-being.",
    name: "Sam Wilson",
    image: third,
    instagram: "@samwilson"
  },
  {
    quote: "A great tool for self-awareness and emotional control.",
    name: "Emily Davis",
    image: emily,
    instagram: "@emilydavis"
  },
  {
    quote: "The best mental health app I've ever used!",
    name: "Michael Brown",
    image: brown,
    instagram: "@michaelbrown"
  },
  {
    quote: "I've never felt more in tune with my emotions and mental state.",
    name: "liza white",
    image: liza,
    instagram: "@lisawhite"
  },
];

const gradients = [
  'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600',
  'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600',
  'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600',
];

const TestimonialsCards = ({ mode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className={`relative min-h-screen font-sans ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} flex items-center justify-center py-12`}>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className={`text-4xl text-center font-sans mb-12`}>Happy Customers</h2>
        <div className="relative overflow-hidden w-full h-96">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`min-w-full flex-shrink-0 ${gradients[index % gradients.length]} rounded-lg shadow-2xl p-8 text-gray-100 scale- transform transition-transform duration-500 hover:scale-105`}
              >
                <div className="flex flex-col items-center h-full">
                <img className="h-20 w-20 rounded-full mb-6 border-4 border-gray-500 transform transition-transform duration-300 scale-110" src={testimonial.image} alt={testimonial.name} />
                <p className="font-sans text-xl mb-6 text-center">{testimonial.quote}</p>
                  <div className="mt-auto text-center">
                    <p className="text-2xl font-semibold">{testimonial.name}</p>
                    <p className="text-lg text-gray-300">{testimonial.instagram}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4">
  <button
    onClick={handlePrev}
    className="bg-gray-700 text-white p-4 -mt-12 rounded-full shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-110"
    style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
  <button
    onClick={handleNext}
    className="bg-gray-700 text-white p-4 -mt-12 rounded-full shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-110"
    style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px' }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
</div>

          <div className="absolute bottom-4 w-full flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <span key={index} className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'} transition-transform duration-300`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialsCards.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default TestimonialsCards;
