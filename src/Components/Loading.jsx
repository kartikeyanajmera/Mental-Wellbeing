// src/components/LoadingAnimation.jsx
import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure to import your CSS file

const LoadingAnimation = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to represent loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>                
      )}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0'  : 'opacity-100'}`}>
        {children}        
      </div>
      
    </>
  );
};

export default LoadingAnimation;
