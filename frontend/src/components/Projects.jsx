import React from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const Projects = () => {
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
      desc: "A versatile social media app that empowers users to chat, add friends, edit profiles, create posts, change profile pictures and cover photos, and receive notifications. With its user-friendly interface, UnityNet provides a seamless platform for connecting with others, expressing yourself, and staying updated on the latest activities.",
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
      desc: "Online Chess game that lets players enjoy multiplayer matches with friends and build their friends list. This game focuses on social interactions and multiplayer chess experiences.",
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
      desc: "An online Ludo game that offers local and multiplayer modes, so you can enjoy matches with friends or find opponents easily.",
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
      desc: "An engaging game that offers fun and challenges for players of all ages. Test your knowledge and skills across various categories, including puzzles, trivia, and word games. Have the exciting opportunity to invite your friends to play and also enjoy single-player gameplay.",
      image: "/images/slagalica.png",
    },
    {
      title: "Fashion Flock",
      shortDesc: "E-Commerc Site",
      technologies: ["React", "NodeJS", "Tailwind", "MongoDB"],
      desc: "FashionFlock is designed to provide a seamless online shopping experience. With a user-friendly interface, secure payment integration using Stripe, and a versatile shopping cart feature, FashionFlock ensures an enjoyable and hassle-free journey for shoppers.",
      image: "/images/fashionFlock.png",
      gitLink: "https://github.com/Faruk314/FashionFlock",
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
      <div className="flex flex-col max-w-5xl mx-auto">
        <div
          ref={myRef}
          className={classNames("p-4 lg:p-0", {
            "animate-up": myElementVisible,
          })}
        >
          <h1 className="mb-1 text-2xl font-bold text-gray-900 md:mb-2 md:text-3xl">
            My Projects
          </h1>
          <p className="text-gray-600 md:text-xl">
            Check out some of my recent work.
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

export default Projects;
