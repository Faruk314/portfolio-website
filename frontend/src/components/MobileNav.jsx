import React from "react";

const MobileNav = ({ scrollToPage }) => {
  return (
    <div className="absolute right-0 z-30 top-10 md:hidden">
      <div className="py-4 bg-gray-800">
        <span
          onClick={() => scrollToPage("about")}
          className="block px-4 py-2 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          About
        </span>
        <span
          onClick={() => scrollToPage("technologies")}
          className="block px-4 py-2 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          Technologies
        </span>
        <span
          onClick={() => scrollToPage("projects")}
          className="block px-4 py-2 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          Projects
        </span>

        {/* <span
          onClick={() => scrollToPage("contact")}
          className="block px-4 py-2 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          Contact
        </span> */}
      </div>
    </div>
  );
};

export default MobileNav;
