import React from "react";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import me from "../images/me.jpg";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const About = () => {
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const scrollToPage = (id) => {
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={myRef}
      id="about"
      className={classNames("h-[60rem] flex", {
        "animate-fade ": myElementVisible,
      })}
    >
      <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:max-w-5xl md:mx-auto">
        <img
          className={classNames("h-[18rem] md:h-[25rem]", {
            "animate-left": myElementVisible,
          })}
          src={me}
          alt="Portfolio"
        />

        <div
          className={classNames(
            "flex flex-col items-center px-2 text-center md:text-left md:items-start",
            {
              "animate-right": myElementVisible,
            }
          )}
        >
          <div className="flex flex-col items-center md:items-start">
            <h1 className="flex mb-4 space-x-2 text-2xl font-bold text-gray-900 md:text-3xl">
              <span className="md:text-3xl">Hi, I am Faruk Spahic</span>{" "}
              <span className="emoji">👋</span>
            </h1>
            <p className="flex space-x-2 font-medium text-gray-600 md:text-xl">
              Full Stack Web Developer
            </p>
          </div>
          <p className="pt-4 leading-7 text-sm md:text-[1rem]  md:leading-loose">
            Hi, I am Faruk Spahic, a Full Stack Developer specializing in
            creating dynamic web applications that solve real-world problems.
            With skills in both front-end and back-end development, I can
            deliver seamless user experiences.
          </p>

          <div className="flex items-center my-5 space-x-1">
            {/* <a href="">
              <AiFillLinkedin size={30} className="text-gray-900" />
            </a> */}
            <a href="https://github.com/Faruk314" className="text-gray-900">
              <AiOutlineGithub className="" size={30} />
            </a>
          </div>

          <div className="flex space-x-2 md:text-lg">
            <button
              onClick={() => scrollToPage("projects")}
              className="flex items-center px-2 py-2 space-x-2 font-medium text-white bg-gray-900 rounded-md md:px-4 md:py-2 hover:bg-gray-700"
            >
              <span className="icon"> visibility</span>
              <span>My projects</span>
            </button>

            <button
              onClick={() => scrollToPage("contact")}
              className="flex items-center px-2 py-2 space-x-1 font-medium text-black border border-black rounded-md md:space-x-2 md:px-4 md:py-2 hover:bg-gray-900 hover:text-white"
            >
              <AiOutlineMail size={20} />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
