import React from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs, FaDocker } from "react-icons/fa";
import { DiMysql, DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";

const Technologies = () => {
  const technologies = [
    { name: "React" },
    {
      name: "TypeScript",
    },
    {
      name: "Tailwind CSS",
    },

    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },

    { name: "NodeJS" },
    { name: "Express" },
    {
      name: "MySQL",
    },
    {
      name: "MongoDB",
    },

    {
      name: "Socket.io",
    },

    { name: "Docker" },

    // Add more technologies here as needed
  ];
  let frontedIconsArray = [
    <FaReact size={30} />,
    <SiTypescript size={30} />,
    <SiTailwindcss size={30} />,
    <IoLogoJavascript size={30} />,
    <AiFillHtml5 size={30} />,
    <DiCss3 size={30} />,
  ];

  let backendIconsArray = [
    <FaNodeJs size={30} />,
    <SiExpress size={30} />,
    <DiMysql size={30} />,
    <SiMongodb size={30} />,
    <SiSocketdotio size={30} />,
    <FaDocker size={30} />,
  ];

  return (
    <div id="technologies" className="py-20">
      <div className="mb-5 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Technologies I am Using
        </h2>
      </div>

      <div className="flex max-w-5xl mx-auto my-10 space-x-5">
        <div className="w-full">
          <p className="mb-5 text-xl font-medium text-center text-gray-600">
            Frontend
          </p>
          <div className="h-[20rem] flex flex-col justify-center items-center">
            <ul className="flex flex-col space-y-2 text-xl font-bold">
              {technologies.slice(0, 6).map((item, index) => (
                <div className="flex items-center space-x-2">
                  {frontedIconsArray[index]}
                  <li className="p-1 px-2 text-center border border-black rounded-md">
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full">
          <p className="mb-5 text-xl font-medium text-center text-gray-600">
            Backend
          </p>
          <div className="flex flex-col justify-center items-center h-[20rem]">
            <ul className="flex flex-col space-y-2 text-xl font-bold">
              {technologies.slice(6).map((item, index) => (
                <div className="flex items-center space-x-2">
                  {backendIconsArray[index]}
                  <li className="p-1 text-center border border-black rounded-md">
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div id="technologies" className="flex items-center bg-gray-100">
    //   <div className="container px-4 py-40 mx-auto sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
    //         Technologies I am Using
    //       </h2>
    //     </div>

    //     <div className="flex flex-col items-center justify-center mt-2">
    //       <div className="bg-red">
    //         <p className="my-5 text-xl font-medium text-center text-gray-600">
    //           Frontend
    //         </p>
    //         <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
    //           {technologies.slice(0, 4).map((technology, index) => (
    //             <div
    //               key={index}
    //               className="flex flex-col items-center justify-center rounded-lg shadow-lg"
    //             >
    //               <div className="bg-white w-[10rem] h-[10rem] flex items-center justify-center">
    //                 <img
    //                   className="w-[7rem] h-[7rem] object-contain"
    //                   alt={technology.name}
    //                   src={technology.image}
    //                 />
    //               </div>
    //               <h3 className="my-2 text-lg text-black">{technology.name}</h3>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       <div className="flex flex-col items-center">
    //         <p className="mt-10 mb-5 text-xl font-medium text-gray-600">
    //           Backend
    //         </p>
    //         <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
    //           {technologies.slice(4).map((technology, index) => (
    //             <div
    //               key={index}
    //               className="flex flex-col items-center justify-center overflow-hidden bg-gray-100 rounded-lg shadow-lg"
    //             >
    //               <div className="bg-white w-[10rem] h-[8rem] flex items-center justify-center lg:h-[10rem]">
    //                 <img
    //                   className="w-[7rem] h-[7rem] object-contain"
    //                   alt={technology.name}
    //                   src={technology.image}
    //                 />
    //               </div>
    //               <h3 className="my-2 text-lg text-black">{technology.name}</h3>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Technologies;
