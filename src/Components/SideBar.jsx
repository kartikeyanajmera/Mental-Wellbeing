import React from 'react';

const SideBar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button className="absolute top-0 left-0 mt-4 ml-4 text-white" onClick={onClose}>
        Close
      </button>
      <ul className="mt-16">
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Option 1</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Option 2</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Option 3</li>
      </ul>
    </div>
  );
};

export default SideBar;
