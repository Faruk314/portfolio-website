import React from "react";
import { FaReact } from "react-icons/fa";
import nodeJsImage from "../images/node.png";
import tailwindImage from "../images/tailwind.png";
import reactImage from "../images/react.png";
import typeScriptImage from "../images/typescript.png";
import socketImage from "../images/socket.png";
import mySqlImage from "../images/mysql.png";
import mongoImage from "../images/mongo.png";
import htmlCssJsImage from "../images/web.png";

const Technologies = () => {
  const technologies = [
    { name: "React", image: reactImage },
    {
      name: "TypeScript",
      image: typeScriptImage,
    },
    {
      name: "Tailwind CSS",
      image: tailwindImage,
    },
    { name: "NodeJS", image: nodeJsImage },
    {
      name: "Socket.io",
      image: socketImage,
    },

    {
      name: "MongoDB",
      image: mongoImage,
    },

    {
      name: "MySQL",
      image: mySqlImage,
    },
    { name: "JS, HTML, CSS", image: htmlCssJsImage },

    { name: "Docker" },
    { name: "Express" },
    // Add more technologies here as needed
  ];

  return (
    <div id="technologies" className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Technologies I'm Using
          </h2>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((technology) => (
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center">
                <div className="bg-white w-[10rem] h-[10rem] flex items-center justify-center">
                  <img
                    className="w-[7rem] h-[7rem] object-contain mb-4"
                    alt={technology.name}
                    src={technology.image}
                  />
                </div>
                <h3 className="font-bold text-black text-lg my-2">
                  {technology.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
