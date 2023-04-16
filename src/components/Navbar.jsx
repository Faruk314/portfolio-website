import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

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
      className="bg-gray-900"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <a href="https://github.com/Faruk314">
          <AiOutlineGithub
            className="fixed bottom-5 left-5 hover:translate-y-[-0.3rem] transition-all"
            size={50}
          />
        </a>
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-white font-bold text-3xl">FS</span>
            </a>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center">
              <span
                onClick={() => scrollToPage("home")}
                href="/"
                className="ml-8 text-sm font-medium text-white hover:text-gray-300 hover:cursor-pointer"
              >
                Home
              </span>
              <span
                onClick={() => scrollToPage("technologies")}
                className="ml-8 text-sm font-medium text-white hover:text-gray-300 hover:cursor-pointer"
              >
                Technologies
              </span>
              <span
                onClick={() => scrollToPage("projects")}
                className="ml-8 text-sm font-medium text-white hover:text-gray-300 hover:cursor-pointer"
              >
                Projects
              </span>
              <span
                onClick={() => scrollToPage("contact")}
                className="ml-8 text-sm font-medium text-white hover:text-gray-300 hover:cursor-pointer"
              >
                Contact
              </span>
            </div>

            <div className="md:hidden">
              <button
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                onClick={toggleNav}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path
                    className={isOpen ? "hidden" : "block"}
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className={isOpen ? "block" : "hidden"}
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="bg-gray-800 py-4">
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-indigo-600"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-indigo-600"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-indigo-600"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-indigo-600"
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
