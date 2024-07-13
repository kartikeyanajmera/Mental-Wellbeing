import React from 'react';
import ReactPlayer from 'react-player';

const MediaPlayer = () => {
  return (
    <div className="relative">
      {/* Background animation (to be implemented) */}
      <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-4">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="auto"
          controls
          playing
        />
      </div>
      <p className="text-sm text-gray-600">Now playing: Guided Meditation</p>
    </div>
  );
};

export default MediaPlayer;
