import { useTranslation } from "react-i18next";
import { ProjectSlider } from "./ProjectSlider";

const PersonalProjects = () => {
  const { t } = useTranslation("personalProjects");

  const projectCards = [
    {
      name: "Poker Online",
      logo: "/images/pokerImages/pokerlogo.png",
      alt: "Poker",
      desc: t("pokerText"),
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "postgres",
        "Socket.io",
        "Redis",
      ],
      image: "/images/pokerImages/table2.png",
      link: "https://poker.farukspahic.com/",
    },
    {
      name: "Chess Online",
      logo: "/images/chessImages/chessIcon.png",
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
      name: "Echo Room",
      logo: "/images/echoRoomImages/logo.webp", // Placeholder for now
      alt: "Echo Room",
      desc: t("echoText"),
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "Socket.io",
        "postgres",
        "Redis",
        "Mediasoup",
      ],
      image: "/images/echoRoomImages/echoRoom.png",
      link: "https://video-room.farukspahic.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="flex items-center bg-cover py-20 md:py-40"
    >
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm md:text-base">
            {t("badgeText")}
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t("titleOne")}
          </h2>
          <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto">
            {t("titleTwo")}
          </p>
        </div>

        <ProjectSlider projectCards={projectCards} />
      </div>
    </section>
  );
};

export default PersonalProjects;
