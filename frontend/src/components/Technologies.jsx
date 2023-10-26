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
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { SiNginx, SiVite } from "react-icons/si";

const Technologies = () => {
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const technologies = [
    { name: "React" },
    {
      name: "TypeScript",
    },
    {
      name: "Tailwind",
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

    { name: "Docker" },
    { name: "Nginx" },
    { name: "Vite" },
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
    <SiRedis size={30} />,
  ];

  let toolsIconsArray = [
    <FaDocker size={30} />,
    <SiNginx size={30} />,
    <SiVite size={30} />,
  ];

  return (
    <div id="technologies" className="px-4 lg:px-0 py-[5rem] md:py-[10rem]">
      <div
        className={classNames("max-w-5xl md:mx-auto", {
          "animate-up": myElementVisible,
        })}
      >
        <h2
          ref={myRef}
          className="mb-1 text-2xl font-extrabold text-gray-900 md:mb-2 md:text-3xl"
        >
          Technologies
        </h2>

        <span className="text-gray-600 md:text-xl">
          Technologies I am using
        </span>
      </div>

      <div className="flex justify-between max-w-5xl mt-10 md:mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2 font-bold md:text-xl">
            <span className="font-medium text-gray-500">Frontend</span>
            {technologies.slice(0, 6).map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-blue-500">
                  {" "}
                  {frontedIconsArray[index]}
                </span>
                <span className="p-1 text-center text-black w-[5.5rem] rounded-md md:w-[7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:px-2">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col space-y-2 font-bold md:text-xl">
            <span className="font-medium text-gray-500">Backend</span>
            {technologies.slice(6, 12).map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-blue-500">
                  {backendIconsArray[index]}
                </span>
                <span className="p-1 text-center text-black w-[5.5rem] md:w-[7rem] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:px-2">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:flex-col">
          <div className="flex flex-col space-y-2 font-bold md:text-xl">
            <span className="font-medium text-gray-500">Tools</span>
            {technologies.slice(12).map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-blue-500">{toolsIconsArray[index]}</span>
                <span className="p-1 text-center text-black w-[5.5rem] md:w-[7rem] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:px-2">
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
