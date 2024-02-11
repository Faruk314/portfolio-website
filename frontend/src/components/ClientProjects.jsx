import React from "react";
import classNames from "classnames";
import ProjectCard from "./ProjectCard";

const ClientProjects = () => {
  const projects = [
    {
      title: "A-FARM",
      shortDesc: "Herbal pharmacy",
      technologies: ["NextJS", "Tailwind", "Medusa"],
      desc: "A client project I developed for a local taxi company in Tuzla. This website enables customers to conveniently book taxis through a user-friendly form. As the developer, I optimized the site for a seamless booking experience and enhanced the client's online presence.",
      image: "/images/AfarmImages/home.png",
      liveLink: "https://tuzlataxi.com",
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
      <div className="flex flex-col max-w-6xl mx-auto">
        <div className={classNames("p-4 lg:p-0", {})}>
          <h1 className="mb-1 text-2xl font-bold text-gray-900 md:mb-2 md:text-3xl">
            Client projects
          </h1>
          <p className="text-gray-600 md:text-xl">
            Check out some of the projects I did for clients
          </p>
        </div>

        <div className="grid justify-center gap-10 px-4 my-5 md:my-10 md:px-4 lg:px-0 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
