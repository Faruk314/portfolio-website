import React from "react";
import classNames from "classnames";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";

const ClientProjects = () => {
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
      desc: "Developed a comprehensive Next.js e-commerce site for a herbal pharmacy. The site features a wide range of herbal products categorized by various health concerns, enabling customers to easily find natural remedies for their needs. Leveraged Next.js for a smooth and dynamic user experience.",
      liveLink: "https://afarm-biljoteka.com/",
    },

    {
      title: "Tuzla Taxi",
      shortDesc: "Taxi Company Site",
      technologies: ["React", "Tailwind", "PHP"],
      desc: "A client project I developed for a local taxi company in Tuzla. This website enables customers to conveniently book taxis through a user-friendly form. As the developer, I optimized the site for a seamless booking experience and enhanced the client's online presence.",
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
            Client projects
          </h1>
          <p className="text-gray-600 md:text-xl">
            Check out some of the projects I did for clients
          </p>
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
