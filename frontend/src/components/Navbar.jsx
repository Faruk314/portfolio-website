import classNames from "classnames";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const scrollToPage = (id) => {
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative z-20 text-black bg-white                                                                                                                                                                           ">
      <div className="px-4 mx-auto border-black lg:px-8">
        <div className="flex items-center justify-between max-w-6xl mx-auto py-7 md:py-10 ">
          <div>
            <h1 className="text-2xl font-bold">Faruk Spahic</h1>
            <span className="text-gray-500">Full Stack Web Dev</span>
          </div>

          <div className="p-2 bg-gray-200 rounded-md md:hidden">
            {!isOpen && (
              <GiHamburgerMenu
                className="text-blue-600 hover:cursor-pointer"
                size={20}
                onClick={toggleNav}
              />
            )}

            {isOpen && (
              <IoMdClose
                className="text-blue-600 hover:cursor-pointer"
                size={20}
                onClick={toggleNav}
              />
            )}
          </div>

          <div
            className={classNames(
              "absolute right-0 w-full bg-white top-[5.5rem] md:hidden",
              {
                open: isOpen,
                close: !isOpen,
              }
            )}
          >
            <div className="py-4 text-gray-700 bg-white border-b">
              <span
                onClick={() => scrollToPage("about")}
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                About
              </span>
              <span
                onClick={() => scrollToPage("technologies")}
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                Technologies
              </span>
              <span
                onClick={() => scrollToPage("projects")}
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                Projects
              </span>
            </div>
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
