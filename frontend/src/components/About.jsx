import React, { useState } from "react";
import me from "../images/me.jpg";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import GitButton from "./utils/GitButton";
import Contact from "./Contact";
import { HiMail } from "react-icons/hi";

const About = () => {
  const [openContact, setOpenContact] = useState(false);
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
        "py-10  md:px-0 md:py-0 md:h-[80vh] bg-[url(../public/images/grid.jpg)] gradient flex"
      )}
    >
      <div className="z-10 flex flex-col items-center justify-center px-4 lg:px-0 md:space-x-40 md:flex-row md:max-w-6xl md:mx-auto">
        <div
          className={classNames("flex flex-col md:text-left md:items-start")}
        >
          <div className={classNames("flex flex-col md:items-start", {})}>
            <h1 className="flex mb-1 space-x-2 text-2xl font-bold text-gray-900 md:mb-2 md:text-3xl">
              <span className="md:text-3xl">Hi, I am Faruk Spahic</span>{" "}
              <span className="emoji">👋</span>
            </h1>
            <p
              className={classNames("flex space-x-2 text-gray-500 md:text-xl")}
            >
              Full Stack Web Developer
            </p>
          </div>
          <p
            className={classNames(
              "pt-4 leading-7 text-sm md:text-[1rem] md:leading-loose",
              {}
            )}
          >
            Hi, I am Faruk Spahic, a Full Stack Developer specializing in
            creating dynamic web applications that solve real-world problems.
            With skills in both front-end and back-end development, I can
            deliver seamless user experiences.
            <span className="hidden md:inline">
              {" "}
              From e-commerce to social media platforms, I have experience
              working on a range of web applications, both large and small. I'm
              always looking to learn and incorporate new technologies to create
              innovative and impactful solutions that make a difference.
            </span>
          </p>

          {/* <div className="flex items-center my-5 space-x-1"> */}
          {/* <a href="">
              <AiFillLinkedin size={30} className="text-gray-900" />
            </a> */}
          {/* <a href="https://github.com/Faruk314" className="text-gray-900">
              <AiOutlineGithub className="" size={30} />
            </a> */}
          {/* </div> */}

          <div className="flex flex-col w-full my-10 space-y-2 md:space-y-0 md:space-x-2 md:w-max md:flex-row md:text-lg">
            <button
              onClick={() => {
                setOpenContact(true);
              }}
              className="flex items-center justify-center w-full hover:bg-white px-2 py-[0.6rem] border border-blue-500 space-x-2 font-medium text-white bg-blue-600 rounded-md md:px-4 md:py-2 hover:bg-transparent hover:text-blue-500"
            >
              <HiMail size={20} />
              <span>Contact</span>
            </button>

            <GitButton link={"https://github.com/Faruk314"} />
          </div>
        </div>

        <img
          className={classNames(
            "h-[19rem] hidden md:block md:w-max md:h-[25rem] noSelect",
            {
              "animate-right": myElementVisible,
            }
          )}
          src={me}
          alt="Portfolio"
        />
      </div>

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </div>
  );
};

export default About;
