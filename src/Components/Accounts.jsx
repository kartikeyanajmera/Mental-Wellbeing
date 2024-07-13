import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Account = ({ mode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Kartikeyan Ajmera',
    email: 'kartikeyan15ajmera@gmail.com',
    contact: '+91 9358899721',
    profilePic: 'https://via.placeholder.com/150'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({
          ...user,
          profilePic: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} -my-8 flex items-center justify-center`}>
      <div className={`bg-gray-100 ${mode === 'dark' ? 'bg-gray-800 hover:shadow-4xl shadow-gray-200 text-white' : 'bg-gray-200 hover:shadow-xl shadow-gray-500'} p-6 rounded-lg  w-full max-w-lg font-sans`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Account Information</h2>
          <button
  className="max-w-32 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98] relative overflow-hidden py-2 px-4 rounded-lg focus:outline-none"
  onClick={isEditing ? handleSave : handleEdit}
>
  {isEditing ? 'Save' : 'Edit'}
  <span
    className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"
  ></span>
</button>

        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="profilePic">Profile Picture</label>
            <div className="flex items-center">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full mr-4"
              />
              {isEditing && (
                <input
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lack mb-2" htmlFor="name">Name</label>
            <input
              className={`w-full p-3 border ${mode == 'dark' ? 'bg-gray-800 text-gray-200 border-gray-300' : 'bg-gray-100'} rounded-lg  shadow`}
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lack mb-2" htmlFor="email">Email</label>
            <input
              className={`w-full p-3 border ${mode == 'dark' ? 'bg-gray-800 text-gray-200 border-gray-300' : 'bg-gray-100'} rounded-lg  shadow`}
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block textblack mb-2" htmlFor="contact">Contact</label>
            <input
              className={`w-full p-3 border ${mode == 'dark' ? 'bg-gray-800 text-gray-200 border-gray-300' : 'bg-gray-100'} rounded-lg  shadow`}
              type="text"
              id="contact"
              name="contact"
              value={user.contact}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Account.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Account;
