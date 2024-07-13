import React from 'react';
import PropTypes from 'prop-types';

const testimonials = [
  {
    quote: "This service has completely changed my life. I feel more at peace and in control of my emotions.",
    name: "John Doe",
    image: "https://via.placeholder.com/100",
    instagram: "@johndoe"
  },
  {
    quote: "The guided meditations are amazing! I use them every day to help manage my stress.",
    name: "Jane Smith",
    image: "https://via.placeholder.com/100",
    instagram: "@janesmith"
  },
  {
    quote: "I love the mood tracking feature. It helps me stay aware of my emotional well-being.",
    name: "Sam Wilson",
    image: "https://via.placeholder.com/100",
    instagram: "@samwilson"
  },
  {
    quote: "A great tool for self-awareness and emotional control.",
    name: "Emily Davis",
    image: "https://via.placeholder.com/100",
    instagram: "@emilydavis"
  },
  {
    quote: "The best mental health app I've ever used!",
    name: "Michael Brown",
    image: "https://via.placeholder.com/100",
    instagram: "@michaelbrown"
  },
  {
    quote: "I've never felt more in tune with my emotions and mental state.",
    name: "Lisa White",
    image: "https://via.placeholder.com/100",
    instagram: "@lisawhite"
  },
];

const gradients = [
  ' bg-gray-400',
  'bg-gray-400',
  'bg-gray-400',
];

const TestimonialsCards = ({ mode }) => {
  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'testi text-white' : 'bg-white text-black'} flex items-center justify-center p-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${gradients[index % gradients.length]} rounded-lg shadow-lg p-6 text-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center">
                <img className="h-16 w-16 rounded-full mb-4" src={testimonial.image} alt={testimonial.name} />
                <p className="font-sans text-lg mb-4">{testimonial.quote}</p>
                <div className="mt-4">
                  <p className="text-xl font-medium">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.instagram}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TestimonialsCards.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default TestimonialsCards;
