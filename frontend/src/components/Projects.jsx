import { useTranslation } from "react-i18next";
import { ProjectSlider } from "./ProjectSlider";

const Projects = () => {
  const { t } = useTranslation("about");

  return (
    <section
      id="projects"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
      className="flex items-center bg-cover py-40"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-[5rem] leading-none">My projects</h2>
          <p className="text-primary text-2xl md:text-3xl">
            Check out some of my recent work
          </p>
        </div>

        <ProjectSlider />
      </div>
    </section>
  );
};

export default Projects;
