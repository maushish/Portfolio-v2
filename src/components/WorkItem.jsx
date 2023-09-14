import React, { useState } from 'react';

function WorkItem({ imgUrl, title, tech, workUrl, githubUrl, details }) {
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
    <div className="flex flex-col mb-4">
      <div className="w-80 h-40">
        <a href={workUrl} target="_blank" rel="noreferrer">
          <div className="border-white border-x-2 border-y-2 rounded-lg w-100">
            <img
              src={imgUrl}
              alt="work"
              className="w-full h-40 md:h-48 object-cover rounded-md"
            />
          </div>
        </a>
      </div>
      <div className="mt-4 p-3 w-80  rounded-md flex flex-col items-center justify-center bg-slate-800 text-gray-600 dark:text-gray-300">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <div className="flex items-center gap-4 mb-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 md:text-md hover:bg-indigo-700"
          >
            GitHub
          </a>
          <a
            href={workUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 md:text-md hover:bg-indigo-700"
          >
            Visit
          </a>
        </div>
        {isHovered && (
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            {details}
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkItem;
