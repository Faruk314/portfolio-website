import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const About = () => {
  const scrollToPage = (id) => {
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="about" className="bg-white h-[55rem] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="Portfolio"
            />
          </div>
          <div>
            <div className="">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 flex space-x-2">
                <span>Hi, I'm Faruk Spahic</span>{" "}
                <span className="emoji">👋</span>
              </h1>
              <p className="text-xl font-medium text-gray-600 flex space-x-2">
                <span>Full Stack Web Developer</span>

                <a href="https://github.com/Faruk314">
                  <AiOutlineGithub className="" size={25} />
                </a>
              </p>
            </div>
            <p className="leading-loose pt-4">
              Hi, I'm Faruk Spahic, a Full Stack Developer specializing in
              creating dynamic web applications that solve real-world problems.
              With skills in both front-end and back-end development, I can
              deliver seamless user experiences. From e-commerce to social media
              platforms, I have experience working on a range of web
              applications, both large and small. I'm always looking to learn
              and incorporate new technologies to create innovative and
              impactful solutions that make a difference.
            </p>

            <div className="mt-5">
              <button
                onClick={() => scrollToPage("projects")}
                className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 flex items-center space-x-2"
              >
                <span className="icon"> visibility</span>
                <span>View My Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
