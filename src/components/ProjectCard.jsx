import React from "react";

import { RiGithubLine } from "react-icons/ri";

const ProjectCard = ({ title, desc, technologies, gitLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:cursor-pointer">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-[20rem] object-cover object-center"
          src="https://dummyimage.com/720x400/cccccc/ffffff"
          alt="Project 2"
        />
        <div className="p-4">
          <h3 className="font-bold text-indigo-600 text-lg mb-2">{title}</h3>
          <p className="text-gray-700 text-base">
            My Facebook clone is a web-based social media platform that
            replicates many of the core features of the original Facebook site.
            The application includes user profiles, friend connections,
            notifications, news feeds, multimedia posts, likes and comments, and
            real-time messaging using Socket.IO. The front-end was developed
            using React, while the back-end was built with Node.js and Express.
          </p>

          <div className="flex space-x-2 mt-3">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 flex items-center space-x-2">
              <span className="icon">visibility</span>
              <span>Live Demo</span>
            </button>

            <a
              href={gitLink}
              className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 flex items-center space-x-2"
            >
              <RiGithubLine />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <span className="text-gray-500 text-sm">Technologies:</span>
          <div className="h-[5rem]">
            <ul className="flex flex-wrap text-gray-700">
              {technologies?.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 w-max h-max mt-2 mr-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
