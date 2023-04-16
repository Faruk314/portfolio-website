import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-100 pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl font-medium text-gray-600">
            Check out some of my recent work.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title={"Facebook Clone"}
            technologies={[
              "React",
              "Typescript",
              "NodeJS",
              "Tailwind CSS",
              "MySQL",
              "Socket.io",
            ]}
          />
          <ProjectCard
            title={"Ecommerc Site"}
            technologies={["React", "NodeJS", "Tailwind CSS", "MongoDB"]}
          />
          <ProjectCard
            title={"Something else"}
            technologies={["React", "NodeJS", "Tailwind CSS", "MongoDB"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
