import React from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("personal");
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const projects = [
    {
      title: "UnityNet",
      shortDesc: "Social Media Site",
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "MySQL",
        "Socket.io",
      ],
      gitLink: "https://github.com/Faruk314/UnityNetWeb",
      desc: t("unityNetText"),
      image: "/images/socialMedia.png",
    },
    {
      title: "Chess",
      shortDesc: "Online Game",
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "MySQL",
        "Socket.io",
        "Redis",
      ],
      gitLink: "https://github.com/Faruk314/ChessOnline",
      desc: t("chessText"),
      image: "/images/chessImages/menu.png",
      liveLink: "https://chess.farukspahic.com/",
    },
    {
      title: "LudoGame",
      shortDesc: "Online Game",
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "MySQL",
        "Socket.io",
        "Redis",
      ],
      gitLink: "https://github.com/Faruk314/OnlineLudoGame",
      desc: t("ludoText"),
      image: "/images/ludoImages/login.png",
    },

    {
      title: "Mastermind",
      shortDesc: "Online Game",
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "MySQL",
        "Socket.io",
        "Redis",
      ],
      gitLink: "https://github.com/Faruk314/Slagalica",
      desc: t("mastermindText"),
      image: "/images/slagalica.png",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full overflow-x-hidden py-[5rem] md:py-[7rem]"
    >
      <div className="flex flex-col max-w-6xl mx-auto">
        <div
          ref={myRef}
          className={classNames("p-4 lg:p-0", {
            "animate-up": myElementVisible,
          })}
        >
          <h1 className="mb-1 text-2xl font-bold text-gray-900 md:mb-2 md:text-3xl">
            {t("titleOne")}
          </h1>
          <p className="text-gray-600 md:text-xl">{t("titleTwo")}</p>
        </div>

        <div className="grid justify-center gap-4 md:gap-10 px-4 my-5 md:my-10 md:px-4 lg:px-0 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
