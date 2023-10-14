import React from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRedis,
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

    { name: "Redis" },

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
    <SiRedis size={30} />,
  ];

  return (
    <div id="technologies" className="md:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-extrabold text-gray-900 md:text-3xl">
          Technologies I am Using
        </h2>
      </div>

      <div className="flex justify-between max-w-5xl mx-2 mt-10 md:mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2 font-bold md:text-xl">
            <span className="font-medium text-gray-500">Frontend</span>
            {technologies.slice(0, 6).map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-blue-500">
                  {" "}
                  {frontedIconsArray[index]}
                </span>
                <span className="p-1 text-center border border-black rounded-md md:px-2">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end justify-center">
          <div className="flex flex-col space-y-2 font-bold md:text-xl">
            <span className="font-medium text-gray-500">Backend</span>
            {technologies.slice(6).map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-blue-500">
                  {backendIconsArray[index]}
                </span>
                <span className="p-1 text-center border border-black rounded-md md:px-2">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
