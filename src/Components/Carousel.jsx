import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moodTrackingIcon from '../assets/moodTrackingIcon.svg';
import eyeExerciseIcon from '../assets/eyeExerciseIcon.svg';

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { image: moodTrackingIcon },
    { image: eyeExerciseIcon },
    { image: moodTrackingIcon },
    { image: eyeExerciseIcon },
  ];

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentPage(newIndex);
  };

  return (
    <div className="mx-10 mt-16 mb-20 rounded-2xl bg-gray-100 shadow-xl hover:shadow-xl">
      <Slider {...settings} beforeChange={handleBeforeChange}>
        {pages.map((page, index) => (
          <div key={index}>
            <img src={page.image} alt={`Page ${index + 1} Image`} className="h-96 mx-auto rounded-lg shadow-lg ease-in-out" />
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mt-2  ">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-2 mb-5 rounded-full ${index === currentPage ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
