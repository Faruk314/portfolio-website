import React, { useState } from "react";

import { RiGithubLine } from "react-icons/ri";

const ProjectCard = ({ title, desc, technologies, gitLink, image }) => {
  return (
    // <div className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:cursor-pointer">
    //   <div className="overflow-hidden bg-white rounded-lg shadow-lg">
    //     <img
    //       className="w-full h-[20rem] object-cover object-center"
    //       src="https://dummyimage.com/720x400/cccccc/ffffff"
    //       alt="Project 2"
    //     />
    //     <div className="p-4">
    //       <h3 className="text-lg font-bold">{title}</h3>
    //     </div>
    //     <div className="p-4">
    //       <span className="text-sm text-gray-500">Technologies:</span>
    //       <div className="h-[5rem]">
    //         <ul className="flex flex-wrap text-gray-700">
    //           {technologies?.map((item, index) => (
    //             <li
    //               key={index}
    //               className="px-3 py-1 mt-2 mr-2 text-sm text-white bg-gray-800 rounded-full w-max h-max"
    //             >
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
    //     <span className="icon"> visibility</span>
    //     <span>Live</span>
    //   </button>

    //   <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
    //     <RiGithubLine size={20} />
    //     <span>gitHub</span>
    //   </button>
    // </div>
    <div className="shadow-md md:flex">
      <img src={image} alt="" className="w-full h-[25rem]" />

      <div className="flex flex-col justify-between w-full bg-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">{title}</h2>

          <p className="my-5 text-gray-800">{desc}</p>

          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
              <span className="icon"> visibility</span>
              <span>Live</span>
            </button>
            <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
              <RiGithubLine size={20} />
              <span>gitHub</span>
            </button>
          </div>
        </div>

        <ul className="flex flex-wrap px-2 bg-gray-100">
          {technologies?.map((item, index) => (
            <li
              key={index}
              className="p-1 px-2 mr-2 my-2 text-[0.8rem] font-bold text-white bg-gray-800 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
