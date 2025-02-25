import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiSocketdotio, SiRedis } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import TechCard from "../components/TechCard";

const BackendTools = () => {
  const tools = [
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    {
      name: "MySQL",
      icon: <DiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },

    {
      name: "Socket.io",
      icon: <SiSocketdotio />,
    },
    { name: "Redis", icon: <SiRedis /> },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center gap-2 mt-2">
      {tools.map((item, index) => (
        <TechCard
          animationDuration={index * 200}
          key={item.name}
          item={item}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default BackendTools;
