import React from "react";
import { GrView } from "react-icons/gr";

const Home = () => {
  const scrollToPage = (id) => {
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="bg-gray-100 h-[50rem] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hi, I'm Faruk Spahic
          </h1>
          <p className="text-xl font-medium text-gray-600">
            Full Stack Web Developer
          </p>
        </div> */}
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Hi, I'm Faruk Spahic
              </h1>
              <p className="text-xl font-medium text-gray-600">
                Full Stack Web Developer
              </p>
            </div>
            <p className="text-gray-600 leading-loose pt-4">
              Hello, I'm Faruk Spahic, a Full Stack Developer with a passion for
              creating dynamic web applications that solve real-world problems.I
              have experience working with a range of technologies, including
              HTML, CSS, JavaScript, Node.js, React, and more. As a Full Stack
              Developer, I'm skilled in both front-end and back-end development,
              which allows me to create seamless user experiences from start to
              finish.
            </p>
            <div className="mt-6">
              <button
                onClick={() => scrollToPage("projects")}
                className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 flex items-center space-x-2"
              >
                <GrView className="bg-white" />
                <span>View My Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
