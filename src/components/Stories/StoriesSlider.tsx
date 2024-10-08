import React, { useState, useEffect } from 'react';
import Story from './Story';

const StoriesSlider = ({ stories }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            nextStory();
            return 0;
          }
        });
      }, 600); // 150ms * 100 = 15 seconds
      
      return () => clearInterval(timer);
    }
  }, [isPaused, activeIndex]);

  const nextStory = () => {
    if (activeIndex < stories.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0); // Loop back to the first story
    }
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };
// console.log(stories,"stories");

  return (
    <div className="relative w-full max-w-sm mx-auto h-96 bg-black rounded-lg overflow-hidden">
      {stories.map((story, index) => (
        <Story key={index} content={story} isActive={index === activeIndex} />
      ))}

      <div className="absolute bottom-4 w-full h-1 bg-gray-700">
        <div
          className="bg-white h-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div
        className="absolute top-4 right-4 p-2 bg-white bg-opacity-50 rounded-lg cursor-pointer"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <button className="text-black" onClick={nextStory}>Next</button>
      </div>
    </div>
  );
};

export default StoriesSlider;
