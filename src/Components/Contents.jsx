import React, { useState } from 'react';

const Playbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-gray-100 flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
        <button className="bg-gray-800 p-2 rounded-full">
          <svg width="24" height="24" fill="currentColor">
            <path d="M19 12L5 24V0L19 12Z" />
          </svg>
        </button>
        <button className="bg-gray-800 p-2 rounded-full">
          <svg width="24" height="24" fill="currentColor">
            <path d="M8 5V19H12V5H8ZM14 5V19H18V5H14Z" />
          </svg>
        </button>
        <button className="bg-gray-800 p-2 rounded-full">
          <svg width="24" height="24" fill="currentColor">
            <path d="M5 12L19 24V0L5 12Z" />
          </svg>
        </button>
        <button className="bg-gray-800 p-2 rounded-full">
          <svg width="24" height="24" fill="currentColor">
            <path d="M0 12L24 0V24L0 12Z" />
          </svg>
        </button>
      </div>
      <div className="flex-grow mx-4">
        <input type="range" className="w-full h-2 bg-gray-800" />
      </div>
      <div className="flex items-center space-x-2">
        <span>0:00</span>
        <span>/</span>
        <span>3:45</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [musicOpen, setMusicOpen] = useState(false);
  const [podcastsOpen, setPodcastsOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-900 text-gray-100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
        <svg width="24" height="24" fill="currentColor">
          <path d="M3 12H21V14H3V12ZM3 6H21V8H3V6ZM3 18H21V20H3V18Z" />
        </svg>
      </button>
      <div className="p-4">
        <div>
          <button className="flex items-center justify-between w-full" onClick={() => setMusicOpen(!musicOpen)}>
            <span>Music</span>
            <svg width="24" height="24" fill="currentColor">
              <path d={`M${musicOpen ? '19' : '12'} 12L${musicOpen ? '5' : '12'} 5V19L${musicOpen ? '19' : '12'} 12Z`} />
            </svg>
          </button>
          {musicOpen && (
            <div className="pl-4">
              <p>Track 1</p>
              <p>Track 2</p>
              <p>Track 3</p>
            </div>
          )}
        </div>
        <div className="mt-4">
          <button className="flex items-center justify-between w-full" onClick={() => setPodcastsOpen(!podcastsOpen)}>
            <span>Podcasts</span>
            <svg width="24" height="24" fill="currentColor">
              <path d={`M${podcastsOpen ? '19' : '12'} 12L${podcastsOpen ? '5' : '12'} 5V19L${podcastsOpen ? '19' : '12'} 12Z`} />
            </svg>
          </button>
          {podcastsOpen && (
            <div className="pl-4">
              <p>Podcast 1</p>
              <p>Podcast 2</p>
              <p>Podcast 3</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ContentCard = ({ title, link }) => {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h3 className="font-sans text-xl">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        Read more
      </a>
    </div>
  );
};

const Contents = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-pink-200 via-blue-200 to-white overflow-hidden">
      <Sidebar />
      <main className="ml-64 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContentCard title="Stress Relief" link="https://example.com/stress-relief" />
        <ContentCard title="Anxious" link="https://example.com/anxious" />
        <ContentCard title="Happy Mood" link="https://example.com/happy-mood" />
        <ContentCard title="Feeling Low" link="https://example.com/feeling-low" />
        <ContentCard title="Mental Wellness Articles" link="https://example.com/mental-wellness" />
      </main>
      <Playbar />
      <div className="absolute inset-0 bg-clouds"></div>
    </div>
  );
};

export default Contents;
