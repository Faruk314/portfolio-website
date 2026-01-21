import { useTranslation } from "react-i18next";
import { ProjectSlider } from "./ProjectSlider";

const ClientProjects = () => {
  const { t } = useTranslation("projects");

  const clientProjects = [
    {
      name: "Tuzla Taxi",
      logo: "/images/taxiImages/tuzlaTaxiLogo.png",
      alt: "Taxi",
      desc: t("tuzlaTaxiText"),
      technologies: ["React", "Tailwind", "PHP"],
      image: "/images/taxiImages/tuzlaTaxi.png",
      link: "https://www.tuzlataxi.com/",
    },
    {
      name: "A-FARM",
      src: "/images/cards/afarm.jpg",
      alt: "Afarm",
      desc: t("aFarmText"),
      technologies: ["NextJS", "Tailwind"],
      image: "/images/AfarmImages/home.png",
      link: "https://afarm-biljoteka.com/",
    },
    {
      name: "METAL REMONT",
      logo: "/images/metalRemontImages/metalRemontLogo.png",
      src: "/images/cards/afarm.jpg",
      alt: "MetalRemont",
      desc: t("metalRemontText"),
      technologies: ["React", "Tailwind"],
      image: "/images/metalRemontImages/metalRemontLogo.png",
      link: "https://www.metalremont.com/",
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
            CLIENT PROJECTS
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Projects for Clients
          </h2>
          <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto">
            Professional work delivered to real clients
          </p>
        </div>

        <ProjectSlider projectCards={clientProjects} />
      </div>
    </section>
  );
};

export default ClientProjects;
