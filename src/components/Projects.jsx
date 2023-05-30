import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="pt-10 bg-gray-100">
      <div className="max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">My Projects</h1>
          <p className="text-xl font-medium text-gray-600">
            Check out some of my recent work.
          </p>
        </div>
        <div className="grid mt-12 space-y-10">
          <ProjectCard
            title={"UnityNet"}
            technologies={[
              "React",
              "Typescript",
              "NodeJS",
              "Tailwind",
              "MySQL",
              "Socket.io",
            ]}
            gitLink="https://github.com/Faruk314/UnityNetWeb"
            desc={
              "A versatile social media app that empowers users to chat, add friends, edit profiles, create posts, change profile pictures and cover photos, and receive notifications. With its user-friendly interface, UnityNet provides a seamless platform for connecting with others, expressing yourself, and staying updated on the latest activities."
            }
            image="/images/socialMedia.png"
          />
          <ProjectCard
            title={"Fashion Flock"}
            technologies={["React", "NodeJS", "Tailwind", "MongoDB"]}
            desc={
              "FashionFlock is designed to provide a seamless online shopping experience. With a user-friendly interface, secure payment integration using Stripe, and a versatile shopping cart feature, FashionFlock ensures an enjoyable and hassle-free journey for shoppers."
            }
            image={"/images/fashionFlock.png"}
            gitLink="https://github.com/Faruk314/FashionFlock"
          />

          <ProjectCard
            title={"Tuzla Taxi"}
            technologies={["React", "Tailwind", "PHP"]}
            desc={
              "A client project I developed for a local taxi company in Tuzla. This website enables customers to conveniently book taxis through a user-friendly form. As the developer, I optimized the site for a seamless booking experience and enhanced the client's online presence."
            }
            image={"/images/tuzlaTaxi.png"}
            liveLink={"https://tuzlataxi.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
