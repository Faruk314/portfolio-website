import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full overflow-x-hidden md:py-20">
      <div className="flex flex-col max-w-5xl mx-auto space-y-10 md:space-y-20">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            My Projects
          </h1>
          <p className="text-gray-600 md:text-xl md:mb-10">
            Check out some of my recent work.
          </p>
        </div>

        <div className="grid grid-cols-2">
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
            liveLink={"https://tuzlataxi.com"}
            desc={
              "A versatile social media app that empowers users to chat, add friends, edit profiles, create posts, change profile pictures and cover photos, and receive notifications. With its user-friendly interface, UnityNet provides a seamless platform for connecting with others, expressing yourself, and staying updated on the latest activities."
            }
            image="/images/socialMedia.png"
          />

          <ProjectCard
            title="OnlineLudoGame"
            desc={
              "An online Ludo game that offers local and multiplayer modes, so you can enjoy matches with friends or find opponents easily."
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
            gitLink="https://github.com/Faruk314/OnlineLudoGame"
            liveLink={"https://tuzlataxi.com"}
            image="/images/ludoImages/login.png"
          />

          <ProjectCard
            title="ChessOnline"
            desc={
              "Online Chess game that lets players enjoy multiplayer matches with friends and build their friends list. This game focuses on social interactions and multiplayer chess experiences."
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
            gitLink="https://github.com/Faruk314/ChessOnline"
            liveLink={"https://tuzlataxi.com"}
            image="/images/chessImages/menu.png"
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
            gitLink="https://github.com/Faruk314/Slagalica"
            liveLink={"https://tuzlataxi.com"}
          />
          <ProjectCard
            title={"Fashion Flock"}
            technologies={["React", "NodeJS", "Tailwind", "MongoDB"]}
            desc={
              "FashionFlock is designed to provide a seamless online shopping experience. With a user-friendly interface, secure payment integration using Stripe, and a versatile shopping cart feature, FashionFlock ensures an enjoyable and hassle-free journey for shoppers."
            }
            image={"/images/fashionFlock.png"}
            gitLink="https://github.com/Faruk314/FashionFlock"
            liveLink={"https://fashionflock.farukspahic.com/"}
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
    </section>
  );
};

export default Projects;
