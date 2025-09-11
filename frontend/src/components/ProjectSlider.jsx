import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

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
      image: "/images/pokerImages/table2.png",
      link: "https://poker.farukspahic.com/",
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
      image: "/images/chessImages/game.png",
      link: "https://chess.farukspahic.com/",
    },
    {
      name: "Tuzla Taxi",
      src: "/images/cards/tuzlataxi.jpg",
      alt: "Taxi",
      desc: t("tuzlaTaxiText"),
      technologies: ["React", "Tailwind", "PHP"],
      image: "/images/taxiImages/tuzlaTaxi.png",
      link: "https://www.tuzlataxi.com/",
    },
    {
      name: "A-farm",
      src: "/images/cards/afarm.jpg",
      alt: "Afarm",
      desc: t("aFarmText"),
      technologies: ["NextJS", "Tailwind"],
      image: "/images/AfarmImages/home.png",
      link: "https://afarm-biljoteka.com/",
    },
  ];

  return (
    <div className="unselectable">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={2}
        className="max-w-5xl"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true }}
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
