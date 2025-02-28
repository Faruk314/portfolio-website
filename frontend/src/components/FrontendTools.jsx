import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import TechCard from "./TechCard";

const FrontendTools = () => {
  const tools = [
    { name: "React", icon: <FaReact /> },
    { name: "ReactNative", icon: <TbBrandReactNative /> },
    { name: "NextJS", icon: <TbBrandNextjs /> },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },

    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "HTML", icon: <AiFillHtml5 /> },
    { name: "CSS", icon: <DiCss3 /> },
  ];

  return (
    <div className="frontend-tools_container max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:flex gap-2 mt-2 mb-6">
      {tools.map((item, index) => (
        <TechCard
          animationDuration={index * 100}
          key={item.name}
          item={item}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default FrontendTools;
