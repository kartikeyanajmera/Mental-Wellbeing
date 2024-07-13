import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Carousel from './Components/Carousel';
import CardsBackground from './Components/CardBackground';
import GuidedMeditationCard from './Components/GuidedMeditationCard';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollToTop from './Components/ScrollToTop';
import About from './Components/About';
import Breathing from './Components/Breathing';
import Eye from './Components/Eye';
import Accounts from './Components/Accounts';
import Auth from './Components/Auth';


function App() {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#012743'; // dark
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <Router>
      <div className={`App ${mode === 'dark' ? 'dark' : ''}`}>
        <ScrollToTop />
        <Navbar toggleDarkMode={toggleDarkMode} mode={mode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="heroSection">
                  <HeroSection toggleDarkMode={toggleDarkMode} mode={mode}/>
                </Element>
                <div className="border-t border-gray-300 my-"></div>
                <Element name="About">
                  <About toggleDarkMode={toggleDarkMode} mode={mode}/>
                </Element>
                <div className="border-t border-gray-300 my-"></div>
                <Element name="card-background">
                  <CardsBackground toggleDarkMode={toggleDarkMode} mode={mode} />
                </Element>
                <div className="border-t border-gray-300 my-"></div>
                <Element name="test">
                  <Testimonials toggleDarkMode={toggleDarkMode} mode={mode} />
                </Element>
                <div className="border-t border-gray-300 my-"></div>
              </>
            }
          />
          <Route path="/guided" element={<><GuidedMeditationCard /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/carousel" element={<><Carousel /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/breath" element={<><Breathing /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/eye" element={<><Eye /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/card-background" element={<><CardsBackground mode={mode} /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/test" element={<><Testimonials mode={mode} /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/contact" element={<><Contact toggleDarkMode={toggleDarkMode} mode={mode} /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/heroSection" element={<><HeroSection /><div className="border-t border-gray-300 my-"></div></>} />
          <Route path="/account"  element={<Accounts toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/auth"  element={<Auth toggleDarkMode={toggleDarkMode} mode={mode} />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
