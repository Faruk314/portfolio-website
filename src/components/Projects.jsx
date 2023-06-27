import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="container flex flex-col mx-auto space-y-10 md:space-y-20 md:mt-20"
    >
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
          My Projects
        </h1>
        <p className="font-medium text-gray-600 md:text-xl md:mb-10">
          Check out some of my recent work.
        </p>
      </div>

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
        title="TicTacToe Online"
        desc={
          "Online Tic Tac Toe game that allows players to enjoy multiplayer matches with friends, add players to friends, and even play against the computer in both easy and hard difficulty modes"
        }
        technologies={[
          "React",
          "Typescript",
          "NodeJS",
          "Tailwind",
          "MySQL",
          "Socket.io",
          "Redis",
        ]}
      />
      <ProjectCard
        title="Slagalica"
        desc={
          "An engaging game that offers fun and challenges for players of all ages. Test your knowledge and skills across various categories, including puzzles, trivia, and word games.Have the exciting opportunity to invite your friends to play and also enjoy single-player gameplay."
        }
        technologies={[
          "React",
          "Typescript",
          "NodeJS",
          "Tailwind",
          "MySQL",
          "Socket.io",
          "Redis",
        ]}
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
  );
};

export default Projects;
