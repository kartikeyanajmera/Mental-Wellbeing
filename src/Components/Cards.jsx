import React from 'react';
 // Import your custom CSS file if using separate CSS file

function Cards({ title, subtitle, description, cta, icon, gradient }) {
  return (
   

    <div className={`w-86 m-86 p-4 rounded-2xl shadow-xl hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center ${gradient}`}>
      <img src={icon} alt={`${title} icon`} className="image-class mb-2" />
    
      <div className="mb-2">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-xs text-gray-700">{subtitle}</p>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">{cta}</button>
    </div>
  );
}

export default Cards;

