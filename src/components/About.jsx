import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import me from "../images/me.jpg";

const About = () => {
  const scrollToPage = (id) => {
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="about" className="h-[60rem] flex">
      <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 md:max-w-5xl md:mx-auto">
        <img className="h-[20rem] md:h-[25rem]" src={me} alt="Portfolio" />

        <div className="flex flex-col items-center px-2 text-center md:text-left md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="flex mb-4 space-x-2 text-2xl font-bold text-gray-900 md:text-3xl">
              <span className="">Hi, I am Faruk Spahic</span>{" "}
              <span className="emoji">👋</span>
            </h1>
            <p className="flex space-x-2 text-xl font-medium text-gray-600">
              Full Stack Web Developer
            </p>
          </div>
          <p className="pt-4 leading-loose">
            Hi, I am Faruk Spahic, a Full Stack Developer specializing in
            creating dynamic web applications that solve real-world problems.
            With skills in both front-end and back-end development, I can
            deliver seamless user experiences. From e-commerce to social media
            platforms, I have experience working on a range of web applications,
            both large and small. I'm always looking to learn and incorporate
            new technologies to create innovative and impactful solutions that
            make a difference.
          </p>

          <div className="flex items-center my-5 space-x-1">
            <a href="">
              <AiFillLinkedin size={30} className="text-gray-900" />
            </a>
            <a href="https://github.com/Faruk314" className="text-gray-900">
              <AiOutlineGithub className="" size={30} />
            </a>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => scrollToPage("projects")}
              className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700"
            >
              <span className="icon"> visibility</span>
              <span>View My Projects</span>
            </button>

            <button className="flex items-center px-4 py-2 space-x-2 font-medium text-black border border-black rounded-md hover:bg-gray-900 hover:text-white">
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
