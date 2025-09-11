import { useTranslation } from "react-i18next";
import { ProjectSlider } from "./ProjectSlider";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section
      id="projects"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
      className="flex items-center bg-cover py-20 md:py-40"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-[5rem] leading-none">
            {t("titleOne")}
          </h2>
          <p className="text-primary text-2xl md:text-3xl">{t("titleTwo")}</p>
        </div>

        <ProjectSlider />
      </div>
    </section>
  );
};

export default Projects;
