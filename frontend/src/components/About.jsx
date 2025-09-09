import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import PrimaryBtn from "./PrimaryBtn";

const About = ({ setOpenContact }) => {
  const { t } = useTranslation("about");
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={aboutRef}
      style={{ backgroundImage: "url(/images/background.jpg)" }}
      className="flex items-center bg-cover bg-center min-h-screen pb-28"
    >
      <div className="container flex flex-col md:flex-row items-center space-x-14 mb-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-10">
          <img
            src="/images/me.png"
            alt="Logo"
            width={200}
            height={200}
            className="md:hidden rounded-full"
          />

          <div
            className={classNames("flex flex-col space-y-2", {
              "transition-left": aboutVisible,
            })}
          >
            <h2 className="text-5xl md:text-[5.5rem] leading-none">
              {t("title")}
            </h2>
            <p className="text-primary text-2xl md:text-4xl">{t("text")}</p>
          </div>

          <PrimaryBtn
            onClick={() => setOpenContact(true)}
            className="px-20 text-2xl md:text-3xl"
          >
            {t("buttonText")}
          </PrimaryBtn>
        </div>

        <img
          src="/images/me.png"
          alt="Logo"
          width={370}
          height={370}
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default About;
