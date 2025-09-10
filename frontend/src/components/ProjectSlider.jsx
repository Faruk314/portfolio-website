import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import "swiper/css";

export const ProjectSlider = () => {
  const { t } = useTranslation("projects");

  const projectCards = [
    {
      name: "Poker Online",
      src: "/images/cards/Poker.jpg",
      alt: "Poker",
      desc: t("pokerText"),
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
      desc: t("chessText"),
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
      desc: t("tuzlaTaxiText"),
      technologies: ["React", "Tailwind", "PHP"],
    },
    {
      name: "A-farm",
      src: "/images/cards/afarm.jpg",
      alt: "Afarm",
      desc: t("aFarmText"),
      technologies: ["NextJS", "Tailwind"],
    },
  ];

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
