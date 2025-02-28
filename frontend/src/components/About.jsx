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
        "py-7 md:px-0 md:py-0 md:h-[80vh] gradient flex justify-center"
      )}
    >
      <div className="z-10 flex flex-col items-center justify-center px-4 xl:px-0 md:flex-row md:max-w-6xl md:mx-auto">
        <div
          className={classNames("flex flex-col md:text-left md:items-start")}
        >
          <img
            className={classNames(
              "h-[12rem] w-[12.5rem] md:hidden noSelect mx-auto"
            )}
            src={me}
            alt="Portfolio"
          />

          <div
            className={classNames("flex flex-col items-center md:items-start", {
              "animate-left": myElementVisible,
            })}
          >
            <h1 className="flex space-x-2 text-2xl font-black text-gray-900">
              <span className="text-3xl text-center md:text-left md:text-6xl">
                {t("title")}
              </span>{" "}
            </h1>
          </div>
          <p
            className={classNames(
              "pt-2 md:pt-4 md:block text-center max-w-[40rem] text-[1rem] md:text-left text-sm md:text-[1.2rem] leading-7 tracking-wider",
              {
                scrolled: myElementVisible,
              }
            )}
          >
            {t("text")}
          </p>

          <div className="flex w-full justify-center mt-6 md:my-10 space-x-2 md:w-max md:flex-row md:text-lg">
            <button
              onClick={() => {
                document.body.classList.add("no-overflow");
                setOpenContact(true);
              }}
              className="flex items-center shadow-md duration-200 justify-center px-7 hover:bg-white px-2 py-[0.6rem] border border-blue-500 space-x-2 font-medium text-white bg-blue-600 rounded-full md:px-12 md:py-2 hover:bg-transparent hover:text-blue-500"
            >
              <HiMail size={20} />
              <span>{t("buttonText")}</span>
            </button>

            <GitButton link={"https://github.com/Faruk314"} />
          </div>
        </div>

        <img
          className={classNames(
            "h-[19rem] hidden md:block md:w-max md:h-[20rem] lg:h-[25rem] noSelect"
          )}
          src={me}
          alt="Portfolio"
        />
      </div>
    </div>
  );
};

export default About;
