import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

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
      className="bg-white text-black"
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
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="font-bold text-3xl">Faruk Spahic</span>
            </a>
          </div>

          <div className="relative">
            <GiHamburgerMenu
              className="md:hidden hover:cursor-pointer"
              size={25}
              onClick={toggleNav}
            />

            {isOpen && <MobileNav scrollToPage={scrollToPage} />}
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center text-1xl font-bold">
              <span
                onClick={() => scrollToPage("home")}
                href="/"
                className="ml-8 hover:text-gray-300 hover:cursor-pointer"
              >
                Home
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
              <span
                onClick={() => scrollToPage("contact")}
                className="ml-8 hover:text-gray-300 hover:cursor-pointer"
              >
                Contact
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
