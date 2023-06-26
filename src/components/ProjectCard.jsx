import React, { useState } from "react";

import { RiGithubLine } from "react-icons/ri";

const ProjectCard = ({
  title,
  desc,
  technologies,
  gitLink,
  image,
  liveLink,
}) => {
  return (
    <div className="grid lg:space-x-20 lg:grid-cols-2">
      <img src={image} alt="" className="h-[30rem] w-full border" />

      <div className="flex flex-col justify-between p-10 space-y-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-col space-y-5">
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="leading-loose">{desc}</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((item) => (
              <div className="p-1 px-2 font-bold text-black border border-black rounded-md">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          <a
            href={liveLink}
            className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700"
          >
            <span className="icon">visibility</span>
            <span>Live</span>
          </a>

          <a
            href={gitLink}
            className="flex items-center px-4 py-2 space-x-2 font-medium text-black border border-black rounded-md hover:bg-gray-900 hover:text-white"
          >
            <RiGithubLine size={20} />
            <span>gitHub</span>
          </a>
        </div>
      </div>
    </div>
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
    // <div className="shadow-md md:flex">
    //   <img src={image} alt="" className="w-[33rem] h-[25rem]" />

    //   <div className="flex flex-col justify-between w-full bg-white">
    //     <div className="p-4">
    //       <h2 className="text-2xl font-bold">{title}</h2>

    //       <p className="my-5 text-gray-800">{desc}</p>

    //       <div className="flex space-x-2">
    //         {liveLink && (
    //           <a
    //             href={liveLink}
    //             className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
    //           >
    //             <span className="icon">visibility</span>
    //             <span>Live</span>
    //           </a>
    //         )}
    //         {gitLink && (
    //           <a
    //             href={gitLink}
    //             className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
    //           >
    //             <RiGithubLine size={20} />
    //             <span>gitHub</span>
    //           </a>
    //         )}
    //       </div>

    //       <ul className="flex flex-wrap px-1">
    //       {technologies?.map((item, index) => (
    //         <li
    //           key={index}
    //           className="p-1 px-2 mr-2 my-2 text-[0.8rem] font-bold text-white bg-gray-800 rounded-full"
    //         >
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
