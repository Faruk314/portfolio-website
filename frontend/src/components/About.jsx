import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import PrimaryBtn from "./PrimaryBtn";
import { FaGithub } from "react-icons/fa";

const About = ({ setOpenContact }) => {
  const { t } = useTranslation("about");
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex items-center min-h-screen pb-28 relative overflow-hidden"
    >
      <div className="container flex flex-col md:flex-row items-center space-x-14 mb-20 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-10">
          <div className="relative md:hidden">
            <img
              src="/images/me.png"
              alt="Logo"
              width={200}
              height={200}
              className="rounded-3xl unselectable profile-image-float"
            />
            <a
              href="https://github.com/Faruk314"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 right-0 bg-white rounded-full p-1 text-black shadow-lg hover:scale-110 transition-transform"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <div
            className={classNames("flex flex-col space-y-4", {
              "transition-left": aboutVisible,
            })}
          >
            <span className="inline-block self-center md:self-start w-max px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm md:text-base">
              FARUK SPAHIC
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {t("title")}
            </h2>
            <p className="text-2xl md:text-3xl text-primary max-w-3xl">
              {t("text")}
            </p>
          </div>

          <PrimaryBtn
            onClick={() => setOpenContact(true)}
            className="px-20 text-2xl md:text-3xl"
          >
            {t("buttonText")}
          </PrimaryBtn>
        </div>

        <div className="relative">
          <img
            src="/images/me.png"
            alt="Logo"
            width={370}
            height={370}
            className="hidden md:block rounded-3xl unselectable profile-image-float"
          />
          <a
            href="https://github.com/Faruk314"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex absolute bottom-0 right-0 bg-white rounded-full p-2 text-black shadow-lg hover:scale-110 transition-transform"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
