import React, { useState,useEffect } from 'react';
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
import Register from './Components/Register';
import Login from './Components/Login';
import Reset from './Components/Reset';
import VerifyPhone from './Components/verifyPhone';
import {auth,db} from './firebase';
import {doc,getDoc} from 'firebase/firestore';
import Pricing from './Components/Pricing';
import Mood from './Components/Mood';
import Contents from './Components/Contents';
import Chat from './Components/Chat';


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

  const [user, setUser] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } else {
        console.log('User is not logged in');
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

async function handleLogout(){
  try {
    await auth.signOut();
    window.location.href = '/login'
    console.log('user logged out successfully');
  } catch (error) {
    console.log('error logging out',error.message);
  }
}
  return (
    <Router>
      <div className={`App ${mode === 'dark' ? 'dark' : ''}`}>
        <ScrollToTop />
        <Navbar toggleDarkMode={toggleDarkMode} mode={mode}  user={user} handleLogout={handleLogout}/>
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
          <Route path="/account"  element={<Accounts toggleDarkMode={toggleDarkMode} mode={mode} setUser={setUser} user={user}/>} />
          <Route path="/register"  element={<Register toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/login"  element={<Login toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/reset"  element={<Reset toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/verify"  element={<VerifyPhone toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/price"  element={<Pricing toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/mood"  element={<Mood toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/content"  element={<Contents toggleDarkMode={toggleDarkMode} mode={mode} />} />
          <Route path="/chat"  element={<Chat toggleDarkMode={toggleDarkMode} mode={mode} />} />

</Routes>
        {/* <ToastContainer/> */}
        <Footer />
        {/* <ToastContainer/> */}
      </div>
    </Router>
  );
}

export default App;