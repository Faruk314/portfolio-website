import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "./ProjectCard";
import "swiper/css";

const projectCards = [
  {
    name: "Poker Online",
    src: "/images/cards/Poker.jpg",
    alt: "Poker",
    desc: "Online Poker game where players can create games, join existing poker rooms, and play real-time multiplayer matches with others.",
    technologies: [
      "React",
      "Typescript",
      "NodeJS",
      "Tailwind",
      "MySQL",
      "Socket.io",
      "Redis",
    ],
  },
  {
    name: "Chess Online",
    src: "/images/cards/Chess.jpg",
    alt: "Chess",
    desc: "Online Chess game that lets players enjoy multiplayer matches with friends and build their friends list. This game focuses on social interactions and multiplayer chess experiences.",
    technologies: [
      "React",
      "Typescript",
      "NodeJS",
      "Tailwind",
      "MySQL",
      "Socket.io",
      "Redis",
    ],
  },
  {
    name: "Tuzla Taxi",
    src: "/images/cards/tuzlataxi.jpg",
    alt: "Taxi",
    desc: "A client project I developed for a local taxi company in Tuzla. This website enables customers to conveniently book taxis through a user-friendly form. As the developer, I optimized the site for a seamless booking experience and enhanced the client's online presence.",
    technologies: ["React", "Tailwind", "PHP"],
  },
  {
    name: "A-farm",
    src: "/images/cards/afarm.jpg",
    alt: "Afarm",
    desc: "Developed a comprehensive Next.js e-commerce site for a herbal pharmacy. The site features a wide range of herbal products categorized by various health concerns, enabling customers to easily find natural remedies for their needs.",
    technologies: ["NextJS", "Tailwind"],
  },
];

export const ProjectSlider = () => {
  return (
    <div className="">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={2}
        slideToClickedSlide={true}
        navigation={true}
        className="max-w-5xl"
      >
        {projectCards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {({ isActive }) => (
              <ProjectCard isActive={isActive} card={card} index={index} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
