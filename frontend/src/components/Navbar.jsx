import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPage = (id) => {
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="z-20 text-black bg-white">
      <div className="px-4 mx-auto border-black lg:px-8">
        <div className="flex items-center justify-between max-w-5xl mx-auto py-7">
          {/* <a
            href="mailto:farukspahicdev@gmail.com"
            className="flex items-center space-x-2 font-bold underline text hover:text-gray-600"
          >
            <AiOutlineMail size={25} />
            <span className="text-[0.9rem] md:text-[1rem]">
              farukspahicdev@gmail.com
            </span>
          </a> */}

          <div>
            <h1 className="text-2xl font-bold">Faruk Spahic</h1>
            <span className="text-gray-500">Full Stack Web Dev</span>
          </div>

          <div className="relative p-2 bg-gray-200 rounded-md">
            <GiHamburgerMenu
              className="text-blue-600 md:hidden hover:cursor-pointer"
              size={20}
              onClick={toggleNav}
            />

            {isOpen && <MobileNav scrollToPage={scrollToPage} />}
          </div>

          <div className="items-center justify-center hidden md:flex">
            <div className="flex items-center  text-[1.09rem]">
              <span
                onClick={() => scrollToPage("about")}
                className="ml-5 hover:text-blue-500 hover:cursor-pointer"
              >
                About
              </span>
              <span
                onClick={() => scrollToPage("technologies")}
                className="ml-5 hover:text-blue-500 hover:cursor-pointer"
              >
                Technologies
              </span>

              <button
                onClick={() => scrollToPage("projects")}
                className="flex ml-5 items-center justify-center w-full px-2 py-[0.6rem] border border-blue-500 space-x-2 font-medium text-white bg-blue-600 rounded-md md:px-4 md:py-2 hover:bg-transparent hover:text-blue-500"
              >
                <span>Projects</span>
              </button>

              {/* <span
                onClick={() => scrollToPage("contact")}
                className="ml-8 hover:text-gray-300 hover:cursor-pointer"
              >
                Contact
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
