import React from "react";
import classNames from "classnames";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import AfarmLogo from "./utils/AfarmLogo";

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
      id: 1,
      image: "/images/apharmlogo.jpg",
      logo: <AfarmLogo />,
    },

    {
      id: 2,
      image: "/images/taxiImages/tuzlaTaxiLogo.png",
    },
  ];

  return (
    <section id="projects" className="w-full overflow-x-hidden">
      <div ref={myRef} className="flex flex-col max-w-6xl mx-auto">
        <div
          className={classNames("p-4 lg:p-0 opacity-0", {
            "fade-in": myElementVisible,
          })}
        >
          <h1 className="mb-1 text-3xl uppercase font-black text-gray-900 md:text-4xl">
            {t("titleOne")}
          </h1>
          <p className="text-gray-600 md:text-xl">{t("titleTwo")}</p>
        </div>

        <div className="grid gap-4 lg:gap-10 px-4 my-5 md:my-10 md:px-4 lg:px-0 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
