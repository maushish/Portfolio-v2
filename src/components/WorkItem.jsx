import React, { useState } from 'react';

function WorkItem({ imgUrl, title, tech, workUrl, githubUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex" // Use flex to arrange image and info div side by side
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <a
        href={workUrl}
        target="_blank"
        rel="noreferrer"
        className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden flex-1" // Use flex-1 to allow the image to take available space
      >
        <div className="border-white border-x-2 border-y-2 rounded-lg flex flex-col items-center justify-center">
          <img
            src={imgUrl}
            alt="work"
            className="w-full h-40 md:h-48 object-cover rounded-md"
          />
        </div>
      </a>
      <div
        className={`${
          isHovered ? 'block' : 'hidden'
        } absolute right-0 inset-y-0 bg-slate-800 w-[50%] p-5 text-gray-600 dark:text-gray-300 transition-opacity duration-300`}
      >
        {/* Your project info content goes here */}
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"></div>
      )}
    </div>
  );
}

export default WorkItem;
