import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMysql, DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SkillItem } from "./SkillItem";
import { CiStreamOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const frontendSkills = [
  { name: "React", icon: <SiReact /> },
  { name: "ReactNative", icon: <TbBrandReactNative /> },
  { name: "ReactQuery", icon: <SiReactquery /> },
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

const backendSkills = [
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  {
    name: "MySQL",
    icon: <DiMysql />,
  },
  {
    name: "Postgres",
    icon: <DiPostgresql />,
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
  { name: "WebRTC", icon: <SiWebrtc /> },
  { name: "Mediasoup", icon: <CiStreamOn /> },
];

export const Skills = () => {
  const { t } = useTranslation("technologies");

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm md:text-base">
              TECHNICAL EXPERTISE
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              My <span className="text-primary">Skills</span> & Technologies
            </h2>
            <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web
              applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-16">
            {/* Frontend Skills */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Frontend Development
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {frontendSkills.map((item, index) => (
                  <SkillItem
                    key={item.name}
                    animationDuration={index * 50}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Backend Development
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {backendSkills.map((item, index) => (
                  <SkillItem
                    key={item.name}
                    animationDuration={index * 50}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
