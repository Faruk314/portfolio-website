import React, { useState } from "react";

import { RiGithubLine } from "react-icons/ri";

const ProjectCard = ({ title, desc, technologies, gitLink }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:cursor-pointer"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-[20rem] object-cover object-center"
          src="https://dummyimage.com/720x400/cccccc/ffffff"
          alt="Project 2"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="p-4">
          <span className="text-gray-500 text-sm">Technologies:</span>
          <div className="h-[5rem]">
            <ul className="flex flex-wrap text-gray-700">
              {technologies?.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-800 rounded-full px-3 py-1 text-sm text-white w-max h-max mt-2 mr-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {hover && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(255,255,255,0.3)]">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 flex items-center space-x-2">
                <span className="icon"> visibility</span>
                <span>Live</span>
              </button>

              <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 flex items-center space-x-2">
                <RiGithubLine size={20} />
                <span>gitHub</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
