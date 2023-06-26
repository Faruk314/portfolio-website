import React from "react";
import nodeJsImage from "../images/node.png";
import tailwindImage from "../images/tailwind.png";
import reactImage from "../images/react.png";
import typeScriptImage from "../images/typescript.png";
import socketImage from "../images/socket.png";
import mySqlImage from "../images/mysql.png";
import mongoImage from "../images/mongo.png";
import htmlCssJsImage from "../images/web.png";
import expressImage from "../images/express.png";
import dockerImage from "../images/docker.png";

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

    { name: "JS, HTML, CSS", image: htmlCssJsImage },

    { name: "NodeJS", image: nodeJsImage },
    { name: "Express", image: expressImage },
    {
      name: "MySQL",
      image: mySqlImage,
    },
    {
      name: "MongoDB",
      image: mongoImage,
    },

    {
      name: "Socket.io",
      image: socketImage,
    },

    { name: "Docker", image: dockerImage },

    // Add more technologies here as needed
  ];

  return (
    <div id="technologies" className=""></div>
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
