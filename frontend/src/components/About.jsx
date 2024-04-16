import me from "../images/me.jpg";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import GitButton from "./utils/GitButton";
import { HiMail } from "react-icons/hi";

const About = ({ setOpenContact }) => {
  const { t } = useTranslation("about");
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={myRef}
      id="about"
      className={classNames(
        "py-7 md:px-0 md:py-0 md:h-[80vh] bg-[url(../public/images/grid.jpg)] gradient flex"
      )}
    >
      <div className="z-10 flex flex-col items-center justify-center px-4 lg:px-0 md:space-x-40 md:flex-row md:max-w-6xl md:mx-auto">
        <div
          className={classNames("flex flex-col md:text-left md:items-start")}
        >
          <img
            className={classNames(
              "h-[12rem] w-[12.5rem] md:hidden noSelect mx-auto",
              {
                scrolled: myElementVisible,
              }
            )}
            src={me}
            alt="Portfolio"
          />

          <div
            className={classNames("flex flex-col items-center md:items-start", {
              scrolled: myElementVisible,
            })}
          >
            <h1 className="flex mb-1 space-x-2 text-2xl font-bold text-gray-900 md:mb-2 md:text-3xl">
              <span className="md:text-3xl text-center">{t("title")}</span>{" "}
              <span className="emoji">👋</span>
            </h1>
            <p
              className={classNames("flex space-x-2 text-gray-500 md:text-xl", {
                scrolled: myElementVisible,
              })}
            >
              Full Stack Web Developer
            </p>
          </div>
          <p
            className={classNames(
              "pt-4 leading-7 hidden md:block text-center md:text-left text-sm md:text-[1rem] md:leading-loose",
              {
                scrolled: myElementVisible,
              }
            )}
          >
            {t("text")}
          </p>

          <p
            className={classNames(
              "pt-4 leading-7 md:hidden text-center md:text-left text-sm md:text-[1rem] md:leading-loose",
              {
                scrolled: myElementVisible,
              }
            )}
          >
            {t("mobileText")}
          </p>

          <div className="flex flex-col w-full my-7 space-y-2 md:space-y-0 md:space-x-2 md:w-max md:flex-row md:text-lg">
            <button
              onClick={() => {
                document.body.classList.add("no-overflow");
                setOpenContact(true);
              }}
              className="flex items-center justify-center w-full hover:bg-white px-2 py-[0.6rem] border border-blue-500 space-x-2 font-medium text-white bg-blue-600 rounded-md md:px-4 md:py-2 hover:bg-transparent hover:text-blue-500"
            >
              <HiMail size={20} />
              <span>{t("buttonText")}</span>
            </button>

            <GitButton link={"https://github.com/Faruk314"} />
          </div>
        </div>

        <img
          className={classNames(
            "h-[19rem] hidden lg:block md:w-max md:h-[25rem] noSelect",
            {
              scrolled: myElementVisible,
            }
          )}
          src={me}
          alt="Portfolio"
        />
      </div>
    </div>
  );
};

export default About;
