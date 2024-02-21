import React from "react";
import classNames from "classnames";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const ClientProjects = () => {
  const { t } = useTranslation("client");
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const projects = [
    {
      title: "A-FARM",
      shortDesc: "Herbal pharmacy",
      technologies: ["NextJS", "Tailwind"],
      desc: t("aFarmText"),
      liveLink: "https://afarm-biljoteka.com/",
    },

    {
      title: "Tuzla Taxi",
      shortDesc: "Taxi Company Site",
      technologies: ["React", "Tailwind", "PHP"],
      desc: t("tuzlaTaxiText"),
      image: "/images/tuzlaTaxi.png",
      liveLink: "https://tuzlataxi.com",
    },
  ];

  return (
    <section id="projects" className="w-full overflow-x-hidden">
      <div ref={myRef} className="flex flex-col max-w-6xl mx-auto">
        <div
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

export default ClientProjects;
