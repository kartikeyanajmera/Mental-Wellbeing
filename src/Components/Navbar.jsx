import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink, Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import {

  ChevronDownIcon,
  
  LogOutIcon,

  
  UserIcon,
} from "@iconicicons/react";
import { DropdownMenu } from "@lemonsqueezy/wedges";

const Navbar = ({ toggleDarkMode, mode,handleLogout,user}) => {
  const location = useLocation();

  
  
  return (
    
  <nav className={`price font-medium w-full sticky text-lg top-0  z-50 ${mode == 'dark' ? 'bg-gray-900 text-gray-200': 'bg-gray-100 shadow-xl'}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"> 
        <div className="relative flex items-center justify-between h-16">
        <img src={logo} className='h-20 absolute mt-4 -ml-4 cursor-pointer' alt='Logo' />

          <div className="flex-1 flex sha items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 ml-16">
              
               <RouterLink to="" className="nav-link cursor-pointer">Home</RouterLink>
                {location.pathname === '/' ? (
                  <>
                    <ScrollLink to="About" className="nav-link cursor-pointer relative group">
                      About
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </ScrollLink>
                    <ScrollLink to="card-background" duration={500} className="nav-link cursor-pointer relative group">
                      Services
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </ScrollLink>
                    <ScrollLink to="test" duration={500} className="nav-link cursor-pointer relative group">
                      Testimonials
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </ScrollLink>
                    <RouterLink to="contact" duration={500} className="nav-link cursor-pointer relative group">
                      Contact Us
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>
                    <RouterLink to="/price" className="nav-link cursor-pointer relative group">
                      Pricing
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>

                    <RouterLink to="/chat" className="nav-link cursor-pointer relative group">
                      chat
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>
                    





                  </>
                ) : (
                  <>
                    <RouterLink to="/#about" className="nav-link cursor-pointer relative group">
                      About
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>
                    <RouterLink to="/card-background" className="nav-link cursor-pointer relative group">
                      Services
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>
                    <RouterLink to="/test" className="nav-link cursor-pointer relative group">
                      Testimonials
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>
                    <RouterLink to="/contact" className="nav-link cursor-pointer relative group">
                      Contact Us
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>
                    <RouterLink to="/price" className="nav-link cursor-pointer relative group">
                      Pricing
                      <span className={`absolute left-0 bottom-0 w-full h-0.5 ${mode === 'dark' ? 'bg-white' : 'bg-gray-500'} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                    </RouterLink>
                    
                  </>
                )}
              </div>
            </div>
          </div>

          <RouterLink to='/mood'
            className="relative py-1 px-3 mr-6  text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              Mental Health Test
            </RouterLink>

          <label className="inline-flex items-center relative -mr-4 mt-1">
            <input className="peer hidden" id="toggle" onClick={toggleDarkMode} type="checkbox" />
            <div
              className={`relative w-[60px] h-[30px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[25px] peer-checked:after:left-[55px] peer-checked:after:translate-x-[-100%] cursor-pointer duration-300 after:duration-300 after:shadow-md ${mode === 'dark' ? 'peer-checked:bg-zinc-900' : ''}`}></div>
            <svg
              height="0"
              width="100"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              className={`fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[8px] ${mode === 'dark' ? 'peer-checked:fill-white' : ''}`}
            >
              <path
                d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
              ></path>
            </svg>
            <svg
              height="0"
              width="100"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black peer-checked:opacity-60 peer-checked:fill-white absolute w-4 h-4 right-[6px]"
            >
              <path
                d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
              ></path>
            </svg>
          </label>

{/* ------------------------------------------------Dropdown Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <span className="group flex shrink cursor-pointer select-none items-center justify-center gap-1 rounded-lg p-1.5 px-2 text-sm text-surface-600 transition-colors duration-100 wg-antialiased hover:bg-surface dark:hover:bg-white/5">

                  <span className="ms-2 flex flex-col">
                  {user ? 
                   <span className="font-sans text-lg -mt-0">{user.name}</span> :
                   <span className="font-sans text-lg -mt-0">User</span>}
                    
                  </span>
                  <ChevronDownIcon className="trigger-icon h-5 w-5 text-surface-400" />
                </span>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content align="end" className="min-w-[140px]">
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <UserIcon />                
                    

                    <RouterLink to="/account">
                      Account
                    </RouterLink>                   
                    

                  </DropdownMenu.Item>
                  

                 

                  
                </DropdownMenu.Group>

                <DropdownMenu.Separator />

                <DropdownMenu.Group>
                 

                 
                </DropdownMenu.Group>

                
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <LogOutIcon />
                 
                    
                    {user ? 
                    <button onClick={handleLogout} >Log Out</button> :
                    <NavLink to='/login'>SignIn</NavLink>}
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>



        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Navbar;
