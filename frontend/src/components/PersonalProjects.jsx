import React from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import PokerLogo from "./utils/PokerLogo";
import ChessLogo from "./utils/ChessLogo";

const PersonalProjects = () => {
  const { t } = useTranslation("personal");
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const personalProjects = [
    {
      id: 3,
      image: "/images/chessImages/menu.png",
      logo: <ChessLogo />,
    },

    {
      id: 4,
      image: "/images/pokerImages/pokerlogo.png",
      logo: <PokerLogo />,
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
          className={classNames("p-4 lg:p-0 opacity-0 tracking-wider", {
            "fade-in": myElementVisible,
          })}
        >
          <h1 className="mb-1 text-3xl font-black md:text-4xl">
            {t("titleOne")}
          </h1>
          <p className="text-gray-600 md:text-xl">{t("titleTwo")}</p>
        </div>

        <div className="personal-projects_container grid gap-4 lg:gap-10 px-4 my-5 md:my-10 md:px-4 lg:px-0 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
