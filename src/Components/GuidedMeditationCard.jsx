import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import play from '../assets/play.png';
import next from '../assets/next.png';
import prev from '../assets/prev.png';
import pause from '../assets/pause.png';
import Anxiety from '../Music/Anxiety.mp3';
import Relaxed from '../Music/Relaxed.mp3';
import Neutral from '../Music/Neutral.mp3';

const GuidedMeditation = () => {
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });
  const [mood, setMood] = useState('');
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('');
  const [currentTrackName, setCurrentTrackName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  const tracks = {
    relaxed: {
      name: 'Relaxed Meditation Track',
      url: Relaxed,
    },
    anxious: {
      name: 'Anxious Meditation Track',
      url: Anxiety,
    },
    neutral: {
      name: 'Neutral Meditation Track',
      url: Neutral,
    },
  };

  const handleResponseChange = (event) => {
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    determineMood();
    setShowPlayer(true);
    window.scrollTo(0, 0); // This will scroll the page to the top
  };

  const determineMood = () => {
    const { question1,  question3,  question5 } = responses;

    if (question1 === 'calm' || question1 === 'happy' || question3 === 'positive' || question3=='neutral'||question5=='Rarely') {
      setMood('Relaxed');
      setCurrentTrack(tracks.relaxed.url);
      setCurrentTrackName(tracks.relaxed.name);
    } else if (question1 === 'anxious' || question5 === 'daily') {
      setMood('anxious');
      setCurrentTrack(tracks.anxious.url);
      setCurrentTrackName(tracks.anxious.name);
    } else {
      setMood('neutral');
      setCurrentTrack(tracks.neutral.url);
      setCurrentTrackName(tracks.neutral.name);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    // Logic to handle next track, currently placeholder
    alert('Next track logic goes here');
  };

  const handlePrevTrack = () => {
    // Logic to handle previous track, currently placeholder
    alert('Previous track logic goes here');
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeek = (e) => {
    const seekBar = e.target;
    const seekBarRect = seekBar.getBoundingClientRect();
    const seekBarWidth = seekBarRect.width;
    const clickPositionX = e.clientX - seekBarRect.left;
    const clickRatio = clickPositionX / seekBarWidth;
    const newTime = duration * clickRatio;

    if (playerRef.current) {
      playerRef.current.seekTo(newTime, 'seconds');
    }
    setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const Dropdown = ({ name, value, onChange, options }) => (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100">
          {value ? options.find((option) => option.value === value).label : 'Select...'}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.value} onClick={() => onChange({ target: { name, value: option.value } })}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {option.label}
                </a>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-300 Guided-bg flex flex-col items-center justify-center p-6">
      {/* <h1 className="text-4xl text-cyan-400 mb-6 font-thin">Welcome, Kartikeyan</h1> */}
      {!showPlayer && (
        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">How are you feeling today?</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="question1" className="text-lg block mb-2">What emotions are you experiencing the most right now?</label>
              <Dropdown
                name="question1"
                value={responses.question1}
                onChange={handleResponseChange}
                options={[
                  { value: '', label: 'Select...' },
                  { value: 'calm', label: 'Calm' },
                  { value: 'anxious', label: 'Anxious' },
                  { value: 'happy', label: 'Happy' },
                ]}
              />
            </div>
            <div>
              <label htmlFor="question2" className="text-lg block mb-2">What has been the most challenging part of your day?</label>
              <input type='text'
                name="question2"
                value={responses.question2}
                onChange={handleResponseChange} className='w-full rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              />
            </div>
            <div>
              <label htmlFor="question3" className="text-lg block mb-2">How do you see to your future?</label>
              <Dropdown
                name="question3"
                value={responses.question3}
                onChange={handleResponseChange}
                options={[
                  { value: '', label: 'Select' },
                  { value: 'positive', label: 'Positive' },
                  { value: 'neutral', label: 'Neutral' },
                  { value: 'negative', label: 'Negative' },
                ]}
              />
            </div>
            <div>
              <label htmlFor="question4" className="text-lg block mb-2">How often do you feel overwhelmed?</label>
              <Dropdown
                name="question4"
                value={responses.question4}
                onChange={handleResponseChange}
                options={[
                  { value: '', label: 'Select...' },
                  { value: 'oftenly', label: 'Ofently' },
                  { value: 'rarely', label: 'Rarely' },
                ]}
              />
            </div>
            <div>
              <label htmlFor="question5" className="text-lg block mb-2">How frequently do you feel stressed?</label>
              <Dropdown
                name="question5"
                value={responses.question5}
                onChange={handleResponseChange}
                options={[
                  { value: '', label: 'Select...' },
                  { value: 'daily', label: 'Daily Bases' },
                  { value: 'rare', label: 'Rarely' },
                  { value: 'depends', label: 'Depends on Situations' },

                ]}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors mt-4 transform hover:scale-105"
            >
              Get Meditation
            </button>
          </form>
        </div>
      )}

      {showPlayer && (
        <>
          <div className="bg-white p-8 rounded-lg mb-60 shadow-lg card transition-all duration-500 ease-in-out transform hover:scale-105 max-w-md w-full">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" strokeWidth="0" fill="currentColor" stroke="currentColor" className="moon"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg> */}
          <h2 className="text-2xl font-semibold mb-4 ">Benefits of Guided Meditation</h2>
            <p className="text-lg text-black">
              Guided meditation helps you relax, reduce stress, and find inner peace. It's a powerful tool to improve mental clarity and overall well-being.
            </p>
            <p className="mt-4 text-black mb-2">
              <strong>Do's:</strong> Find a quiet place, use headphones, and focus on your breath.
            </p>
            <p className="mt-2 text-black">
              <strong>Don'ts:</strong> Avoid multitasking, don't rush, and try not to get distracted.
            </p>
          </div>

          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-3 flex flex-col items-center justify-center shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <button onClick={handlePrevTrack} className="hover:text-green-500 transition-colors">
                <img src={prev} className="h-6 w-6" />
              </button>
              <button onClick={handlePlayPause} className={`hover:text-green-500 transition-colors ${isPlaying ? 'playing' : ''}`}>
                {isPlaying ? <img src={pause} className="h-6 w-6" /> : <img src={play} className="h-6 w-6" />}
              </button>
              <button onClick={handleNextTrack} className="hover:text-green-500 transition-colors">
                <img src={next} className="h-6 w-6" />
              </button>
            </div>

            <div className="relative h-1 w-full mb-2">
              <div className="seek-bar-container" onClick={(e) => handleSeek(e)}>
                <div className="seek-bar">
                  <div className="seek-bar-progress" style={{ width: `${(currentTime / duration) * 100}%` }}>
                    <div className="seek-dot" style={{ left: `${(currentTime / duration) * 100}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="text-white mt-1 flex justify-between text-xs">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="text-white text-sm">{mood.charAt(0).toUpperCase() + mood.slice(1)}</div>

            <ReactPlayer
              url={currentTrack}
              playing={isPlaying}
              controls={true}
              onProgress={handleProgress}
              onDuration={handleDuration}
              ref={playerRef}
              width="100%"
              className="hidden"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GuidedMeditation;
