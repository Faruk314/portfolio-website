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
import { FaNodeJs } from "react-icons/fa";
import { DiMysql, DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import TechCard from "./TechCard";

const Technologies = () => {
  const { t } = useTranslation("technologies");
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const technologies = [
    { name: "React" },
    { name: "ReactNative" },
    { name: "NextJS" },
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
  ];

  let icons = [
    <FaReact size={35} />,
    <TbBrandReactNative size={35} />,
    <TbBrandNextjs size={35} />,
    <SiTypescript size={35} />,
    <SiTailwindcss size={35} />,
    <IoLogoJavascript size={35} />,
    <AiFillHtml5 size={35} />,
    <DiCss3 size={35} />,
    <FaNodeJs size={35} />,
    <SiExpress size={35} />,
    <DiMysql size={35} />,
    <SiMongodb size={35} />,
    <SiSocketdotio size={35} />,
    <SiRedis size={35} />,
  ];

  return (
    <div id="technologies" className="px-4 lg:px-0 py-[5rem] md:py-[7rem]">
      <div
        className={classNames("max-w-6xl md:mx-auto opacity-0", {
          "fade-in": myElementVisible,
        })}
      >
        <h2
          ref={myRef}
          className="mb-1 text-2xl font-extrabold text-gray-900 md:mb-2 md:text-3xl"
        >
          {t("titleOne")}
        </h2>

        <span className="text-gray-600 md:text-xl">{t("titleTwo")}</span>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {technologies.map((item, index) => (
          <TechCard key={index} item={item} icon={icons[index]} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
