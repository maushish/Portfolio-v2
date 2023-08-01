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
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <a
        href={workUrl}
        target="_blank"
        rel="noreferrer"
        className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden"
      >
        <img
          src={imgUrl}
          alt="work"
          className="w-full h-36 md:h-48 object-cover"
        />
        <div className="w-full p-5 text-gray-600 dark:text-gray-300">
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
      </a>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ">
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
            >
              GitHub
            </a>
            <a
              href={workUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
            >
              Visit
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkItem;
