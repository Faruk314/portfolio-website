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
    <nav
      className="z-20 text-black bg-white"
      style={
        scroll
          ? {
              position: "fixed",
              top: 0,
              width: "100%",
              transition: "0.5s ease-in",
            }
          : { position: "" }
      }
    >
      <div className="px-4 mx-auto border-black shadow-md sm:px-6 lg:px-8">
        <div className="container flex items-center justify-between h-20 mx-auto">
          <a
            href="mailto:farukspahicdev@gmail.com"
            className="flex items-center space-x-2 font-bold underline text hover:text-gray-600"
          >
            <AiOutlineMail size={25} />
            <span className="text-[0.9rem] md:text-[1rem]">
              farukspahicdev@gmail.com
            </span>
          </a>

          <div className="relative">
            <GiHamburgerMenu
              className="md:hidden hover:cursor-pointer"
              size={25}
              onClick={toggleNav}
            />

            {isOpen && <MobileNav scrollToPage={scrollToPage} />}
          </div>

          <div className="items-center justify-center hidden md:flex">
            <div className="flex items-center font-bold text-1xl">
              <span
                onClick={() => scrollToPage("about")}
                className="ml-8 hover:text-gray-300 hover:cursor-pointer"
              >
                About
              </span>
              <span
                onClick={() => scrollToPage("technologies")}
                className="ml-8 hover:text-gray-300 hover:cursor-pointer"
              >
                Technologies
              </span>
              <span
                onClick={() => scrollToPage("projects")}
                className="ml-8 hover:text-gray-300 hover:cursor-pointer"
              >
                Projects
              </span>

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
